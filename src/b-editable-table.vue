<template>
  <b-table
    v-click-outside="handleClickOut"
    v-bind="{ ...$props, ...$attrs }"
    v-on="$listeners"
  >
    <template v-for="(field, index) in fields" #[`cell(${field.key})`]="data">
      <b-form-datepicker
        @keydown.native="handleKeydown($event, index, data)"
        @input="$emit('input-change', $event, data)"
        v-bind="{ ...field }"
        v-model="items[data.index][field.key]"
        v-focus="'date'"
        v-if="
          field.type === 'date' &&
            selectedRow === data.index &&
            selectedCell === field.key &&
            field.editable
        "
        :key="index"
        :type="field.type"
      ></b-form-datepicker>
      <b-form-select
        @keydown.native="handleKeydown($event, index, data)"
        @change="$emit('input-change', $event, data)"
        v-bind="{ ...field }"
        v-model="items[data.index][field.key]"
        v-focus
        v-else-if="
          field.type === 'select' &&
            selectedRow === data.index &&
            selectedCell === field.key &&
            field.editable
        "
        :key="index"
      ></b-form-select>
      <b-form-checkbox
        @keydown.native="handleKeydown($event, index, data)"
        @change="$emit('input-change', $event, data)"
        v-bind="{ ...field }"
        v-model="items[data.index][field.key]"
        v-focus="'checkbox'"
        v-else-if="
          field.type === 'checkbox' &&
            selectedRow === data.index &&
            selectedCell === field.key &&
            field.editable
        "
        :key="index"
      ></b-form-checkbox>
      <b-form-rating
        @keydown="handleKeydown($event, index, data)"
        @change="$emit('input-change', $event, data)"
        v-bind="{ ...field }"
        v-model="items[data.index][field.key]"
        v-focus
        v-else-if="
          field.type === 'rating' &&
            field.type &&
            selectedRow === data.index &&
            selectedCell === field.key &&
            field.editable
        "
        :key="index"
        :type="field.type"
      ></b-form-rating>
      <b-form-input
        @keydown="handleKeydown($event, index, data)"
        @input="$emit('input-change', $event, data)"
        v-bind="{ ...field }"
        v-model="items[data.index][field.key]"
        v-focus
        v-else-if="
          field.type &&
            selectedRow === data.index &&
            selectedCell === field.key &&
            field.editable
        "
        :key="index"
        :type="field.type"
      ></b-form-input>
      <span
        class="data-cell"
        @click="handleEditCell($event, data.index, field.key)"
        v-else
        :key="index"
      >
        <slot
          v-if="$scopedSlots[`cell-${field.key}`]"
          :name="`cell-${field.key}`"
          v-bind="data"
        ></slot>
        <template v-else>{{ data.value }}</template>
      </span>
    </template>
    <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope"
      ><slot :name="slot" v-bind="scope"
    /></template>
  </b-table>
</template>

<script lang="ts">
import {
  BTable,
  BFormDatepicker,
  BFormInput,
  BFormSelect,
  BFormCheckbox,
  BFormRating,
} from "bootstrap-vue";
import Vue from "vue";

export default Vue.extend({
  name: "BEditableTable",
  components: {
    BTable,
    BFormDatepicker,
    BFormInput,
    BFormSelect,
    BFormCheckbox,
    BFormRating,
  },
  props: {
    fields: Array,
    items: Array,
  },
  directives: {
    focus: {
      inserted: function(el: any, event: any) {
        switch (event.value) {
          case "checkbox":
            el.children[0].focus();
          case "date":
            el.children[0].focus();
          default:
            el.focus();
        }
      },
    },
    clickOutside: {
      bind: function(el: any, binding: any, vnode: any) {
        el.clickOutsideEvent = function(event: any) {
          if (!(el == event.target || el.contains(event.target))) {
            if (document.contains(event.target)) {
              vnode.context[binding.expression](event);
            }
          }
        };
        document.addEventListener("click", el.clickOutsideEvent);
      },
      unbind: function(el: any) {
        document.removeEventListener("click", el.clickOutsideEvent);
      },
    },
  },
  data(): any {
    return {
      selectedCell: {
        type: String,
        default: null,
      },
      selectedRow: {
        type: Object,
        default: null,
      },
    };
  },
  methods: {
    handleEditCell(e: any, index: number, name: string) {
      e.stopPropagation();
      this.selectedCell = name;
      this.selectedRow = index;
    },
    handleKeydown(e: any, index: number, data: any) {
      if (e.code === "Tab") {
        e.preventDefault();
        let fieldIndex = this.fields.length - 1 === index ? 0 : index + 1;
        let rowIndex =
          this.fields.length - 1 === index ? data.index + 1 : data.index;
        let i = fieldIndex;
        // Find next editable field
        while (!this.fields[i].editable) {
          if (i === this.fields.length - 1) {
            i = 0;
            rowIndex++;
          } else {
            i++;
          }
        }
        fieldIndex = i;
        this.selectedCell = this.fields[fieldIndex].key;
        this.selectedRow = rowIndex;
      } else if (e.code === "Escape") {
        e.preventDefault();
        this.selectedCell = null;
        this.selectedRow = null;
      }
    },
    handleClickOut() {
      this.selectedCell = null;
      this.selectedRow = null;
    },
  },
});
</script>

<style>
.data-cell {
  display: flex;
  width: 100%;
}
</style>

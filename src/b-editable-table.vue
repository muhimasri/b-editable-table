<template>
  <b-table
    v-click-outside="handleClickOut"
    v-bind="{ ...$props, ...$attrs }"
    v-on="handleListeners($listeners)"
    :items="tableItems"
  >
    <template v-for="(field, index) in fields" #[`cell(${field.key})`]="data">
      <b-form-datepicker
        @keydown.native="handleKeydown($event, index, data)"
        @input="(value) => inputHandler(value, data, field.key)"
        v-bind="{ ...field }"
        v-focus="'date'"
        v-if="
          field.type === 'date' &&
            tableItems[data.index].isEdit &&
            selectedCell === field.key &&
            field.editable
        "
        :key="index"
        :type="field.type"
        :value="tableItems[data.index][field.key]"
      ></b-form-datepicker>
      <b-form-select
        @keydown.native="handleKeydown($event, index, data)"
        @change="(value) => inputHandler(value, data, field.key)"
        v-bind="{ ...field }"
        v-focus
        v-else-if="
          field.type === 'select' &&
            tableItems[data.index].isEdit &&
            selectedCell === field.key &&
            field.editable
        "
        :key="index"
        :value="tableItems[data.index][field.key]"
      ></b-form-select>
      <b-form-checkbox
        @keydown.native="handleKeydown($event, index, data)"
        @change="(value) => inputHandler(value, data, field.key)"
        v-bind="{ ...field }"
        v-focus="'checkbox'"
        v-else-if="
          field.type === 'checkbox' &&
            tableItems[data.index].isEdit &&
            selectedCell === field.key &&
            field.editable
        "
        :key="index"
        :checked="tableItems[data.index][field.key]"
      ></b-form-checkbox>
      <b-form-rating
        @keydown="handleKeydown($event, index, data)"
        @change="(value) => inputHandler(value, data, field.key)"
        v-bind="{ ...field }"
        v-focus
        v-else-if="
          field.type === 'rating' &&
            field.type &&
            tableItems[data.index].isEdit &&
            selectedCell === field.key &&
            field.editable
        "
        :key="index"
        :type="field.type"
        :value="tableItems[data.index][field.key]"
      ></b-form-rating>
      <b-form-input
        @keydown="handleKeydown($event, index, data)"
        @input="(value) => inputHandler(value, data, field.key)"
        v-bind="{ ...field }"
        v-focus
        v-else-if="
          field.type &&
            tableItems[data.index].isEdit &&
            selectedCell === field.key &&
            field.editable
        "
        :key="index"
        :type="field.type"
        :value="tableItems[data.index][field.key]"
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
    value: Array
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
      tableItems: this.value ? this.value.map((item: any) => ({...item, isEdit: false})) : this.items.map((item: any) => ({...item, isEdit: false})),
      updatedTable: this.value
    };
  },
  methods: {
    handleEditCell(e: any, index: number, name: string) {
      e.stopPropagation();
      this.mapItems();
      this.tableItems[index].isEdit = true;
      this.selectedCell = name
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
        this.mapItems();
        this.tableItems[rowIndex].isEdit = true;
      } else if (e.code === "Escape") {
        e.preventDefault();
        this.selectedCell = null;
        this.mapItems();
      }
    },
    handleClickOut() {
      this.selectedCell = null;
      this.mapItems();
    },
    inputHandler(value: any, data: any, key: string) {
        this.tableItems[data.index][key] = value;
        this.$emit('input-change', value, data);

        // If v-model is set then emit updated table
        if (this.value) {
          this.updatedTable[data.index][key] = value;
          this.$emit('input', this.updatedTable);
        }
    },
    handleListeners(listeners: any) {
      // Exclude listeners that are not part of Bootstrap Vue
      const excludeEvents: any = {
        "input": true,
        "input-change": true
      }
      return Object.keys(listeners).reduce((a: any, c: any) => excludeEvents[c] ? a : {...a, [c]: listeners[c]}, {});
    },
    mapItems() {
      this.tableItems = this.tableItems.map((item: any) => ({...item, isEdit: false}));
    }
  },
});
</script>

<style>
.data-cell {
  display: flex;
  width: 100%;
}
</style>

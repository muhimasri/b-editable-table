<template>
  <b-table
    v-click-outside="handleClickOut"
    v-bind="{ ...$props, ...$attrs }"
    v-on="handleListeners($listeners)"
    :items="tableItems"
  >
    <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope"/>
    </template>
    <template v-for="(field, index) in fields" #[`cell(${field.key})`]="data">
      <b-form-datepicker
        @keydown.native="handleKeydown($event, index, data)"
        @input="(value) => inputHandler(value, data, field.key)"
        v-bind="{ ...field }"
        v-focus="'date'"
        v-if="showField(field, data, 'date')"
        :key="index"
        :type="field.type"
        :value="getFieldValue(field, data)"
      ></b-form-datepicker>
      <b-form-select
        @keydown.native="handleKeydown($event, index, data)"
        @change="(value) => inputHandler(value, data, field.key, field.options)"
        v-bind="{ ...field }"
        v-focus
        v-else-if="showField(field, data, 'select')"
        :key="index"
        :value="getFieldValue(field, data)"
      ></b-form-select>
      <b-form-checkbox
        @keydown.native="handleKeydown($event, index, data)"
        @change="(value) => inputHandler(value, data, field.key)"
        v-bind="{ ...field }"
        v-focus="'checkbox'"
        v-else-if="showField(field, data, 'checkbox')"
        :key="index"
        :checked="getFieldValue(field, data)"
      ></b-form-checkbox>
      <b-form-rating
        @keydown="handleKeydown($event, index, data)"
        @change="(value) => inputHandler(value, data, field.key)"
        v-bind="{ ...field }"
        v-focus
        v-else-if="showField(field, data, 'rating')"
        :key="index"
        :value="getFieldValue(field, data)"
      ></b-form-rating>
      <b-form-input
        @keydown="handleKeydown($event, index, data)"
        @blur="(e) => inputHandler(e.target.value, data, field.key)"
        v-bind="{ ...field }"
        v-focus
        v-else-if="showField(field, data, field.type)"
        :key="index"
        :type="field.type"
        :value="getFieldValue(field, data)"
      ></b-form-input>
      <div
        class="data-cell"
        @[editTrigger]="handleEditCell($event, data.item.id, field.key)"
        v-else
        :key="index"
      >
        <slot
          v-if="$scopedSlots[`cell(${field.key})`]"
          :name="`cell(${field.key})`"
          v-bind="getCellData(data)"
        ></slot>
        <template v-else>{{ getCellValue(data, field) }}</template>
      </div>
    </template>
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
    value: Array,
    editMode: {
      type: String,
      default: "cell",
    },
    editTrigger: {
      type: String,
      default: "click",
    },
    rowMode: {
      type: Object,
      default: null,
    },
    disableDefaultEdit: {
      type: Boolean,
      default: false,
    },
  },
  directives: {
    focus: {
      inserted: function(el: any, event: any) {
       // if (this.editMode !== 'row') {
          //   switch (event.value) {
          //   case "checkbox":
          //     el.children[0].focus();
          //   case "date":
          //     el.children[0].focus();
          //   default:
          //     el.focus();
          // } 
        // }
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
      tableItems: [], // this.value.map((item: any) => ({ ...item })),
      tableMap: {},
      _editMode: null
    };
  },
  mounted() {
    this._editMode = this.editMode;
    this.createTableItems(this.value ? this.value : this.items);
  },
  watch: {
    value(newVal) {
      this.createTableItems(newVal);
    },
    items(newVal) {
      this.createTableItems(newVal);
    },
    editMode(newVal) {
      this._editMode = newVal;
    },
    rowMode: {
      handler(newVal) {
        this.tableMap[newVal.id].isEdit = newVal.edit;
        this._editMode = 'row';
      },
      deep: true
    },
  },
  methods: {
    handleEditCell(e: any, id: number, name: string) {
      if (!this.disableDefaultEdit) {
        e.stopPropagation();
        this.clearEditMode();
        // handle if properly and is edit every where
        this.tableMap[id].isEdit = true;
        this.selectedCell = name;
      }
    },
    handleKeydown(e: any, index: number, data: any) {
      if (e.code === "Tab" && this._editMode === "cell") {
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
        this.clearEditMode();
        const rowId = this.tableItems[rowIndex]?.id;
        if (this.tableMap[rowId]) {
          this.tableMap[rowId].isEdit = true;
        }
      } else if (e.code === "Escape") {
        e.preventDefault();
        this.selectedCell = null;
        this.clearEditMode();
      }
    },
    handleClickOut() {
      if (!this.disableDefaultEdit) {
        this.selectedCell = null;
        this.clearEditMode();
      }
    },
    inputHandler(value: any, data: any, key: string, options: Array<any>) {
      let changedValue = value;
      // Handle select element with options
      if (options) {
        const selectedValue = options.find((item) => item.value === value);
        changedValue = selectedValue ? selectedValue.value : value;
      }

      this.$emit("input-change", {...data, id: data.item.id, value: changedValue});

      // When dispatch $emit below, disable watch and see if the tamplates loops again

      // If v-model is set then emit updated table
      if (this.value) {
        this.tableMap[data.item.id].fields[key].value = changedValue;
        this.tableItems[data.index][key] = changedValue;
        this.$emit(
          "input",
          // this.tableItems.map((item: any) => ({ ...item }))
          this.tableItems
        );
      }
    },
    handleListeners(listeners: any) {
      // Exclude listeners that are not part of Bootstrap Vue
      const excludeEvents: any = {
        input: true,
        "input-change": true,
      };
      return Object.keys(listeners).reduce(
        (a: any, c: any) =>
          excludeEvents[c] ? a : { ...a, [c]: listeners[c] },
        {}
      );
    },
    getCellValue(data: any, field: any) {
      const row = this.tableMap[data.item.id];
      let value = row && row.fields[field.key] ? row.fields[field.key].value : '';
      // Handle select element with options
      if (data.field.options) {
        const selectedValue = data.field.options.find(
          (item: any) => item.value === value
        );
        value = selectedValue ? selectedValue.text : value;
      }
      return value;
    },
    getCellData(data: any) {
      return {...data, isEdit: this.tableMap[data.item.id].isEdit, id: data.item.id}
    },
    showField(field: any, data: any, type: string) {
      return (
        field.type === type &&
        this.tableMap[data.item.id]?.isEdit &&
        (this.selectedCell === field.key || this._editMode === "row") &&
        field.editable
      );
    },
    getFieldValue(field: any, data: any) {
      return this.tableMap[data.item.id].fields[field.key]?.value;
    },
    clearEditMode() {
      for (const key in this.tableMap) {
        this.tableMap[key].isEdit = false;
      }
    },
    createTableItems(data: Array<any>) {
      this.tableItems = data.map((item: any) => ({ ...item }));
      this.tableMap = data.reduce(
        (rows, curRow) => ({
          ...rows,
          [curRow.id]: {
            id: curRow.id,
            isEdit: this.tableMap[curRow.id] ? this.tableMap[curRow.id].isEdit : false,
            fields: Object.keys(curRow).reduce(
              (keys, curKey) => ({
                ...keys,
                [curKey]: { value: curRow[curKey] },
              }),
              {}
            ),
          },
        }),
        {}
      );
    }
  },
});
</script>

<style>
table.b-table {
  width: unset;
}
table.b-table td {
  padding: 0;
}
.data-cell {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>

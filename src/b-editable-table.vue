<template>
  <b-table
    v-click-outside="handleClickOut"
    v-bind="{ ...$props, ...$attrs }"
    v-on="handleListeners($listeners)"
    :items="tableItems"
  >
    <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope"
      ><slot :name="slot" v-bind="scope"
    /></template>
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
        @[editTrigger]="handleEditCell($event, data.index, field.key)"
        v-else
        :key="index"
      >
        <slot
          v-if="$scopedSlots[`cell(${field.key})`]"
          :name="`cell(${field.key})`"
          v-bind="data"
        ></slot>
        <template v-else>{{ getCellValue(data, field) }}</template>
      </div>
    </template>
  </b-table>
</template>

<script lang="ts">
const hasValue = (obj: Object) =>
  typeof obj !== "undefined" && obj !== null && Object.keys(obj).length > 0;
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
    cellMode: {
      type: Object,
      default: null,
    },
    rowMode: {
      type: Object,
      default: null,
    },
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
      tableItems: [], // this.value.map((item: any) => ({ ...item })),
      tableMap: {}
    };
  },
  mounted() {
    this.tableItems = this.createTableItems(this.value);
  },
  watch: {
    value(newVal) {
      this.tableItems = this.createTableItems(newVal);
    },
    items(newVal) {
      this.tableItems = this.createItems(newVal);
    },
    cellMode(newVal) {
      this.tableItems[newVal.rowIndex].isEdit = newVal.editable;
      this.selectedCell = newVal.field;
      this.editMode = "cell";
    },
    rowMode(newVal) {
      this.tableItems[newVal.rowIndex].isEdit = newVal.editable;
      this.editMode = "row";
    },
  },
  methods: {
    handleEditCell(e: any, index: number, name: string) {
      if (!hasValue(this.rowMode) && !hasValue(this.cellMode)) {
        e.stopPropagation();
        this.resetItems();
        this.tableItems[index].isEdit = true;
        this.selectedCell = name;
      }
    },
    handleKeydown(e: any, index: number, data: any) {
      if (e.code === "Tab" && this.editMode === "cell") {
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
        this.resetItems();
        if (this.tableItems[rowIndex]) {
          this.tableItems[rowIndex].isEdit = true;
        }
      } else if (e.code === "Escape") {
        e.preventDefault();
        this.selectedCell = null;
        this.resetItems();
      }
    },
    handleClickOut() {
      if (!hasValue(this.rowMode) && !hasValue(this.cellMode)) {
        this.selectedCell = null;
        this.resetItems();
      }
    },
    inputHandler(value: any, data: any, key: string, options: Array<any>) {
      let changedValue = value;
      // Handle select element with options
      if (options) {
        const selectedValue = options.find((item) => item.value === value);
        changedValue = selectedValue ? selectedValue.value : value;
      }
      this.tableItems[data.index][key] = changedValue;
      this.$emit("input-change", value, data);

      // If v-model is set then emit updated table
      if (this.value) {
        this.$emit(
          "input",
          this.tableItems.map((item: any) => {
            const newItem = { ...item };
            delete newItem.isEdit;
            return newItem;
          })
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
      let value = this.tableMap[data.item.data.id.value] ? this.tableMap[data.item.data.id.value].data[field.key].value : '';
      // Handle select element with options
      if (data.field.options) {
        const selectedValue = data.field.options.find(
          (item: any) => item.value === value
        );
        value = selectedValue ? selectedValue.text : value;
      }
      return value;
    },
    showField(field: any, data: any, type: string) {
      return (
        field.type === type &&
        this.tableItems[data.index].isEdit &&
        (this.selectedCell === field.key || this.editMode === "row") &&
        field.editable
      );
    },
    getFieldValue(field: any, data: any) {
      return this.tableMap[data.item.data.id.value].data[field.key].value;
    },
    resetItems() {
      this.tableItems = this.tableItems.map((item: any) => ({
        ...item,
        isEdit: false,
      }));
    },
    createItems(value: any) {
      return value.map((item: any, index: any) => ({
        ...item,
        isEdit: this.tableItems[index] ? this.tableItems[index].isEdit : false,
      }));
    },
    createTableItems(data: Array<any>) {
      this.tableMap = data.reduce(
        (values, curValue) => ({
          ...values,
          [curValue.id]: {
            isEdit: false,
            data: Object.keys(curValue).reduce(
              (fields, curField) => ({
                ...fields,
                [curField]: { value: curValue[curField] },
              }),
              {}
            ),
          },
        }),
        {}
      );
      return Object.values(this.tableMap);
    },
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

<script lang="ts">
import Vue from 'vue';
import { BTable, BFormDatepicker, BFormInput, BFormSelect, BFormCheckbox } from 'bootstrap-vue';

// interface SampleData {
//   counter: number;
//   initCounter: number;
//   message: {
//     action: string | null;
//     amount: number | null;
//   };
// }

export default /*#__PURE__*/Vue.extend({
  name: 'BEditableTable', // vue component name
  components: {
    BTable,
    BFormDatepicker,
    BFormInput,
    BFormSelect,
    BFormCheckbox
  },
  props: {
    fields: Array,
    items: Array
  },
  data(): any {
    return {
      selectedCell: null,
      selectedRow: {},
    };
  },
  methods: {
      handleEditCell(data: any, name: any) {
        this.selectedCell = name;
        this.selectedRow = {
          [data.index]: true
        }
      }
    }
});
</script>

<template>
  <b-table v-bind="{...$props, ...$attrs}" v-on="$listeners">
      <template v-for="(field, index) in fields" #[`cell(${field.key})`]="data">
        <b-form-datepicker @input="$emit('input-change', $event, data)" v-if="field.type === 'date' && selectedRow[data.index] && selectedCell === field.key" :key="index" :type="field.type" v-model="items[data.index][field.key]"></b-form-datepicker>
        <b-form-select @change="$emit('input-change', $event, data)" v-else-if="field.type === 'select' && selectedRow[data.index] && selectedCell === field.key" :key="index" v-model="items[data.index][field.key]" :options="field.options" class="form-control"></b-form-select>
        <b-form-checkbox v-model="items[data.index][field.key]" @change="$emit('input-change', $event, data)" v-else-if="field.type === 'check' && selectedRow[data.index] && selectedCell === field.key" :key="index"></b-form-checkbox>
        <b-form-input @input="$emit('input-change', $event, data)" v-else-if="field.type && selectedRow[data.index] && selectedCell === field.key" :key="index" :type="field.type" v-model="items[data.index][field.key]"></b-form-input>
        <span :key="index" v-else @click="handleEditCell(data, field.key)">{{data.value}}</span>
      </template>
      <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope"><slot :name="slot" v-bind="scope"/></template>
    </b-table>
</template>

<style scoped>
</style>

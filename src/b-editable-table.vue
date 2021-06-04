<script lang="ts">
import Vue from 'vue';
import { BTable, BFormDatepicker, BFormInput, BFormSelect } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

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
    BFormSelect
  },
  data(): any {
    return {
      selectedCell: null,
      selectedRow: {},
      fields: [
        { key: "name", label: "Name", type: "text" },
        { key: "department", label: "Department", type: "select", options: ['Development', 'Marketing', 'HR', 'Accounting'] },
        { key: "age", label: "Age", type: "number" },
        { key: "dateOfBirth", label: "Date Of Birth", type: "date" }
      ],
      items: [
          { age: 40, name: 'Dickerson', department: 'Development', dateOfBirth: '1984-05-20' },
          { age: 21, name: 'Larsen', department: 'Marketing', dateOfBirth: '1984-05-20' },
          { age: 89, name: 'Geneva', department: 'HR', dateOfBirth: '1984-05-20' },
          { age: 38, name: 'Jami', department: 'Accounting', dateOfBirth: '1984-05-20' }
        ]
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
  <b-table :items="items" :fields="fields" v-bind="{...$props, ...$attrs}" v-on="$listeners">
      <template v-for="(field, index) in fields" #[`cell(${field.key})`]="data">
        <b-form-datepicker v-if="field.type === 'date' && selectedRow[data.index] && selectedCell === field.key" :key="index" :type="field.type" v-model="items[data.index][field.key]"></b-form-datepicker>
        <b-form-select v-else-if="field.type === 'select' && selectedRow[data.index] && selectedCell === field.key" :key="index" v-model="items[data.index][field.key]" :options="field.options" class="form-control"></b-form-select>
        <b-form-input v-else-if="field.type && selectedRow[data.index] && selectedCell === field.key" :key="index" :type="field.type" v-model="items[data.index][field.key]"></b-form-input>
        <span :key="index" v-else @click="handleEditCell(data, field.key)">{{data.value}}</span>
      </template>
      <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope"><slot :name="slot" v-bind="scope"/></template>
    </b-table>
</template>

<style scoped>
</style>

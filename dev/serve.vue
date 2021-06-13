<script lang="ts">
import Vue from 'vue';
import BEditableTable from '@/b-editable-table.vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default Vue.extend({
  name: 'ServeDev',
  components: {
    BEditableTable
  },
  data() {
    return {
      fields: [
        { key: "name", label: "Name", type: "text"},
        { key: "department", label: "Department", type: "select", options: ['Marketing', 'Development', 'HR'] },
        { key: "age", label: "Age", type: "number" },
        { key: "dateOfBirth", label: "Date Of Birth", type: "date" },
        { key: "single", label: "Single", type: "check" },
      ],
       items: [
          { age: 40, name: 'Dickerson', department: 'Development', dateOfBirth: '1984-05-20', single: false },
          { age: 21, name: 'Larsen', department: 'Marketing', dateOfBirth: '1984-05-20', single: false },
          { age: 89, name: 'Geneva', department: 'HR', dateOfBirth: '1984-05-20', single: false },
          { age: 38, name: 'Jami', department: 'Accounting', dateOfBirth: '1984-05-20', single: false }
        ]
    };
  },
  methods: {
    inputHandler(e:any, data:any) {
      console.log(e);
      console.log(data);
    }
  }
});
</script>

<template>
  <div id="app">
    <b-editable-table :items="items" :fields="fields" @input-change="inputHandler">
      <template #readonly-single="data">
        <span v-if="data.value">Yes</span>
        <span v-else>No</span>
      </template>
      <template #readonly-dateOfBirth="data">
        Date: {{data.value}}
      </template>
    </b-editable-table>
  </div>
</template>

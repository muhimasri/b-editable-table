<script lang="ts">
import Vue from 'vue';
import BEditableTable from '@/b-editable-table.vue';
import BExample from './b-example.vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default Vue.extend({
  name: 'ServeDev',
  components: {
    BEditableTable,
    BExample
  },
  data() {
    return {
      fields: [
        { key: "name", label: "Name", type: "text"},
        { key: "department", label: "Department", type: "select", options: ['Marketing', 'Development', 'HR'] },
        { key: "age", label: "Age", type: "number" },
        { key: "dateOfBirth", label: "Date Of Birth", type: "date" },
        { key: "permanentResident", label: "Permanent Resident", type: "check" },
      ],
       items: [
          { age: 40, name: 'Dickerson', department: 'Development', dateOfBirth: '1984-05-20', permanentResident: true },
          { age: 21, name: 'Larsen', department: 'Marketing', dateOfBirth: '1984-05-20', permanentResident: false },
          { age: 89, name: 'Geneva', department: 'HR', dateOfBirth: '1984-05-20', permanentResident: false },
          { age: 38, name: 'Jami', department: 'Accounting', dateOfBirth: '1984-05-20', permanentResident: true }
        ]
    };
  },
  methods: {
      handleInput(value: any, data: any) {
          console.log(value);
          console.log(data);
      }
  }
});
</script>

<template>
  <div id="app">
    <!-- <b-editable-table :items="items" :fields="fields" @input-change="inputHandler">
      <template #cell-permanentResident="data">
        <span v-if="data.value">Yes</span>
        <span v-else>No</span>
      </template>
    </b-editable-table> -->
    <b-example></b-example>
  </div>
</template>

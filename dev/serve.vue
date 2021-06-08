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
        { key: "department", label: "Department", type: "text" },
        { key: "age", label: "Age", type: "number" },
        { key: "dateOfBirth", label: "Date Of Birth", type: "date" },
        { key: 'edit', label: ''}
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
    inputHandler(e:any) {
      console.log(e);
    }
  }
});
</script>

<template>
  <div id="app">
    <b-editable-table :items="items" :fields="fields" @input-change="inputHandler"></b-editable-table>
  </div>
</template>

<template>
    <b-editable-table :items="items" :fields="fields" @input-change="handleInput"></b-editable-table>
</template>

<script>
import BEditableTable from '@/b-editable-table.vue';
export default {
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
        { key: "isActive", label: "Is Active", type: "check", formatter: (value, key, item) => {
              return value ? 'Yes' : 'No'
            }, },
      ],
       items: [
          { age: 40, name: 'Dickerson', department: 'Development', dateOfBirth: '1984-05-20', isActive: true },
          { age: 21, name: 'Larsen', department: 'Marketing', dateOfBirth: '1984-05-20', isActive: false },
          { age: 89, name: 'Geneva', department: 'HR', dateOfBirth: '1984-05-20', isActive: false },
          { age: 38, name: 'Jami', department: 'Accounting', dateOfBirth: '1984-05-20', isActive: true }
        ]
    };
  },
  methods: {
      handleInput(value, data) {
          console.log(value);
          console.log(data);
      }
  }
};
</script>

<style>
.b-table input {

}
thead, tbody, tfoot, tr, td, th {
  text-align: left;
  width: 100px;
  vertical-align: middle;
}
pre {
  text-align: left;
  color: #d63384;
}
</style>

<template>
<div>
    <b-editable-table bordered :small="true" fixed class="editable-table" v-model="items" :fields="fields" @input-change="handleInput"></b-editable-table>
    <pre>
      {{items}}
    </pre>
</div>
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
        { key: "name", label: "Name", type: "text", editable: true, placeholder: "Enter Name..."},
        { key: "department", label: "Department", type: "select", options: ['Marketing', 'Development', 'HR', 'Accounting'], editable: true },
        { key: "age", label: "Age", type:"range", min:"0", max:"100", editable: true, placeholder: "Enter Age..." },
        { key: "dateOfBirth", label: "Date Of Birth", size:"lg", locale:"fr", type: "date", editable: true },
        { key: "isActive", label: "Is Active", type: "checkbox", editable: true },
        { key: "application", label: "Application", type: "file", editable: true, formatter: (value, key, item) => value.name ? value.name : value },
      ],
       items: [
          { age: 40, name: 'Dickerson', department: 'Development', dateOfBirth: '1984-05-20', isActive: true, application: 'file.txt' },
          { age: 21, name: 'Larsen', department: 'Marketing', dateOfBirth: '1984-05-20', isActive: false, application: 'file.txt' },
          { age: 89, name: 'Geneva', department: 'HR', dateOfBirth: '1984-05-20', isActive: false, application: 'file.txt' },
          { age: 38, name: 'Jami', department: 'Accounting', dateOfBirth: '1984-05-20', isActive: true, application: 'file.txt'}
        ]
    };
  },
  methods: {
      handleInput(value, data) {
        console.log(value);
        // this.items[data.index][data.field.key] = value;
      }
  }
};
</script>

<style>
.editable-table .data-cell {
  padding: 0.4rem 0.4rem; 
}

.editable-table th, .editable-table td {
  vertical-align: middle !important;
}

.editable-table .custom-checkbox {
  margin-left: 7px;
}
</style>

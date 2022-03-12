<template>
<div>
    <b-editable-table bordered class="editable-table" v-model="items" :fields="fields" @input-change="handleInput">
      <template #cell(isActive)="data">
        <span v-if="data.value">Yes</span>
        <span v-else>No</span>
      </template>
    </b-editable-table>
    <pre>
      {{items}}
    </pre>
</div>
</template>

<script>
import BEditableTable from '@/b-editable-table.vue';
import {BButton} from 'bootstrap-vue';
export default {
  components: {
    BEditableTable
  },
  data() {
    return {
      fields: [
        { key: "name", label: "Name", type: "text", editable: true, placeholder: "Enter Name...", class: "name-col", validate: this.validateName},
        { key: "department", label: "Department", type: "select", editable: true, class: "department-col" , options: [
          { value: 0, text: 'Please select department' },
          { value: 1, text: 'HR' },
          { value: 2, text: 'Engineer' },
          { value: 3, text: 'VP' },
          { value: 4, text: 'CEO'}
        ], validate: this.validateSelect},
        { key: "age", label: "Age", type:"range", min:"0", max:"100", editable: true, placeholder: "Enter Age...", class: "age-col" },
        { key: "dateOfBirth", label: "Date Of Birth", type: "date", editable: true, class: "date-col", locale: "en", validate: this.validateDate,
          "date-format-options": {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          }, },
        { key: "isActive", label: "Is Active", type: "checkbox", editable: true, class: "is-active-col" }
      ],
       items: [
          { id: 1, age: 40, name: 'Dickerson', department: 1, dateOfBirth: '1984-05-20', isActive: true },
          { id: 2, age: 21, name: 'Larsen', department: 2, dateOfBirth: '1972-07-25', isActive: false },
          { id: 3, age: 89, name: 'Geneva', department: 3, dateOfBirth: '1981-02-02', isActive: false },
          { id: 4, age: 38, name: 'Jami', department: 4, dateOfBirth: '1964-10-19', isActive: true },
        ]
    };
  },
  methods: {
      handleInput(data) {
      },
      validateName(value) {
        if (value === '') {
          return {
            valid: false,
            errorMessage: 'Please enter name'
          }
        }
        return {valid: true};
      },
      validateDate(value) {
        const year = new Date(value).getFullYear();
        if (year > 2003) {
          return {
            valid: false,
            errorMessage: 'Must be above 19'
          }
        }
        return {valid: true};
      },
      validateSelect(value, options) {
        if (value === 0) {
         return {
            valid: false,
            errorMessage: 'Please select a department'
          }
        }
        return {valid: true};
      }
  }
};
</script>

<style>
table.editable-table {
  margin: auto;
}

table.editable-table td {
  vertical-align: middle;
}

.editable-table .data-cell {
  padding: 8px;
  vertical-align: middle;
}

.editable-table .custom-checkbox {
  width: 50px;
}

.name-col {
  width: 120px;
}

.department-col {
  width: 150px;
}

.age-col {
  width: 100px;
}

.date-col {
  width: 200px;
}

.is-active-col {
  width: 100px
}
</style>

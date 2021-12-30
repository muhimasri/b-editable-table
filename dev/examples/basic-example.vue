<template>
<div class="table-container">
    <b-button variant="success" @click="handleAdd()">Add</b-button>
    <b-editable-table bordered class="editable-table" v-model="items" :fields="fields" @input-change="handleInput">
      <template #cell(isActive)="data">
        <span v-if="data.value">Yes</span>
        <span v-else>No</span>
      </template>
      <template #cell(delete)="data">
        <b-button variant="danger" @click="handleDelete(data)">Remove</b-button>
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
        { key: "name", label: "Name", type: "text", editable: true, placeholder: "Enter Name...", class: "name-col"},
        { key: "department", label: "Department", type: "select", editable: true, class: "department-col" , options: [
          { value: 1, text: 'HR' },
          { value: 2, text: 'Engineer' },
          { value: 3, text: 'VP' },
          { value: 4, text: 'CEO'}
        ]},
        { key: "age", label: "Age", type:"range", min:"0", max:"100", editable: true, placeholder: "Enter Age...", class: "age-col" },
        { key: "dateOfBirth", label: "Date Of Birth", type: "date", editable: true, class: "date-col", locale: "en",
          "date-format-options": {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          }, },
        { key: "isActive", label: "Is Active", type: "checkbox", editable: true, class: "is-active-col" },
        { key: "delete", label: "" }
      ],
       items: [
          { age: 40, name: 'Dickerson', department: 1, dateOfBirth: '1984-05-20', isActive: true },
          { age: 21, name: 'Larsen', department: 2, dateOfBirth: '1972-07-25', isActive: false },
          { age: 89, name: 'Geneva', department: 3, dateOfBirth: '1981-02-02', isActive: false },
          { age: 38, name: 'Jami', department: 4, dateOfBirth: '1964-10-19', isActive: true },
        ]
    };
  },
  methods: {
      handleInput(value, data) {
        // const updatedRow = {...this.items[data.index], [data.field.key]: value};
        // this.$set(this.items, data.index, updatedRow);
      },
      handleAdd() {
        this.items.unshift({});
      },
      handleDelete(data) {
        this.items.splice(data.index, 1);
      }
  }
};
</script>

<style>
.table-container {
  margin: 10px;
}
table.editable-table {
  margin-top: 10px;
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

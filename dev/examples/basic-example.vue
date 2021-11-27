<template>
<div>
    <b-editable-table bordered :small="true" fixed class="editable-table" :items="items" :fields="fields" @input-change="handleInput">
      <template #cell-isActive="data">
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
export default {
  components: {
    BEditableTable
  },
  data() {
    return {
      fields: [
        { key: "name", label: "Name", type: "text", editable: true, placeholder: "Enter Name..."},
        { key: "department", label: "Department", type: "select", options: [
          { value: 1, text: 'HR' },
          { value: 2, text: 'Engineer' },
          { value: 3, text: 'VP' },
          { value: 4, text: 'CEO'}
        ], editable: true },
        { key: "age", label: "Age", type:"range", min:"0", max:"100", editable: true, placeholder: "Enter Age..." },
        { key: "dateOfBirth", label: "Date Of Birth", type: "date", editable: true, locale: "en",
          "date-format-options": {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          }, },
        { key: "isActive", label: "Is Active", type: "checkbox", editable: true },
      ],
       items: [
          { age: 40, name: 'Dickerson', department: 1, dateOfBirth: '1984-05-20', isActive: true },
          { age: 21, name: 'Larsen', department: 2, dateOfBirth: '1972-07-25', isActive: false },
          { age: 89, name: 'Geneva', department: 3, dateOfBirth: '1981-02-02', isActive: false },
          { age: 38, name: 'Jami', department: 4, dateOfBirth: '1964-10-19', isActive: true }
        ]
    };
  },
  methods: {
      handleInput(value, data) {
        console.log(data);
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

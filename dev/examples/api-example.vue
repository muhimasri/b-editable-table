<template>
<div>
    <b-editable-table bordered :small="true" fixed class="editable-table" v-model="users" :fields="fields" @input-change="handleInput">
      <template #cell-isActive="data">
        <span v-if="data.value">Yes</span>
        <span v-else>No</span>
      </template>
    </b-editable-table>
    <pre>
      {{users}}
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
        { key: "name", label: "Name", type: "text", editable: true },
        { key: "email", label: "Email", type: "email", editable: true },
        { key: "phone", label: "Phone", type: "text", editable: true }
      ],
      users: []
    };
  },
  methods: {
      handleInput(value, data) {
        console.log(data);
        // this.users[data.index][data.field.key] = value;
      }
  },
  async mounted() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    this.users = users;
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

<script lang="ts">
import Vue from 'vue';
import BEditableTable from '@/b-editable-table.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    BEditableTable
  }
});
</script>

<template>
  <div id="app">
    <b-editable-table />
  </div>
</template>

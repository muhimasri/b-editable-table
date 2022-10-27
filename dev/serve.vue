<script lang="ts">
import Vue from 'vue'
import InputValidation from './examples/input-validation.vue'
// import CompleteExample from './examples/complete-example.vue';
// import CellEdit from './examples/cell-edit.vue'
// import RowEdit from './examples/row-edit.vue';
// import LoadApi from './examples/load-api.vue';
// import OneWayBinding from './examples/one-way-binding.vue';
// import AddRemoveUpdate from './examples/add-remove-update.vue';
// import Paging from './examples/paging.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default Vue.extend({
  name: 'ServeDev',
  components: {
    // CompleteExample,
    InputValidation,
    // RowEdit,
    // LoadApi,
    // OneWayBinding,
    // AddRemoveUpdate,
    // CellEdit,
    // Paging,
  },
})
</script>

<template>
  <div id="app">
    <input-validation></input-validation>
    <!-- <cell-edit></cell-edit> -->
    <!-- <row-edit></row-edit> -->
    <!-- <complete-example></complete-example> -->
    <!-- <load-api></load-api> -->
    <!-- <one-way-binding></one-way-binding> -->
    <!-- <add-remove-update></add-remove-update> -->
    <!-- <Paging></Paging> -->
  </div>
</template>

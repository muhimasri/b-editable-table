<script lang="ts">
import Vue from 'vue';
// import CompleteExample from './examples/complete-example.vue';
// import BasicExample from './examples/basic-example.vue';
// import ApiExample from './examples/api-example.vue';
// import OneWayBindExample from './examples/one-way-bind-example.vue';
import AddRemoveExample from './examples/add-remove-example.vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default Vue.extend({
  name: 'ServeDev',
  components: {
    // CompleteExample,
    // BasicExample,
    // ApiExample,
    // OneWayBindExample,
    AddRemoveExample
  }
});
</script>

<template>
  <div id="app">
    <!-- <basic-example></basic-example> -->
    <!-- <complete-example></complete-example> -->
    <!-- <ApiExample></ApiExample> -->
    <!-- <one-way-bind-example></one-way-bind-example> -->
    <add-remove-example></add-remove-example>
  </div>
</template>

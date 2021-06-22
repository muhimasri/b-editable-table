<script lang="ts">
import Vue from 'vue';
import CompleteExample from './examples/complete-example.vue';
import BasicExample from './examples/basic-example.vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default Vue.extend({
  name: 'ServeDev',
  components: {
    CompleteExample,
    BasicExample
  }
});
</script>

<template>
  <div id="app">
    <basic-example></basic-example>
    <!-- <complete-example></complete-example> -->
  </div>
</template>

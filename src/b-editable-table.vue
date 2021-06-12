<template>
  <b-table v-bind="{...$props, ...$attrs}" v-on="$listeners">
      <template v-for="(field, index) in fields" #[`cell(${field.key})`]="data">
        <b-form-datepicker @keydown.native="handleKeydown($event, index, data)" v-focus="'date'" @input="$emit('input-change', $event, data)" v-if="field.type === 'date' && selectedRow === data.index && selectedCell === field.key" :key="index" :type="field.type" v-model="items[data.index][field.key]"></b-form-datepicker>
        <b-form-select @keydown.native="handleKeydown($event, index, data)" v-focus="'select'" @change="$emit('input-change', $event, data)" v-else-if="field.type === 'select' && selectedRow === data.index && selectedCell === field.key" :key="index" v-model="items[data.index][field.key]" :options="field.options" class="form-control"></b-form-select>
        <b-form-checkbox @keydown.native="handleKeydown($event, index, data)" v-focus="'checkbox'" v-model="items[data.index][field.key]" @change="$emit('input-change', $event, data)" v-else-if="field.type === 'check' && selectedRow === data.index && selectedCell === field.key" :key="index"></b-form-checkbox>
        <b-form-input @keydown="handleKeydown($event, index, data)" v-focus="'default'" @input="$emit('input-change', $event, data)" v-else-if="field.type && selectedRow === data.index && selectedCell === field.key" :key="index" :type="field.type" v-model="items[data.index][field.key]"></b-form-input>
        <span class="edit-cell" :key="index" v-else @click="handleEditCell(data.index, field.key)">{{data.value}}</span>
      </template>
      <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope"><slot :name="slot" v-bind="scope"/></template>
    </b-table>
</template>

<script lang="ts">
import { BTable, BFormDatepicker, BFormInput, BFormSelect, BFormCheckbox } from 'bootstrap-vue';
import Vue from 'vue';

// interface SampleData {
//   counter: number;
//   initCounter: number;
//   message: {
//     action: string | null;
//     amount: number | null;
//   };
// }

export default Vue.extend({
  name: 'BEditableTable', // vue component name
  components: {
    BTable,
    BFormDatepicker,
    BFormInput,
    BFormSelect,
    BFormCheckbox
  },
  props: {
    fields: Array,
    items: Array
  },
  directives: {
    focus: {
      inserted: function (el: any, event: any) {
        switch (event.value) {
          case 'default': el.focus();
          case 'select': el.focus();
          case 'checkbox': el.children[0].focus();
          case 'date': el.children[0].focus();
        }
      }
    }
  },
  data(): any {
    return {
      selectedCell: {
        type: String,
        default: null
      },
      selectedRow: {
        type: Object,
        default: {}
      },
    };
  },
  methods: {
      handleEditCell(index: number, name: string) {
        this.selectedCell = name;
        this.selectedRow = index
      },
      handleKeydown(e: any, index: number, data: any) {
        if (e.code === 'Tab') {
          e.preventDefault();
          this.selectedCell = this.fields.length - 1 === index ? this.fields[0].key : this.fields[index + 1].key;
          this.selectedRow = this.fields.length - 1 === index ? data.index + 1 : data.index;
        }
        console.log(e);
      }
    }
});
</script>

<style scoped>
  .edit-cell {
    display: flex;
    height: 100%;
    width: 100%
  }
  /* table {
    table-layout: fixed;
  }

  .form-control {
    border: 0;
  } */

</style>

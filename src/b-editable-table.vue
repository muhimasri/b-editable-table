<template>
  <b-table v-click-outside="handleClickOut" v-bind="{...$props, ...$attrs}" v-on="$listeners">
      <template v-for="(field, index) in fields" #[`cell(${field.key})`]="data">
        <b-form-datepicker @keydown.native="handleKeydown($event, index, data)" v-focus="'date'" @input="$emit('input-change', $event, data)" v-if="field.type === 'date' && selectedRow === data.index && selectedCell === field.key" :key="index" :type="field.type" v-model="items[data.index][field.key]"></b-form-datepicker>
        <b-form-select @keydown.native="handleKeydown($event, index, data)" v-focus @change="$emit('input-change', $event, data)" v-else-if="field.type === 'select' && selectedRow === data.index && selectedCell === field.key" :key="index" v-model="items[data.index][field.key]" :options="field.options" plain></b-form-select>
        <b-form-checkbox @keydown.native="handleKeydown($event, index, data)" v-focus="'checkbox'" v-model="items[data.index][field.key]" @change="$emit('input-change', $event, data)" v-else-if="field.type === 'checkbox' && selectedRow === data.index && selectedCell === field.key" :key="index" plain></b-form-checkbox>
        <b-form-input @keydown="handleKeydown($event, index, data)" v-focus @input="$emit('input-change', $event, data)" v-else-if="field.type && selectedRow === data.index && selectedCell === field.key" :key="index" :type="field.type" v-model="items[data.index][field.key]"></b-form-input>
        <span class="edit-cell" :key="index" v-else @click="handleEditCell($event, data.index, field.key)">
          <slot v-if="$scopedSlots[`cell-${field.key}`]" :name="`cell-${field.key}`" v-bind="data"></slot>
          <template v-else>{{data.value}}</template>
        </span>
      </template>
      <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope"><slot :name="slot" v-bind="scope"/></template>
    </b-table>
</template>

<script lang="ts">
import { BTable, BFormDatepicker, BFormInput, BFormSelect, BFormCheckbox } from 'bootstrap-vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'BEditableTable',
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
          case 'checkbox': el.children[0].focus();
          case 'date': el.children[0].focus();
          default: el.focus();
        }
      }
    },
    clickOutside: {
      bind: function (el: any, binding: any, vnode: any) {
        el.clickOutsideEvent = function (event: any) {
          if (!(el == event.target || el.contains(event.target))) {
            vnode.context[binding.expression](event);
          }
        };
        document.addEventListener('click', el.clickOutsideEvent)
      },
      unbind: function (el: any) {
        document.removeEventListener('click', el.clickOutsideEvent)
      },
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
        default: null
      },
    };
  },
  methods: {
      handleEditCell(e: any, index: number, name: string) {
        e.stopPropagation()
        this.selectedCell = name;
        this.selectedRow = index
      },
      handleKeydown(e: any, index: number, data: any) {
        if (e.code === 'Tab') {
          e.preventDefault();
          this.selectedCell = this.fields.length - 1 === index ? this.fields[0].key : this.fields[index + 1].key;
          this.selectedRow = this.fields.length - 1 === index ? data.index + 1 : data.index;
        } else if (e.code === 'Escape') {
          e.preventDefault();
          this.selectedCell = null;
          this.selectedRow = null;
        }
      },
      handleClickOut() {
          this.selectedCell = null;
          this.selectedRow = null;
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
</style>

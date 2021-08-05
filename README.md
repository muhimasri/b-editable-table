



# BootstrapVue Editable Table
![Demo](https://github.com/muhimasri/b-editable-table/blob/main/images/demo.gif)

BootstrapVue Editable Table is a Vue table component that enables cell editing and inherits/supports all other features from [BootstrapVue Table](https://bootstrap-vue.org/docs/components/table).

**This is still an early stage beta version so please help by creating issues with proper labels (bug, question, enhancement...).** Thank you in advance 🙏

If you'd like to contribute, please read this [introductory article](https://muhimasri.com/blogs/create-an-editable-dynamic-table-with-bootstrap-vue/) to understand the basic code structure. Whenever you are ready, just create a pull request 👍

## Prerequisite

A basic understanding of [BootstrapVue Table](https://bootstrap-vue.org/docs/components/table).

You're required to install Bootstrap and Bootstrap Vue in your project:

```
npm install bootstrap bootstrap-vue
```

## Setup
```
npm i bootstrap-vue-editable-table
```

Since this is a BootstrapVue component, you need to set it up the same way. The easiest approach is to register BootstrapVue in your app entry point (typically app.js or main.js):

```javascript
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
```
Please refer to [BoostrapVue Docs](https://bootstrap-vue.org/docs) for more details.

## Usage

```javascript
<template>
    <b-editable-table :items="items" :fields="fields"></b-editable-table>
</template>

<script>
import BEditableTable from 'bootstrap-vue-editable-table';
export default {
  components: {
    BEditableTable
  },
  data() {
    return {
      fields: [
        { key: "name", label: "Name", type: "text", editable: true},
        { key: "department", label: "Department", type: "select", options: ['Accounting', 'Development', 'HR', 'Marketing'], editable: true },
        { key: "age", label: "Age", type: "number", editable: true },
        { key: "dateOfBirth", label: "Date Of Birth", type: "date", editable: true },
        { key: "isActive", label: "Is Active", type: "checkbox", editable: true },
      ],
       items: [
          { age: 40, name: 'Dickerson', department: 'Development', dateOfBirth: '1984-05-20', isActive: true },
          { age: 21, name: 'Larsen', department: 'Marketing', dateOfBirth: '1984-05-20', isActive: false },
          { age: 89, name: 'Geneva', department: 'HR', dateOfBirth: '1984-05-20', isActive: false },
          { age: 38, name: 'Jami', department: 'Accounting', dateOfBirth: '1984-05-20', isActive: true }
        ]
    };
  },
};
</script>
```

`items` and `fields` are the same properties used in BootstrapVue Table except we are introducing a new `type` and `editable` property in the `fields` object to indicate what element is required in every column and whether or not it should be editable.

For `select` element, the options can be passed as another property (as shown in the example above). Since this is a [Boostrap Form Select](https://bootstrap-vue.org/docs/components/form-select), it supports a list of strings or key/value objects:

```json
[
  { value: 'a', text: 'First option' },
  { value: 'b', text: 'Second Option' },
  { value: 'b', text: 'Third Option' }
]
```

## Form Elements:
Every column requires a `type` and `editable` property in order to make the cell editable:

```json
[
  { key: "name", label: "Name", type: "text", editable: true},
  { key: "department", label: "Department", type: "select", options: ['Accounting', 'Marketing', 'Development', 'HR'], editable: true },
  { key: "age", label: "Age", type: "number", editable: true },
  { key: "dateOfBirth", label: "Date Of Birth", type: "date", editable: true },
  { key: "isActive", label: "Is Active", type: "checkbox", editable: true },
]
```
**Supported Bootstrap form elements:**
|Type | Description |
|--|--|
| text | Bootstrap Form Text Input
| number | Bootstrap Form Number Input
| select | Bootstrap Form Select
| date | Bootstrap Form Datepicker
| checkbox | Bootstrap Form Checkbox
| rating | Bootstrap Form Rating

## Behavior:
Every cell will change to an editable input field upon clicking on the cell. 

**Supported keyboard keys:**
|Key |Behavior |
|--|--|
| Tab | Move to the next cell |
| Esc | Exit edit mode |

## Styling

There are no custom themes for the editable table but since it extends Bootstrap Vue Table, you can apply all options available from [Bootstrap Table Docs](https://bootstrap-vue.org/docs/components/table).

To customize an editable form element, add a class to the component and use a CSS selector to style a specific element.

**Example customizing a table to improve the overall look and feel:**
```html
<template>
    <b-editable-table bordered :small="true" fixed class="editable-table" :items="items" :fields="fields" @input-change="handleInput"></b-editable-table>
</template>

<script>
import BEditableTable from 'bootstrap-vue-editable-table';
export default {
  components: {
    BEditableTable
  },
  data() {
    return {
      fields: [
        { key: "name", label: "Name", type: "text", editable: true},
        { key: "department", label: "Department", type: "select", options: ['Marketing', 'Development', 'HR', 'Accounting'], editable: true },
        { key: "age", label: "Age", type: "number", editable: true },
        { key: "dateOfBirth", label: "Date Of Birth", type: "date", editable: true },
        { key: "isActive", label: "Is Active", type: "checkbox", editable: true },
      ],
       items: [
          { age: 40, name: 'Dickerson', department: 'Development', dateOfBirth: '1984-05-20', isActive: true },
          { age: 21, name: 'Larsen', department: 'Marketing', dateOfBirth: '1984-05-20', isActive: false },
          { age: 89, name: 'Geneva', department: 'HR', dateOfBirth: '1984-05-20', isActive: false },
          { age: 38, name: 'Jami', department: 'Accounting', dateOfBirth: '1984-05-20', isActive: true }
        ]
    };
  },
  methods: {
      handleInput(value, data) {
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

.editable-table .form-check {
  margin-left: 7px;
}
</style>
```
`.data-cell` is an internal class used for the `span` element within every non-editable cell. You can customize it however you like. 

## Data Binding:
Editable cells use `v-model` internally to support **two-way data bindings**. Any change will reflect directly on the `items` array.

## Events:
|Event |Arguments | Description |
|--|--|--|
| input-change &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |`value` - Current cell value <br/> `data` - Row data (the same object returned by Bootstrap)| Emitted when any cell input changes

**Example:**
```javascript
<template>
    <b-editable-table :items="items" :fields="fields" @input-change="handleInput"></b-editable-table>
</template>

<script>
import BEditableTable from 'bootstrap-vue-editable-table';
export default {
  components: {
    BEditableTable
  },
  data() {
    return {
      fields: [
        { key: "name", label: "Name", type: "text", editable: true},
        { key: "department", label: "Department", type: "select", options: ['Marketing', 'Development', 'HR', 'Accounting'], editable: true },
        { key: "age", label: "Age", type: "number", editable: true },
        { key: "dateOfBirth", label: "Date Of Birth", type: "date", editable: true },
        { key: "isActive", label: "Is Active", type: "checkbox", editable: true },
      ],
       items: [
          { age: 40, name: 'Dickerson', department: 'Development', dateOfBirth: '1984-05-20', isActive: true },
          { age: 21, name: 'Larsen', department: 'Marketing', dateOfBirth: '1984-05-20', isActive: false },
          { age: 89, name: 'Geneva', department: 'HR', dateOfBirth: '1984-05-20', isActive: false },
          { age: 38, name: 'Jami', department: 'Accounting', dateOfBirth: '1984-05-20', isActive: true }
        ]
    };
  },
  methods: {
      handleInput(value, data) {
	      // Handle input change
      }
  }
};
</script>
```
## Custom Cell
To customize a none editable cell, you can use scoped slots to customize a particular field.

**Example rendering a `boolean` field to `Yes` or `No` value:**

```javascript
<b-editable-table :items="items" :fields="fields">
	<template #cell-isActive="data">
		<span v-if="data.value">Yes</span>
		<span v-else>No</span>
	</template>
</b-editable-table>
```

The slot name has to start with `cell-` then followed by the field key `cell-isActive`

|Name | Description |
|--|--|
| `cell-{key}` &nbsp; &nbsp; &nbsp; &nbsp; | Scoped slot for custom data rendering of field data. '{key}' is the field's key name.

## Supported Version
This has been tested on:

 - vue `v2.6.12`
 - bootstrap `v4.3.1`
 - bootstrap-vue `v2.21.2`

We are looking to support as many versions as possible so please create an issue if you encounter compatibility issues 🙏

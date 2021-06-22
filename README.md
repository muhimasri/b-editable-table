

# BootstrapVue Editable Table

Ahow thn early stage Vue Editable Table that extends and inherits all Bootstrap table features and provide an easy way to edit cells.

This is still in Beta and requires testing and validation. So please help by creating issues or new features requests.

If you'd like to understand the code to contribute, please read this article for details. 

## Prerequisite

At least a basic understanding of [BootstrapVue Table](https://bootstrap-vue.org/docs/components/table). This component requires Bootstrap and Vue Bootstrap.

```
npm install bootstrap bootstrap-vue
```

## Setup
```
npm i bootstrap-vue-editable-table
```

Since this a BootstrapVue component, you need to set it up the same way. The fastest way is to register BootstrapVue in your app entry point (typically app.js or main.js):

```javascript
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
```
Please refer to [BoostrapVue Docs](https://bootstrap-vue.org/docs) for more details in seting up your project.

## Usage

```javascript
<template>
    <b-editable-table :items="items" :fields="fields"></b-editable-table>
</template>

<script>
import BEditableTable from 'vue-bootstrap-editable-table';
export default {
  components: {
    BEditableTable
  },
  data() {
    return {
      fields: [
        { key: "name", label: "Name", type: "text"},
        { key: "department", label: "Department", type: "select", options: ['Marketing', 'Development', 'HR'] },
        { key: "age", label: "Age", type: "number" },
        { key: "dateOfBirth", label: "Date Of Birth", type: "date" },
        { key: "permanentResident", label: "Permanent Resident", type: "check" },
      ],
       items: [
          { age: 40, name: 'Dickerson', department: 'Development', dateOfBirth: '1984-05-20', permanentResident: true },
          { age: 21, name: 'Larsen', department: 'Marketing', dateOfBirth: '1984-05-20', permanentResident: false },
          { age: 89, name: 'Geneva', department: 'HR', dateOfBirth: '1984-05-20', permanentResident: false },
          { age: 38, name: 'Jami', department: 'Accounting', dateOfBirth: '1984-05-20', permanentResident: true }
        ]
    };
  },
};
</script>
```

`items` and `fields` are the same properties used in BootstrapVue Table except a fields has a new  `type` property to indicate what input field is required in every column.

For `select` the options can be passed as another property with an array of the required options (as shown in the example above). Since this is a Boostrap form select, it supports key/value objects:

```json
[
  { value: 'a', text: 'First option' },
  { value: 'b', text: 'Second Option' },
  { value: 'b', text: 'Third Option' }
]
```

## Input Fields:
Every column requires a `type` in order to make the cell editable:

```json
[
  { key: "name", label: "Name", type: "text"},
  { key: "department", label: "Department", type: "select", options: ['Marketing', 'Development', 'HR'] },
  { key: "age", label: "Age", type: "number" },
  { key: "dateOfBirth", label: "Date Of Birth", type: "date" },
  { key: "permanentResident", label: "Permanent Resident", type: "check" },
]
```
Below are the current supported Bootstrap form elements:
* Text Input
* Number Input
* Select
* Checkbox
* Datepicker

## Behavior:
Every cell will change to an editable input filed upon clicking on the cell. Below are the supported keyboard keys:
|Key |Behavior |
|--|--|
| Tab | Automatically move to the next cell with edit mode |
| Esc | Change back to read-only mode |

## Events:
|Event |Arguments | Description |
|--|--|--|
| input-change |`value` - Current cell value <br/> `data` - Row data (the same returned object by Bootstrap)| Emitted when any cell input changes

#### Example:
```javascript
<template>
    <b-editable-table :items="items" :fields="fields" @input-change="handleInput"></b-editable-table>
</template>

<script>
import BEditableTable from 'vue-bootstrap-editable-table';
export default {
  components: {
    BEditableTable
  },
  data() {
    return {
      fields: [
        { key: "name", label: "Name", type: "text"},
        { key: "department", label: "Department", type: "select", options: ['Marketing', 'Development', 'HR'] },
        { key: "age", label: "Age", type: "number" },
        { key: "dateOfBirth", label: "Date Of Birth", type: "date" },
        { key: "permanentResident", label: "Permanent Resident", type: "check" },
      ],
       items: [
          { age: 40, name: 'Dickerson', department: 'Development', dateOfBirth: '1984-05-20', permanentResident: true },
          { age: 21, name: 'Larsen', department: 'Marketing', dateOfBirth: '1984-05-20', permanentResident: false },
          { age: 89, name: 'Geneva', department: 'HR', dateOfBirth: '1984-05-20', permanentResident: false },
          { age: 38, name: 'Jami', department: 'Accounting', dateOfBirth: '1984-05-20', permanentResident: true }
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
To customize a none editable cell, you can use a scoped slots to customize a particular field.

#### Example rendering a `boolean` field (`permanentResident`) to `Yes` or `No` value:

```javascript
<b-editable-table :items="items" :fields="fields">
	<template #cell-permanentResident="data">
		<span v-if="data.value">Yes</span>
		<span v-else>No</span>
	</template>
</b-editable-table>
```

The slot name has to start with `cell-` then followed by the field key `cell-permanentResident`

|Name |Arguments | Description |
|--|--|--|
| `cell-{key}`|Returns the same row data that Bootstrap returns| Scoped slot for custom data rendering of field data. '{key}' is the field's key name

## Supported Versions
This has only been tested on:

 - vue `v2.6.12`
 - bootstrap `v5.0.1`
 - bootstrap-vue `v2.21.2`

We are looking to support as many versions as possible but please create an issue if you encounter issues with different versions.
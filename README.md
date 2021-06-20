
# BootstrapVue Editable Table

A Vue Editable Table that extends and inherits all Bootstrap table features and provide an easy way to edit cells.

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



# BootstrapVue Editable Table
BootstrapVue Editable Table is a Vue table component that enables cell editing and inherits/supports all other features from [BootstrapVue Table](https://bootstrap-vue.org/docs/components/table).

[Editable Demo on CodeSandbox](https://codesandbox.io/s/bootstrap-vue-editable-table-wx012?file=/src/App.vue)

![Demo](https://github.com/muhimasri/b-editable-table/blob/main/images/demo.gif)

**This is still an early stage beta version so please help by creating issues with proper labels (bug, question, enhancement...).** Thank you in advance 🙏

If you'd like to contribute, please read this [introductory article](https://muhimasri.com/blogs/part-2-create-a-dynamic-table-with-bootstrap-vue/) to understand the basic code structure. Whenever you are ready, just create a pull request 👍

## Table of Contents
[Prerequisite](#prerequisite) <br/>
[Setup](#setup) <br/>
[Usage](#usage) <br/>
[Data Binding](#data-binding)<br/>
[Form Elements](#form-elements) <br/>
[Column Width](#column-width)<br/>
[Styling](#styling)<br/>
[Keyboard Keys](#keyboard-keys)<br/>
[Events](#events)<br/>
[Custom Cell](#custom-cell)<br/>
[Supported Version](#supported-version)<br/>
[Roadmap](#roadmap)<br/>
 
## Prerequisite

A basic understanding of [BootstrapVue Table](https://bootstrap-vue.org/docs/components/table).

You're required to install Bootstrap and Bootstrap Vue in your project:

```bash
npm install bootstrap bootstrap-vue
```

## Setup
```bash
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
    <b-editable-table v-model="items" :fields="fields"></b-editable-table>
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
        { key: "name", label: "Name", type: "text", editable: true, placeholder: "Enter Name..."},
        { key: "department", label: "Department", type: "select", options: [
          { value: 1, text: 'HR' },
          { value: 2, text: 'Engineer' },
          { value: 3, text: 'VP' },
          { value: 4, text: 'CEO'}
        ], editable: true },
        { key: "age", label: "Age", type:"range", min:"0", max:"100", editable: true, placeholder: "Enter Age..." },
        { key: "dateOfBirth", label: "Date Of Birth", type: "date", editable: true, locale: "en",
          "date-format-options": {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          }, },
        { key: "isActive", label: "Is Active", type: "checkbox", editable: true },
      ],
       items: [
          { age: 40, name: 'Dickerson', department: 1, dateOfBirth: '1984-05-20', isActive: true },
          { age: 21, name: 'Larsen', department: 2, dateOfBirth: '1972-07-25', isActive: false },
          { age: 89, name: 'Geneva', department: 3, dateOfBirth: '1981-02-02', isActive: false },
          { age: 38, name: 'Jami', department: 4, dateOfBirth: '1964-10-19', isActive: true }
        ]
    };
  },
};
</script>
```

`items` and `fields` are the same properties used in BootstrapVue Table except we are introducing a new `type` and `editable` property in the `fields` object to indicate what element is required in every column and whether or not it should be editable. Also, `v-model` is supported for two way bind but you can still use `:items` instead and do your own update. More on that in the [Data Binding](#data-binding) section

For `select` element, options can be passed as another property (as shown in the example above). Since this is a [Boostrap Form Select](https://bootstrap-vue.org/docs/components/form-select), it supports a list of strings or key/value objects:

```json
[
  { value: 'a', text: 'First option' },
  { value: 'b', text: 'Second Option' },
  { value: 'b', text: 'Third Option' }
]
```
## Data Binding:
|Data | Binding |
|--|--|
| :items="items" | One-way binding
| v-model="items" | Two-way binding

When using `v-model` the data will be updated automatically:

`<b-editable-table v-model="items" :fields="fields"></b-editable-table>`

Otherwise, using `:items` prop to pass data will require updating the data manually on input change:
```javascript
<template>
<div>
    <b-editable-table :items="items" :fields="fields" @input-change="handleInput">
      <template #cell-isActive="data">
        <span v-if="data.value">Yes</span>
        <span v-else>No</span>
      </template>
    </b-editable-table>
    <pre>
      {{items}}
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
        { key: "name", label: "Name", type: "text", editable: true, placeholder: "Enter Name..."},
        { key: "department", label: "Department", type: "select", editable: true, class: "department-col" , options: [
          { value: 1, text: 'HR' },
          { value: 2, text: 'Engineer' },
          { value: 3, text: 'VP' },
          { value: 4, text: 'CEO'}
        ]},
        { key: "age", label: "Age", type:"range", min:"0", max:"100", editable: true, placeholder: "Enter Age..." },
        { key: "dateOfBirth", label: "Date Of Birth", type: "date", editable: true, class: "date-col", locale: "en",
          "date-format-options": {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          }, },
        { key: "isActive", label: "Is Active", type: "checkbox", editable: true },
      ],
       items: [
          { age: 40, name: 'Dickerson', department: 1, dateOfBirth: '1984-05-20', isActive: true },
          { age: 21, name: 'Larsen', department: 2, dateOfBirth: '1972-07-25', isActive: false },
          { age: 89, name: 'Geneva', department: 3, dateOfBirth: '1981-02-02', isActive: false },
          { age: 38, name: 'Jami', department: 4, dateOfBirth: '1964-10-19', isActive: true }
        ]
    };
  },
  methods: {
      handleInput(value, data) {
        const updatedRow = {...this.items[data.index], [data.field.key]: value};
        this.$set(this.items, data.index, updatedRow);
      }
  }
};
</script>
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
All Bootstrap form element's attributes and properties are supported by passing them directly through the `field` object. For example, you can add `size` and `locale` props to the date picker as follows:
```
{ key:  "dateOfBirth", label:  "Date Of Birth", size:"lg", locale:"fr", type: "date", editable: true }
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

## Keyboard Keys:
|Key |Behavior |
|--|--|
| Tab | Move to the next cell |
| Esc | Exit edit mode |

## Column Width

To set the width of specific columns, you can pass the `class` property in the `fields` object. This feature is part of Bootstrap Vue Table. You can learn more from [Bootstrap Table Docs](https://bootstrap-vue.org/docs/components/table).

Below is an example to how you add a CSS class to some or all of the columns and then set the width and other styling required:
```json
fields: [
	{ key: "name", label: "Name", type: "text", class: "name-col", editable: true, placeholder: "Enter Name..."},
	{ key: "age", label: "Age", type:"range", class: "age-col", min:"0", max:"100", editable: true, placeholder: "Enter Age..." }
]
```
```css
<style>
.name-col {
  width: 120px;
}
.age-col {
  width: 100px;
}
</style>
```

## Styling

There are no custom themes available yet but since it extends Bootstrap Vue Table, you can apply all options available from [Bootstrap Table Docs](https://bootstrap-vue.org/docs/components/table) as well as defining your own CSS class.

Here is an example of how to style and customize a table:

```html
<template>
<div>
    <b-editable-table bordered class="editable-table" v-model="items" :fields="fields" @input-change="handleInput">
      <template #cell-isActive="data">
        <span v-if="data.value">Yes</span>
        <span v-else>No</span>
      </template>
    </b-editable-table>
    <pre>
      {{items}}
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
        { key: "name", label: "Name", type: "text", editable: true, placeholder: "Enter Name...", class: "name-col"},
        { key: "department", label: "Department", type: "select", editable: true, class: "department-col" , options: [
          { value: 1, text: 'HR' },
          { value: 2, text: 'Engineer' },
          { value: 3, text: 'VP' },
          { value: 4, text: 'CEO'}
        ]},
        { key: "age", label: "Age", type:"range", min:"0", max:"100", editable: true, placeholder: "Enter Age...", class: "age-col" },
        { key: "dateOfBirth", label: "Date Of Birth", type: "date", editable: true, class: "date-col", locale: "en",
          "date-format-options": {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          }, },
        { key: "isActive", label: "Is Active", type: "checkbox", editable: true, class: "is-active-col" },
      ],
       items: [
          { age: 40, name: 'Dickerson', department: 1, dateOfBirth: '1984-05-20', isActive: true },
          { age: 21, name: 'Larsen', department: 2, dateOfBirth: '1972-07-25', isActive: false },
          { age: 89, name: 'Geneva', department: 3, dateOfBirth: '1981-02-02', isActive: false },
          { age: 38, name: 'Jami', department: 4, dateOfBirth: '1964-10-19', isActive: true }
        ]
    };
  },
  methods: {
      handleInput(value, data) {}
  }
};
</script>

<style>
table.editable-table {
  margin: auto;
}
.editable-table .data-cell {
  padding: 8px;
  vertical-align: middle;
}

.editable-table .custom-checkbox {
  width: 50px;
}

.name-col {
  width: 120px;
}

.department-col {
  width: 150px;
}

.age-col {
  width: 100px;
}

.date-col {
  width: 200px;
}

.is-active-col {
  width: 100px
}
</style>

```
`.data-cell` is an internal class used for the `div` element within every non-editable cell. You can customize it however you like. 

## Events:
|Event |Arguments | Description |
|--|--|--|
| input-change &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |`value` - Current cell value <br/> `data` - Row data (the same object returned by Bootstrap)| Emitted when any cell input changes

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

## Roadmap
 * [x] Tabbing
 * [x] Two-way binding
 * [ ] Support all bootstrap form elements
	 * [x] Text
	 * [x] Select
	 * [x] Number
	 * [x] Date
	 * [x] Checkbox
	 * [x] Rating
	 * [ ] Tags
	 * [ ] File upload
 * [ ] Enable row editing (allows to edit all the cells of a row at once)
 * [ ] Validation
 * [ ] Vue 3 support
 * [ ] Styling themes
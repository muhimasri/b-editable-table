


# BootstrapVue Editable Table

> **_NOTE:_** Starting from version 0.1.2-beta.4, a unique id for every row is required.

**Demo**: [Edit Cell](https://codesandbox.io/s/bootstrap-vue-editable-table-wx012?file=/src/App.vue) | [Edit Row](https://codesandbox.io/s/bootstrap-vue-row-editing-7w1scn?file=/src/App.vue) | [Add, Update and Remove Rows](https://codesandbox.io/s/vue-add-remove-table-rows-chtnj?file=/src/App.vue) | [Input Validation](https://codesandbox.io/s/vue-table-validation-pcysqz?file=/src/App.vue) | [Load Data via Rest API](https://codesandbox.io/s/vue-table-load-data-api-cub6i)

![Demo](https://github.com/muhimasri/b-editable-table/blob/main/images/demo.gif)

**This is a beta version with continuous changes and improvements, so please help by creating issues with proper labels (bug, question, enhancement...).** Thank you in advance 🙏

If you'd like to contribute, please read this [introductory article](https://muhimasri.com/blogs/part-2-create-a-dynamic-table-with-bootstrap-vue/) to understand the basic code structure. Whenever you are ready, create a pull request 👍

## Table of Contents
[Prerequisite](#prerequisite) <br/>
[Setup](#setup) <br/>
[Usage](#usage) <br/>
[Data Binding](#data-binding)<br/>
[Form Elements](#form-elements) <br/>
[Column Width](#column-width)<br/>
[Custom Styling](#custom-styling)<br/>
[Keyboard Keys](#keyboard-keys)<br/>
[Custom Cell](#custom-cell)<br/>
[Row Editing](#row-editing)<br/>
[Input Validation](#input-validation)<br/>
[Add, Update and Remove Rows](#add-update-and-remove-rows)<br/>
[Load Data via REST API](#load-data-via-rest-api)<br/>
[API](#api)<br/>
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
[Run example on CodeSandbox](https://codesandbox.io/s/bootstrap-vue-editable-table-wx012?file=/src/App.vue)
```html
<template>
<div>
    <b-editable-table bordered class="editable-table" v-model="items" :fields="fields" @input-change="handleInput">
      <template #cell(isActive)="data">
        <span v-if="data.value">Yes</span>
        <span v-else>No</span>
      </template>
    </b-editable-table>
</div>
</template>

<script>
import BEditableTable from 'bootstrap-vue-editable-table';
import {BButton} from 'bootstrap-vue';
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
        { key: "isActive", label: "Is Active", type: "checkbox", editable: true, class: "is-active-col" }
      ],
       items: [
          { id: 1, age: 40, name: 'Dickerson', department: 1, dateOfBirth: '1984-05-20', isActive: true },
          { id: 2, age: 21, name: 'Larsen', department: 2, dateOfBirth: '1972-07-25', isActive: false },
          { id: 3, age: 89, name: 'Geneva', department: 3, dateOfBirth: '1981-02-02', isActive: false },
          { id: 4, age: 38, name: 'Jami', department: 4, dateOfBirth: '1964-10-19', isActive: true },
        ]
    };
  },
  methods: {
      handleInput(data) {}
  }
};
</script>

<style>
table.editable-table {
  margin: auto;
}

table.editable-table td {
  vertical-align: middle;
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
Each row requires a unique id. Otherwise, the table will not function properly. `items` and `fields` are the same properties used in BootstrapVue Table except we are introducing a new `type` and `editable` property in the `fields` object to indicate what element is required in every column and whether or not it should be editable. Also, `v-model` is supported for two-way binding, but you can still use `:items` instead for one-way binding. More on that in the [Data Binding](#data-binding) section.

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

[Run example on CodeSandbox](https://codesandbox.io/s/vue-table-one-way-binding-ug039)
```html
<template>
<div>
    <b-editable-table bordered class="editable-table" :items="items" :fields="fields" @input-change="handleInput">
    </b-editable-table>
</div>
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
        { key: "isActive", label: "Is Active", type: "checkbox", editable: true, class: "is-active-col" }
      ],
       items: [
          { id:1, age: 40, name: 'Dickerson', department: 1, dateOfBirth: '1984-05-20', isActive: true },
          { id:2, age: 21, name: 'Larsen', department: 2, dateOfBirth: '1972-07-25', isActive: false },
          { id:3, age: 89, name: 'Geneva', department: 3, dateOfBirth: '1981-02-02', isActive: false },
          { id:4, age: 38, name: 'Jami', department: 4, dateOfBirth: '1964-10-19', isActive: true },
        ]
    };
  },
  methods: {
      handleInput(data) {
        const updatedRow = {...this.items[data.index], [data.field.key]: data.value};
        this.$set(this.items, data.index, updatedRow);
      }
  }
};
</script>
```
## Form Elements:
Every column requires a `type` and `editable` property to make the cell editable:

```json
[
  { key: "name", label: "Name", type: "text", editable: true},
  { key: "department", label: "Department", type: "select", options: ['Accounting', 'Marketing', 'Development', 'HR'], editable: true },
  { key: "age", label: "Age", type: "number", editable: true },
  { key: "dateOfBirth", label: "Date Of Birth", type: "date", editable: true },
  { key: "isActive", label: "Is Active", type: "checkbox", editable: true },
]
```
Elements' attributes and properties are supported by passing them directly through the `field` object. For example, you can add `size` and `locale` props to the date picker as follows:
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
| Tab | Move to the next cell and commit changes (only on `cell` edit mode) |
| Enter | Move to the next cell and commit changes (only on `cell` edit mode)|
| Esc | Exit edit mode and cancel changes |

## Column Width

To set the width of any column, you can pass the `class` property in the `fields` object. This feature is part of Bootstrap Vue Table. You can learn more from [Bootstrap Table Docs](https://bootstrap-vue.org/docs/components/table).

Below is an example of how you set the width by adding a CSS class to the column:
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

## Custom Styling

There are no custom themes available yet but since it extends Bootstrap Vue Table, you can apply all options available from [Bootstrap Table Docs](https://bootstrap-vue.org/docs/components/table) as well as defining your own CSS class.

Here is an example of how to style and customize a table:

```html
<template>
<div>
    <b-editable-table bordered class="editable-table" v-model="items" :fields="fields" @input-change="handleInput">
      <template #cell(isActive)="data">
        <span v-if="data.value">Yes</span>
        <span v-else>No</span>
      </template>
    </b-editable-table>
</div>
</template>

<script>
import BEditableTable from 'bootstrap-vue-editable-table';
import {BButton} from 'bootstrap-vue';
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
        { key: "isActive", label: "Is Active", type: "checkbox", editable: true, class: "is-active-col" }
      ],
       items: [
          { id: 1, age: 40, name: 'Dickerson', department: 1, dateOfBirth: '1984-05-20', isActive: true },
          { id: 2, age: 21, name: 'Larsen', department: 2, dateOfBirth: '1972-07-25', isActive: false },
          { id: 3, age: 89, name: 'Geneva', department: 3, dateOfBirth: '1981-02-02', isActive: false },
          { id: 4, age: 38, name: 'Jami', department: 4, dateOfBirth: '1964-10-19', isActive: true },
        ]
    };
  },
  methods: {
      handleInput(data) {}
  }
};
</script>

<style>
table.editable-table {
  margin: auto;
}

table.editable-table td {
  vertical-align: middle;
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

## Custom Cell
To customize a none editable cell, you can use Bootstraps' scoped slots.

**Example rendering a `boolean` field to `Yes` or `No` value:**

```javascript
<b-editable-table v-model="items" :fields="fields">
	<template #cell(isActive)="data">
        <span v-if="data.value">Yes</span>
        <span v-else>No</span>
     </template>
</b-editable-table>
```
For more details about custom slots, please read [BootstrapVue Table documentation](https://bootstrap-vue.org/docs/components/table) 

## Row Editing
The default edit behavior is `cell` mode. To change to `row` mode, you can pass the `editMode` prop with the `row` value:

[Run example on CodeSandbox](https://codesandbox.io/s/bootstrap-vue-row-editing-7w1scn?file=/src/App.vue)
```html
<template>
<div>
    <b-editable-table bordered class="editable-table" :editMode="'row'" v-model="items" :fields="fields" @input-change="handleInput">
      <template #cell(isActive)="data">
        <span v-if="data.value">Yes</span>
        <span v-else>No</span>
      </template>
    </b-editable-table>
</div>
</template>

<script>
import BEditableTable from 'bootstrap-vue-editable-table';
import {BButton} from 'bootstrap-vue';
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
        { key: "isActive", label: "Is Active", type: "checkbox", editable: true, class: "is-active-col" }
      ],
       items: [
          { id: 1, age: 40, name: 'Dickerson', department: 1, dateOfBirth: '1984-05-20', isActive: true },
          { id: 2, age: 21, name: 'Larsen', department: 2, dateOfBirth: '1972-07-25', isActive: false },
          { id: 3, age: 89, name: 'Geneva', department: 3, dateOfBirth: '1981-02-02', isActive: false },
          { id: 4, age: 38, name: 'Jami', department: 4, dateOfBirth: '1964-10-19', isActive: true },
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

table.editable-table td {
  vertical-align: middle;
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
For more details about custom slots, please read [BootstrapVue Table documentation](https://bootstrap-vue.org/docs/components/table) 

## Input Validation
Validation is supported for the following form elements:
* Input
* Select
* Date

To validate, you can pass the validator function as a property for the required field:
```javascript
{ validate: this.validateName, key: "name", label: "Name", type: "text", editable: true, placeholder: "Enter Name...", class: "name-col"},
```
The function parameter will have the current changed value:
```javascript
validateName(value) {
    if (value === '') {
        return {
            valid: false,
            errorMessage: 'Please enter name'
        }
    }
    return {
        valid: true
    };
}
```
If `valid` is `false`, the cell value will not be updated.
`errorMessage` is optional and will be displayed in a tooltip if the value is invalid.

Below is a complete example: 
```html
<template>
<div>
    <b-editable-table bordered class="editable-table" v-model="items" :fields="fields">
    </b-editable-table>
</div>
</template>

<script>
import BEditableTable from 'bootstrap-vue-editable-table';
import {BButton} from 'bootstrap-vue';
export default {
  components: {
    BEditableTable
  },
  data() {
    return {
      fields: [
        { key: "name", label: "Name", type: "text", editable: true, placeholder: "Enter Name...", class: "name-col", validate: this.validateName},
        { key: "department", label: "Department", type: "select", editable: true, class: "department-col" , options: [
          { value: 0, text: 'Please select department' },
          { value: 1, text: 'HR' },
          { value: 2, text: 'Engineer' },
          { value: 3, text: 'VP' },
          { value: 4, text: 'CEO'}
        ], validate: this.validateSelect},
        { key: "age", label: "Age", type:"range", min:"0", max:"100", editable: true, placeholder: "Enter Age...", class: "age-col" },
        { key: "dateOfBirth", label: "Date Of Birth", type: "date", editable: true, class: "date-col", locale: "en", validate: this.validateDate,
          "date-format-options": {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          }, },
        { key: "isActive", label: "Is Active", type: "checkbox", editable: true, class: "is-active-col" }
      ],
       items: [
          { id: 1, age: 40, name: 'Dickerson', department: 1, dateOfBirth: '1984-05-20', isActive: true },
          { id: 2, age: 21, name: 'Larsen', department: 2, dateOfBirth: '1972-07-25', isActive: false },
          { id: 3, age: 89, name: 'Geneva', department: 3, dateOfBirth: '1981-02-02', isActive: false },
          { id: 4, age: 38, name: 'Jami', department: 4, dateOfBirth: '1964-10-19', isActive: true },
        ]
    };
  },
  methods: {
      validateName(value) {
        if (value === '') {
          return {
            valid: false,
            errorMessage: 'Please enter name'
          }
        }
        return {valid: true};
      },
      validateDate(value) {
        const year = new Date(value).getFullYear();
        if (year > 2003) {
          return {
            valid: false,
            errorMessage: 'Must be above 19'
          }
        }
        return {valid: true};
      },
      validateSelect(value, options) {
        if (value === 0) {
         return {
            valid: false,
            errorMessage: 'Please select a department'
          }
        }
        return {valid: true};
      }
  }
};
</script>

<style>
table.editable-table {
  margin: auto;
}

table.editable-table td {
  vertical-align: middle;
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
## Add, Update and Remove Rows
To add, update and remove rows using external buttons, you need to pass the `rowUpdate` prop containing the row id and other required information. Below is a full example:

[Run example on CodeSandbox](https://codesandbox.io/s/vue-add-remove-table-rows-chtnj)
```html
<template>
  <div class="table-container">
    <b-button variant="success" @click="handleAdd()">Add</b-button>
    <b-editable-table
      disableDefaultEdit
      :rowUpdate="rowUpdate"
      :editMode="'row'"
      bordered
      class="editable-table"
      v-model="items"
      :fields="fields"
    >
      <template #cell(isActive)="data">
        <span v-if="data.value">Yes</span>
        <span v-else>No</span>
      </template>
      <template #cell(edit)="data">
        <div v-if="data.isEdit">
          <BIconX class="edit-icon" @click="handleSubmit(data, false)"></BIconX>
          <BIconCheck
            class="edit-icon"
            @click="handleSubmit(data, true)"
          ></BIconCheck>
        </div>
        <BIconPencil
          v-else
          class="edit-icon"
          @click="handleEdit(data, true)"
        ></BIconPencil>
      </template>
      <template #cell(delete)="data">
        <BIconTrash
          class="remove-icon"
          @click="handleDelete(data)"
        ></BIconTrash>
      </template>
    </b-editable-table>
  </div>
</template>

<script>
import BEditableTable from "bootstrap-vue-editable-table";
import {
  BIconTrash,
  BIconPencil,
  BIconX,
  BIconCheck,
  BButton,
} from "bootstrap-vue";
export default {
  components: {
    BEditableTable,
    BIconX,
    BIconTrash,
    BIconPencil,
    BIconCheck,
    BButton,
  },
  data() {
    return {
      fields: [
        { key: "delete", label: "" },
        {
          key: "name",
          label: "Name",
          type: "text",
          editable: true,
          placeholder: "Enter Name...",
          class: "name-col",
        },
        {
          key: "department",
          label: "Department",
          type: "select",
          editable: true,
          class: "department-col",
          options: [
            { value: 1, text: "HR" },
            { value: 2, text: "Engineer" },
            { value: 3, text: "VP" },
            { value: 4, text: "CEO" },
          ],
        },
        {
          key: "age",
          label: "Age",
          type:"range", min:"0", max:"100",
          editable: true,
          placeholder: "Enter Age...",
          class: "age-col",
        },
        {
          key: "dateOfBirth",
          label: "Date Of Birth",
          type: "date",
          editable: true,
          class: "date-col",
          locale: "en",
          "date-format-options": {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          },
        },
        {
          key: "isActive",
          label: "Is Active",
          type: "checkbox",
          editable: true,
          class: "is-active-col",
        },
        { key: "edit", label: "" },
      ],
      items: [
        {
          id: 1,
          age: 40,
          name: "Dickerson",
          department: 1,
          dateOfBirth: "1984-05-20",
          isActive: true,
        },
        {
          id: 2,
          age: 21,
          name: "Larsen",
          department: 2,
          dateOfBirth: "1972-07-25",
          isActive: false,
        },
        {
          id: 3,
          age: 89,
          name: "Geneva",
          department: 3,
          dateOfBirth: "1981-02-02",
          isActive: false,
        },
        {
          id: 4,
          age: 38,
          name: "Jami",
          department: 4,
          dateOfBirth: "1964-10-19",
          isActive: true,
        },
      ],
      rowUpdate: {},
    };
  },
  methods: {
    handleAdd() {
      this.rowUpdate = {
        edit: true,
        id: Date.now(),
        action: "add",
        data: {
          id: Date.now(),
          age: null,
          name: "",
          department: 1,
          dateOfBirth: null,
          isActive: false,
        },
      };
    },
    handleSubmit(data, update) {
      this.rowUpdate = {
        edit: false,
        id: data.id,
        action: update ? "update" : "cancel",
      };
    },
    handleEdit(data) {
      this.rowUpdate = { edit: true, id: data.id };
    },
    handleDelete(data) {
      this.rowUpdate = { id: data.id, action: "delete" };
    }
  },
};
</script>

<style>
.table-container {
  margin: 10px;
}

table.editable-table {
  margin-top: 10px;
}

table.editable-table td {
  vertical-align: middle;
}

.editable-table .data-cell {
  padding: 8px;
  vertical-align: middle;
}

.editable-table .custom-checkbox {
  width: 50px;
}

.remove-icon {
  color: red;
  cursor: pointer;
  font-size: 20px;
}

.edit-icon {
  color: rgb(4, 83, 158);
  cursor: pointer;
  font-size: 20px;
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
  width: 100px;
}
</style>
```

## Load Data via REST API
[Run example on CodeSandbox](https://codesandbox.io/s/vue-table-load-data-api-cub6i)
```html
<template>
<div>
    <b-editable-table :busy="loading" bordered class="editable-table" v-model="users" :fields="fields">
      <template #cell-isActive="data">
        <span v-if="data.value">Yes</span>
        <span v-else>No</span>
      </template>
      <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
    </b-editable-table>
</div>
</template>

<script>
import BEditableTable from 'bootstrap-vue-editable-table';
import {BSpinner} from 'bootstrap-vue';
export default {
  components: {
    BEditableTable,
    BSpinner
  },
  data() {
    return {
      fields: [
        {id: 1, key: "name", label: "Name", type: "text", editable: true },
        {id: 2, key: "email", label: "Email", type: "email", editable: true },
        {id: 3, key: "phone", label: "Phone", type: "text", editable: true }
      ],
      users: [],
      loading: false
    };
  },
  async mounted() {
    this.loading = true;
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    this.users = users;
    this.loading = false;
  }
};
</script>

<style>
table.editable-table {
  margin: auto;
}

table.editable-table td {
  vertical-align: middle;
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

</style>

```
## API
### Events:
|Event |Arguments | Description |
|--|--|--|
| input-change &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | `data` - The same object returned by Bootstrap with additional `id` property and the current changed `value` | Emitted when any input value changes

### Properties:
|Property |Options| Default | Description |
|--|--|--|--|
| editMode |`cell` - Edit one cell <br/> `row` - Edit all the cells of a row at once| `cell`| Change edit mode
| editTrigger|`click` - Edit on mouse click <br/> `dblclick` - Edit on mouse double click| `click`| Change edit trigger
| disableDefaultEdit|`true` - Disable default edit behavior. This is useful when wanting to change the edit manually through an external button <br/> `false` - Keep default edit behavior. This will make the cell editable as soon as clicking on the `cell` or `row`| `false`| Turn off default edit behavior
| rowUpdate | | | Update a specified row. [Please refer to this section for usage example](#add-update-and-remove-rows) 
## Supported Version
This has been tested on:

 - vue `v2.6.14`
 - bootstrap `v4.6.1`
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
 * [x] Enable row editing (allows to edit all the cells of a row at once)
 * [x] Validation
 * [ ] Vue 3 support
 * [ ] Styling themes
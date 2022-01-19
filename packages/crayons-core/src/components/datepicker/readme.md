# Datepicker (fw-datepicker)

fw-datepicker displays an input box with a calendar that enables selecting a date or date range. The values preselected in the input box and calendar are based on the fw-datepicker attribute values.

All the date formats passed as attribute's values must be valid [ISO Date format](https://en.wikipedia.org/wiki/ISO_8601).

## Demo

```html live
<fw-label value="Single date picker" color="yellow"></fw-label><br />
<fw-datepicker value="2021-12-02" display-format="DD-MM-YYYY"></fw-datepicker>
<fw-label value="A date range picker" color="yellow"></fw-label><br />
<fw-datepicker
  mode="range"
  from-date="2022-01-02"
  to-date="2022-01-04"
  display-format="DD-MM-YYYY"
></fw-datepicker>
```

## Usage

<code-group>
<code-block title="HTML">
```html
<fw-label value="Single date picker" color="yellow"></fw-label><br/>
<fw-datepicker value="2021-12-02" display-format="DD-MM-YYYY"></fw-datepicker>
<fw-label value="A date range picker" color="yellow"></fw-label><br/>
<fw-datepicker
  mode="range"
  from-date="2022-01-02"
  to-date="2022-01-04"
  display-format="DD-MM-YYYY"
></fw-datepicker>
```
</code-block>

<code-block title="React">
```jsx
import React from "react";
import ReactDOM from "react-dom";
import { FwDatepicker } from "@freshworks/crayons/react";
function App() {
  return (<div>
    <label>Single date picker</label><br/>
    <FwDatepicker value="2021-12-02" display-format="DD-MM-YYYY"></FwDatepicker>
    <label>A date range picker</label><br/>
    <FwDatepicker mode="range"
  from-date="2022-01-02"
  to-date="2022-01-04"
  display-format="DD-MM-YYYY"></FwDatepicker>
  </div>)
}
```
</code-block>
</code-group>

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                                                                                                                                                    | Type                               | Default         |
| --------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | --------------- |
| `displayFormat` | `display-format` | Format in which the date values selected in the calendar are populated in the input box. Defaults to ISO date format.                                          | `string`                           | `'YYYY-MM-DD'`  |
| `formId`        | `form-id`        | id for the form using this component. This prop is set from the `fw-form`                                                                                      | `string`                           | `''`            |
| `fromDate`      | `from-date`      | Starting date of the date range that is preselected in the calendar, if mode is range. Must be a date later than the min-date value and valid ISO date format. | `string`                           | `undefined`     |
| `maxDate`       | `max-date`       | Latest date a user can select in the calendar, if mode is range. Must be a valid ISO date format if set.                                                       | `string`                           | `undefined`     |
| `minDate`       | `min-date`       | Earliest date a user can select in the calendar, if mode is range. Must be a valid ISO date format if set.                                                     | `string`                           | `undefined`     |
| `mode`          | `mode`           | Type of date selection enabled for the calendar. If the value is range, a user can select a date range in the calendar.                                        | `"range" \| "single date"`         | `'single date'` |
| `name`          | `name`           | Name of the component, saved as part of form data.                                                                                                             | `string`                           | `''`            |
| `placeholder`   | `placeholder`    | Text displayed in the input box before a user selects a date or date range.                                                                                    | `string`                           | `undefined`     |
| `required`      | `required`       | Specifies the input box as a mandatory field and displays an asterisk next to the label. If the attribute’s value is undefined, the value is set to false.     | `boolean`                          | `false`         |
| `state`         | `state`          | Theme based on which the input of the datepicker is styled.                                                                                                    | `"error" \| "normal" \| "warning"` | `'normal'`      |
| `toDate`        | `to-date`        | Ending date of the date range that is preselected in the calendar, if mode is range. Must be a date earlier than the max-date value and valid ISO date format. | `string`                           | `undefined`     |
| `value`         | `value`          | Date that is preselected in the calendar, if mode is single date or undefined. If set this must be valid ISO date format.                                      | `string`                           | `undefined`     |


## Events

| Event      | Description                                     | Type               |
| ---------- | ----------------------------------------------- | ------------------ |
| `fwChange` | /**    Triggered when the update button clicked | `CustomEvent<any>` |


## Methods

### `getValue() => Promise<string | { fromDate: string; toDate: string; }>`



#### Returns

Type: `Promise<string | { fromDate: string; toDate: string; }>`



### `setFocus() => Promise<void>`

Sets focus on a specific `fw-datepicker`. Use this method instead of the global `input.focus()`.

#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [fw-form-control](../form-control)

### Depends on

- [fw-popover](../popover)
- [fw-input](../input)
- [fw-select](../select)
- [fw-select-option](../select-option)
- [fw-button](../button)

### Graph
```mermaid
graph TD;
  fw-datepicker --> fw-popover
  fw-datepicker --> fw-input
  fw-datepicker --> fw-select
  fw-datepicker --> fw-select-option
  fw-datepicker --> fw-button
  fw-input --> fw-icon
  fw-icon --> fw-toast-message
  fw-toast-message --> fw-spinner
  fw-toast-message --> fw-icon
  fw-select --> fw-tag
  fw-select --> fw-popover
  fw-select --> fw-button
  fw-select --> fw-spinner
  fw-select --> fw-icon
  fw-select --> fw-list-options
  fw-tag --> fw-avatar
  fw-tag --> fw-icon
  fw-button --> fw-spinner
  fw-button --> fw-icon
  fw-list-options --> fw-select-option
  fw-list-options --> fw-input
  fw-select-option --> fw-icon
  fw-select-option --> fw-checkbox
  fw-select-option --> fw-avatar
  fw-form-control --> fw-datepicker
  style fw-datepicker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

Built with ❤ at Freshworks

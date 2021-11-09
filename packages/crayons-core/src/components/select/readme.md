# Select (fw-select)
fw-select displays a list or drop-down box that enables selection of an option or multiple options from an available list of values.

## Usage

The data for the select can either be passed as a child or via a datasource which follows the fw-select-option schema.

```html live
<fw-select label="House Name" required="true" value="1" placeholder="Your choice" state-text="Select singluar option">
  <fw-select-option value="1">Starks</fw-select-option>
  <fw-select-option value="2">Lannisters</fw-select-option>
</fw-select>
<fw-select label="Names" value="1" placeholder="Your choices" state-text="Select multiple options" multiple>
  <fw-select-option value="1" selected>Starks</fw-select-option>
  <fw-select-option value="2" >Lannisters</fw-select-option>
  <fw-select-option value="3">Sand</fw-select-option>
  <fw-select-option value="4">Greyjoys</fw-select-option>
  <fw-select-option value="5">Tyrell</fw-select-option>
</fw-select>
```

```html live
<fw-select id="simpleSelect" label="Football Teams" value="1" placeholder="Your choices" state-text="Select multiple options" multiple>
</fw-select>

<fw-select id="complexSelect" label="Strawhat Pirates" value="1" placeholder="Your choices" state-text="Select multiple options" multiple>
</fw-select>

<script type="application/javascript">
  var dataSource = [
    { value: '1', text: 'Liverpool' },
    { value: '2', text: 'Borussia Dortmund' },
    { value: '3', text: 'Roma' },
    { value: '4', text: 'Marseille' },
  ];
  var standardVariant = document.getElementById('simpleSelect');
  standardVariant.options = dataSource;
  standardVariant.value = ['2'];

  var iconDataSource = [
    {
      value: '1',
      text: 'Luffy',
      subText: 'Pirate King',
      graphicsProps: { name: 'verified' },
    },
    {
      value: '2',
      text: 'Zorro',
      subText: 'Best Swordsman',
      graphicsProps: { name: 'magic-wand' },
    },
    {
      value: '3',
      text: 'Sanji',
      subText: 'Best Chef',
      graphicsProps: { name: 'ecommerce' },
    },
  ];
  var iconVariant = document.getElementById('complexSelect');
  iconVariant.options = iconDataSource;
</script>
```


<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                                                                                                                                                                                                               | Type                               | Default            |
| ------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ------------------ |
| `disabled`    | `disabled`     | Disables the component on the interface. If the attribute’s value is undefined, the value is set to false.                                                                                                                                | `boolean`                          | `false`            |
| `forceSelect` | `force-select` | If true, the user must select a value. The default value is not displayed.                                                                                                                                                                | `boolean`                          | `true`             |
| `isCheckbox`  | `is-checkbox`  | Place a checkbox.                                                                                                                                                                                                                         | `boolean`                          | `false`            |
| `label`       | `label`        | Label displayed on the interface, for the component.                                                                                                                                                                                      | `string`                           | `''`               |
| `max`         | `max`          | Works with `multiple` enabled. Configures the maximum number of options that can be selected with a multi-select component.                                                                                                               | `number`                           | `Number.MAX_VALUE` |
| `multiple`    | `multiple`     | Enables selection of multiple options. If the attribute’s value is undefined, the value is set to false.                                                                                                                                  | `boolean`                          | `false`            |
| `name`        | `name`         | Name of the component, saved as part of form data.                                                                                                                                                                                        | `string`                           | `''`               |
| `options`     | `options`      | Allow to search for value. Default is true.                                                                                                                                                                                               | `any`                              | `undefined`        |
| `placeholder` | `placeholder`  | Text displayed in the list box before an option is selected.                                                                                                                                                                              | `string`                           | `undefined`        |
| `readonly`    | `readonly`     | If true, the user cannot modify the default value selected. If the attribute's value is undefined, the value is set to true.                                                                                                              | `boolean`                          | `false`            |
| `required`    | `required`     | Specifies the select field as a mandatory field and displays an asterisk next to the label. If the attribute’s value is undefined, the value is set to false.                                                                             | `boolean`                          | `false`            |
| `searchable`  | `searchable`   | Allow to search for value. Default is true.                                                                                                                                                                                               | `boolean`                          | `true`             |
| `state`       | `state`        | Theme based on which the list box is styled.                                                                                                                                                                                              | `"error" \| "normal" \| "warning"` | `'normal'`         |
| `stateText`   | `state-text`   | Descriptive or instructional text displayed below the list box.                                                                                                                                                                           | `string`                           | `''`               |
| `type`        | `type`         | Type of option accepted as the input value. If a user tries to enter an option other than the specified type, the list is not populated.                                                                                                  | `"number" \| "text"`               | `'text'`           |
| `value`       | `value`        | Value of the option that is displayed as the default selection, in the list box. Must be a valid value corresponding to the fw-select-option components used in Select.                                                                   | `any`                              | `undefined`        |
| `variant`     | `variant`      | Standard is the default option without any graphics other options are icon and avatar which places either the icon or avatar at the beginning of the row. The props for the icon or avatar are passed as an object via the graphicsProps. | `"avatar" \| "icon" \| "standard"` | `'standard'`       |


## Events

| Event      | Description                                                                 | Type               |
| ---------- | --------------------------------------------------------------------------- | ------------------ |
| `fwBlur`   | Triggered when the list box loses focus.                                    | `CustomEvent<any>` |
| `fwChange` | Triggered when a value is selected or deselected from the list box options. | `CustomEvent<any>` |
| `fwFocus`  | Triggered when the list box comes into focus.                               | `CustomEvent<any>` |


## Methods

### `getSelectedItem() => Promise<any>`



#### Returns

Type: `Promise<any>`



### `setSelectedValues(values: string[]) => Promise<any>`



#### Returns

Type: `Promise<any>`




## CSS Custom Properties

| Name           | Description                            |
| -------------- | -------------------------------------- |
| `--max-height` | Maximum height of the select component |
| `--min-height` | Minimum height of the select component |


## Dependencies

### Used by

 - [fw-datepicker](../datepicker)
 - [fw-timepicker](../timepicker)

### Depends on

- [fw-tag](../tag)
- [fw-popover](../popover)
- [fw-list-options](../options-list)

### Graph
```mermaid
graph TD;
  fw-select --> fw-tag
  fw-select --> fw-popover
  fw-select --> fw-list-options
  fw-list-options --> fw-select-option
  fw-list-options --> fw-input
  fw-select-option --> fw-icon
  fw-select-option --> fw-checkbox
  fw-input --> fw-icon
  fw-datepicker --> fw-select
  fw-timepicker --> fw-select
  style fw-select fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

Built with ❤ at Freshworks

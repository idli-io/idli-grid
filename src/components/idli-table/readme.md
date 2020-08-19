# idli-table



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                                                                                                                                                                        | Type              | Default     |
| --------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ----------- |
| `columnConfig`  | `column-config`  | The grid columns configuration. Sample [{"name":"name","label":"Name","width":300,"fixed":true},{"name":"age","label":"Age"},{"name":"eyeColor","label":"Eye Color","width":500}]. | `any[] \| string` | `[]`        |
| `data`          | `data`           |                                                                                                                                                                                    | `any[] \| string` | `[]`        |
| `rowKey`        | `row-key`        |                                                                                                                                                                                    | `string`          | `'id'`      |
| `selectionType` | `selection-type` |                                                                                                                                                                                    | `"checkbox"`      | `undefined` |


## Events

| Event          | Description | Type               |
| -------------- | ----------- | ------------------ |
| `cellClicked`  |             | `CustomEvent<any>` |
| `selectChange` |             | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

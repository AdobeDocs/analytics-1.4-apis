# GetTemplate

Similar to the Template tab in the Saint Classifications tool in the Admin Console UI, this retrieves a template to use for importing SAINT data.

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`report_suite` |`xsd:string` | The report suite where you want to import data. |
|`relation_id` |`xsd:int` | `relation_id` for which you want to get a template (e.g. 101=evar1, 51=product, etc) |
|`text_div_nums` |`xsd:int_array` | (Optional) an array of text classification division_numbers to include as columns in the template. |
|`numeric_div_nums` |`xsd:int_array` | (Optional) an array of numeric classification division_numbers to include as columns in the template. |
|`encoding` |`xsd:string` | The encoding to use for the template |

## Response

| Name | Type | Description |
|--------|--------|---------------|
|`saint_template` |`xsd:string` | The template, or headers in the SAINT file |

**Parent topic:** [Methods](../methods/c_saint_methods.md)


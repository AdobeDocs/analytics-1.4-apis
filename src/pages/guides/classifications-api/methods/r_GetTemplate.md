# GetTemplate

Similar to the Template tab in the Classifications tool in the Admin Console UI, this retrieves a template to use for importing classifications data.

## Classifications.GetTemplate Parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid\_list** | `xsd:string` | The report suite where you want to import data. |
| **element** | `xsd:string` |  `relation_id` for which you want to get a template \(e.g. 101=evar1, 51=product, etc\) |
| **classification\_names** | `xsd:string_array` | \(optional\) an array of text classification names to include as columns in the template. |
| **encoding** | `xsd:string` | The encoding to use for the template |

## Classifications.GetTemplate Response

| Type | Description |
|--------|---------------|
| [classifications\_report\_suite\_template\_array](../data_types/r_classifications_report_suite_template_array.md#) - An array of [classifications\_report\_suite\_template](../data_types/r_classifications_report_suite_template.md#).| The template, or headers in the classifications export file |

**Parent topic:** [Methods](../methods/classifications_methods.md)


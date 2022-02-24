# DeleteClassification

Deletes a classification from one or more report suites.

## ReportSuite.DeleteClassification Parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `array(xsd:string)` | A list of report suite IDs.|
| **element** | `xsd:string` | The element from which you want to delete the classification. |
| **name** | `xsd:string` | The name of the classification to delete. |

## ReportSuite.DeleteClassification Response

| Type | Description |
|--------|---------------|
| `xsd:boolean` | Returns `true` if the operation is successful. |

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


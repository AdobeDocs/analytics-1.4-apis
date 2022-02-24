# SaveClassification

Saves a classification for each of the specified report suites.

## ReportSuite.SaveClassification parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `array(xsd:string)` |A list of report suite IDs.|
| **date_enabled** | `xsd:boolean` |Determines whether to treat this classification like a campaign.|
| **element** | `xsd:string` |The name of the element whose classifications are being retrieved.|
| **name** | `xsd:string` |Visible name of the classification.|
| **new_name** | `xsd:string` | |
| **parent_name** | `xsd:string` |Contains the parent classification's `div_num` if this is a sub-classification; otherwise it is `0`.|
| **type** | [classification_type_enum](../../data_types/r_classification_type_enum.md#) | Classification type, one of the following: text numeric numeric_percent numeric_currency|

## ReportSuite.SaveClassification response

|Type|Description|
|----|-----------|
| `xsd:boolean` |Returns `true` if the update operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


# SaveClassificationHierarchies

Saves a classification for each of the specified report suites.

## ReportSuite.SaveClassificationHierarchies parameters

|Name|Type|Description|
|----|----|-----------|
|**c\_options** |`array(xsd:string)` |Deprecated.|
|**c\_view** |[tns:classification\_view](../../data_types/r_classification_view.md#) |An enumerated type that specifies the report for which you want to save the classifications.|
|**camp\_view** |`xsd:int` |Determines whether to treat this classification like a campaign.|
|**div\_num** |`xsd:int` |Numerical identifier of this classification.|
|**name** |`xsd:string` |Visible name of the classification.|
|**parent\_div\_num** |`xsd:int` |Contains the parent classification's `div_num` if this is a sub-classification; otherwise it is `0`.|
|**rsid\_list** |`array(xsd:string)` |A list of report suite IDs.|
|**type** |[tns:classification\_type](../../data_types/r_classification_type.md#) |An enumerated type that specifies the type of classification.|
|**update** |`xsd:int` |Enables the classification \(when set to `1`\); otherwise, set to `0`.|

## ReportSuite.SaveClassificationHierarchies response

|Type|Description|
|----|-----------|
|`xsd:int` |Returns `1` if the update operation is successful. Otherwise, returns `0`.|

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


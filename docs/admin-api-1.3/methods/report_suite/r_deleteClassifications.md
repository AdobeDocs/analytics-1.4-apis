# DeleteClassifications

Deletes a classification from one or more report suites.

## ReportSuite.DeleteClassifications Parameters

|Name|Type|Description|
|----|----|-----------|
|`c\_view` |[classification\_view](../../data_types/r_classification_view.md#) | An enumerated type that specifies the report for which you want to delete the classifications. |
|`div\_num` |`xsd:int` | Numerical identifier of this classification. |
|`parent\_div\_num` |`xsd:int` | Contains the parent classification's div\_num if this is a sub-classification; otherwise it is 0. |
|`rsid\_list` |`array(xsd:string)` | A list of report suite IDs. |

## ReportSuite.DeleteClassifications Response

| Type | Description |
|--------|---------------|
|`xsd:int` | Returns 1 if the update operation is successful. Otherwise, returns 0. |

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


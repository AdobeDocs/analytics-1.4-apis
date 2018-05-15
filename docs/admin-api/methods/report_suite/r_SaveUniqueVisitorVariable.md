# SaveUniqueVisitorVariable

Updates the unique visitor variable for the specified report suites.

## ReportSuite.SaveUniqueVisitorVariable parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` | A list of report suite IDs. |
|**unique\_visitor\_variable** |`xsd:string` | The commerce variable to use for tracking unique visitors. For example, specify `7` for eVar7. |

## ReportSuite.SaveUniqueVisitorVariable response

|Type|Description|
|----|-----------|
|`xsd:boolean` | Returns `true` if the operation is successful. |

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


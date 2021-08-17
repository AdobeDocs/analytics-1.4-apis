# SaveFindingMethods

Updates the finding method settings for the specified report suites.

## ReportSuite.SaveFindingMethods parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` |A list of report suite IDs.|
|**reports** |[tns:finding\_methods](../../data_types/r_finding_methods.md#) |The finding method settings. Finding methods are specified on a per-variable basis.|

## ReportSuite.SaveFindingMethods response

|Type|Description|
|----|-----------|
|`xsd:int` |Returns `1` if the operation is successful. Otherwise, returns `0`.|

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


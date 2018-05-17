# SaveSuccessEvents

Updates success events to each of the specified report suites.

## ReportSuite.SaveSuccessEvents parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` |A list of report suite IDs.|
|**event** |`array(tns:event)` |A list of success events.|

## ReportSuite.SaveSuccessEvents response

|Type|Description|
|----|-----------|
|`xsd:int` |Returns `1` if the operation is successful. Otherwise, returns `0`.|

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


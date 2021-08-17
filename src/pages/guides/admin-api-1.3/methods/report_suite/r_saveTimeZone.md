# SaveTimeZone

Updates the time zone setting for each of the specified report suites.

## ReportSuite.SaveTimeZone parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` |A list of report suite IDs.|
|**time\_zone** |[tns:timezone\_enum](../../data_types/r_timezone_enum.md#) |The time zone to assign with the report suites.|

## ReportSuite.SaveTimeZone response

|Type|Description|
|----|-----------|
|`xsd:int` |Returns `1` if the operation is successful. Otherwise, returns `0`.|

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


# SaveTimeZone

Updates the time zone setting for each of the specified report suites.

## ReportSuite.SaveTimeZone parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`array(xsd:string)` |A list of report suite IDs.|
|**time_zone** |[time_zone_enum](../../data_types/r_timezone_enum.md#) |The time zone to assign with the report suites.|

## ReportSuite.SaveTimeZone response

|Type|Description|
|----|-----------|
|`xsd:boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


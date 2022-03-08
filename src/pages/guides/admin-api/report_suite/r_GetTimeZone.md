# GetTimeZone

Retrieves the Time Zone setting for each of the specified report suites.

## ReportSuite.GetTimeZone parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` |A list of report suite IDs.|

## ReportSuite.GetTimeZone response

|Type|Description|
|----|-----------|
| [report_suite_time_zone[]](../../data_types/r_report_suite_time_zone_array.md#) - An array of [report_suite_time_zone](../../data_types/r_report_suite_time_zone.md#).|A list of report suites with the time zone setting for each.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


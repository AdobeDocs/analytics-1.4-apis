# GetRealTimeSettings

Returns the metrics that are configured to provide real time data.

See [Real Time Reports](https://github.com/Adobe-Experience-Cloud/analytics-1.4-apis/blob/master/docs/reporting-api/real_time.md).

## ReportSuite.GetRealTimeSettings parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` |A list of report suite IDs.|

## ReportSuite.GetRealTimeSettings response

|Type|Description|
|----|-----------|
| [report\_suite\_real\_time\_settings\_array](../../data_types/r_report_suite_real_time_settings_array.md#)- An array of [report\_suite\_real\_time\_settings](../../data_types/r_report_suite_real_time_settings.md#) | Returns an array that contains the metrics with corresponding elements \(dimensions\) and classifications for which real time reports are enabled. |

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


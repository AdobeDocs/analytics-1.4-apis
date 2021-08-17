# GetRealTimeConfiguration

Returns the metrics that are configured to provide real time data.

See [Real Time Reports](../../../reporting-api/real_time.md).

## ReportSuite.GetRealTimeConfiguration parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid** |`xsd:string` |A report suite ID.|

## ReportSuite.GetRealTimeConfiguration response

|Type|Description|
|----|-----------|
| [realTimeReportCorrelations](../../data_types/r_realTimeReportCorrelations.md#)- An array of [realTimeReportCorrelation](../../data_types/r_realTimeReportCorrelation.md#) | Returns an array that contains the metrics with corresponding elements \(dimensions\) and classifications for which real time reports are enabled. |

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


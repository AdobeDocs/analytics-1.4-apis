# DeleteCalculatedMetrics

Deletes the specified set of calculated metrics for each of the specified report suites.

## ReportSuite.DeleteCalculatedMetrics parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid\_list** | `array(xsd:string)` |A list of report suite IDs.|
| **calculated\_metrics** | [calculated\_metrics](../../data_types/r_calculated_metrics.md#) - An array of [calculated\_metric](../../data_types/r_calculated_metric.md#).|List of calculated metrics to delete from the specified report suites.|

## ReportSuite.DeleteCalculatedMetrics response

|Type|Description|
|----|-----------|
| `xsd:boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


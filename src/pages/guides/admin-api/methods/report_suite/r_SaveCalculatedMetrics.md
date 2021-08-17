# SaveCalculatedMetrics

Saves a list of calculated metrics to each of the specified report suites.

## ReportSuite.SaveCalculatedMetrics parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid\_list** | `array(xsd:string)` |A list of report suite IDs.|
| **calculated\_metrics** | [calculated\_metrics](../../data_types/r_calculated_metrics.md#) - An array of [calculated\_metric](../../data_types/r_calculated_metric.md#) | A list of calculated metrics.|

## ReportSuite.SaveCalculatedMetrics response

|Type|Description|
|----|-----------|
| `xsd:boolean` |Returns `true` if the update operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


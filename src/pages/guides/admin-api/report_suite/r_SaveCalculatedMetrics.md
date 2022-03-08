# SaveCalculatedMetrics

Saves a list of calculated metrics to each of the specified report suites.

## ReportSuite.SaveCalculatedMetrics parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` |A list of report suite IDs.|
| **calculated_metrics** | [calculated_metrics](../../data_types/r_calculated_metrics.md#) - An array of [calculated_metric](../../data_types/r_calculated_metric.md#) | A list of calculated metrics.|

## ReportSuite.SaveCalculatedMetrics response

|Type|Description|
|----|-----------|
| `boolean` |Returns `true` if the update operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


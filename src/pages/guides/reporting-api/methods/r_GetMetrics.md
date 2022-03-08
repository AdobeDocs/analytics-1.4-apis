# GetMetrics

Retrieves a list of possible valid elements for a report.

See [Analytics Metrics](../metrics.md#).

## Permissions

Specific users may not have access to certain metrics. The metrics returned by `GetMetrics` reflect those restrictions. Requesting a metric that one doesn't have permission to access results in a `metric_inaccessible` error.

## Report.GetMetrics Parameters

|Name|Type|Description|
|----|----|-----------|
| `reportSuiteID` | `string` |The Analytics report suite you want to use to generate the report. For example: `reportSuiteID = "corp1"` |
| `existingElements` | `array[string]` |(Optional) Include a list of elements already present in the reportDescription to get compatible metrics.|
| `existingMetrics` | `array[string]` |(Optional) Include a list of metrics already present in the reportDescription to get compatible metrics.|
| `reportType` | `string` |(Optional) Include the report type (any, ranked, trended, pathing, fallout, realtime) to get compatible metrics.|

## Report.GetMetrics response

|Type|Description|
|----|-----------|
| [reportMetricList](../data_types/r_reportMetrics.md#) - An array of [reportMetric](../data_types/r_reportMetric.md#) | A structure that defines a metric that appears in a report. |

**Parent topic:** [Methods](../methods/methods.md)


# reportMetric

A structure that defines a metric that appears in a report.

|Element|Type|Description|
|-------|----|-----------|
|`id` |`xsd:string` | The metric ID. This must match the metric ID specified in the report description. |
|`name` |`xsd:string` | The metric name. |
|`type` |`xsd:string` | The metric type, either "number", or "currency". |
|`decimals` |`xsd:int` | The number of decimal places in the metric values. |
|`forumula` |`xsd:string` | The formula if the metric is a calculated metric. |
|`latency` |`xsd:int` | Number of seconds the metric data is latent. |
|`current` |`xsd:boolean` | True indicates that the metric contains the most recent data available as a result of the currentData flag being set to true in the reportDescription. |

**Parent topic:** [Data Types](../data_types/datatypes.md)


# reportMetric

A structure that defines a metric that you want to include in the report definition.

|Name|Type|Description|
|----|----|-----------|
|**id** |`xsd:string` |The metric ID. This must match the metric ID specified in the report description.|
|**name** |`xsd:string` |The metric name.|
|**type** |[reportMetricType](r_reportMetricType.md#) |The metric type.|
|**latency** |`xsd:int` |**v1.3, REST only** Number of seconds the metric data is latent.|
|**current** |`xsd:boolean` |**v1.3, REST only** True indicates that the metric contains the most recent data available as a result of the `currentData` flag being set to true in the [reportDescription](r_reportDescription.md#).|

**Parent topic:** [Data Types](../data_types/c_data_types.md)


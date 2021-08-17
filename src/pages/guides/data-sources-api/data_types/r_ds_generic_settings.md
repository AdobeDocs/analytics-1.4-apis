# ds\_generic\_settings

Data structure that contains configuration settings for a Generic data source.

|Element|Type|Description|
|-------|----|-----------|
|**dataSourceName** |`xsd:string` | The Data Source's name. |
|**dataSourceEmail** |`xsd:string` | The email address where Data Sources sends notifications and alerts. |
|**metricNames** |`array(xsd:string)` | The metrics to include in the data source. This array must have the same number of elements as `metricEvents`. |
|**metricEvents** |`array(xsd:string)` | The Analytics event to associate with each metric. This array must have the same number of elements as `metricNames`. |
|**dimensionNames** |`array(xsd:string)` | The dimensions to include in the data source. This array must have the same number of elements as `dimensionVariables`. |
|**dimensionVariables** |`array(xsd:string)` | The Analytics dimensions, such as eVars and campaigns, to associated with each dimension. This array must have the same number of elements as `dimensionNames`. |

**Parent topic:** [Data Types](../data_types/c_data_types.md)


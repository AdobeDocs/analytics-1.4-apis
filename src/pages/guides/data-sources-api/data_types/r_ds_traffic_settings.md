# ds_traffic_settings

Data structure that contains configuration settings for a Traffic data source.

|Element|Type|Description|
|-------|----|-----------|
|**dataSourceName** |`xsd:string` | The Data Source's name. |
|**dataSourceEmail** |`xsd:string` | The email address where Data Sources sends notifications and alerts. |
|**dataScope** |[ds_traffic_data_scope](r_ds_traffic_data_scope.md#) | The scope of the Data Source data. |
|**standardBreakdowns** |`array(xsd:string)` | One or more standard breakdowns for the Data Source data. When `dataScope = Breakdown` there must be at least one standard or custom breakdown. Supported values include `Page`, `Channel`, and `Server`. |
|**customBreakdownNames** |`array(xsd:string)` | The names of each custom breakdown (Analytics properties 1-75). This array must have the same number of elements as `customBreakdownValues`. |
|**customBreakdownValues** |`array(xsd:string)` | One or more traffic properties in the form `propX`, where *X* is a number 1 to 75. Make sure the selected prop is enabled in Admin Console. This array must have the same number of elements as `customBreakdownNames`. |
|**metricList** |`array(xsd:string)` | One or more events to import. For a list of valid metrics, see "Valid Traffic Metrics" in the *Data Sources User Guide*. |

**Parent topic:** [Data Types](../data_types/c_data_types.md)


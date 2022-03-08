# real_time_settings

 

|Element|Type|Description|
|-------|----|-----------|
|`min_granularity` |`string` | Granularity of the report. Set to 1 for the most efficient report. |
|`metric` |`string` | Provide the single metric for which you want to retrieve realtime data. The following metrics can be selected: revenue, orders, units, custom events, instances |
|`elements` |`string[]` | Provide up to three elements (dimensions) to correlate with the provided metric. You must specify at least one element if the 'ui_report' parameter is set to 'false', at three elements if 'ui_report' is omitted or set to true. Note that you must specify elements during configuration, but you can run a real time report that includes only the metric or only some of the configured elements. |
| `name` |`string` | Configuration name. If 'ui_report' is set to 'true', this name is also displayed in the reports & analytics UI. |
|`ui_report` |`boolean` | Indicates whether or not this report is also visible in the reports & analytics UI. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


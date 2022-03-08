# report_queue_item

A structure that contains queue data related to a requested report.

|Name|Type|Description|
|----|----|-----------|
|**reportID** |`int` |The request ID for the report.|
|**type** |`string` | Report type being generated, one of the following values: overtime trended trendedplus ranked  universal|
|**queueTime** |`string` | The time the report was requested (Pacific Time). |
|**status** |`string` | The processing status of the report, one of the following values: waiting running |
|**priority** |`int` | The priority in the queue. |
|**estimate** |`int` | The estimate in seconds that the report will take to complete.|
|**user** |`string` | The analytics user who requested the report. |

**Parent topic:** [Data Types](../data_types/datatypes.md)


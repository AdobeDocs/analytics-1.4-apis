# report_queue_item

A structure that contains queue data related to a requested report.

|Name|Type|Description|
|----|----|-----------|
|**reportID** |`xsd:int` |The request ID for the report.|
|**type** |`xsd:string` | Report type being generated, one of the following values: overtime trended trendedplus ranked  universal|
|**queueTime** |`xsd:string` | The time the report was requested (Pacific Time). |
|**status** |`xsd:string` | The processing status of the report, one of the following values: waiting running |
|**priority** |`xsd:int` | The priority in the queue. |
|**estimate** |`xsd:int` | The estimate in seconds that the report will take to complete.|
|**user** |`xsd:string` | The analytics user who requested the report. |

**Parent topic:** [Data Types](../data_types/datatypes.md)


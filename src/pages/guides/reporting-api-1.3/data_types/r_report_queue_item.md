# report\_queue\_item

A structure that contains queue data related to a requested report.

|Name|Type|Description|
|----|----|-----------|
|**report\_id** |`xsd:int` |A brief status of the queue request.|
|**type** |`xsd:string` |A longer description of the queue request status.|
|**queue\_time** |`xsd:string` |ID used by [Report.GetReport](../methods/r_getReport.md#) to request the queued report.|
|**status** |`xsd:string` | The status of the report. The status parameter is an enumerated list of strings. Enumerated values include: **Done:** The report processing is finished and the report is ready to download. **Failed:** The report processing failed. **Ready:** The report is queued for processing, but the report is not done yet. |

**Parent topic:** [Data Types](../data_types/c_data_types.md)


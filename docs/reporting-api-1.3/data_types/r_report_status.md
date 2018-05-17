# report\_status

A structure that contains data about the current status of a requested report.

|Name|Type|Description|
|----|----|-----------|
|**report\_type** |`xsd:string` |The type of report that was queued \(ranked, trended, or overtime\).|
|**result\_size** |`xsd:int` |\(Conditional\) The size, in Bytes, of a completed data set.|
|**queue\_time** |`xsd:string` |The original queue time.|
|**status** |`xsd:string` | The status of the report. The status parameter is an enumerated list of strings. Enumerated values include: **Done:** The report processing is finished and the report is ready to download. **Failed:** The report processing failed. The `error_code` and `error_message` parameters indicate the cause of the failure. **Ready:** The report is queued for processing, but the report is not done yet.|
|**error\_code** |`xsd:int` |The report error code, if an error was returned.|
|**error\_msg** |`xsd:string` |The error message, if an error was returned.|

**Parent topic:** [Data Types](../data_types/c_data_types.md)


# reportQueueResponse

A structure that defines data included in a response to the [Report.GetStatus](../methods/r_getStatus.md#) method call.

|Name|Type|Description|
|----|----|-----------|
|**status** |`xsd:string` |A brief status of the queue request.|
|**statusMsg** |`xsd:string` |A longer description of the queue request status.|
|**statusDesc** |`xsd:string` |Additional status details.|
|**reportID** |`xsd:int` |ID used by `[Report.GetReport](../methods/r_getReport.md#)` to request the queued report.|

**Parent topic:** [Data Types](../data_types/c_data_types.md)


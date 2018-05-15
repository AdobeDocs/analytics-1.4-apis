# Get

Retrieves a report queued using Report.Queue

 

## Report.Get Parameters

|Name|Type|Description|
|----|----|-----------|
| ` reportID ` | `xsd:int` | Report ID returned by [Report.Queue](r_Queue.md#). |

## Report.Get response

|Type|Description|
|----|-----------|
| [reportResponse](../data_types/r_reportResponse.md#) | Contains the requested report data. If the report is not ready, a `HTTP 400` error is returned. ```{"error":"report_not_ready","error_description":"Report not ready","error_uri":null}``` |

**Parent topic:** [Methods](../methods/methods.md)


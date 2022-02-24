# Run

Run a real-time report immediately without using the queue.

## Report.Run Parameters

|Name|Type|Description|
|----|----|-----------|
| ` reportDescription ` | [reportDescription](../data_types/r_reportDescription.md#) | A report description that specifies the desired report contents. This data structure is validated automatically before the report is generated. |

## Report.Run response

|Type|Description|
|----|-----------|
| [reportResponse](../data_types/r_reportResponse.md#) | Contains the requested report data. |

## Report Type

Report types are determined by the parameters of the `reportDescription` according to the following table:

|Report Type|Parameters|
|-----------|----------|
|Overtime Report|No elements with a dateGranularity specified. Not supported by Run, use [Report.Queue](r_Queue.md#) instead.|
|Ranked Report|1 or more elements with no dateGranularity specified. Not supported by Run, use [Report.Queue](r_Queue.md#) instead.|
|Trended Report|1 or more elements with a dateGranularity specified. Not supported by Run, use [Report.Queue](r_Queue.md#) instead.|
|Pathing Report|Element in the pattern parameter. Not supported by Run, use [Report.Queue](r_Queue.md#) instead.|
|Fallout Report|Element in the checkpoint parameter. Not supported by Run, use [Report.Queue](r_Queue.md#) instead.|
|Summary Report|No "reportSuiteID" parameter, instead "reportsuite" is specified as the report element and the "selected" parameter contains a list of report suite IDs. Not supported by Run, use [Report.Queue](r_Queue.md#) instead.|
|Real-Time Report|"source" parameter present and set to "realtime".|

The type derived is then returned in the result data as: ranked, trended, overtime, pathing, fallout, summary, or realtime.

**metrics** 

If the list of metrics is left empty, the default metric of "pageviews" is used.

**elements** 

If the list of elements is left empty, the default element of "page" is used.

**date/dateFrom/dateTo** 

If the date parameter(s) are omitted, the current day is used.

**Parent topic:** [Methods](../methods/methods.md)


# Queue

Queue a report to run.

## Report.Queue Parameters

|Name|Type|Description|
|----|----|-----------|
| ` reportDescription ` | [reportDescription](../data_types/r_reportDescription.md#) | A report description that specifies the desired report contents. This data structure is validated automatically before the report is generated. |

## Report.Queue Response

|Name|Type|Description|
|----|----|-----------|
| ` reportID ` | `xsd:int` | The ID of the report. Pass this ID to [Report.Get](r_Get.md#) to retrieve the report. |

## Report Type

Report types are determined by the parameters of the `reportDescription` according to the following table:

|Report Type|Parameters|
|-----------|----------|
|Data Warehouse|The "source" parameter must be present and set to "warehouse". Once these Data Warehouse reports have been created via the Reporting API, they will also be visible in the Data Warehouse Request Manager interface, named "API Report".|
|Overtime Report|No elements with a dateGranularity specified.|
|Ranked Report|1 or more elements with no dateGranularity specified.|
|Trended Report|1 or more elements with a dateGranularity specified.|
|Pathing Report|Element in the pattern parameter.|
|Fallout Report|Element in the checkpoint parameter.|
|Summary Report|No "reportSuiteID" parameter, instead "reportsuite" is specified as the report element and the "selected" parameter contains a list of report suite IDs.|
|Real-Time Report|'source' parameter present and set to 'realtime'. Note that Real-Time reports do not have to be queued, they can run immediately using [Report.Run](r_Run.md#).|

The type derived is then returned in the result data as: ranked, trended, overtime, pathing, fallout, summary, or realtime.

**metrics** 

If the list of metrics is left empty, the default metric of "pageviews" is used.

**elements** 

If the list of elements is left empty, the default element of "page" is used.

**date/dateFrom/dateTo** 

If the date parameter(s) are omitted, the current day is used.

**Parent topic:** [Methods](../methods/methods.md)


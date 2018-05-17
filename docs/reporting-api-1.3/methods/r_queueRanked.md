# QueueRanked

Submits a Ranked report request. Ranked reports display the rankings of the report pages in relation to the metric. Ranked reports can display multiple metrics in a report.

Ranked reports have the following characteristics:

-   Display the rankings of the report pages in relation to the metric.
-   Display multiple metrics in a report, if desired.
-   Support multiple elements in a report, if desired.

**Note:** Method parameters are required unless noted otherwise.

## Report.QueueRanked parameters

|Name|Type|Description|
|----|----|-----------|
|reportDescription |[reportDescription](../data_types/r_reportDescription.md#) |A report description that specifies the desired Ranked report contents.|
|validate |`tns:boolean` |Pre-validates the report request to prevent reports with errors from being placed in the queue.|

## Report.QueueRanked response

|Type|Description|
|----|-----------|
|[reportQueueResponse](../data_types/r_reportQueueResponse.md#) |Includes the report status, and the ID used to download the report \(`[Report.GetReport](r_getReport.md#)`\) or request a current report status \([Report.GetStatus](r_getStatus.md#)\).|

**Parent topic:** [Methods](../methods/c_reporting_methods.md)


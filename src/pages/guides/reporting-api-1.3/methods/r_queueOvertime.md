# QueueOvertime

Submits an Overtime report request. Overtime reports display the specified metrics over a defined time period. Overtime reports can display multiple metrics in a report. The only possible element in an Overtime report is time.

Overtime reports have the following characteristics:

-   Display metrics over a defined time period.
-   Display multiple metrics in a report, if desired.
-   Support only the `Time` element.

**Note:** Method parameters are required unless noted otherwise.

## Report.QueueOvertime parameters

|Name|Type|Description|
|----|----|-----------|
|reportDescription |[reportDescription](../data_types/r_reportDescription.md#) |A report description that specifies the desired Overtime report contents.|
|validate |`tns:boolean` |Pre-validates the report request to prevent reports with errors from being placed in the queue.|

## Report.QueueOvertime response

|Type|Description|
|----|-----------|
|[reportQueueResponse](../data_types/r_reportQueueResponse.md#) |Includes the report status, and the ID used to download the report \([Report.GetReport](r_getReport.md#)\) or request a current report status \([Report.GetStatus](r_getStatus.md#)\).|

**Parent topic:** [Methods](../methods/c_reporting_methods.md)


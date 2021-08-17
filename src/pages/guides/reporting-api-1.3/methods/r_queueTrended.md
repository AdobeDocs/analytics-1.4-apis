# QueueTrended

Submits a Trended report request. Trended reports display trends for a single metric \(revenue, orders, views, and so forth\) and element \(product, category, page, and so forth\).

Trended reports have the following characteristics:

-   Display trends for a single metric/element combination.

**Note:** Method parameters are required unless noted otherwise.

## Report.QueueTrended parameters

|Name|Type|Description|
|----|----|-----------|
|reportDescription |[reportDescription](../data_types/r_reportDescription.md#) | A report description that specifies the desired Trended report contents. |
|validate |`tns:boolean` |Pre-validates the report request to prevent reports with errors from being placed in the queue.|

## Report.QueueTrended response

|Type|Description|
|----|-----------|
|[reportQueueResponse](../data_types/r_reportQueueResponse.md#) | Includes the report status, and the ID used to download the report \([Report.GetReport](r_getReport.md#)\) or request a current report status \([Report.GetStatus](r_getStatus.md#)\). |

**Parent topic:** [Methods](../methods/c_reporting_methods.md)


# reportDescription

A structure that contains information for creating a specific report.

The following updates require version 1.3 of the API:

-   **May 2013**: Added a segments parameter to define inline segments. See [Inline Segmentation](../reference/c_segments.md#).
-   **May 2013**: Added a flag to include [current data](http://microsite.omniture.com/t2/help/en_US/reference/index.html?f=data_latency) in the report.
-   **February 2013**: Added an `anomalyDetection` option to return upper bounds, lower bounds, and forecast data for trended and overtime reports.
-   **October 2012**: Added a `validate` option to pre-validate the `reportDescription`. This option helps prevent reports with errors from being placed in the queue.
-   **June 2012**: Added `segment_id` parameter to enable reporting based on a segment.

The following table lists the elements contained in a `reportDescription`:

|Element|Type|Description|
|-------|----|-----------|
|**reportSuiteID** |`xsd:string` |The Analytics report suite you want to use to generate the report. For example: `reportSuiteID = "corp1"` |
|**date** |`xsd:string` |The date for which you want to run the report. When using date, do not use dateFrom and dateTo. The date format is `YYYY-MM-DD` \(4 digit year, 2 digit month, and 2 digit day\), but the month and day designators are optional. For example: `date = "2009-01"` |
|**dateFrom** |`xsd:string` |The starting date used to run the report for when using a data range. When using dateFrom, do not use date. The date format is `YYYY-MM-DD` \(4 digit year, 2 digit month, and 2 digit day\), but the month and day designators are optional. For example: `date = "2009-01-15"` |
|**dateTo** |`xsd:string` |The ending date used to run the report for when using a data range. When using dateTo, do not use date. The date format is `YYYY-MM-DD` \(4 digit year, 2 digit month, and 2 digit day\), but the month and day designators are optional. For example: `date = "2010-01-15"` |
|**dateGranularity** |[reportDefinitionDateGranularity](r_reportDefinitionDateGranularity.md#) |The time units used to display data in a report that organizes the data by date, such as an Overtime report. For example: `dateGranularity = "day"` |
|**metrics** |[reportDefinitionMetricList](r_reportDefinitionMetricList.md#) |A list of the events to include in the report. A report must specify at least one metric \(Ranked/Overtime reports support one or more metrics. Trended reports support only one metric.\) For example:`metrics = [ {id = "pageViews"},{id = "visits"} ]` |
|**elements** |[reportDefinitionElementList](r_reportDefinitionElementList.md#) | A list of elements that breaks down \(organizes\) the metrics data in the report. For example, you can generate a report that breaks down page views \(metric\) by browser \(element\). For example: `elements = [ {id = "trackingCode", classification = "campaigns", top = 2, startingWith = 10} ]` Not supported by Overtime reports. |
|**locale** |[reportDefinitionLocale](r_reportDefinitionLocale.md#) | The geographic locale where you want to run the report. |
|**sortBy** |`xsd:string` |The [reportDefinitionMetric](r_reportDefinitionMetric.md#) ID to sort by. This can be used when declaring multiple metrics for Ranked and Trended reports. By default, the first metric will be used to sort. Use this option to sort by any of the metrics requested.|
|**segments** |[reportDefinitionInlineSegment](r_reportDefinitionInlineSegment.md#) | Defines an inline segment. See [Inline Segmentation](../reference/c_segments.md#). |
|**segment\_id** |`xsd:string` | The ID of the segment on which you want to report. Data Warehouse segments must be prefixed with `dw:`, for example `dw:first_time_visitors`. Marketing Reports & Analytics and Ad hoc analysis segments are not prefixed. DataWarehouse segments returned by `ReportSuite.GetSegments` are returned with the `dw:` prefix. These segments IDs can be used for this parameter without modification. Segments returned by `DataWarehouse.GetSegments` are not prefixed with `dw:`. `dw:` must be prepended to the segment IDs returned by `DataWarehouse.GetSegments` before they can be used for this parameter. If an invalid `segment_id` is provided the report is generated without segmentation. |
|**validate** |`xsd:boolean` | Pre-validate the `reportDescription` to help prevent reports with errors from being placed in the queue. |
|**anomalyDetection** |`xsd:boolean` | Returns upper bounds, lower bounds, and forecast data for anomaly detection. See [Anomaly Detection](../reference/c_anomaly.md#). REST only. Not supported by Ranked reports. |
|**currentData** |`xsd:boolean` | Include [current data](http://microsite.omniture.com/t2/help/en_US/reference/index.html?f=data_latency) in the report. REST only. |

**Parent topic:** [Data Types](../data_types/c_data_types.md)


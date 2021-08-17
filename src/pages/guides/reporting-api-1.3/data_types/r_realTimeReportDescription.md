# realTimeReportDescription

 

|Name|Type|Description|
|----|----|-----------|
|**metrics** |[reportDefinitionMetricList](r_reportDefinitionMetricList.md#) |A list of the real time metrics to include in the report. A report must specify at least one metric, and each metric must be configured previously using ReportSuite.[../../admin\_api/methods/report\_suite/r\_SaveRealTimeConfiguration.md\#](../../admin_api/methods/report_suite/r_SaveRealTimeConfiguration.md#). \(Ranked/Overtime reports support one or more metrics. Trended reports support only one metric.\) For example:`metrics = [ {id = "pageviews"},{id = "visits"} ]` |
|**elements** |[reportDefinitionElementList](r_reportDefinitionElementList.md#) | A list of elements that breaks down \(organizes\) the metrics data in the report. Each element must be configured previously using ReportSuite.[../../admin\_api/methods/report\_suite/r\_SaveRealTimeConfiguration.md\#](../../admin_api/methods/report_suite/r_SaveRealTimeConfiguration.md#). If no elements are provided, an overtime report is generated for the provided metric\(s\). |
|**periodCount** |`xsd:int` |\(Optional\) The number of periods of data to return. Default is 15.|
|**periodMinutes** |`xsd:int` |\(Optional\) Number of minutes for one period. Default is 1.|
|**periodOffset** |`xsd:int` |\(Optional\) Number of minutes before the current minute to run the report. If set to 10, the most recent result will be from ten minutes prior to the request. Default is 0.|
|**algorithm** |`xsd:string` |\(Optional\) Type of dimensions to return, one of the following three values: '`gainers`', '`losers`', '`most popular`'. Default is '`most popular`'.|
|**algorithmArgument** |`xsd:string` |\(Optional\) Specifies how to order the values for Most Popular, Gainers or Losers. Specify either `percent`, or `linear`. Default is `linear`.|
|**firstRankPeriod** |`xsd:string` |\(Optional\) Computes the ranking of elements by considering the element's counts from the `firstRankPeriod` to the final period. With this argument you can rank from the first period \(0\) to `periodCount` - 1 \(most popular\) or `periodCount` - 3 \(gainers/losers\) or anywhere in between. The `firstRankPeriod` is 0 based. Example: if `periodCount` is 15, you can pass in a `firstRankPeriod` of anywhere from 0-14 for most popular \(the API considers only period 14\), or 0-12 for gainers/losers \(the API considers the differences between periods 12 and 13, and between periods 13 and 14\). The trending algorithms require at least 3 periods \(with two differences between them\), because the API considers the differences, hence `periodCount` - 3 is the highest `firstRankPeriod` can be for gainers/losers and other trending algorithms. |
|**floorSensitivity** |`xsd:int` |\(Optional\) A factor between 0 and 1 that is used to cut off low-count items from percentage ranking. Relative only to gainers/losers by percent. Default is .25. The API will cut off the bottom \(100\*float\_sensitivity\) % of results, based upon counts in the query\_relation before trending or ranking any of them. |

**Parent topic:** [Data Types](../data_types/c_data_types.md)


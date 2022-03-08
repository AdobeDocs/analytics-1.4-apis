# reportDescription

A structure that contains information for creating a specific report.

## Parameters

|Element|Type|Description|
|-------|----|-----------|
| **reportSuiteID** | `string` |The Analytics report suite you want to use to generate the report. For example: `reportSuiteID = "corp1"` |
| **date** | `string` | The date for which you want to run the report. When using date, do not use dateFrom and dateTo. The date format is `YYYY-MM-DD` (4 digit year, 2 digit month, and 2 digit day), but the month and day designators are optional. For example: `date = "2009-01"` Due to specific system requirements, the minimum date that can be used in the date, dateFrom, and dateTo parameters is 2000-01-01, and the maximum date is 2899-12-31. Requesting a date outside of this range results in a `period_invalid` error. If the date parameter(s) are not included, the current day is used. Real-Time Reports also support [relative dates](http://www.php.net/manual/en/datetime.formats.relative.php). |
| **dateFrom** | `string` | The starting date used to run the report for when using a data range. When using dateFrom, do not use date. The date format is `YYYY-MM-DD` (4 digit year, 2 digit month, and 2 digit day), but the month and day designators are optional. For example: `date = "2009-01-15"` Due to specific system requirements, the minimum date that can be used in the date, dateFrom, and dateTo parameters is 2000-01-01, and the maximum date is 2899-12-31. Requesting a date outside of this range results in a `period_invalid` error. Requesting a `toDate` that is earlier than `fromDate` will result in a `period_invalid` error. If the date parameter(s) are not included, the current day is used. Real-Time Reports also support [relative dates](http://www.php.net/manual/en/datetime.formats.relative.php).|
| **dateTo** | `string` | The ending date used to run the report for when using a data range. When using dateTo, do not use date. The date format is `YYYY-MM-DD` (4 digit year, 2 digit month, and 2 digit day), but the month and day designators are optional. For example: `date = "2009-01-15"` Due to specific system requirements, the minimum date that can be used in the date, dateFrom, and dateTo parameters is 2000-01-01, and the maximum date is 2899-12-31. Requesting a date outside of this range results in a `period_invalid` error. Requesting a `toDate` that is earlier than `fromDate` will result in a `period_invalid` error. If the date parameter(s) are not included, the current day is used. Real-Time Reports also support [relative dates](http://www.php.net/manual/en/datetime.formats.relative.php). |
| **dateGranularity** | [reportDescriptionDateGranularity](r_reportDescriptionDateGranularity.md#) | The time units used to display data in a report that organizes the data by date, such as an Overtime report. For example: `dateGranularity = "day"`. One of the following values: -minute (Real-Time reports only). Specify a minute interval as `"minute:[interval]"`. The interval is an integer between 1-60 that specifies the interval to report. For example, `'minute:3'` reports the request date range in 3-minute intervals. -hour -day -week -month -quarter -year |
| **source** |[reportDescriptionSource](r_reportDescriptionSource.md#) | Defaults to 'standard', specify 'realtime' to generate a Real-Time report. Specify 'warehouse' to query data warehouse. Note: Warehouse reports don't use the same queue as regular reports and thus wont appear in a Report.GetQueue response.|
| **metrics** | [reportDescriptionMetricList](r_reportDescriptionMetricList.md#) - An array of [reportDescriptionMetric](r_reportDescriptionMetric.md#) | An array of the metrics to include in the report. A report must specify at least one metric (Ranked/Overtime reports support one or more metrics. Trended reports support only one metric.) For example:`metrics = [ {id = "pageViews"},{id = "visits"} ]` If the list of metrics is left empty, the default metric of "pageviews" is used. |
| **elements** | [reportDescriptionElementList](r_reportDescriptionElementList.md#) - An array of [reportDescriptionElement](r_reportDescriptionElement.md#) | A list of elements that breaks down (organizes) the metrics data in the report. For example, you can generate a report that breaks down page views (metric) by browser (element). For example: `elements = [ {id = "trackingCode", classification = "campaigns", top = 2, startingWith = 10} ]` A report may have a maximum number of three elements. Elements have restrictions on which other elements they can be combined with in a report. You can pass element to [GetElements](../methods/r_GetElements.md#) to get a list of valid breakdowns for a specific element. |
| **locale** | [reportDescriptionLocale](r_reportDescriptionLocale.md#) | The geographic locale where you want to run the report. |
|**sortMethod** |`string` | Real-Time Report sort method. Used only when 'source' is set to 'realtime' s ee the [sortMethod Options](r_reportDescription.md#section_C4F49ABA1A664EDB8BC48DF8D8F026B0) table below for details. |
| **sortBy** | `string` |The [reportDescriptionMetric](r_reportDescriptionMetric.md#) ID to sort by. This can be used when declaring multiple metrics for Ranked and Trended reports. By default, the first metric will be used to sort. Use this option to sort by any of the metrics requested.|
| **segments** | [reportDescriptionSegmentList](r_reportDescriptionSegmentList.md#) - An array of [reportDescriptionSegment](r_reportDescriptionSegment.md#) | Defines one or more saved segments or an inline segment. See [Inline Segmentation](../inline_segments.md#). |
| **anomalyDetection** | `boolean` | Returns upper bounds, lower bounds, and forecast data for anomaly detection. See [Anomaly Detection](../anomaly_detection.md#). Not supported by Ranked reports. |
| **currentData** | `boolean` | Include [current data](http://microsite.omniture.com/t2/help/en_US/reference/index.html?f=data_latency) in the report. |
| **expedite** | `boolean` | Adobe use only. (The value of "true" can be used only by Adobe.) |
|**elementDataEncoding** |[reportDescriptionElementDataEncoding](r_reportDescriptionElementDataEncoding.md#)| To allow non-UTF-8 characters that are in element names to come through SOAP XML and JSON intact, this parameter filters out invalid characters, or encodes element names in Base64. If specified, this must be one of the following values: -utf8 -base64 **Important** If base64 encoding is used, the request must also have all element names base64 encoded. This includes names in "selected" and "search" filters, and the "pattern" and "checkpoint" pathing filters. This also applies to special keywords as well, such as "::entered::" and "::anything::". This also includes dates in the "name" field for overtime and trended reports. Element URLs are not encoded. If utf8 encoding is used, the API filters out invalid UTF-8 characters in the request and response. This allows the result to come back with some data, although the values may be missing information. |

## sortMethod Options

The following table describes the sort options provided for real-time reports using the sortMethod parameter. Options are provided in a delimited list as follows:

```
<algorithm>:<floorSensitivity>:<firstRankPeriod>:<algorithmArgument>
```

|Option|Type|Description|
|------|----|-----------|
|**algorithm** |`string` | (Optional) An array of values matching one of the following values: -'`mostpopular`' -'`gainers`' -'`losers`' Default is '`mostpopular`'. |
|**floorSensitivity** |`int` |(Optional) A factor between 0 and 1 that is used to cut off low-count items from percentage ranking. Relative only to gainers/losers by percent. Default is .25.|
|**firstRankPeriod** |`string` | (Optional) Computes the ranking of elements by considering the element's counts from the `firstRankPeriod` to the final period. Default is 0. With this argument you can rank from the first period (0) to `periodCount` - 1 (most popular) or `periodCount` - 3 (gainers/losers) or anywhere in between. The `firstRankPeriod` is 0 based. Example: if `periodCount` is 15, you can pass in a `firstRankPeriod` of anywhere from 0-14 for most popular (the API considers only period 14), or 0-12 for gainers/losers (the API considers the differences between periods 12 and 13, and between periods 13 and 14). The trending algorithms require at least 3 periods (with two differences between them), because the API considers the differences, hence `periodCount` - 3 is the highest `firstRankPeriod` can be for gainers/losers and other trending algorithms. |
|**algorithmArgument** |`string` |(Optional) Specifies how to order the values for Most Popular, Gainers or Losers. Specify either `percent`, `count` or `linear`. Default is `linear`.|

## Query String Options
When using the `"source":"warehouse"` parameter in the reportDescription, two query string parameters can be used: `format` and `page`.

|Parameter|Description|Example|
|---------|-----------|-------|
|**format**|Indicates whether to respond with a CSV payload or not.|`&format=csv`|
|**page**|The 1-based page number to return for a CSV report. Can only be used with `&format=csv`.|`&page=1`|

The `&format=csv` parameter can be used to retrieve the raw response directly from Data Warehouse. If the default JSON response is having problems with formatting or character sets, CSV is the best way to get the data in the most raw format possible. For this reason, CSV is currently the recommended way of retrieving data warehouse data.

The `page` parameter can only be used when `&format=csv` is specified. It is 1-based - for example, to retrieve page 1, add `&page=1` to your query string. It will return CSV data in 20 MB chunks.

The last page will return a payload smaller than 20 MB and subsequent calls with incremental page indexes will return the message `"error":"eof_or_invalid_page"`.

**Parent topic:** [Data Types](../data_types/datatypes.md)


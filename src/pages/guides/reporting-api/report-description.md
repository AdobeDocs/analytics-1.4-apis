# Report Description JSON object reference

When using the `Report.Queue` method, a `reportDescription` JSON object is required. Use this page to understand how to formulate this JSON object to request the desired report.

## Top level parameters

The following JSON object contains example values for each parameter.

```json
{
    "reportDescription": {
        "reportSuiteID": "examplersid",
        "dateFrom": "YYYY-09-07",
        "dateTo": "YYYY-09-28",
        "dateGranularity": "day",
        "source": "standard",
        "metrics": [
            {"id": "pageviews"},
            {"id": "visits"}
        ],
        "elements": [
            {}
        ]
    }
}

```

Element|Type|Description
-------|----|-----------
**reportSuiteID** | `string` | The report suite ID that you want to request data from. This is the only required field in the `reportDescription` object.
**date** | `string` | If requesting a report for a single period, the day/month/year that you want to run the report for. If you use this field, do not use `dateFrom` or `dateTo`. If all date fields are omitted, defaults to the current day. This field supports the following formats:<br/>Use `YYYY` for the desired year.<br/>Use `YYYY-MM` for the desired month.<br/>Use `YYYY-MM-DD` for the desired day.<br/>Real-Time Reports also support [relative dates](http://www.php.net/manual/en/datetime.formats.relative.php).
**dateFrom** | `string` | The starting date range. If you use this field, also include `dateTo` and do not use `date`. The date format is `YYYY-MM-DD`. The month and day designators can be omitted if you want a monthly or yearly report. Real-Time Reports also support [relative dates](http://www.php.net/manual/en/datetime.formats.relative.php).
**dateTo** | `string` | The ending date range. If you use this field, also include `dateFrom` and do not use `date`. The date format is `YYYY-MM-DD`. The month and day designators can be omitted if you want a monthly or yearly report. Real-Time Reports also support [relative dates](http://www.php.net/manual/en/datetime.formats.relative.php).
**dateGranularity** | `string` | Specifies the date granularity used to display report data (trended reports). If this field is omitted, data is aggregated across the entire date range (ranked reports). Supported values include:<br/>`minute`: Real-Time reports only. Displays report data by minute. Include an integer between `1` - `60` after a semicolon to increase the minute interval. For example, use `minute:3` to aggregate data in 3-minute intervals.<br/>`hour`: Displays report data by hour.<br/>`day`: Displays report data by day.<br/>`week`: Displays report data by week.<br/>`month`: Displays report data by month.<br/>`quarter`: Displays report data by quarter.<br/>`year`: Displays report data by year.
**source** | `string` | The processing architecture that you want to request the report from. Defaults to `standard`. Valid values include:<br/>`standard`: Returns a standard report.<br/>`realtime`: Returns a Real-Time report.<br/>`warehouse`: Returns a Data Warehouse report. Note that Data Warehouse reports don't use the same queue as regular reports, so they will not appear in a `Report.GetQueue` responses.
**metrics** | `object` | An array of the metrics to include in the report. See [Metric reference](metrics.md) for the full list of supported values. If this field is omitted, the report defaults to `pageviews`. If both `elements` and `dateGranularity` are set, only one metric can be used.
**elements** | `object` | An object array of the dimensions to include in the report. See [Dimension reference](dimensions.md) for the full list of supported values and additional object parameters. If this field is omitted, no dimension is used and only reports on the specified metrics.
**locale** | `string` | The language that you want the report in. Note that this field only affects translated dimension/metric labels, and does not affect dimension items. Defaults to `en_US`. Valid values for this field include: `en_US` (English), `de_DE` (German), `es_ES` (Spanish), `fr_FR` (French), `jp_JP` (Japanese), `pt_BR` (Portuguese), `ko_KR` (Korean), `zh_CN` (Simplified Chinese), `zh_TW` (Traditional Chinese)
|**sortMethod** |`string` | Used only when `source` is `realtime`. Format is `[algorithm]:[floorSensitivity]:[firstRankPeriod]:[algorithmArgument]`. All components to this string are optional. If omitting parts of this string, make sure to still include the colon delimiters.<br/>`algorithm`: Supported values include `mostpopular`, `gainers`, and `losers`. Defaults to `mostpopular`.<br/>`floorSensitivity`: A factor between `0` and `1` to cut off low-count items from percentage ranking. Relative only to gainers/losers by percent. Default value is `0.25`.<br/>`firstRankPeriod`: Computes the ranking of elements by considering the element's counts from the `firstRankPeriod` to the final period. Default is `0`. With this argument you can rank from the first period (0) to `periodCount` - 1 (most popular) or `periodCount` - 3 (gainers/losers) or anywhere in between. The `firstRankPeriod` is 0 based. For example, if `periodCount` is `15`, you can pass in a `firstRankPeriod` of anywhere from `0`-`14` for most popular, or `0`-`12` for gainers/losers (the API considers the differences between periods 12 and 13, and between periods 13 and 14). The trending algorithms require at least 3 periods (with two differences between them), because the API considers the differences, hence `periodCount` - 3 is the highest `firstRankPeriod` can be for gainers/losers and other trending algorithms.<br/>`algorithmArgument`: Specifies how to order the values for Most Popular, Gainers or Losers. Specify either `percent`, `count` or `linear`. Default is `linear`.
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
|**firstRankPeriod** |`string` | (Optional)  |
|**algorithmArgument** |`string` |(Optional) |

## Query String Options
When using the `"source":"warehouse"` parameter in the reportDescription, two query string parameters can be used: `format` and `page`.

|Parameter|Description|Example|
|---------|-----------|-------|
|**format**|Indicates whether to respond with a CSV payload or not.|`&format=csv`|
|**page**|The 1-based page number to return for a CSV report. Can only be used with `&format=csv`.|`&page=1`|

The `&format=csv` parameter can be used to retrieve the raw response directly from Data Warehouse. If the default JSON response is having problems with formatting or character sets, CSV is the best way to get the data in the most raw format possible. For this reason, CSV is currently the recommended way of retrieving data warehouse data.

The `page` parameter can only be used when `&format=csv` is specified. It is 1-based - for example, to retrieve page 1, add `&page=1` to your query string. It will return CSV data in 20 MB chunks.

The last page will return a payload smaller than 20 MB and subsequent calls with incremental page indexes will return the message `"error":"eof_or_invalid_page"`.






# reportDescriptionElementDataEncoding

An enumerated list of data encoding types.

|Value|Description|
|-----|-----------|
|**base64** | If base64 encoding is used, the request must also have all element names base64 encoded. This includes names in "selected" and "search" filters, and the "pattern" and "checkpoint" pathing filters. This also applies to special keywords as well, such as "::entered::" and "::anything::". This also includes dates in the "name" field for overtime and trended reports. Element URLs are not encoded. |
|**utf8** | If utf8 encoding is used, the API filters out invalid UTF-8 characters in the request and response. This allows the result to come back with some data, although the values may be missing information. |






# reportDescriptionSegment

 

A structure that defines an inline segment to use in a [reportDescription](r_reportDescription.md#) .

|Element|Type|Description|
|-------|----|-----------|
| ` id ` | `string` | Specifies the existing saved segment ID that you want to apply to a search. **Important:** In version 1.4, inline segments no longer use the "id" parameter to specify the element as in 1.3. If migrating code from version 1.3, move the element value that was previously in the "id" parameter to the "element" parameter. |
| ` element ` |`string`| Specifies the element (dimension) on which you want to segment. |
| ` search ` | [reportDescriptionSearch](r_reportDescriptionSearch.md#) | (Optional, provide either a selected value, or a classification and a search value). Search is an array that contains two values: **type**: selects the type of search to perform. The following search types are supported: `AND` `OR` `NOT` **keywords**: Array of values for which you want to search. The following special characters are supported in keywords: `^` matches the start of a string. `$` matches the end of a string. |
| ` classification ` | `string` | (Optional, provide either a selected value, or a classification and a search value). Specifies how to integrate the include and an exclude segments. |

## Unsupported Elements

The following elements are not supported for inline segments.

- pagedepth
- visitnumber
- mobilecarrier
- hier
- paths
- fallout


## Using search filters

A structure that defines a keyword search to use in the report definition.

|Name|Type|Description|
|----|----|-----------|
| **type** | [reportDescriptionSearchType](r_reportDescriptionSearchType.md#) | The type of search to use, one of the following values: and or not |
| **keywords** | `string[]` | A list of keywords to include or exclude from the search, based on the type. Keyword values can also leverage the following special characters to define advanced search criteria: * Wild Card (e.g. "page*.html") ^ Starts With (e.g. "^http://") $ Ends With (e.g. ".html$") |
| **searches** | [reportDescriptionSearch](r_reportDescriptionSearch.md#)[] |A list of subsearches. This allows you to build complex report searches.|

# reportDescriptionSearchType

An enumerated list of boolean values used to link multiple search terms in a report search.

|Value|Description|
|-----|-----------|
|**AND** |Combines multiple search terms using a boolean AND operation.|
|**OR** |Combines multiple search terms using a boolean OR operation.|
|**NOT** |Combines multiple search terms using a boolean NOT operation (effectively excluding a term from the search).|

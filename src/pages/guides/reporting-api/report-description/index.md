# Report Description JSON object reference

When using the `Report.Queue` method, a `reportDescription` JSON object is required. Use this page to understand how to formulate this JSON object to request the desired report.

## Top level parameters

The following JSON object contains example values for most fields.

```json
{
    "reportDescription": {
        "reportSuiteID": "examplersid",
        "dateFrom": "YYYY-09-07",
        "dateTo": "YYYY-09-28",
        "dateGranularity": "day",
        "source": "standard",
        "elements": [
            {"id": "page"}
        ],
        "metrics": [
            {"id": "pageviews"},
            {"id": "visits"}
        ],
        "locale": "en_US",
        "sortMethod": "visits",
        "segments": [
            { 
                "element": "page",
                "selected": ["Home Page", "Shopping Cart"]
            }
        ],
        "anomalyDetection": false,
        "currentData": false,
        "elementDataEncoding": "utf8"
    }
}
```

Element | Type | Description
--- | --- | ---
**reportSuiteID** | `string` | The report suite ID that you want to request data from. This is the only required field in the `reportDescription` object.
**date** | `string` | If requesting a report for a single period, the day/month/year that you want to run the report for. If you use this field, do not use `dateFrom` or `dateTo`. If all date fields are omitted, defaults to the current day. This field supports the following formats:<br/>Use `YYYY` for the desired year.<br/>Use `YYYY-MM` for the desired month.<br/>Use `YYYY-MM-DD` for the desired day.<br/>Real-Time Reports also support [relative dates](http://www.php.net/manual/en/datetime.formats.relative.php).
**dateFrom** | `string` | The starting date range. If you use this field, also include `dateTo` and do not use `date`. The date format is `YYYY-MM-DD`. The month and day designators can be omitted if you want a monthly or yearly report. Real-Time Reports also support [relative dates](http://www.php.net/manual/en/datetime.formats.relative.php).
**dateTo** | `string` | The ending date range. If you use this field, also include `dateFrom` and do not use `date`. The date format is `YYYY-MM-DD`. The month and day designators can be omitted if you want a monthly or yearly report. Real-Time Reports also support [relative dates](http://www.php.net/manual/en/datetime.formats.relative.php).
**dateGranularity** | `string` | Specifies the date granularity used to display report data (trended reports). If this field is omitted, data is aggregated across the entire date range (ranked reports). Supported values include:<br/>`minute`: Real-Time reports only. Displays report data by minute. Include an integer between `1` - `60` after a semicolon to increase the minute interval. For example, use `minute:3` to aggregate data in 3-minute intervals.<br/>`hour`: Displays report data by hour.<br/>`day`: Displays report data by day.<br/>`week`: Displays report data by week.<br/>`month`: Displays report data by month.<br/>`quarter`: Displays report data by quarter.<br/>`year`: Displays report data by year.
**source** | `string` | The processing architecture that you want to request the report from. Defaults to `standard`. Valid values include:<br/>`standard`: Returns a standard report.<br/>`realtime`: Returns a Real-Time report.<br/>`warehouse`: Returns a Data Warehouse report. Note that Data Warehouse reports don't use the same queue as regular reports, so they will not appear in a `Report.GetQueue` responses. This source lets you include the query parameter `?format=csv` to receive the response as a CSV payload in 20MB chunks instead of a JSON object. Use the `?page=1` query parameter to retrieve subsequent chunks (1-indexed).
**elements** | `object[]` | An object array of the dimensions to include in the report. See [Dimension reference](dimensions.md) for the full list of supported values and additional object parameters. If this field is omitted, no dimension is used and only reports on the specified metrics.
**metrics** | `object[]` | An array of the metrics to include in the report. See [Metric reference](metrics.md) for the full list of supported values. If this field is omitted, the report defaults to `pageviews`. If both `elements` and `dateGranularity` are set, only one metric can be used.
**locale** | `string` | The language that you want the report in. Note that this field only affects translated dimension/metric labels, and does not affect dimension items. Defaults to `en_US`. Valid values for this field include: `en_US` (English), `de_DE` (German), `es_ES` (Spanish), `fr_FR` (French), `jp_JP` (Japanese), `pt_BR` (Portuguese), `ko_KR` (Korean), `zh_CN` (Simplified Chinese), `zh_TW` (Traditional Chinese)
**sortMethod** | `string` | Used only when `source` is `realtime`. Format is `[algorithm]:[floorSensitivity]:[firstRankPeriod]:[algorithmArgument]`. All components to this string are optional. If omitting parts of this string, make sure to still include the colon delimiters.<br/>`algorithm`: Supported values include `mostpopular`, `gainers`, and `losers`. Defaults to `mostpopular`.<br/>`floorSensitivity`: A factor between `0` and `1` to cut off low-count items from percentage ranking. Relative only to gainers/losers by percent. Default value is `0.25`.<br/>`firstRankPeriod`: Computes the ranking of elements by considering the element's counts from the `firstRankPeriod` to the final period. Default is `0`. With this argument you can rank from the first period (0) to `periodCount` - 1 (most popular) or `periodCount` - 3 (gainers/losers) or anywhere in between. The `firstRankPeriod` is 0 based. For example, if `periodCount` is `15`, you can pass in a `firstRankPeriod` of anywhere from `0`-`14` for most popular, or `0`-`12` for gainers/losers (the API considers the differences between periods 12 and 13, and between periods 13 and 14). The trending algorithms require at least 3 periods (with two differences between them), because the API considers the differences, hence `periodCount` - 3 is the highest `firstRankPeriod` can be for gainers/losers and other trending algorithms.<br/>`algorithmArgument`: Specifies how to order the values for Most Popular, Gainers or Losers. Specify either `percent`, `count` or `linear`. Default is `linear`.
**sortBy** | `string` | The metric ID to sort by. By default, the first metric is used to sort. If your report uses multiple metrics, you can use this option to sort by any metric include in the `metrics` field of your request.
**segments** | `object[]` | Defines one or more saved segments or an inline segment. See [Segmentation reference](inline_segments.md).
**anomalyDetection** | `boolean` | Includes `upper_bounds`, `lower_bounds`, and `forecast` data in the response object. Not supported by ranked reports.
**currentData** | `boolean` | Include [current data](https://experienceleague.adobe.com/docs/analytics/analyze/reports-analytics/current-data.html) in the report.
**elementDataEncoding** | `string` | Supported values include `utf8` or `base64`.<br/>`utf8`: Filters out invalid UTF-8 characters in the request and response.<br/>`base64`: Treats the entire request, including element names, search/pathing filters, special keywords, and dates, as if they are base64 encoded.

## Report type

Report types are determined by the parameters of the `reportDescription` object according to the following table:

Report Type | Parameters
--- | ---
**Overtime Report** | No elements with a `dateGranularity` specified. Not supported by `Report.Run`, use `Report.Queue` instead.
**Ranked Report** | One or more elements with no `dateGranularity` specified. Not supported by `Report.Run`, use `Report.Queue` instead.
**Trended Report** | One or more elements with a `dateGranularity` specified. Not supported by `Report.Run`, use `Report.Queue` instead.
**Pathing Report** | Element in the `pattern` parameter. Not supported by `Report.Run`, use `Report.Queue` instead.
**Fallout Report** | Element in the `checkpoint` parameter. Not supported by `Report.Run`, use `Report.Queue` instead.
**Summary Report** | No `reportSuiteID` parameter, instead `reportsuite` is specified as a dimension and the `selected` parameter contains a list of report suite IDs. Not supported by `Report.Run`, use `Report.Queue` instead.
**Real-Time Report** | `source` parameter set to `realtime`. Use `Report.Run`.

The type derived is then returned in the result data as: `ranked`, `trended`, `overtime`, `pathing`, `fallout`, `summary`, or `realtime`.

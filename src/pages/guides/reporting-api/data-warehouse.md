# Data Warehouse Reports

Data Warehouse data is available through the Reporting API.

You can run Data Warehouse reports in the Reporting API by setting `"source":"warehouse"` In the [`reportDescription`](report-description/index.md) object.

When using [`Report.Get`](methods.md#get), the returned report can include multiple pages. To get data beyond the first page, make additional requests to `Report.Get` and specify the `page` number in either the body or query string.

The API stores data warehouse data in zip format. When using `Report.Get`, it tries to unzip this data and transform it to JSON (or CSV) when returning it. The `format` query string parameter can be used to control how data is returned.

Possible Values | Description
--- | ---
**`json`** | (Default) Returns results in a JSON data structure.
**`raw`**| Returns the raw zip file returned by the data warehouse engine. Pagination is disabled for raw requests.
**`csv`**  | Returns results in CSV format. If the returned data is larger than 20MB, data is returned in 20MB chunks. You can use the `?page=1` query parameter to retrieve subsequent chunks (1-indexed).

<InlineAlert variant="note" slots="text"/>

Data Warehouse reports don't use the same queue as regular reports, so they do not appear in `Report.GetQueue` responses.

## Data Warehouse API Best Practices

The Data Warehouse API is intended to be used to query large amounts of data from Adobe Analytics. Adobe recommends using this source over standard if reports take longer than about 2 hours to run.

Factors that can cause reports to run for a long time:

* Breakdowns that return a large number of values for each breakdown
* Requests for a year or more of data using granularity that is a day or less

If requesting a very large dataset (results greater than 20 MB), using the `format=raw` option is recommended as data will be ready the fastest and will take the least time to transfer. The API requires `format=raw` for zipped data warehouse results that exceed 50 MB in size and will indicate this as part of the `Report.Get` response. Raw format can be used on all requests if desired; it is only required if a report exceeds the 50 MB limit.

If not using `format=raw` and the dataset is less than 50 MB compressed but larger than 20 MB compressed, the `page=X` query parameter is required to retrieve all pages. `page=X` works on `format=csv` and `format=JSON` format types; it is ignored when used with the `format=raw` format type.

## Requesting today's data

Data Warehouse requests wait to be processed until all of the data for the requested time period has been collected and processed. For example, if you request data for today, no data is be delivered or available when calling `Report.Get` until shortly after midnight. Including time information in the request enables you to request data from the current day as long as data within the provided timeframe has been collected and processed.

To maintain backward compatibility, an additional flag `"fuzzyDates": false` is required in the request body and will indicate to the Data Warehouse API that it should treat the provided dates as the exact timeframe being requested and not try to request full days.

For example:

```json
{
  "reportDescription": {
    "reportSuiteID": "testreportsuite",
    "dateFrom": "YYYY-05-13 00:00:00",
    "dateTo": "YYYY-05-13 12:00:00",
    "fuzzyDates": false,
    "metrics": [
      {
        "id": "visits"
      }
    ],
    "elements": [
      {
        "id": "page",
      }
    ],
    "source": "warehouse"
  }
}
```

<InlineAlert variant="note" slots="text"/>

Using the `"fuzzyDates": false` flag without providing time information causes the API to set the time to '00:00:00'. For example: `..."fuzzyDates":false, "dateFrom":"YYYY-05-13","dateTo":"YYYY-05-13"...` is interpreted by the API as requesting YYYY-05-13 00:00:00 to YYYY-05-13 00:00:00. In other words, a single second immediately following midnight is requested. In contrast, making this same request with `"fuzzyDates": true` or omitting `fuzzyDates` requests the entire day.

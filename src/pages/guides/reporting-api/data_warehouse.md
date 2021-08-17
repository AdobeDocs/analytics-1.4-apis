# Data Warehouse Reports

Data Warehouse data is available through the Reporting API.

You can run Data Warehouse reports in the Reporting API by setting `"source":"warehouse"` In the [Report.Queue](methods/r_Queue.md#) method. This method returns a `reportID`;

When using [Report.Get](methods/r_Get.md#), the returned [Report](data_types/r_report.md) may include multiple pages. To get data beyond the first page, make additional requests to [Report.Get](methods/r_Get.md#) and specify the `page` number in either the body or query string.

The API stores data warehouse data in zip format. When using [Report.Get](methods/r_Get.md#), it tries to unzip this data and transform it to JSON (or CSV) when returning it. The `format` query string parameter can be used to control how data is returned.


|Possible Values|Description|
|---------------|-----------|
|raw|Returns the raw zip file returned by the data warehouse engine. Note: Pagination is disabled for `format=raw` requests|
|json (default)|Returns results in a JSON data structure|
|csv|Returns results in CSV format|


## Data Warehouse API Best Practices
The Data Warehouse API is intended to be used to query large resultsets from the Analytics product. It should be used instead of the normal reporting api if reports take longer than about 2 hours to run.

Factors that can cause reports to run for a long time:
* Breakdowns that return a large number of values for each breakdown
* Requests for a year+ of data using granularity that's a day or less

These types of requests should be made instead to the Data Warehouse API.

If requesting a very large dataset (results greater than 20 MB), using the `format=raw` option is recommended as data will be ready the fastest and will take the least time to transfer. The API requires `format=raw` for zipped data warehouse results that exceed 50 MB in size and will indicate this as part of the Report.Get response.

> NOTE: `format=raw` can be used on _all_ requests if desired. It is only required if the data warehouse results exceed the 50 MB limit.

If not using `format=raw` and the dataset is less than 50 MB compressed but larger than 20 MB compressed, the `page=X` query parameter will be required to retreive all pages.

> NOTE: `page=X` will work on both `format=csv` and `format=JSON` format types. It will be ignored if used with the `format=raw` format type.

## Requesting Today's Data
Data Warehouse requests will wait to be processed until all of the data for the requested time period has been collected and processed. For example, if you request data for 2021-05-13 (today), no data will be delivered or available via Report.Get until 2021-05-14. This can present a problem for customers that would like granular data more quickly.

Including time information in the request enables a client to request data from the current day as long as data within the provided timeframe has been collected and processed.

To maintain backward compatibility, an additional flag `"fuzzyDates":false` is required in the request body and will indicate to the Data Warehouse API that it should treat the provided dates as the exact timeframe being requested and not try to request full days.

### Example
```
{
  "reportDescription": {
    "reportSuiteID": "testreportsuite",
    "dateFrom": "2021-05-13 00:00:00",
    "dateTo": "2021-05-13 12:00:00",
    "fuzzyDates":false,
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

> NOTE: Using the `"fuzzyDates":false` flag without providing time information will cause the API to set the time to '00:00:00'. For example: `..."fuzzyDates":false, "dateFrom":"2021-05-13","dateTo":"2021-05-13"...` will be interpreted in the API as requesting 2021-05-13 00:00:00 to 2021-05-13 00:00:00. In other words, a single second immediately following midnight will be requested. In contrast, making this same request with `"fuzzyDates":true` or no `fuzzyDates` parameter will request the entire day.

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
The Data Warehouse API is intended to be used to query large resultsets from the Analytics product. It should be used instead of the normal reporting api reports require _more than 5 hours to return_.

If requesting a large dataset, using the `format=raw` option is recommended as data will be ready the fastest and will take the least time to transfer. The API requires `format=raw` for zipped data warehouse results that exceed 50 MB in size and will indicate this as part of the Report.Get response.

> NOTE: `format=raw` can be used on _all_ requests if desired. It is only required if the data warehouse results exceed the 50 MB limit.

If the dataset is less than 50 MB compressed but larger than 20 MB compressed, the `page=X` query parameter will be required to retreive all pages.

> NOTE: `page=X` will work on both `format=csv` and `format=JSON` format types. It will be ignored if used with the `format=raw` format type.

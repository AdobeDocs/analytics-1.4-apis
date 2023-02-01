# 1.4 Reporting API methods

Methods that you can call within the 1.4 Reporting API.

## Queue

Queue a report to run. You can queue up multiple reports to run concurrently.

**`POST https://api.omniture.com/admin/1.4/rest/?method=Report.Queue`**

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X POST "https://api.omniture.com/admin/1.4/rest/?method=Report.Queue" \
    -H "x-api-key: {CLIENTID}" \
    -H "Authorization: Bearer {ACCESSTOKEN}" \
    -H "Content-Type: application/json" \
    -d '{"reportDescription":{"reportSuiteID": "examplersid"}}'
```

#### Response

```json
{
    "reportID": 1234567890
}
```

This method requires a `reportDescription` JSON object, which contains the desired reporting parameters. See [reportDescription JSON object reference](report-description/index.md) for details.

The response contains a report ID - use this report ID in the `Report.Get` method to retrieve the report.

## Get

Retrieves a report queued using `Report.Queue`. As a best practice, Do not call this method more than once a second.

**`POST https://api.omniture.com/admin/1.4/rest/?method=Report.Get`**

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X POST "https://api.omniture.com/admin/1.4/rest/?method=Report.Get" \
    -H "x-api-key: {CLIENTID}" \
    -H "Authorization: Bearer {ACCESSTOKEN}" \
    -H "Content-Type: application/json" \
    -d '{"reportID": 1234567890}'
```

#### Response

```json
{
    "report": {
        "type": "overtime",
        "elements": [
            {
                "id": "datetime",
                "name": "Date"
            }
        ],
        "reportSuite": {
            "id": "examplersid",
            "name": "Example report suite"
        },
        "period": "Thu. 19 Jan. YYYY",
        "metrics": [
            {
                "id": "pageviews",
                "name": "Page Views",
                "type": "number",
                "decimals": 0,
                "latency": 1427,
                "current": false
            }
        ],
        "data": [
            {
                "name": "Thu. 19 Jan. YYYY",
                "month": 1,
                "day": 19,
                "counts": [
                    "291745"
                ]
            }
        ],
        "totals": [
            "291745"
        ],
        "version": "1.4.18.10"
    },
    "waitSeconds": 0,
    "runSeconds": 0
}
```

This method requires a JSON body, which includes the report ID to retrieve. You can obtain a report ID using `Report.Queue`.

Request element | Type | Description
--- | --- | --- 
**`reportID`** | `int` | Report ID returned by `Report.Queue`.
**`page`** | `int` | (Optional) Desired page number (out of `totalPages`) for larger [Data Warehouse](data_warehouse.md) requests.

Returns a JSON object containing the desired report data. See [Report data object reference](report-data.md) for details.

If the report is not ready, a `HTTP 400` error is returned.

## Cancel

Cancels a previously submitted report request, removing it from the processing queue. You can only cancel reports that are queued or running; if you send a request to cancel a completed report, the API returns an error.

**`POST https://api.omniture.com/admin/1.4/rest/?method=Report.Cancel`**

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X POST "https://api.omniture.com/admin/1.4/rest/?method=Report.Cancel" \
    -H "x-api-key: {CLIENTID}" \
    -H "Authorization: Bearer {ACCESSTOKEN}" \
    -H "Content-Type: application/json" \
    -d '{"reportID": 1234567890}'
```

#### Response

```json
true
```

This method requires a JSON body, which includes the report ID to retrieve. You can obtain a report ID using `Report.Queue`.

Returns `true` is the operation is successful.

## GetElements

Retrieves a list of valid [dimensions](report-description/dimensions.md) for the user. Some users might not have access to certain dimensions, so you can use this method to retrieve the dimensions that you can access.

**`POST https://api.omniture.com/admin/1.4/rest/?method=Report.GetElements`**

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X POST "https://api.omniture.com/admin/1.4/rest/?method=Report.GetElements" \
    -H "x-api-key: {CLIENTID}" \
    -H "Authorization: Bearer {ACCESSTOKEN}" \
    -H "Content-Type: application/json" \
    -d '{"reportSuiteID": "examplersid"}'
```

#### Response

```json
[
    {
        "id": "accountsummary",
        "name": "Report Suite Totals",
        "correlation": true,
        "subrelation": false
    },
    {
        "id": "activity",
        "name": "Activity",
        "correlation": false,
        "subrelation": true
    },
    {
        "id": "browser",
        "name": "Browser",
        "correlation": true,
        "subrelation": true
    },
    {
        "id": "browserheight",
        "name": "Browser Height",
        "correlation": true,
        "subrelation": true
    }
]
```

This request requires a JSON body, which includes the report suite ID to obtain accessible dimensions.

Request element | Type | Description
--- | --- | ---
**`reportSuiteID`** | `string` | The report suite ID that you want to list accessible dimensions for.
**`existingElements`** | `string[]` | (Optional) Include a list of elements already present in the reportDescription to get compatible metrics.|
**`existingMetrics`** | `string[]` | (Optional) Include a list of metrics already present in the reportDescription to get compatible metrics.|
**`reportType`** | `string` | (Optional) Include the report type to get compatible metrics. Valid values include `any`, `ranked`, `trended`, `pathing`, `fallout`, and `realtime`.

Returns a list of dimensions that the user can access. Each dimension contains the following elements:

Response element | Type | Description
--- | --- | ---
**`id`** | `string` | The dimension ID.
**`name`** | `string` | The dimension name.
**`correlation`** | `boolean` | Determines if the dimension supports correlations. Used in previous versions of Adobe Analytics.
**`subrelation`** | `boolean` | Determines if the dimension supports subrelations. Used in previous versions of Adobe Analytics.

## GetMetrics

Retrieves a list of valid [metrics](report-description/metrics.md) for the user. Some users might not have access to certain metrics, so you can use this method to retrieve the dimensions that you can access.

**`POST https://api.omniture.com/admin/1.4/rest/?method=Report.GetMetrics`**

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X POST "https://api.omniture.com/admin/1.4/rest/?method=Report.GetMetrics" \
    -H "x-api-key: {CLIENTID}" \
    -H "Authorization: Bearer {ACCESSTOKEN}" \
    -H "Content-Type: application/json" \
    -d '{"reportSuiteID": "examplersid"}'
```

#### Response

```json
[
    {
        "id": "activityimpressions",
        "name": "Activity Impressions",
        "type": "number",
        "decimals": 0,
        "formula": null
    },
    {
        "id": "averagevisitdepth",
        "name": "Average Visit Depth",
        "type": "number",
        "decimals": 0,
        "formula": null
    },
    {
        "id": "bouncerate",
        "name": "Bounce Rate",
        "type": "percent",
        "decimals": 10,
        "formula": null
    }
]
```

This request requires a JSON body, which includes the report suite ID to obtain accessible metrics.

Name|Type|Description|
----|----|-----------|
**`reportSuiteID`** | `string` | The report suite ID that you want to list accessible metrics for.
**`existingElements`** | `string[]` | (Optional) Include a list of elements already present in the reportDescription to get compatible metrics.
**`existingMetrics`** | `string[]` | (Optional) Include a list of metrics already present in the reportDescription to get compatible metrics.
**`reportType`** | `string` | (Optional) Include the report type to get compatible metrics. Valid values include `any`, `ranked`, `trended`, `pathing`, `fallout`, and `realtime`.

Returns a list of metrics that the user can access. Each metric contains the following elements:

Response element | Type | Description
--- | --- | ---
**`id`** | `string` | The metric ID.
**`name`** | `string` | The metric name.
**`type`** | `string` | The metric type. Valid values include `number`, `percent`, `currency`, and `time`.
**`decimals`** | `int` | The number of decimal places that the metric uses.
**`formula`** | `null` | The formula if the metric is a calculated metric.

## GetQueue

Returns a list of reports in a company's report queue.

**`POST https://api.omniture.com/admin/1.4/rest/?method=Report.GetQueue`**

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X GET "https://api.omniture.com/admin/1.4/rest/?method=Report.GetQueue" \
    -H "x-api-key: {CLIENTID}" \
    -H "Authorization: Bearer {ACCESSTOKEN}" \
```

#### Response

```json
[
    {
        "reportID": 1234567890,
        "type": "tr",
        "queueTime": "YYYY-06-29T16:41:53-0800",
        "status": "running",
        "priority": 0,
        "estimate": 899.8214212508286,
        "reportSuiteID": "examplersid",
        "user": "exampleuser"
    },
    {
        "reportID": 1234567891,
        "type": "tr",
        "queueTime": "YYYY-06-29T16:42:09-0800",
        "status": "running",
        "priority": 0,
        "estimate": 256.4867531674,
        "reportSuiteID": "examplersid",
        "user": "exampleuser2"
    }
]
```

Does not require a JSON body. Returns a list of reports currently running for the company. Company is determined by the credentials used in the `x-api-key` and `Authorization` headers.

Response element | Type | Description
--- | --- | ---
**`reportID`** | `int` | The report ID running.
**`type`** | `string` | The type of report. Valid values include `overtime`, `trended`, `trendedplus`, `ranked`, or `universal`.
**`queueTime`** | `date` | The date/time that the report was queued (Pacific time).
**`status`** | `string` | The status of the report. Valid values include `waiting` or `running`.
**`priority`** | `int` | The report priority.
**`estimate`** | `double` | The estimated time remaining (in seconds) before the report is complete.
**`reportSuiteID`** | `string` | The report suite ID of the report.
**`user`** | `string` | The user that requested the report.

## Run

Run a real-time report immediately without using the queue.

**`POST https://api.omniture.com/admin/1.4/rest/?method=Report.Run`**

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X POST "https://api.omniture.com/admin/1.4/rest/?method=Report.Run" \
    -H "x-api-key: {CLIENTID}" \
    -H "Authorization: Bearer {ACCESSTOKEN}" \
    -H "Content-Type: application/json" \
    -d '{"reportDescription":{"reportSuiteID": "examplersid","source": "realtime"}}'
```

#### Response

```json
{
    "report": {
        "type": "realtime",
        "reportSuite": {
            "id": "examplersid",
            "name": "Example report suite"
        },
        "period": "YYYY-03-30T16:30:04-0800/YYYY-03-30T17:30:04-0800",
        "elements": [
            {
                "id": "datetime",
                "name": "Date"
            }
        ],
        "metrics": [
            {
                "id": "instances",
                "name": "Instances",
                "type": "number",
                "decimals": 0
            }
        ],
        "data": [
            {
                "name": "YYYY-01-19T16:30:04-0800",
                "month": 3,
                "day": 30,
                "hour": 16,
                "minute": 30,
                "counts": [
                    "1415718"
                ]
            },
            {
                "name": "YYYY-01-19T16:35:04-0800",
                "month": 3,
                "day": 30,
                "hour": 16,
                "minute": 35,
                "counts": [
                    "1394239"
                ]
            },
            {
                "name": "YYYY-01-19T16:40:04-0800",
                "month": 3,
                "day": 30,
                "hour": 16,
                "minute": 40,
                "counts": [
                    "1394988"
                ]
            }
        ],
        "totals": [
            "16356302"
        ],
        "version": "1.4.18.10",
        "__run_time_frag": 0.26024293899536133
    }
}
```

This method requires a `reportDescription` JSON object, which contains the desired reporting parameters. See [reportDescription JSON object reference](report-description/index.md) for details. The `source` element must be set to `realtime` for this API call to work.

Returns a JSON object containing the desired report data. See [Report data object reference](report-data.md) for details.

## Validate

Determines if a `reportDescription` object is valid without running the report. If the report is not valid, an error is returned detailing the problem.

**`POST https://api.omniture.com/admin/1.4/rest/?method=Report.Validate`**

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X POST "https://api.omniture.com/admin/1.4/rest/?method=Report.Validate" \
    -H "x-api-key: {CLIENTID}" \
    -H "Authorization: Bearer {ACCESSTOKEN}" \
    -H "Content-Type: application/json" \
    -d '{"reportDescription":{"reportSuiteID": "examplersid"}}'
```

#### Response

```json
{
    "valid": true
}
```

This method requires a `reportDescription` JSON object, which contains the desired reporting parameters. See [reportDescription JSON object reference](report-description/index.md) for details.

* If the `reportDescription` JSON object is valid, the response contains `"valid": true`.
* If the `reportDescription` JSON object is invalid, the API returns an error outlining the issue. See [Troubleshooting](troubleshooting.md) for details.

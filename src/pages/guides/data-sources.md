# Adobe Analytics Data Sources API

Data Sources allow you to import additional online or offline data for reporting. If you use the [`transactionID`](https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/transactionid.html) variable, you can also tie online and offline data together.

The Data Sources API allows you to create, edit and upload [Data sources](https://experienceleague.adobe.com/docs/analytics/import/data-sources/datasrc-home.html) to Adobe Analytics. If you use the Adobe Analytics UI to complete the Data Sources workflow, that normally involves using the UI to create a Data source, then manually uploading a file via FTP to the configured location. With the Data Sources API, you can create a Data source and upload data without using the product UI.

One advantage to using the Data Sources API over a traditional FTP method is that you can get basic data validation immediately. FTP data validation doesn't happen until Adobe's servers attempt to process the data. This method of validation can take up to 30 minutes longer than by directly using the API.

The following methods are available to use with this API:

## Get

Returns a list of data sources for a report suite.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X POST "https://api.omniture.com/admin/1.4/rest/?method=DataSources.Get" \
    -H "x-api-key: {CLIENTID}" \
    -H "Authorization: Bearer {ACCESSTOKEN}" \
    -H "Content-Type: application/json" \
    -d '{"reportSuiteID": "examplersid"}'
```

#### Response

```json
[
    {
        "id": "10",
        "processing_type": "generic",
        "name": "Example data source",
        "email": "user@example.com",
        "activatedDate": "YYYY-09-22",
        "ftp": {
            "path": "/",
            "loginID": "examplelogin1",
            "password": "********"
        },
        "haltOnWarning": false,
        "haltOnError": false,
        "lockedByError": false
    },
    {
        "id": "19",
        "processing_type": "generic",
        "name": "Example data source 2",
        "email": "admin@example.com",
        "activatedDate": "YYYY-03-16",
        "ftp": {
            "path": "/",
            "loginID": "examplelogin2",
            "password": "********"
        },
        "haltOnWarning": false,
        "haltOnError": false,
        "lockedByError": false
    }
]
```

A request requires a single JSON parameter, `reportSuiteID`, representing the report suite to retrieve data sources from.

The response returns an array of data sources with the following components in each:

| JSON Response Element | Type | Description |
| --- | --- | --- |
| **`id`** | `int` | A numeric identifier representing the data source for this report suite. |
| **`processing_type`** | `string` | The data source processing type. Valid values include `generic`, `web`, and `traffic`. |
| **`name`** | `string` | The name of the data source. |
| **`email`** | `string` | The email address of who to contact for this data source. |
| **`activatedDate`** | `string` | The date and time that the data source was activated. |
| **`ftp`** | `object` | An object containing the `path`, `loginID`, and `password` for the FTP site. |
| **`haltOnWarning`** | `bool` | Determines if the data source stops processing when it encounters a warning. |
| **`haltOnError`** | `bool` | Determines if the data source stops processing when it encounters an error. |
| **`lockedByError`** | `bool` | Determins if the data source is locked when it encounters an error. |

## GetJobs

Returns all current jobs for a data source.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X POST "https://api.omniture.com/admin/1.4/rest/?method=DataSources.GetJobs" \
    -H "x-api-key: {CLIENTID}" \
    -H "Authorization: Bearer {ACCESSTOKEN}" \
    -H "Content-Type: application/json" \
    -d '{"reportSuiteID": "examplersid","dataSourceID":10}'
```

#### Response

```json
[
    {
        "id": 12345678,
        "fileName": "example_filename.txt",
        "startDate": "YYYY-03-16 02:17:14",
        "finishDate": "YYYY-03-16 02:17:18",
        "size": 326,
        "rows": 1,
        "errors": [],
        "warnings": [],
        "receivedDate": "YYYY-03-16 02:06:00",
        "status": "success"
    },
    {
        "id": 12345679,
        "fileName": "example_filename.txt",
        "startDate": "YYYY-03-17 04:25:08",
        "finishDate": "YYYY-03-17 04:25:17",
        "size": 484,
        "rows": 3,
        "errors": [],
        "warnings": [],
        "receivedDate": "YYYY-03-17 03:51:00",
        "status": "success"
    }
]
```

The request requires both of the following parameters:

| JSON Request Element | Type | Description |
| --- | --- | --- |
| **`reportSuiteID`** | `string` | The report suite ID. |
| **`dataSourceID`** | `int` | The data source ID to get jobs for. |

The response returns an array of data source jobs containing the following elements:

| JSON Response Element | Type | Description |
| --- | --- | --- |
| **`id`** | `int` | The job ID. |
| **`fileName`** | `string` | The name of the file that was uploaded for the job. |
| **`startDate`** | `string` | The date/time that the job started processing. |
| **`finishDate`** | `string` | The date/time that the job finished processing. |
| **`size`** | `int` | The size of the file that was uploaded. |
| **`rows`** | `int` | The number of rows in the file. |
| **`errors`** | `string[]` | An array of any errors encountered while processing the file. |
| **`warnings`** | `string[]` | An array of any warnings encountered while processing the file. |
| **`receivedDate`** | `string` | The date/time that the file was received. |
| **`status`** | `string` | The status of the job. Valid values include `success` and `failure`. |

## Save

Creates or updates a data source. Omit `id` to create a new data source. Include the desired `id` to overwrite that data source's settings. If you include an `id` that doesn't exist, the response returns an error.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X POST "https://api.omniture.com/admin/1.4/rest/?method=DataSources.Save" \
    -H "x-api-key: {CLIENTID}" \
    -H "Authorization: Bearer {ACCESSTOKEN}" \
    -H "Content-Type: application/json" \
    -d '{
            "reportSuiteID":"examplersid",
            "email": "user@example.com",
            "name": "Example data source",
            "processing_type": "generic",
            "settings": {
                "allowOutOfOrderHits": true,
                "stopOnWarning": false,
                "metricNames": ["Searches"],
                "metricEvents": ["Event 1"],
                "dimensionNames": ["Internal search"],
                "dimensionVariables": ["Evar 1"]
            }
        }'
```

#### Response

```json
{
    "dataSourceID": 4
}
```

The request requires different parameters based on the desired `processing_type`.

| JSON Request Element | Type | Description |
| --- | --- | --- |
| **`reportSuiteID`** | `string` | The report suite ID to create the data source under. |
| **`email`** | `string` | The contact email for the data source. |
| **`name`** | `string` | The name of the data source. |
| **`processing_type`** | `string` | The data source processing type. Valid values include `generic`, `weblog`, and `traffic`. |
| **`settings`** | `object` | An object containing the desired report suite settings. |

The settings object contains the following elements:

| Settings object Element | Type | Description |
| --- | --- | --- |
| **`injectionType`** | `string` | |
| **`allowOutOfOrderHits`** | `bool` | Determines if the data source allows hits to be processed out of order. |
| **`stopOnWarning`** | `bool` | Determines if the data source stops processing data when it encounters a warning. |
| **`metricNames`** | `string[]` | An array containing the desired metric names. Required when `processing_type` is `generic`. The array length must match `metricEvents`. |
| **`metricEvents`** | `string[]` | An array containing the desired metric events. Required when `processing_type` is `generic`. The array length must match `metricNames`. |
| **`dimensionNames`** | `string[]` | An array containing the desired dimension names. Required when `processing_type` is `generic`. The array length must match `dimensionVariables`. |
| **`dimensionVariables`** | `string[]` | An array containing the desired dimension variables. Required when `processing_type` is `generic`. The array length must match `dimensionNames`. |
| **`dataScope`** | `string` | Valid values include `site_level` and `breakdown`. Required when `processing_type` is `traffic`. |
| **`standardBreakdowns`** | `string[]` | An array containing the desired standard breakdowns. Required when `processing_type` is `traffic`. |
| **`metricList`** | `string[]` | Required when `processing_type` is `traffic`. |
| **`customBreakdownNames`** | `string[]` | An array containing the desired custom breakdown names. Required when `processing_type` is `traffic`. |
| **`customBreakdownValues`** | `string[]` | An array containing the desired custom breakdown values. Required when `processing_type` is `traffic`. |
| **`logFormat`** | `string` | Required when `processing_type` is `weblog`. Valid values include `ncsa_common`, `ncsa_combined`, `w3c_extended`, and `microsoft_iis`. |

The response returns the `dataSourceID` created or edited.

## UploadData

Uploads data to a data source.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X POST "https://api.omniture.com/admin/1.4/rest/?method=DataSources.UploadData" \
    -H "x-api-key: {CLIENTID}" \
    -H "Authorization: Bearer {ACCESSTOKEN}" \
    -H "Content-Type: application/json" \
    -d '{
            "reportSuiteID":"examplersid",
            "dataSourceID": 4,
            "jobName": "Example data source upload",
            "finished": true,
            "columns":[
                "Date",
                "Evar 1",
                "Event 1"
            ],
            "rows":[
                [
                    "10/19/YYYY",
                    "Example eVar1 value",
                    "1"
                ],
                [
                    "10/20/YYYY",
                    "Another eVar1 value",
                    "0"
                ]
            ]
        }'
```

#### Response

```json
true
```

This request requires the following within the JSON body:

| JSON Request Element | Type | Description |
| --- | --- | --- |
| **`reportSuiteID`** | `string` | The report suite ID that contains the desired data source. |
| **`dataSourceID`** | `int` | The numeric ID representing the data source. |
| **`jobName`** | `string` | The name for the upload job. If a job is large enough to necessitate multiple calls, make sure that you use the same name between API calls. Use alpha-numeric characters only - do not use special characters or symbols, such as a forward slash (`/`). |
| **`finished`** | `bool` | A flag that indicates that the job has all parts uploaded. A job does not start processing until this flag is set. If a job includes only one API call, set this value to `true`. If a job includes multiple API calls, set all values to `false` except the last call, which you can set to `true`. |
| **`columns`** | `string[]` | An array of strings that indicate the column names for the data source upload. It must match the columns that were included when creating the data source. It also requires a `Date` column in `mm/dd/yyyy` format. The text format for columns is `"Date"`, `"Evar X"`, `"Event X"`. |
| **`rows`** | `string[][]` | An array of array of strings representing the data itself. The number of strings within each row correspond to each column in order. Each array of strings corresponds to a row of data.

<InlineAlert variant="note" slots="text"/>

Limit a single API call to 10,000 rows. If a data sources job requires more than 10,000 rows, split the job into multiple API calls with the same `jobName`. Set the `finished` boolean to `false` for each API call until the last one, which you can set to `true`. A single job supports up to 100 API calls or 50 MB of data. If more than 100 API calls are submitted for a single job, or if the combined data of a job results in a size larger than 50 MB, the entire job fails.

The response returns `true` if the upload was successful. A file is created on the data source's FTP site, which is subsequently processed. The response returns `false` if the upload was unsuccessful.

## ProcessIncompleteVisits

Finishes incomplete jobs.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X POST "https://api.omniture.com/admin/1.4/rest/?method=DataSources.ProcessIncompleteVisits" \
    -H "x-api-key: {CLIENTID}" \
    -H "Authorization: Bearer {ACCESSTOKEN}" \
    -H "Content-Type: application/json" \
    -d '{
            "reportSuiteID":"examplersid",
            "dataSourceID": 4
        }'
```

#### Response

```json
true
```

This request requires the following within the JSON body:

| JSON Request Element | Type | Description |
| --- | --- | --- |
| **`reportSuiteID`** | `string` | The report suite ID that contains the desired data source. |
| **`dataSourceID`** | `int` | The numeric ID representing the data source. |

The response returns `true` if the process succeeds.

## Restart

Restarts processing for a data source.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X POST "https://api.omniture.com/admin/1.4/rest/?method=DataSources.Restart" \
    -H "x-api-key: {CLIENTID}" \
    -H "Authorization: Bearer {ACCESSTOKEN}" \
    -H "Content-Type: application/json" \
    -d '{
            "reportSuiteID":"examplersid",
            "dataSourceID": 4
        }'
```

#### Response

```json
true
```

This request requires the following within the JSON body:

| JSON Request Element | Type | Description |
| --- | --- | --- |
| **`reportSuiteID`** | `string` | The report suite ID that contains the desired data source. |
| **`dataSourceID`** | `int` | The numeric ID representing the data source. |

The response returns `true` if the process succeeds.

## Delete

Deletes a data source.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X POST "https://api.omniture.com/admin/1.4/rest/?method=DataSources.Delete" \
    -H "x-api-key: {CLIENTID}" \
    -H "Authorization: Bearer {ACCESSTOKEN}" \
    -H "Content-Type: application/json" \
    -d '{
            "reportSuiteID":"examplersid",
            "dataSourceID": 4
        }'
```

#### Response

```json
true
```

This request requires the following within the JSON body:

| JSON Request Element | Type | Description |
| --- | --- | --- |
| **`reportSuiteID`** | `string` | The report suite ID that contains the desired data source. |
| **`dataSourceID`** | `int` | The numeric ID representing the data source that you want to delete. |

The response returns `true` if the deletion succeeds.

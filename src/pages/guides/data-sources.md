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
| **`receivedDate`** | `string` | The date/time that the file was received.
| **`status`** | `string` | The status of the job. Valid values include `success` and `failure`. |

## Save

Creates or updates a data source. Omit `id` to create a new data source. Include the desired `id` to overwrite that data source's settings. If you include an `id` in your API request that doesn't exist, the response returns an error.

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
                "metricNames": ["event1"],
                "metricEvents": ["event1"],
                "dimensionNames": ["evar1"],
                "dimensionVariables": ["evar1"]
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
| **`injectionType`** | `string` | . |
| **`allowOutOfOrderHits`** | `bool` | Determines if the data source allows hits to be processed out of order. |
| **`stopOnWarning`** | `bool` | Determines if the data source stops processing data when it encounters a warning. |
| **`metricNames`** | `string[]` | An array containing the desired metric names. Required when `processing_type` is `generic`. The array length must match `metricEvents`. |
| **`metricEvents`** | `string[]` | An array containing the desired metric events. Required when `processing_type` is `generic`. The array length must match `metricNames`. |
| **`dimensionNames`** | `string[]` | An array containing the desired dimension names. Required when `processing_type` is `generic`. The array length must match `dimensionVariables`. |
| **`dimensionVariables`** | `string[]` | An array containing the desired dimension variables. Required when `processing_type` is `generic`. The array length must match `dimensionNames`. |
| **`dataScope`** | `string` | Valid values include `site_level` and `breakdown`. Required when `processing_type` is `traffic`. |
| **`standardBreakdowns`** | `string[]` | An array containing the desired standard breakdowns. Required when `processing_type` is `traffic`. |
| **`metricList`** | `string[]` |  Required when `processing_type` is `traffic`. |
| **`customBreakdownNames`** | `string[]` |  Required when `processing_type` is `traffic`. |
| **`customBreakdownValues`** | `string[]` |  Required when `processing_type` is `traffic`. |
| **`logFormat`** | `string` | Required when `processing_type` is `weblog`. Valid values include `ncsa_common`, `ncsa_combined`, `w3c_extended`, and `microsoft_iis`. |

The response returns the `dataSourceID` created or edited.

# **DataSources.UploadData**

Uploads data to a data source.

## **Request**

```
{
    "columns":[
        "(string)"
    ],
    "dataSourceID":(int),
    "finished":(boolean),
    "jobName":"(string)",
    "reportSuiteID":"(string)",
    "rows":[
        [
            "(string)"
        ]
    ]
}
```

|Parameter|Description|
|-----|----------|
| `"columns"`  | Must match valid events and evars that the report suite has enabled. It also requires a date. The format for the columns is `"Date"`, `"Evar X"`, `"Event X"`. |
| `"dataSourceId"`  | The ID of the data source (ftp) accepting the request. To determine this value, use [DataSources.Get](../../data-sources-api/methods/r_getDataSources.md) Method |
| `"jobName"`  | This value must be the same for different parts of the same job. Note: `jobName` cannot include slashes (`/`) or special characters. Invalid job names may return a Bad Request response with the error description: "invalid columns, at least one is required and columns must match for each upload" |
| `"finished"`  | This value tells the processing server to process the data instead of waiting for additional parts of the job. It should be left out unless the last part is being uploaded. If the job is just one upload, then it must be included for the data to be processed. |
| `"rows"` | This value is an array of arrays of strings. The number of strings in each array must match the number of columns. The number of rows of data per upload should not exceed 10,000 rows but should come as close as possible. If an upload has fewer than 10,000 rows, upload it in one job with the "finished" flag set to "true." If a job has more than 10,000 rows, the rows should be uploaded in as few uploads as possible. For example, a job with 25,000 rows of data to upload should call `DataSources.UploadData` only three times, with the third call including the "finished" flag as true. The maximum number of uploads to a job is 100. If `DataSources.UploadData` is called more than 100 times for the same job, the call will fail. The call will also fail on the 100th call unless the "finished" flag is included and set to "true." The maximum allowed job size including all uploads is 50 MB of data. `DataSources.UploadData` may succeed when the combined size of all the uploads has exceeded this limit, but the job will not be able to be processed once the upload is finished. The date should be in the format `mm/dd/yyyy` |
| `"reportSuiteID"` | The id of report suite the event names, evar names correspond to. |

## Response

`Boolean`

true on success which in turn creates a File on FTP for processing later on.
false if it is not able to write on FTP Internally.

# **DataSources.ProcessIncompleteVisits**

Finishes incomplete jobs.

## **Request**

```
{
    "dataSourceID":"(int)",
    "reportSuiteID":"(string)"
}
```

## Response

Boolean, true on success, otherwise false if no error occurs.

# DataSources.Restart

Restarts processing for a data source.

## **Request**

```
{
    "dataSourceID":"(int)",
    "reportSuiteID":"(string)"
}
```

## Response

Boolean, true on success, otherwise false if no error occurs.

# **DataSources.Delete**

Deletes a data source.

## **Request**

```
{
    "dataSourceID":"(int)",
    "reportSuiteID":"(string)"
}
```

## Response

Boolean, true on success, otherwise false if no error occurs.


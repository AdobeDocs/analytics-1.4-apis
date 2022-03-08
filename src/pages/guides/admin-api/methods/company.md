# Company methods

Allows you to change company settings.

## Company.GetEndpoint

Retrieves the endpoint for the specified company where API calls should be made.

|Parameter|Type|Description|
|----|----|-----------|
|**`company`** |`string` |The company name, can also be passed in query string or WSSE header.|

|Response|Description|
|----|-----------|
|`string` |The company endpoint.|

## Company.GetLoginKey

Returns the api key when called with the correct username and password.

|Parameter|Type|Description|
|----|----|-----------|
|**`company`** |`string` |Login company.|
|**`login`** |`string` |Account name.|
|**`password`** |`string` |Account password.|

|Type|Description|
|----|-----------|
|``string`` |API key.|

## Company.GetReportSuites

Retrieves all report suites associated with the requesting company.

|Name|Type|Description|
|----|----|-----------|
|**`types`** |`array[string]` |A list of report suite types that you want to include in the report suite list. Supported types include: `standard`, `rollup`, `virtual`.|
|**`search`** |`string` |A search filter to apply in retrieving report suites.|

Example:

```json
{
    "types": [
        "standard",
        "rollup",
        "virtual"
    ],
    "search": "searchforme"
}
```

|Response|Description|
|----|-----------|
|`company_report_suites` |A list of report suites that match the specified request parameters.|

Example:

```json
{
    "report_suites": [{
        "rsid": "vrs_dehans0_testvrs_1",
        "site_title": "test VRS",
        "virtual": true
    }, {
        "rsid": "vrs_dehans0_newvrs_1",
        "site_title": "new vrs",
        "virtual": true
    }]
}
```

## Company.GetTrackingServer

Returns the tracking server and namespace for the specified report suite.

|Parameter|Type|Description|
|----|----|-----------|
|**`rsid`** |`string` |A report suite ID.|

|Response|Description|
|----|-----------|
|`tns:tracking_server_data` |The tracking server information for the specified report suite.|

## Company.GetVersionAccess

Retrieves version access for the company of the authenticated user. Does not have any parameters.

|Response|Description|
|----|-----------|
|``array[string]`` |A list of Analytics interfaces to which the company has access.|

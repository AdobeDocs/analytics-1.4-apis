# Company methods

Allows you to change company settings.

## Company.GetEndpoint

Retrieves the endpoint for the specified company where API calls should be made.

|Parameter|Type|Description|
|----|----|-----------|
|**`company`** |`xsd:string` |The company name, can also be passed in query string or WSSE header.|

|Response|Description|
|----|-----------|
|`xsd:string` |The company endpoint.|

## Company.GetLoginKey

Returns the api key when called with the correct username and password.

|Parameter|Type|Description|
|----|----|-----------|
|**`company`** |`xsd:string` |Login company.|
|**`login`** |`xsd:string` |Account name.|
|**`password`** |`xsd:string` |Account password.|

|Type|Description|
|----|-----------|
|``xsd:string`` |API key.|

## Company.GetReportSuites

Retrieves all report suites associated with the requesting company.

|Name|Type|Description|
|----|----|-----------|
|**`types`** |`array(xsd:string)` |A list of report suite types that you want to include in the report suite list. Supported types include: `standard`, `rollup`, `virtual`.|
|**`search`** |`xsd:string` |A search filter to apply in retrieving report suites.|

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
|**`rsid`** |`xsd:string` |A report suite ID.|

|Response|Description|
|----|-----------|
|`tns:tracking_server_data` |The tracking server information for the specified report suite.|

## Company.GetVersionAccess

Retrieves version access for the company of the authenticated user. Does not have any parameters.

|Response|Description|
|----|-----------|
|``array(xsd:string)`` |A list of Analytics interfaces to which the company has access.|

# Company methods

Allows you to change company settings.

## GetEndpoint

Retrieves the endpoint for the specified company where API calls should be made. The domain `api.omniture.com` works for all organizations and routes your call to the correct data center. However, you can improve performance by submitting API calls directly to the correct data center without any rerouting.

`POST https://api.omniture.com/admin/1.4/rest/?method=Company.GetEndpoint`

|Parameter|Type|Description|
|----|----|-----------|
|**`company`** |`string` |The company name, can also be passed in query string.|

Returns the company endpoint. Possible values include: `api2.omniture.com` (Dallas), `api3.omniture.com` (London), `api4.omniture.com` (Singapore), `api5.omniture.com` (Pacific Northwest).

## GetReportSuites

Retrieves all report suites associated with the requesting company.

`POST https://api.omniture.com/admin/1.4/rest/?method=Company.GetReportSuites`

<CodeBlock slots="heading, code" repeat="2" languages="JSON,JSON"/>

#### Request body

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

#### Response

```json
{
    "report_suites": [{
        "rsid": "vrs_dehans0_testvrs_1",
        "site_title": "test VRS",
        "virtual": true
    }, {
        "rsid": "examplersid_1",
        "site_title": "new vrs",
        "virtual": true
    }]
}
```

|Parameter|Type|Description|
|----|----|-----------|
|**`types`** |`string[]` |A list of report suite types that you want to include in the report suite list. Supported types include: `standard`, `rollup`, `virtual`.|
|**`search`** |`string` |A search filter to apply in retrieving report suites.|

Returns `company_report_suite[]`, a list of report suites that match the specified request parameters.

## GetTrackingServer

Returns the tracking server and namespace for the specified report suite.

`POST https://api.omniture.com/admin/1.4/rest/?method=Company.GetTrackingServer`

|Parameter|Type|Description|
|----|----|-----------|
|**`rsid`** |`string` |A report suite ID.|

Returns `tracking_server_data` the tracking server information for the specified report suite.

## GetVersionAccess

Retrieves version access for the company of the authenticated user. Does not have any parameters.

`POST https://api.omniture.com/admin/1.4/rest/?method=GetVersionAccess`

Returns a `string[]` list of Analytics interfaces to which the company has access.

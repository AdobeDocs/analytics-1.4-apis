# Company methods

Allows you to change company settings.

## Company.GetEndpoint

Retrieves the endpoint for the specified company where API calls should be made. The domain `api.omniture.com` works for all organizations and routes your call to the correct data center. However, you can improve performance by submitting API calls directly to the correct data center without any rerouting.

`POST https://api.omniture.com/admin/1.4/rest/?method=Company.GetEndpoint`

|Parameter|Type|Description|
|----|----|-----------|
|**`company`** |`string` |The company name, can also be passed in query string.|

|Response Type|Description|
|----|-----------|
| `string` | The company endpoint. Possible values include:<br/>`api2.omniture.com` - Dallas<br/>`api3.omniture.com` - London<br/>`api4.omniture.com` - Singapore<br/>`api5.omniture.com` - Pacific Northwest |

## Company.GetReportSuites

Retrieves all report suites associated with the requesting company.

`POST https://api.omniture.com/admin/1.4/rest/?method=Company.GetReportSuites`

|Parameter|Type|Description|
|----|----|-----------|
|**`types`** |`string[]` |A list of report suite types that you want to include in the report suite list. Supported types include: `standard`, `rollup`, `virtual`.|
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

|Response Type|Description|
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

`POST https://api.omniture.com/admin/1.4/rest/?method=Company.GetTrackingServer`

|Parameter|Type|Description|
|----|----|-----------|
|**`rsid`** |`string` |A report suite ID.|

|Response Type|Description|
|----|-----------|
|`tracking_server_data` |The tracking server information for the specified report suite.|

## Company.GetVersionAccess

Retrieves version access for the company of the authenticated user. Does not have any parameters.

`POST https://api.omniture.com/admin/1.4/rest/?method=GetVersionAccess`

|Response Type|Description|
|----|-----------|
|`string[]` |A list of Analytics interfaces to which the company has access.|

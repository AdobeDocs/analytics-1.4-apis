# ReportSuite.Delete methods

`ReportSuite` methods that delete or reset settings.

Most `ReportSuite.Delete` methods require an `rsid_list` parameter. Include this list of report suites as a JSON body in the API call.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X POST "https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.DeleteVirtualReportSuite" \
    -H "x-api-key: {CLIENTID}" \
    -H "Authorization: Bearer {ACCESSTOKEN}" \
    -H "Content-Type: application/json" \
    -d "{'rsid':'examplersid'}"
```

#### Response

```json
true
```

## DeleteCalculatedMetrics

Deletes the specified set of calculated metrics for each of the specified report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.DeleteCalculatedMetrics`

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` | A list of report suite IDs. |
| **`calculated_metrics`** | `calculated_metric[]` | List of calculated metrics to delete from the specified report suites.|

Returns `true` if the operation is successful.

## DeleteClassification

Deletes a classification from one or more report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.DeleteClassification`

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` | A list of report suite IDs.|
| **`element`** | `string` | The element from which you want to delete the classification. |
| **`name`** | `string` | The name of the classification to delete. |

Returns `true` if the operation is successful.

## DeleteInternalURLFilters

Deletes the internal URL filters for each of the specified report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.DeleteInternalURLFilters`

|Parameter|Type|Description|
|----|----|-----------|
|**`rsid_list`** |`string[]` |A list of report suite IDs.|
|**`internal_url_filters`** |`string[]` |A list of URLs to delete from the internal URL filters list.|

Returns `true` if the operation is successful.

## DeleteIPAddressExclusion

Delete an IP exclusion entry for a given report suite.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.DeleteIPAddressExclusion`

|Parameter|Type|Description|
|----|----|-----------|
|**`rsid_list`** |`string[]` |A list of report suite IDs.|
|**`ip_address`** |`string` |The IP address to remove from the IP address exclusions list.|

Returns `true` if the operation is successful.

## DeleteMarketingChannelCost

Deletes a cost item for the selected report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.DeleteMarketingChannelCost`

|Parameter|Type|Description|
|----|----|-----------|
|**`rsid_list`** |`array (xsd:string)` |A list of report suite IDs.|
|**`channel_type`** |`string` | |
|**`cost_group`** |`string` | |
|**`cost_id`** |`string` | |

Returns `true` if the operation was successful.

## DeletePaidSearchDetection

Removes the specified paid search rule.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.DeletePaidSearchDetection`

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` |A list of report suite IDs.|
|**`search_engine`** |[`search_engine_enum`](../data_types.md#searchengineenum) | The name of the search engine. |
|**`operator`** | `string` | Specifies the type of paid search rule. Valid values include `contains` or `not_contains`. |
|**`query_string`** |`string` |The string value to use when matching a search engine referring URL.|

Returns `true` if the operation was successful.

## DeleteVirtualReportSuite

Removes the specified virtual report suite.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.DeleteVirtualReportSuite`

|Parameter|Type|Description|
|----|----|-----------|
| **rsid** | `string` | Report suite ID of virtual report suite. |

Returns true if operation is successful.

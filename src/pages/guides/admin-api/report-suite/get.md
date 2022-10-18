# ReportSuite.Get methods

`ReportSuite` methods that involve retrieving settings for a report suite. See [ReportSuite.Save methods](save.md) if you want to change any of these report suite settings.

Most `ReportSuite.Get` methods require an `rsid_list` parameter. Include this list of report suites as a JSON body in the API call.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X POST "https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetVirtualReportSuiteSettings" \
    -H "x-api-key: {CLIENTID}" \
    -H "Authorization: Bearer {ACCESSTOKEN}" \
    -H "Content-Type: application/json" \
    -d "{'rsid_list':['examplersid']}"
```

#### Response

```json
[{
    "rsid": "examplersid",
    "parent_rsid": "sistr2",
    "segment_list": ["536bfa98e4b06d874b0c927a", "536bfa99e4b06d874b0c927f"]
}]
```

## GetActivation

Retrieves the activation status for each of the specified report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetActivation`

|Parameter|Type|Description|
|----|----|-----------|
|**`rsid_list`** |`string[]` |A list of report suite IDs.|

Returns `report_suite_activation[]`, a list of report suites and the activation status of each.

## GetAxleStartDate

Retrieves the date a report suite was migrated from SiteCatalyst 14 to axle processing (version 15).

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetAxleStartDate`

|Parameter|Type|Description|
|----|----|-----------|
|**`rsid_list`** |`string[]` |A list of report suite IDs.|

Returns `report_suite_axle_start_date[]`, a list of report suites and the axle start date for each.

## GetBaseCurrency

Retrieves a list of supported currency codes for each of the specified report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetBaseCurrency`

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` |A list of report suite IDs.|

Returns `report_suite_base_currency[]`, a list of report suites, site name, and their supported 3-letter currency codes. For example: US Dollar = `USD`.

## GetBaseURL

Retrieves the base URL assigned to each of the specified report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetBaseURL`

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` |A list of report suite IDs.|

Returns `report_suite_base_url[]`, a list of report suites and their associated Base URLs.

## GetCalculatedMetrics

Retrieves the calculated metrics assigned to each of the specified report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetCalculatedMetrics`

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` |A list of report suite IDs.|

Returns `report_suite_calculated_metric[]`, a list of report suites and their associated calculated metrics.

## GetClassifications

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetClassifications`

Retrieves a list of classifications (associated with the specified element) for each of the specified report suites.

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` | (Required) The list of report suite IDs for which you want to retrieve classifications. |
| **`element_list`** |`string[]` | (Required) The list of elements for which you want to retrieve classifications. Valid values include `trackingcode`, `days_between_buys`, `days_till_purchase`, `domain`, `evar1` - `evar250`, `firsttouchchannel`, `firsttouchchanneldetail`, `lasttouchchannel`, `lasttouchchanneldetail`, `loyalty`, `media`, `page`, `sitesection`, `server`, `prop1` - `prop75`, `listvar1` - `listvar3`, `product`, `sitetime`, `state`, `surveybase`, `tntbase`, `visitdepth`, `visitnum`, `zip` |

Returns `report_suite_element_classifications[]`, a list that includes each report suite's classifications hierarchy for the specified element(s).

## GetCustomCalendar

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetCustomCalendar`

Retrieves the custom calendar for each of the specified report suites.

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` |A list of report suite IDs.|

Returns `report_suite_custom_calendar[]`, a list of report suites and their associated custom calendar settings.

## GetDataWarehouseDisplay

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetDataWarehouseDisplay`

Returns if data warehouse is enabled for the requested report suites.

|Parameter|Type|Description|
|----|----|-----------|
|**`rsid_list`** |`string[]` |A list of report suite IDs.|

Returns `report_suite_data_warehouse_display[]`, a list of report suites and their associated data warehouse display setting.

## GetDefaultPage

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetDefaultPage`

Retrieves the default page for each of the specified report suites.

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` |A list of report suite IDs.|

Returns `report_suite_default_page[]`, a list of report suites and their associated Base URLs.

## GetEcommerce

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetEcommerce`

Retrieves the commerce level for each of the specified report suites.

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` |A list of report suite IDs.|

Returns `report_suite_ecommerce[]`, a list of report suites with the commerce level of each.

## GetEvars

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetEvars`

Retrieves the commerce variables for each of the specified report suites.

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` |A list of report suite IDs.|

Returns `report_suite_evars[]`, a list of report suites and the eVars associated with each.

## GetEvents

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetEvents`

Retrieves the success events for each of the specified report suites.

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` |A list of report suite IDs.|

Returns `report_suite_events[]`, a list of report suites with the success events for each.

## GetGeoSegmentation

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetGeosegmentation`

Retrieves the geography segmentation for the requested report suites.

|Parameters|Type|Description|
|----|----|-----------|
|**`rsid_list`** |`string[]` |A list of report suite IDs.|

Returns `report_suite_geo_segmentation[]`, a list of report suites with the geography segmentation setting of each.

## GetInternalURLFilters

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetInternalURLFilters`

Retrieves the internal URL filters for each of the specified report suites.

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` |A list of report suite IDs.|

Returns `report_suite_internal_url_filters[]`, a list of report suites and their associated internal URL filters.

## GetIPAddressExclusions

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetIPAddressExclusions`

Returns a list of IP addresses excluded from website tracking for each of the specified report suites.

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` |A list of report suite IDs.|

Returns `report_suite_ip_address_exclusions[]`, a list of report suites with the IP address exclusions for each.

## GetIPObfuscation

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetIPObfuscation`

Retrieves the IP Address Obfuscation setting for each of the specified report suites.

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` |A list of report suite IDs.|

Returns `report_suite_ip_obfuscation[]`, a list of report suites with the IP obfuscation settings for each.

## GetListVariables

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetListVariables`

Retrieves the [list variables](https://experienceleague.adobe.com/docs/analytics/admin/admin-tools/conversion-variables/list-var-admin.html) for the requested report suites.

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` | A list of report suite IDs.|

Returns `report_suite_list_variable[]`, a Data structure that describes the list variables that are configured for a report suite.

## GetLocalization

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetLocalization`

Retrieves the localization (multi-byte character) settings for each of the specified report suites.

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` |A list of report suite IDs.|

Returns `report_suite_localization[]`, a list of report suites with localization settings for each.

## GetMarketingChannelCosts

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetMarketingChannelCosts`

Returns the currently defined Marketing Channel costs for the specified report suite.

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` |A list of report suites.|

Returns `report_suite_marketing_channel_costs[]`, a list of marketing channel costs for each specified report suite.

## GetMarketingChannelExpiration

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetMarketingChannelExpiration`

Returns the currently defined Marketing Channel expiration dates for the specified report suites.

|Parameter|Type|Description|
|----|----|-----------|
|**`rsid_list`** |`string[]` |A list of report suites.|

Returns `report_suite_marketing_channel_expiration[]`, a list of marketing channel expiration dates for the specified report suites.

## GetMarketingChannelRules

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetMarketingChannelRules`

Returns the currently defined Marketing Channel rules for the specified report suites.

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` |A list of report suites.|

Returns `rs_marketing_channel_rulesets[]`, a list of marketing channel rules for each specified report suite.

## GetMarketingChannels

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetMarketingChannels`

Returns the currently defined Marketing Channels for the specified report suites.

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` |A list of report suites.|

Returns `report_suite_marketing_channels[]`, a list of marketing channels for each specified report suite.

## GetPaidSearchDetection

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetPaidSearchDetection`

Retrieves the paid search settings for each of the specified report suites.

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` |A list of report suite IDs.|

Returns `report_suite_paid_search_detection[]`, a list of report suites with the paid search settings for each.

## GetPermanentTraffic

Retrieves the permanent traffic settings for each of the specified report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetPermanentTraffic`

|Parameter|Type|Description|
|----|----|-----------|
|**`rsid_list`** |`string[]` |A list of report suite IDs.|

Returns `report_suite_permanent_traffic[]`, a list of report suites with the permanent traffics settings for each.

## GetProcessingStatus

Returns processing status for the given report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetProcessingStatus`

|Parameter|Type|Description|
|----|----|-----------|
|**`rsid_list`** |`string[]` |A list of report suite IDs.|

Returns `report_suite_processing_status[]`, a list of report suites with the permanent traffics settings for each.

## GetProps

Retrieves the props (traffic variables) for the specified report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetProps`

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` |A list of report suite IDs.|

Returns `report_suite_props[]`, a list of report suites with the props for each.

## GetRealTimeSettings

Returns the metrics that are configured to provide real time data.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetRealTimeSettings`

|Parameter|Type|Description|
|----|----|-----------|
|**`rsid_list`** |`string[]` |A list of report suite IDs.|

Returns `report_suite_real_time_settings[]`, an array that contains the metrics with corresponding elements (dimensions) and classifications for which real time reports are enabled.

## GetScheduledSpike

Retrieves the scheduled traffic increase settings for the specified report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetScheduledSpike`

|Parameter|Type|Description|
|----|----|-----------|
|**`rsid_list`** |`string[]` |A list of report suite IDs.|

Returns `report_suite_scheduled_spike[]`, a list of report suites with the scheduled traffic increase settings for each.

## GetSegments

Retrieves the segments that are available in one or more report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetSegments`

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` | (Required) The list of report suite IDs for which you want to retrieve segments.|

Returns `report_suite_segments[]`, a list that includes each report suite's segments.

## GetSettings

Retrieves a broad range of report suite meta data for each of the specified report suites. It aggregates information that is available individually from `GetEcommerce`, `GetEvars`, `GetCorrelations`, `GetSuccessEvents`, `GetProps`, `GetClassifications`, `GetCustomCalendar`, `GetAvailableElements`, `Report.GetMetrics`

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetSettings`

|Parameter|Type|Description|
|----|----|-----------|
| **`locale`** | `string` | Valid values include `en_US`, `de_DE`, `es_ES`, `fr_FR`, `jp_JP`, `ko_KR`, `zh_CN`, `zh_TW`.|
| **`rsid_list`** | `string[]` | A list of report suite IDs.|

Returns `report_suite_settings[]`, a list of report suites with meta data for each.

## GetSiteTitle

Retrieves the site title (friendly name) for each of the specified report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetSiteTitle`

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` |A list of report suite IDs.|

Returns `report_suite_site_title[]`, a list of report suites with the Site Title for each.

## GetTemplate

Retrieves the creation template for each of the specified report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetTemplate`

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` |A list of report suite IDs.|

Returns `report_suite_template[]`, a list of report suites with the creation template for each. If a report suite was not created from a template, no value is provided for that report suite.

## GetTimeZone

Retrieves the Time Zone setting for each of the specified report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetTimeZone`

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` |A list of report suite IDs.|

Returns `report_suite_time_zone[]`, a list of report suites with the time zone setting for each.

## GetTransactionEnabled

Retrieves the transaction ids storage enable for the requested report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetTransactionEnabled`

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` |A list of report suite IDs.|

Returns `report_suite_transaction_enabled[]`, a list of report suites with the Site Title for each.

## GetUniqueVisitorVariable

Retrieves the unique visitor variable setting for the specified report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetUniqueVisitorVariable`

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` |A list of report suite IDs.|

Returns `report_suite_unique_visitor_variable[]`, a list of report suites with the unique visitor variable for each.

## GetVideoSettings

Retrieves video measurement settings.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetVideoSettings`

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` |A list of report suite IDs.|

Returns `report_suite_video_settings[]`, a list of report suites with the video settings for each.

## GetVirtualReportSuiteSettings

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.GetVirtualReportSuiteSettings`

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` | A list of the virtual report suite IDs. |

Returns `virtual_report_suite_settings[]`, a list of virtual report suite settings.

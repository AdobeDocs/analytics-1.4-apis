# ReportSuite.Save methods

`ReportSuite` methods that involve updating settings for a report suite. See [ReportSuite.Get methods](get.md) if you want to simply view any report suite settings.

Most `ReportSuite.Save` methods require an `rsid_list` parameter as well as the value that you want to update. Include these components as a JSON body in the API call.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X POST "https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.SaveVirtualReportSuiteSettings" \
    -H "x-api-key: {OAUTHTOKEN}" \
    -H "x-proxy-global-company-id: {COMPANYID}" \
    -H "Authorization: Bearer {ACCESSTOKEN}" \
    -H "Accept: application/json" \
    -H "Content-Type: application/json" \
    -d "{
            'rsid':'vrs_dehans0_newvrs',
            'parent_rsid':'sistr2',
            'name':'new vrs',
            'segment_list': [
                '536bfa98e4b06d874b0c927a',
                '536bfa99e4b06d874b0c927f'
            ]
        }"
```

#### Response

```json
{
    "rsid": "vrs_dehans0_newvrs"
}
```

## SaveBaseCurrency

Changes the base currency for each of the specified report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.SaveBaseCurrency`

|Parameter|Type|Description|
|----|----|-----------|
|**`rsid_list`** |`string[]` |A list of report suite IDs.|
|**`base_currency`** |`string` |The three-letter currency code to assign to the specified report suites. For example, USD = US Dollar.|

Returns `1` if the update operation is successful. Otherwise, returns `0`.

## SaveBaseURL

Changes the specified base URL to each of the specified report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.SaveBaseURL`

|Parameter|Type|Description|
|----|----|-----------|
|**`rsid_list`** |`string[]` |A list of report suite IDs.|
|**`base_url`** |`string` |The base URL that you want to assign to the report suites.|

Returns `true` if the operation is successful.

## SaveCalculatedMetrics

Saves a list of calculated metrics to each of the specified report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.SaveCalculatedMetrics`

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` |A list of report suite IDs.|
| **`calculated_metrics`** | `calculated_metric[]` | A list of calculated metrics.|

Returns `true` if the update operation is successful.

## SaveClassification

Saves a classification for each of the specified report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.SaveClassification`

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` |A list of report suite IDs.|
| **`date_enabled`** | `boolean` |Determines whether to treat this classification like a campaign.|
| **`element`** | `string` |The name of the element whose classifications are being retrieved.|
| **`name`** | `string` |Visible name of the classification.|
| **`new_name`** | `string` | |
| **`parent_name`** | `string` |Contains the parent classification's `div_num` if this is a sub-classification; otherwise it is `0`.|
| **`type`** | `string` | Classification type. Valid values include `text`, `numeric`, `numeric_percent`, `numeric_currency`.|

Returns `true` if the update operation is successful.

## SaveCustomCalendar

Creates a custom calendar for each of the specified report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.SaveCustomCalendar`

|Parameter|Type|Description|
|----|----|-----------|
|**`rsid_list`** |`string[]` | A list of report suite IDs. |
|**`anchor_date`** |`date` | The anchor date for the custom calendar. |
|**`calendar_type`** | `string` | The type of calendar to create. Valid values include `gregorian`, `4-5-4-retail`, `4-5-4-custom`, `4-4-5-custom`, `modified-gregorian`. |

Returns `true` if the operation is successful. |

## SaveDataWarehouseDisplay

Saves the data warehouse display for the requested report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.SaveDataWarehouseDisplay`

|Parameter|Type|Description|
|----|----|-----------|
|**`rsid_list`** |`string[]` |A list of report suite IDs.|
|**`data_warehouse_display`** |`string` | Data warehouse display setting. Valid values include `none`, `all-logins-have-access`, `grayed-out-tab`, `admins-only`, `disabled`. |

Returns `true` if the operation is successful.

## SaveDefaultPage

Updates the a default page setting for each of the specified report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.SaveDefaultPage`

|Parameter|Type|Description|
|----|----|-----------|
|**`rsid_list`** |`string[]` |A list of report suite IDs.|
|**`default_page`** |`string` |The default Web page. For example, `index.html`.|

Returns `true` if the update operation is successful.

## SaveEcommerce

Updates the commerce level for each of the specified report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.SaveEcommerce`

|Parameter|Type|Description|
|----|----|-----------|
|**`rsid_list`** |`string[]` | A list of report suite IDs.|
|**`ecommerce`** |`boolean` | Enables or disables eCommerce.|

Returns `true` if the operation is successful.

## SaveEvars

Updates the commerce variables (eVars) for the requested report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.SaveEvars`

|Parameter|Type|Description|
|----|----|-----------|
|**`rsid_list`** |`string[]` |A list of report suite IDs.|
|**`evars`** | [`evar[]`](../data-types.md#evar) |List of eVars for the specified report suites, including the settings for each eVar.|

Returns `true` if the operation is successful.|

## SaveEvents

Updates custom events to each of the specified report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.SaveEvents`

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` |A list of report suite IDs.|
| **`event`** | [`event[]`](../data-types.md#event) |A list of success events.|

Returns `true` if the operation is successful.

## SaveGeoSegmentation

Saves the geosegmentation setting for the requested report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.SaveGeoSegmentation`

|Parameter|Type|Description|
|----|----|-----------|
|**`rsid_list`** |`string[]` |A list of report suite IDs.|
|**`geo_segmentation`** |`boolean` |Enables or disables geoSegmentation reports.|
|**`vista_enabled`** |`boolean` |Enables or disables VISTA geoSegmentation reports.|

Returns `true` if the update operation is successful.

## SaveInternalURLFilters

Saves internal URL filters for each of the specified report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.SaveInternalURLFilters`

|Parameter|Type|Description|
|----|----|-----------|
|**`rsid_list`** |`string[]` |A list of report suite IDs.|
|**`internal_url_filters`** |`string[]` |A list of internal URLs that you want to exclude from web site tracking.|

Returns `true` if the operation is successful.

## SaveIPAddressExclusion

Add an IP address to the IP address exclusion list for each of the specified report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.SaveIPAddressExclusion`

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` |A list of report suite IDs.|
| **`ip_address`** | `string` | An IP address that you do not want to include in website tracking. You can use wildcard indicators (*) to exclude a range of addresses. For example, 0.0.*.0 would exclude all IP addresses between 0.0.0.0 and 0.0.255.0. You may exclude up to 50 different IP address strings. |
| **`comment`** |`string` | A comment on the IP address that was excluded. |

Returns `true` if the operation is successful.

## SaveIPObfuscation

Updates the IP address obfuscation settings for each of the specified report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.SaveIPObfuscation`

|Parameter|Type|Description|
|----|----|-----------|
|**`rsid_list`** |`string[]` | A list of report suite IDs. |
|**`ip_obfuscation`** |`string` | The IP obfuscation setting. Valid values include `obfuscated`, `none`, `ip_removed`.|

Returns `true` if the operation is successful. |

## SaveListVariables

Saves list variables for the requested report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.SaveListVariables`

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** |`string[]` | A list of report suite IDs.|
| **`list_variables`** | `list_variable[]` | Data structure that describes the list variables that are configured for a report suite. |

Returns `1` if the operation is successful. Otherwise, returns `0`.

## SaveMarketingChannelCost

Updates the marketing channel cost for the specified report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.SaveMarketingChannelCost`

|Parameter|Type|Description|
|----|----|-----------|
|**`rsid_list`** |`string[]` |A list of report suite IDs.|
|**`amount`** |`double` | |
|**`channel_id`** |`int` | |
|**`channel_type`** |`string` | |
|**`cost_group`** |`string` | |
|**`cost_id`** |`int` | |
|**`name`** |`string` | |
|**`end_date`** |`dateTime` | |
|**`metric`** |`string` | |
|**`start_date`** |`dateTime` | |
|**`type`** |`string` | |

Returns `1` if the operation is successful. Otherwise, returns `0`.

## SaveMarketingChannelExpiration

Updates the marketing channel expiration date for the specified report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.SaveMarketingChannelExpiration`

|Parameter|Type|Description|
|----|----|-----------|
|**`days`** |`int` |The number of days you want to extend the marketing channel expiration date.|
|**`rsid_list`** |`string[]` |A list of report suite IDs.|

Returns `1` if the operation is successful. Otherwise, returns `0`.

## SaveMarketingChannelRules

Updates the marketing channel rules for the specified report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.SaveMarketingChannelRules`

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` | A list of report suite IDs. |
| **`marketing_channel_rules`** |  [`rs_marketing_channel_ruleset`](../data-types.md#rsmarketingchannelrulesets)  | An updated set of marketing channel rules to apply to each specified report suite. |

Returns `true` if the operation is successful.|

## SaveMarketingChannels

Saves one or more marketing channels in the specified report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.SaveMarketingChannels`

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` |A list of report suite IDs.|
| **`channels`** |  [`marketing_channel[]`](../data-types.md#marketingchannel) |A list of marketing channels to save in each specified report suite.|

Returns `true` if the operation is successful.

## SavePaidSearchDetection

Saves the paid search settings for the requested report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.SavePaidSearchDetection`

|Parameter|Type|Description|
|----|----|-----------|
|**`rsid_list`** |`string[]` |A list of report suite IDs.|
|**`search_engine`** |[`search_engine_enum`](../data_types.md#searchengineenum) | The name of the search engine. |
|**`operator`** |`string` | Specifies the type of paid search rule. Valid values include `contains` or `not_contains`. |
|**`query_string`** |`string` |The string value to use when matching a search engine referring URL.|

Returns `true` if the operation is successful.

## SavePermanentTraffic

Updates paid search settings for each of the specified report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.SavePermanentTraffic`

|Parameter|Type|Description|
|----|----|-----------|
|**`rsid_list`** |`string[]` |A list of report suite IDs.|
|**`hits_per_day`** |`int` |The estimated number of hits per day.|
|**`start_date`** |`date` |The date the traffic level will change.|

Returns `true` if the operation is successful.

## SaveProps

Updates the traffic variables for each of the specified report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.SaveProps`

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` |A list of report suite IDs.|
| **`props`** | [`prop[]`](../data-types.md#prop) |A list of traffic variable objects to assign to the report suites.|

Returns `true` if the operation is successful.

## SaveRealTimeSettings

Selects the metrics and elements (dimensions) on which you want real time reports enabled. Realtime configuration changes take 15 minutes to be reflected in reports.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.SaveRealTimeSettings`

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid`** | `string` | The report suite for which you want to configure real time reports. |
| **`real_time_settings`** | [`real_time_settings[]`](../data-types.md#realtimesettings) | Provide up to three metrics with corresponding elements (dimensions) for which you want to enable real time reporting. |

Returns `true` if the operation is successful.

## SaveScheduledSpike

Updates scheduled traffic increase settings for each of the specified report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.SaveScheduledSpike`

|Parameter|Type|Description|
|----|----|-----------|
|**`rsid_list`** |`string[]` |A list of report suite IDs.|
|**`start_date`** |`date` |Date the traffic increase begins.|
|**`end_date`** |`date` |Date the traffic increase ends.|
|**`hits_per_day`** |`int` |The expected hits per day during the traffic spike.|

Returns `true` if the operation is successful.|

## SaveSiteTitle

Updates the Site Title (friendly name) setting for the specified report suite.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.SaveSiteTitle`

|Parameter|Type|Description|
|----|----|-----------|
|**`rsid_list`** |`string[]` | A list of report suite IDs. Note that this parameter accepts a list of report suites to maintain consistency between the Admin APIs, however, you should not assign the same site_title to multiple report suites. |
|**`site_title`** |`string` |The friendly name to apply to the report suites.|

Returns `true` if the operation is successful.

## SaveTimeZone

Updates the time zone setting for each of the specified report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.SaveTimeZone`

|Parameter|Type|Description|
|----|----|-----------|
|**`rsid_list`** |`string[]` |A list of report suite IDs.|
|**`time_zone`** |[`time_zone_enum`](../data-types.md#timezoneenum) |The time zone to assign with the report suites.|

Returns `true` if the operation is successful.

## SaveUniqueVisitorVariable

Updates the unique visitor variable for the specified report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.SaveUniqueVisitorVariable`

|Parameter|Type|Description|
|----|----|-----------|
|**`rsid_list`** |`string[]` | A list of report suite IDs. |
|**`unique_visitor_variable`** |`string` | The commerce variable to use for tracking unique visitors. For example, specify `7` for eVar7. |

Returns `true` if the operation is successful. |

## SaveVideoSettings

Saves video measurement settings.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.SaveVideoSettings`

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` |(Required) A list of report suite IDs. If this is the only parameter specified, then video solution variables are enabled for each report suite.|
|**`content_type_evar`** |`string` |eVar that stores the content type for your website or app. Content type is set to "video" automatically for all video views, and to "ad" for all ad views.|
|**`enable_ad_tracking`** |`boolean` |Enables ad tracking solution variables. Enabling this option configures these variables on the report suite, cannot be disabled after it has been enabled.|
|**`enable_chapter_tracking`** |`boolean` |Enables chapter tracking solution variables. Enabling this option configures these variables on the report suite, cannot be disabled after it has been enabled.|
|**`rename_custom_variables`** |`boolean` |Renames the custom variables to video friendly names, for example Video Views, so that it's clear that they're being used for video measurement.|
|**`use_custom_variables`** |`boolean` |If false, video solution variables are enabled for the report suite and the pre-built video reports are configured to use these solution variables. If true, the pre-built video reports are configured to use the provided custom variables instead of solution variables and the last 4 parameters in this list are required.|
|**`video_completes_event`** |`string` |Provide a custom event that is not being used, indicates that a user has viewed a complete video or ad.|
|**`video_name_evar`** |`string` |Provide a custom eVar that is not being used, this stores the name of the video, as passed to Media.open(). Video Name and Ad Name are automatic classifications based on the data sent on the initial Media.play() call, so you'll see an extra menu level when you view these reports.|
|**`video_time_event`** |`string` |Provide a custom event that is not being used, measures the time, in seconds, spent watching a video or ad.|
|**`video_views_event`** |`string` |Provide a custom event that is not being used, Indicates that a visitor has viewed some portion of a video or ad. However, it does not provide any information about how much, or what part, of a video the visitor viewed.|

Returns true if the operation is successful.|

## SaveVirtualReportSuite

Create or update a virtual report suite. If the `rsid` parameter is included, this method updates an existing virtual report suite. If the `rsid` parameter is excluded, this method creates a new virtual report suite.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.SaveVirtualReportSuite`

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid`** | `string` | (Optional) Requested virtual report suite ID for update. |
|**`parent_rsid`** |`string` | Parent report suite ID for virtual report suite. |
|**`name`** |`string` | The name for the virtual report suite. |
|**`segment_list`** |`segment_list[]` | List of segments to be applied to the virtual report suite. |

Returns the Report suite ID string for the created or updated virtual report suite.

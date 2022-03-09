# SaveBaseCurrency

Changes the base currency for each of the specified report suites.

## ReportSuite.SaveBaseCurrency parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`string[]` |A list of report suite IDs.|
|**base_currency** |`string` |The three-letter currency code to assign to the specified report suites. For example, USD = US Dollar.|

## ReportSuite.SaveBaseCurrency response

|Type|Description|
|----|-----------|
|`int` |Returns `1` if the update operation is successful. Otherwise, returns `0`.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# SaveBaseURL

Changes the specified base URL to each of the specified report suites.

## ReportSuite.SaveBaseURL parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`string[]` |A list of report suite IDs.|
|**base_url** |`string` |The base URL that you want to assign to the report suites.|

## ReportSuite.SaveBaseURL response

|Type|Description|
|----|-----------|
|`boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# SaveCalculatedMetrics

Saves a list of calculated metrics to each of the specified report suites.

## ReportSuite.SaveCalculatedMetrics parameters

|Name|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` |A list of report suite IDs.|
| **`calculated_metrics`** | `calculated_metric[]` | A list of calculated metrics.|

## ReportSuite.SaveCalculatedMetrics response

|Type|Description|
|----|-----------|
| `boolean` |Returns `true` if the update operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# SaveClassification

Saves a classification for each of the specified report suites.

## ReportSuite.SaveClassification parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` |A list of report suite IDs.|
| **date_enabled** | `boolean` |Determines whether to treat this classification like a campaign.|
| **element** | `string` |The name of the element whose classifications are being retrieved.|
| **name** | `string` |Visible name of the classification.|
| **new_name** | `string` | |
| **parent_name** | `string` |Contains the parent classification's `div_num` if this is a sub-classification; otherwise it is `0`.|
| **type** | [classification_type_enum](../../data_types/r_classification_type_enum.md#) | Classification type, one of the following: text numeric numeric_percent numeric_currency|

## ReportSuite.SaveClassification response

|Type|Description|
|----|-----------|
| `boolean` |Returns `true` if the update operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# SaveCustomCalendar

Creates a custom calendar for each of the specified report suites.

## ReportSuite.SaveCustomCalendar parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`string[]` | A list of report suite IDs. |
|**anchor_date** |`date` | The anchor date for the custom calendar. |
|**calendar_type** | `string` | The type of calendar to create. Valid values include `gregorian`, `4-5-4-retail`, `4-5-4-custom`, `4-4-5-custom`, `modified-gregorian`. |

## ReportSuite.SaveCustomCalendar response

|Type|Description|
|----|-----------|
|`boolean` | Returns `true` if the operation is successful. |

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# SaveDataWarehouseDisplay

Saves the data warehouse display for the requested report suites.

## ReportSuite.SaveDataWarehouseDisplay parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`string[]` |A list of report suite IDs.|
|**data_warehouse_display** |`string` | Data warehouse display setting. Valid values include `none`, `all-logins-have-access`, `grayed-out-tab`, `admins-only`, `disabled`. |

## ReportSuite.SaveDataWarehouseDisplay response

|Type|Description|
|----|-----------|
|`boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# SaveDefaultPage

Updates the a default page setting for each of the specified report suites.

## ReportSuite.SaveDefaultPage parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`string[]` |A list of report suite IDs.|
|**default_page** |`string` |The default Web page. For example, `index.html`.|

## ReportSuite.SaveDefaultPage response

|Type|Description|
|----|-----------|
|`boolean` |Returns `true` if the update operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# SaveEcommerce

Updates the commerce level for each of the specified report suites.

## ReportSuite.SaveEcommerce parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`string[]` | A list of report suite IDs.|
|**ecommerce** |`boolean` | Enables or disables eCommerce.|

## ReportSuite.SaveEcommerce response

|Type|Description|
|----|-----------|
|`boolean` | Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# SaveEvars

Updates the commerce variables (eVars) for the requested report suites.

## ReportSuite.SaveEvars parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`string[]` |A list of report suite IDs.|
|**evars** | [evar_array](../../data_types/r_evar_array.md#) - An array of [evar](../../data_types/r_evar.md#) |List of eVars for the specified report suites, including the settings for each eVar.|

## ReportSuite.SaveEvars response

|Type|Description|
|----|-----------|
|`boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# SaveEvents

Updates custom events to each of the specified report suites.

## ReportSuite.SaveSuccessEvents parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` |A list of report suite IDs.|
| **event** | [event[]](../../data_types/r_event_array.md#) - An array of [event](../../data_types/r_event.md#)|A list of success events.|

## ReportSuite.SaveEvents response

|Type|Description|
|----|-----------|
| `boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# SaveGeoSegmentation

Saves ad hoc analysis (formerly Discover) access for the requested report suites.

## ReportSuite.SaveDiscoverEnabled parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`string[]` |A list of report suite IDs.|
|**geo_segmentation** |`boolean` |Enables or disables geoSegmentation reports.|
|**vista_enabled** |`boolean` |Enables or disables VISTA geoSegmentation reports.|

## ReportSuite.SaveDiscoverEnabled response

|Type|Description|
|----|-----------|
|`boolean` |Returns `true` if the update operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# SaveInternalURLFilters

Saves internal URL filters for each of the specified report suites.

## ReportSuite.AddInternalURLFilters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`string[]` |A list of report suite IDs.|
|**internal_url_filters** |`string[]` |A list of internal URLs that you want to exclude from web site tracking.|

## ReportSuite.AddInternalURLFilters response

|Type|Description|
|----|-----------|
|`boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# SaveIPAddressExclusion

Add an IP address to the IP address exclusion list for each of the specified report suites.

## ReportSuite.SaveIPAddressExclusion parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` |A list of report suite IDs.|
| **ip_address** | `string` | An IP address that you do not want to include in website tracking. You can use wildcard indicators (*) to exclude a range of addresses. For example, 0.0.*.0 would exclude all IP addresses between 0.0.0.0 and 0.0.255.0. You may exclude up to 50 different IP address strings. |
|**comment** |`string` | A comment on the IP address that was excluded. |

## ReportSuite.SaveIPAddressExclusion response

|Type|Description|
|----|-----------|
| `boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# SaveIPObfuscation

Updates the IP address obfuscation settings for each of the specified report suites.

## ReportSuite.SaveIPObfuscation parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`string[]` | A list of report suite IDs. |
|**ip_obfuscation** |`string` | The IP obfuscation setting. Valid values include `obfuscated`, `none`, `ip_removed`.|

## ReportSuite.SaveIPObfuscation response

|Type|Description|
|----|-----------|
|`boolean` | Returns `true` if the operation is successful. |

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# SaveKeyVisitors

Saves key visitors.

## ReportSuite.SaveKeyVisitors request

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`string[]` |A list of report suite IDs.|
|**key_visitors** |`string[]` |A list of key visitors, identified by either domain name (`example.com`) or IP address (`192.168.10.128`).|

## ReportSuite.SaveKeyVisitors response

|Type|Description|
|----|-----------|
|`boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# SaveListVariables

Saves list variables for the requested report suites.

See [List Variable](https://microsite.omniture.com/t2/help/en_US/sc/implement/index.html?f=list_var) in the Analytics Implementation Guide.

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`rsid_list` |`string[]` | A list of report suite IDs.|
|`list_variables` | `list_variable[]` | Data structure that describes the list variables that are configured for a report suite. |

## Response

| Type | Description |
|--------|---------------|
|`int` |1 if the operation was successful, 0 if an error occurred.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# SaveMarketingChannelCost

Updates the marketing channel cost for the specified report suites.

## ReportSuite.SaveMarketingChannelCost parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`string[]` |A list of report suite IDs.|
|**amount** |`double` | |
|**channel_id** |`int` | |
|**channel_type** |`string` | |
|**cost_group** |`string` | |
|**cost_id** |`int` | |
|**name** |`string` | |
|**end_date** |`dateTime` | |
|**metric** |`string` | |
|**start_date** |`dateTime` | |
|**type** |`string` | |

## ReportSuite.SaveMarketingChannelCost response

|Type|Description|
|----|-----------|
|`int` |Returns `1` if the operation is successful. Otherwise, returns `0`.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# SaveMarketingChannelExpiration

Updates the marketing channel expiration date for the specified report suites.

## ReportSuite.SaveMarketingChannelExpiration parameters

|Name|Type|Description|
|----|----|-----------|
|**days** |`int` |The number of days you want to extend the marketing channel expiration date.|
|**rsid_list** |`string[]` |A list of report suite IDs.|

## ReportSuite.SaveMarketingChannelExpiration response

|Type|Description|
|----|-----------|
|`int` |Returns `1` if the operation is successful. Otherwise, returns `0`.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# SaveMarketingChannelRules

Updates the marketing channel expiration date for the specified report suites.

## ReportSuite.SaveMarketingChannelRules parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` | A list of report suite IDs. |
| **marketing_channel_rules** |  [rs_marketing_channel_rulesets[]](../../data_types/r_rs_marketing_channel_rulesets_array.md#) - An array of [marketing_channel_ruleset](../../data_types/r_marketing_channel_ruleset.md#)  | An updated set of marketing channel rules to apply to each specified report suite. |

## ReportSuite.SaveMarketingChannelRules response

|Type|Description|
|----|-----------|
| `boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# SaveMarketingChannels

Saves one or more marketing channels in the specified report suites.

## ReportSuite.SaveMarketingChannels parameters

|Name|Type|Description|
|----|----|-----------|
| **channels** |  [marketing_channel[]](../../data_types/r_marketing_channel_array.md#) - An array of [marketing_channel](../../data_types/r_marketing_channel.md#). |A list of marketing channels to save in each specified report suite.|
| **rsid_list** | `string[]` |A list of report suite IDs.|

## ReportSuite.SaveMarketingChannels response

|Type|Description|
|----|-----------|
| `boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# SavePaidSearchDetection

Saves the paid search settings for the requested report suites.

## ReportSuite.SavePaidSearchDetection parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`string[]` |A list of report suite IDs.|
|**search_engine** |[`search_engine_enum`](../data_types.md#searchengineenum) | The name of the search engine. |
|**operator** |`string` | Specifies the type of paid search rule. Valid values include `contains` or `not_contains`. |
|**query_string** |`string` |The string value to use when matching a search engine referring URL.|

## ReportSuite.SavePaidSearchDetection response

|Type|Description|
|----|-----------|
|`boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# SavePermanentTraffic

Updates paid search settings for each of the specified report suites.

## ReportSuite.SavePermanentTraffic parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`string[]` |A list of report suite IDs.|
|**hits_per_day** |`int` |The estimated number of hits per day.|
|**start_date** |`date` |The date the traffic level will change.|

## ReportSuite.SavePermanentTraffic response

|Type|Description|
|----|-----------|
|`boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# SaveProps

Updates the traffic variables for each of the specified report suites.

## ReportSuite.SaveProps parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` |A list of report suite IDs.|
| **props** | [prop[]](../../data_types/r_prop_array.md#) - An array of [prop](../../data_types/r_prop.md#) |A list of traffic variable objects to assign to the report suites.|

## ReportSuite.SaveProps response

|Type|Description|
|----|-----------|
| `boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# SaveRealTimeSettings

Selects the metrics and elements (dimensions) on which you want real time reports enabled.

Realtime configuration changes take 15 minutes to be reflected in reports.

See [Real Time Reports](../../../reporting-api/real_time.md).

## ReportSuite.SaveRealTimeConfiguration parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid** | `string` | The report suite for which you want to configure real time reports. |
| **real_time_settings** | [real_time_settings[]](../../data_types/r_real_time_settings_array.md#) - An array of [real_time_settings](../../data_types/r_real_time_settings.md#) | Provide up to three metrics with corresponding elements (dimensions) for which you want to enable real time reporting. |

## ReportSuite.SaveRealTimeConfiguration response

|Type|Description|
|----|-----------|
| `int` |Returns `true` if the operation is successful.|

## Supported Metrics and Elements

The following is the list of the supported metrics and breakdowns available in Real Time Reports.

### Metrics

 pageviews

 revenue

 orders

 units

 carts

 cartviews

 instances

 checkouts

 cartadditions

 cartremovals

 events1-100

 videotime

 videostart

 videocomplete

 videosegmentviews

 videoadstart

 videoadcomplete

 socialmentions

 socialtotalsentiment

 sociallikeadds

 socialpageviews

 socialpostviews

 socialfbstorytellers

 socialfbstories

 socialpubrecommends

 socialpubcomments

 socialpubsubscribers

 socialpubposts

 mobileinstalls

 mobileupgrades

 mobiledailyengagedusers

 mobilemonthlyengagedusers

 mobilelaunches

 mobilecrashes

 mobileprevsessionlength

 ### Elements
 
 page

 sitesection

 server

 linkdownload

 linkexit

 linkcustom

 topleveldomain

 referringdomain

 searchengine

 searchenginekeyword

 searchenginenatural

 searchenginepaid

 geocountry

 georegion

 geocity

 geodma

 prop1-75

 evar1-75

 surveybase

 listvar1

 listvar2

 listvar4

 video

 videoad

 videosegment

 videocontenttype

 socialterm

 socialcontentprovider

 socialauthor

 sociallanguage

 sociallatlong

 socialassettrackingcode

 mobileinstalldate

 mobileappid

 mobilelaunchnumber

 mobiledayssincefirstuse

 mobiledayssincelastuse

 mobilehourofday

 mobiledayofweek

 mobileosenvironment

 mobiledayssincelastupgrade

 mobilelaunchessincelastupgrade

 mobiledevice

 mobileosversion

 mobilegooglecampaignsource

 mobilegooglecampaignmedium

 mobilegooglecampaignterm

 mobilegooglecampaigncontent

 mobilegooglecampaignname


**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# SaveScheduledSpike

Updates scheduled traffic increase settings for each of the specified report suites.

## ReportSuite.SaveScheduledSpike parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`string[]` |A list of report suite IDs.|
|**start_date** |`date` |Date the traffic increase begins.|
|**end_date** |`date` |Date the traffic increase ends.|
|**hits_per_day** |`int` |The expected hits per day during the traffic spike.|

## ReportSuite.SaveScheduledSpike response

|Type|Description|
|----|-----------|
|`boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# SaveSiteTitle

Updates the Site Title (friendly name) setting for the specified report suite.

## ReportSuite.SaveSiteTitle parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`string[]` | A list of report suite IDs. Note that this parameter accepts a list of report suites to maintain consistency between the Admin APIs, however, you should not assign the same site_title to multiple report suites. |
|**site_title** |`string` |The friendly name to apply to the report suites.|

## ReportSuite.SaveSiteTitle response

|Type|Description|
|----|-----------|
|`boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# SaveTimeZone

Updates the time zone setting for each of the specified report suites.

## ReportSuite.SaveTimeZone parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`string[]` |A list of report suite IDs.|
|**time_zone** |[time_zone_enum](../../data_types/r_timezone_enum.md#) |The time zone to assign with the report suites.|

## ReportSuite.SaveTimeZone response

|Type|Description|
|----|-----------|
|`boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# SaveUniqueVisitorVariable

Updates the unique visitor variable for the specified report suites.

## ReportSuite.SaveUniqueVisitorVariable parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`string[]` | A list of report suite IDs. |
|**unique_visitor_variable** |`string` | The commerce variable to use for tracking unique visitors. For example, specify `7` for eVar7. |

## ReportSuite.SaveUniqueVisitorVariable response

|Type|Description|
|----|-----------|
|`boolean` | Returns `true` if the operation is successful. |

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# SaveVideoSettings

Saves video measurement settings.

## ReportSuite.SaveVideoSettings parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` |(Required) A list of report suite IDs. If this is the only parameter specified, then video solution variables are enabled for each report suite.|
|**content_type_evar** |`string` |eVar that stores the content type for your website or app. Content type is set to "video" automatically for all video views, and to "ad" for all ad views.|
|**enable_ad_tracking** |`boolean` |Enables ad tracking solution variables. Enabling this option configures these variables on the report suite, cannot be disabled after it has been enabled.|
|**enable_chapter_tracking** |`boolean` |Enables chapter tracking solution variables. Enabling this option configures these variables on the report suite, cannot be disabled after it has been enabled.|
|**rename_custom_variables** |`boolean` |Renames the custom variables to video friendly names, for example Video Views, so that it's clear that they're being used for video measurement.|
|**use_custom_variables** |`boolean` |If false, video solution variables are enabled for the report suite and the pre-built video reports are configured to use these solution variables. If true, the pre-built video reports are configured to use the provided custom variables instead of solution variables and the last 4 parameters in this list are required.|
|**video_completes_event** |`string` |Provide a custom event that is not being used, indicates that a user has viewed a complete video or ad.|
|**video_name_evar** |`string` |Provide a custom eVar that is not being used, this stores the name of the video, as passed to Media.open(). Video Name and Ad Name are automatic classifications based on the data sent on the initial Media.play() call, so you'll see an extra menu level when you view these reports.|
|**video_time_event** |`string` |Provide a custom event that is not being used, measures the time, in seconds, spent watching a video or ad.|
|**video_views_event** |`string` |Provide a custom event that is not being used, Indicates that a visitor has viewed some portion of a video or ad. However, it does not provide any information about how much, or what part, of a video the visitor viewed.|

## ReportSuite.SaveVideoSettings response

|Type|Description|
|----|-----------|
| `boolean` |Returns true if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# SaveVirtualReportSuite

Creating or Updating a VRS will be its own method since the current ReportSuite.Create does not support the parameters necessary.

## ReportSuite.SaveVirtualReportSuite parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid** | `string` | (Optional) Requested virtual report suite ID for update. |
|**parent_rsid** |`string` | Parent report suite ID for virtual report suite. |
|**name** |`string` | The name for the virtual report suite. |
|**segment_list** |`segment_list[]` | List of segments to be applied to the virtual report suite. |

Example:

```
{
    "rsid":"vrs_dehans0_newvrs",
    "parent_rsid":"sistr2",
    "name":"new vrs",
    "segment_list": [
        "536bfa98e4b06d874b0c927a",
        "536bfa99e4b06d874b0c927f"
    ]
}
```

## ReportSuite.SaveVirtualReportSuite response

|Name|Type|Description|
|----|----|-----------|
| **rsid** | `string` | Report suite ID for the created or updated virtual report suite. |

Example:

```
{
    "rsid": "vrs_dehans0_newvrs"
}
```

Called with the rsid parameter this method will attempt to update an existing virtual report suite, called without rsid parameter this method will attempt to create a new virtual report suite.

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


# GetActivation

Retrieves the activation status for each of the specified report suites.

## ReportSuite.GetActivation parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`string[]` |A list of report suite IDs.|

## ReportSuite.GetActivation response

|Type|Description|
|----|-----------|
| [report_suite_activation[]](../../data_types/r_report_suite_activation_array.md#) - array of [report_suite_activation](../../data_types/r_report_suite_activation.md#) |A list of report suites and the activation status of each.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# GetAxleStartDate

Retrieves the date a report suite was migrated from SiteCatalyst 14 to axle processing (version 15).

## ReportSuite.GetAxleStartDate parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`string[]` |A list of report suite IDs.|

## ReportSuite.GetAxleStartDate response

|Type|Description|
|----|-----------|
| [report_suite_axle_start_date[]](../../data_types/r_report_suite_axle_start_date_array.md#) - array of [report_suite_axle_start_date](../../data_types/r_report_suite_axle_start_date.md#) |A list of report suites and the axle start date for each.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# GetBaseCurrency

Retrieves a list of supported currency codes for each of the specified report suites.

## ReportSuite.GetBaseCurrency parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` |A list of report suite IDs.|

## ReportSuite.GetBaseCurrency response

|Type|Description|
|----|-----------|
|  [report_suite_base_currency[]](../../data_types/r_report_suite_base_currency_array.md#) - An array of [report_suite_base_currency](../../data_types/r_report_suite_base_currency.md#). |A list of report suites, site name, and their supported 3-letter currency codes. For example: US Dollar = USD.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# GetBaseURL

Retrieves the base URL assigned to each of the specified report suites.

## ReportSuite.GetBaseURL parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` |A list of report suite IDs.|

## ReportSuite.GetBaseURL response

|Type|Description|
|----|-----------|
|  [report_suite_base_url[]](../../data_types/r_report_suite_base_url_array.md#) - An array of [report_suite_base_url](../../data_types/r_report_suite_base_url.md#) |A list of report suites and their associated Base URLs.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# GetCalculatedMetrics

Retrieves the calculated metrics assigned to each of the specified report suites.

## ReportSuite.GetCalculatedMetrics parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` |A list of report suite IDs.|

## ReportSuite.GetCalculatedMetrics response

|Type|Description|
|----|-----------|
|  `report_suite_calculated_metric[]` |A list of report suites and their associated calculated metrics.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# GetClassifications

Retrieves a list of classifications (associated with the specified element) for each of the specified report suites.

## ReportSuite.GetClassifications parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` | (Required) The list of report suite IDs for which you want to retrieve classifications. |
| **element_list** |`string[]` | (Required) The list of elements for which you want to retrieve classifications. See [values for element_list](r_GetClassifications.md#). |

## ReportSuite.GetClassifications response

|Type|Description|
|----|-----------|
| [report_suite_element_classifications[]](../../data_types/r_report_suite_classifications_array.md#) - An array of [report_suite_element_classifications](../../data_types/r_report_suite_classifications.md#) |List that includes each report suite's classifications hierarchy for the specified element(s).|

## Values for element_list

Element_list can be one or more of the following values:

trackingcode

days_between_buys

days_till_purchase

domain

evar1-75

firsttouchchannel

firsttouchchanneldetail

lasttouchchannel

lasttouchchanneldetail

loyalty

media

page

sitesection

server

prop1-75

listvar1-3

product

sitetime

state

surveybase

tntbase

visitdepth

visitnum

zip

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# GetCustomCalendar

Retrieves the custom calendar for each of the specified report suites.

## ReportSuite.GetCustomCalendar parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` |A list of report suite IDs.|

## ReportSuite.GetCustomCalendar response

|Type|Description|
|----|-----------|
|  [report_suite_custom_calendar[]](../../data_types/r_report_suite_custom_calendar_array.md#) - An array of [report_suite_custom_calendar](../../data_types/r_report_suite_custom_calendar.md#) |A list of report suites and their associated custom calendar settings.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# GetDataWarehouseDisplay

Returns if data warehouse is enabled for the requested report suites.

## ReportSuite.GetDataWarehouseDisplay parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`string[]` |A list of report suite IDs.|

## ReportSuite.GetDataWarehouseDisplay response

|Type|Description|
|----|-----------|
| [report_suite_data_warehouse_display[]](../../data_types/r_report_suite_data_warehouse_display_array.md#) - An array of [report_suite_data_warehouse_display](../../data_types/r_report_suite_data_warehouse_display.md#) |A list of report suites and their associated data warehouse display setting.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# GetDefaultPage

Retrieves the default page for each of the specified report suites.

## ReportSuite.GetDefaultPage parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` |A list of report suite IDs.|

## ReportSuite.GetDefaultPage response

|Type|Description|
|----|-----------|
|  [report_suite_default_page[]](../../data_types/r_report_suite_default_page_array.md#) - An array of [report_suite_default_page](../../data_types/r_report_suite_default_page.md#) |A list of report suites and their associated Base URLs.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# GetEcommerce

Retrieves the commerce level for each of the specified report suites.

## ReportSuite.GetEcommerce parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` |A list of report suite IDs.|

## ReportSuite.GetEcommerce response

|Type|Description|
|----|-----------|
| `report_suite_ecommerce[]` |List of report suites with the commerce level of each (see the `ecommerce` parameter in [SaveEcommerce](r_SaveEcommerce.md#)).|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# GetEvars

Retrieves the commerce variables for each of the specified report suites.

## ReportSuite.GetEvars parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` |A list of report suite IDs.|

## ReportSuite.GetEvars response

|Type|Description|
|----|-----------|
| [report_suite_evars[]](../../data_types/r_repot_suite_evars_array.md#) - An array of [report_suite_evars](../../data_types/r_report_suite_evars.md#) |List of report suites and the eVars associated with each.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# GetEvents

Retrieves the success events for each of the specified report suites.

## ReportSuite.GetEvents parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` |A list of report suite IDs.|

## ReportSuite.GetEvents response

|Type|Description|
|----|-----------|
| `report_suite_events[]` |List of report suites with the success events for each.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# GetGeoSegmentation

Retrieves the geography segmentation for the requested report suites.

## ReportSuite.GetGeoSegmentation parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`string[]` |A list of report suite IDs.|

## ReportSuite.GetGeoSegmentation response

|Type|Description|
|----|-----------|
| [report_suite_geo_segmentation[]](../../data_types/r_report_suite_geo_segmentation_array.md#) - An array of [report_suite_geo_segmentation](../../data_types/r_report_suite_geo_segmentation.md#) |List of report suites with the geography segmentation setting of each.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# GetInternalURLFilters

Retrieves the internal URL filters for each of the specified report suites.

## ReportSuite.GetInternalURLFilters parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` |A list of report suite IDs.|

## ReportSuite.GetInternalURLFilters response

|Type|Description|
|----|-----------|
| [report_suite_internal_url_filters[]](../../data_types/r_report_suite_internal_url_filter_array.md#) - An array of [report_suite_internal_url_filters](../../data_types/r_report_suite_internal_url_filter.md#) |A list of report suites and their associated internal URL filters.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# GetIPAddressExclusions

Returns a list of IP addresses excluded from website tracking for each of the specified report suites.

## ReportSuite.GetIPAddressExclusions parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` |A list of report suite IDs.|

## ReportSuite.GetIPAddressExclusions response

|Type|Description|
|----|-----------|
| [report_suite_ip_address_exclusions[]](../../data_types/r_report_suite_ip_address_exclusions_array.md#) - An array of [report_suite_ip_address_exclusions](../../data_types/r_report_suite_ip_address_exclusions.md#)|A list of report suites with the IP address exclusions for each.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# GetIPObfuscation

Retrieves the IP Address Obfuscation setting for each of the specified report suites.

## ReportSuite.GetIPObfuscation parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` |A list of report suite IDs.|

## ReportSuite.GetIPObfuscation response

|Type|Description|
|----|-----------|
| `report_suite_ip_obfuscation[]` |List of report suites with the IP obfuscation settings for each.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# GetKeyVisitors

Retrieves a list of key visitors for each of the specified report suites.

## ReportSuite.GetKeyVisitors parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` |A list of report suite IDs.|

## ReportSuite.GetKeyVisitors response

|Type|Description|
|----|-----------|
| [report_suite_key_visitors[]](../../data_types/r_report_suite_key_visitors_array.md#) - An array of [report_suite_key_visitors](../../data_types/r_report_suite_key_visitors.md#) |List of report suites with the Key Visitors list for each.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# GetListVariables

Retrieves the list variables for the requested report suites.

See [List Variable](https://microsite.omniture.com/t2/help/en_US/sc/implement/index.html?f=list_var) in the Analytics help.

## ReportSuite.GetListVariables Parameters

|Name|Type|Description|
|----|----|-----------|
| `rsid_list` | `string[]` | A list of report suite IDs.|

## ReportSuite.GetListVariables Response

| Type | Description |
|--------|---------------|
| `report_suite_list_variable[]` | Data structure that describes the list variables that are configured for a report suite. |

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# GetLocalization

Retrieves the localization (multi-byte character) settings for each of the specified report suites.

## ReportSuite.GetLocalization parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` |A list of report suite IDs.|

## ReportSuite.GetLocalization response

|Type|Description|
|----|-----------|
| [report_suite_localization[]](../../data_types/r_report_suite_localization_array.md#) - An array of [report_suite_localization](../../data_types/r_report_suite_localization.md#) |List of report suites with localization settings for each.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# GetMarketingChannelCosts

Returns the currently defined Marketing Channel costs for the specified report suite.

## ReportSuite.GetMarketingChannelCosts parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` |A list of report suites.|

## ReportSuite.GetMarketingChannelCosts response

|Type|Description|
|----|-----------|
| [report_suite_marketing_channel_costs[]](../../data_types/r_report_suite_marketing_channel_costs_array.md#) - An array of [report_suite_marketing_channel_costs](../../data_types/r_report_suite_marketing_channel_costs.md#) 

 |A list of marketing channel costs for each specified report suite.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# GetMarketingChannelExpiration

Returns the currently defined Marketing Channel expiration dates for the specified report suites.

## ReportSuite.GetMarketingChannelExpiration parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`string[]` |A list of report suites.|

## ReportSuite.GetMarketingChannelExpiration response

|Type|Description|
|----|-----------|
| `report_suite_marketing_channel_expiration[]`|A list of marketing channel expiration dates for the specified report suites.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# GetMarketingChannelRules

Returns the currently defined Marketing Channel rules for the specified report suites.

## ReportSuite.GetMarketingChannelRules parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` |A list of report suites.|

## ReportSuite.GetMarketingChannelRules response

|Type|Description|
|----|-----------|
|  [rs_marketing_channel_rulesets[]](../../data_types/r_rs_marketing_channel_rulesets_array.md#) - An array of [rs_marketing_channel_rulesets](../../data_types/r_rs_marketing_channel_rulesets.md#) 

 |A list of marketing channel rules for each specified report suite.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# GetMarketingChannels

Returns the currently defined Marketing Channels for the specified report suites.

## ReportSuite.GetMarketingChannels parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` |A list of report suites.|

## ReportSuite.GetMarketingChannels response

|Type|Description|
|----|-----------|
| [report_suite_marketing_channels[]](../../data_types/r_report_suite_marketing_channels_array.md#) - An array of [report_suite_marketing_channels](../../data_types/r_report_suite_marketing_channels.md#)

 |A list of marketing channels for each specified report suite.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# GetPaidSearchDetection

Retrieves the paid search settings for each of the specified report suites.

## ReportSuite.GetPaidSearchDetection parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` |A list of report suite IDs.|

## ReportSuite.GetPaidSearchDetection response

|Type|Description|
|----|-----------|
| [report_suite_paid_search_detection[]](../../data_types/r_report_suite_paid_search_detection_array.md#) - An array of [report_suite_paid_search_detection](../../data_types/r_report_suite_paid_search_detection.md#)|List of report suites with the paid search settings for each.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# GetPermanentTraffic

Retrieves the permanent traffic settings for each of the specified report suites.

## ReportSuite.GetPermanentTraffic parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`string[]` |A list of report suite IDs.|

## ReportSuite.GetPermanentTraffic response

|Type|Description|
|----|-----------|
| [report_suite_permanent_traffic[]](../../data_types/r_report_suite_permanent_traffic_array.md#) - An array of [report_suite_permanent_traffic](../../data_types/r_report_suite_permanent_traffic.md#) |List of report suites with the permanent traffics settings for each.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# GetProcessingStatus

Returns processing status for the given report suites.

## ReportSuite.GetProcessingStatus parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`string[]` |A list of report suite IDs.|

## ReportSuite.GetProcessingStatus response

|Type|Description|
|----|-----------|
| [report_suite_processing_status[]](../../data_types/r_report_suite_processing_status_array.md#) - An array of [report_suite_processing_status](../../data_types/r_report_suite_processing_status.md#) |List of report suites with the permanent traffics settings for each.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# GetProps

Retrieves the props (traffic variables) for the specified report suites.

## ReportSuite.GetProps parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` |A list of report suite IDs.|

## ReportSuite.GetProps response

|Type|Description|
|----|-----------|
| [report_suite_props[]](../../data_types/r_report_suite_props_array.md#) - An array of [report_suite_props](../../data_types/r_report_suite_props.md#) |A list of report suites with the props for each.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# GetRealTimeSettings

Returns the metrics that are configured to provide real time data.

See [Real Time Reports](../../../reporting-api/real_time.md).

## ReportSuite.GetRealTimeSettings parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`string[]` |A list of report suite IDs.|

## ReportSuite.GetRealTimeSettings response

|Type|Description|
|----|-----------|
| [report_suite_real_time_settings[]](../../data_types/r_report_suite_real_time_settings_array.md#)- An array of [report_suite_real_time_settings](../../data_types/r_report_suite_real_time_settings.md#) | Returns an array that contains the metrics with corresponding elements (dimensions) and classifications for which real time reports are enabled. |

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# GetScheduledSpike

Retrieves the scheduled traffic increase settings for the specified report suites.

## ReportSuite.GetScheduledSpike parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`string[]` |A list of report suite IDs.|

## ReportSuite.GetScheduledSpike response

|Type|Description|
|----|-----------|
| [report_suite_scheduled_spike[]](../../data_types/r_report_suite_scheduled_spike_array.md#) - An array of [report_suite_scheduled_spike](../../data_types/r_report_suite_scheduled_spike.md#). |List of report suites with the scheduled traffic increase settings for each.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# GetSegments

Retrieves the segments that are available in one or more report suites.

## ReportSuite.GetSegments parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` | (Required) The list of report suite IDs for which you want to retrieve segments.

 |

## ReportSuite.GetSegments response

|Type|Description|
|----|-----------|
|[report_suite_segments[]](../../data_types/r_report_suite_segments_array.md#) - An array of [report_suite_segments](../../data_types/r_report_suite_segments.md#) |List that includes each report suite's segments.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# GetSettings

Retrieves a broad range of report suite meta data for each of the specified report suites.

## ReportSuite.GetSettings parameters

The GetSettings method response aggregates information that is available individually from the following report suite methods:

-  `ReportSuite.GetEcommerce` 
-  `ReportSuite.GetEvars` 
-  `ReportSuite.GetCorrelations` 
-  `ReportSuite.GetSuccessEvents` 
-  `ReportSuite.GetProps` 
-  `ReportSuite.GetClassifications` 
-  `ReportSuite.GetCustomCalendar` 
-  `ReportSuite.GetAvailableElements` 
-  `Report.GetMetrics` 

|Name|Type|Description|
|----|----|-----------|
| **locale** | [reportDefinitionLocale](../../data_types/r_ReportDefinitionLocale.md#) | One of the following locales: en_US de_DE es_ES fr_FR jp_JP ko_KR zh_CN zh_TW|
| **rsid_list** | `string[]` | A list of report suite IDs.|

## ReportSuite.GetSettings response

|Type|Description|
|----|-----------|
| [report_suite_settings[]](../../data_types/r_report_suite_settings_array.md#) - An array of [report_suite_settings](../../data_types/r_report_suite_settings.md#) | A list of report suites with meta data for each. |

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# GetSiteTitle

Retrieves the site title (friendly name) for each of the specified report suites.

## ReportSuite.GetSiteTitle parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` |A list of report suite IDs.|

## ReportSuite.GetSiteTitle response

|Type|Description|
|----|-----------|
| [report_suite_site_title[]](../../data_types/r_report_suite_site_title_array.md#) - An array of [report_suite_site_title](../../data_types/r_report_suite_site_title.md#)|List of report suites with the Site Title for each.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# GetTemplate

Retrieves the creation template for each of the specified report suites.

## ReportSuite.GetTemplate parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` |A list of report suite IDs.|

## ReportSuite.GetTemplate response

|Type|Description|
|----|-----------|
| [report_suite_template[]](../../data_types/r_report_suite_template_array.md#) - An array of [report_suite_template](../../data_types/r_report_suite_template.md#) |List of report suites with the creation template for each. If a report suite was not created from a template, no value is provided for that report suite.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# GetTimeZone

Retrieves the Time Zone setting for each of the specified report suites.

## ReportSuite.GetTimeZone parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` |A list of report suite IDs.|

## ReportSuite.GetTimeZone response

|Type|Description|
|----|-----------|
| [report_suite_time_zone[]](../../data_types/r_report_suite_time_zone_array.md#) - An array of [report_suite_time_zone](../../data_types/r_report_suite_time_zone.md#).|A list of report suites with the time zone setting for each.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# GetTransactionEnabled

Retrieves the transaction ids storage enable for the requested report suites.

## ReportSuite.GetTransactionEnabled parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` |A list of report suite IDs.|

## ReportSuite.GetTransactionEnabled response

|Type|Description|
|----|-----------|
| [report_suite_transaction_enabled[]](../../data_types/r_report_suite_transaction_enabled_array.md#) - An array of [report_suite_transaction_enabled](../../data_types/r_report_suite_transaction_enabled.md#) |List of report suites with the Site Title for each.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# GetUniqueVisitorVariable

Retrieves the unique visitor variable setting for the specified report suites.

## ReportSuite.GetUniqueVisitorVariable parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` |A list of report suite IDs.|

## ReportSuite.GetUniqueVisitorVariable response

|Type|Description|
|----|-----------|
| [report_suite_unique_visitor_variable[]](../../data_types/report_suite_unique_visitor_variable_array.md#) - An array of [report_suite_unique_visitor_variable](../../data_types/r_report_suite_unique_visitor_variable.md#) |A list of report suites with the unique visitor variable for each.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# GetVideoSettings

Retrieves video measurement settings.

## ReportSuite.GetVideoSettings parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` |A list of report suite IDs.|

## ReportSuite.GetVideoSettings response

|Type|Description|
|----|-----------|
| [report_suite_video_settings[]](../../data_types/r_report_suite_video_settings_array.md#) - An array of [report_suite_video_settings](../../data_types/r_report_suite_video_settings.md#) |A list of report suites with the video settings for each.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# GetVirtualReportSuiteSettings

 

## ReportSuite.GetVirtualReportSuiteSettings parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` | A list of the virtual report suite IDs. |

Example:
```
{
    "rsid_list":["vrs_dehans0_newvrs"]
}
```

## ReportSuite.GetVirtualReportSuiteSettings response

|Type|Description|
|----|-----------|
| `virtual_report_suite_settings[]` | List of virtual report suite settings |

Example:
```
[{
    "rsid": "vrs_dehans0_newvrs",
    "parent_rsid": "sistr2",
    "segment_list": ["536bfa98e4b06d874b0c927a", "536bfa99e4b06d874b0c927f"]
}]
```

## virtual_report_settings

|Element|Type|Description|
|-------|----|-----------|
| **rsid** | `string` | Virtual report suite ID. |
|**parent_rsid** | `string` | Report suite ID for virtual report suite. |
| **segment_list** | `segment_list[]` | List of segments applied to virtual report suite. |

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


# 1.4 Admin API data types

Data types used in the 1.4 Admin API.

## bookmark_folder

|Element|Type|Description|
|-------|----|-----------|
|**`name`**|`string` |Folder name.|
|**`id`**|`int` |Folder id.|
|**`owner`**|`string` |Bookmark owner.|
|**`bookmarks`**|`bookmark[]` |Contains the bookmarks in the folder.|

## bookmark

|Element|Type|Description|
|-------|----|-----------|
|**`name`**| `string` | Bookmark name. |
|**`id`**| `int` | Bookmark ID. Pass this ID to `Bookmark.GetReportDescription` to retrieve the report associated with this bookmark. |
|**`rsid`**| `string` | Report suite. |

## calculated_metric

Data structure that contains information about a calculated metric.

|Element|Type|Description|
|-------|----|-----------|
|**`name`** |`string` | The calculated metric name. |
|**`formula`** |`string` | The calculated metric formula. |
|**`friendly_formula`** |`string` |A friendly (human readable) version of the calculated metric formula.|
|**`type`** |`string` | Identifies the type of calculated metric. Supported values include: numeric, percent, currency, time |
|**`decimal_places`** |`int` |The number of digits to include after the decimal place.|
|**`formula_id`** |`string` | A unique calculated metric identifier. Populated in method response only. Leave `formula_id` blank for method requests. |

## channel_colors

An enumerated `string` list of supported hexadecimal color codes for configuring marketing channels. Valid values include:

`0F59A9`, `E07804`, `609D09`, `D12112`, `813AA7`, `056F73`, `EDBD0C`, `B9256F`, `2F2D9D`, `9F4F1A`, `507609`, `922D3D`, `592993`, `695153`, `C1893E`, `4A86F8`, `FF954E`, `4ADC60`, `A667E9`, `14AD85`, `FFF186`, `F9A9F9`, `222143`, `393020`, `19371C`, `500012`, `808284`

## channel_type

An enumerated list of supported values for setting the marketing channel type. The enumerated type includes the following elements of type `string`.

|Name|Description|
|----|-----------|
|**`online`** | Identifies an Experience Cloud channel. |
|**`offline`** | Identifies an offline marketing channel. |

## channel_value_attribute_type

|Name|Description|
|----|-----------|
|**`campaign`** |The marketing campaign associated with the hit.|
|**`evar`** |The Analytics eVar that captures the visit data.|
|**`referring_domain`** |The domain that referred the client to your site.|
|**`referring_url`** |The URL that referred the client to your site.|
|**`referring_qs_param`** | |
|**`page`** | |
|**`page_url`** | |
|**`page_qs_param`** | |
|**`search_engine`** |The name of the search engine that generated the hit.|
|**`search_keywords`** |The search keyword used to generate the hit.|
|**`search_tracking_code`** | |
|**`search_center`** | |
|**`referring_root_domain`** | |
|**`referring_domain_and_path`** | |
|**`page_domain`** | |
|**`page_root_domain`** | |
|**`page_domain_and_path`** | |

## child_category

Data structure that contains basic information about a single child (subordinate) permissions category.

|Element|Type|Description|
|-------|----|-----------|
|**`id`** |`int` | The permission category identifier. |
|**`name`** |`string` | The permission category name. |
|**`access`** |`string` | A brief description of the permission category. |

## classification_item

Data structure that contains information about a report suite's classifications.

|Element|Type|Description|
|-------|----|-----------|
| **`name`** | `string` | |
| **`metric_id`** | `string` | |
| **`parent_name`** | `string` |Contains the parent classification's `div_num` if this is a sub-classification; otherwise it is `0`.|
| **`date_enabled`** | `boolean` |Determines whether to treat this classification like a campaign.|
| **`type`** | `string` | Classification type, one of the following: text, numeric, numeric_percent, numeric_currency |
|**`options`** |`string[]` | |
| **`children`** | `classification_item[]` | A list of child `classification_item` objects.|

## classification_type_enum

An enumerated `string` list of supported classification types. Valid values include `text`, `numeric`, `numeric_percent`, `numeric_currency`.

## company_report_suite

Data structure that contains basic report suite information.

|Element|Type|Description|
|-------|----|-----------|
|**`rsid`** |`string` | The report suite ID. |
|**`site_title`** |`string` | The report suite's friendly name. |

## dashboard_bookmark

|Element|Type|Description|
|-------|----|-----------|
|**`name`**| `string` | Bookmark name. |
|**`id`**| `int` | Bookmark ID. Pass this ID to `Bookmark.GetReportDescription` to retrieve the report associated with this bookmark. |
|**`rsid`**| `string` | Report suite. |
|**`row`**| `int` | Dashboard layout. |
|**`col`**| `int` | Dashboard layout. |
|**`rowspan`**| `int` | Dashboard layout. |
|**`colspan`**| `int` | Dashboard layout. |

## dashboard_page

|Element|Type|Description|
|-------|----|-----------|
|**`grid`**|`string` | Bookmark name. |
|**`bookmarks`**| `dashboard_bookmark[]` | Bookmarks for the reports contained in the dashboards on the page. |

## dashboard

|Element|Type|Description|
|-------|----|-----------|
|**`name`**|`string` | Dashboard name. |
|**`id`**|`int` | Dashboard ID. |
|**`owner`**|`string` | Dashboard owner. |
|**`pages`**|`dashboard_page[]` | Array of pages in the dashboard. |

## delete_calculated_metric

Data structure that contains information about a calculated metric.

|Element|Type|Description|
|-------|----|-----------|
|**`name`** |`string` | The calculated metric name. |
|**`formula_id`** |`string` | A unique calculated metric identifier. This value can be retrieved using by a call to `ReportSuite.GetCalculatedMetrics`] |

## element_classifications

Data structure that contains information about a the classifications defined for an element.

|Element|Type|Description|
|-------|----|-----------|
| **`id`** | `string` |Element ID.|
| **`name`** | `string` |Element Name.|
| **`classifications`** | `classification_item[]` | Classifications defined for the listed element. |

## evar

Data structure that contains information about an eVar.

|Element|Type|Description|
|-------|----|-----------|
|**`id`** |`string` | The commerce variable identifier (1-75). |
|**`name`** |`string` | The eVar friendly name. |
|**`allocation_type`** |`string` | The allocation rule used for allocating events to eVar values. Valid values include `most_recent_last`, `original_value_first`, `linear`, `linear_to_items`, `merchandising_last`, `merchandising_first`. |
|**`type`** |`string` | A number that represents the eVar value type. Valid values include `0` (Text) or `1` (Counter).|
|**`enabled`** |`boolean` | |
|**`expiration_type`** |`string` | A number that represents the eVar expiration setting. Valid values include:<br/>`0`: Visit<br/>`1`: Page View<br/>`2`: Never<br/>`3`: Minute<br/>`4`: Hour<br/>`5`: Day<br/>`6`: Week<br/>`7`: Month<br/>`8`: Quarter<br/>`9`: Year<br/>`10`: Purchase<br/>`11`: Product View<br/>`12`: Cart Open<br/>`13`: Cart Checkout<br/>`14`: Cart Add<br/>`15`: Cart Remove<br/>`16`: Cart View |
|**`expiration_custom_days`** |`int` | If the expiration type is set to a custom number of days, this field specifies the number of days. |
|**`merchandising_syntax`** |`string` | The merchandising eVar syntax setting. `0` sets the eVar value using Products syntax. `1` sets the eVar value using Conversion variable (eVar) syntax. |
|**`binding_events`** |`string[]` | The merchandising eVar binding events. |

## event

Data structure that contains information about a Success Event.

|Element|Type|Description|
|-------|----|-----------|
|**`id`** |`string` | The Event ID. |
|**`name`** |`string` | The Event name. |
|**`description`** |`string` | The Event description. |
|**`type`** |`string` | The Event type. Valid values include `disabled`, `counter_no_subrelations`, `counter`, `currency_no_subrelations`, `currency`, `numeric_no_subrelations`, `numeric`.|
|**`default_metric`** |`boolean` | Indicates if this is a default metric. |
|**`participation`** |`string` | Valid values include `unavailable`, `disabled`, `enabled`.|
|**`serialization`** |`string` | Valid values include `unavailable`, `always_record`, `record_once_per_visit`, `record_once_per_unique_id`. |
|**`polarity`** |`string` | Valid values include `positive`, `negative`. |
|**`visibility`** |`string` | Valid values include `hidden`, `builder_only`, `everywhere`. |
|**`rsid_list`** |`string[]` | Associated report suites. |

## group_report_list

Data structure that contains a list of reports accessible by a permission group.

|Element|Type|Description|
|-------|----|-----------|
|**`paths`** |`int[]` | List of report IDs in the Paths category. This element is active only when the associated `report_categories` element is enabled. |
|**`traffic`** |`int[]` | List of report IDs in the Traffic category. This element is active only when the associated `report_categories` element is enabled. |
|**`ecommerce`** |`int[]` | List of report IDs in the eCommerce category. This element is active only when the associated `report_categories` element is enabled. |
|**`tools`** |`int[]` | List of report IDs in the Tools category. This element is active only when the associated `report_categories` element is enabled. |
|**`sem`** |`int[]` | List of report IDs in the SEM category. This element is active only when the associated `report_categories` element is enabled. |

## hierarchy_node

Data structure that contains basic information about a single node in a classification hierarchy.

|Element|Type|Description|
|-------|----|-----------|
|**`node_id`** |`int` | A unique identifier for the hierarchy node. |
|**`group_num`** |`int` | The group associated with this hierarchy node. |
|**`name`** |`string` | The hierarchy node name. |
|**`div_num`** |`int` |   |

## hierarchy

Data structure that contains information about a report suite's classification hierarchy.

|Element|Type|Description|
|-------|----|-----------|
|**`localization`** |`string` | Whether or not Analytics displays data using UTF-8 encoding. Supported values include: `enabled`: Data display uses UTF-8. `disabled`: Data display does not use UTF-8. |
|**`hierarchies`** |[`hierarchy_node[]`](#hierarchy_node) | A list of nodes in the classification hierarchy. |
|**`in_queue`** |`int` | Flag that indicates whether the item is in the Pending Approval queue. Supported values include: `1`: In the Pending Approval queue. `0`: Not in the Pending Approval queue. **Note:** Populated in method response only. Leave `in_queue` blank for method requests. |
|**`status`** |`int` | If `in_queue = 0`, then `status = 0`. If `in_queue = 1`, status is one of the following values: `1`: Pending approval to Save. `2`: Pending approval to Delete. **Note:** Populated in method response only. Leave `status` blank for method requests. |

## hit_attribute_type

|Name|Description|
|----|-----------|
|**`campaign`** | The marketing campaign associated with the hit. |
|**`evar`** | The Analytics eVar that captures the visit data. |
|**`external_referring_domain`** | The external domain that referred the client to your site. |
|**`external_referring_url`** | The external URL that referred the client to your site. |
|**`external_referring_qs_param`** | |
|**`page`** | The web page that captured the hit data. |
|**`page_url`** | The URL of the web page that captured the hit data. |
|**`page_qs_param`** | |
|**`is_paid_search`** | Indicates if the hit was the result of a paid search result placement. |
|**`is_natural_search`** | Indicates if the hit was the result of a natural (not paid) search result placement. |
|**`search_engine`** | The name of the search engine that generated the hit. |
|**`search_keywords`** | The search keyword used to generate the hit. |
|**`search_tracking_code`** | |
|**`is_internal`** | |
|**`is_first_page_of_visit`** | Indicates if the web page is the landing page for the visit. |
|**`is_search_center`** | |
|**`external_referring_root_domain`** | |
|**`external_referring_domain_and_path`** | |
|**`page_domain`** | |
|**`page_root_domain`** | |
|**`page_domain_and_path`** | |
|**`is_not_internal`** | |
|**`internal_referring_url`** | The internal URL that referred the client to your site. |
|**`internal_referring_qs_param`** | |
|**`internal_referring_domain`** | The internal domain that referred the client to your site. |
|**`internal_referring_root_domain`** | |
|**`internal_referring_domain_and_path`** | |
|**`referring_url`** | The URL that referred the client to your site. |
|**`referring_qs_param`** | |
|**`referring_domain`** | The domain that referred the client to your site. |
|**`referring_root_domain`** | |
|**`referring_domain_and_path`** | |

## ip_address_exclusion

Data structure that contains information about a single IP address exclusion.

|Element|Type|Description|
|-------|----|-----------|
|**`ip_address`** |`string` | The IP address to exclude from visitor tracking on your website. |
|**`date_excluded`** |`date` | The date to start excluding the IP address from Analytics tracking. |
|**`comment`** |`string` | A comment on the IP range that was excluded. |

## list_variable

Details about a list variable.

|Element|Type|Description|
|-------|----|-----------|
|**`id`** |`int` | 1-3 based on the number of the list variable. |
|**`name`** |`string` | Friendly name of the variable. |
|**`allocation_type`** |`string` | The allocation rule used for allocating events to List Variable values. Valid values include `full` or `linear`. |
|**`expiration_type`** |`string` | The List variable expiration setting. Valid values include: `custom`, `visit`, `page_view`, `never`, `minute`, `hour`, `day`, `week`, `month`, `quarter`, `year`, `purchase`, `product_view`, `cart_open`, `cart_checkout`, `cart_add`, `cart_remove`, `cart_view`.|
|**`expiration_custom_days`** |`int` | Only used when custom is set as the `expiration_type` value. Indicates the number of days before expiration. |
|**`value_delimiter`** |`string` | The character used to separate values within the List Var. Most commonly these are characters such as commas, colons, pipes, or something similar. This was configured by Customer Care when the list var was created. |
|**`max_values`** |`string` | Designates the number of unique values each image request is allowed. This setting is optional. 0 indicates the maximum allowed value (250). |
|**`enabled`** |`int` | 0 means disabled, 1 means enabled. |

## login

Data structure that contains basic information about a user account.

|Element|Type|Description|
|-------|----|-----------|
|**`login`** |`string` | The account username. |
|**`first_name`** |`string` | The user's first name. |
|**`last_name`** |`string` | The user's last name. |
|**`title`** |`string` | The user's business title. |
|**`email`** |`string` | The email address. |
|**`last_login`** |`string` | |
|**`is_admin`** |`boolean` | Identifies if this is an admin user account. |
|**`ims_user_id`** |`int` | |

## marketing_channel_cost

|Name|Type|Description|
|----|----|-----------|
|**`cost_id`** |`int` | |
|**`cost_group`** |`string` | |
|**`channel_type`** |`string` | |
|**`name`** |`string` | |
|**`channel_id`** |`int` | |
|**`start_date`** |`dateTime` | |
|**`end_date`** |`dateTime` | |
|**`type`** |`string` | |
|**`amount`** |`double` | |
|**`metric`** |`string` | |

## marketing_channel_rule

|Name|Type|Description|
|----|----|-----------|
| **`rule_id`** | `int` |   |
| **`hit_attribute`** | [`hit_attribute_type`](#hit_attribute_type) |   |
| **`operator`** | `string` | Ruleset operator type. Valid values include `equals`, `contains`, `not_contains`, `starts_with`, `not_starts_with`, `ends_with`, `not_ends_with`, `exists`, `not_exists`, `is_empty`, `is_not_empty`. |
| **`matches`** | `string[]` |   |

## marketing_channel_ruleset

A set of rules associated with a marketing channel.

|Name|Type|Description|
|----|----|-----------|
| **`ruleset_id`** | `int` | |
| **`channel_id`** | `int` | |
| **`junction`** | `string` | Ruleset junction type. Valid values include `all` or `any`. |
| **`channel_value`** | [`channel_value_attribute_type`](#channel_value_attribute_type) | |
| **`rules`** |  [`marketing_channel_rule[]`](#marketing_channel_rule) | |

## marketing_channel

|Name|Type|Description|
|----|----|-----------|
|**`channel_id`** |`int` | The marketing channel ID. |
|**`name`** |`string` | The marketing channel name. |
|**`enabled`** |`boolean` |  |
|**`channel_breakdown`** |`int` |   |
|**`override_last_touch_channel`** |`boolean` |   |
|**`type`** |[`channel_type`](#channel_type) | Identifies the marketing channel as online or offline. |
|**`color`** |[`channel_colors`](#channel_colors) | The color used to identify the marketing channel in reports. |

## paid_search_detection

Data structure that contains information about a single paid search rule.

|Element|Type|Description|
|-------|----|-----------|
|**`search_engine`** |[`search_engine_enum`](#search_engine_enum) | The name of the search engine. |
|**`operator`** |`string` | Specifies the type of paid search rule. Valid values include `contains` or `not_contains`. |
|**`query_string`** |`string` |The string value to use when matching a search engine referring URL.|

## parent_category

Data structure that contains basic information about a single parent permissions category.

|Element|Type|Description|
|-------|----|-----------|
|**`id`** |`int` | The permission category identifier. |
|**`name`** |`string` | The permission category name name. |
|**`access`** |`string` | A brief description of the permission category. |
|**`children`** |`child_category[]` | A list of subordinate (child) permission categories. |

## permanent_traffic

Data structure that contains information about a report suite's traffic settings.

|Element|Type|Description|
|-------|----|-----------|
|**`hits_per_day`** |`int` | The expected number of hits per day. |
|**`start_date`** |`date` | The date the specified traffic level will start. |
|**`login`** |`string` | Login requesting the change. |
| **`submit_date`** |`date` | Date the traffic level change was submitted. |

## processing_status

Data structure that contains information about report suite data processing.

|Element|Type|Description|
|-------|----|-----------|
|**`elevator_latency`** |`int` |  |
|**`lobby_latency`** |`int` |  |

## prop

Data structure that contains information about a report suite's props (traffic variables).

|Element|Type|Description|
|-------|----|-----------|
|**`id`** |`string` | (Required) The traffic variable number. For example: prop17 |
|**`name`** |`string` | (Optional) The traffic variable name. |
|**`enabled`** |`boolean` | (Optional) Indicates if this traffic variable is enabled. |
|**`pathing_enabled`** |`boolean` | (Optional) Indicates if pathing is enabled for this traffic variable. |
|**`list_enabled`** |`boolean` | (Optional) Indicates if list property is enabled for this traffic variable ('TRUE','FALSE' are acceptable values) |
| **`list_delimiter`** | `string` | (Optional) the list delimiter used by this traffic variable. List Delimiters can only be one character and cannot be zero or a space. Also, if you enter a List Delimiter for a property, Channel Pathing and Visitors will NOT work for that property. |
| **`participation_enabled`** |`boolean` | (Optional) Indicates if participation metrics display is enabled for this traffic variable. |

## queue_item

Data structure that contains information a company's Pending queue.

|Element|Type|Description|
|-------|----|-----------|
|**`entry_date`** |`date` | The date the item entered the Pending queue. |
|**`queue_item_id`** |`int` | An internal numeric ID associated with the item while it is in the Pending queue. |
|**`rsid_list`** |`string` | A comma-separated list of report suite IDs associated with this item. |
|**`description`** |`string` | A description of the pending item. |
|**`feature_name`** |`string` | The name of the feature that is being altered. |
|**`admin_user`** |`string` | The admin user that initiated the pending item. |

## real_time_settings

|Element|Type|Description|
|-------|----|-----------|
|**`min_granularity`** |`string` | Granularity of the report. Set to 1 for the most efficient report. |
|**`metric`** |`string` | Provide the single metric for which you want to retrieve realtime data. Valid values include `pageviews`, `revenue`, `orders`, `units`, `carts`, `cartviews`, `instances`, `checkouts`, `cartadditions`, `cartremovals`, `event1` - `event1000`, `videotime`, `videostart`, `videocomplete`, `videosegmentviews`, `videoadstart`, `videoadcomplete`, `mobileinstalls`, `mobileupgrades`, `mobiledailyengagedusers`, `mobilemonthlyengagedusers`, `mobilelaunches`, `mobilecrashes`, `mobileprevsessionlength`. |
|**`elements`** |`string[]` | Provide up to three elements (dimensions) to correlate with the provided metric. You must specify at least one element if the `ui_report` parameter is set to `false`, at three elements if `ui_report` is omitted or set to `true`. Note that you must specify elements during configuration, but you can run a real time report that includes only the metric or only some of the configured elements. Valid values include `page`, `sitesection`, `server`, `linkdownload`, `linkexit`, `linkcustom`, `topleveldomain`, `referringdomain`, `searchengine`, `searchenginekeyword`, `searchenginenatural`, `searchenginepaid`, `geocountry`, `georegion`, `geocity`, `geodma`, `prop1` - `prop75`, `evar1` - `evar250`, `listvar1` - `listvar3`, `video`, `videoad`, `videosegment`, `videocontenttype`, `mobileinstalldate`, `mobileappid`, `mobilelaunchnumber`, `mobiledayssincefirstuse`, `mobiledayssincelastuse`, `mobilehourofday`, `mobiledayofweek`, `mobileosenvironment`, `mobiledayssincelastupgrade`, `mobilelaunchessincelastupgrade`, `mobiledevice`, `mobileosversion`, `mobilegooglecampaignsource`, `mobilegooglecampaignmedium`, `mobilegooglecampaignterm`, `mobilegooglecampaigncontent`, `mobilegooglecampaignname`. |
| **`name`** |`string` | Configuration name. If 'ui_report' is set to 'true', this name is also displayed in the reports & analytics UI. |
|**`ui_report`** |`boolean` | Indicates whether or not this report is also visible in the reports & analytics UI. |

## report_access

Data structure that contains details about the reports that can be accessed by members of a permissions group.

|Element|Type|Description|
|-------|----|-----------|
|**`category`** |`string` | Report categories that can be accessed, one of the following values: `ecommerce`, `traffic`, `paths`, `custom_paths`, `tools`, `search_center`, `tnt`, `video`, `web_services`, `admin_console`, `report_download`, `survey`, `advanced_reporting`, `social`, `social_publishing`, `data_connectors`. |
|**`name`** |`string` |  |
|**`access`** |`string` | One of the following values: `none`, `custom`, `all` |
| **`report_ids`** |`int[]` | IDs of the reports that can be accessed by this permissions group.|

## report_suite_activation

Data structure that contains information about a report suite's activation status.

|Element|Type|Description|
|-------|----|-----------|
|**`rsid`** |`string` | The report suite ID. |
|**`site_title`** |`string` | The report suite friendly name. |
|**`activation`** |`boolean` | Flag that indicates whether a report suite is active. |

## report_suite_axle_start_date

Data structure that contains information about when a report suite was migrated to axle processing from SiteCatalyst 14.

|Element|Type|Description|
|-------|----|-----------|
|**`rsid`** |`string` | The report suite ID. |
|**`site_title`** |`string` | The report suite friendly name. |
|**`axle_start_date`** |`string` | Axle start date. |

## report_suite_base_currency

Data structure that contains information about a report suite's base currency setting.

|Element|Type|Description|
|-------|----|-----------|
|**`rsid`** |`string` | Report suite ID. |
|**`site_title`** |`string` | The report suite friendly name. |
|**`base_currency`** |`string` | Three-letter currency code (for example, USD). |

## report_suite_base_url

Data structure that contains information about a report suite's base URL settings.

|Element|Type|Description|
|-------|----|-----------|
|**`rsid`** |`string` | The report suite ID. |
|**`site_title`** |`string` | The report suite friendly name. |
|**`base_url`** |`string` | Base URL for the report suite. |

## report_suite_calculated_metrics

Data structure that contains information about a report suite's calculated metrics.

|Element|Type|Description|
|-------|----|-----------|
| **`rsid`** | `string` | The report suite ID. |
| **`site_title`** | `string` | The report suite friendly name. |
| **`calculated_metric`** | `calculated_metric[]` | A list of `calculated_metric` objects associated with this report suite. |

## report_suite_element_classifications

Data structure that contains information about a report suite's classifications.

|Element|Type|Description|
|-------|----|-----------|
| **`rsid`** | `string` | The report suite ID. |
| **`site_title`** | `string` | The report suite friendly name. |
| **`element_classifications`** | [`element_classifications[]`](#element_classifications) | A list of elements and their associated classifications. |

## report_suite_custom_calendar

Data structure that contains information about a report suite's custom calendars.

|Element|Type|Description|
|-------|----|-----------|
|**`rsid`** |`string` | The report suite ID. |
|**`site_title`** |`string` | The report suite friendly name. |
|**`calendar_type`** |`string` | The format of the custom calendar. Valid values include `gregorian`, `4-5-4-retail`, `4-5-4-custom`, `4-4-5-custom`, `modified-gregorian`. |
|**anchor_date** |`date` | The first date in the custom calendar. |

## report_suite_data_warehouse_display

Data structure that contains information about a report suite's data warehouse setting.

|Element|Type|Description|
|-------|----|-----------|
|**`rsid`** |`string` | The report suite ID. |
|**`site_title`** |`string` | The report suite friendly name. |
|**`data_warehouse_display`** |`string` | Data warehouse display setting. Valid values include `none`, `all-logins-have-access`, `grayed-out-tab`, `admins-only`, `disabled`. |

## report_suite_default_page

Data structure that contains information about a report suite's default page setting.

|Element|Type|Description|
|-------|----|-----------|
|**`rsid`** |`string` | The report suite ID. |
|**`site_title`** |`string` | The report suite friendly name. |
|**`default_page`** |`string` | The Web site's default page name. For example, `index.html`. |

## report_suite_ecommerce

Data structure that contains information about a report suite's commerce settings.

|Element|Type|Description|
|-------|----|-----------|
|**`rsid`** |`string` | The report suite ID. |
|**`site_title`** |`string` | The report suite friendly name. |
|**`ecommerce`** |`boolean` | Indicates if ecommerce is enabled on the report suite. |

## report_suite_evars

Data structure that contains information about a report suite's eVars.

|Element|Type|Description|
|-------|----|-----------|
|**`rsid`** |`string` | The report suite ID. |
|**`site_title`** |`string` | The report suite friendly name. |
|**`evars`** | [`evar[]`](#evar) | An array of `evar` objects associated with this report suite. |

## report_suite_events

Data structure that contains information about a report suite's Events.

|Element|Type|Description|
|-------|----|-----------|
| **`rsid`** | `string` | The report suite ID. |
| **`site_title`** | `string` | The report suite friendly name. |
| **`ecommerce_level`** | `int` | The level of commerce support. Supported values include: `0`: Commerce support disabled. `50`: Commerce support enabled with no shopping cart. `52`: Commerce support fully enabled (most common). |
| **`events`** | `event[]` | A list of `event` objects associated with this report suite. |

## report_suite_geo_segmentation

Data structure that contains information about a report suite's commerce settings.

|Element|Type|Description|
|-------|----|-----------|
|**`rsid`** |`string` | The report suite ID. |
|**`site_title`** |`string` | The report suite friendly name. |
|**`geo_segmentation`** |`boolean` | True if geography segmentation is enabled. |
|**`vista_enabled`** |`boolean` | True of geography segmentation VISTA rules are enabled. |

## report_suite_groups

Data structure that contains information about the permission groups that can access a report suite.

|Element|Type|Description|
|-------|----|-----------|
| **`rsid`** | `string` | Report suites id. |
| **`site_title`** | `string` | Title of the site associated with the report suite id.|
| **`groups`** | [`permission_group_summary[]`](#permission_group_summary) | A list of the groups for the specified report suite. |

## report_suite_hierarchies

Data structure that contains information about a report suite's classification hierarchies.

|Element|Type|Description|
|-------|----|-----------|
|**`rsid`** |`string` | The report suite ID. |
|**`site_title`** |`string` | The report suite friendly name. |
|**`hierarchies`** | [`hierarchy[]`](#hierarchy) | A list of `default_page` objects associated with this report suite. |

## report_suite_internal_url_filters

Data structure that contains information about a report suite's internal URL filter settings.

|Element|Type|Description|
|-------|----|-----------|
|**`rsid`** |`string` | The report suite ID. |
|**`site_title`** |`string` | The report suite friendly name. |
|**`internal_url_filters`** |`string[]` | A filter string that identifies those internal URLs that you want to exclude from Analytics tracking. |

## report_suite_ip_address_exclusions

Data structure that contains information about a report suite's IP exclusions.

|Element|Type|Description|
|-------|----|-----------|
| **`rsid`** | `string` | The report suite ID. |
| **`site_title`** | `string` | The report suite friendly name. |
| **`ip_address_exclusions`** | [`ip_address_exclusion[]`](#ip_address_exclusion) | A list of `ip_exclusion` objects associated with this report suite. |

## report_suite_ip_obfuscation

Data structure that contains information about a report suite's IP obfuscation settings.

|Element|Type|Description|
|-------|----|-----------|
|**`rsid`** |`string` | The report suite ID. |
|**`site_title`** |`string` | The report suite friendly name. |
|**`ip_obfuscation`** |`string` | The IP obfuscation setting. Valid values include `obfuscated`, `none`, `ip_removed`. |

## report_suite_list_variable

Data structure that describes the list variables configured for a report suite.

|Element|Type|Description|
|-------|----|-----------|
|**`rsid`** |`string` | The report suite ID. |
|**`site_title`** |`string` | The report suite friendly name. |
|**`list_variables`** | `list_variable[]` | Array of values describing each list variable. |

## report_suite_localization

Data structure that contains information about a report suite's localization settings.

|Element|Type|Description|
|-------|----|-----------|
|**`rsid`** |`string` | The report suite ID. |
|**`site_title`** |`string` | The report suite friendly name. |
|**`localization`** |`string` | Whether or not Analytics displays data using UTF-8 encoding. Supported values include: `enabled`: Data display uses UTF-8. `disabled`: Data display does not use UTF-8. |

## report_suite_marketing_channel_costs

|Name|Type|Description|
|----|----|-----------|
| **`rsid`** | `string` | A report suite ID. |
| **`site_title`** | `string` | The report suite friendly name. |
| **`marketing_costs`** | `marketing_channel_cost[]` | Details on marketing channel costs. |

## report_suite_marketing_channel_expiration

|Name|Type|Description|
|----|----|-----------|
|**`rsid`** |`string` | A report suite ID. |
|**`days`** |`int` | |

## report_suite_marketing_channels

|Name|Type|Description|
|----|----|-----------|
| **`rsid`** | `string` |A report suite ID.|
| **`marketing_channels`** | [`marketing_channel[]`](#marketing_channel) |A list of marketing channels in the specified report suite.|

## report_suite_paid_search_detection

Data structure that contains information about a report suite's paid search settings.

|Element|Type|Description|
|-------|----|-----------|
| **`rsid`** | `string` | The report suite ID. |
| **`site_title`** | `string` | The report suite friendly name. |
| **`paid_search_detection`** | [`paid_search_detection[]`](#paid_search_detection) | A list of `paid_search` objects associated with this report suite. |

## report_suite_permanent_traffic

Data structure that contains information about a report suite's base URL settings.

|Element|Type|Description|
|-------|----|-----------|
|**`rsid`** |`string` | Report suite ID. |
|**`site_title`** |`string` | The report suite friendly name. |
|**`permanent_traffic`** | [`permanent_traffic[]`](#permanent_traffic) | The report suite's base URL setting. |

## report_suite_processing_status

Data structure that contains information about a report suite's data processing status.

|Element|Type|Description|
|-------|----|-----------|
|**`rsid`** |`string` | The report suite ID. |
|**`site_title`** |`string` | The report suite friendly name. |
|**`processing_status`** |[`processing_status`](#processing_status) | The data processing status of this report suite. |

## report_suite_props

Data structure that contains information about a report suite's Traffic variables.

|Element|Type|Description|
|-------|----|-----------|
| **`rsid`** | `string` | The report suite ID. |
| **`site_title`** | `string` | The report suite friendly name. |
| **`props`** | [`prop[]`](#prop) | An array of `prop` objects associated with this report suite. |

## report_suite_real_time_settings

Data structure that contains information about a report suite's real time report configuration.

|Element|Type|Description|
|-------|----|-----------|
| **`rsid`** | `string` | The report suite ID. |
| **`site_title`** | `string` | The report suite friendly name. |
| **`real_time_settings`** |  [`real_time_settings[]`](#real_time_settings) | Details about real time reports that are enabled for the specified report suite. |

## report_suite_scheduled_spike

Data structure that contains information about a scheduled traffic spike.

|Element|Type|Description|
|-------|----|-----------|
| **`rsid`** | `string` | The report suite ID. |
| **`site_title`** | `string` | The report suite friendly name. |
| **`scheduled_spike`** | [`schedule_spike[]`](#schedule_spike) | A list of `schedule_spike` objects associated with this report suite. |

## report_suite_segments

Data structure that contains information about a report suite's segments.

|Element|Type|Description|
|-------|----|-----------|
| **`rsid`** | `string` | The report suite ID. |
| **`segments`** |  [`segment_item[]`](#segment_item) | A list of `segment` objects associated with this report suite. |

## report_suite_settings

Data structure that contains information about a report suite's common settings.

|Element|Type|Description|
|-------|----|-----------|
| **`rsid`** | `string` | The report suite ID. |
| **`site_title`** | `string` | The report suite friendly name. |
| **`activation`** | `boolean` | |
| **`anchor_date`** | `date` | |
| **`base_currency`** | `string` | |
| **`base_url`** | `string` | The base domain for the report suite as defined when the report suite was created. |
| **`calendar_type`** | `string` | Valid values include `gregorian`, `4-5-4-retail`, `4-5-4-custom`, `4-4-5-custom`, `modified-gregorian`. |
| **`element_classifications`** | [`element_classifications[]`](#element_classifications) | The report suite's classifications listed by element. |
| **`default_page`** | `string` | The base domain for the report suite as defined when the report suite was created. |
| **`discover_enabled`** | `boolean` | Indicates if ad hoc analysis (formerly Discover) is enabled for this report suite. |
| **`ecommerce_level`** | `int` | The report suite's Commerce level. |
| **`ecommerce_visits`** | `int` | |
| **`ecommerce_visitors`** | `int` | |
| **`elements`** | `reportElement[]` | The report suite's available elements. |
| **`ip_obfuscation`** | `string` | Valid values include `obfuscated`, `none`, `ip_removed`.|
| **`metrics`** | `reportMetric[]` | The report suite's available metrics. |
| **`mobile_breakdowns`** | `string[]` | |
| **`props`** | `prop[]` | The report suite's traffic variables. |
| **`segments`** | [`segment_item[]`](#segment_item) | The report suite's segments. |
| **`template`** | `string` | Template used to define report suite. |
| **`time_zone`** | `time_zone_enum` | The report suite time zone. |
| **`unique_visitor_variable`** | `string` | |
| **`video_settings`** | [`video_settings`](#video_settings) | Data structure that contains information about video tracking settings. |

## report_suite_site_title

Data structure that contains information about a report suite's site title settings.

|Element|Type|Description|
|-------|----|-----------|
|**`rsid`** |`string` | The report suite ID. |
|**`site_title`** |`string` | The report suite friendly name. |

## report_suite_template

Data structure that contains information about a report suite's templates.

|Element|Type|Description|
|-------|----|-----------|
|**`rsid`** |`string` | The report suite ID. |
|**`site_title`** |`string` | The report suite friendly name. |
|**`template`** |`string` | The name of the template used to create the report suite. |

## report_suite_time_zone

|Element|Type|Description|
|-------|----|-----------|
|**`rsid`** |`string` | The report suite ID. |
|**`site_title`** |`string` | The report suite friendly name. |
|**`time_zone`** |[`time_zone_enum`](#time_zone_enum) | A list of time zones associated with this report suite. |

## report_suite_transaction_enabled

Data structure that contains information about report suite's transaction ID settings.

|Element|Type|Description|
|-------|----|-----------|
|**`rsid`** |`string` | The report suite ID. |
|**`site_title`** |`string` | The report suite friendly name. |
|**`transaction`** | [`transaction_status[]`](#transaction_status) | A list of transaction ID settings associated with this report suite. |

## report_suite_unique_visitor_variable

Data structure that contains information about report suite's unique visitor settings.

|Element|Type|Description|
|-------|----|-----------|
|**`rsid`** |`string` | The report suite ID. |
|**`site_title`** |`string` | The report suite friendly name. |
|**`unique_visitor_variable`** |`string` | Valid values include `evar1` through `evar250`. |

## report_suite_video_settings

Data structure that contains information about report suite's video settings.

|Element|Type|Description|
|-------|----|-----------|
|**`rsid`** |`string` | The report suite ID. |
|**`site_title`** |`string` | The report suite friendly name. |
|**`video_settings`** |[`video_settings`](#video_settings) | A list of video settings associated with this report suite. |

## reportElement

Data structure that contains information about a single element in a report suite.

|Element|Type|Description|
|-------|----|-----------|
|**`id`** |`string` | The unique element name. |
|**`name`** |`string` | The element's friendly name. |
|**`classification`** |`string` | |

## reportMetric

Data structure that contains basic information about a single metric.

|Element|Type|Description|
|-------|----|-----------|
|**`id`** |`string` | The metric name. |
|**`name`** |`string` | The metric display (friendly) name. |
|**`type`** |`string` | |
|**`decimals`** |`int` | |
|**`latency`** |`int` | |
|**`current`** |`boolean` | |

## rs_marketing_channel_rulesets

|Name|Type|Description|
|----|----|-----------|
| **`rsid`** | `string` |A report suite ID.|
| **`marketing_channel_rules`** | [`marketing_channel_ruleset[]`](#marketing_channel_ruleset) | |

## schedule_spike

Data structure that contains information about a report suite's schedule spike settings.

|Element|Type|Description|
|-------|----|-----------|
|**`hits_per_day`** |`int` | Number of daily hits during the traffic spike. |
|**`hits_per_hour`** |`int` | Number of hourly hits during the traffic spike. |
|**`start_date`** |`date` | The date the traffic spike starts. |
|**`end_date`** |`date` | The date the traffic spike ends. |
|**`submit_date`** |`date` | The date the traffic spike was submitted. |
|**`login`** |`string` | User account that requested the spike. |

## search_engine_enum

An enumerated list of known search engines. See the [API specification](../../api.md) to view the complete list of identified search engines.

## segment_item

Data structure that contains information about a single segment.

|Element|Type|Description|
|-------|----|-----------|
|**`id`** |`string` | The unique segment ID. Data Warehouse segments are prefixed with `dw:`, for example `dw:first_time_visitors`. Analytics and Ad hoc analysis segments are not prefixed.|
|**`name`** |`string` | Display name of the segment. |
|**`folder`** |`string` | Name of the folder that contains this segment. |
|**`class`** |`string` | Indicates the segment container defined for the segment. `seg-hit` indicates the Page View container. This container shows data for only specific pages on which the event occurred. `seg-visit` indicates the Visit container. This container shows data for only the specific visits in which the event occurred. `seg-visitor` indicates the Visitor container. This container shows all data for visits of any visitor who performed the event during any visit. |
|**`suite_enabled`** |`boolean` | Indicates if a segment can be used in other suite products, such as Test & Target. Set to null if not suite-enabled. |
|**`read_only`** |`boolean` | Indicates if a segment can be edited by the authenticated API user. |

## time_zone_enum

Enum that contains information about a report suite's time zone setting. Valid values include:

`Europe/London`, `US/Samoa`, `US/Hawaii`, `US/Alaska`, `America/Tijuana`, `US/Pacific`, `US/Arizona`, `US/Mountain`, `America/Mexico_City`, `Canada/Saskatchewan`, `US/Central`, `America/Lima`, `US/Eastern`, `US/East-Indiana`, `America/Caracas`, `Canada/Atlantic`, `America/Santiago`, `America/La_Paz`, `Canada/Newfoundland`, `America/Sao_Paulo`, `America/Buenos_Aires`, `America/Guyana`, `America/Montevideo`, `Etc/GMT+2`, `Atlantic/Azores`, `Atlantic/Cape_Verde`, `GMT`, `Europe/Berlin`, `Europe/Paris`, `Europe/Prague`, `Europe/Warsaw`, `Europe/Athens`, `Africa/Cairo`, `EET`, `Africa/Harare`, `Israel`, `Europe/Istanbul`, `Asia/Baghdad`, `Asia/Kuwait`, `Asia/Tehran`, `Asia/Muscat`, `Europe/Samara`, `Europe/Moscow`, `Asia/Tbilisi`, `Europe/Volgograd`, `Asia/Kabul`, `Asia/Yekaterinburg`, `Asia/Karachi`, `Asia/Tashkent`, `Asia/Calcutta`, `Asia/Colombo`, `Asia/Almaty`, `Asia/Dhaka`, `Asia/Bangkok`, `Asia/Chongqing`, `Asia/Hong_Kong`, `Australia/Perth`, `Asia/Tokyo`, `Asia/Yakutsk`, `Australia/Adelaide`, `Australia/Darwin`, `Australia/Brisbane`, `Australia/Sydney`, `Pacific/Guam`, `Australia/Hobart`, `Pacific/Port_Moresby`, `Asia/Vladivostok`, `Asia/Magadan`, `Pacific/Guadalcanal`, `Pacific/Kwajalein`, `Pacific/Fiji`, `Asia/Kamchatka`, `Pacific/Majuro`, `NZ`

## tracking_server_data

Data structure that contains tracking server information.

|Element|Type|Description|
|-------|----|-----------|
|**`namespace`** |`string` | The report suite's namespace. |
|**`tracking_server`** |`string` | The report suite's tracking server. |

## transaction_status

Data structure that contains information about transaction ID status.

|Element|Type|Description|
|-------|----|-----------|
|**`transaction`**|`int` | |
|**`in_queue`**|`int` | |
|**`status`**|`int` | |

## video_settings

Data structure that contains details about report suite's video settings.

|Element|Type|Description|
|-------|----|-----------|
|**`core_enabled`** |`boolean` |Indicates whether core video solution variables are enabled.|
|**`ad_tracking_enabled`** |`boolean` |Indicates whether ad tracking solution variables are enabled.|
|**`chapter_tracking_enabled`** |`boolean` |Indicates whether chapter tracking solution variables are enabled.|
|**`using_custom_variables`** |`boolean` |Indicates whether the report suite is using video solution or reserved variables.|
|**`video_name_evar`** |`string` |Name of the video, as passed to Media.open(). Video Name and Ad Name are automatic classifications based on the data sent on the initial Media.play() call, so you'll see an extra menu level when you view these reports.|
|**`content_type_evar`** |`string` |eVar that stores the content type for your website or app. Content type is set to "video" automatically for all video views, and to "ad" for all ad views.|
|**`video_time_event`** |`string` |Counts the time, in seconds, spent watching a video or ad.|
|**`video_views_event`** |`string` |Indicates that a visitor has viewed some portion of a video or ad. However, it does not provide any information about how much, or what part, of a video the visitor viewed.|
|**`video_completes_event`** |`string` |Indicates that a user has viewed a complete video or ad.|

## virtual_report_settings

Data structure that contains details about a virtual report suite's settings.

|Element|Type|Description|
|-------|----|-----------|
| **`rsid`** | `string` | Virtual report suite ID. |
| **`parent_rsid`** | `string` | Report suite ID for virtual report suite. |
| **`segment_list`** | `segment_list[]` | List of segments applied to virtual report suite. |

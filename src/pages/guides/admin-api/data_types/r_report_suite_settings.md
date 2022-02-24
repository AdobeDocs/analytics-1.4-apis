# report_suite_settings

Data structure that contains information about a report suite's common settings.

|Element|Type|Description|
|-------|----|-----------|
| **rsid** | `xsd:string` | The report suite ID. |
| **site_title** | `xsd:string` | The report suite friendly name. |
| **activation** | `xsd:boolean` | |
| **anchor_date** | `xsd:date` | |
| **base_currency** | `xsd:string` | |
| **base_url** | `xsd:string` | The base domain for the report suite as defined when the report suite was created. |
| **calendar_type** | [custom_calendar_type_enum](r_custom_calendar_type_enum.md#) | The base domain for the report suite as defined when the report suite was created. |
| **element_classifications** | [element_classifications_array](r_element_classifications_array.md#) An array of [element_classifications](r_element_classifications.md#).| The report suite's classifications listed by element. |
| **default_page** | `xsd:string` | The base domain for the report suite as defined when the report suite was created. |
| **discover_enabled** | `xsd:boolean` | Indicates if ad hoc analysis (formerly Discover) is enabled for this report suite. |
| **ecommerce_level** | `xsd:int` | The report suite's Commerce level. |
| **ecommerce_visits** | `xsd:int` | |
| **ecommerce_visitors** | `xsd:int` | |
| **elements** | [reportElements](r_reportElements.md#) - An array of [reportElement](r_reportElement.md#).| The report suite's available elements. |
| **ip_obfuscation** | `xsd:string` | |
| **metrics** | [reportMetricList](r_reportMetricList.md#) - An array of [reportMetric](r_reportMetric.md#) | The report suite's available metrics. |
| **mobile_breakdowns** | `array(xsd:string)`  | |
| **props** | [prop_array](r_prop_array.md#) - An array of [prop](r_prop.md#) | The report suite's traffic variables. |
| **segments** | [segment_item_array](r_segment_item_array.md#) - An array of [segment_item](r_segment_item.md#) | The report suite's segments. |
| **template** | `xsd:string` | Template used to define report suite. |
| **time_zone** | [time_zone_enum](r_timezone_enum.md#) | The report suite time zone. |
| **unique_visitor_variable** | `xsd:string` | |
| **video_settings** | [video_settings](r_video_settings.md#) | Data structure that contains information about video tracking settings. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


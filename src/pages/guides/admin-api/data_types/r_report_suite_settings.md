# report\_suite\_settings

Data structure that contains information about a report suite's common settings.

|Element|Type|Description|
|-------|----|-----------|
| **rsid** | `xsd:string` | The report suite ID. |
| **site\_title** | `xsd:string` | The report suite friendly name. |
| **activation** | `xsd:boolean` | |
| **anchor\_date** | `xsd:date` | |
| **base\_currency** | `xsd:string` | |
| **base\_url** | `xsd:string` | The base domain for the report suite as defined when the report suite was created. |
| **calendar\_type** | [custom\_calendar\_type\_enum](r_custom_calendar_type_enum.md#) | The base domain for the report suite as defined when the report suite was created. |
| **element\_classifications** | [element\_classifications\_array](r_element_classifications_array.md#) An array of [element\_classifications](r_element_classifications.md#).| The report suite's classifications listed by element. |
| **default\_page** | `xsd:string` | The base domain for the report suite as defined when the report suite was created. |
| **discover\_enabled** | `xsd:boolean` | Indicates if ad hoc analysis \(formerly Discover\) is enabled for this report suite. |
| **ecommerce\_level** | `xsd:int` | The report suite's Commerce level. |
| **ecommerce\_visits** | `xsd:int` | |
| **ecommerce\_visitors** | `xsd:int` | |
| **elements** | [reportElements](r_reportElements.md#) - An array of [reportElement](r_reportElement.md#).| The report suite's available elements. |
| **ip\_obfuscation** | `xsd:string` | |
| **metrics** | [reportMetricList](r_reportMetricList.md#) - An array of [reportMetric](r_reportMetric.md#) | The report suite's available metrics. |
| **mobile\_breakdowns** | `array(xsd:string)`  | |
| **props** | [prop\_array](r_prop_array.md#) - An array of [prop](r_prop.md#) | The report suite's traffic variables. |
| **segments** | [segment\_item\_array](r_segment_item_array.md#) - An array of [segment\_item](r_segment_item.md#) | The report suite's segments. |
| **template** | `xsd:string` | Template used to define report suite. |
| **time\_zone** | [time\_zone\_enum](r_timezone_enum.md#) | The report suite time zone. |
| **unique\_visitor\_variable** | `xsd:string` | |
| **video\_settings** | [video\_settings](r_video_settings.md#) | Data structure that contains information about video tracking settings. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


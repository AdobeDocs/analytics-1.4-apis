# report_suite_paid_search_detection

Data structure that contains information about a report suite's paid search settings.

|Element|Type|Description|
|-------|----|-----------|
| **rsid** | `xsd:string` | The report suite ID. |
| **site_title** | `xsd:string` | The report suite friendly name. |
| **paid_search_detection** | [paid_search_detection_array](r_paid_search_detection_array.md#) - An array of [paid_search_detection](r_paid_search_detection.md#) | A list of `paid_search` objects associated with this report suite. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


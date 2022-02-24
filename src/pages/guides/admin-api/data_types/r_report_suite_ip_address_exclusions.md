# report_suite_ip_address_exclusions

Data structure that contains information about a report suite's IP exclusions.

|Element|Type|Description|
|-------|----|-----------|
| **rsid** | `xsd:string` | The report suite ID. |
| **site_title** | `xsd:string` | The report suite friendly name. |
| **ip_address_exclusions** | [ip_address_exclusion_array](r_ip_address_exclusion_array.md#) - An array of [ip_address_exclusion](r_ip_address_exclusion.md#) | A list of `ip_exclusion` objects associated with this report suite. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


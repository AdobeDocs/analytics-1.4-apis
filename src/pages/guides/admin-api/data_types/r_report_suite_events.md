# report_suite_events

Data structure that contains information about a report suite's Events.

|Element|Type|Description|
|-------|----|-----------|
| **rsid** | `string` | The report suite ID. |
| **site_title** | `string` | The report suite friendly name. |
| **ecommerce_level** | `int` | The level of commerce support. Supported values include: `0`: Commerce support disabled. `50`: Commerce support enabled with no shopping cart. `52`: Commerce support fully enabled (most common). |
| **events** | `event[]` | A list of `event` objects associated with this report suite. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


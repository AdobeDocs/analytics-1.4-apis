# report\_suite\_groups

Data structure that contains information about the permission groups that can access a report suite.

|Element|Type|Description|
|-------|----|-----------|
| **rsid** | `xsd:string)` | Report suites id. |
| **site\_title** | `xsd:string` | Title of the site associated with the report suite id.|
| **groups** | [permission\_group\_summary\_array](r_permission_group_summary_array.md#) - An array of [permission\_group\_summary](r_permission_group_summary.md#) | A list of the groups for the specified report suite. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


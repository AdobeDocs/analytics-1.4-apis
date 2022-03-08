# report_suite_groups

Data structure that contains information about the permission groups that can access a report suite.

|Element|Type|Description|
|-------|----|-----------|
| **rsid** | `string` | Report suites id. |
| **site_title** | `string` | Title of the site associated with the report suite id.|
| **groups** | [permission_group_summary[]](r_permission_group_summary_array.md#) - An array of [permission_group_summary](r_permission_group_summary.md#) | A list of the groups for the specified report suite. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


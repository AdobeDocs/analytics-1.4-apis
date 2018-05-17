# group\_data

Data structure that contains information about a single permission group.

|Element|Type|Description|
|-------|----|-----------|
|**rsid\_list** |`array()` | A list of report suites accessible by the group. |
|**available\_rsid\_list** |`array([simple\_report\_suite](r_simple_report_suite.md#))` | A list of all available Report Suites. |
|**user\_list** |`array(xsd:string)` | A list of all group members \(user accounts assigned to the group\). |
|**available\_user\_list** |`array(xsd:string)` | A list of all available user accounts. |
|**group** |[permission\_group](r_permission_group.md#) | Information about the permission group. |
|**report\_category\_access** |[report\_categories](r_report_categories.md#) | List of the report categories accessible by the group. |
|**group\_report\_list** |[group\_report\_list](r_group_report_list.md#) | List of individual report IDs accessible by the group. To enable report access, the appropriate `report_category` access must be enabled for the group. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


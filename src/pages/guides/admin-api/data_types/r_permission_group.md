# permission_group

Data structure that contains information about a single permission group.

|Element|Type|Description|
|-------|----|-----------|
|**group_name** |`string` | Name of the group. |
|**group_description** |`string` | Description of the group. |
|**group_id** |`int` | The group's ID. |
|**rsid_list** |`array[string]` | A list of report suites accessible by the group. Is populated with all report suites in the company if `all_report_suite_access` is `true`. |
|**user_list** |`array[string]` | A list of all group members (user accounts assigned to the group). |
|**all_report_suite_access** |`xsd:bool` | If true, the group has access to all of the company's report suites. |
|**category_permissions** | | Included in the response if `include_permissions` is included in the request; looks the same as `category_permissions` described in for [Permissions.SaveGroup](../methods/permissions/r_SaveGroup.md#). |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


# SaveReportSuiteGroups

Assigns permission groups to the specified report suite.

## Permissions.SaveReportSuiteGroups parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid** | `xsd:string` |A report suite ID.|
| **groups** | [permission_group_summary_array](../../data_types/r_permission_group_summary_array.md#) - An array of [permission_group_summary](../../data_types/r_permission_group_summary.md#).|Details on the permission groups associated with the specified rsid.|

## Permissions.SaveReportSuiteGroups response

|Type|Description|
|----|-----------|
| `xsd:int` |Returns `1` if the operation is successful.|

**Parent topic:** [Permissions](../../methods/permissions/r_methods_permissions.md)


# GetGroups

Retrieves a list of a company's permission groups.

## Permissions.GetGroups parameters

|Name|Type|Description|
|----|----|-----------|
| **group\_search\_field** | `xsd:string` |The field in the user account that you want to search. Options include: `name`, and `description`.|
| **group\_search\_value** | `xsd:string` |The value to search for in the specified field.|

## Permissions.GetGroups response

|Type|Description|
|----|-----------|
| [permission\_group\_summary\_array](../../data_types/r_permission_group_summary_array.md#) - an array of [permission\_group\_summary](../../data_types/r_permission_group_summary.md#) `group_id`  |A list of permission groups that include the specified search value.|

**Parent topic:** [Permissions](../../methods/permissions/r_methods_permissions.md)


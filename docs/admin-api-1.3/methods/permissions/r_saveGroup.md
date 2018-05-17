# SaveGroup

Saves group settings. If the group does not exist it creates a new group with the specified settings.

## Permissions.SaveGroup parameters

|Name|Type|Description|
|----|----|-----------|
|**group\_description** |`xsd:string` | A group description. |
|**group\_name** |`xsd:string` |A group name.|
|**group\_type\*** |`xsd:int` | A group type. Supported types include: `0`: Custom group. `1`: Pre-defined group. |
|**groupid\*** |`xsd:string` |A permission group identifier.|
|**report\_access\_list** |[tns:report\_categories](../../data_types/r_report_categories.md#) | A list of permissions categories for the group's members. Supported categories include: `0`: No access. `1`: Some access. `2`: All access. |
|**report\_id\_list** |`array(xsd:int)` |List of report IDs if the reports are in a partial group.|
|**rsid\_list** |`array(xsd:string)` |List of report suite IDs accessible by the group.|
|**user\_list** |`array(xsd:string)` |List of user accounts to assign to this group.|
|**perm\_info** |[tns:perm\_info](../../data_types/r_perm_info.md#) |The permissions data to associate with the permissions group.|

\* When creating a new group, do not include `group_type` or `groupid` in the request. The Marketing Cloud creates these values as part of the group creation process. After creating a new group, use [GetGroups](r_getGroups.md#) to see the new group's `groupid` value.

## Permissions.SaveGroup response

|Type|Description|
|----|-----------|
|`xsd:int` |Returns `1` if the add user operation is successful. Otherwise, returns `0`.|

**Parent topic:** [Permissions](../../methods/permissions/c_api_admin_methods_permissions.md)


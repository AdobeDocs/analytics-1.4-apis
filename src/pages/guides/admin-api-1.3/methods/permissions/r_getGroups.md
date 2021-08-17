# GetGroups

Retrieves a list of a company's permission groups.

## Permissions.GetGroups parameters

|Name|Type|Description|
|----|----|-----------|
|**search\_field** |`xsd:string` |The field in the user account that you want to search. Options include: `name`, and `description`.|
|**search\_value** |`xsd:string` |The value to search for in the specified field|

## Permissions.GetGroups response

|Type|Description|
|----|-----------|
|`tns:permission_group` |A list of permission groups that include the specified search value.|

**Parent topic:** [Permissions](../../methods/permissions/c_api_admin_methods_permissions.md)


# GetLogins

Retrieves information about all company user accounts that include the specified search value.

## Permissions.GetLogins parameters

|Name|Type|Description|
|----|----|-----------|
|**login\_search\_field** |`xsd:string` |The field in the user account that you want to search. Options include: `login`, `first_name`, `last_name`, and `title`.|
|**login\_search\_value** |`xsd:string` |The value to search for in the specified field|

## Permissions.GetLogins response

|Type|Description|
|----|-----------|
|[perm\_login\_array](../../data_types/r_perm_login_array.md#) |A list of user accounts that include the specified search value.|

**Parent topic:** [Permissions](../../methods/permissions/c_api_admin_methods_permissions.md)


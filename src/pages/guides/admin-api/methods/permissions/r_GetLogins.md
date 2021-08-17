# GetLogins

Retrieves information about all company user accounts that include the specified search value.

## Permissions.GetLogins parameters

|Name|Type|Description|
|----|----|-----------|
|**login\_search\_field** |`xsd:string` | The field in the user account that you want to search, one of the following values: `login` `first\_name` `last\_name` `title` |
|**login\_search\_value** |`xsd:string` |The value to search for in the specified field.|

## Permissions.GetLogins response

|Type|Description|
|----|-----------|
|[login\_array](../../data_types/r_login_array.md#) - An array of [login](../../data_types/r_login.md#) |A list of user accounts that include the specified search value.|

**Parent topic:** [Permissions](../../methods/permissions/r_methods_permissions.md)


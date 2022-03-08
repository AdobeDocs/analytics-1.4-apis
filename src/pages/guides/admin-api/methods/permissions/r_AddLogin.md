# AddLogin

Creates a new user account in the requesting company.

## Permissions.AddLogin parameters

|Name|Type|Description|
|----|----|-----------|
|**is_admin** |`boolean` |Enables the user as an admin when set to `true`.|
|**must_change_password** |`boolean` |Forces the user to change their password on their first login when set to `true`.|
|**create_dashboards** |`boolean` |Creates default dashboards for the user when set to `true`.|
|**rsid** |`string` |The report suite ID used to create the user's default dashboards.|
|**email** |`string` |The user's email address.|
|**first_name** |`string` |The user's first name.|
|**last_name** |`string` |The user's last name.|
|**login** |`string` |The user's login name.|
|**password** |`string` |The user's initial password.|
|**phone_number** |`string` |The user's contact phone number.|
|**group_names** |`string[]` |A list of group memberships for the user.|
|**is_temp** |`boolean` |Indicates this is a temporary user account when set to `true`.|
|**temp_end_date** |`date` |The date that the temporary account expires.|
|**temp_start_date** |`date` |The date to activate the temporary account.|
|**title** |`string` |The user's business title.|

## Permissions.AddLogin response

|Type|Description|
|----|-----------|
|`int` |Returns `1` if the add user operation is successful. Otherwise, returns `0`.|

**Parent topic:** [Permissions](../../methods/permissions/r_methods_permissions.md)


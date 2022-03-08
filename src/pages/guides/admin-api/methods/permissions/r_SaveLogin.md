# SaveLogin

Updates an existing user account in the requesting company.

## Permissions.SaveLogin parameters

|Name|Type|Description|
|----|----|-----------|
|**is_admin** |`boolean` |Enables the user as an admin when set to `true`.|
|**must_change_password** |`boolean` |Forces the user to change their password on their first login when set to `true`.|
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

## Permissions.SaveLogin response

|Type|Description|
|----|-----------|
|`boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Permissions](../../methods/permissions/r_methods_permissions.md)


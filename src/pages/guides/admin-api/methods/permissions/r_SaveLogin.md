# SaveLogin

Updates an existing user account in the requesting company.

## Permissions.SaveLogin parameters

|Name|Type|Description|
|----|----|-----------|
|**is_admin** |`xsd:boolean` |Enables the user as an admin when set to `true`.|
|**must_change_password** |`xsd:boolean` |Forces the user to change their password on their first login when set to `true`.|
|**email** |`xsd:string` |The user's email address.|
|**first_name** |`xsd:string` |The user's first name.|
|**last_name** |`xsd:string` |The user's last name.|
|**login** |`xsd:string` |The user's login name.|
|**password** |`xsd:string` |The user's initial password.|
|**phone_number** |`xsd:string` |The user's contact phone number.|
|**group_names** |`array(xsd:string)` |A list of group memberships for the user.|
|**is_temp** |`xsd:boolean` |Indicates this is a temporary user account when set to `true`.|
|**temp_end_date** |`xsd:date` |The date that the temporary account expires.|
|**temp_start_date** |`xsd:date` |The date to activate the temporary account.|
|**title** |`xsd:string` |The user's business title.|

## Permissions.SaveLogin response

|Type|Description|
|----|-----------|
|`xsd:boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Permissions](../../methods/permissions/r_methods_permissions.md)


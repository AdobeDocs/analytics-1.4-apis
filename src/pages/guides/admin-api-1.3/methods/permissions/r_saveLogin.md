# SaveLogin

Updates an existing user account in the requesting company.

## Permissions.SaveLogin parameters

|Name|Type|Description|
|----|----|-----------|
|**admin** |`xsd:int` |Enables the user as an admin \(when set to `1`\); otherwise set to `0`.|
|**change\_password** |`xsd:int` |Forces the user to change their password on their next login \(when set to `1`\); otherwise set to `0`.|
|**email** |`xsd:string` |The user's email address.|
|**first\_name** |`xsd:string` |The user's first name.|
|**last\_name** |`xsd:string` |The user's last name.|
|**login** |`xsd:string` |The user's login name.|
|**password** |`xsd:string` |The user's initial password.|
|**phone\_number** |`xsd:string` |The user's contact phone number.|
|**selected\_group\_list** |`array([tns:permission\_group](../../data_types/r_permission_group.md#))` |A list of group memberships for the user.|
|**temp\_login** |`xsd:int` |Sets the account as a temporary user account \(when set to `1`\); otherwise set to `0`.|
|**temp\_end\_date** |`xsd:date` |The date that the temporary account expires.|
|**temp\_start\_date** |`xsd:date` |The date to activate the temporary account.|
|**title** |`xsd:string` |The user's business title.|

## Permissions.SaveLogin response

|Type|Description|
|----|-----------|
|`xsd:int` |Returns `1` if the update operation is successful. Otherwise, returns `0`.|

**Parent topic:** [Permissions](../../methods/permissions/c_api_admin_methods_permissions.md)


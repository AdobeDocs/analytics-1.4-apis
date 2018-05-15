# SaveLogin

Updates an existing user account in the requesting company.

## Permissions.SaveLogin parameters

|Name|Type|Description|
|----|----|-----------|
|**is\_admin** |`xsd:boolean` |Enables the user as an admin when set to `true`.|
|**must\_change\_password** |`xsd:boolean` |Forces the user to change their password on their first login when set to `true`.|
|**email** |`xsd:string` |The user's email address.|
|**first\_name** |`xsd:string` |The user's first name.|
|**last\_name** |`xsd:string` |The user's last name.|
|**login** |`xsd:string` |The user's login name.|
|**password** |`xsd:string` |The user's initial password.|
|**phone\_number** |`xsd:string` |The user's contact phone number.|
|**group\_names** |`array(xsd:string)` |A list of group memberships for the user.|
|**is\_temp** |`xsd:boolean` |Indicates this is a temporary user account when set to `true`.|
|**temp\_end\_date** |`xsd:date` |The date that the temporary account expires.|
|**temp\_start\_date** |`xsd:date` |The date to activate the temporary account.|
|**title** |`xsd:string` |The user's business title.|

## Permissions.SaveLogin response

|Type|Description|
|----|-----------|
|`xsd:boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Permissions](../../methods/permissions/r_methods_permissions.md)


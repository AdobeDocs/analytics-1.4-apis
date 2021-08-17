# AddLogin

Creates a new user account in the requesting company.

## Permissions.AddLogin parameters

|Name|Type|Description|
|----|----|-----------|
|**is\_admin** |`xsd:boolean` |Enables the user as an admin when set to `true`.|
|**must\_change\_password** |`xsd:boolean` |Forces the user to change their password on their first login when set to `true`.|
|**create\_dashboards** |`xsd:boolean` |Creates default dashboards for the user when set to `true`.|
|**rsid** |`xsd:string` |The report suite ID used to create the user's default dashboards.|
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

## Permissions.AddLogin response

|Type|Description|
|----|-----------|
|`xsd:int` |Returns `1` if the add user operation is successful. Otherwise, returns `0`.|

**Parent topic:** [Permissions](../../methods/permissions/r_methods_permissions.md)


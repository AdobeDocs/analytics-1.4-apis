# login

Data structure that contains information about a user account.

|Element|Type|Description|
|-------|----|-----------|
|**available\_group\_list** |`array([permission\_group](r_permission_group.md#))` | A list of all available permission groups. |
|**selected\_group\_list** |`array([permission\_group](r_permission_group.md#))` | A list of permission group memberships for this user account. |
|**login** |`xsd:string` | The account username. |
|**first\_name** |`xsd:string` | The user's first name. |
|**last\_name** |`xsd:string` | The user's last name. |
|**title** |`xsd:string` | The user's business title. |
|**email** |`xsd:string` | The email address. |
|**phone\_number** |`xsd:string` | The user's phone number. |
|**change\_password** |`xsd:int` | Identifies if the user must change their password on their next login. Supported values include: `0`: Disabled `1`: Enabled |
|**temp\_login** |`xsd:int` | Identifies if this is a temporary user account. Supported values include: `0`: Disabled `1`: Enabled |
|**admin** |`xsd:int` | Identifies if this is an admin user account. Supported values include: `0`: Disabled `1`: Enabled |
|**temp\_login\_start** |`xsd:date` |The date to enable the temporary user account. Used when `temp_login = 1`.|
|**temp\_login\_end** |`xsd:date` |The date to disable the temporary user account. Used when `temp_login = 1`.|
|**login\_days\_left** |`xsd:int` |The number of active days remaining in the temporary user account. Used when `temp_login = 1`.|

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


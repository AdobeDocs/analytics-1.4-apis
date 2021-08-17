# login\_full

Data structure that contains information about a user account.

|Element|Type|Description|
|-------|----|-----------|
|**login** |`xsd:string` | The account username. |
|**first\_name** |`xsd:string` | The user's first name. |
|**last\_name** |`xsd:string` | The user's last name. |
|**title** |`xsd:string` | The user's business title. |
|**email** |`xsd:string` | The email address. |
|**phone\_number** |`xsd:string` | The user's phone number. |
|**must\_change\_password** |`xsd:boolean` | Identifies if the user must change their password on their next login. |
|**is\_temp** |`xsd:boolean` | Identifies if this is a temporary user account. |
|**is\_admin** |`xsd:boolean` | Identifies if this is an admin user account. |
|**temp\_start\_date** |`xsd:date` |The date to enable the temporary user account. Used when `temp_login = 1`.|
|**temp\_end\_date** |`xsd:date` |The date to disable the temporary user account. Used when `temp_login = 1`.|
|**group\_names** |`array(xsd:string)` |A list of group memberships for the user.|
|**ims\_only** |`xsd:boolean` | |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


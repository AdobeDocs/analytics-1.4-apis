# perm\_login

Data structure that contains basic information about a single user account.

|Element|Type|Description|
|-------|----|-----------|
|**login** |`xsd:string` | The account username. |
|**first\_name** |`xsd:string` | The user's first name. |
|**last\_name** |`xsd:string` | The user's last name. |
|**title** |`xsd:string` | The user's business title. |
|**email** |`xsd:string` | The user's email address. |
|**admin** |`xsd:int` | Identifies if this is an admin user. Supported values include: `0`: Disabled `1`: Enabled |
|**last\_login** |`xsd:dateTime` | The date and time of the user's last login. |
|**temp\_login\_end** |`xsd:date` | The date this temporary login expires, if applicable. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


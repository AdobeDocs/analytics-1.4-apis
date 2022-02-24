# login_full

Data structure that contains information about a user account.

|Element|Type|Description|
|-------|----|-----------|
|**login** |`xsd:string` | The account username. |
|**first_name** |`xsd:string` | The user's first name. |
|**last_name** |`xsd:string` | The user's last name. |
|**title** |`xsd:string` | The user's business title. |
|**email** |`xsd:string` | The email address. |
|**phone_number** |`xsd:string` | The user's phone number. |
|**must_change_password** |`xsd:boolean` | Identifies if the user must change their password on their next login. |
|**is_temp** |`xsd:boolean` | Identifies if this is a temporary user account. |
|**is_admin** |`xsd:boolean` | Identifies if this is an admin user account. |
|**temp_start_date** |`xsd:date` |The date to enable the temporary user account. Used when `temp_login = 1`.|
|**temp_end_date** |`xsd:date` |The date to disable the temporary user account. Used when `temp_login = 1`.|
|**group_names** |`array(xsd:string)` |A list of group memberships for the user.|
|**ims_only** |`xsd:boolean` | |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


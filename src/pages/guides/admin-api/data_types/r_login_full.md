# login_full

Data structure that contains information about a user account.

|Element|Type|Description|
|-------|----|-----------|
|**login** |`string` | The account username. |
|**first_name** |`string` | The user's first name. |
|**last_name** |`string` | The user's last name. |
|**title** |`string` | The user's business title. |
|**email** |`string` | The email address. |
|**phone_number** |`string` | The user's phone number. |
|**must_change_password** |`boolean` | Identifies if the user must change their password on their next login. |
|**is_temp** |`boolean` | Identifies if this is a temporary user account. |
|**is_admin** |`boolean` | Identifies if this is an admin user account. |
|**temp_start_date** |`date` |The date to enable the temporary user account. Used when `temp_login = 1`.|
|**temp_end_date** |`date` |The date to disable the temporary user account. Used when `temp_login = 1`.|
|**group_names** |`string[]` |A list of group memberships for the user.|
|**ims_only** |`boolean` | |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


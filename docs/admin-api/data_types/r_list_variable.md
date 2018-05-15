# list\_variable

Details about a list variable.

|Element|Type|Description|
|-------|----|-----------|
|**id** |`xsd:int` | 1-3 based on the number of the list variable. |
|**name** |`xsd:string` | Friendly name of the variable. |
|**allocation\_type** |`[list\_variable\_allocation\_type](r_list_variable_allocation_type.md#)` | The allocation rule used for allocating events to List Variable values, one of the following values of type `xsd:string`: full, linear |
|**expiration\_type** |`[list\_variable\_expiration\_type](r_list_variable_expiration_type.md#) ` | The List variable expiration setting, one of the following values of type `xsd:string`: custom, visit, page\_view, never, minute, hour, day, week, month, quarter, year, purchase, product\_view, cart\_open, cart\_checkout, cart\_add, cart\_remove, cart\_view|
|**expiration\_custom\_days** |`xsd:int` | Only used when “custom” is set as the `expiration_type` value. Indicates the number of days before expiration. |
|**value\_delimiter** |`xsd:string` | The character used to separate values within the List Var. Most commonly these are characters such as commas, colons, pipes, or something similar. This was configured by Customer Care when the list var was created. |
|**max\_values** |`xsd:string` | Designates the number of unique values each image request is allowed. This setting is optional. 0 indicates the maximum allowed value \(250\). |
|**enabled** |`xsd:int` | 0 means disabled, 1 means enabled. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


# list_variable

Details about a list variable.

|Element|Type|Description|
|-------|----|-----------|
|**id** |`int` | 1-3 based on the number of the list variable. |
|**name** |`string` | Friendly name of the variable. |
|**allocation_type** |[list_variable_allocation_type](r_list_variable_allocation_type.md#) | The allocation rule used for allocating events to List Variable values, one of the following values of type `string`: full, linear |
|**expiration_type** |[list_variable_expiration_type](r_list_variable_expiration_type.md#) | The List variable expiration setting, one of the following values of type `string`: custom, visit, page_view, never, minute, hour, day, week, month, quarter, year, purchase, product_view, cart_open, cart_checkout, cart_add, cart_remove, cart_view|
|**expiration_custom_days** |`int` | Only used when custom is set as the `expiration_type` value. Indicates the number of days before expiration. |
|**value_delimiter** |`string` | The character used to separate values within the List Var. Most commonly these are characters such as commas, colons, pipes, or something similar. This was configured by Customer Care when the list var was created. |
|**max_values** |`string` | Designates the number of unique values each image request is allowed. This setting is optional. 0 indicates the maximum allowed value (250). |
|**enabled** |`int` | 0 means disabled, 1 means enabled. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


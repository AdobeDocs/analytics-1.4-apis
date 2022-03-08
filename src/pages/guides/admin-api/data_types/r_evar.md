# evar

Data structure that contains information about an eVar.

|Element|Type|Description|
|-------|----|-----------|
|**id** |`string` | The commerce variable identifier (1-75). |
|**name** |`string` | The eVar friendly name. |
|**allocation_type** |[allocation_type_enum](r_evar_alloc_type_enum.md#) | The allocation rule used for allocating events to eVar values. |
|**type** |[evar_type_enum](r_evar_type_enum.md#) | The eVar value type. |
|**enabled** |`boolean` | |
|**expiration_type** |[evar_exp_type_enum](r_evar_exp_type_enum.md#) | The eVar expiration setting. |
|**expiration_custom_days** |`int` | If the expiration type is set to a custom number of days, this field specifies the number of days. |
|**merchandising_syntax** |[evar_merch_syntax_type_enum](r_evar_merch_syntax_type_enum.md#) | The merchandising eVar syntax setting. |
|**binding_events** |`string[]` | The merchandising eVar binding events. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


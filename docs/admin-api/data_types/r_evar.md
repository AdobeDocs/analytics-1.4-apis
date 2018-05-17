# evar

Data structure that contains information about an eVar.

|Element|Type|Description|
|-------|----|-----------|
|**id** |`xsd:string` | The commerce variable identifier \(1-75\). |
|**name** |`xsd:string` | The eVar friendly name. |
|**allocation\_type** |[allocation\_type\_enum](r_evar_alloc_type_enum.md#) | The allocation rule used for allocating events to eVar values. |
|**type** |[evar\_type\_enum](r_evar_type_enum.md#) | The eVar value type. |
|**enabled** |`xsd:boolean` | |
|**expiration\_type** |[evar\_exp\_type\_enum](r_evar_exp_type_enum.md#) | The eVar expiration setting. |
|**expiration\_custom\_days** |`xsd:int` | If the expiration type is set to a custom number of days, this field specifies the number of days. |
|**merchandising\_syntax** |[evar\_merch\_syntax\_type\_enum](r_evar_merch_syntax_type_enum.md#) | The merchandising eVar syntax setting. |
|**binding\_events** |`array(xsd:string)` | The merchandising eVar binding events. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


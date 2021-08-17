# evar

Data structure that contains information about an eVar.

|Element|Type|Description|
|-------|----|-----------|
|**evar\_num** |xsd:int | The commerce variable identifier \(1-75\). |
|**name** |xsd:string | The eVar friendly name. |
|**alloc\_type** |[evar\_alloc\_type\_enum](r_evar_alloc_type_enum.md#) | The allocation rule used for allocating events to eVar values. |
|**merch\_alloc\_type** |[evar\_merch\_alloc\_type\_enum](r_evar_merch_alloc_type_enum.md#) | The type of merchandising allocation to apply \(used when alloc_type = merchandising\). |
|**linear\_num\_items** |[evar\_linear\_num\_items\_enum](r_evar_linear_num_items_enum.md#) | The number of items for which linear allocation is applied across visits. |
|**type** |[evar\_type\_enum](r_evar_type_enum.md#) | The eVar value type. |
|**sub\_type** |[evar\_sub\_type\_enum](r_evar_sub_type_enum.md#) | The level of sub-relation supported by the eVar. |
|**exp\_type** |[evar\_exp\_type\_enum](r_evar_exp_type_enum.md#) | The eVar expiration setting. |
|**exp\_num\_periods** |xsd:int | How many units of exp_type before expiration. For example, if exp_type = month, and exp_num_periods = 3, the eVar expires after 3 months. |
|**merch\_syntax\_type** |[evar\_merch\_syntax\_type\_enum](r_evar_merch_syntax_type_enum.md#) | The merchandising eVar syntax setting. |
|**binding\_event** |array(xsd:int) | The merchandising eVar binding event. |
|**in\_queue** |xsd:int | Flag that indicates whether the item is in the Pending Approval queue. Supported values include: 1: In the Pending Approval queue. 0: Not in the Pending Approval queue. **Note:** Populated in method response only. Leave in_queue blank for method requests. |
|**status** |xsd:int | If in_queue = 0, then status = 0. If in_queue = 1, status is one of the following values: 1: Pending approval to Save. 2: Pending approval to Delete. **Note:** Populated in method response only. Leave status blank for method requests. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


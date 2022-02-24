# queue_item

Data structure that contains information a company's Pending queue.

|Element|Type|Description|
|-------|----|-----------|
|**entry_date** |`xsd:date` | The date the item entered the Pending queue. |
|**quque_item_id** |`xsd:int` | An internal numeric ID associated with the item while it is in the Pending queue. |
|**rsid_list** |`xsd:string` | A comma-separated list of report suite IDs associated with this item. |
|**description** |`xsd:string` | A description of the pending item. |
|**feature_name** |`xsd:string` | The name of the feature that is being altered. |
|**admin_user** |`xsd:string` | The admin user that initiated the pending item. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


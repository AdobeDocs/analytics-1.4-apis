# queue_item

Data structure that contains information a company's Pending queue.

|Element|Type|Description|
|-------|----|-----------|
|**entry_date** |`date` | The date the item entered the Pending queue. |
|**quque_item_id** |`int` | An internal numeric ID associated with the item while it is in the Pending queue. |
|**rsid_list** |`string` | A comma-separated list of report suite IDs associated with this item. |
|**description** |`string` | A description of the pending item. |
|**feature_name** |`string` | The name of the feature that is being altered. |
|**admin_user** |`string` | The admin user that initiated the pending item. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


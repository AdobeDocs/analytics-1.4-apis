# queue\_item

Data structure that contains information a company's Pending queue.

|Element|Type|Description|
|-------|----|-----------|
|**entry\_date** |`xsd:datetime` | The date and time the item entered the Pending queue. |
|**item\_id** |`xsd:int` | An internal numeric ID associated with the item while it is in the Pending queue. |
|**rsids** |`xsd:string` | A comma-separated list of report suite IDs associated with this item. |
|**description** |`xsd:string` | A description of the pending item. |
|**feature\_name** |`xsd:string` | The name of the feature that is being altered. |
|**admin\_user** |`xsd:string` | The admin user that initiated the pending item. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


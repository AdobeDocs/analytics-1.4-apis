# event

Data structure that contains information about an Event \(Traffic variable\).

|Element|Type|Description|
|-------|----|-----------|
|**custom\_event** |`xsd:int` | Flag that indicates if this is a custom event. `0`: Not a custom event.  `1`: Custom event. |
|**default\_metric** |`xsd:int` | Flag that indicates if this is a default metric. `0`: Not a default metric.  `1`: Default metric. |
|**event\_name** |`xsd:string` | The Event name. |
|**event\_number** |`xsd:int` | The Event number, If this is a custom event \(1 - 100\). |
|**event\_type** |[event\_type\_enum](r_event_type_enum.md#) | The Event type. |
|**relation\_string** |`xsd:string` | A string representation of `rel_id`. |
|**in\_queue** |`xsd:int` | Flag that indicates whether the item is in the Pending Approval queue. Supported values include: `1`: In the Pending Approval queue. `0`: Not in the Pending Approval queue. **Note:** Populated in method response only. Leave `in_queue` blank for method requests. |
|**status** |`xsd:int` | If `in_queue = 0`, then `status = 0`. If `in_queue = 1`, status is one of the following values: `1`: Pending approval to Save. `2`: Pending approval to Delete. **Note:** Populated in method response only. Leave `status` blank for method requests. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


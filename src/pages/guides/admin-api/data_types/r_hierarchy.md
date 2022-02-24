# hierarchy

Data structure that contains information about a report suite's classification hierarchy.

|Element|Type|Description|
|-------|----|-----------|
|**localization** |`xsd:string` | Whether or not Analytics displays data using UTF-8 encoding. Supported values include: `enabled`: Data display uses UTF-8. `disabled`: Data display does not use UTF-8. |
|**hierarchies** |[hierarchy_node_array](r_hierarchy_node_array.md#) | A list of nodes in the classification hierarchy. |
|**in_queue** |`xsd:int` | Flag that indicates whether the item is in the Pending Approval queue. Supported values include: `1`: In the Pending Approval queue. `0`: Not in the Pending Approval queue. **Note:** Populated in method response only. Leave `in_queue` blank for method requests. |
|**status** |`xsd:int` | If `in_queue = 0`, then `status = 0`. If `in_queue = 1`, status is one of the following values: `1`: Pending approval to Save. `2`: Pending approval to Delete. **Note:** Populated in method response only. Leave `status` blank for method requests. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


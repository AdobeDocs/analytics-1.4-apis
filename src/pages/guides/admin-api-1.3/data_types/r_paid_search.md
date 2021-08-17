# paid\_search

Data structure that contains information about a single paid search rule.

|Element|Type|Description|
|-------|----|-----------|
|**search\_engine** |`xsd:string` | The search engine ID. |
|**rule** |`xsd:string` | Specifies the type of paid search rule. Supported valued include: `1`: Contains rule \(inclusive\). `2`: Does not contain rule \(exclusive\). |
|**filter** |`xsd:string` |The string value to use when matching a search engine referring URL.|
|**in\_queue** |`xsd:int` | Flag that indicates whether the item is in the Pending Approval queue. Supported values include: `1`: In the Pending Approval queue. `0`: Not in the Pending Approval queue. **Note:** Populated in method response only. Leave `in_queue` blank for method requests. |
|**status** |`xsd:int` | If `in_queue = 0`, then `status = 0`. If `in_queue = 1`, status is one of the following values: `1`: Pending approval to Save. `2`: Pending approval to Delete. **Note:** Populated in method response only. Leave `status` blank for method requests. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


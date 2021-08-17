# ui\_element

Data structure that contains information about a report suite's report visibility settings.

|Element|Type|Description|
|-------|----|-----------|
|**ui\_element** |`xsd:string` | The name of the report to enable/disable. Supported values include: `visitor_detail` `last_visitors` `site_sections` `servers` `exit_links` `custom_links` `file_downloads` `key_visitors` `key_visitor_s` |
|**state** |`xsd:int` | Indicates if the report is visible. Supported values include: `0`: Not visible. `1`: Visible. |
|**in\_queue** |`xsd:int` | Flag that indicates whether the item is in the Pending Approval queue. Supported values include: `1`: In the Pending Approval queue. `0`: Not in the Pending Approval queue. **Note:** Populated in method response only. Leave `in_queue` blank for method requests. |
|**status** |`xsd:int` | If `in_queue = 0`, then `status = 0`. If `in_queue = 1`, status is one of the following values: `1`: Pending approval to Save. `2`: Pending approval to Delete. **Note:** Populated in method response only. Leave `status` blank for method requests. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


# permanent\_traffic

Data structure that contains information about a report suite's traffic settings.

|Element|Type|Description|
|-------|----|-----------|
|**new\_hits\_per\_day** |`xsd:int` | The expected number of hits per day. |
|**go\_live\_date** |`xsd:date` | The date the specified traffic level will start. |
|**report\_suites** |array([simple\_report\_suite](r_simple_report_suite.md#)) | A list of report suite objects where you want to apply these traffic settings. |
|**in\_queue** |`xsd:int` | Flag that indicates whether the item is in the Pending Approval queue. Supported values include: `1`: In the Pending Approval queue. `0`: Not in the Pending Approval queue. **Note:** Populated in method response only. Leave `in_queue` blank for method requests. |
|**status** |`xsd:int` | If `in_queue = 0`, then `status = 0`. If `in_queue = 1`, status is one of the following values: `1`: Pending approval to Save. `2`: Pending approval to Delete. **Note:** Populated in method response only. Leave `status` blank for method requests. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


# calculated\_metric

Data structure that contains information about a calculated metric.

|Element|Type|Description|
|-------|----|-----------|
|**name** |`xsd:string` | The calculated metric name. |
|**formula** |`xsd:string` | The calculated metric formula. |
|**friendly\_formula** |`xsd:string` |A friendly \(human readable\) version of the calculated metric formula.|
|**metric\_type** |`xsd:int` | Identifies the type of calculated metric. Supported values include: `1`: Numeric `2`: Percent `3`: Currency |
|**metric\_type\_string** |`xsd:string` | Provides a friendly name for the metric type. If `metric_type = 1`, set `metric_type_string` to `Numeric`. If `metric_type = 2`, set `metric_type_string` to `Percent`. If `metric_type = 3`, set `metric_type_string` to `Currency`. |
|**decimal\_places** |`xsd:int` |The number of digits to include after the decimal place.|
|**formula\_id** |`xsd:int` | A unique calculated metric identifier. Populated in method response only. Leave `formula_id` blank for method requests. |
|**in\_queue** |`xsd:int` | Flag that indicates whether the item is in the Pending Approval queue. Supported values include: `1`: In the Pending Approval queue. `0`: Not in the Pending Approval queue. **Note:** Populated in method response only. Leave `in_queue` blank for method requests. |
|**status** |`xsd:int` | If `in_queue = 0`, then `status = 0`. If `in_queue = 1`, status is one of the following values: `1`: Pending approval to Save. `2`: Pending approval to Delete. **Note:** Populated in method response only. Leave `status` blank for method requests. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


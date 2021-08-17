# calculated\_metric

Data structure that contains information about a calculated metric.

|Element|Type|Description|
|-------|----|-----------|
|**name** |`xsd:string` | The calculated metric name. |
|**formula** |`xsd:string` | The calculated metric formula. |
|**friendly\_formula** |`xsd:string` |A friendly \(human readable\) version of the calculated metric formula.|
|**type** |`xsd:string` | Identifies the type of calculated metric. Supported values include: numeric, percent, currency, time |
|**decimal\_places** |`xsd:int` |The number of digits to include after the decimal place.|
|**formula\_id** |`xsd:string` | A unique calculated metric identifier. Populated in method response only. Leave `formula_id` blank for method requests. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


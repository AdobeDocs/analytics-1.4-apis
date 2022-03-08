# calculated_metric

Data structure that contains information about a calculated metric.

|Element|Type|Description|
|-------|----|-----------|
|**name** |`string` | The calculated metric name. |
|**formula** |`string` | The calculated metric formula. |
|**friendly_formula** |`string` |A friendly (human readable) version of the calculated metric formula.|
|**type** |`string` | Identifies the type of calculated metric. Supported values include: numeric, percent, currency, time |
|**decimal_places** |`int` |The number of digits to include after the decimal place.|
|**formula_id** |`string` | A unique calculated metric identifier. Populated in method response only. Leave `formula_id` blank for method requests. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


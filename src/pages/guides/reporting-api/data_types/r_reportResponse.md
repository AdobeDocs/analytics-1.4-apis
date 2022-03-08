# reportResponse

A structure data type that returns data associated with a particular report request.



##  

|Element|Type|Description|
|-------|----|-----------|
| ` waitSeconds ` | `float` | The time in seconds this report waited in the queue before being run. A high value here is indicative of a large amount of report requests for a single company. |
| ` runSeconds ` | `float` | The time in seconds this report took to process and return data. A high value here is indicative of a complex report or large date range. |
| ` report ` | [report](r_report.md#) | A structure containing the report data. |

**Parent topic:** [Data Types](../data_types/datatypes.md)


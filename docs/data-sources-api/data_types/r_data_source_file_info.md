# dataSourceFileInfo

Data structure that contains information about a file submitted to data source.

|Element|Type|Description|
|-------|----|-----------|
|**id** |`xsd:string` | The unique file identifier. |
|**fileName** |`xsd:string` | The file name. |
|**startDate** |`xsd:string` | The date and time the file started processing. |
|**finishDate** |`xsd:string` | The date and time the file finished processing. |
|**fileSizeBytes** |`xsd:int` | The file size in bytes. |
|**fileRows** |`xsd:int` | The number of data rows in the file. |
|**errors** |[errorList](r_error_list.md#) | A list of fatal errors in the file. |
|**warnings** |[warningList](r_warning_list.md#) | A list of non-fatal warnings in the file. |
|**receivedDate** |`xsd:string` | The date and time Adobe servers received the file. |
|**status** |`xsd:string` | A brief message associated with the current data source status. See [Status Codes](../c_status_codes.md#). |

**Parent topic:** [Data Types](../data_types/c_data_types.md)


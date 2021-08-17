# dataSourceFileStatus

Data structure that contains status information about a file submitted to a data source.

|Element|Type|Description|
|-------|----|-----------|
|**fileName** |`xsd:string` | The file name. |
|**startDate** |`xsd:string` | The date and time the file started processing. |
|**finishDate** |`xsd:string` | The date and time the file finished processing. |
|**fileSizeBytes** |`xsd:int` | The file size in bytes. |
|**fileRows** |`xsd:int` | The number of data rows in the file. |
|**errors** |`errorList` | A list of fatal errors in the file, organized by data row. |
|**warnings** |`warningList` | A list of non-fatal warnings in the file, organized by data row. |
|**receivedDate** |`xsd:string` | The date and time Adobe servers received the file. |
|**status** |`xsd:string` | Status of the file processing. Supported values include `Success` and `Failure`. |

**Parent topic:** [Data Types](../data_types/c_data_types.md)


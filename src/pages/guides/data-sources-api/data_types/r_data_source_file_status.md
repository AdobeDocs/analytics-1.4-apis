# dataSourceFileStatus

Data structure that contains status information about a file submitted to a data source.

|Element|Type|Description|
|-------|----|-----------|
|**fileName** |`string` | The file name. |
|**startDate** |`string` | The date and time the file started processing. |
|**finishDate** |`string` | The date and time the file finished processing. |
|**fileSizeBytes** |`int` | The file size in bytes. |
|**fileRows** |`int` | The number of data rows in the file. |
|**errors** |`errorList` | A list of fatal errors in the file, organized by data row. |
|**warnings** |`warningList` | A list of non-fatal warnings in the file, organized by data row. |
|**receivedDate** |`string` | The date and time Adobe servers received the file. |
|**status** |`string` | Status of the file processing. Supported values include `Success` and `Failure`. |

**Parent topic:** [Data Types](../data_types/c_data_types.md)


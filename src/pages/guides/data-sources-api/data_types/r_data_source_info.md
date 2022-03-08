# dataSourceInfo

Data structure that contains configuration settings for a data source.

|Element|Type|Description|
|-------|----|-----------|
|**dataSourceID** |`string` | The data source unique identifier. |
|**type** |`string` | The data source type. |
|**name** |`string` | The data source name. |
|**email** |`string` | The admin email associated with the data source. |
|**activateDate** |`string` | The date and time the data source was activated. |
|**ftpPath** |`string` | The data source's FTP host (for receiving data). |
|**ftpLoginID** |`string` | The data source's FTP login name. |
|**ftpPassword** |`string` | The data source's FTP login password. |
|**haltOnWarning** |`int` | Indicates if data source processing is halted due to a non-fatal error. Supported values include: `0`: Not halted. `1`: Halted. |
|**haltOnError** |`int` | Indicates if data source processing is halted due to a fatal error. Supported values include: `0`: Not halted. `1`: Halted. |
|**lockedByError** |`int` | Indicates if the data source is locked due to a fatal error. Supported values include: `0`: Not locked. `1`: Locked. |

**Parent topic:** [Data Types](../data_types/c_data_types.md)


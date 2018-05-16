# dataSourceInfo

Data structure that contains configuration settings for a full-processing data source.

|Element|Type|Description|
|-------|----|-----------|
|**dataSourceID** |`xsd:string` | The data source unique identifier. |
|**type** |`xsd:string` | The data source type. |
|**name** |`xsd:string` | The data source name. |
|**email** |`xsd:string` | The admin email associated with the data source. |
|**activateDate** |`xsd:string` | The date and time the data source was activated. |
|**ftpPath** |`xsd:string` | The data source's FTP host \(for receiving data\). |
|**ftpLoginID** |`xsd:string` | The data source's FTP login name. |
|**ftpPassword** |`xsd:string` | The data source's FTP login password. |
|**haltOnWarning** |`xsd:int` | Indicates if data source processing is halted due to a non-fatal error. Supported values include: `0`: Not halted. `1`: Halted. |
|**haltOnError** |`xsd:int` | Indicates if data source processing is halted due to a fatal error. Supported values include: `0`: Not halted. `1`: Halted. |
|**lockedByError** |`xsd:int` | Indicates if the data source is locked due to a fatal error. Supported values include: `0`: Not locked. `1`: Locked. |

**Parent topic:** [Data Types](../data_types/c_data_types.md)


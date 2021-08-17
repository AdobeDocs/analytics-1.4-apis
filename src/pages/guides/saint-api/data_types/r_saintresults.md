# saintresults

Data structure that contains status information about a SAINT job.

|Element|Type|Description|
|-------|----|-----------|
|**Id** |`xsd:int` | The unique SAINT identifier. |
|**Type** |`xsd:string` | Specifies the ID type. Supported values include: `Job:` A SAINT job ID. `File:` A SAINT file ID. |
|**Viewable\_pages** |`xsd:int` | The number of pages in the request. |
|**Status** |`xsd:string` | The job or file status. Supported values include: `Waiting For User Data` `In Progress` `Completed` `Completed--With Errors`  |

**Parent topic:** [Data Types](../data_types/c_data_types.md)


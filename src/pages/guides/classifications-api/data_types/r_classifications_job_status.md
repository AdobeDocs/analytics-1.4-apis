# classifications\_job\_status

Data structure that contains status information about a classifications job.

|Element|Type|Description|
|-------|----|-----------|
|**id** |`xsd:int` | The unique classifications identifier. |
|**type** |`xsd:string` | Specifies the ID type. Supported values include: `Job:` A classifications job ID. `File:` A classifications file ID. |
|**viewable\_pages** |`xsd:int` | The number of pages in the request. |
|**status** |`xsd:string` | The job or file status. Supported values include:  `Waiting For User Data`  `In Progress`  `Completed`  `Completed--With Errors` |

**Parent topic:** [Data Types](../data_types/classifications_data_types.md)


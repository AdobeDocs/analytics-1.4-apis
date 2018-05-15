# segment\_item

Data structure that contains information about a single segment.

|Element|Type|Description|
|-------|----|-----------|
|**id** |`xsd:string` | The unique segment ID. Data Warehouse segments are prefixed with `dw:`, for example `dw:first_time_visitors`. Analytics and Ad hoc analysis segments are not prefixed.|
|**name** |`xsd:string` | Display name of the segment. |
|**folder** |`xsd:string` | Name of the folder that contains this segment. |
|**class** |`xsd:string` | Indicates the segment container defined for the segment. `seg-hit` indicates the Page View container. This container shows data for only specific pages on which the event occurred. `seg-visit` indicates the Visit container. This container shows data for only the specific visits in which the event occurred. `seg-visitor` indicates the Visitor container. This container shows all data for visits of any visitor who performed the event during any visit. |
|**suite\_enabled** |`xsd:boolean` | Indicates if a segment can be used in other suite products, such as Test & Target. Set to null if not suite-enabled. |
|**read\_only** |`xsd:boolean` | Boolean that indicates if a segment can be edited by the authenticated API user. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


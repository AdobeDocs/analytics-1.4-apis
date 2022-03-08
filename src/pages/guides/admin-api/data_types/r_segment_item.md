# segment_item

Data structure that contains information about a single segment.

|Element|Type|Description|
|-------|----|-----------|
|**id** |`string` | The unique segment ID. Data Warehouse segments are prefixed with `dw:`, for example `dw:first_time_visitors`. Analytics and Ad hoc analysis segments are not prefixed.|
|**name** |`string` | Display name of the segment. |
|**folder** |`string` | Name of the folder that contains this segment. |
|**class** |`string` | Indicates the segment container defined for the segment. `seg-hit` indicates the Page View container. This container shows data for only specific pages on which the event occurred. `seg-visit` indicates the Visit container. This container shows data for only the specific visits in which the event occurred. `seg-visitor` indicates the Visitor container. This container shows all data for visits of any visitor who performed the event during any visit. |
|**suite_enabled** |`boolean` | Indicates if a segment can be used in other suite products, such as Test & Target. Set to null if not suite-enabled. |
|**read_only** |`boolean` | Boolean that indicates if a segment can be edited by the authenticated API user. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


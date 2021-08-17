# ReplaceSegment

Deletes the specified Data Warehouse segment and creates a new Data Warehouse segment of the specified structure.

**Important note regarding segment compatibility** 

On May 22, 2014, Adobe Analytics released unified segment management. After this release, segments created using this method appear in the Segment Builder UI, but any changes made to the segment using the UI will not be reflected in the API. Therefore, we recommend that segments created using the data warehouse API should be edited only in the data warehouse API.

## DataWarehouse.ReplaceSegment Parameters

|Parameter|Type|Description|
|---------|----|-----------|
|**id** |`xsd:int` | The ID of the segment to delete. Data Warehouse provides this value in the response to a create segment operation. |
|**rsid** |`xsd:int` | The report suite used to create the new segment. |
|**segment** |[Data Warehouse Segment](../data_types/r_data_warehouse_segment.md#) | The segment definition used to define the data set in the new segment. |

## DataWarehouse.ReplaceSegment Response

|Type|Description|
|----|-----------|
| `xsd:int` | A unique segment identifier for the new segment. If the segment creation fails, the SOAP framework returns an environment fault that describes the error. |

**Parent topic:** [Methods](../methods/c_data_warehouse_methods.md)


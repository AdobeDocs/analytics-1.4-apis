# GetSegment

Create a segment filter that determines the report suite data that Data Warehouse includes in its data file response to a Data Warehouse request.

## DataWarehouse.GetSegment Parameters

|Parameter|Type|Description|
|---------|----|-----------|
|**rsid** |`xsd:int` | The report suite used to generate the segment. |
|**segment** |`xsd:int` | The segment ID. Data Warehouse generates this value after creating a new segment. |

## DataWarehouse.GetSegment Response

|Type|Description|
|----|-----------|
| [Data Warehouse Segment](../data_types/r_data_warehouse_segment.md#) | A structure containing the Data Warehouse segment data. |

**Parent topic:** [Methods](../methods/c_data_warehouse_methods.md)


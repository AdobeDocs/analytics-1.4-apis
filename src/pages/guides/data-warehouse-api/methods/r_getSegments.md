# GetSegments

Retrieves a Data Warehouse segments for the specified date range.

## DataWarehouse.GetSegments Parameters

|Parameter|Type|Description|
|---------|----|-----------|
|**rsid** |`int` | The report suite ID where you want to generate a Data Warehouse segment. |
|**start_date** |`xsd:date` | The start date for the Data Warehouse segment. |
|**end_date** |`xsd:date` | The end date for the Data Warehouse segment. |

## DataWarehouse.GetSegments Response

|Type|Description|
|----|-----------|
| [Segment Folders](../data_types/r_segment_folders.md#) | A list of segments for the specified date range. |

**Parent topic:** [Methods](../methods/c_data_warehouse_methods.md)


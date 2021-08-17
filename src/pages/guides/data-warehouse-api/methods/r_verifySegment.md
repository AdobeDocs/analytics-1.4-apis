# VerifySegment

Validates the specified segment definition without creating a new Data Warehouse segment.

## DataWarehouse.VerifySegment Parameters

This is useful for checking segment syntax before creating the new segment in Data Warehouse.

|Parameter|Type|Description|
|---------|----|-----------|
|**segment** |[Data Warehouse Segment](../data_types/r_data_warehouse_segment.md#) | The segment definition to verify. |

## DataWarehouse.VerifySegment Response

|Type|Description|
|----|-----------|
| `xsd:boolean` | Returns `True` if the segment filter is syntactically valid. Otherwise, returns an environment fault at the first syntax error in the segment definition. |

**Parent topic:** [Methods](../methods/c_data_warehouse_methods.md)


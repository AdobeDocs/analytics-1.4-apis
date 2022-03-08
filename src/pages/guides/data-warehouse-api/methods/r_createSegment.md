# CreateSegment

Create a segment definition that determines the report suite data that Data Warehouse includes in the new Data Warehouse segment.

**Important note regarding segment compatibility** 

On May 22, 2014, Adobe Analytics released unified segment management. After this release, segments created using this method appear in the Segment Builder UI, but any changes made to the segment using the UI will not be reflected in the API. Therefore, we recommend that segments created using the data warehouse API should be edited only in the data warehouse API.

This method is unable to create segments based on solution variables (used by mobile, video, and social). If you receive an error defining a segment using one of these variables, we recommend using the new Segment.Save API in version 1.4 instead.

## DataWarehouse.CreateSegment Parameters

|Parameter|Type|Description|
|---------|----|-----------|
|**rsid** |`int` | The report suite used to generate the segment. |
|**segment** |`data_warehouse_segment` | The segment definition used to define the new segment. |
|**report_suite_wide** |`boolean` | When set to "true", the segment is created at the report-suite level instead of at the level of the currently authenticated user. This enables the segment for any user in the report suite. |

## DataWarehouse.CreateSegment Response

|Type|Description|
|----|-----------|
| `int` | A unique segment ID for the new segment. If the segment creation fails, the SOAP framework returns an environment fault that describes the error. |

**Parent topic:** [Methods](../methods/c_data_warehouse_methods.md)


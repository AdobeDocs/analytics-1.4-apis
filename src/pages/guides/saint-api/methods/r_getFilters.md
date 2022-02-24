# GetFilters

Returns valid sets of data for a given Report Suite and Relation ID.

## Saint.GetFilters Parameters

The returned data consists of values that can be passed in as parameters of [ExportCreateJob](r_exportCreateJob.md#), including column numbers and names, and valid dates for filtering data rows in a SAINT export.

|Parameter|Type|Description|
|---------|----|-----------|
|**relation_id** |`xsd:int` | The ID of the Data Source for which you want to get file information. |
|**report_suite_array** |`array(xsd:string)` | A list of report suites that contains the specified data source. |

## Saint.GetFilters Response

|Type|Description|
|----|-----------|
|[export_filters](../data_types/r_export_filters.md#) | Information about valid filters for the specified data segment. |

For more information, see [GetFilters Request](../sample_code/r_GetFilters_sample.md#).

**Parent topic:** [Methods](../methods/c_saint_methods.md)


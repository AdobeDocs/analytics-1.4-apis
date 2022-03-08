# GetFileStatus

Returns status information about the files submitted to the specified data source.

## DataSource.GetFileStatus Parameters

The status information tells you if the file is queued for processing, processing, or processed.

|Parameter|Type|Required|Description|
|---------|----|--------|-----------|
|**reportSuiteID** |`string` |Yes| The ID of the report suite where you want to create this data source. |
|**dataSourceID** |`string` |Yes| The Data Source ID. You can get this ID by calling [DataSource.GetIDs](r_getIDs.md#). |

## DataSource.GetFileStatus Response

|Type|Description|
|----|-----------|
|[tns:fileStatusResult](../data_types/r_file_status_result.md#) | The current status of files processing for the specified data source. |

**Parent topic:** [Methods](../methods/c_data_sources_methods.md)


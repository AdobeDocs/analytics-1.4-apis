# GetFileIDs

Returns a list of files or data blocks submitted to the specified data source.

## DataSource.GetFileIDs Parameters

This method returns the file IDs assigned to the data blocks when they enter the processing queue.

|Parameter|Type|Required|Description|
|---------|----|--------|-----------|
|**reportSuiteID** |`string` |Yes| The ID of the report suite where you want to create this data source. |
|**dataSourceID** |`string` |Yes| The Data Source ID. You can get this ID by calling [DataSource.GetIDs](r_getIDs.md#). |
|**filter** |`string` |Yes| A string value that limits the File IDs returned to those that include the specified value. |

## DataSource.GetFileIDs Response

|Type|Description|
|----|-----------|
|[tns:fileIDResult](../data_types/r_file_id_result.md#) | Indicates if the call was successful. |

**Parent topic:** [Methods](../methods/c_data_sources_methods.md)


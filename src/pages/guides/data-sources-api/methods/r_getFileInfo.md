# GetFileInfo

Returns information about the files submitted to the specified data source.

## DataSource.GetFileInfo Parameters

|Parameter|Type|Required|Description|
|---------|----|--------|-----------|
|**reportSuiteID** |`xsd:string` |Yes| The ID of the report suite where you want to create this data source. |
|**dataSourceID** |`xsd:string` |Yes| The Data Source ID. You can get this ID by calling [DataSource.GetIDs](r_getIDs.md#). |
|**filter** |`xsd:string` |Yes| A string value that limits the file info returned to those File IDs that include the specified value. |

## DataSource.GetFileInfo Response

|Type|Description|
|----|-----------|
|[tns:fileInfoResult](../data_types/r_file_info_result.md#) | A list of files submitted for the specified data source. |

**Parent topic:** [Methods](../methods/c_data_sources_methods.md)


# SetupFull

Creates a new full processing data source.

For more information about Data Source types, see "Accessing Data Sources" in the *Data Sources User Guide*.

## DataSource.SetupFull Parameters

|Parameter|Type|Required|Description|
|---------|----|--------|-----------|
|**reportSuiteID** |`xsd:string` |Yes| The ID of the report suite where you want to create this data source. |
|**dataSourceID** |`xsd:int` |Yes| The ID of the new Data Source. |
|**dataSourceSettings** |[tns:ds\_full\_settings](../data_types/r_ds_full_settings.md#) |No| The new data source settings. |

## DataSource.SetupFull Response

|Type|Description|
|----|-----------|
|[tns:ds\_setup\_result](../data_types/r_ds_setup_result.md#) | Returns data about the new data source. |

**Parent topic:** [Methods](../methods/c_data_sources_methods.md)


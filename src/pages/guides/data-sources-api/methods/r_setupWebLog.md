# SetupWebLog

Creates a new WebLog Data Source.

For more information about Data Source types, see "Accessing Data Sources" in the *Data Sources User Guide*.

## DataSource.SetupWebLog Parameters

|Parameter|Type|Required|Description|
|---------|----|--------|-----------|
|**reportSuiteID** |`string` |Yes| The ID of the report suite where you want to create this data source. |
|**dataSourceID** |`int` |Yes| The ID of the new Data Source. |
|**dataSourceSettings** |[tns:ds_weblog_settings](../data_types/r_ds_weblog_settings.md#) |No| The new data source settings. |

## DataSource.SetupWebLog Response

|Type|Description|
|----|-----------|
|[tns:ds_setup_result](../data_types/r_ds_setup_result.md#) | Returns data about the new data source. |

**Parent topic:** [Methods](../methods/c_data_sources_methods.md)


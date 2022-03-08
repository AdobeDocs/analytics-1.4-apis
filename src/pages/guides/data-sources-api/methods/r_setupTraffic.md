# SetupTraffic

Creates a new Traffic Data Source.

For more information about Data Source types, see "Accessing Data Sources" in the *Data Sources User Guide*.

## DataSource.Setup Parameters

|Parameter|Type|Required|Description|
|---------|----|--------|-----------|
|**reportSuiteID** |`string` |Yes| The ID of the report suite where you want to create this data source. |
|**dataSourceID** |`int` |Yes| The ID of the new Data Source. |
|**dataSourceSettings** |`ds_traffic_settings` |No| The new data source settings. |

## DataSource.SetupTraffic Response

|Type|Description|
|----|-----------|
|`ds_setup_result` | Returns data about the new data source. |

**Parent topic:** [Methods](../methods/c_data_sources_methods.md)


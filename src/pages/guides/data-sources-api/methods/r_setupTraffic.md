# SetupTraffic

Creates a new Traffic Data Source.

For more information about Data Source types, see "Accessing Data Sources" in the *Data Sources User Guide*.

## DataSource.Setup Parameters

|Parameter|Type|Required|Description|
|---------|----|--------|-----------|
|**reportSuiteID** |`xsd:string` |Yes| The ID of the report suite where you want to create this data source. |
|**dataSourceID** |`xsd:int` |Yes| The ID of the new Data Source. |
|**dataSourceSettings** |[tns:ds_traffic_settings](../data_types/r_ds_traffic_settings.md#) |No| The new data source settings. |

## DataSource.SetupTraffic Response

|Type|Description|
|----|-----------|
|[tns:ds_setup_result](../data_types/r_ds_setup_result.md#) | Returns data about the new data source. |

**Parent topic:** [Methods](../methods/c_data_sources_methods.md)


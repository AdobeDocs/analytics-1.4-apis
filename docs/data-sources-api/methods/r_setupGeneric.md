# SetupGeneric

Creates a new Generic Data Source.

For more information about Data Source types, see "Accessing Data Sources" in the *Data Sources User Guide*.

## DataSource.SetupGeneric Parameters

|Parameter|Type|Required|Description|
|---------|----|--------|-----------|
|**reportSuiteID** |`xsd:string` |Yes| The ID of the report suite where you want to create this data source. |
|**dataSourceID** |`xsd:int` |Yes| The ID of the new Data Source. |
|**dataSourceType** |`xsd:int` |No| Specifies the type of data source to create. For information about data source types, see "Accessing Data Sources" in the *Data Sources User Guide*. |
|**dataSourceSettings** |[tns:ds\_generic\_settings](../data_types/r_ds_generic_settings.md#) |No| The new data source settings. |

## DataSource.SetupGeneric Response

|Type|Description|
|----|-----------|
|[tns:ds\_setup\_result](../data_types/r_ds_setup_result.md#) | Returns data about the new data source. |

**Parent topic:** [Methods](../methods/c_data_sources_methods.md)


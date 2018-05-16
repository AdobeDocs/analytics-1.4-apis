# Deactivate

Deactivates the specified data source.

## DataSource.Deactivate Parameters

|Parameter|Type|Required|Description|
|---------|----|--------|-----------|
|**reportSuiteID** |`xsd:string` |Yes| The ID of the report suite where you want to create this data source. |
|**dataSourceID** |`xsd:string` |Yes| The Data Source ID. You can get this ID by calling [DataSource.GetIDs](r_getIDs.md#). |

## DataSource.Deactivate Response

|Type|Description|
|----|-----------|
|[tns:status](../data_types/r_status.md#) | Indicates if the call was successful. |

**Parent topic:** [Methods](../methods/c_data_sources_methods.md)


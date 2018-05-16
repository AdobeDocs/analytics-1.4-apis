# Restart

Restarts processing of the specified Full Processing data source.

## DataSource.Restart Parameters

If a Full Processing file has errors in it, Data Sources "pauses" during the file processing so you can correct the errors. `DataSource.Restart` informs the system that the file is fixed and processing can continue.

|Parameter|Type|Required|Description|
|---------|----|--------|-----------|
|**reportSuiteID** |`xsd:string` |Yes| The ID of the report suite where you want to create this data source. |
|**dataSourceID** |`xsd:string` |Yes| The Data Source ID. You can get this ID by calling [DataSource.GetIDs](r_getIDs.md#). |

## DataSource.Restart Response

|Type|Description|
|----|-----------|
|[tns:status](../data_types/r_status.md#) | Indicates if the call was successful. |

**Parent topic:** [Methods](../methods/c_data_sources_methods.md)


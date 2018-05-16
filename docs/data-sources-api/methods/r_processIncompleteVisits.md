# ProcessIncompleteVisits

Instructs Data Sources to process data related to site visits that did not end in the current file or data block.

## DataSource.ProcessIncompleteVisits Parameters

Visits can span files or data blocks, so Data Sources holds these incomplete visits aside until you instruct it to process those visits. This method is applicable only to Full Processing Data Sources, and closes any open visits at the end of the data block sent prior to calling ProcessIncompleteVisits.

|Parameter|Type|Required|Description|
|---------|----|--------|-----------|
|**reportSuiteID** |`xsd:string` |Yes| The ID of the report suite where you want to create this data source. |
|**dataSourceID** |`xsd:string` |Yes| The Data Source ID. You can get this ID by calling [DataSource.GetIDs](r_getIDs.md#). |

## DataSource.ProcessIncompleteVisits Response

|Type|Description|
|----|-----------|
|[tns:status](../data_types/r_status.md#) | Indicates if the call was successful. |

**Parent topic:** [Methods](../methods/c_data_sources_methods.md)


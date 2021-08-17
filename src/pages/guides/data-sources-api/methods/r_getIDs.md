# GetIDs

Returns a list of data source IDs associated with the specified report suite.

For more information about Data Source types, see "Accessing Data Sources" in the *Data Sources User Guide*.

## DataSource.GetIDs Parameters

|Parameter|Type|Required|Description|
|---------|----|--------|-----------|
|**reportSuiteID** |`xsd:string` |Yes| The ID of the report suite where you want to create this data source. |

## DataSource.GetIDs Response

|Type|Description|
|----|-----------|
|[tns:simpleDataSourceArray](../data_types/r_simple_data_source_array.md#) | A list of data source IDs. |

**Parent topic:** [Methods](../methods/c_data_sources_methods.md)


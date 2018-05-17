# reportDefinitionSearch

A structure that defines a keyword search to use in the report definition.

|Name|Type|Description|
|----|----|-----------|
|**type** |[reportDefinitionSearchType](r_reportDefinitionSearchType.md#) |The type of search to use.|
|**keywords** |`array(xsd:string)` | A list of keywords to include or exclude from the search, based on the type. Keyword values can also leverage the following special characters to define advanced search criteria: \* Wild Card \(e.g. "page\*.html"\) ^ Starts With \(e.g. "^http://"\) $ Ends With \(e.g. ".html$"\) |
|**searches** |[reportDefinitionSearches](r_reportDefinitionSearches.md#) |A list of subsearches. This allows you to build complex report searches.|

**Parent topic:** [Data Types](../data_types/c_data_types.md)


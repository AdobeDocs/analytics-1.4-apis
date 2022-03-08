# SaveGeoSegmentation

Saves ad hoc analysis (formerly Discover) access for the requested report suites.

## ReportSuite.SaveDiscoverEnabled parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`array[string]` |A list of report suite IDs.|
|**geo_segmentation** |`xsd:boolean` |Enables or disables geoSegmentation reports.|
|**vista_enabled** |`xsd:boolean` |Enables or disables VISTA geoSegmentation reports.|

## ReportSuite.SaveDiscoverEnabled response

|Type|Description|
|----|-----------|
|`xsd:boolean` |Returns `true` if the update operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


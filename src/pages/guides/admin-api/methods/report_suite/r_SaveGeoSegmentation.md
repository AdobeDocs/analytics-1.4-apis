# SaveGeoSegmentation

Saves ad hoc analysis \(formerly Discover\) access for the requested report suites.

## ReportSuite.SaveDiscoverEnabled parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` |A list of report suite IDs.|
|**geo\_segmentation** |`xsd:boolean` |Enables or disables geoSegmentation reports.|
|**vista\_enabled** |`xsd:boolean` |Enables or disables VISTA geoSegmentation reports.|

## ReportSuite.SaveDiscoverEnabled response

|Type|Description|
|----|-----------|
|`xsd:boolean` |Returns `true` if the update operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


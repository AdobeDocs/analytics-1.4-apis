# DeleteInternalURLFilters

Deletes the internal URL filters for each of the specified report suites.

## ReportSuite.DeleteInternalURLFilters parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`array(xsd:string)` |A list of report suite IDs.|
|**internal_url_filters** |`array(xsd:string)` |A list of URLs to delete from the internal URL filters list.|

## ReportSuite.DeleteInternalURLFilters response

|Type|Description|
|----|-----------|
|`xsd:boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


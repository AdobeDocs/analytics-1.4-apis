# DeleteInternalURLFilters

Deletes the internal URL filters for each of the specified report suites.

## ReportSuite.DeleteInternalURLFilters parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` |A list of report suite IDs.|
|**filters** |`array(xsd:string)` |A list of URLs to delete from the internal URL filters list.|

## ReportSuite.DeleteInternalURLFilters response

|Type|Description|
|----|-----------|
|`xsd:int` |Returns `1` if the operation is successful. Otherwise, returns `0`.|

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


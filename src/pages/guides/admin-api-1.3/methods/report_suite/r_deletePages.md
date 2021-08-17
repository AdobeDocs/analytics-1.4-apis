# Deletepages

Deletes pages from each of the specified report suites.

## ReportSuite.DeletePages parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` |A list of report suite IDs.|
|**page\_id\_list** |`array(xsd:int)` |A list of page IDs. Get a list of page IDs for a report suite by calling `ReportSuite.GetPages`.|

## ReportSuite.DeletePages response

|Type|Description|
|----|-----------|
|`xsd:int` |Returns `1` if the operation is successful. Otherwise, returns `0`.|

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


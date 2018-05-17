# SaveBaseURL

Changes the specified base URL to each of the specified report suites.

## ReportSuite.SaveBaseURL parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` |A list of report suite IDs.|
|**base\_url** |`xsd:string` |The base URL that you want to assign to the report suites.|

## ReportSuite.SaveBaseURL response

|Type|Description|
|----|-----------|
|`xsd:int` |Returns `1` if the operation is successful. Otherwise, returns `0`.|

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


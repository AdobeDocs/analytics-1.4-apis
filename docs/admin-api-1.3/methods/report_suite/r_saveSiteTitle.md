# SaveSiteTitle

Updates the Site Title \(friendly name\) setting for the specified report suite.

## ReportSuite.SaveSiteTitle parameters

**Note:** Do not use the same title for multiple report suites.

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` |A list of report suite IDs.|
|**site\_title** |`xsd:string` |The friendly name to apply to the report suites.|

## ReportSuite.SaveSiteTitle response

|Type|Description|
|----|-----------|
|`xsd:int` |Returns `1` if the operation is successful. Otherwise, returns `0`.|

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


# SaveDefaultPage

Updates the a default page setting for each of the specified report suites.

## ReportSuite.SaveDefaultPage parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` |A list of report suite IDs.|
|**default\_page** |`xsd:string` |The default Web page. For example, `index.html`.|

## ReportSuite.SaveDefaultPage response

|Type|Description|
|----|-----------|
|`xsd:int` |Returns `1` if the update operation is successful. Otherwise, returns `0`.|

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


# SaveSiteTitle

Updates the Site Title (friendly name) setting for the specified report suite.

## ReportSuite.SaveSiteTitle parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`array(xsd:string)` | A list of report suite IDs. Note that this parameter accepts a list of report suites to maintain consistency between the Admin APIs, however, you should not assign the same site_title to multiple report suites. |
|**site_title** |`xsd:string` |The friendly name to apply to the report suites.|

## ReportSuite.SaveSiteTitle response

|Type|Description|
|----|-----------|
|`xsd:boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


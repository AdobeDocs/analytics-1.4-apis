# DeleteIPAddressExclusion

Delete an IP exclusion entry for a given report suite.

## ReportSuite.DeleteIPAddressExclusion parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`array(xsd:string)` |A list of report suite IDs.|
|**ip_address** |`xsd:string` |The IP address to remove from the IP address exclusions list.|

## ReportSuite.DeleteIPAddressExclusion response

|Type|Description|
|----|-----------|
|`xsd:boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


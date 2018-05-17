# DeleteIPAddressExclusions

Deletes IP addresses from the IP address exclusions list for each of the specified report suites.

## ReportSuite.DeleteIPAddressExclusions parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` |A list of report suite IDs.|
|**ip\_list** |`array(xsd:string)` |A list of IP addresses to remove from the IP address exclusions list.|

## ReportSuite.DeleteIPAddressExclusions response

|Type|Description|
|----|-----------|
|`xsd:int` |Returns `1` if the operation is successful. Otherwise, returns `0`.|

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


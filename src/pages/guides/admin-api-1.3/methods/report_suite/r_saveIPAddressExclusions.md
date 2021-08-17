# SaveIPAddressExclusions

Adds IP addresses to the IP address exclusion list for each of the specified report suites. There is a limit of five IP address exclusions per report suite. The ip\_exclusions data type provides the ability to specify a comment when excluding an IP address \(or range\).

## ReportSuite.SaveIPAddressExclusions parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` |A list of report suite IDs.|
|**ip\_list** |array([tns:ip\_exclusions](../../data_types/r_ip_exclusions.md#)) |A list of internal IP addresses that you do not want to include in website tracking.|

## ReportSuite.SaveIPAddressExclusions response

|Type|Description|
|----|-----------|
|`xsd:int` |Returns `1` if the operation is successful. Otherwise, returns `0`.|

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


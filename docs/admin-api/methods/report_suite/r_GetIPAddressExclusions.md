# GetIPAddressExclusions

Returns a list of IP addresses excluded from website tracking for each of the specified report suites.

## ReportSuite.GetIPAddressExclusions parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid\_list** | `array(xsd:string)` |A list of report suite IDs.|

## ReportSuite.GetIPAddressExclusions response

|Type|Description|
|----|-----------|
| [report\_suite\_ip\_address\_exclusions\_array](../../data_types/r_report_suite_ip_address_exclusions_array.md#) - An array of [report\_suite\_ip\_address\_exclusions](../../data_types/r_report_suite_ip_address_exclusions.md#)|A list of report suites with the IP address exclusions for each.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


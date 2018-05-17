# GetIPAddressExclusions

Returns a list of IP addresses excluded from website tracking for each of the specified report suites.

## ReportSuite.GetIPAddressExclusions parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` |A list of report suite IDs.|

## ReportSuite.GetIPAddressExclusions response

|Type|Description|
|----|-----------|
|[tns:rscollection\_ip\_exclusion](../../data_types/r_rscollection_ip_exclusions.md#) |A list of report suites with the IP address exclusions for each.|

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


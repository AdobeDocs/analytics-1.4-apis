# SaveIPAddressExclusion

Add an IP address to the IP address exclusion list for each of the specified report suites.

## ReportSuite.SaveIPAddressExclusion parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` |A list of report suite IDs.|
| **ip_address** | `string` | An IP address that you do not want to include in website tracking. You can use wildcard indicators (*) to exclude a range of addresses. For example, 0.0.*.0 would exclude all IP addresses between 0.0.0.0 and 0.0.255.0. You may exclude up to 50 different IP address strings. |
|**comment** |`string` | A comment on the IP address that was excluded. |

## ReportSuite.SaveIPAddressExclusion response

|Type|Description|
|----|-----------|
| `boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


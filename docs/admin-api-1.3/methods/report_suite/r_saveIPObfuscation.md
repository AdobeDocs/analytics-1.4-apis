# SaveIPObfuscation

Updates the IP address obfuscation settings for each of the specified report suites.

## ReportSuite.SaveIPObfuscation parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` | A list of report suite IDs. |
|**ip\_obfuscation** |`xsd:int` | Enables/Disables IP obfuscation. Supported values include: `1`: Enable IP obfuscation. `0`: Disables IP obfuscation. |

## ReportSuite.SaveIPObfuscation response

|Type|Description|
|----|-----------|
|`xsd:int` | Returns `1` if the operation is successful. Otherwise, returns `0`. |

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


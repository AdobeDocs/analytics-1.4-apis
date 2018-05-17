# SaveIPObfuscation

Updates the IP address obfuscation settings for each of the specified report suites.

## ReportSuite.SaveIPObfuscation parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` | A list of report suite IDs. |
|**ip\_obfuscation** |[ip\_obfuscation\_enum](../../data_types/r_ip_obfuscation_enum.md#) | The IP obfuscation setting, one of the following values of type `xsd:string`: `obfuscated` `none` `ip\_removed`. These settings correspond to the **IP Obfuscation** settings in **Admin Tools** \> **Report Suite** \> **General Account settings**.|

## ReportSuite.SaveIPObfuscation response

|Type|Description|
|----|-----------|
|`xsd:boolean` | Returns `true` if the operation is successful. |

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


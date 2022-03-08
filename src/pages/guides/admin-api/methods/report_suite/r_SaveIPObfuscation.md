# SaveIPObfuscation

Updates the IP address obfuscation settings for each of the specified report suites.

## ReportSuite.SaveIPObfuscation parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`array[string]` | A list of report suite IDs. |
|**ip_obfuscation** |[ip_obfuscation_enum](../../data_types/r_ip_obfuscation_enum.md#) | The IP obfuscation setting, one of the following values of type `string`: `obfuscated` `none` `ip_removed`. These settings correspond to the **IP Obfuscation** settings in **Admin Tools** > **Report Suite** > **General Account settings**.|

## ReportSuite.SaveIPObfuscation response

|Type|Description|
|----|-----------|
|`xsd:boolean` | Returns `true` if the operation is successful. |

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


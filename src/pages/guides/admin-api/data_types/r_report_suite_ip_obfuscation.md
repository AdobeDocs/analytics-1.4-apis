# report_suite_ip_obfuscation

Data structure that contains information about a report suite's IP obfuscation settings.

|Element|Type|Description|
|-------|----|-----------|
|**rsid** |`xsd:string` | The report suite ID. |
|**site_title** |`xsd:string` | The report suite friendly name. |
|**ip_obfuscation** |[ip_obfuscation_enum](r_ip_obfuscation_enum.md#) | The IP obfuscation setting, one of the following values of type `xsd:string`: obfuscated, none, ip_removed. These settings correspond to the **IP Obfuscation** settings in **Admin Tools** > **Report Suite** > **General Account settings**. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


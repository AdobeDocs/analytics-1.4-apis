# report\_suite\_ip\_obfuscation

Data structure that contains information about a report suite's IP obfuscation settings.

|Element|Type|Description|
|-------|----|-----------|
|**rsid** |`xsd:string` | The report suite ID. |
|**site\_title** |`xsd:string` | The report suite friendly name. |
|**ip\_obfuscation** |[ip\_obfuscation\_enum](r_ip_obfuscation_enum.md#) | The IP obfuscation setting, one of the following values of type `xsd:string`: obfuscated, none, ip\_removed. These settings correspond to the **IP Obfuscation** settings in **Admin Tools** \> **Report Suite** \> **General Account settings**. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


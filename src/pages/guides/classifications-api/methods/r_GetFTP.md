# GetFTP

Returns a list of the classifications FTP accounts that are configured for a company.

## Classifications.GetFTP Request

none.

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`tns:string_array` | report suites for which you want to retrieve FTP information. |

## Classifications.GetFTP Response

| Type | Description |
|--------|---------------|
| [classifications_report_suite_ftp_array](../data_types/r_classifications_report_suite_ftp_array.md#) - An array of [classifications_report_suite_ftp](../data_types/r_classifications_report_suite_ftp.md#).| Struct containing details with the FTP accounts for a report suite. |

**Parent topic:** [Methods](../methods/classifications_methods.md)


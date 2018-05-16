# saint\_ftp

Complete details for a SAINT FTP account.

|Element|Type|Description|
|-------|----|-----------|
|`saint_ftp_id` |`xsd:int` | A unique identifier for the FTP account. |
|`description` |`xsd:string` | a textual description for the FTP account. |
|`email` |`xsd:string` | the email account to notify when imports are finished. |
|`rsid_list` |`xsd:string_array` | report suites to which data is imported. |
|`relation_id` |`xsd:int` | `relation_id` that you want to import or export \(e.g. 101=evar1, 51=product, etc\) |
|`overwrite` |`xsd:boolean` | if true, keys that already exists will always be overwritten by new keys. |
|`export` |`xsd:boolean` | if true, the import will be automatically exported after import. |
|`ftp_host` |`xsd:string` | the name of the FTP host. |
|`ftp_username` |`xsd:string` | the username on the FTP account that was created. |
|`ftp_password` |`xsd:string` | the password "" "" |

**Parent topic:** [Data Types](../data_types/c_data_types.md)


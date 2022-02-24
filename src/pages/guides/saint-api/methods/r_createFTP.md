# CreateFTP

Creates a SAINT Import FTP account.

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`relation_id` |`xsd:int` | `relation_id` that you want to import or export (e.g. 101=evar1, 51=product, etc) |
|`rsid_list` |`tns:string_array` | report suites to which data is imported. |
|`description` |`xsd:string` | a textual description for the FTP account. |
|`email` |`xsd:string` | the email account to notify when imports are finished. |
|`overwrite` |`xsd:boolean` | if true, keys that already exists will always be overwritten by new keys. |
|`export` |`xsd:boolean` | if true, the import will be automatically exported after import. |

## Response

| Type | Description |
|--------|---------------|
|[ftp_info](../data_types/r_ftp_info.md#) | Contains connection details for the created FTP account. |

**Parent topic:** [Methods](../methods/c_saint_methods.md)


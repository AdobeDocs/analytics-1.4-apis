# SaveDataWarehouseDisplay

Saves the data warehouse display for the requested report suites.

## ReportSuite.SaveDataWarehouseDisplay parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` |A list of report suite IDs.|
|**data\_warehouse\_display** |[data\_warehouse\_display\_type\_enum](../../data_types/r_data_warehouse_display_type_enum.md#) | Data warehouse display setting, one of the following values of `xsd:string`: `none` `all-logins-have-access` `grayed-out-tab` `admins-only` `disabled` |

## ReportSuite.SaveDataWarehouseDisplay response

|Type|Description|
|----|-----------|
|`xsd:boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


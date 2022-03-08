# SaveDataWarehouseDisplay

Saves the data warehouse display for the requested report suites.

## ReportSuite.SaveDataWarehouseDisplay parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`string[]` |A list of report suite IDs.|
|**data_warehouse_display** |[data_warehouse_display_type_enum](../../data_types/r_data_warehouse_display_type_enum.md#) | Data warehouse display setting, one of the following values of `string`: `none` `all-logins-have-access` `grayed-out-tab` `admins-only` `disabled` |

## ReportSuite.SaveDataWarehouseDisplay response

|Type|Description|
|----|-----------|
|`boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


# GetDataWarehouseDisplay

Returns if data warehouse is enabled for the requested report suites.

## ReportSuite.GetDataWarehouseDisplay parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`string[]` |A list of report suite IDs.|

## ReportSuite.GetDataWarehouseDisplay response

|Type|Description|
|----|-----------|
| [report_suite_data_warehouse_display[]](../../data_types/r_report_suite_data_warehouse_display_array.md#) - An array of [report_suite_data_warehouse_display](../../data_types/r_report_suite_data_warehouse_display.md#) |A list of report suites and their associated data warehouse display setting.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


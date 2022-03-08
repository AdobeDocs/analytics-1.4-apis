# GetBaseCurrency

Retrieves a list of supported currency codes for each of the specified report suites.

## ReportSuite.GetBaseCurrency parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` |A list of report suite IDs.|

## ReportSuite.GetBaseCurrency response

|Type|Description|
|----|-----------|
|  [report_suite_base_currency_array](../../data_types/r_report_suite_base_currency_array.md#) - An array of [report_suite_base_currency](../../data_types/r_report_suite_base_currency.md#). |A list of report suites, site name, and their supported 3-letter currency codes. For example: US Dollar = USD.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


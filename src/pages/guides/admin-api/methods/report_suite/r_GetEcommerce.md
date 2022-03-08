# GetEcommerce

Retrieves the commerce level for each of the specified report suites.

## ReportSuite.GetEcommerce parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `array[string]` |A list of report suite IDs.|

## ReportSuite.GetEcommerce response

|Type|Description|
|----|-----------|
| [report_suite_ecommerce_array](../../data_types/r_report_suite_ecommerce_array.md#) - an array of [report_suite_ecommerce](../../data_types/r_report_suite_ecommerce.md#) |List of report suites with the commerce level of each (see the `ecommerce` parameter in [SaveEcommerce](r_SaveEcommerce.md#)).|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


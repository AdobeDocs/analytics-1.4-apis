# GetBaseCurrency

Retrieves a list of supported currency codes for each of the specified report suites.

## ReportSuite.GetBaseCurrency parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` |A list of report suite IDs.|

## ReportSuite.GetBaseCurrency response

|Type|Description|
|----|-----------|
|array([base\_currency](../../data_types/r_base_currency.md#)) |A list of report suites and their supported 3-letter currency codes. For example: US Dollar = USD.|

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


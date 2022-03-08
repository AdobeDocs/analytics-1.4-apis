# SaveBaseCurrency

Changes the base currency for each of the specified report suites.

## ReportSuite.SaveBaseCurrency parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`string[]` |A list of report suite IDs.|
|**base_currency** |`string` |The three-letter currency code to assign to the specified report suites. For example, USD = US Dollar.|

## ReportSuite.SaveBaseCurrency response

|Type|Description|
|----|-----------|
|`int` |Returns `1` if the update operation is successful. Otherwise, returns `0`.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


# GetLocalization

Retrieves the localization (multi-byte character) settings for each of the specified report suites.

## ReportSuite.GetLocalization parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `array(xsd:string)` |A list of report suite IDs.|

## ReportSuite.GetLocalization response

|Type|Description|
|----|-----------|
| [report_suite_localization_array](../../data_types/r_report_suite_localization_array.md#) - An array of [report_suite_localization](../../data_types/r_report_suite_localization.md#) |List of report suites with localization settings for each.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


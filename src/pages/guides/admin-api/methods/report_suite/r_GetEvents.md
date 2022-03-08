# GetEvents

Retrieves the success events for each of the specified report suites.

## ReportSuite.GetEvents parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `array[string]` |A list of report suite IDs.|

## ReportSuite.GetEvents response

|Type|Description|
|----|-----------|
| [report_suite_events_array](../../data_types/r_report_suite_events_array.md#) - an array of [report_suite_events](../../data_types/r_report_suite_events.md#). |List of report suites with the success events for each.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


# GetDiscoverEnabled

Returns whether ad hoc analysis (formerly Discover) is enabled for the requested report suites.

## ReportSuite.GetDiscoverEnabled parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`string[]` |A list of report suite IDs.|

## ReportSuite.GetDiscoverEnabled response

|Type|Description|
|----|-----------|
| [report_suite_discover[]](../../data_types/r_report_suite_discover_array.md#) - An array of [report_suite_discover](../../data_types/r_report_suite_discover.md#) |A list of report suites and their associated data warehouse display setting.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


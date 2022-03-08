# GetSegments

Retrieves the segments that are available in one or more report suites.

## ReportSuite.GetSegments parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` | (Required) The list of report suite IDs for which you want to retrieve segments.

 |

## ReportSuite.GetSegments response

|Type|Description|
|----|-----------|
|[report_suite_segments[]](../../data_types/r_report_suite_segments_array.md#) - An array of [report_suite_segments](../../data_types/r_report_suite_segments.md#) |List that includes each report suite's segments.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


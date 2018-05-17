# GetSettings

Retrieves a broad range of report suite meta data for each of the specified report suites.

## ReportSuite.GetSettings parameters

The GetSettings method response aggregates information that is available individually from the following report suite methods:

-    `ReportSuite.GetEcommerce` 
-    `ReportSuite.GetEvars` 
-    `ReportSuite.GetCorrelations` 
-    `ReportSuite.GetSuccessEvents` 
-    `ReportSuite.GetProps` 
-    `ReportSuite.GetClassifications` 
-    `ReportSuite.GetCustomCalendar` 
-    `ReportSuite.GetAvailableElements` 
-    `Report.GetMetrics` 

|Name|Type|Description|
|----|----|-----------|
| **locale** | [reportDefinitionLocale](../../data_types/r_ReportDefinitionLocale.md#) | One of the following locales: en\_US de\_DE es\_ES fr\_FR jp\_JP ko\_KR zh\_CN zh\_TW|
| **rsid\_list** | `array(xsd:string)` | A list of report suite IDs.|

## ReportSuite.GetSettings response

|Type|Description|
|----|-----------|
| [report\_suite\_settings\_array](../../data_types/r_report_suite_settings_array.md#) - An array of [report\_suite\_settings](../../data_types/r_report_suite_settings.md#) | A list of report suites with meta data for each. |

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


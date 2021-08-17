# GetSettings

Retrieves a broad range of report suite meta data for each of the specified report suites.

## ReportSuite.GetSettings parameters

The GetSettings method response aggregates information that is available individually from the following report suite methods:

-   `ReportSuite.GetEcommerce` 
-   `ReportSuite.GetEcommerce` 
-   `ReportSuite.GetEVars` 
-   `ReportSuite.GetCorrelations` 
-   `ReportSuite.GetSuccessEvents` 
-   `ReportSuite.GetTrafficVars` 
-   `ReportSuite.GetClassifications` 
-   `ReportSuite.GetCustomCalendar` 
-   `ReportSuite.GetAvailableElements` 
-   `ReportSuite.GetAvailableMetrics` 

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` | A list of report suite IDs. |

## ReportSuite.GetSettings response

|Type|Description|
|----|-----------|
|[tns:rscollection\_settings](../../data_types/r_rscollection_settings.md#) | A list of report suites with meta data for each. |

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


# GetAvailableMetrics

Retrieves the list of available metrics for each of the specified report suites. For each metric in the response, `GetAvailableMetrics` returns the metric name and display name \("friendly" name\).

## ReportSuite.GetAvailableMetrics parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` |A list of report suite IDs.|
|**return\_datawarehouse\_metrics** |`xsd:int` | \(Optional\) Instructs SiteCatalyst to return a list of Data Warehouse metrics as part of the response. Supported values include: `1`: Enabled \(include Data Warehouse metrics\) `0`: Disabled \(do not include Data Warehouse metrics\) |

## ReportSuite.GetAvailableMetrics response

|Type|Description|
|----|-----------|
|[tns:rscollection\_metrics](../../data_types/r_rscollection_metrics.md#) |List of report suites with the metrics available in each.|

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


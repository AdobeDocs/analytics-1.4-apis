# GetAvailableElements

Retrieves the list of available elements for each of the specified report suites. For each element in the response, `GetAvailableElements` returns the element name and display name \("friendly" name\).

## ReportSuite.GetAvailableElements parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` |A list of report suite IDs.|
|**return\_datawarehouse\_elements** |`xsd:int` | \(Optional\) Instructs SiteCatalyst to return a list of Data Warehouse elements as part of the response. Supported values include: `1`: Enabled \(include Data Warehouse elements\) `0`: Disabled \(do not include Data Warehouse elements\) |

## ReportSuite.GetAvailableElements response

|Type|Description|
|----|-----------|
|[tns:rscollection\_elements](../../data_types/r_rscollection_elements.md#) |List of report suites with the elements available in each.|

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


# SaveUIVisibility

Updates the report visibility for each of the specified report suites.

## ReportSuite.SaveUIVisibility parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` | A list of report suite IDs. |
|**state** |`xsd:int` | The report visibility status. Supported values include: `0`: Disabled \(not visible\) `1`: Enabled \(visible\) |
|**ui\_element** |`xsd:string` | The report where you want to set visibility. Supported reports include: |

-   `visitor_detail` 
-   `last_visitors` 
-   `site_sections` 
-   `servers` 
-   `exit_links` 
-   `custom_links` 
-   `file_downloads` 
-   `key_visitors` 
-   `key_visitor_pages` 


## ReportSuite.SaveUIVisibility response

|Type|Description|
|----|-----------|
|`xsd:boolean` | Returns `TRUE` if the operation is successful. Otherwise, returns `FALSE`. |

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


# GetPages

Retrieves a list of pages from each of the specified report suites.

## ReportSuite.GetPages parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` | A list of report suite IDs. |
|**limit** |`xsd:int` | \(Optional\) The maximum number of pages to return with this request. Retrieving all pages for a report suite at once is not recommended. |
|**page\_search** |`xsd:string` | A search string to use as a filter when selecting the web pages to return with this request. |
|**sc\_period** |`xsd:date` | The time period in which you want to search for web pages. |
|**start\_point** |`xsd:int` | The first page to get. Use `start_point` with `limit` to configure paged results. For example, to get 50 pages at a time, set `limit` to 50 and `start_point` to 1. To get the second set of pages, set `limit` to 50 and `start_point` to 51. |

## ReportSuite.GetPages response

|Type|Description|
|----|-----------|
|array([tns:report\_suite\_pages](../../data_types/r_report_suite_pages.md#)) | List of report suites with the resulting page list from each. The response includes a page ID for use with `ReportSuite.DeletePages`. |

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


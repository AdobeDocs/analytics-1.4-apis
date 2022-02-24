# GetReportDescription

Retrieves the name, associated report type, and report description for the supplied bookmark ID. This report description can then be used to retrieve report data via the Report API. An error is returned for unsupported bookmark types.

Use Bookmark.[Bookmark.GetBookmarks](r_GetBookmarks.md#) or [Bookmark.GetDashboards](r_GetDashboards.md#) to retrieve the bookmark ID.

## Bookmark.GetReportDescription request

|Name|Type|Description|
|----|----|-----------|
| **bookmark_id** |`xsd:int` |(Required) The ID of the bookmark for which you want to retrieve the report description.|

## Bookmark.GetReportDescription response

|Name|Type|Description|
|----|----|-----------|
| **name** |`xsd:string` |Bookmark name.|
| **type** |`xsd:string` |Type of report in the saved bookmark. Possible values are overtime, ranked, or trended.|
|**reportDescription** |[Report.reportDescription](../../../reporting-api/data_types/r_reportDescription.md) |Report description to send to the report API.|

**Parent topic:** [Bookmark](../../methods/bookmark/c_methods_bookmark.md)


# Bookmark methods

Allows you to create, edit, or delete bookmarks.

## GetBookmarks

Retrieves a list of bookmarks for the authenticated user.

`POST https://api.omniture.com/admin/1.4/rest/?method=Bookmark.GetBookmarks`

Parameters `folder_limit` and `folder_offset` are optional, and only necessary if the total bookmark count exceeds 500, which is the limit. Use them to select a certain range of folders out of the entire set.

|Parameter|Type|Description|
|----|----|-----------|
| **`folder_limit`** |`int` | (Optional) Limit the retrieval to the specified number of bookmarks. |
| **`folder_offset`** |`int` | (Optional) Start the bookmark retrieval at the specified offset. |

Returns `bookmark_folder[]`, a list of bookmark folders and the bookmarks that are contained in each folder.

## GetDashboards

Retrieves all the dashboards for the authenticated web services user, with bookmarks included.

`POST https://api.omniture.com/admin/1.4/rest/?method=Bookmark.GetBookmarks`

Parameters `dashboard_limit` and `dashboard_offset` are optional, and only necessary if the total bookmark count exceeds 500, which is the limit. Use them to select a certain range of bookmarks out of the entire set.

|Parameter|Type|Description|
|----|----|-----------|
|**`dashboard_limit`** |`int` |(Optional) Limit the retrieval to the specified number of dashboards.|
|**`dashboard_offset`** |`int` |(Optional) Start the dashboard retrieval at the specified offset.|

Returns `dashboard[]`, the contents of the dashboard.

## GetReportDescription

Retrieves the name, associated report type, and report description for the supplied bookmark ID. This report description can then be used to retrieve report data via the Report API. An error is returned for unsupported bookmark types.

`POST https://api.omniture.com/admin/1.4/rest/?method=Bookmark.GetReportDescription`

Use `Bookmark.GetBookmarks` or `Bookmark.GetDashboards` to retrieve the bookmark ID.

|Parameter|Type|Description|
|----|----|-----------|
| **`bookmark_id`** |`int` |(Required) The ID of the bookmark for which you want to retrieve the report description.|

|Response|Type|Description|
|----|----|-----------|
| `name` |`string` |Bookmark name.|
| `type` |`string` |Type of report in the saved bookmark. Possible values are overtime, ranked, or trended.|
|`reportDescription` |`string`|Report description to send to the report API.|

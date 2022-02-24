# GetDashboards

Retrieves all the dashboards for the authenticated web services user, with bookmarks included.

Parameters `dashboard_limit` and `dashboard_offset` are optional, and only necessary if the total bookmark count exceeds 500, which is the limit. Use them to select a certain range of bookmarks out of the entire set.

## Bookmark.GetDashboards request

|Name|Type|Description|
|----|----|-----------|
|**dashboard_limit** |`xsd:int` |(Optional) Limit the retrieval to the specified number of dashboards.|
|**dashboard_offset** |`xsd:int` |(Optional) Start the dashboard retrieval at the specified offset.|

## Bookmark.GetDashboards response

|Type|Description|
|----|-----------|
| [dashboard_array](../../data_types/r_dashboard_array.md#) - an array of [dashboard](../../data_types/r_dashboard.md#)|Contents of the dashboard.|

**Parent topic:** [Bookmark](../../methods/bookmark/c_methods_bookmark.md)


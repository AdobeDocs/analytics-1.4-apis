# GetBookmarks

Retrieves a list of bookmarks for the authenticated user.

Parameters `folder_limit` and `folder_offset` are optional, and only necessary if the total bookmark count exceeds 500, which is the limit. Use them to select a certain range of folders out of the entire set.

## Bookmark.GetBookmarks parameters

|Name|Type|Description|
|----|----|-----------|
|**folder\_limit** |`xsd:int` |\(optional\) Limit the retrieval to the specified number of bookmarks.|
|**folder\_offset** |`xsd:int` |\(optional\) Start the bookmark retrieval at the specified offset.|

## Bookmark.GetBookmarks response

|Type|Description|
|----|-----------|
|`bookmark_folders` |Array of [bookmark\_folder](../../data_types/r_bookmark_folder.md#).|

**Parent topic:** [Bookmark](../../methods/bookmark/c_api_admin_methods_bookmark.md)


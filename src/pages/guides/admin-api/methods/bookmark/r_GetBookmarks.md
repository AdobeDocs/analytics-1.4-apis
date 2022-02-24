# GetBookmarks

Retrieves a list of bookmarks for the authenticated user.

Parameters `folder_limit` and `folder_offset` are optional, and only necessary if the total bookmark count exceeds 500, which is the limit. Use them to select a certain range of folders out of the entire set.

## Bookmark.GetBookmarks parameters

|Name|Type|Description|
|----|----|-----------|
|**folder_limit** |`xsd:int` |(Optional) Limit the retrieval to the specified number of bookmarks.|
|**folder_offset** |`xsd:int` |(Optional) Start the bookmark retrieval at the specified offset.|

## Bookmark.GetBookmarks response

|Type|Description|
|----|-----------|
| [bookmark_folder_array](../../data_types/r_bookmark_folder_array.md#) - An array of [bookmark_folder](../../data_types/r_bookmark_folder.md#).|Bookmark folders and the bookmarks that are contained in each folder.|

**Parent topic:** [Bookmark](../../methods/bookmark/c_methods_bookmark.md)


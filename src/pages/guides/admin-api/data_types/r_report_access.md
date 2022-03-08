# report_access

Data structure that contains details about the reports that can be accessed by members of a permissions group.

|Element|Type|Description|
|-------|----|-----------|
|**category** |`string` | Report categories that can be accessed, one of the following values: ecommerce, traffic, paths, custom_paths, tools, search_center, tnt, video, web_services, admin_console, report_download, survey, advanced_reporting, social, social_publishing, data_connectors |
|**name** |`string` |  |
|**access** |`string` | One of the following values: none, custom, all |
| **report_ids** |`array[int]` | IDs of the reports that can be accessed by this permissions group.|

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


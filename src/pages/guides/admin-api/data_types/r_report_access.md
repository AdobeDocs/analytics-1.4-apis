# report\_access

Data structure that contains details about the reports that can be accessed by members of a permissions group.

|Element|Type|Description|
|-------|----|-----------|
|**category** |`xsd:string` | Report categories that can be accessed, one of the following values: ecommerce, traffic, paths, custom\_paths, tools, search\_center, tnt, video, web\_services, admin\_console, report\_download, survey, advanced\_reporting, social, social\_publishing, data\_connectors |
|**name** |`xsd:string` |  |
|**access** |`xsd:string` | One of the following values: none, custom, all |
| **report\_ids** |`array(xsd:int)` | IDs of the reports that can be accessed by this permissions group.|

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


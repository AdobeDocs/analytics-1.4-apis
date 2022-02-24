# classification_item

Data structure that contains information about a report suite's classifications.

|Element|Type|Description|
|-------|----|-----------|
| **name** | `xsd:string` | |
| **metric_id** | `xsd:string` | |
| **parent_name** | `xsd:string` |Contains the parent classification's `div_num` if this is a sub-classification; otherwise it is `0`.|
| **date_enabled** | `xsd:boolean` |Determines whether to treat this classification like a campaign.|
| **type** | `xsd:string` | Classification type, one of the following: text, numeric, numeric_percent, numeric_currency |
|**options** |`array(xsd:string)` | |
| **children** | `array(classification_item)` | A list of child `classification_item` objects.|

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


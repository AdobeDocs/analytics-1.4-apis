# classification\_item

Data structure that contains information about a report suite's classifications.

|Element|Type|Description|
|-------|----|-----------|
| **name** | `xsd:string` | |
| **metric\_id** | `xsd:string` | |
| **parent\_name** | `xsd:string` |Contains the parent classification's `div_num` if this is a sub-classification; otherwise it is `0`.|
| **date\_enabled** | `xsd:boolean` |Determines whether to treat this classification like a campaign.|
| **type** | `xsd:string` | Classification type, one of the following: text, numeric, numeric\_percent, numeric\_currency |
|**options** |`array(xsd:string)` | |
| **children** | `array(classification_item)` | A list of child `classification_item` objects.|

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


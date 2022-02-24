# prop

Data structure that contains information about a report suite's props (traffic variables).

|Element|Type|Description|
|-------|----|-----------|
|**id** |`xsd:string` | (Required) The traffic variable number. For example: prop17 |
|**name** |`xsd:string` | (Optional) The traffic variable name. |
|**enabled** |`xsd:boolean` | (Optional) Indicates if this traffic variable is enabled. |
|**pathing_enabled** |`xsd:boolean` | (Optional) Indicates if pathing is enabled for this traffic variable. |
|**list_enabled** |`xsd:boolean` | (Optional) Indicates if list property is enabled for this traffic variable ('TRUE','FALSE' are acceptable values) |
| **list_delimiter** | `xsd:string` | (Optional) the list delimiter used by this traffic variable. List Delimiters can only be one character and cannot be zero or a space. Also, if you enter a List Delimiter for a property, Channel Pathing and Visitors will NOT work for that property. |
| **participation_enabled** |`xsd:boolean` | (Optional) Indicates if participation metrics display is enabled for this traffic variable. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


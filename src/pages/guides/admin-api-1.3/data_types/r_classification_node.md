# classification\_node

Data structure that contains information about a single classification.

|Element|Type|Description|
|-------|----|-----------|
|**rel\_id** |`xsd:int` | Numeric ID of the metric being classified. |
|**userid** |`xsd:int` | Internal report suite identifier. |
|**div\_name** |`xsd:string` | Name of the classification. |
|**div\_num** |`xsd:int` | Numeric identifier of this classification for this metric. |
|**parent\_div\_num** |`xsd:int` | Item that this classification is classifying. Assign a value of `0` if it is simple classifying the metric directly. |
|**campaign\_view\_flag** |`xsd:int` | Whether or not to treat this classification like a campaign. |
|**type** |`xsd:int` | The classification type: `Numeric` or `Text`. |
|**order** |`xsd:int` | Numeric identifier of this classification within the classification heirarchy. |
|**child\_nodes** |`array(classification_node)` | A list of child `classification_node` objects. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


# segment

Details about a segment.

|Element|Type|Description|
|-------|----|-----------|
|`id` |`xsd:string` | Unique ID for this segment. |
|`name` |`xsd:string` | Name provided for the segment. Displayed in the UI. |
|`description` |`xsd:string` | Description provided for the segment. Displayed in the UI. |
|`reportSuiteID` |`xsd:string` | Identifies the report suite that was used to create the segment request. |
|`modified` |`xsd:string` | Date when the segment was last updated. |
|`compatibility` |`array(xsd:string)` | List of Analytics interfaces that are compatible with this segment. See [Segment Compatibility](http://microsite.omniture.com/t2/help/en_US/analytics/segment/?f=seg_compatibility). |
|`favorite` |`xsd:boolean` | Indicates if the current user has flagged this segment as a favorite. |
|`tags` |`array(xsd:string)` | Tags defined for the segment. |
|`shares` |[segment\_share\_array](r_segment_share_array.md#) - an array of [segment\_share](r_segment_share.md#) | Groups and users with which this segment is shared. |
|`owner` |`xsd:string` | Segment owner. |

**Parent topic:** [Data Types](../data_types/datatypes.md)


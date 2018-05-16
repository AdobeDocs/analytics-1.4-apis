# Save

Save a new segment or update an existing segment using the segment ID.

To save a new segment, you must provide a name, reportSuiteID, and a definition. To update an existing segment, you must provide the segmentID you want to update and at least one updated field. If you update the segment definition, you must also include the reportSuiteID since the definition is validated against the provided report suite.

## Segments.Save Parameters

|Name|Type|Description|
|----|----|-----------|
|`definition` |[segment\_definition](../data_types/r_segment_definition.md#) | \(Required\) Definition of the segment you want to save. |
|`name` |`xsd:string` | \(Required\) Segment name. |
|`reportSuiteID` |`xsd:string` | \(Required\) A report suite that is properly configured to match the metrics and/or elements used in the "definition". |
|`id` |`xsd:string` | \(Optional\) Update an existing segment. |
|`description` |`xsd:string` | \(Optional\) Description of the segment to help other users understand the segment. |
|`favorite` |`xsd:boolean` | \(Optional\) Add this segment to the favorite segments list. |
|`owner` |`xsd:string` | \(Optional\) Login of the user who will be the owner, if this parameter is not specified, ownership defaults to the current user. |
|`shares` |[segment\_share\_array](../data_types/r_segment_share_array.md#) - an array of [segment\_share](../data_types/r_segment_share.md#) | \(Optional\) Groups and users with which this segment is shared. If this parameter is not specified, the segment is not shared. |
|`tags` |`array(xsd:string)` | \(Optional\) Keywords to group segments for filtering. |

## Segments.Save Response

| Type | Description |
|--------|---------------|
|`xsd:string` | segment ID of the new or updated segment, a 24 digit hexadecimal string. |

## Example Request

```
{
    "name":"New Segment",
    "description":"This is a new segment",
    "owner":"bob",
    "reportSuiteID":"myreportsuite"
    "definition":{
         "container":{
            "type":"hits",
            "rules":[
               {
                  "name":"Page Views",
                  "metric":"pageviews",
                  "operator":"equals",
                  "value":1
               }
            ]
         }
    },
    "shares":[
        {
            "type":"user",
            "name":"bestbud"
        },
        {
            "type":"group",
            "name":"mygroup"
        }
    ],
    "tags":[
        "Pizza", "Chicago"
    ],
    "favorite":true
}
```

**Parent topic:** [Methods](../methods/c_segments_api_methods.md)


# 1.4 Segments API

Lets you create, get, and delete segments that are defined using the 1.4 Segments API or the [Analytics Segmentation](https://experienceleague.adobe.com/docs/analytics/components/segmentation/seg-home.html) interface.

## Segments.Get

Gets segments defined for the company of the current user.

`POST https://api.omniture.com/admin/1.4/rest/?method=Segments.Get`

<CodeBlock slots="heading, code" repeat="2" languages="JSON,JSON"/>

#### Request

```json
"filters":{
    "name":"(string)",
    "tags":"(string)",
    "owner":"(string)",
    "reportSuiteID":"(string)",
    "approved":"(boolean)",
    "favorite":"(boolean)"
}
```

#### Response

```json
[
    {
        "id":"537288fae4b0429YYYYa93ad",
        "name":"Segment - Time Spent per Visit is greater than 1",
        "description":"This is a segment.",
        "reportSuiteID":"rsid",
        "owner":"me",
        "modified":"YYYY-05-13 14:04:58",
        "favorite":true,
        "tags":[
            "Test",
            "Awesome",
            "Segments Rule!"
        ],
        "shares":[
            {
                "type":"group",
                "name":"My Group"
            },
            {
                "type":"user",
                "name":"me"
            }
        ],
        "compatibility":[
            "reportsAndAnalytics",
            "adHocAnalysis",
            "dataWarehouse"
        ]
    },
    {
        "id":"53728879e4b0429YYYYa92ae",
        "name":"Simple Segment",
        "description":"",
        "reportSuiteID":"rsid",
        "owner":"me",
        "modified":"YYYY-06-03 15:18:39",
        "favorite":false,
        "tags":[
            
        ],
        "shares":[
            
        ],
        "compatibility":[
            "reportsAndAnalytics",
            "adHocAnalysis",
            "dataWarehouse"
        ]
    }
]
```

|Parameter|Type|Description|
|----|----|-----------|
|`accessLevel` |`string` | optional, one of: "owned", "shared", "all". Defaults to "owned". Will return an error if "all' is used by a non-admin |
|`fields` |`string[]` | optional, one or more of: "tags", "shares", "description", "owner", "modified", "compatibility", "favorite", "reportSuiteID", "definition". The response will always include "id" and "name". |
|`selected` |`string[]` | optional, an array of segment IDs. Causes accessLevel to be ignored (except for the all/admin restriction), does not accept legacy IDs |
|`sort` |`string` | optional, one of: "id", "name", "description", "reportSuiteID", "owner", "modified", "favorite". Default is "id". |
|`filters` | `string`  | Sample filters below: |

optional, one of: "id", "name", "description", "reportSuiteID", "owner", "modified", "favorite". Default is "id".

"name" and "owner" do partial case insensitive matching. For example, if you have several segments named like this: Dan's 1st segment, Dan's 2nd segment, etc., then you could set "name" filter to "dan" to find all of those.

"approved" and "favorite" match on true / false (or 1 / 0). For example, to find all the approved segments, then you would set the "approved" filter to true.

"tags" and "reportSuiteID" are comma delimited lists that perform exact matching. For example, if you have a segment with tag "a" and another with tag "b", setting the "tags" filter to "A" will find no matches, setting it to "a" will match the first, and setting it to "a,b" will find both.

## Segments.Delete

Deletes a segment.

`POST https://api.omniture.com/admin/1.4/rest/?method=Segments.Delete`

|Parameter|Type|Description|
|----|----|-----------|
|`segmentID` |`string` | ID of the segment you want to delete. The ID can be found by calling `Get`. |

The response returns `true` if the operation is successful.

## Segments.Save

Save a new segment or update an existing segment using the segment ID.

`POST https://api.omniture.com/admin/1.4/rest/?method=Segments.Save`

<CodeBlock slots="heading, code" repeat="1" languages="JSON"/>

#### Request

```json
{
    "name":"New Segment",
    "description":"This is a new segment",
    "owner":"bob",
    "reportSuiteID":"myreportsuite",
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

To save a new segment, you must provide a name, reportSuiteID, and a definition. To update an existing segment, you must provide the segmentID you want to update and at least one updated field. If you update the segment definition, you must also include the reportSuiteID since the definition is validated against the provided report suite.

|Parameters|Type|Description|
|----|----|-----------|
|`definition` |`segment_definition` | (Required) Definition of the segment you want to save. |
|`name` |`string` | (Required) Segment name. |
|`reportSuiteID` |`string` | (Required) A report suite that is properly configured to match the metrics and/or elements used in the "definition". |
|`id` |`string` | (Optional) Update an existing segment. |
|`description` |`string` | (Optional) Description of the segment to help other users understand the segment. |
|`favorite` |`boolean` | (Optional) Add this segment to the favorite segments list. |
|`owner` |`string` | (Optional) Login of the user who will be the owner, if this parameter is not specified, ownership defaults to the current user. |
|`shares` |`segment_share[]` | (Optional) Groups and users with which this segment is shared. If this parameter is not specified, the segment is not shared. |
|`tags` |`string[]` | (Optional) Keywords to group segments for filtering. |

| Response Type | Description |
|--------|---------------|
|`string` | segment ID of the new or updated segment, a 24 digit hexadecimal string. |

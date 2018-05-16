# Get

Gets segments defined for the company of the current user.

## Segments.Get Parameters

|Name|Type|Description|
|----|----|-----------|
|`accessLevel` |`xsd:string` | optional, one of: "owned", "shared", "all". Defaults to "owned". Will return an error if "all' is used by a non-admin |
|`fields` |`array(xsd:string)` | optional, one or more of: "tags", "shares", "description", "owner", "modified", "compatibility", "favorite", "reportSuiteID", "definition". The response will always include "id" and "name". |
|`selected` |`array(xsd:string)` | optional, an array of segment IDs. Causes accessLevel to be ignored \(except for the all/admin restriction\), does not accept legacy IDs |
|`sort` |`xsd:string` | optional, one of: "id", "name", "description", "reportSuiteID", "owner", "modified", "favorite". Default is "id". |
|`filters` | `xsd:string`  | Sample filters below: |

 ```
"filters":{
		"name":"(string)",
		"tags":"(string)",
		"owner":"(string)",
		"reportSuiteID":"(string)",
		"approved":"(boolean)",
		"favorite":"(boolean)"
	}
```

 optional, one of: "id", "name", "description", "reportSuiteID", "owner", "modified", "favorite". Default is "id".

 "name", "owner" and "reportSuiteI" do partial case insensitive matching. For example, if you have several segments named like this: Dan's 1st segment, Dan's 2nd segment, etc., then you could set "name" filter to "dan" to find all of those.

 "approved" and "favorite" match on true / false \(or 1 / 0\). For example, to find all the approved segments, then you would set the "approved" filter to true.

 "tags" is a comma delimited list of tags which perform exact matching. For example, if you have a segment with tag "a" and another with tag "b", setting the "tags" filter to "A" will find no matches, setting it to "a" will match the first, and setting it to "a,b" will find both.

## Segments.Get Response

| Type | Description |
|--------|---------------|
|[segment\_array](../data_types/r_segment_array.md#) - an array of [segment](../data_types/r_segment.md#).| Details about the request segment. |

```
[
	{
		"id":"537288fae4b04292010a93ad",
		"name":"Segment - Time Spent per Visit is greater than 1",
		"description":"This is a segment.",
		"reportSuiteID":"rsid",
		"owner":"me",
		"modified":"2014-05-13 14:04:58",
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
		"id":"53728879e4b04292010a92ae",
		"name":"Simple Segment",
		"description":"",
		"reportSuiteID":"rsid",
		"owner":"me",
		"modified":"2014-06-03 15:18:39",
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

**Parent topic:** [Methods](../methods/c_segments_api_methods.md)


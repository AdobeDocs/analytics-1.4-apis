# segment\_rule

Defines the data that is matched by a segment container.

|Element|Type|Description|
|-------|----|-----------|
|`container` |[segment\_container](r_segment_container.md#) | Nested segment container. A segment rule must have either "container" or "operator" \(you cannot include both in the same rule\). When a container is included, all other rule fields are ignored except "exclude". |
|`metric` |`xsd:string` | Metric to segment, required if "element" is not present. Must be a metric id as returned from Report.GetMetrics. |
|`element` |`xsd:string` | Element \(dimension\) to segment, required if "metric" is not present or if "classification" is present. Must be an element id as returned from Report.GetElements |
|`classification` |`xsd:string` | Element classification to segment, name of the classification as returned from ReportSuite.GetClassifications. |
|`operator` |`xsd:string` | Required if "container" is not present. See the "**Rule Operators**" section below. |
|`value` |`xsd:string` | Required except when using one of the exists operators, options depend on the accompanying "metric" or "element". See [Segment Definition Changes](http://microsite.omniture.com/t2/help/en_US/analytics/segment/?f=seg_definition) for a list of dimensions that use enumerated lists. |
|`after` |[segment\_rule\_restriction](r_segment_rule_restriction.md#) | \(Optional\) The After operator is used to specify a minimum limit between two checkpoints in a sequential segment. Allowed on rules that are in a container that uses the "then" operator. Restrictions on the last rule in that container are ignored. Each rule can have at most one "after" and one "within" restriction. See [Using the After Operator](http://microsite.omniture.com/t2/help/en_US/analytics/segment/?f=seg_example_time_between_after). |
|`within` |[segment\_rule\_restriction](r_segment_rule_restriction.md#) | \(Optional\) The Within operator specifies a maximum limit on the amount of time between two checkpoints in a sequential segment. Allowed on rules that are in a container that uses the "then" operator. Restrictions on the last rule in that container are ignored. Each rule can have at most one "after" and one "within" restriction. See [Using the Within Operator](http://microsite.omniture.com/t2/help/en_US/analytics/segment/?f=seg_example_time_between_within). |
|`exclude` |`xsd:boolean` | \(Optional\) Exclude rather than include data that matches the segment rule. Defaults to false. |
|`name` |`xsd:string` | \(Optional\) Not used, can be provided will not be saved. |

## Rule Operators

A rule operator has many different options. Those options depend on the accompanying "metric" or "element". Some combinations of metric/element + operator affect the compatibility of the whole segment definition with different Analytics reporting interfaces. Definition compatibility can be obtained from Segments.[Get](../methods/r_Get.md#) after the segment is saved. A segment definition that is incompatible with data warehouse and other Analytics reporting interfaces returns an error when attempting to save.

**Note:** Operators marked **\(dw only\)** indicate that they work with data warehouse segments only.

|Operator|The selected dimension, segment, or metric event...|
|--------|---------------------------------------------------|
| **equals** |Returns items that match exactly for a numeric or string value. **Note:** If using wildcard characters, use the "matches" operator. |
| **not\_equals** |Returns all items that do not contain the exact match of the value entered. **Note:** If using wildcard characters, use the "does not match" operator. |
| **matches** |Returns items that match exactly based on a given numeric or string value. **Note:** Use this operator when using wildcard \(globbing\) features. |
| **not\_matches** |Returns all items that do not contain the exact match of the value entered. **Note:** Use this operator when using wildcard \(globbing\) features. |
| **less\_than** \(dw only\) |Returns items whose numeric count is less than the value entered.|
| **less\_than\_or\_equals** \(dw only\) |Returns items whose numeric count is less than or equal to the value entered.|
| **greater\_than** \(dw only\) |Returns items whose numeric count is greater than the value entered.|
| **greater\_than\_or\_equals** \(dw only\) |Returns items whose numeric count is greater than or equal to the value entered.|
| **contains** |Returns items that compare to the substrings of the values entered. For example, if the rule for "Page" contains "Search", then it will match any page that has the substring "Search" in it, including "Search Results", "Search", and "Searching".|
| **not\_contains** |Returns the inverse of the "contains" rule. Specifically, all items that match the entered value will be excluded from the entered values. For example, if the rule for "Page" does not contain "Search", then it will not match any page that has the substring "Search" in it, including "Search Results", "Search", and "Searching". These values will be excluded from the results.|
| **contains\_all** |Returns items compared to the substrings, including multiple values joined together. For example, entering "Search Results" with this operator would match "Search Results" and "Results of Search", but not "Search" or "Results" independently. It would match Search AND Results found together.|
| **not\_contains\_all** |Identifies items compared to substrings—including multiple values joined together—and then only return items without these values. For example, entering "Search Results" with this operator would identify "Search Results" and "Results of Search" \(but not "Search" or "Results" independently\) and then exclude these items.|
| **contains\_any** |Returns items compared to the substrings, including multiple values joined or independently identified. For example, entering "Search Results" with this operator would match "Search Results", "Results of Search", "Search", and "Results". It would match either "Search" OR "Results" found together or independently.|
| **not\_contains\_any** |Identifies items based on substrings and then returns values that do not contain these substrings. It can have multiple joined values or values independently identified. For example, entering "Search Results" would match "Search Results", "Results of Search", "Search", and "Results" where either "Search" or "Results" are found together or independently. It would then exclude items that contain these substrings.|
| **starts\_with** |Returns items that start with the character or strings of the value entered.|
| **not\_starts\_with** |Returns all items that do not start with the characters or strings of the values entered. This is the inverse of "starts with" operator.|
| **ends\_with** |Returns items that end with the character or strings of the value entered.|
| **not\_ends\_with** |Returns all items that do not end with the characters or strings of the value entered. This is the inverse of "ends with" operator.|
| **not\_metric\_exists** \(metrics only\) |Returns items that contain an empty string identified as a null value.|
| **metric\_exists****** \(metrics only\) |Returns items that do not contain a null value.|
|**exists** \(elements only\) |Returns the number of items that exist. For example, if you evaluate the Pages Not Found dimension using the "exist" operator, the number of error pages that exist is returned. |
|**not\_exists** \(elements only\) |Returns all items that do not exist. For example, if you evaluate the Pages Not Found dimension using the " does not exist" operator, the number of pages where this error page did not exist is returned. |

**Parent topic:** [Data Types](../data_types/datatypes.md)


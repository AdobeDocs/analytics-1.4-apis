# Segments API data types

Lists the data types used for the 1.4 Segments API.

## segment

Details about a segment.

|Element|Type|Description|
|-------|----|-----------|
|`id` |`string` | Unique ID for this segment. |
|`name` |`string` | Name provided for the segment. Displayed in the UI. |
|`description` |`string` | Description provided for the segment. Displayed in the UI. |
|`reportSuiteID` |`string` | Identifies the report suite that was used to create the segment request. |
|`modified` |`string` | Date when the segment was last updated. |
|`compatibility` |`array[string]` | List of Analytics interfaces that are compatible with this segment. |
|`favorite` |`xsd:boolean` | Indicates if the current user has flagged this segment as a favorite. |
|`tags` |`array[string]` | Tags defined for the segment. |
|`shares` |`segment_share_array` - an array of `segment_share` | Groups and users with which this segment is shared. |
|`owner` |`string` | Segment owner. |

## segment_container

Defines a segment container.

|Element|Type|Description|
|-------|----|-----------|
|`name` |`string` | (Optional) Container name. |
|`type` |`string` | (Required) Container type, one of the following values: "`hits`", "`visits`", "`visitors`" Sequential Segments place additional restrictions on container type. If the definition has a container that defines a sequential segment (using the `"then"` operator), the options for "`type`" are limited to "`visits`" or "`visitors`". Sub-containers within a sequential segment container that also use a "`then`" operator can specify a "`type`" of "`hits`", "`visits`", or "`logicgroup`" |
|`operator` |`string` | (Optional) Specifies the operator used to evaluate the container rules. One of the following: "`and`", "`or`", "`then`". Defaults to "`and`" if not included, or if the container has only one rule. |
|`rules` |`segment_rule_array` - an array of `segment_rule` | (Required) Defines the data that is matched by this container. Each container must include at least one rule. |
|`exclude` |`xsd:boolean` | (Optional) Exclude rather than include data that matches the segment rule. Defaults to false. |

## segment_definition

Specifies the top level container for a segment.

Every definition must have a top level "container". Every container has an array of "rules". A rule is either a base rule, or it has a container (both is not allowed). Thus infinite nesting is allowed, though Adobe recommends stacking (including multiple segments) to increase reusability. For example, instead of defining "mobile users in the US", you could define two segments: one for mobile users, and one for users in the US. By combining these segments, you can reuse these segments in other reports.

|Element|Type|Description|
|-------|----|-----------|
|`container` |`segment_container`) | The top level container for a segment. |

## segment_array

An array of segments.

## segment_rule

Defines the data that is matched by a segment container.

|Element|Type|Description|
|-------|----|-----------|
|`container` |`segment_container` | Nested segment container. A segment rule must have either "container" or "operator" (you cannot include both in the same rule). When a container is included, all other rule fields are ignored except "exclude". |
|`metric` |`string` | Metric to segment, required if "element" is not present. Must be a metric id as returned from Report.GetMetrics. |
|`element` |`string` | Element (dimension) to segment, required if "metric" is not present or if "classification" is present. Must be an element id as returned from Report.GetElements |
|`classification` |`string` | Element classification to segment, name of the classification as returned from ReportSuite.GetClassifications. |
|`operator` |`string` | Required if "container" is not present. See the "Rule Operators" section below. |
|`value` |`string` | Required except when using one of the exists operators, options depend on the accompanying "metric" or "element". |
|`after` |`segment_rule_restriction` | (Optional) The After operator is used to specify a minimum limit between two checkpoints in a sequential segment. Allowed on rules that are in a container that uses the "then" operator. Restrictions on the last rule in that container are ignored. Each rule can have at most one "after" and one "within" restriction. |
|`within` |`segment_rule_restriction` | (Optional) The Within operator specifies a maximum limit on the amount of time between two checkpoints in a sequential segment. Allowed on rules that are in a container that uses the "then" operator. Restrictions on the last rule in that container are ignored. Each rule can have at most one "after" and one "within" restriction. |
|`exclude` |`xsd:boolean` | (Optional) Exclude rather than include data that matches the segment rule. Defaults to false. |
|`name` |`string` | (Optional) Not used, can be provided will not be saved. |

### segment_rule Operators

A rule operator has many different options. Those options depend on the accompanying "metric" or "element". Some combinations of metric/element + operator affect the compatibility of the whole segment definition with different Analytics reporting interfaces. Definition compatibility can be obtained from the [Get](index.md) method after the segment is saved. A segment definition that is incompatible with data warehouse and other Analytics reporting interfaces returns an error when attempting to save.

**Note:** Operators marked **(dw only)** indicate that they work with Data Warehouse segments only.

|Operator|The selected dimension, segment, or metric event...|
|--------|---------------------------------------------------|
| **`equals`** |Returns items that match exactly for a numeric or string value. **Note:** If using wildcard characters, use the "matches" operator. |
| **`not_equals`** |Returns all items that do not contain the exact match of the value entered. **Note:** If using wildcard characters, use the "does not match" operator. |
| **`matches`** |Returns items that match exactly based on a given numeric or string value. **Note:** Use this operator when using wildcard (globbing) features. |
| **`not_matches`** |Returns all items that do not contain the exact match of the value entered. **Note:** Use this operator when using wildcard (globbing) features. |
| **`less_than`** (dw only) |Returns items whose numeric count is less than the value entered.|
| **`less_than_or_equals`** (dw only) |Returns items whose numeric count is less than or equal to the value entered.|
| **`greater_than`** (dw only) |Returns items whose numeric count is greater than the value entered.|
| **`greater_than_or_equals`** (dw only) |Returns items whose numeric count is greater than or equal to the value entered.|
| **`contains`** |Returns items that compare to the substrings of the values entered. For example, if the rule for "Page" contains "Search", then it will match any page that has the substring "Search" in it, including "Search Results", "Search", and "Searching".|
| **`not_contains`** |Returns the inverse of the "contains" rule. Specifically, all items that match the entered value will be excluded from the entered values. For example, if the rule for "Page" does not contain "Search", then it will not match any page that has the substring "Search" in it, including "Search Results", "Search", and "Searching". These values will be excluded from the results.|
| **`contains_all`** |Returns items compared to the substrings, including multiple values joined together. For example, entering "Search Results" with this operator would match "Search Results" and "Results of Search", but not "Search" or "Results" independently. It would match Search AND Results found together.|
| **`not_contains_all`** |Identifies items compared to substrings—including multiple values joined together—and then only return items without these values. For example, entering "Search Results" with this operator would identify "Search Results" and "Results of Search" (but not "Search" or "Results" independently) and then exclude these items.|
| **`contains_any`** |Returns items compared to the substrings, including multiple values joined or independently identified. For example, entering "Search Results" with this operator would match "Search Results", "Results of Search", "Search", and "Results". It would match either "Search" OR "Results" found together or independently.|
| **`not_contains_any`** |Identifies items based on substrings and then returns values that do not contain these substrings. It can have multiple joined values or values independently identified. For example, entering "Search Results" would match "Search Results", "Results of Search", "Search", and "Results" where either "Search" or "Results" are found together or independently. It would then exclude items that contain these substrings.|
| **`starts_with`** |Returns items that start with the character or strings of the value entered.|
| **`not_starts_with`** |Returns all items that do not start with the characters or strings of the values entered. This is the inverse of "starts with" operator.|
| **`ends_with`** |Returns items that end with the character or strings of the value entered.|
| **`not_ends_with`** |Returns all items that do not end with the characters or strings of the value entered. This is the inverse of "ends with" operator.|
| **`not_metric_exists`** (metrics only) |Returns items that contain an empty string identified as a null value.|
| **`metric_exists`** (metrics only) |Returns items that do not contain a null value.|
| **`exists`** (elements only) |Returns the number of items that exist. For example, if you evaluate the Pages Not Found dimension using the "exist" operator, the number of error pages that exist is returned. |
| **`not_exists`** (elements only) |Returns all items that do not exist. For example, if you evaluate the Pages Not Found dimension using the " does not exist" operator, the number of pages where this error page did not exist is returned. |

## segment_rule_array

An array of `segment_rule`.

## segment_rule_restriction

Defines a rule restriction.

Used when defining the "within" and "after" parameters when defining sequential segments.

Every restriction should have an "id" and a "value". "value" is always an integer.

|Element|Type|Description|
|-------|----|-----------|
|`id` |`string` | Restriction ids. Valid values include `hits`, `visits`, `pageviews`, `minutes`, `hours`, `days`, `weeks`, `quarters`, and `years`. |
|`value` |`string` | Restriction value, this is always an integer (in string format). |

## segment_share

Each share should have a "type" and a "name". Options for "type" are: user, group. If "type" is user, "name" should be the login of the user to whom the segment is shared. If "type" is group, "name" should be the group name of the group to which the segment is shared.

|Element|Type|Description|
|-------|----|-----------|
|`type` |`string` | `group` or `user`. |
|`name` |`string` | Group or user name according to the specified type. |

## segment_share_array

An array of `segment_share`.

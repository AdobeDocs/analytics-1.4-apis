# Error Codes

Lists the error codes for DataWarehouse APIs.

Errors are returned in the following format:

```
{
"errors":["error 1", "error 2", ..., "error n"]
}
```

Error responses with text surrounded by asterisks (ex: *rsid*) denotes a provided parameter by the same name is returned as part of the error message.

## DataWarehouse.*

| Message | Description |
|-----------|---------------|
| "Access denied for the selected report suite." | Nonexistant report suite or the user does not have proper permission to the value provided in "rsid" |
| "This report suite is not configured for access to Data Warehouse." | the report suite requested does not have access to Data Warehouse |

## DataWarehouse.GetSegments

| Message | Description |
|-----------|---------------|
| "Report Suite ID required" | missing "rsid" parameter |

## DataWarehouse.GetSegment

| Message | Description |
|-----------|---------------|
| "Report Suite ID required" | missing "rsid" parameter |
| "data warehouse segment id required" | missing "segment" parameter |
| "Name must be nonempty" | invalid "segment" parameter |

## DataWarehouse.CreateSegment

| Message | Description |
|-----------|---------------|
| "Group type must be one of the following: ROOT,VISITOR,VISIT,PAGE,EVENT" | all objects in the "group_include", "group_exclude", and "group_list" array must have "type" defined as one of the listed values (case sensitive) |
| "Group type must be ROOT if there is no parent group!" | objects provided for "group_include" and "group_exclude" must have "type" set to "ROOT" |
| "Group operator must be one of the following: UNKNOWN,AND,OR" | value provided to "segment" -> "group_include" -> "group_operator" must be one of the listed values (case sensitive) |
| "Rule operator must be one of the following: AND,OR" | value provided to "segment" -> "group_include" -> "rule_operator" must be one of the listed values (case sensitive) |
| "Operator must be one of the following: =, !=, >, >=, <=, CONTAINS, NOT CONTAINS, CONTAINS ALL OF, NOT CONTAINS ALL OF, CONTAINS ONE OF, NOT CONTAINS ONE OF, IS NULL, IS NOT NULL, STARTS WITH, NOT STARTS WITH, ENDS WITH, NOT ENDS WITH" | value provided to "segment" -> "group_include" -> "rule_list" => "operator" must be one of the listed values (case sensitive) |
| "Must define group type", "Must define group name", "Must define group operator", "Must define rule operator", "Must define rule list entry", "Must define group list entry" | any object in the "group_include", "group_exclude", and "group_list" array must have all of the following parameters defined (even if they are empty): "type", "name", "group_operator", "rule_operator", "rule_list", "group_list" |
| "You must supply a rule operator", "You must supply a rule item", "You must supply a rule value", "You must supply a rule event" | any object in the "rule_list" array must have all of the following parameters defined (even if they are empty): "operator", "item", "value", "event" |
| "Inclusion group must be named "Include"" | "segment" -> "group_include" -> "name" must be set to "Include" |
| "Exclusion group must be named "Exclude"" | "segment" -> "group_exclude" -> "name" must be set to "Exclude" |
| "Groups of type ROOT cannot contain any rules." | an object in the "group_include", "group_exclude", or "group_list" array having "type" set to "ROOT" must have the "rule_list" set to an empty array |
| "Groups of type VISITOR cannot be children of any group typed (PAGE, VISIT, VISITOR, EVENT)." | an object in the "group_include", "group_exclude", or "group_list" array having "type" set to "VISITOR" must not be children of any of the stated group types. |
| "Groups of type EVENT must contain exactly one EVENT rule." | If an object in "group_list" has "type" set to EVENT, it must contain a rule with "event" set to 1 |
| "Type of a group containing events must be event." | If an object in "rule_list" has "event" set to 1, the parent group must have "type" set to EVENT |
| "Specification of "event" and ("operator" or "item" or "value") are mutually exclusive!" | If an object in "rule_list" has "event" set to 1, the other parameters must not be set. |

**Parent topic:** [Reference](../reference/c_reference.md)


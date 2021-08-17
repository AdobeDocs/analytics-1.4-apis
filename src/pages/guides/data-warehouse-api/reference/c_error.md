# Error Codes

Lists the error codes for DataWarehouse APIs.

Errors are returned in the following format:

```
{
"errors":["error 1", "error 2", ..., "error n"]
}
```

Error responses with text surrounded by asterisks \(ex: \*rsid\*\) denotes a provided parameter by the same name is returned as part of the error message.

## DataWarehouse.\*

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
| "Group type must be one of the following: ROOT,VISITOR,VISIT,PAGE,EVENT" | all objects in the "group\_include", "group\_exclude", and "group\_list" array must have "type" defined as one of the listed values \(case sensitive\) |
| "Group type must be ROOT if there is no parent group!" | objects provided for "group\_include" and "group\_exclude" must have "type" set to "ROOT" |
| "Group operator must be one of the following: UNKNOWN,AND,OR" | value provided to "segment" -\> "group\_include" -\> "group\_operator" must be one of the listed values \(case sensitive\) |
| "Rule operator must be one of the following: AND,OR" | value provided to "segment" -\> "group\_include" -\> "rule\_operator" must be one of the listed values \(case sensitive\) |
| "Operator must be one of the following: =, !=, \>, \>=, <=, CONTAINS, NOT CONTAINS, CONTAINS ALL OF, NOT CONTAINS ALL OF, CONTAINS ONE OF, NOT CONTAINS ONE OF, IS NULL, IS NOT NULL, STARTS WITH, NOT STARTS WITH, ENDS WITH, NOT ENDS WITH" | value provided to "segment" -\> "group\_include" -\> "rule\_list" =\> "operator" must be one of the listed values \(case sensitive\) |
| "Must define group type", "Must define group name", "Must define group operator", "Must define rule operator", "Must define rule list entry", "Must define group list entry" | any object in the "group\_include", "group\_exclude", and "group\_list" array must have all of the following parameters defined \(even if they are empty\): "type", "name", "group\_operator", "rule\_operator", "rule\_list", "group\_list" |
| "You must supply a rule operator", "You must supply a rule item", "You must supply a rule value", "You must supply a rule event" | any object in the "rule\_list" array must have all of the following parameters defined \(even if they are empty\): "operator", "item", "value", "event" |
| "Inclusion group must be named \\"Include\\"" | "segment" -\> "group\_include" -\> "name" must be set to "Include" |
| "Exclusion group must be named \\"Exclude\\"" | "segment" -\> "group\_exclude" -\> "name" must be set to "Exclude" |
| "Groups of type ROOT cannot contain any rules." | an object in the "group\_include", "group\_exclude", or "group\_list" array having "type" set to "ROOT" must have the "rule\_list" set to an empty array |
| "Groups of type VISITOR cannot be children of any group typed \(PAGE, VISIT, VISITOR, EVENT\)." | an object in the "group\_include", "group\_exclude", or "group\_list" array having "type" set to "VISITOR" must not be children of any of the stated group types. |
| "Groups of type EVENT must contain exactly one EVENT rule." | If an object in "group\_list" has "type" set to EVENT, it must contain a rule with "event" set to 1 |
| "Type of a group containing events must be event." | If an object in "rule\_list" has "event" set to 1, the parent group must have "type" set to EVENT |
| "Specification of \\"event\\" and \(\\"operator\\" or \\"item\\" or \\"value\\"\) are mutually exclusive!" | If an object in "rule\_list" has "event" set to 1, the other parameters must not be set. |

**Parent topic:** [Reference](../reference/c_reference.md)


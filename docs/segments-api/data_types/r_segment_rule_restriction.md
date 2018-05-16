# segment\_rule\_restriction

Defines a rule restriction.

Used when defining the "within" and "after" parameters when defining sequential segments.

Every restriction should have an "id" and a "value". "value" is always an integer.

|Element|Type|Description|
|-------|----|-----------|
|`id` |`xsd:string` | Restriction ids |
|`value` |`xsd:string` | Restriction value, this is always an integer \(in string format\). |

## Restriction id values

-   hits
-   visits
-   pageviews
-   minutes
-   hours
-   days
-   weeks
-   quarters
-   years

**Parent topic:** [Data Types](../data_types/datatypes.md)


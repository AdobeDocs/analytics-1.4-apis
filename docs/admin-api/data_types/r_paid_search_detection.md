# paid\_search\_detection

Data structure that contains information about a single paid search rule.

|Element|Type|Description|
|-------|----|-----------|
|**search\_engine** |[search\_engine\_enum](r_search_engine_enum.md#) | The name of the search engine. |
|**operator** |[paid\_search\_operator\_enum](r_paid_search_operator_enum.md#) | Specifies the type of paid search rule. One of the following values: contains, not\_contains |
|**query\_string** |`xsd:string` |The string value to use when matching a search engine referring URL.|

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


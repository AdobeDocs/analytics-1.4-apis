# DeletePaidSearchDetection

Removes the specified paid search rule.

## ReportSuite.DeletePaidSearchDetection parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid\_list** | `array(xsd:string)` |A list of report suite IDs.|
|**search\_engine** |[search\_engine\_enum](../../data_types/r_search_engine_enum.md#) | The name of the search engine. |
|**operator** |[paid\_search\_operator\_enum](../../data_types/r_paid_search_operator_enum.md#) | Specifies the type of paid search rule. One of the following values: `contains` `not\_contains` |
|**query\_string** |`xsd:string` |The string value to use when matching a search engine referring URL.|

## ReportSuite.DeletePaidSearchDetection response

|Type|Description|
|----|-----------|
|`xsd:boolean` |Returns `true` if the operation was successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


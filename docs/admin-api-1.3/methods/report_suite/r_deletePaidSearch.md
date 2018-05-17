# DeletePaidSearch

Deletes a paid search setting from each of the specified report suites.

## ReportSuite.DeletePaidSearch parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` |A list of report suite IDs.|
|**filter** |`xsd:string` |Search string to use when matching a search engine referring URL.|
|**rule** |`xsd:string` | Specifies how to use the filter string when identifying a search engine. Supported values include: `1`: Contains. The referring URL contains the search string. `2`: Does not contain. The referring URL does not contain the search string. |
|**search\_engine** |`xsd:int` | ID of the search engine where you want to apply the rule. Use zero \(`0`\) to apply the rule to all search engines. |

## ReportSuite.DeletePaidSearch response

|Type|Description|
|----|-----------|
|`xsd:int` |Returns `1` if the operation is successful. Otherwise, returns `0`.|

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


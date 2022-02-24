# SaveListVariables

Saves list variables for the requested report suites.

See [List Variable](https://microsite.omniture.com/t2/help/en_US/sc/implement/index.html?f=list_var) in the Analytics Implementation Guide.

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`rsid_list` |`array(xsd:string)` | A list of report suite IDs.|
|`list_variables` | [list_variables](../../data_types/r_list_variables.md#) - An array of [list_variable](../../data_types/r_list_variable.md#) | Data structure that describes the list variables that are configured for a report suite. |

## Response

| Type | Description |
|--------|---------------|
|`xsd:int` |1 if the operation was successful, 0 if an error occurred.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


# GetListVariables

Retrieves the list variables for the requested report suites.

See [List Variable](https://microsite.omniture.com/t2/help/en_US/sc/implement/index.html?f=list_var) in the Analytics help.

## ReportSuite.GetListVariables Parameters

|Name|Type|Description|
|----|----|-----------|
| `rsid_list` | `array[string]` | A list of report suite IDs.|

## ReportSuite.GetListVariables Response

| Type | Description |
|--------|---------------|
| [rscollection_list_variable](../../data_types/r_rscollection_list_variable.md#) - An array of [report_suite_list_variable](../../data_types/r_report_suite_list_variable.md#). | Data structure that describes the list variables that are configured for a report suite. |

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


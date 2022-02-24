# SaveEvars

Updates the commerce variables (eVars) for the requested report suites.

## ReportSuite.SaveEvars parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`array(xsd:string)` |A list of report suite IDs.|
|**evars** | [evar_array](../../data_types/r_evar_array.md#) - An array of [evar](../../data_types/r_evar.md#) |List of eVars for the specified report suites, including the settings for each eVar.|

## ReportSuite.SaveEvars response

|Type|Description|
|----|-----------|
|`xsd:boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


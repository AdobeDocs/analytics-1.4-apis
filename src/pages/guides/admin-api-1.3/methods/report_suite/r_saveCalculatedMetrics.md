# SaveCalculatedMetrics

Saves a list of calculated metrics to each of the specified report suites.

## ReportSuite.SaveCalculatedMetrics parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` |A list of report suite IDs.|
|**calculated\_metrics** |[tns:calculated\_metrics](../../data_types/r_calculated_metrics.md#) |List of calculated metrics to add to the report suites.|

## ReportSuite.SaveCalculatedMetrics response

|Type|Description|
|----|-----------|
|`xsd:int` |Returns `1` if the update operation is successful. Otherwise, returns `0`.|

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


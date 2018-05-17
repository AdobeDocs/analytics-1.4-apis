# DeleteCalculatedMetrics

Deletes the specified set of calculated metrics for each of the specified report suites.

## ReportSuite.DeleteCalculatedMetrics parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` |A list of report suite IDs.|
|**calculated\_metrics** |[tns:calculated\_metrics](../../data_types/r_calculated_metrics.md#) |List of calculated metrics to delete from the specified report suites.|

## ReportSuite.DeleteCalculatedMetrics response

|Type|Description|
|----|-----------|
|`xsd:boolean` |Returns `TRUE` if the operation is successful. Otherwise, returns `FALSE`.|

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


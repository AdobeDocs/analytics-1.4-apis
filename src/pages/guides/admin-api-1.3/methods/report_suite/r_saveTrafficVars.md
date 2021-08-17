# SaveTrafficVars

Updates the traffic variables for each of the specified report suites.

## ReportSuite.SaveTrafficVars parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` |A list of report suite IDs.|
|**property** |[tns:traffic\_vars](../../data_types/r_traffic_vars.md#) |A list of traffic variable objects to assign to the report suites.|

## ReportSuite.SaveTrafficVars response

|Type|Description|
|----|-----------|
|`xsd:int` |Returns `1` if the operation is successful. Otherwise, returns `0`.|

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


# SaveRollups

Updates or creates a roll-up report suite for the requesting company.

## ReportSuite.SaveRollups parameters

|Name|Type|Description|
|----|----|-----------|
|**go\_live\_date** |`xsd:date` |The date to start rolling up data.|
|**rollup\_rsid** |`array(xsd:string)` |List of report suite IDs to include in this roll-up.|
|**rsid** |`xsd:string` |ReportSuite ID of this group.|
|**time\_zone** |[tns:timezone\_enum](../../data_types/r_timezone_enum.md#) |The roll-up report suite's time zone.|

## ReportSuite.SaveRollups response

|Type|Description|
|----|-----------|
|`xsd:int` |Returns `1` if the operation is successful. Otherwise, returns `0`.|

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


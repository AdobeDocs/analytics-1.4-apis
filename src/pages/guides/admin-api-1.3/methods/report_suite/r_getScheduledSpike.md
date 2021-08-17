# GetScheduledSpike

Retrieves the scheduled traffic increase settings for the specified report suites.

## ReportSuite.GetScheduledSpike parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` |A list of report suite IDs.|

## ReportSuite.GetScheduledSpike response

|Type|Description|
|----|-----------|
|array([tns:scheduled\_spike](../../data_types/r_schedule_spike.md#)) |List of report suites with the scheduled traffic increase settings for each.|

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


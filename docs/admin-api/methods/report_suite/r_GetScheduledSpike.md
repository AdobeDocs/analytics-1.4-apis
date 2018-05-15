# GetScheduledSpike

Retrieves the scheduled traffic increase settings for the specified report suites.

## ReportSuite.GetScheduledSpike parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` |A list of report suite IDs.|

## ReportSuite.GetScheduledSpike response

|Type|Description|
|----|-----------|
| [report\_suite\_scheduled\_spike\_array](../../data_types/r_report_suite_scheduled_spike_array.md#) - An array of [report\_suite\_scheduled\_spike](../../data_types/r_report_suite_scheduled_spike.md#). |List of report suites with the scheduled traffic increase settings for each.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


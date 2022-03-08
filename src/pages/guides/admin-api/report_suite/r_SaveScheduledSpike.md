# SaveScheduledSpike

Updates scheduled traffic increase settings for each of the specified report suites.

## ReportSuite.SaveScheduledSpike parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`string[]` |A list of report suite IDs.|
|**start_date** |`date` |Date the traffic increase begins.|
|**end_date** |`date` |Date the traffic increase ends.|
|**hits_per_day** |`int` |The expected hits per day during the traffic spike.|

## ReportSuite.SaveScheduledSpike response

|Type|Description|
|----|-----------|
|`boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


# SavePermanentTraffic

Updates paid search settings for each of the specified report suites.

## ReportSuite.SavePermanentTraffic parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`string[]` |A list of report suite IDs.|
|**hits_per_day** |`int` |The estimated number of hits per day.|
|**start_date** |`date` |The date the traffic level will change.|

## ReportSuite.SavePermanentTraffic response

|Type|Description|
|----|-----------|
|`boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# SaveScheduledSpike

Updates scheduled traffic increase settings for each of the specified report suites.

## ReportSuite.SaveScheduledSpike parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` |A list of report suite IDs.|
|**start\_date** |`xsd:date` |Date the traffic increase begins.|
|**end\_date** |`xsd:date` |Date the traffic increase ends.|
|**hits\_per\_day** |`xsd:int` |The expected hits per day during the traffic spike.|

## ReportSuite.SaveScheduledSpike response

|Type|Description|
|----|-----------|
|`xsd:boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


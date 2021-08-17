# SaveScheduledSpike

Updates scheduled traffic increase settings for each of the specified report suites.

## ReportSuite.SaveScheduledSpike parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` |A list of report suite IDs.|
|**start\_date** |`xsd:date` |Date the traffic increase begins.|
|**end\_date** |`xsd:date` |Date the traffic increase ends.|
|**spike\_hits\_per\_day** |`xsd:int` |The expected hits per day during the traffic spike.|

## ReportSuite.SaveScheduledSpike response

|Type|Description|
|----|-----------|
|`xsd:int` |Returns `1` if the operation is successful. Otherwise, returns `0`.|

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


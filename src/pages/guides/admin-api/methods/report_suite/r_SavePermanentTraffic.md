# SavePermanentTraffic

Updates paid search settings for each of the specified report suites.

## ReportSuite.SavePermanentTraffic parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` |A list of report suite IDs.|
|**hits\_per\_day** |`xsd:int` |The estimated number of hits per day.|
|**start\_date** |`xsd:date` |The date the traffic level will change.|

## ReportSuite.SavePermanentTraffic response

|Type|Description|
|----|-----------|
|`xsd:boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


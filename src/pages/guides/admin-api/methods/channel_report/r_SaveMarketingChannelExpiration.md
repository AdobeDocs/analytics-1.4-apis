# SaveMarketingChannelExpiration

Updates the marketing channel expiration date for the specified report suites.

## ReportSuite.SaveMarketingChannelExpiration parameters

|Name|Type|Description|
|----|----|-----------|
|**days** |`xsd:int` |The number of days you want to extend the marketing channel expiration date.|
|**rsid\_list** |`array(xsd:string)` |A list of report suite IDs.|

## ReportSuite.SaveMarketingChannelExpiration response

|Type|Description|
|----|-----------|
|`xsd:int` |Returns `1` if the operation is successful. Otherwise, returns `0`.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


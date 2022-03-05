# SaveMarketingChannelCost

Updates the marketing channel cost for the specified report suites.

## ReportSuite.SaveMarketingChannelCost parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`array(xsd:string)` |A list of report suite IDs.|
|**amount** |`xsd:double` | |
|**channel_id** |`xsd:int` | |
|**channel_type** |`xsd:string` | |
|**cost_group** |`xsd:string` | |
|**cost_id** |`xsd:int` | |
|**name** |`xsd:string` | |
|**end_date** |`xsd:dateTime` | |
|**metric** |`xsd:string` | |
|**start_date** |`xsd:dateTime` | |
|**type** |`xsd:string` | |

## ReportSuite.SaveMarketingChannelCost response

|Type|Description|
|----|-----------|
|`xsd:int` |Returns `1` if the operation is successful. Otherwise, returns `0`.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


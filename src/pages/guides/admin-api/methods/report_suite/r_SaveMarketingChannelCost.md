# SaveMarketingChannelCost

Updates the marketing channel cost for the specified report suites.

## ReportSuite.SaveMarketingChannelCost parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`array[string]` |A list of report suite IDs.|
|**amount** |`xsd:double` | |
|**channel_id** |`int` | |
|**channel_type** |`string` | |
|**cost_group** |`string` | |
|**cost_id** |`int` | |
|**name** |`string` | |
|**end_date** |`xsd:dateTime` | |
|**metric** |`string` | |
|**start_date** |`xsd:dateTime` | |
|**type** |`string` | |

## ReportSuite.SaveMarketingChannelCost response

|Type|Description|
|----|-----------|
|`int` |Returns `1` if the operation is successful. Otherwise, returns `0`.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


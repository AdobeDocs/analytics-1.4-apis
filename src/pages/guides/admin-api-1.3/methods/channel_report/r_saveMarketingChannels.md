# SaveMarketingChannels

Saves one or more marketing channels in the specified report suites.

## ReportSuite.SaveMarketingChannels parameters

|Name|Type|Description|
|----|----|-----------|
|**channels** |[tns:mchannel\_list](../../data_types/r_mchannel_list.md#) |A list of marketing channels to save in each specified report suite.|
|**rsid\_list** |`array(xsd:string)` |A list of report suite IDs.|

## ReportSuite.SaveMarketingChannels response

|Type|Description|
|----|-----------|
|`xsd:int` |Returns `1` if the operation is successful. Otherwise, returns `0`.|

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


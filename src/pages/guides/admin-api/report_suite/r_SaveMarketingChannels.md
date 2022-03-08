# SaveMarketingChannels

Saves one or more marketing channels in the specified report suites.

## ReportSuite.SaveMarketingChannels parameters

|Name|Type|Description|
|----|----|-----------|
| **channels** |  [marketing_channel[]](../../data_types/r_marketing_channel_array.md#) - An array of [marketing_channel](../../data_types/r_marketing_channel.md#). |A list of marketing channels to save in each specified report suite.|
| **rsid_list** | `string[]` |A list of report suite IDs.|

## ReportSuite.SaveMarketingChannels response

|Type|Description|
|----|-----------|
| `boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


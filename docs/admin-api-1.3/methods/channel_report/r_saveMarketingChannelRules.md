# SaveMarketingChannelRules

Updates the marketing channel expiration date for the specified report suites.

## ReportSuite.SaveMarketingChannelRules parameters

|Name|Type|Description|
|----|----|-----------|
|**mchannel\_rules** |[tns:mchannel\_rulesets](../../data_types/r_mchannel_rulesets.md#) | An updated set of marketing channel rules to apply to each specified report suite. |
|**rsid\_list** |`array(xsd:string)` | A list of report suite IDs. |

## ReportSuite.SaveMarketingChannelRules response

|Type|Description|
|----|-----------|
|`xsd:int` |Returns `1` if the operation is successful. Otherwise, returns `0`.|

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


# SaveMarketingChannelRules

Updates the marketing channel expiration date for the specified report suites.

## ReportSuite.SaveMarketingChannelRules parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid\_list** | `array(xsd:string)` | A list of report suite IDs.

 |
| **marketing\_channel\_rules** |  ` [rs\_marketing\_channel\_rulesets\_array](../../data_types/r_rs_marketing_channel_rulesets_array.md#) ` - An array of `[marketing\_channel\_ruleset](../../data_types/r_marketing_channel_ruleset.md#)` 

 | An updated set of marketing channel rules to apply to each specified report suite.

 |

## ReportSuite.SaveMarketingChannelRules response

|Type|Description|
|----|-----------|
| `xsd:boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


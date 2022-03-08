# SaveMarketingChannelRules

Updates the marketing channel expiration date for the specified report suites.

## ReportSuite.SaveMarketingChannelRules parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` | A list of report suite IDs. |
| **marketing_channel_rules** |  [rs_marketing_channel_rulesets_array](../../data_types/r_rs_marketing_channel_rulesets_array.md#) - An array of [marketing_channel_ruleset](../../data_types/r_marketing_channel_ruleset.md#)  | An updated set of marketing channel rules to apply to each specified report suite. |

## ReportSuite.SaveMarketingChannelRules response

|Type|Description|
|----|-----------|
| `boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


# token_usage_container

Data structure that contains information about the company's token usage.

|Element|Type|Description|
|-------|----|-----------|
|**allowed_tokens** |`int` | Number of tokens available during each calendar month. |
|**used_token_total** |`int` | The number of tokens used during the current calendar month. |
|**token_period** |`string` | The period of token usage. |
|**status** |`string` | A list of the report suite's eVars. |
|**overage_enabled** |`int` | Indicates if company can exceed token usage limits. Supported values include: `0`: Disabled (not able to exceed usage limits). `1`: Enabled |
|**token_usage** |[token_usage_array](r_token_usage_array.md#) | A list of token usage, organized by user. |
|**token_month** |`string` | This data represents the token period for the returned usage data, in the format of YYYY-MM. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


# token\_usage\_container

Data structure that contains information about the company's token usage.

|Element|Type|Description|
|-------|----|-----------|
|**allowed\_tokens** |`xsd:int` | Number of tokens available during each calendar month. |
|**used\_token\_total** |`xsd:int` | The number of tokens used during the current calendar month. |
|**token\_period** |`xsd:string` | The period of token usage.|
|**status** |`xsd:string` | A list of the report suite's eVars. |
|**overage\_enabled** |`xsd:int` | Indicates if company can exceed token usage limits. Supported values include: `0`: Disabled \(not able to exceed usage limits\). `1`: Enabled |
|**token\_usage** |[token\_usage\_array](r_token_usage_array.md#) | A list of token usage, organized by user. |
|**token\_month** |`xsd:string` | This data represents the token period for the returned usage data, in the format of YYYY-MM. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


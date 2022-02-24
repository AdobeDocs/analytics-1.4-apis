# Delete a Custom Algorithm

The Custom Algorithm API also lets you delete an existing custom algorithm. For example:

```
https://recommendations.omniture.com/rest?action=algorithm.delete&client=clientCode&clientToken=51dafdf4-f825-4581-a7c0-8ce9db31bd31&algorithmName=myCustomAlgorithm
```

|Parameter|Description|
|---------|-----------|
|**recommendations.omniture.com** | (Required) The domain for the Recommendations environment you are currently using. |
| **action** | (Required) Identifies the Recommendations action to execute. To delete a custom algorithm name, this value is always `algorithm.delete`. |
| **client** | (Required) The client code, which is displayed on the Recommendations' Settings page. |
| **clientToken** | (Required) The client token, which is displayed on Recommendations' Settings page. |
| **algorithmName** | (Required) The name used to identify the custom algorithm in the Algorithm Selection drop-down list when creating or editing a recommendation. |

**Note:** Parameters and values are case sensitive.

**Parent topic:** [Custom Algorithm](../custom_algorithm/r_recs_custom_algorithm.md)


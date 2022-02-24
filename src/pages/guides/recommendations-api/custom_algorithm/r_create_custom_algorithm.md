# Create a Custom Algorithm

To create a custom algorithm, you must first create the custom algorithm name. For example:

```
https://recommendations.omniture.com/rest?action=algorithm.upload&client=clientCode&clientToken=51dafdf4-f825-4581-a7c0-8ce9db31bd31&algorithmName=myCustomAlgorithm
```

|Parameter|Description|
|---------|-----------|
|**recommendations.omniture.com** | (Required) The domain for the Recommendations environment you are currently using. |
| **action** | (Required) Identifies the Recommendations action to execute. To create a custom algorithm name, this value is always `algorithm.upload`. |
| **client** | (Required) The client code, which is displayed on the Recommendations' Settings page. |
| **clientToken** | (Required) The client token, which is displayed on Recommendations' Settings page. |
| **algorithmName** | (Required) The name used to identify the custom algorithm in the Algorithm Selection drop-down list when creating or editing a recommendation. Use this name when uploading the recommendation data (see [Upload Custom Algorithm Data](r_upload_custom_algorithm_data.md#)). The `algorithmName` parameter has a 250 character limit. |

**Note:** Parameters and values are case sensitive.

The new algorithm name appears immediately as an algorithm type in Recommendations.

**Parent topic:** [Custom Algorithm](../custom_algorithm/r_recs_custom_algorithm.md)


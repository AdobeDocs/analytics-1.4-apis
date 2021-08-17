# Upload Custom Algorithm Data

After creating a custom algorithm name \(see [Create a Custom Algorithm](r_create_custom_algorithm.md#)\), upload a list of the recommended items to display for a specific key item when you use that custom algorithm. For example:

```
https://recommendations.omniture.com/rest?action=entity.recommendations.upload&client=clientCode&clientToken=51dafdf4-f825-4581-a7c0-8ce9db31bd31&algorithmName=sampleCustomAlgorithm&recommendations=<recommendations><recommendation><key>1</key><entityId>2</entityId><entityId>3</entityId><entityId>4</entityId></recommendation></recommendations>
```

|Parameter|Description|
|---------|-----------|
|**recommendations.omniture.com** | \(Required\) The domain for the Recommendations environment you are currently using. |
| **action** | \(Required\) Identifies the Recommendations action to execute. To upload a custom algorithm name, this value is always `entity.recommendation.upload`. |
| **client** | \(Required\) The client code, which is displayed on the Recommendations' Settings page. |
| **clientToken** | \(Required\) The client token, which is displayed on the Recommendations' Settings page. |
| **algorithmName** | \(Required\) The custom algorithm name, as previously defined \(see [Create a Custom Algorithm](r_create_custom_algorithm.md#)\). |
| **recommendations** | \(Required\) The XML-based recommendation definition. Example below: |

 ```
 <recommendations>
<recommendation>
<key>1</key>
<entityId>4</entityId>
<entityId>2</entityId>
<entityId>3</entityId>
</recommendation>
<recommendation>
<key>2</key>
<entityId>5</entityId>
<entityId>3</entityId>
<entityId>6</entityId>
</recommendation>
...
</recommendations>
```

The XML must include a separate `<recommendation>` tag for each key, specified by the `<key>` tag. Each `<entityId>` tag includes a recommended item for the specified key.

**Note:** Parameters and values are case sensitive.

**Parent topic:** [Custom Algorithm](../custom_algorithm/r_recs_custom_algorithm.md)


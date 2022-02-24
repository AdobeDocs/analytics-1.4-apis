# DataSources.Save

Creates or updates a data source.

##  **Request** 

```
{
    "email":"(string)",
    "id":"(int)",
    "name":"(string)",
    "processing_type":"(string)",
    "reportSuiteID":"(string)",
    "settings":{
        "injectionType":"(string)",
        "allowOutOfOrderHits":"(boolean)",
        "stopOnWarning":"(boolean)",
        "metricNames":[
            "(string)"
        ],
        "metricEvents":[
            "(string)"
        ],
        "dimensionNames":[
            "(string)"
        ],
        "dimensionVariables":[
            "(string)"
        ],
        "dataScope":"(string)",
        "standardBreakdowns":[
            "(string)"
        ],
        "metricList":[
            "(string)"
        ],
        "customBreakdownNames":[
            "(string)"
        ],
        "customBreakdownValues":[
            "(string)"
        ],
        "logFormat":"(string)"
    }
}
```

All parameters are required. Required settings depend on the `"processing_type"` used:

|Parameter|Description|
|-----|----------|
| `"weblog"`  | When `"processing_type"` is `"weblog"`, `"logFormat"` is required. Options for `"logFormat"` are: `"ncsa_common"`, `"ncsa_combined"`, `"w3c_extended"`, and `"microsoft_iis"`. |
| `"generic"`  | When `"processing_type"` is `"generic"`, `"metricNames"`, `"metricEvents"`, `"dimensionNames"`, `"dimensionVariables"` are required. Number of `"metricNames"` and `"metricEvents"` must be the same. The same is true for `"dimensionNames"` and `"dimensionVariables"`. |
| `"traffic"`  | When `"processing_type"` is `"traffic"`, `"dataScope"`, `"standardBreakdowns"`, `"metricList"`, `"customBreakdownNames"`, `"customBreakdownValues"` are required. Options for `"dataScope"` are: `"site_level"`, `"breakdown"`. |

## Response

```
{
    "dataSourceID":"(int)"
}
```

**Parent topic:** [Methods](../methods/c_data_sources_methods_1.4.md)


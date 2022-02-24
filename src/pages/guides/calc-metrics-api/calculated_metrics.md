# Calculated Metrics

 

**CalculatedMetrics.Get** 

Request:

```
{
    "accessLevel":"(string)",
    "fields":[
        "(string)"
    ],
    "filters":{
        "name":"(string)",
        "tags":"(string)",
        "owner":"(string)",
        "reportSuiteID":"(string)",
        "approved":"(boolean)",
        "favorite":"(boolean)"
    },
    "selected":[
        "(string)"
    ],
    "sort":"(string)"
}
```

Response:

An array of calculated metrics that may look something like this:

```
...
    {
        "id":"sample_string_id",
        "name":"12432",
        "description":"",
        "reportSuiteID":"sample_rs_1",
        "owner":"sample_owner",
        "polarity":"positive",
        "precision":4,
        "type":"decimal",
        "definition":{
            "metric":"visits"
        },
        "tags":[
            
        ],
        "shares":[
            {
                "type":"organization",
                "name":"all"
            }
        ],
        "modified":"YYYY-06-12 09:13:04"
    },
...

```

**CalculatedMetrics.Delete** 

Request:

```
{
    "calculatedMetricID":"(string)"
}
```

Response:

true, if no error

 **CalculatedMetrics.GetFunctions** 

Request: empty

Response: An array of calc metric functions that look like this:

```
{
        "id":"pow",
        "name":"Power operator",
        "description":"Returns x raised to the y power",
        "required":[
            "column1",
            "column2"
        ],
        "optional":[
            
        ]
    },
...
    {
        "id":"ls-intercept-quadratic",
        "name":"Quadratic regression: Intercept",
        "description":"Quadratic regression: Y = ( a + b X ) ^ 2, Returns a.",
        "required":[
            "x",
            "y"
        ],
        "optional":[
            "include-zeros"
        ]
    },
...
```

- required": the parameters that are required to use the function in a calc metric definition and the order they must be in
- "optional": additional parameters that may be left out, but must still be included in the order shown

 

**CalculatedMetrics.Save** 

Request:

```
{
    "definition":{
        (see below)
    },
    "description":"(string)",
    "favorite":"(boolean)",
    "id":"(string)",
    "name":"(string)",
    "owner":"(string)",
    "polarity":"(string)",
    "precision":"(int)",
    "reportSuiteID":"(string)",
    "shares":[
        {
            "type":"(string)",
            "name":"(string)"
        }
    ],
    "tags":[
        "(string)"
    ],
    "type":"(string)"
}
```

- "id": required for update, must be left out to create a new calc metric
- "definition": required for creating, also required when updating the reportSuiteID
- "reportSuiteID": required for creating, also required when updating the definition
- "name": required for creating
- "polarity": optional, one of "positive", "negative", defaults to "positive"
- "type": optional, one of "number", "date", "currency", "percent", defaults to "number"
- "precision": optional, an integer between 0 and 10, defaults to 0

Response:

```
{
    "calculatedMetricID":"(string)"
}
```

Definition:

May be any nested combination of the following. To see all the possible functions, call CalculatedMetrics.GetFunctions

- "calculatedMetric": this is a wrapper around any piece of the calculated metric definition. The only reason to use this wrapper is to apply "segments" to all pieces inside the wrapper.
- "function": specify a function to process. must be used with "parameters" which is a list of calculated metric pieces to use as parameters to the function
- "metric": specify a metric to be used in a calculation. may be used with "allocation" and "segments"
- "number": specify a value to be used in a calculation
- "boolean": specify true or false, only used by a select few functions that have the parameter "ascending-sort" or "include-zeros"

Basic Examples:

```
"definition": {
    "number": 100
}
```

```
"definition": {
    "metric": "pageviews"
}
```

```
"definition": {
    "metric": "revenue",
    "allocation": "linear"
}
```

```
"definition": {
    "metric": "revenue",
    "allocation": "linear",
    "segments": [
        "[segment ID]"
    ]
}
```

```
"definition": {
    "function": "divide",
    "parameters": [
        {
            "metric": "revenue",
            "allocation": "linear"
        },
        {
            "number": 100
        }
    ]
}
```

Complex Examples:

```
"definition": {
        "function": "if",
        "parameters": [
            {
                "function": "gt",
                "parameters": [
                    {
                        "metric": "pageviews"
                    },
                    {
                        "number": 1000
                    }
                ]
            },
            {
                "metric": "pageviews"
            },
            {
                "number": 1000
            }
        ]
    }
```

```
"definition": {
        "function": "negate",
        "parameters": [
            {
                "function": "modulo",
                "parameters": [
                    {
                        "metric": "pageviews"
                    },
                    {
                        "function": "abs",
                        "parameters": [
                            {
                                "function": "ceil",
                                "parameters": [
                                    {
                                        "function": "tan",
                                        "parameters": [
                                            {
                                                "function": "lt",
                                                "parameters": [
                                                    {
                                                        "metric": "pageviews"
                                                    },
                                                    {
                                                        "number": 1000
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
```

```
"definition": {
        "function": "row-max",
        "parameters": [
            {
                "columns": [
                    {
                        "function": "row-sum",
                        "parameters": [
                            {
                                "columns": [
                                    {
                                        "metric": "pageviews"
                                    },
                                    {
                                        "number": 1000
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "metric": "pageviews"
                    },
                    {
                        "number": 1000
                    }
                ]
            },
            {
                "boolean": true
            }
        ]
    }
```


# Report description object examples

The following are some basic `reportDescription` JSON objects to help you get started creating the desired report.

## Bare minimum request

```json
{
    "reportDescription": {
        "reportSuiteID": "examplersid"
    }
}
```

## Overtime report

```json
{
    "reportDescription": {
        "reportSuiteID": "examplersid",
        "dateGranularity": "hour"
    }
}
```

## Ranked report

```json
{
    "reportDescription": {
        "reportSuiteID": "examplersid",
        "elements": [
            {"id": "page"}
        ]
    }
}
```

## Trended report

```json
{
    "reportDescription": {
        "reportSuiteID": "examplersid",
        "dateGranularity": "hour",
        "elements": [
            {"id":"page"}
        ]
    }
}
```

## Pathing report - next page flow

```json
{
    "reportDescription": {
        "reportSuiteID": "examplersid",
        "metrics": [
            {"id":"pageviews"}
        ],
        "elements": [
            {
                "id": "page",
                "top": "10",
                "startingWith": "1",
                "pattern": [
                    ["homepage"],
                    ["::anything::"],
                    ["::anything::"],
                    ["::anything::"],
                    ["::anything::"]
                ]
            }
        ]
    }
}
```

## Pathing report - previous page flow

```json
{
    "reportDescription": {
        "reportSuiteID": "examplersid",
        "metrics": [
            {"id":"pageviews"}
        ],
        "elements" :[
            {
                "id": "page",
                "pattern": [
                    ["::anything::"],
                    ["::anything::"],
                    ["::anything::"],
                    ["::anything::"],
                    ["homepage"],
                ]
            }
        ]
    }
}
```

## Fallout report

```json
{
    "reportDescription": {
        "reportSuiteID": "examplersid",
        "metrics": [
            {"id": "pageviews"}
        ],
        "elements": [
            {
                "id": "page",
                "checkpoints": [
                    "homepage",
                    "/templates/choose-your-powerpoint-fonts-wisely/"
                ]
            }
        ]
    }
}
```

## Real-time report

Make sure that you configure real-time reports for the report suite.

```json
{
    "reportDescription": {
        "source": "realtime",
        "reportSuiteID": "examplersid",
        "metrics": [
            { "id": "revenue" }
        ]
    }
}
```

## Real-time report with sort options

Note that the `sortMethod` element contains a colon-delimited string with the desired sort options.

```json
{
    "reportDescription": {
        "source": "realtime",
        "reportSuiteID": "examplersid",
        "sortMethod": "mostPopular:.25:0:linear",
        "metrics": [
            { "id": "pageviews" }
        ]
    }
}
```

## Summary report

Note that the `reportSuiteID` property is not included. Instead, `reportsuite` is listed as a dimension under `elements` with desired report suites in the `selected` property.

```json
{
    "reportDescription": {
        "date": "YYYY",
        "metrics": [
            {
                "id": "pageviews",
            },
            {
                "id": "revenue",
            },
        ],
        "elements": [
            {
                "id": "reportsuite",
                "selected": [
                    "examplersid1",
                    "examplersid2"
                ]
            }

        ],
    }
}
```

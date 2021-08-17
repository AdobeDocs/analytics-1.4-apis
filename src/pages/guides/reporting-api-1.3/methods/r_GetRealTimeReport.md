# GetRealTimeReport

Retrieves real time report data for the specified metrics.

Real time reports do not need to be queued and retrieved using a separate API, the report data is in the response. The same API request works for both overtime and trended reports. To run an overtime report, do not include any elements in the request.

See [Real Time Reports](../reference/c_real_time.md#).

## Report.GetRealTimeReport parameters

|Name|Type|Description|
|----|----|-----------|
|**ReportDescription** |[realTimeReportDescription](../data_types/r_realTimeReportDescription.md#) |A report description that specifies the desired real time report contents, with optional configuration parameters as described in the next section.|

## Report.GetRealTimeReport response

|Type|Description|
|----|-----------|
|[reportResponse](../data_types/r_reportResponse.md#) |A structure containing the report status and report data for the specified reportID.|

## Examples

```
// minimum configuration
{
    "reportDescription": {
        "reportSuiteID": "rsid",
        "metrics": [
            { "id": "revenue" }
        ]
    }
}
 
// maximum configuration
{
    "reportDescription": {
        "reportSuiteID":     "rsid",
        "periodMinutes":     5,
        "periodCount":       5,
        "periodOffset":      10,
        "firstRankPeriod":   2,
        "algorithm":         "most popular",
        "algorithmArgument": "count",
        "floorSensitivity":  0.5,
        "metrics": [
            { "id": "pageviews" }
        ],
        "elements": [
            { 
                "id": "page", 
                "top": 2, 
                "everythingElse": true
            }
        ]
    }
}
 
// Multiple elements with selection
{
    "reportDescription": {
        "reportSuiteID": "rsid",
        "metrics": [
            { "id": "pageviews" }
        ],
        "elements": [
            { "id": "page", "selected": ["Home Page", "Contact Us", "Shopping Cart"] },
            { "id": "prop1" }
        ]
    }
}
 
// Multiple elements with search
{
    "reportDescription": {
        "reportSuiteID": "rsid",
        "metrics": [
            { "id": "pageviews" }
        ],
        "elements": [
            { "id": "page", "search": { "keywords": ["Winter", "Ski", "Snow"] } },
            { "id": "prop1" }
        ]
    }
}

// product classification
{
    "reportDescription": {
        "reportSuiteID":"rsid",
        "metrics":[
            { "id":"instances" }
        ],
        "elements":[
            { "id":"product", "classification":"title" }
        ],
        "periodMinutes":"15",
    }
}
```

**Parent topic:** [Methods](../methods/c_reporting_methods.md)


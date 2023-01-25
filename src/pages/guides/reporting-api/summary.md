# Summary Reports

Summary reports provide high-level metrics for several report suites in a single report.

Summary reports do not contain the `"reportSuiteID"` parameter; instead, the report suite is specified as the `"reportsuite"` report element, and the `"selected"` parameter contains a list of report suite IDs. The `"metrics"` parameter contains the metrics you want to report for the specified report suites.


<CodeBlock slots="heading, code" repeat="2" languages="JSON,JSON"/>

#### Report.Queue Request

```json
{
    "reportDescription":{
        "date":"YYYY",
        "metrics":[
            {"id":"pageviews"},
            {"id":"revenue"}
        ],
        "elements":[
            {
                "id":"reportsuite",
                "selected":[
                    "examplersid1",
                    "examplersid2"
                ]
            }

        ]
    }
}
```

#### Report.Get Response

```json
{
    "report": {
        "type": "summary",
        "elements": [
            {
                "id": "reportsuite",
                "name": "Report Suite"
            }
        ],
        "reportSuite": {
            "id": "examplersid1",
            "name": "Example report suite 1"
        },
        "period": "YYYY",
        "metrics": [
            {
                "id": "pageviews",
                "name": "Page Views",
                "type": "number",
                "decimals": 0,
                "latency": 1108,
                "current": false
            },
            {
                "id": "revenue",
                "name": "Revenue",
                "type": "currency",
                "decimals": 2,
                "latency": 1108,
                "current": false
            }
        ],
        "data": [
            {
                "name": "examplersid1",
                "url": "",
                "counts": [
                    "6061086",
                    "0.00"
                ]
            },
            {
                "name": "examplersid2",
                "url": "",
                "counts": [
                    "60427506",
                    "95282296.18"
                ]
            }
        ],
        "totals": null,
        "version": "1.4.18.10"
    },
    "waitSeconds": 0,
    "runSeconds": 0
}
```


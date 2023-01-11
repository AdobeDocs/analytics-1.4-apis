# Summary Reports

Summary reports provide high-level metrics for several report suites in a single report.

Summary reports do not contain the `"reportSuiteID"` parameter, instead the report suite is specified as the `"reportsuite"` report element, and the `"selected"` parameter contains a list of report suite IDs. The `"metrics"` parameter contains the metrics you want to report for the specified report suites.

```json
// Summary Report
// Note that the "reportSuiteID" parameter is not included
// and the elements list contains "reportsuite"
// Report suites are provided in the "selected" element

{
    "reportDescription":{
        "date":"YYYY",
        "metrics":[
            {
                "id":"pageviews",
            },
            {
                "id":"revenue",
            },
        ],
        "elements":[
            {
                "id":"reportsuite",
                "selected":[
                    "rsid1",
                    "rsid2"
                ]
            }

        ],
    }
}
```

**Example response:** 

```
{
    "report":{
        "type":"summary",
        "elements":[
            {
                "id":"reportsuite",
                "name":"Report Suite"
            }
        ],
        "reportSuite":{
            "id":"rsid1",
            "name":"Report Suite 1"
        },
        "period":"YYYY",
        "metrics":[
            {
                "id":"pageviews",
                "name":"Page Views",
                "type":"number",
                "decimals":0
            },
            {
                "id":"revenue",
                "name":"Revenue",
                "type":"currency",
                "decimals":2
            }
        ],
        "data":[
            {
                "name":"rsid1",
                "url":"",
                "counts":[
                    "562166",
                    "0.00"
                ]
            },
            {
                "name":"rsid2",
                "url":"",
                "counts":[
                    "484560",
                    "41265.00"
                ]
            }
        ],
        "totals":null,
        "version":"1.4.14.5"
    }
}
```


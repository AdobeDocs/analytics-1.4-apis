# Overtime Report Sample

Demonstrates a basic Overtime report request, and the resulting Analytics response.

## Overtime Report

**Note** This sample code is in JSON format, and can be used to call the REST APIs. SOAP requests can be achieved by converting the examples into XML format.

```
// This is the object that you pass to the API call - API calls are described in Report Definition.
{
  "reportDescription":{
    "reportSuiteID" : "myrsid",
    "dateFrom" : "2013-01-01",
    "dateTo" : "2013-01-03",
    "dateGranularity" : "day",
    "metrics" : [
      {
        "id" :"pageViews"
      },
      {
        "id" :"visits"
      }
    ]
  }
}
```

The preceding requests returns the following:

```
{
  "report": {
    "reportSuite": {
      "id": "myrsid",
      "name": "My Report Suite"
    },
    "period": "Tue.  1 Jan. 2013- Thu.  3 Jan. 2013",
    "elements": [
      {
        "id": "datetime",
        "name": "Date"
      }
    ],
    "metrics": [
      {
        "id": "pageViews",
        "name": "Page Views",
        "type": "number"
      },
      {
        "id": "visits",
        "name": "Visits",
        "type": "number"
      }
    ],
    "type": "overtime",
    "data": [
      {
        "name": "Tue.  1 Jan. 2013",
        "year": 2013,
        "month": 1,
        "day": 1,
        "counts": [2,2]
      },
      {
        "name": "Wed.  2 Jan. 2013",
        "year": 2013,
        "month": 1,
        "day": 2,
        "counts": [1143,131]
      },
      {
        "name": "Thu.  3 Jan. 2013",
        "year": 2013,
        "month": 1,
        "day": 3,
        "counts": [1212,146]
      }
    ],
    "totals": [2357,276]
  }
}
```

**Parent topic:** [Sample Code](../sample_code/c_sampleCode.md)


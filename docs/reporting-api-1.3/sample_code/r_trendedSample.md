# Trended Report Sample

Demonstrates a basic Trended report request, and the resulting Analytics response.

## Trended Report

**Note** This sample code is in JSON format, and can be used to call the REST APIs. SOAP requests can be achieved by converting the examples into XML format.

```
// This is the object that you pass to the API call - API calls are described in Table 5.1.
// Definitions and data for the parts of the object are in Report Definition.
{
  "reportDescription": {
    "reportSuiteID": "myrsid",
    "dateFrom": "2008-07-01",
    "dateTo": "2008-07-03",
    "dateGranularity": "day",
    "metrics": [
      {
        "id": "pageViews"
      }
    ],
    "elements": [
      {
        "id": "page",
        "top": 2
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
    "period": "Sun.  1 Jul. 2008 - Tue.  3 Jul. 2008",
    "elements": [
      {
        "id": "page",
        "name": "Page"
      },
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
      }
    ],
    "type": "trended",
    "data": [
      {
        "name": "Home Page",
        "url": "http://www.mysite.com/",
        "counts": [350],
        "breakdown": [
          {
            "name": "Sun.  1 Jul. 2008",
            "year": 2008,
            "month": 7,
            "day": 1,
            "counts": [40]
          },
          {
            "name": "Mon.  2 Jul. 2008",
            "year": 2008,
            "month": 7,
            "day": 2,
            "counts": [160]
          },
          {
            "name": "Tue.  3 Jul. 2008",
            "year": 2008,
            "month": 7,
            "day": 3,
            "counts": [150]
          }
        ]
      },
      {
        "name": "Buy Page",
        "url": "http://www.mysite.com/buy.html",
        "counts": [80],
        "breakdown": [
          {
            "name": "Sun.  1 Jul. 2008",
            "year": 2008,
            "month": 7,
            "day": 1,
            "counts": [5]
          },
          {
            "name": "Mon.  2 Jul. 2008",
            "year": 2008,
            "month": 7,
            "day": 2,
            "counts": [60]
          },
          {
            "name": "Tue.  3 Jul. 2008",
            "year": 2008,
            "month": 7,
            "day": 3,
            "counts": [15]
          }
        ]
      }
    ],
    "totals": [2357]
  }
}
```

**Parent topic:** [Sample Code](../sample_code/c_sampleCode.md)


# Keyword Search Sample

Demonstrates creating a report request that includes keywords, and the resulting Analytics response.

## Keyword Search Report

**Note** This sample code is in JSON format, and can be used to call the REST APIs. SOAP requests can be achieved by converting the examples into XML format.

```
{
  "reportDescription": {
    "reportSuiteID": "myrsid",
    "date": "2008-01",
    "metrics": [
      {
        "id": "pageViews"
      }
    ],
    "elements": [
      {
        "id": "page",
        "top": 3,
        "search": {
          "type": "OR",
          "keywords": ["help","faq"]
        }
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
    "period": "January 2008",
    "elements": [
      {
        "id": "page",
        "name": "Page"
      }
    ],
    "metrics": [
      {
        "id": "pageViews",
        "name": "Page Views",
        "type": "number"
      }
    ],
    "type": "ranked",
    "data": [
      {
        "name": "Customer Help",
        "url": "http://www.mydomain.com/help.html",
        "counts": [12]
      },
      {
        "name": "FAQ",
        "url": "http://www.mydomain.com/faq.html",
        "counts": [5]
      }
    ],
    "totals": [23962]
  }
}
```

**Parent topic:** [Sample Code](../sample_code/c_sampleCode.md)


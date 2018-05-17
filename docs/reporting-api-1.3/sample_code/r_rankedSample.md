# Ranked Report Sample

Demonstrates a basic Ranked report request, and the resulting Analytics response.

## Ranked Report

**Note** This sample code is in JSON format, and can be used to call the REST APIs. SOAP requests can be achieved by converting the examples into XML format.

```
// This is the object that you pass to the API call - API calls are described in Table 5.1.
// Definitions and data for the parts of the object are in Report Definition.
{
  "reportDescription": {
    "reportSuiteID": "myrsid",
    "date": "2008-01",
    "metrics": [
      {
        "id": "orders"
      }
    ],
    "elements": [
      {
        "id": "trackingCode",
        "classification": "Campaigns",
        "top": 2,
        "startingWith": 10
      },
      {
        "id": "trackingCode",
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
    "period": "Jan. 2008",
    "elements": [
      {
        "id": "trackingCode",
        "name": "Tracking Code",
        "classification": "Campaigns"
      },
      {
        "id": "trackingCode",
        "name": "Tracking Code"
      }
    ],
    "metrics": [
      {
        "id": "orders",
        "name": "Orders",
        "type": "number"
      }
    ],
    "type": "ranked",
    "data": [
      {
        "name": "Campaign J",
        "counts": [100],
        "breakdown": [
          {
            "name": "Tracking Code IV",
            "counts": [15]
          },
          {
            "name": "Tracking Code II",
            "counts": [3]
          }
        ]
      },
      {
        "name": "Campaign D",
        "counts": [85],
        "breakdown": [
          {
            "name": "Tracking Code X",
            "counts": [25]
          }
        ]
      }
    ],
    "totals": [1342]
  }
}
```

**Parent topic:** [Sample Code](../sample_code/c_sampleCode.md)


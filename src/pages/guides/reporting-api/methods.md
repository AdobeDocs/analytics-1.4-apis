# Queue

Queue a report to run.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X POST "https://api.omniture.com/admin/1.4/rest/?method=Report.Queue" \
    -H "x-api-key: {CLIENTID}" \
    -H "Authorization: Bearer {ACCESSTOKEN}" \
    -H "Content-Type: application/json" \
    -d '{"reportDescription":{"reportSuiteID":"examplersid"}}'
```

#### Response

```json
{
    "reportID": 1925044836
}
```

## Report.Queue Parameters

|Name|Type|Description|
|----|----|-----------|
| ` reportDescription ` | [reportDescription](../data_types/r_reportDescription.md#) | A report description that specifies the desired report contents. This data structure is validated automatically before the report is generated. |

## Report.Queue Response

|Name|Type|Description|
|----|----|-----------|
| ` reportID ` | `int` | The ID of the report. Pass this ID to [Report.Get](r_Get.md#) to retrieve the report. |

## Report Type

Report types are determined by the parameters of the `reportDescription` according to the following table:

|Report Type|Parameters|
|-----------|----------|
|Data Warehouse|The "source" parameter must be present and set to "warehouse". Once these Data Warehouse reports have been created via the Reporting API, they will also be visible in the Data Warehouse Request Manager interface, named "API Report".|
|Overtime Report|No elements with a dateGranularity specified.|
|Ranked Report|1 or more elements with no dateGranularity specified.|
|Trended Report|1 or more elements with a dateGranularity specified.|
|Pathing Report|Element in the pattern parameter.|
|Fallout Report|Element in the checkpoint parameter.|
|Summary Report|No "reportSuiteID" parameter, instead "reportsuite" is specified as the report element and the "selected" parameter contains a list of report suite IDs.|
|Real-Time Report|'source' parameter present and set to 'realtime'. Note that Real-Time reports do not have to be queued, they can run immediately using [Report.Run](r_Run.md#).|

The type derived is then returned in the result data as: ranked, trended, overtime, pathing, fallout, summary, or realtime.

**metrics** 

If the list of metrics is left empty, the default metric of "pageviews" is used.

**elements** 

If the list of elements is left empty, the default element of "page" is used.

**date/dateFrom/dateTo** 

If the date parameter(s) are omitted, the current day is used.

# Get

Retrieves a report queued using Report.Queue

 

## Report.Get Parameters

|Name|Type|Description|
|----|----|-----------|
| ` reportID ` | `int` | Report ID returned by [Report.Queue](r_Queue.md#). |
| ` page ` | `int` | (Optional) Desired page number (out of `totalPages`) for larger [Data Warehouse](../data_warehouse.md#) requests. |

## Report.Get response

|Type|Description|
|----|-----------|
| [reportResponse](../data_types/r_reportResponse.md#) | Contains the requested report data. If the report is not ready, a `HTTP 400` error is returned. ```{"error":"report_not_ready","error_description":"Report not ready","error_uri":null}``` |

# Cancel

Cancels a previously submitted report request, and removes it from the processing queue.

Method parameters are required unless noted otherwise.

## Report.Cancel parameters

|Name|Type|Description|
|----|----|-----------|
| **reportID** | `int` | Report ID returned by [Report.Queue](r_Queue.md#). |

## Report.Cancel response

|Type|Description|
|----|-----------|
| `boolean` |Returns `true` if the operation is successful.|

# GetElements

Retrieves a list of possible valid elements for a report.

See [Analytics Elements](../elements.md#).

## Permissions

Specific users may not have access to certain elements. The metrics returned by `GetElements` reflect those restrictions. Requesting an element that one doesn't have permission to access will result in a `element_inaccessible` error.

## Report.GetElements Parameters

|Name|Type|Description|
|----|----|-----------|
| `reportSuiteID` | `string` |The Analytics report suite you want to use to generate the report. For example: `reportSuiteID = "corp1"` |
| `existingElements` | `string[]` |(Optional) Include a list of elements already present in the reportDescription to get compatible metrics.|
| `existingMetrics` | `string[]` |(Optional) Include a list of metrics already present in the reportDescription to get compatible metrics.|
| `reportType` | `string` |(Optional) Include the report type (any, ranked, trended, pathing, fallout, realtime) to get compatible metrics.|

## Report.GetElements response

|Type|Description|
|----|-----------|
|  `reportElement[]` | Defines an element that appears in a report. |

# GetMetrics

Retrieves a list of possible valid elements for a report.

See [Analytics Metrics](../metrics.md#).

## Permissions

Specific users may not have access to certain metrics. The metrics returned by `GetMetrics` reflect those restrictions. Requesting a metric that one doesn't have permission to access results in a `metric_inaccessible` error.

## Report.GetMetrics Parameters

|Name|Type|Description|
|----|----|-----------|
| `reportSuiteID` | `string` |The Analytics report suite you want to use to generate the report. For example: `reportSuiteID = "corp1"` |
| `existingElements` | `string[]` |(Optional) Include a list of elements already present in the reportDescription to get compatible metrics.|
| `existingMetrics` | `string[]` |(Optional) Include a list of metrics already present in the reportDescription to get compatible metrics.|
| `reportType` | `string` |(Optional) Include the report type (any, ranked, trended, pathing, fallout, realtime) to get compatible metrics.|

## Report.GetMetrics response

|Type|Description|
|----|-----------|
| `reportMetric[]` | A structure that defines a metric that appears in a report. |

# GetQueue

Returns a list of reports in a company's report queue.

## Report.GetQueue parameters

None.

## Report.GetQueue response

|Type|Description|
|----|-----------|
| [report_queue_item[]](../data_types/r_report_queue_item_array.md#)- An array of [report_queue_item](../data_types/r_report_queue_item.md#) | A list of the company's currently queued report requests. The company is determined by the authentication credentials provided with the request.|

# Run

Run a real-time report immediately without using the queue.

## Report.Run Parameters

|Name|Type|Description|
|----|----|-----------|
| ` reportDescription ` | [reportDescription](../data_types/r_reportDescription.md#) | A report description that specifies the desired report contents. This data structure is validated automatically before the report is generated. |

## Report.Run response

|Type|Description|
|----|-----------|
| [reportResponse](../data_types/r_reportResponse.md#) | Contains the requested report data. |

## Report Type

Report types are determined by the parameters of the `reportDescription` according to the following table:

|Report Type|Parameters|
|-----------|----------|
|Overtime Report|No elements with a dateGranularity specified. Not supported by Run, use [Report.Queue](r_Queue.md#) instead.|
|Ranked Report|1 or more elements with no dateGranularity specified. Not supported by Run, use [Report.Queue](r_Queue.md#) instead.|
|Trended Report|1 or more elements with a dateGranularity specified. Not supported by Run, use [Report.Queue](r_Queue.md#) instead.|
|Pathing Report|Element in the pattern parameter. Not supported by Run, use [Report.Queue](r_Queue.md#) instead.|
|Fallout Report|Element in the checkpoint parameter. Not supported by Run, use [Report.Queue](r_Queue.md#) instead.|
|Summary Report|No "reportSuiteID" parameter, instead "reportsuite" is specified as the report element and the "selected" parameter contains a list of report suite IDs. Not supported by Run, use [Report.Queue](r_Queue.md#) instead.|
|Real-Time Report|"source" parameter present and set to "realtime".|

The type derived is then returned in the result data as: ranked, trended, overtime, pathing, fallout, summary, or realtime.

**metrics** 

If the list of metrics is left empty, the default metric of "pageviews" is used.

**elements** 

If the list of elements is left empty, the default element of "page" is used.

**date/dateFrom/dateTo** 

If the date parameter(s) are omitted, the current day is used.

# Validate

Determines if a report description is valid without running the report. If the report is not valid, an error will be returned detailing the problem.

## Report.Validate Parameters

|Name|Type|Description|
|----|----|-----------|
| ` reportDescription ` | [reportDescription](../data_types/r_reportDescription.md#) | The report structure that you want to validate. |

## Report.Validate Response

|Type|Description|
|----|-----------|
| `boolean` |Returns `true` if the operation is successful.|
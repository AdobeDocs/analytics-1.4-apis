# report

A structure data type that returns data associated with a particular report request.

|Element|Type|Description|
|-------|----|-----------|
| ` type ` | `string` | The report type that was generated based on the provided parameters. See [reportDescription](r_reportDescription.md#).|
| ` reportSuite ` | [reportReportSuite](r_reportReportSuite.md#) | String array that contains the report suite ID and name. |
| ` period ` | `string` | A string describing the report time period. |
| ` elements ` | [reportElementList](r_reportElements.md#) - an array of [reportElement](r_reportElement.md#) | A list of elements associated with the report.|
| ` metrics ` | [reportMetricList](r_reportMetrics.md#) - an array of [reportMetric](r_reportMetric.md#) | A list of metrics associated with the report. |
| ` segments ` | [reportSegmentList](r_reportSegmentList.md#) - an array of [reportSegment](r_reportSegment.md#) | List of segments to apply to the report. |
| ` data ` | [reportDataList](r_reportDataList.md#) - an array of [reportData](r_reportData.md#) | The data that makes up the bulk of the report. |
| ` totals ` | `array(double) ` | A list of metric totals. |
| ` version ` | ` xsd:string ` |   |
| ` totalPages ` | `int` | Number of available pages for [Data Warehouse](../data_warehouse.md) requests. |
| ` page ` | `int` | Current returned page (of `totalPages`) for [Data Warehouse](../data_warehouse.md) requests. |

**Parent topic:** [Data Types](../data_types/datatypes.md)


# report

A structure data type that returns data associated with a particular report request.

|Element|Type|Description|
|-------|----|-----------|
| ` type ` | `string` | The report type that was generated based on the provided parameters. See [reportDescription](r_reportDescription.md#).|
| ` reportSuite ` | [reportReportSuite](r_reportReportSuite.md#) | String array that contains the report suite ID and name. |
| ` period ` | `string` | A string describing the report time period. |
| ` elements ` | `reportElement[]` | A list of elements associated with the report.|
| ` metrics ` | `reportMetric[]` | A list of metrics associated with the report. |
| ` segments ` | `reportSegment[]` | List of segments to apply to the report. |
| ` data ` | `reportData[]` | The data that makes up the bulk of the report. |
| ` totals ` | `double[]` | A list of metric totals. |
| ` version ` | `string` |   |
| ` totalPages ` | `int` | Number of available pages for [Data Warehouse](../data_warehouse.md) requests. |
| ` page ` | `int` | Current returned page (of `totalPages`) for [Data Warehouse](../data_warehouse.md) requests. |

**Parent topic:** [Data Types](../data_types/datatypes.md)


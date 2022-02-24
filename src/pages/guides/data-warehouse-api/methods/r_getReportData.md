# GetReportData

Instructs Data Warehouse to retrieve a segment file previously created by a [DataWarehouse.Request](r_request.md#) call using the `send_via_api` parameter.

## DataWarehouse.GetReportData Parameters

|Parameter|Type|Description|
|---------|----|-----------|
|**Request_Id** |`xsd:int` | The request identifier returned by the [DataWarehouse.Request](r_request.md#) call. |
|**rsid** |`xsd:string` | The report suite associated with the Data Warehouse request. |
|**start_row** |`xsd:int` | This parameter is currently unused. Specify a value of either `0` or `1`. |

## DataWarehouse.GetReportData Response

|Type|Description|
|----|-----------|
| [Data Warehouse Report](../data_types/r_data_warehouse_report.md#) | A table containing the specified [DataWarehouse.Request](r_request.md#) call. |

**Parent topic:** [Methods](../methods/c_data_warehouse_methods.md)


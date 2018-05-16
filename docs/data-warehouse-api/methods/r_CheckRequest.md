# CheckRequest

Submits a one-time report request to be delivered through e-mail or FTP.

## DataWarehouse.CheckRequest Parameters

|Parameter|Type|Description|
|---------|----|-----------|
|**Request\_Id** |`xsd:int` | The Data Warehouse Request ID for which a status should be returned. You can only check the status of a request that you submitted. |

## DataWarehouse.CheckRequest Response

|Type|Description|
|----|-----------|
| [tns:data\_warehouse\_request](../data_types/r_data_warehouse_request.md#) | A structure that contains information about the specified data segment. If the specified `Request_Id` does not contain any data, the method returns the following response:  `Empty data set. No data for Request ID *<Request\_Id\>*.` |

**Parent topic:** [Methods](../methods/c_data_warehouse_methods.md)


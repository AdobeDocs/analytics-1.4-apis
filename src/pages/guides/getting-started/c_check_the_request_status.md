# Step 2: Check the Request Status

 

You can check the status of the request you sent using the `DataWarehouse.CheckRequest()` method. This method accepts the report ID as a parameter and returns the status in a request object.

**PHP Code** 

```
// Status codes returned by the CheckRequest function
$REPORT_STATUS_COMPLETED = 'Completed';

echo "sleeping 5 seconds...\n";
sleep(5);

/* Check on the DW request */
$result = sendRequest('DataWarehouse.CheckRequest', array('Request_Id'=>$request_id) );
var_dump($result);   

```

**Java Code** 

```
Thread.sleep(5000);
/* Store the status in the request object */
Data_warehouse_request request= port.dataWarehouseCheckRequest(reportID);

```

**C# Code** 

```
Thread.Sleep(5000);
/* Store the status in the request object */
data_warehouse_request request = 
client.DataWarehouseCheckRequest(reportID);

```

**Parent topic:** [Data Warehouse API Tutorial](c_data_warehouse_API_tutorial.md)


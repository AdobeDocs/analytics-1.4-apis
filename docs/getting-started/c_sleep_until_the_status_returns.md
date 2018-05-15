# Step 3: Sleep Until the Status Returns

 

There may be a long delay before you can get the report data or call the method to retrieve it. You need to wait to pick up the report until the request returns a status of “completed”.

**PHP Code** 

```
/**
*  1.Repeatedly check on request in the queue
*      a) check frequency based on $max_checks and $check_wait_seconds parameters    
*  2.Returns the report when ready
*/  
$attempts = 0;
$nextSleepSeconds = 0;
$max_checks=10;
$check_wait_seconds=10;
$max_report_checks = 500; /* Ultimate system maximum checks on the report queue */
$reportDone = false;
while( $nextSleepSeconds = nextSleep( $attempts, $max_checks, $check_wait_seconds) )
{
    if($debug) echo("sleeping for... $nextSleepSeconds seconds.\n");
    sleep($nextSleepSeconds);   	 

    /* Check on the DW request */
    $result = sendRequest('DataWarehouse.CheckRequest', 
array('Request_Id'=>$request_id) );
    var_dump($result);    
    echo "check on DW request = " . $result['message'];
    $status = $result['message'];
    if($debug) echo("Request Status: ". $status ."\n");

    /* Check if report is ready */
    if($status == $REPORT_STATUS_COMPLETED)
    {
 /* Report Completed */
   	 $reportDone = true;
   	 break;   		 
  
    } else if( strstr($status, 'fail') || strstr($status, 'error') ){
 /* Report failed, exit out */
   	 throw new Exception("dataWarehouse checkRequest(): " . $status );//. " - ". $response['error_msg'], 0);   				 
    
    } else {
 /* Report is not ready yet */
   	 if($debug) echo $status . "\n";
    }
    $attempts++;
}

/* Check if the report completed or timed-out */
if($reportDone)
{
    /* Report has Completed */
          echo "DW report is done ";    

} else { 
    /* Report is not ready yet */   
          echo("DataWarehouse: Report response timeout.");
          exit(); 
}

/**
* Determines next sleep time for report queue checking.
*      Uses a backing off algorithm so that long requests don't have to check as often.
*
* @param    $attempts     int    The number of checks so far
* @param    $max_checks    int User specified maximum number of checks
*
* @return    FALSE to stop checking OR the number of seconds for the next sleep
*/
function nextSleep( $attempts, $max_checks, $check_wait_seconds ){
    global $max_report_checks;
    if( $max_checks <= 0){
   	 if($attempts >= $max_report_checks)
   		 return -1;
   		 
   	 if($attempts <= 4 ){
   		 return 3;
   	 }else{
   		 return min( ($attempts - 4) * 3, 30);   		 
   	 } 
    }else{
   	 if($attempts < $max_checks)
   		 return $check_wait_seconds;
    }
    return FALSE;
}		

```

**Java Code** 

```
/* Sleep till the dataWarehouseCheckRequest method returns Waiting to Start or In Progress messages */
while(request.getMessage().equalsIgnoreCase("Waiting to Start") || request.getMessage().equalsIgnoreCase("In Progress")) 
		    {
				Thread.sleep(10000);
				System.out.println("Waiting for completed status..."+request.getMessage());

/* Store the status of the Data Warehouse request */
				request = port.dataWarehouseCheckRequest(reportID);
		    }

```

**C\# Code** 

```
/* Sleep till the dataWarehouseCheckRequest method returns Waiting to Start or In Progress messages */
while (request.message.Equals("Waiting to Start") || request.message.Equals("In Progress"))
            {
                Thread.Sleep(10000);
                Console.WriteLine("Waiting for completed status..." + request.message);

/* Store the status of the Data Warehouse request */
                request = client.DataWarehouseCheckRequest(reportID);
            }

```

**Parent topic:** [Data Warehouse API Tutorial](c_data_warehouse_API_tutorial.md)


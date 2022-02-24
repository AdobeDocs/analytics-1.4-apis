# Step 2: Check the Report Status

All of the report queuing methods place the defined report into a queue for processing.

You can check the status of the report in the processing queue by passing the report ID to the `report.GetStatus()` method. The method will return a structure containing status information for the specified report ID.

The status will be “done” when the report is ready to be retrieved.

**PHP Code** 

```
/**
*  1.Repeatedly check on request in the queue (using Report.GetStatus)
*      a) check frequency based on $max_checks and $check_wait_seconds 
*  2.Returns the report when ready
*/  
$attempts = 0;
$nextSleepSeconds = 0;
$max_checks=20;
$check_wait_seconds=2;
$reportDone = false;
while( $nextSleepSeconds = nextSleep( $attempts, $max_checks, $check_wait_seconds) )
{
    if($debug) echo("sleeping for... $nextSleepSeconds seconds.n");
    sleep($nextSleepSeconds);        

    if($debug) echo("Checking on queue: $queue (" . date("H:i:s") . ")n");

    /* Check the status */
    $status = rp_getStatus($queue);
    
    /* Check if the report is ready */
    if($debug) echo("Request Status: ". $status ."n");
    if($status == $REPORT_STATUS_DONE)
    {
 /* Report is ready */
        $reportDone = true;
        break;            
  
    } else if( strstr($status, 'fail') || strstr($status, 'error') ){
       /* Report failed, exit out */     
throw new Exception("rp_queueAndGetReport(): " . $status );//. " - ". $response['error_msg'], 0);                    
    } else {
 /* Report not ready yet */
        if($debug) echo $status . "n";
    }
    $attempts++;
}

/**
 *  Does a token free status check on a single report
 *  @returns string status
 */                   
function rp_getStatus($reportID){
    $response = sendRequest('Report.GetStatus',array('reportID' => $reportID));
    return $response['status'];
}

/**
 * Determines next sleep time for report queue checking.
 * Uses a backing off algorithm so that long requests don't have to check as often.

 *
 * @param    $attempts     int    The number of checks so far
 * @param    $max_checks   int User specified maximum number of checks
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
Thread.sleep(2000);
/* Get the report status (using Report.GetStatus) */
Report_status status = port.reportGetStatus(reportID);
System.out.println("Got after reportGetStatus!"+status);

/* counters for checking status */
int checkCount = 0;
int maxChecks = 20;

/* Repeatedly check on request in the queue (using Report.GetStatus) */
while (!status.getStatus().equals("done"))
{
System.out.println("status: " + status.getStatus());
if(! status.getStatus().equals("done") && ! 
status.getStatus().equals("ready"))
throw new Exception("Unexpected status: " + status.getStatus() +     ", " + status.getError_msg());

checkCount++;
    if(checkCount >= maxChecks)
    throw new Exception("Report timeout: report hasn't returned after " + maxChecks + "checks");

status = port.reportGetStatus(reportID);
    if(!status.getStatus().equals("done"))
    Thread.sleep(2000);
}

```

**C# Code** 

```
Thread.Sleep(5000);

/* Get the report status (using Report.GetStatus) */
       report_status status = client.ReportGetStatus(response.reportID);

/* counters for checking status */
int checkCount = 0;
int maxChecks = 20;

/* Repeatedly check on request in the queue (using Report.GetStatus) */
while (status.status != "done")
{
    Console.WriteLine("status: " + status.status);
    if(status.status != "done" && status.status != "ready")
throw new Exception("Unexpected status: " + status.status +     ", " + status.error_msg);

      checkCount++;
    if(checkCount >= maxChecks)
    throw new Exception("Report timeout: report hasn't returned after " + maxChecks + "checks");

      status = client.ReportGetStatus(reportID);
    if(status.status != "done")
    Thread.Sleep(2000);
}

```

**Parent topic:** [Reporting API Tutorial](c_Reporting_API_Tutorial.md)


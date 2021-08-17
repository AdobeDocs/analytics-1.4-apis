# Step 3: Retrieve the Report Data

In PHP, you use the `getReport()` method to retrieve the report object and then loop through the data elements to print the data on the console.

In Java, once the report has finished processing, you use the `getReport()` method to retrieve the report object and then the `getData()` method to access the actual report data.

In C\#, once the report has finished processing, you use the `ReportGetReport` method to retrieve the response object. Use the `report.data` method within the response to access the actual report data.

The following code retrieves the report data and prints it to the console.

**PHP Code** 

```
/* Check if the report completed or timed-out */
if(!$reportDone)
{
    throw new Exception("runReport(): Report response timeout.", 1);
} else {    
    $report=rp_getReport($queue);    
    $record_count = count($report['data']);
   	 
    /* Print the report */
    if($record_count > 0)
    {
 echo "\n". "Report Suite: JJEsquire Getting Started Suite" . "\n";   
  	 echo "Report ID: ". $queue ."\n";   
  	 echo "Report record count: ". $record_count ."\n";
   	 echo "Report data:\n";
   	 printReport($report);
    }
}

/**
 *  Should always have used rp_getStatus previous to calling this method
 *  @returns mixed report object
 */                   
function rp_getReport($reportID){
    global $REPORT_STATUS_DONE;
    $response = sendRequest('Report.GetReport',array('reportID' => $reportID));
    if($response['status'] == $REPORT_STATUS_DONE){
   	 return $response['report'];
    }else
   	 throw new Exception("rp_getReport(): " . $response['status'] . " - ". $response['statusMsg'], 0);
}

/* Print the report  */   
function printReport($report) {
    foreach($report['data'] as $records => $cols){
   	 echo $cols['name'];
   	 //if($cols['url'])
   	 $date = '';
   	 if(array_key_exists('year',$cols)) $date .= $cols['year'];
   	 if(array_key_exists('month',$cols)) $date .= '-' . $cols['month'];
   	 if(array_key_exists('day',$cols)) $date .= '-' . $cols['day'];
   	 if(array_key_exists('hour',$cols)) $date .= ' ' . $cols['hour'] . ':00';
   	 if($date) echo ' [' . $date . ']';
   	 echo " =>";
   	 foreach($cols['counts'] as $c)
   		 echo "\t" . $c;
   	 echo "\n";
   	 
   	 if(array_key_exists('breakdown',$cols)){
   		 foreach($cols['breakdown'] as $brRow){
   			 echo "\t" . $brRow['name'];
   			 //if($cols['url'])
   			 $date = '';
   			 if(array_key_exists('year',$brRow)) $date .= $brRow['year'];
   			 if(array_key_exists('month',$brRow)) $date .= '-' . $brRow['month'];
   			 if(array_key_exists('day',$brRow)) $date .= '-' . $brRow['day'];
   			 if(array_key_exists('hour',$brRow)) $date .= ' ' . $brRow['hour'] . ':00';
   			 if($date) echo ' [' . $date . ']';
   			 echo " =>";
   			 foreach($brRow['counts'] as $c)
   				 echo "\t" . $c;
   			 echo "\n";
   		 }
   	 }
    }
}

```

**Java Code** 

```
Java code

/* Check is the status of report is done */
if(status.getStatus().equals("done"))
{
       /* Store the report response in reportResponse */
	ReportResponse reportResponse = port.reportGetReport(reportID);

       /* Get the report */
Report report = reportResponse.getReport();

       /* Get the report data */
	ReportData[] reportData = report.getData();
  
      System.out.println("Is there data in the report? "+reportData.length);

       /* Loop over report data length and retrieve individual records */
	for (int j = 0; j < reportData.length; j++) 
{
System.out.print(reportData[j].getName());
		double[] counts = reportData[j].getCounts();
for (int k = 0; k < counts.length; k++) 
{
System.out.println(" - " + counts[k]);
		}
	}
}

```

**C\# Code** 

```
/* Check is the status of report is done */
if (status.status == "done")
         {
           Console.WriteLine("Status is \"done\". Getting report...");
     /* Store the report response in reportResponse */
          reportResponse reportResponse = 
                     client.ReportGetReport(response.reportID);
  
    /* Get the report data */
          reportData[] data = reportResponse.report.data;

    /* Loop over report data length and retrieve individual records */
           foreach (reportData d in data)
             {
              Console.WriteLine(d.name + "\t" + d.counts[0]);
             }

          }
       else
         {
           Console.WriteLine("report was not done. id=" + response.reportID);

```

**Parent topic:** [Reporting API Tutorial](c_Reporting_API_Tutorial.md)


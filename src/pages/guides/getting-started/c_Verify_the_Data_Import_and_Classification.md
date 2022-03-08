# Step 7: Verify the Data Import and Classification

 

The import job can take several hours to complete once it has been submitted. Once the import job finishes processing, you can check if the data was properly classified in the Adobe Experience Cloud by running a report on Brands or Categories.

In Analytics UI, navigate to **Products** > **Products** > **Brand**.

Notice that the report data that comes back shows the brand classification data that you added.

## Export classification records

After you create, populate and import your classifications for the first time, you might find that you need to update them. In this section, you will learn how to export, update and re-import classification records in three steps:

1.  Create an export job using the `Saint.ExportCreateJob()` method.
2.  Check the job status using the `Saint.CheckJobStatus()` method.
3.  Retrieve the report data using the `Saint.ExportGetFileSegment()` method.

After you retrieve the data, you can update it and then import using the information outlined earlier in this article for creating and populating an import job.

## Creating an export job

Create the export job using the Saint.ExportCreateJob() method and the parameters in the following table.

| Parameters | Description |
|--------------|---------------|
| report_suite[] | The list of report suites from which to export data. |
| campaign_filter_option |  The filter option based on campaign activity or date. Supported values include: `0`: All Campaigns (No filter) (default) `1`: Active campaigns `2`: Campaign by begin and end date |
| campaign_filter_begin_range | The campaign start date to filter the data. |
| campaign_filter_end_range | The campaign end date to filter the data. |
| date_filter_row_start_date | The start date for including rows in the export. |
| date_filter_row_end_date | The end date for including rows in the export. |
| email_address | The email address to receive SAINT export job notifications. |
| relation_id | The unique ID for the basic report element data you are exporting. This ID is returned from the `Saint.GetCompatibilityMetrics()` method. |

The following code shows you how to export filtered classification records.

**PHP Code** 

```
/* SAINT Export Create Job */ 
$exportParams = array( 
'campaign_filter_begin_range'=>'', 
'campaign_filter_end_range'=>'', 
'campaign_filter_option'=>0, 
'date_filter_row_start_date'=>'Jan 2000', 
'date_filter_row_end_date'=>'Jan 2050', 
'email_address'=>$notification_email, 
'relation_id'=>, // relation id 
'report_suite_array'=>$report_suite_array, 
'row_match_filter_empty_column_name'=>'', 
'row_match_filter_match_column_name'=>'', 
'row_match_filter_match_column_value'=>'', 
'select_all_rows'=>0, 
'select_number_of_rows'=>10000 
); 

$response = sendRequest('Saint.ExportCreateJob', $exportParams ); 
if (is_string($response)) { 
$job_id = (int)$response; 
if (!is_int($job_id)) 
$job_id = FALSE; 
} else { 
$job_id = FALSE; 
} 
var_dump($job_id); 
?>
```

**Java Code** 

```
/* Call Saint.ExportCreateJob -Submits parameters to create an export file in SAINT. This file represents classifications for a given relation */ 
String responseExportCreateJob = port.saintExportCreateJob("", "", 0, "Jan 2000", "Jan 2050", "", "", , report_suite_array, "", "", "", 0, 1000); 
System.out.println("responseExportCreateJob retuned a : "+responseExportCreateJob);
```

## Checking the Job Status

After creating an export job, you can check on its status using `Saint.CheckJobStatus()` method.

This method returns a two-part status response that is an array where you must look for both a status of `completed` and `Ready`.

When this condition occurs store the `file_id` and the `viewable_pages` from the second response part.

```
/* SAINT Check Report Status */ 
$max_checks=40; 
$check_rate_seconds=3; 
$response = ''; 
$done = FALSE; 
$viewable_pages = 0; 
$file_id = 0; 
$check_count = 0; 
while (!$done && $check_count < $max_checks) { 
sleep($check_rate_seconds); 
if ($debug) echo("st_exportCheckAndRetrieve(): checking job_id = $job_idn"); 
/* Saint.CheckJobStatus */ 
$response = sendRequest('Saint.CheckJobStatus', array('job_id'=>$job_id ) ); 
if (is_array($response)) { 
if (stristr($response[0]['status'], 'completed') !== FALSE 
&& count($response) > 1 
&& is_array($response[1]) 
&& $response[1]['status'] == 'Ready' 
) { 
if ($response[1]['type'] == 'file_id' && $response[1]['status'] == 'Ready') { 
$viewable_pages = $response[1]['viewable_pages']; 
$file_id = $response[1]['id']; 
} 
$done = TRUE; 
var_dump($response); 
} 
} 
$check_count++; 
if ($debug) echo("st_exportCheckAndRetrieve(): looping again... $check_countn"); 
}//end: while 

if ($check_count >= $max_checks && ! $done) throw new Exception('st_exportCheckAndRetrieve(): timed out while pinging CheckJobStatus'); 
if ($file_id <= 0) throw new Exception('st_exportCheckAndRetrieve(): no file_id was retrieved from CheckJobStatus'); 
if ($viewable_pages <= 0) throw new Exception('st_exportCheckAndRetrieve(): no viewable_pages was retrieved from CheckJobStatus'); 
?>
```

**Java Code** 

```
int checkCount = 0; 
int MAX_CHECKS = 40; 
int CHECK_INTERVAL = 6000; // 3 seconds 
Thread.sleep(CHECK_INTERVAL); 

/* Export check job status */ 
com.omniture.www.Saintresult[] exportCreateJobStatus = port.saintCheckJobStatus(Integer.parseInt(responseExportCreateJob)); 

/* Check status of export job */ 
while (!(exportCreateJobStatus[0].getStatus().equalsIgnoreCase("Completed") && exportCreateJobStatus[1].getStatus().equalsIgnoreCase("Ready"))) 
{ 
System.out.println("Current status for exportCreateJobStatus is: "+exportCreateJobStatus[0].getStatus()); 

checkCount++; 
if (checkCount >= MAX_CHECKS) 
throw new Exception("Report timeout: report hasn't returned after " + MAX_CHECKS + " status checks"); 
/* Export create job */ 
exportCreateJobStatus = port.saintCheckJobStatus(Integer.parseInt(responseExportCreateJob)); 

if (!(exportCreateJobStatus[0].getStatus().equalsIgnoreCase("Completed") && exportCreateJobStatus[1].getStatus().equalsIgnoreCase("Ready"))) 
Thread.sleep(CHECK_INTERVAL); 
}
```

## Retrieving the Report Data

The export data files can be very large in size, so you can download them in batches or segments, also called pages earlier in this article.

The following code shows you how to use the `Saint.ExportGetFileSegment()` method to download the file in segments when the status returns the `Ready` string.

**PHP Code** 

```
$data_set = array(); 
$data_set['data'] = array(); 

for ($i=1; $i <= $viewable_pages; $i++) { 
/* Saint.GetFileSegment */ 
$response = sendRequest('Saint.ExportGetFileSegment', array('file_id'=>$file_id, 'segment_id'=>$i ) ); 
echo "received chunk of " . count($response[0]['data']) . " rows.n"; 
if (is_array($response) && is_array($response[0])) { 
if (!$data_set['header']) 
$data_set['header'] = $response[0]['header']; 

foreach($response[0]['data'] as $data_record){ 
$data_set['data'][] = $data_record['row']; 
} 
} 
} 
var_dump($data_set); 
?>
```

**Java Code** 

```
/* Loop to check export job status */ 
if (exportCreateJobStatus[0].getStatus().equalsIgnoreCase("Completed")) 
{ 
System.out.println("Current status for exportCreateJobStatus within if loop is: "+exportCreateJobStatus[0].getStatus()); 
System.out.println("Another status to check for exportCreateJobStatus within if loop: "+exportCreateJobStatus[1].getStatus()); 

/* Check to see status is Ready */ 
if (exportCreateJobStatus[1].getStatus().equalsIgnoreCase("Ready")) 
{ 
String fileID = exportCreateJobStatus[1].getType(); 

/* Get the number of viewable pages */ 
int viewablePages = exportCreateJobStatus[1].getViewable_pages(); 

System.out.println("File ID is: "+fileID+" and value of viewablePages is:"+viewablePages); 

/* Loop over the number of pages to retrieve file segment or data */ 
for(int i=0;i { 
com.omniture.www.Pagedetail[] responseExportGetFileSegment = port.saintExportGetFileSegment(Integer.parseInt(fileID), i); 

System.out.println("responseExportGetFileSegment retuned the follwing headers: "+responseExportGetFileSegment[0].getHeader()); 
System.out.println("responseExportGetFileSegment retuned the follwing data records: "+responseExportGetFileSegment[0].getData().length); 
} 
} 
}
```

**Parent topic:** [SAINT API Tutorial](c_SAINT_API_Overview.md)


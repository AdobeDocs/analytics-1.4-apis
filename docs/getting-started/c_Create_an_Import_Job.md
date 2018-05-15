# Step 4: Create an Import Job

 

The code in this section shows you how to create the import job using the Saint.ImportCreateJob\(\) method with the parameters specified in Table 1.

| Parameter | Description |
|-------------|---------------|
| check\_divisions | Boolean value that specifies whether to check report suites for compatible divisions. Supported values are: `0`: Do not check report suite compatibility `1`: Check report suite compatibility \(default\) |
| description | A description of the import job. |
| email\_address | The email address to receive the report. |
| export\_results | Boolean value that specifies whether to automatically perform an export when the import job finishes processing. Supported values include: `0`: Do not export \(default\) `1`: Export when the import job completes. |
| header | An array of column values for classification. |
| overwrite\_conflicts | Boolean value that specifies whether to overwrite data when conflicts occur. Supported values include: `0`: Do not rewrite data on conflicts \(default\) `1`: Overwrite data on conflicts |
| relation\_id | The relation ID. You got this ID as a return value from [Saint.GetCompatibilityMetrics\(\)](https://marketing.adobe.com/developer/documentation/saint-api/r-getcompatibilitymetrics) method. |
| report\_suite\_array | The list of report suites to receive the import job. |

The first header column in the header parameter is always named `Key`, is mandatory, and must be unique across the entire system. For this article’s JJ. Esquire demo application, the `Key` value in each data record is the product SKU collected during Analytics JavaScript tagging.

**PHP Code** 

```
/* Saint.ImportCreateJob */ 
$relation_id = ''; 
$header = array( 
'Key', // This is mandatory 
'Category', 
'Brand' 
); 
$importParams = array( 
'check_divistions'=>0, 
'description'=>'Classifying data for JJEsquire', 
'email_address'=>$notification_email, 
'export_results'=>0, // export_results = 0, meaning do not export following the import
'header'=>$header, 
'overwrite_conflicts'=>0, 
'relation_id'=>$relation_id, 
'report_suite_array'=>$report_suite_array 
); 
$response = sendRequest('Saint.ImportCreateJob', $importParams ); 

var_dump($response); 
$job_id = (int) $response; 
?>
```

**Java Code** 

```
/* Use Saint.ImportCreateJob to specify the parameters for the Import job and the header columns to be classified */ 
String emailAddress = ""; 
int relationId = ""; 
String[] header = new String[3]; 
/* Refer to the note of the Key column*/ 
header[0] = "Key"; // This is mandatory 
header[1] = "Category"; 
header[2] = "Brand"; 

int importJobID = port.saintImportCreateJob(0, "Classifying data for JJEsquire", emailAddress, 0, header, 0, relationId, report_suite_array); 
System.out.println("Value of reportID from saintImportCreateJob is: "+importJobID);
```

The `Saint.ImportCreateJob()` method returns the ID of the newly created import job. You will use this ID to populate the import job in the next step.

**Parent topic:** [SAINT API Tutorial](c_SAINT_API_Overview.md)


# Step 5: Populating an Import Job

 

After you create the import job, you can populate it with data using the `Saint.ImportPopulateJob()` method, which appends row data to an uncommitted SAINT import job and requires the parameters in the following table.

| Parameter | Description |
|-------------|---------------|
| job\_id | The SAINT import job ID to append the row data. Use the returned job ID from the `Saint.ImportCreateJob()` method. |
| page | The page number, or sequential batch number, for the import. |
| row | An array of row data formatted to match the header columns of the import job. |

 

If you upload a large amount of data, you can upload it in batches, often referred to as segments, or pages. You must number the pages sequentially \(either ascending or descending\) to avoid errors when SAINT processes the job. Remember to start the page numbering from 1, and not 0.

The `Saint.ImportPopulateJob()` method returns a status string that indicates if the job successfully processed. Valid return values include `Success` or `Failed`.

In this JJ. Esquire demo application for this article, the following code shows you how to add one record, but two classifications \(Winter Ski Jacket category and Northface brand\), for a single product SKU \(100241\).

**PHP Code** 

```
/* Saint.ImportPopulateJob */ 
$data = array( 
array('100241','Winter Ski Jackets','Northface') 
); 
if ($job_id >= 1) { 
$chunked_array = array_chunk($data, 25000); 
$page = 1; 
foreach ($chunked_array as $chunk) { 
$xml = format_rows($job_id, $page, $chunk); 
/* Saint.ImportPopulateJob */ 
$response = sendRequest('Saint.ImportPopulateJob', $xml ); 
$page++; 
//var_dump($response); 
} 
} 

/** 
* Format Rows: 
* 
* 
* home page 
* TypeA 
* Rank1 
* 
* 
*/ 
function format_rows($job_id, $page, $rows) { 
$xml = '' . $job_id . '' . $page . ''; 
$xml .= ''; 
foreach ($rows as $r) { 
$xml .= ''; 
foreach($r as $c) { 
$xml .= '' . _xmlentities($c) . ''; 
} 
$xml .= ''; 
} 
$xml .= ''; 
return $xml; 
} 

function _xmlentities ( $string ) { 
return str_replace( array( '&', '"', "'", '<', '>' ), array( '&', '"', ''', '<', '>'), $string); 
} 
?>
```

**Java Code** 

```
/* Create the row data */ 
com.omniture.www.Row[] rows = new com.omniture.www.Row[10]; 

String[] row = new String[3]; 

/* This is the SKU number of the jacket that we tagged in the Tagging article and the data got uploaded via tagging into the report suite.*/ 
row[0] = "100241"; 
row[1] = "Winter Ski Jackets"; 
row[2] = "Northface"; 
rows[0] = new com.omniture.www.Row(); 
rows[0].setRow(row); 

/* Import populate job request */ 
String responseImportPopulateJob = port.saintImportPopulateJob(importJobID, 1, rows); 
System.out.println("saintImportPopulateJob retuned a : "+responseImportPopulateJob);
```

**Parent topic:** [SAINT API Tutorial](c_SAINT_API_Overview.md)


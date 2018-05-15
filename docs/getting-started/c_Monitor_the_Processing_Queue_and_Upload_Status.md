# Step 3: Monitor the Processing Queue and Upload Status

 

You can monitor the status of the data upload in two steps:

-   Get the unique identifier for the data being uploaded
-   Retrieve the upload status using that identifier

The data upload is actually an FTP file transfer so the unique identifier is the File ID.

## Retrieve the File ID for the current data upload

You can use the `DataSource.GetFileIDs()` or the `DataSource.GetFileInfo()` to get the File ID of the file in the processing queue. The methods require the Data Source ID and the Report Suite ID to identify the file.

**PHP Code** 

```
/* DataSource.GetFileIDs - Get File IDs for a Data Source in a Report Suite */ 
$params = array( 
'dataSourceID'=>$dsId, 
'filter'=>'', 
'reportSuiteID'=>$rsId 
); 
$result = sendRequest('DataSource.GetFileIDs', $params ); 
var_dump($result); 
sleep(2); 
?>
```

**Java Code** 

```
/* DataSource.GetFileIDs - Get File IDs for a Data Source in a Report Suite */ 
FileIDResult responsedataSourceGetFileIDs = port.dataSourceGetFileIDs(Integer.toString(dataSourceID), "", reportSuiteID); 
System.out.println("Status of responsedataSourceGetFileIDs is: "+responsedataSourceGetFileIDs.getStatus().getMessage());
```

## Monitor the File Upload Status

Use the `DataSource.GetFileStatus()`, with the File ID and the Report Suite ID, to monitor the status of the file upload. The status information tells you if the file is queued for processing, processing, or processed. When data source processing completes, the data sent through the data source is available in Analytics.

**PHP Code** 

```
/* DataSource.GetFileStatus - Get the File Status for a Data Source in a Report Suite */ 
$params = array( 
'dataSourceFileID'=>$dsId, 
'reportSuiteID'=>$rsId 
); 

$result = sendRequest('DataSource.GetFileStatus', $params ); 
var_dump($result); 
?>
```

**Java Code** 

```
/* DataSource.GetFileStatus - Get the File Status for a Data Source in a Report Suite */ 
FileStatusResult responsedataSourceGetFileStatus = port.dataSourceGetFileStatus(Integer.toString(responsedataSourceSetupGeneric.getDataSourceID()), reportSuiteID); 

System.out.println("Status of responsedataSourceGetFileStatus is: 
"+responsedataSourceGetFileStatus.getStatus().getMessage());
```

**Parent topic:** [Data Sources API Tutorial](c_Data_Sources_Overview.md)


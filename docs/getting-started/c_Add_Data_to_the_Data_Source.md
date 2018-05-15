# Step 2: Add Data to the Data Source

 

Once the data source is created, you can add data to it by using either the `DataSource.BeginDataBlock()` or `DataSource.AppendDataBlock()` methods.

## Define the Method Parameters

Each of these methods requires the `columnNames` and `rows` parameters. The `columnNames` parameter is an array of headers for the report suite.

**Note:** Remember that you can get the headers from the optional data template downloaded using the Data Source Activation Wizard.

The rows parameter is an array of the data you want to import. The code following this explanation imports the revenue associated with a Purchase by Phone event in the column for event 1 and the date that the transaction took place. These two values are the additional data that you are uploading for an existing product and a transaction ID in your report suite.

For this JJ. Esquire demo application, the Product column contains the product SKU number and the `transactionID` column contains the transaction ID.

**Note:** You may need to ask your Adobe representative to enable the `transactionID` for recording. You can check whether the variable is enabled in Admin \> Data Sources \> Manage.

## Delay the Data Processing

When the Adobe Experience Cloud creates a new data source, it reserves space on an FTP server for the data upload. Since this can take a few minutes to create, you must create a delay after calling the `DataSource.SetupGeneric()` method and before calling the `DataSource.BeginDataBlock()` or `DataSource.AppendDataBlock()` methods.

The following PHP code defines a 180 seconds \(3 minutes\) delay while the associated Java code defines a 180000 millisecond \(3 minutes\) delay while the FTP space is being provisioned.

**PHP Code** 

```
// Sleep 3 minutes while the FTP space is being provisioned 
sleep(180); 

/* DataSource.BeginDataBlock - sends data to Analytics using a DataSource */ 
$blockName = 'OfflineRevenueBlock1'; 
$colNameArray = array('Date','Product','Event 2', 'transactionID'); 
$rowData = array( 
array('1/13/2011','100302','455','003456'), 
array('1/14/2011','100303','455','003456') 
); 

/* Set the endOfBlock to 0 to continue appending data. */ 
$endOfBlock=â0â; 

$params = array( 
'blockName'=>$blockName, 
'dataSourceID'=>$dsId, 
'reportSuiteID'=>$rsId, 
'columnNames'=>$colNameArray, 
'rows'=>$rowData, 
'endOfBlock'=>$endOfBlock 
); 

$result = sendRequest('DataSource.BeginDataBlock', $params ); 

$blockID = $result['blockID']; 
var_dump($result); 
sleep(3); 

/* DataSource.AppendDataBlock - sends data (continued) to Analytics using a DataSource */ 
$rowData = array( 
array('1/11/2011','100300','455','003456'), 
array('1/12/2011','100301','455','003456') 
); 

/* Set the endOfBlock to '' to stop appending data. */ 
$endOfBlock=''; 
$params = array( 
'blockID'=>$blockID, 
'dataSourceID'=>$dsId, 
'reportSuiteID'=>$rsId, 
'rows'=>$rowData, 
'endOfBlock'=>$endOfBlock 
); 

$result = sendRequest('DataSource.AppendDataBlock', $params ); 
var_dump($result); 
sleep(3); 
?>
```

**Java Code** 

```
// Sleep 3 minutes while the FTP space is being provisioned 
Thread.sleep(180000); 

/* DataSource.BeginDataBlock - Submits the first HTTP data block in the current Data Sources data submission */ 
String blockName = "OfflineRevenueBlock1"; 
String[] columnNames = new String[4]; 
columnNames[0] = "Date"; 
columnNames[1] = "Product"; 
columnNames[2] = "Event 2"; 
columnNames[3] = "transactionID"; 

/* The SKU number and the transaction ID are the same that were created in the tagging article. */ 
String[][] rows = new String[][]{{"1/13/2011","100302","455","003456"}, {"1/14/2011","100303","455","003456"}}; 

/* Set the endOfBlock to an empty string to signify end of block and set it to false to continue appending data. */ 
String endOfBlock = "false"; 
javax.xml.rpc.holders.IntHolder blockID = new javax.xml.rpc.holders.IntHolder(); 
javax.xml.rpc.holders.IntHolder fileID = new javax.xml.rpc.holders.IntHolder(); 
javax.xml.rpc.holders.StringHolder status = new javax.xml.rpc.holders.StringHolder(); 

port.dataSourceBeginDataBlock(blockName, columnNames, Integer.toString(responsedataSourceSetupGeneric.getDataSourceID()), endOfBlock, reportSuiteID, rows, blockID, fileID, status); 

Thread.sleep(3000); 

System.out.println("Returned value of blockID is: "+blockID.value+" and status is: "+status.value); 

/*DataSource.AppendDataBlock - Appends an additional HTTP data block to a Data Sources data submission. */ 
rows = new String[][]{{"1/11/2011","100300","455","003456"}, {"1/12/2011","100301","455","003456"}}; 

port.dataSourceAppendDataBlock(blockID.value, Integer.toString(responsedataSourceSetupGeneric.getDataSourceID()), endOfBlock, reportSuiteID, rows, fileID, status); 

System.out.println("Returned value of blockID is: "+blockID.value+" and status is: "+status.value);
```

**Parent topic:** [Data Sources API Tutorial](c_Data_Sources_Overview.md)


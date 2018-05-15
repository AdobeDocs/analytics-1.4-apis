# Common Data Sources Methods

In this section, you will learn of a few useful Data Sources API methods.

## Restart and Deactivate Data Sources

Use the `DataSource.Restart()` or `DataSource.Deactivate()` methods to restart or deactivate the data source, respectively.

**PHP Code** 

```
/* DataSource.Restart */ 
$params = array( 
'dataSourceID'=>$dsId, 
'reportSuiteID'=>$rsId 
); 

$status = sendRequest('DataSource.Restart', $params ); 
var_dump($status); 

/* DataSource.Deactivate */ 
$params = array( 
'dataSourceID'=>$dsId, 
'reportSuiteID'=>$rsId 
); 

$status = sendRequest('DataSource.Deactivate', $params ); 
var_dump($status); 
?>
```

**Java Code** 

```
/* Restart a Data Source */ 
Status responsedataSourceRestart = port.dataSourceRestart(dataSourceID, reportSuiteID); 
System.out.println("Status of responsedataSourceRestart is: "+responsedataSourceRestart.getMessage()); 

/* Deactivate a Data Source */ 
Status responsedataSourceDeactivate = port.dataSourceDeactivate(dataSourceID, reportSuiteID); 
System.out.println("Status of responsedataSourceDeactivate is: "+responsedataSourceDeactivate.getMessage());
```

## Retrieve the Data Source IDs for a Report Suite

If you want to use an existing data source to upload batched data, you can use the `DataSource.GetIDs()` method to get the Data Source ID of the data sources associated with the specified report suite. The method returns an array of all the Data Source IDs for the specified report suite in the SOAP response.

**PHP Code** 

```
try { 
$rsId = ''; 
/* DataSource.GetIDs - gets a list of all DataSources that exist on the report suite */ 
$result = sendRequest('DataSource.GetIDs', array('reportSuiteID'=>$rsId) ); 

var_dump($result); 
sleep(2); 

foreach($result as $ds){ 
if($ds['dataSourceName'] == $dsName) { 
$dsId = $ds['dataSourceId']; 
} 
} 
} catch(Exception $e) { 
echo $e . "\n"; 
} 
?>
```

**Java Code** 

```
/* DataSource.GetIDs - gets a list of all Data Sources that exist on the report suite */ 
String reportSuiteID = ""; 
SimpleDataSource[] responsedataSourceGetIDs = port.dataSourceGetIDs(reportSuiteID); 
for (int i=0; i{ 
System.out.println("The data source id is: "+responsedataSourceGetIDs[i].getDataSourceId()+" and the data source name is: "+responsedataSourceGetIDs[i].getDataSourceName()); 
}
```

**Parent topic:** [Data Sources API Tutorial](c_Data_Sources_Overview.md)


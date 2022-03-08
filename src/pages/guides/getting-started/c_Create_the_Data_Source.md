# Step 1: Create the Data Source

 

The Adobe Experience Cloud has many data source types. In this demo application, you create a generic data source because the offline sales revenue data for the Purchase by Phone event does not fit a standard system data source.

The code at the end of this section uses the `DataSource.SetupGeneric()` method to create the generic data source for transaction IDs. This method requires you to specify the parameters shown in the following table.

| Parameter | Description |
|-------------|---------------|
| dataSourceID | Set the value to 0 for a new data source |
| dataSourceType | Set the value to 32 for a generic data source - Transaction ID |
| dataSourceSettings | Includes the key/value pairs for:  `dataSourceName` (string): Name of data source  `dataSourceEmail` (string): Email address for notifications and alerts  `metricNames` (string[]): Metric(s) to include in data source `metricEvents` (string[]): Event(s) to associate with each metric `dimensionNames` (string[]): Dimensions to include in data source  `dimensionVariables` (string[]): Dimension variables such as eVars and campaigns, to associated with each dimension |

Dimensions and metrics are related values that define the actual data that you will import into the data source.

You can think of a dimension as one of the breakdown reports that Analytics tracks in the online analytics data. Refer to the note that follows to find the dimension name.

**Note:** The name of the dimension must exactly match what is stored in the report suite. The easiest way to get this information is by downloading the optional data template using the Data Source Activation Wizard. All of the headers in the report suite are part of the tab-delimited template file. For your convenience, the template is available in the solution files in the Downloads section at the beginning of this article.

The dimension in this JJ. Esquire demo application that we are using is Products.

A metric is simply the data points that you are tracking in the dimension. In the JJ. Esquire demo application, you could say that you are tracking the page views metric of each product. For this article, you will batch upload the offline revenue metric of each product.

Every metric is associated with an event. For instance, a product view on a page is associated with a product view event. In this JJ. Esquire demo application, the offline revenue metric is associated with an event. You will see this event referenced in the code as “event 2”, which is a Analytics custom event.

**Note:** If you want a friendly name to represent your custom events, you can create the friendly name and type in the Admin Console within Analytics UI. A friendly name is easier to read in reports. Navigate to Admin Console > Report Suite > Edit Settings > Conversion > Success Events. Select event2 and give it a name of Offline Revenue. Change the type to Currency and save the information.

In the following code, you can see that the `dimensionName` value is Products and the `dimensionVariables` value is Product.

**PHP Code** 

```
/* DataSource.SetupGeneric - creates a new DataSource (type Generic) */ 
$rsId = 'â 
$dsId = ''; // DataSource Id 
$email = 'â 
$dsName = 'â 
$dsType = '32'; // Identifier for Generic Summary type of DataSources with Transaction ID
$dsSettings = array( 
  'dataSourceName'=>$dsName, 
  'dataSourceEmail'=>$email, 
  'metricNames'=>array('Offline Revenue'), 
  'metricEvents'=>array('event 2'), 
  'dimensionNames'=>array('Products'), 
  'dimensionVariables'=>array('Product') 
); 

$result = sendRequest('DataSource.SetupGeneric', array('reportSuiteID'=>$rsId, 'dataSourceID'=>$dsId,  'dataSourceType'=>$dsType, 'dataSourceSettings'=>$dsSettings ) );
$dsId = $result['dataSourceID']; 
var_dump($result); 
sleep(4); 
?>
```

**Java Code** 

```
/* 0 created a new data source */ 
int dataSourceID = 0; 
String dataSourceName = ""; 
int dataSourceType = 32; // Identifier for Generic Summary type of DataSources with Transaction ID 

Ds_generic_settings dataSourceSettings = new Ds_generic_settings(); 
dataSourceSettings.setDataSourceName(dataSourceName); 
dataSourceSettings.setDataSourceEmail(""); 

/* Define the metric name */ 
String[] metricNames = new String[1]; 
metricNames[0] = "Offline Revenue"; 
dataSourceSettings.setMetricNames(metricNames); 

/* Define the metric event */ 
String[] metricEvents = new String[1]; 
metricEvents[0] = "event 2"; 
dataSourceSettings.setMetricEvents(metricEvents); 

/* Define the dimentsion name */ 
String[] dimensionNames = new String[1]; 
dimensionNames[0] = "Products"; 
dataSourceSettings.setDimensionNames(dimensionNames); 

/* Define the dimension variable */ 
String[] dimensionVariables = new String[1]; 
dimensionVariables[0] = "Product"; 
dataSourceSettings.setDimensionVariables(dimensionVariables); 

/* DataSource.SetupGeneric - creates a new DataSource (type Generic) */ 
Ds_setup_result responsedataSourceSetupGeneric = 
port.dataSourceSetupGeneric(dataSourceID, dataSourceSettings, dataSourceType, reportSuiteID); 

System.out.println("The ID of the new Data Source is: 
"+responsedataSourceSetupGeneric.getDataSourceID()); 
dataSourceID = responsedataSourceSetupGeneric.getDataSourceID();
```

**Parent topic:** [Data Sources API Tutorial](c_Data_Sources_Overview.md)


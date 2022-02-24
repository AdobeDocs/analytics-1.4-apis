# Step 4: Import Bulk Data

 

After the Product Builder script has been created and executed within the Integration Wizard, you can upload the bulk data to the Adobe Online Experience Cloud servers. Remember that the Product Builder script only created the data source, and you must write the Java/PHP/.NET code to actually upload the bulk data. In the steps below, you will learn how to upload the data using the Partner API.

## Retrieve all the available integrations for the partner

To upload the data, you must first identify one or all of the existing Customer integrations to your data connectors product. In this step, you will loop over all the integrations to upload data. However, since this JJ. Esquire demo application only includes one integration, you will update only the one integration.

1.  Open the solution file from the **Downloads section** of this article in your IDE and review the code to retrieve all the integrations. The**Partner.GetIntegrations** method returns details about all the active data connectors integrations in an array. You loop over the array to access each integration.

```
PHP Code
 
/* Include the common functions to send a SOAP request to data connectors */
require_once "Data ConnectorsSoapApp.class.php";
 
$soapApp = new Data ConnectorsSoapApp();
 
/* Define the parameters for the GetIntegrations SOAP request */
$wsdlType = 'integration';  // Use Data Connectors Integration WSDL
$functionName = 'Partner.GetIntegrations';
$params = array();
$debug = 0;
 
/* Queue the GetIntegrations SOAP request */
$result = $soapApp->sendRequest($functionName, $params, $wsdlType, $debug);
 
/* Loop over all the Partner integrations */
foreach($result as $integration){
  var_dump($integration);
}

```

```
Java Code
 
/* Get all the Partner integrations */
IntegrationDetail[] integrationDetails = genesisIntegrationWebServicePortType.partnerGetIntegrations("");
 
/* Loop over all the Partner integrations */
for (IntegrationDetail integrationDetail : integrationDetails)
{
 
}
```

```
C# Code
 
integrationDetail[] integrationDetails = genesisIntegrationWebServicePortTypeClient.PartnerGetIntegrations("");
 
   /* Loop over all the Partner integrations */
  for (int i = 0; i < integrationDetails.Length; i++)
 {
 
 }
```

In the next step, you will create a function to upload all of the bulk data to the data source in the report suite. In Step 3, you will return to this loop to run the function for each integration.

## Upload bulk data to the Adobe Experience Cloud

In this section, you will upload the bulk data to the Adobe Online Experience Cloud. This requires you to use the sample data provided in the solution file, import the data into an array and then use the **Import.UploadMetrics** Partner API method to upload the actual data.

**Review the sample data for upload** 

The solution file that you downloaded earlier in the article includes a sample data file called **data_upload.txt** in the **resources**directory. Open this file and notice the bulk data rows.

**Import data from local file** 

Create a function that reads in the data from the local file and stores it in an array.

```
PHP Code
 

```

```
Java Code
 
    private String[][] getDataSourcesRowsFromReportData()
    {
        ArrayList<String[]> dataSourceData = new ArrayList<String[]>();
        try
        {
/* Read in file name */
 
            String importFile = "resources/data_upload.txt";
 
             /* Create an instance of BufferedReader */
            BufferedReader input = new BufferedReader(new FileReader(importFile));
            try
            {
                String line;
                  /* Read in data from file and store it in an array */
                while ((line = input.readLine()) != null)
                {
                    String[] dataSourceLine = new String[line.split("\t").length + 1];
                    dataSourceLine[0] = "1/1/YYYY";
                    dataSourceLine[1] = line.split("\t")[0];
                    dataSourceLine[2] = line.split("\t")[1];
                    dataSourceData.add(dataSourceLine);
                }
            }
            finally
            {
                input.close();
            }
        }
        catch (IOException ex)
        {
            ex.printStackTrace();
        }
 
        return dataSourceData.toArray(new String[dataSourceData.size()][]); 
    }
```

```
C# Code
 
public static String[][] getDataSourcesRowsFromReportData()
    {
        ArrayList dataSourceData = new ArrayList();
  
        try
        {
            String importFile = Path.Combine(Environment.CurrentDirectory, "resources\data_upload.txt");
            FileStream fileStream = File.OpenRead(importFile);
            StreamReader streamReader = new StreamReader(importFile);
            string line;
 
            /* Read in all the data from the import data file into an arraylist */
            while ((line = streamReader.ReadLine()) != null)
             {
              
                    String[] dataSourceLine = new String[line.Split('\t').Length + 1];
                    dataSourceLine[0] = "1/1/YYYY";
                    dataSourceLine[1] = line.Split('\t')[0];
                    dataSourceLine[2] = line.Split('\t')[1];
                    dataSourceData.AddRange(dataSourceLine);
                
             }
 
             streamReader.Close();
        }
       
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
            Console.WriteLine(ex.InnerException);
        }
 
        /* Use the ArrayList data to populate the jagged array and return the row data */
        String[] stringDataSourcesArray = (String[])dataSourceData.ToArray(typeof(string));
        string[][] rows = new string[dataSourceData.Count / 4][];
 
        for (int i = 0; i < dataSourceData.Count / 4; i++)
        {
            rows[i] = new string[4] { stringDataSourcesArray[i], stringDataSourcesArray[i + 1], stringDataSourcesArray[i + 2], stringDataSourcesArray[i + 3] };
        }
 
        return rows;
       
    }
```

**Define parameters for the Import.UploadMetrics method** 

The Partner API uses the **Import.UploadMetrics** method to import bulk data. This method submits data blocks to the Adobe Experience Cloud. You must first define all the values for the arguments needed by this method. For this JJ. Esquire demo application, you are importing the Twitter handle and follower count of each handle as data rows.

You must first define values for the following method arguments:

- **integrationCode**: The integration identifier. This is the value returned by the **Partner.GetIntegrations** method.
- **columnNames**: The names of the data columns (the column headings) in the report suite.
- **rows**: The data to import into the report suite.
- **dataSourceId**: The data source where you want to import the metrics.
- **endOfBlock**: Indicates that this is the last block in the data submission.

```
PHP Code
 

```

```
Java Code
 
private void uploadBulkTwitterData(Data ConnectorsIntegrationWebServicePortType genesisIntegrationWebServicePortType, IntegrationDetail integrationDetail) throws RemoteException
    {
         /* Define local parameters for method arguments */
        String[] columnNames;
        String dataSourceId;
        String endOfBlock;
        String integrationCode;
        String[][] rows;
        IntHolder blockId;
        IntHolder fileId;
        StringHolder status;
 
        /* Retrieve integration code */
        integrationCode = integrationDetail.getIntegrationCode();
        dataSourceId = Integer.toString(integrationDetail.getDataSourceIds()[0]);
 
         /* Define column headers */
        columnNames = new String[3];
        columnNames[0] = "Date";
        columnNames[1] = "twitter_handle";
        columnNames[2] = "twitter_followers";
       
         /* Read data from local file */
        rows = getDataSourcesRowsFromReportData();
        endOfBlock = "1";
        blockId = new IntHolder();
        fileId = new IntHolder();
        status = new StringHolder();
 
        /* Call the Partner API method for uploading data*/
 
        genesisIntegrationWebServicePortType.importUploadMetrics(columnNames, dataSourceId, endOfBlock, integrationCode, rows, blockId, fileId, status);
    }
```

```
C# Code
 
 public static void uploadBulkTwitterData(integrationDetail partnerIntegrationDetail, Data ConnectorsIntegrationWebServicePortTypeClient genesisIntegrationWebServicePortTypeClient)
    {
        String[] columnNames;
        String dataSourceId;
        String endOfBlock;
        String integrationCode;
        String[][] rows;
        int fileId;
        String status;
 
        integrationCode = partnerIntegrationDetail.integrationCode;
        dataSourceId = Convert.ToString(partnerIntegrationDetail.dataSourceIds[0]);
        columnNames = new String[3];
        columnNames[0] = "Date";
        columnNames[1] = "twitter_handle";
        columnNames[2] = "twitter_followers";
 
        rows = getDataSourcesRowsFromReportData();
        endOfBlock = "1";
    
        /* Upload metrics to Analytics */ genesisIntegrationWebServicePortTypeClient.ImportUploadMetrics(columnNames, dataSourceId, endOfBlock, integrationCode, rows, out fileId, out status);
    }
```

## Import bulk data using the Import.UploadMetrics method

Now that you have created the **uploadBulkTwitterData** method, you will return to the for loop in Step 1 to invoke the method. This will execute the function to upload the data for each integration.

```
PHP Code
 

```

```
Java Code
 
/* Invoke uploadBulkTwitterData method */
uploadBulkTwitterData(genesisIntegrationWebServicePortType, integrationDetail);
           }
```

```
C# Code
 
for (int i = 0; i < integrationDetails.Length; i++)
    {
/* Invoke uploadBulkTwitterData method */
       uploadBulkTwitterData(integrationDetails[i], genesisIntegratifor (IntegrationDetail integrationDetail : integrationDetails)
           {
onWebServicePortTypeClient);
 
    }
```

**Parent topic:** [6. Import Bulk Data Tutorial](c_Import_bulk_Data_using_the_Partner_API.md)


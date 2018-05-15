# Step 5: Upload Classification Data using the Partner API

 

When a Customer executes the Integration Wizard, it runs the Product Builder scripts and creates the classification columns in the report suite. In this section you will learn how to write PHP, Java and C\# code to access the Partner API and upload data to the classifications.

## Retrieve all the available integrations for the partner

To upload the data, you must first identify one or all of the existing Customer integrations to your data connectors product. In this step, you will loop over all the integrations to upload data. However, since this JJ. Esquire demo application only includes one integration, you will update only the one integration.

1.  Open the solution file from the **Downloads section** of this article in your IDE and review the code to retrieve all the integrations. The**Partner.GetIntegrations** method returns details about all the active data connectors integrations in an array. You loop over the array to access each integration.

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
 
 /* For each product go through and upload a classification to the system */
   for (int i = 0; i < integrationDetails.Length; i++)
   {
   }
```

In the next step, you will create a function to upload all of the classification data to the report suite. In Step 3, you will return to this loop to run the function for each integration.

## Upload classified data to Adobe Experience Cloud

In this section, you will upload the data to be classified to the Adobe Experience Cloud. This requires you to use the sample data provided in the solution file, import the data into an array and then use the **Import.UploadClassifications** Partner API method to upload the actual data.

**Review the sample data for classification** 

The solution file that you downloaded earlier in the article includes a sample data file called **classification.txt** in the **resources**directory. Open this file and notice the classification data rows.

**Import data from local file** 

Create a function that reads in the data from the local file and stores it in an array.

```
PHP Code
 

```

```
Java Code
 
private String[][] getClassificationRowsFromFile()
    {
       ArrayList<String[]> classifications = new ArrayList<String[]>();
        try
        {
            /* Read in file name */
            String classificationFile = "resources/classifications.txt";
 
            /* Create an instance of BufferedReader */
            BufferedReader input = new BufferedReader(new FileReader(classificationFile));
            try
            {
                String line;
 
                  /* Read in data from file and store it in an array */
                while ((line = input.readLine()) != null)
                {
                    String[] lineParts = line.split("\t");
                    classifications.add(lineParts);
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
        return classifications.toArray(new String[classifications.size()][]); 
    }
```

```
C# Code
 
public static String[][] getClassificationRowsFromFile()
    {
       ArrayList classifications = new ArrayList();
  
        try
        {
            String classificationFile = Path.Combine(Environment.CurrentDirectory, "resources\\classifications.txt");
            FileStream fileStream = File.OpenRead(classificationFile);
            StreamReader streamReader = new StreamReader(classificationFile);
            string line;
 
            /* Read in all the data from the classification file into an arraylist */
            while ((line = streamReader.ReadLine()) != null)
             {
                    String[] lineParts = line.Split('\t');
                    classifications.AddRange(lineParts);
                
             }
 
             streamReader.Close();
        }
       
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
            Console.WriteLine(ex.InnerException);
        }
 
        /* Use the ArrayList data to populate the jagged array and return the row data */
        String[] stringclassificationsArray = (String[])classifications.ToArray(typeof(string));
        string[][] rows = new string[classifications.Count/4][];
 
        for (int i = 0; i < classifications.Count / 4; i++)
        {
            rows[i] = new string[4] { stringclassificationsArray[i], stringclassificationsArray[i + 1], stringclassificationsArray[i + 2], stringclassificationsArray[i+3] };
        }
 
        return rows;
       
    }
```

**Define parameters for the Import.UploadClassifications method** 

The Partner API uses the **Import.UploadClassifications** method to upload data to the classifications columns you created earlier in the report suite. Remember that for this JJ. Esquire demo application, you are classifying the Twitter handles based on gender, age and region.

You must first define values for the following method arguments:

-   **metricName** - The name of the metric where you want to import classification data.
-   **columnNames** - The names of the classification columns \(the column headings\).
-   **rows** - The classification data to import
-   **endOfBlock** - The value of 1 indicates that this is the last block in the data submission

**Note:** A metric is a number that represents a count or a ratio for something you want to measure. Examples of metrics are: revenue of a product, number of visits and number of page views.

```
PHP Code
 

```

```
Java Code
 
private void createClassificationsForTwitterHandles(IntegrationDetail integrationDetail, Data ConnectorsIntegrationWebServicePortType genesisIntegrationWebServicePortType) throws RemoteException
    {
         /* Define local parameters for method arguments */
        String[] columnNames;
        String endOfBlock;
        String integrationCode;
        String metricName;
        String[][] rows;
        IntHolder blockId;
        IntHolder fileId;
        StringHolder status;
 
         /* Retrieve integration code */
        integrationCode = integrationDetail.getIntegrationCode();
         /* Set the metric name */
        metricName = "twitter_handle";
         /* Define column headers */
        columnNames = new String[4];
        columnNames[0] = "Key";
        columnNames[1] = "Gender";
        columnNames[2] = "Age";
        columnNames[3] = "Region";
 
         /* Read classification data from local file */
        rows = getClassificationRowsFromFile();
        endOfBlock = "1";
        blockId = new IntHolder();
        fileId = new IntHolder();
        status = new StringHolder();
 
/* Call the Partner API method for uploading classifications */
genesisIntegrationWebServicePortType.importUploadClassifications(columnNames, endOfBlock, integrationCode, metricName, rows, blockId, fileId, status);
    }
```

```
C# Code
 
public static void createClassificationsForTwitterHandles(integrationDetail partnerIntegrationDetail, Data ConnectorsIntegrationWebServicePortTypeClient genesisIntegrationWebServicePortTypeClient)
    {
  /* Define local parameters for method arguments */
        String[] columnNames;
        String endOfBlock;
        String integrationCode;
        String metricName;
        String[][] rows;
        int fileId;
        String status;
 
 /* Retrieve integration code */
        integrationCode = partnerIntegrationDetail.integrationCode;
        metricName = "twitter_handle";
 /* Define column headers */
        columnNames = new String[4];
        columnNames[0] = "Key";
        columnNames[1] = "Gender";
        columnNames[2] = "Age";
        columnNames[3] = "Region";
 
  /* Read classification data from local file */
        rows = getClassificationRowsFromFile();
        endOfBlock = "1";
  
/* Call the Partner API method for uploading classifications */
genesisIntegrationWebServicePortTypeClient.ImportUploadClassifications(columnNames, endOfBlock, integrationCode, metricName, rows, out fileId, out status);
    }
```

##  **Classify data using the Import.UploadClassifications method** 

Now that you have created the createClassificationsForTwitterHandles method, you will return to the for loop in Step 1 to invoke the method. This will execute the function to create the classifications for each integration.

```
PHP Code
 

```

```
Java Code
 
 for (IntegrationDetail integrationDetail : integrationDetails)
            {
/* Invoke createClassificationsForTwitterHandles method */
createClassificationsForTwitterHandles(integrationDetail, genesisIntegrationWebServicePortType);
                      System.out.println("Returned after classifying data.");
            }
```

```
C# Code
 
 for (int i = 0; i < integrationDetails.Length; i++)
      {
                      createClassificationsForTwitterHandles(integrationDetails[i], genesisIntegrationWebServicePortTypeClient);
      Console.WriteLine("Returned after classifying data.");
      }
```

**Parent topic:** [5. Classify Partner Data Tutorial](c_Classify_Partner_data_using_the_Partner_API.md)


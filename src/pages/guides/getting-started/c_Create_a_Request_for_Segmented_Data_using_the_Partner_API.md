# Step 5: Create a Request for Segmented Data using the Partner API

 

After the Product Builder script has been created and executed within the Integration wizard, you must write the Java/PHP/.NET code to create the Data Warehouse request for segmented data. In the steps below, you will learn how to create the Data Warehouse request for retrieving the data using the Partner API.

## Retrieve all the available integrations for the Partner

Before creating a Data Warehouse report, you must first identify one or all of the existing Customer integrations to your product. In this step, you will loop over all the integrations to create a Data Warehouse report. However, since this JJ. Esquire demo application only includes one integration, you will use only the one integration.

1.  Open the solution file from the **Downloads section** of this article in your IDE and review the code to retrieve all the integrations. The **Partner.GetIntegrations** method returns details about all the active integrations in an array. You loop over the array to access each integration.
2.  Note that the loop calls a function named createDataWarehouseSegmentRequest(). You will code this function, which creates a Data Warehouse request in the report suite, in the next section.

```
PHP Code
 
/* Include the common functions to send a SOAP request to Data Connectors */
require_once "Data ConnectorsSoapApp.class.php";
 
$soapApp = new Data ConnectorsSoapApp();
 
/* Define the parameters for the GetIntegrations SOAP request */
$wsdlType = 'integration'; // Use Data Connectors Integration WSDL
$functionName = 'Partner.GetIntegrations';
$params = array();
$debug=0;
 
/* Queue the GetIntegrations SOAP request */
$result = $soapApp->sendRequest($functionName, $params, $wsdlType, $debug);
 
/* Loop over all the Partner integrations */
foreach($result as $integration){
 
                        /*$integrationCode = $integration['integrationCode'];
$segmentArray = $integration['selectedSegments'];
$result = createDataWarehouseSegmentRequest($integrationCode, $segmentArray, $soapApp);*/
}

```

```
Java Code
 
/* Get all the Partner integrations */
IntegrationDetail[] integrationDetails = genesisIntegrationWebServicePortType.partnerGetIntegrations("");
 
/* Loop over all the Partner integrations */
for (IntegrationDetail integrationDetail : integrationDetails)
{
         /* Create the request for the DW report */
/* createDataWarehouseSegmentRequest(genesisIntegrationWebServicePortType, integrationDetail); */
}
```

```
C# Code
 
integrationDetail[] integrationDetails = genesisIntegrationWebServicePortTypeClient.PartnerGetIntegrations("");
 
/* For each product go through and upload a classification to the system */
  for (int i = 0; i < integrationDetails.Length; i++)
  {
     /* Create the request for the DW report */
 /* createDataWarehouseSegmentRequest(genesisIntegrationWebServicePortTypeClient, integrationDetails[i]); */
  }
```

## Create the Data Warehouse request

In this step, you are writing a function that creates a Data Warehouse request. The function uses the Export.RequestSegmentedData method in the Partner API to submit a Data Warehouse request and return data to the Data Connectors Partner. You must first define all the values for the arguments needed by this method. For this sample application, you are creating a Data Warehouse request for a specific date range based on the **Twitter** segment you created before. You must define the following parameters:

- **breakdownNames**: The name of the breakdown to include in the Data Warehouse request. For this demo, you will use twitter_handle, which is the eVar you mapped in the Integration Wizard.
- **dateGranularity**: The granularity of the Data Warehouse request. Supported values include the following: none, hour, day, week, month, quarter, year. For this demo you will use day.
- **dateType:** The type of date range used with the Data Warehouse request. Supported values include: range and preset. For this demo, you will use range.
- **dateFrom**: The start date of the custom date range for the Data Warehouse request. For this demo, you should choose a date that is appropriate for your data set.
- **dateTo:** The end date of the custom date range for the Data Warehouse request. For this demo, you should choose a date that is appropriate for your data set.

Once the request is created, you must submit it and capture the response. The response includes a report ID value, which is the ID that you must provide when you check the status of the data.

```
PHP Code
 

```

```
Java Code
 
private void createDataWarehouseSegmentRequest(Data ConnectorsIntegrationWebServicePortType genesisIntegrationWebServicePortType, IntegrationDetail integrationDetail) throws RemoteException
    {
        /* Get all the segments for the integration */
        String[] segments = integrationDetail.getSelectedSegments();
 
        /* For All Segments (which should only be one segment for your report suite), create the data warehouse request */
        for (String segment : segments)
        {
            /* Specify the different elements of the segmented data request */
            String[] breakDownNames = new String[1];
            String dateFrom;
            String datePreset;
            String dateTo;
            String dateGranularity;
            String dateType;
            String integrationCode;
            String[] metricNames;
            String segmentName;
            IntHolder requestId;
            StringHolder status;
 
            /* This is the breakdown name integrations will be using. */
            breakDownNames[0] = "twitter_handle";
            dateGranularity = "day";
            datePreset = "";
 
            /* This value is in the format MM/DD/YY and should be for the previous day of data. */
            dateFrom = "01/01/11";
            dateTo = "01/17/11";
            dateType = "range";
            integrationCode = integrationDetail.getIntegrationCode();
            metricNames = new String[0];
            segmentName = segment;
            requestId = new IntHolder();
            status = new StringHolder();
 
            /*Create the request in the system and capture the response.  There exists a reportId value in the response which contains the request ID that must be provided when checking if the data is ready and/or downloading the data. */
            genesisIntegrationWebServicePortType.exportRequestSegmentedData(breakDownNames, dateFrom, dateGranularity, datePreset, dateTo, dateType, integrationCode, metricNames, segmentName, requestId, status);
         
 
       }
 
    }
 }
```

```
C# Code
 
 public static void createDataWarehouseSegmentRequest(Data ConnectorsIntegrationWebServicePortTypeClient genesisIntegrationWebServicePortTypeClient, integrationDetail partnerIntegrationDetail)
        {
            /* Get all the segments for the integration */
            String[] segments = partnerIntegrationDetail.selectedSegments;
 
         /* For all segments, create the data warehouse request */
            for (int k = 0; k < segments.Length; k++)
            {
                //Specify the different elements of the segmented data request
                String[] breakDownNames = new String[1];
                String dateFrom;
                String datePreset;
                String dateTo;
                String dateGranularity;
                String dateType;
                String integrationCode;
                String[] metricNames;
                String segmentName;
                int requestId;
                String status;
 
       /* This is the breakdown name integrations will be using. */
                breakDownNames[0] = "twitter_handle";
                dateGranularity = "day";
                datePreset = "";
 
      /*This value is in the format MM/DD/YY and should be for the previous day of data. */
                dateFrom = "01/01/11";
                dateTo = "01/17/11";
                dateType = "range";
                integrationCode = partnerIntegrationDetail.integrationCode;
                metricNames = new String[0];
                segmentName = segments[k];
         
    /* Create the request in the system and capture the response.  There exists a reportId value in the response which contains the request ID that must be provided when checking if the data is ready and/or downloading the data. */
                requestId = genesisIntegrationWebServicePortTypeClient.ExportRequestSegmentedData(breakDownNames, dateFrom, dateGranularity, datePreset, dateTo, dateType, integrationCode, metricNames, segmentName, out status);
     
       }
 }
```

## Check status of Data Warehouse request

In this step, you are creating another function to check the status of your submitted Data Warehouse request. The function**getDataWarehouseDataSegmentIfReady()** uses the **Export.CheckDataRequest** method in the Partner API to check the status of the Data Warehouse report.

If the method returns a status of *Waiting to Start* or *In Progress*, continue to wait and call the method again periodically.

If the method returns a status of *Completed*, you can move on to the next step of retrieving the data.

```
PHP Code
 
 $integrationId,  // Integration identifier
            'requestId' => $requestId // The request Id for the submitted DW report
    );
    $debug = 1;
   
    /* Call the Export.CheckDataRequest method to check the status of the DW report */
    $result = $soapApp->sendRequest($functionName, $params, $wsdlType, $debug);
   
    if (is_array($result) && array_key_exists('faultstring', $result)) {
             echo "nError-RunScript: " . $resultNOTE:  Use the REST api for requests larger than 10 MB.  This size is given in the data_warehouse_request object fetched above.  See the Data Connectors Partner API for details on the rest API. */
            Data_warehouse_report data_warehouse_report = genesisIntegrationWebServicePortType.exportGetSegmentedData(integrationDetail.getIntegrationCode(), requestId.value, 0);
            return data_warehouse_report;
        }
        return null;
    };
    } else {
       return false;
    }
}
?>
```

```
Java Code
 
private Data_warehouse_report getDataWarehouseDataSegmentIfReady(Data ConnectorsIntegrationWebServicePortType genesisIntegrationWebServicePortType, IntegrationDetail integrationDetail, IntHolder requestId) throws RemoteException
    {
        /* The last parameter in this call is the data warehouse request id provided when a request is made in the createDataWarehouseRequestBasedOnSegment */
        Data_warehouse_request data_warehouse_request = genesisIntegrationWebServicePortType.exportCheckDataRequest(integrationDetail.getIntegrationCode(), requestId.value);
 
        System.out.println("Value of requestID is: "+requestId.value);
        while(data_warehouse_request.getMessage().equalsIgnoreCase("Waiting to Start") || data_warehouse_request.getMessage().equalsIgnoreCase("In Progress"))
          {
                  try {
                        Thread.sleep(10000);
                  } catch (InterruptedException e) {
                        // TODO Auto-generated catch block
                        e.printStackTrace();
                  }
                  System.out.println("Status of Datawarehouse request is..."+data_warehouse_request.getMessage());
                  data_warehouse_request = genesisIntegrationWebServicePortType.exportCheckDataRequest(integrationDetail.getIntegrationCode(), requestId.value);
          }
       
        /* Check if the request has completed */
        if (data_warehouse_request.getMessage().equalsIgnoreCase("completed"))
        {
            System.out.println("Status of Datawarehouse request is..."+data_warehouse_request.getMessage());
 
        }
        return null;
    }
```

```
C# Code
 
public static data_warehouse_report getDataWarehouseDataSegmentIfReady(Data ConnectorsIntegrationWebServicePortTypeClient genesisIntegrationWebServicePortTypeClient, integrationDetail partnerIntegrationDetail, int requestId)
        {
            /* The last parameter in this call is the data warehouse request id provided when a request is made in the createDataWarehouseRequestBasedOnSegment */
            data_warehouse_request data_warehouse_request = genesisIntegrationWebServicePortTypeClient.ExportCheckDataRequest(partnerIntegrationDetail.integrationCode, requestId);
 
            Console.WriteLine("Value of requestID is: " + requestId);
            while (data_warehouse_request.message.Equals("Waiting to Start") || data_warehouse_request.message.Equals("In Progress"))
            {
                try
                {
                    Thread.Sleep(10000);
                }
                catch (Exception e)
                {
                                       Console.WriteLine(e.StackTrace);
                }
                Console.WriteLine("Status of Datawarehouse request is..." + data_warehouse_request.message);
                data_warehouse_request = genesisIntegrationWebServicePortTypeClient.ExportCheckDataRequest(partnerIntegrationDetail.integrationCode, requestId);
            }
 
      /* Check if the request has completed */
            if (data_warehouse_request.message.Equals("completed"))
            {
                Console.WriteLine("Status of Datawarehouse request is..." + data_warehouse_request.message);
            }
            return null;
        }
```

## Retrieve the data if the status returns a *Completed* string

After the Data Warehouse request returns a *Completed* status, you can use the **Export.GetSegmentedData** method in the Partner API to download the Data Warehouse report data.

```
PHP Code
 

```

```
Java Code
 
private Data_warehouse_report getDataWarehouseDataSegmentIfReady(Data ConnectorsIntegrationWebServicePortType genesisIntegrationWebServicePortType, IntegrationDetail integrationDetail, IntHolder requestId) throws RemoteException
    {
        /* The last parameter in this call is the data warehouse request id provided when a request is made in the createDataWarehouseRequestBasedOnSegment */
        Data_warehouse_request data_warehouse_request = genesisIntegrationWebServicePortType.exportCheckDataRequest(integrationDetail.getIntegrationCode(), requestId.value);
 
        System.out.println("Value of requestID is: "+requestId.value);
        while(data_warehouse_request.getMessage().equalsIgnoreCase("Waiting to Start") || data_warehouse_request.getMessage().equalsIgnoreCase("In Progress"))
          {
                  try {
                        Thread.sleep(10000);
                  } catch (InterruptedException e) {
                        // TODO Auto-generated catch block
                        e.printStackTrace();
                  }
                  System.out.println("Status of Datawarehouse request is..."+data_warehouse_request.getMessage());
                  data_warehouse_request = genesisIntegrationWebServicePortType.exportCheckDataRequest(integrationDetail.getIntegrationCode(), requestId.value);
          }
       
        /* Check if the request has completed */
        if (data_warehouse_request.getMessage().equalsIgnoreCase("completed"))
        {
            System.out.println("Status of Datawarehouse request is..."+data_warehouse_request.getMessage());
          
 /* Get back the data for that request id.  NOTE:  Use the REST api for requests larger than 10 MB.  This size is given in the data_warehouse_request object fetched above.  See the Data Connectors Partner API for details on the rest API. */
            Data_warehouse_report data_warehouse_report = genesisIntegrationWebServicePortType.exportGetSegmentedData(integrationDetail.getIntegrationCode(), requestId.value, 0);
            return data_warehouse_report;
        }
        return null;
    }
```

```
C# Code
 
public static data_warehouse_report getDataWarehouseDataSegmentIfReady(Data ConnectorsIntegrationWebServicePortTypeClient genesisIntegrationWebServicePortTypeClient, integrationDetail partnerIntegrationDetail, int requestId)
        {
            /* The last parameter in this call is the data warehouse request id provided when a request is made in the createDataWarehouseRequestBasedOnSegment */
            data_warehouse_request data_warehouse_request = genesisIntegrationWebServicePortTypeClient.ExportCheckDataRequest(partnerIntegrationDetail.integrationCode, requestId);
 
            Console.WriteLine("Value of requestID is: " + requestId);
            while (data_warehouse_request.message.Equals("Waiting to Start") || data_warehouse_request.message.Equals("In Progress"))
            {
                try
                {
                    Thread.Sleep(10000);
                }
                catch (Exception e)
                {
                                       Console.WriteLine(e.StackTrace);
                }
                Console.WriteLine("Status of Datawarehouse request is..." + data_warehouse_request.message);
                data_warehouse_request = genesisIntegrationWebServicePortTypeClient.ExportCheckDataRequest(partnerIntegrationDetail.integrationCode, requestId);
            }
 
      /* Check if the request has completed */
            if (data_warehouse_request.message.Equals("completed"))
            {
                Console.WriteLine("Status of Datawarehouse request is..." + data_warehouse_request.message);
                /* Get back the data for that request id.  NOTE:  Use the REST api for requests larger than 10 MB.  This size is given in the data_warehouse_request object fetched above.  See the Data Connectors Partner API for details on the rest API. */
                data_warehouse_report data_warehouse_report = genesisIntegrationWebServicePortTypeClient.ExportGetSegmentedData(partnerIntegrationDetail.integrationCode, requestId, 0);
                return data_warehouse_report;
            }
            return null;
        }
```

**Parent topic:** [7. Data Warehouse Tutorial](c_Create_a_Data_Warehouse_Report_using_the_Partner_API.md)


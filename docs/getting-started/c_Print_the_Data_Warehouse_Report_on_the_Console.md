# Step 6: Print the Data Warehouse Report on the Console

 

After the Data Warehouse report returns the segmented data, you can print it on the console. Add the code below to the method from step 2.

```
PHP Code

foreach($result as $integration){
    $integrationCode = $integration['integrationCode'];
                 $segmentArray = $integration['selectedSegments'];
    $result = createDataWarehouseSegmentRequest($integrationCode, $segmentArray, $soapApp);    
       
    $requestId = $result['requestId'];
    $result = getDataWarehouseDataSegmentIfReady($requestId, $integrationCode, $soapApp);
   
    if ($result) {
       $report = getSegmentedDataReport($requestId, $integrationCode, $soapApp);
       
       if($report){
             printReport($requestId, $report);
       }
       
    }
}
 
/**
* Print the report after it is ready
*
* @reportId       The id of the report in the queue
* @report         The report data
*/
function printReport($reportId, $report)
{
    echo "\n";
    echo "Request ID: " . $reportId . "\n";
    echo "------------------------------------------------------\n";
    echo $report['headings'][0] . "                   " . $report['headings'][1] . "\n";
    foreach ($report['rows'] as $dataRow) {
       echo $dataRow[0] . " " . $dataRow[1] ."\n";
    }
    echo "\n";
}

```

```
Java Code
 
private void createDataWarehouseSegmentRequest(Data ConnectorsIntegrationWebServicePortType genesisIntegrationWebServicePortType, IntegrationDetail integrationDetail) throws RemoteException
    {
        /* Get all the segments for the integration */
        String[] segments = integrationDetail.getSelectedSegments();
 
        /* For All Segments (which should only be one segment in your report suite), create the data warehouse request */
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
 
            /* This value is in the format MM/DD/YY and should be for the previous day of data.*/
            dateFrom = "01/01/11";
            dateTo = "01/17/11";
            dateType = "range";
            integrationCode = integrationDetail.getIntegrationCode();
            metricNames = new String[0];
            segmentName = segment;
            requestId = new IntHolder();
            status = new StringHolder();
 
            /* Create the request in the system and capture the response.  There exists a reportId value in the response which contains the request ID that must be provided when checking if the data is ready and/or downloading the data. */
            genesisIntegrationWebServicePortType.exportRequestSegmentedData(breakDownNames, dateFrom, dateGranularity, datePreset, dateTo, dateType, integrationCode, metricNames, segmentName, requestId, status);
 
/* Check status for the DW report */
Data_warehouse_report dataWarehouseReport = getDataWarehouseDataSegmentIfReady(genesisIntegrationWebServicePortType, integrationDetail, requestId);
           
      if(dataWarehouseReport != null)
      {
         /* Retrieve report data */
          String[][] dwReportData = dataWarehouseReport.getRows();
           
         for(int i=0; i< dwReportData.length;i++)
          {
             for (int j=0; j<dwReportData[i].length; j++)
              {
                            System.out.print(" " + dwReportData[i][j]);
               }
              System.out.println("");
          
          }
      }
 
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
 
   /* Check status for the DW report */
                data_warehouse_report dataWarehouseReport = getDataWarehouseDataSegmentIfReady(genesisIntegrationWebServicePortTypeClient, partnerIntegrationDetail, requestId);
 
                if (dataWarehouseReport != null)
                {
                    /* Retrieve report data */
                    String[][] dwReportData = dataWarehouseReport.rows;
 
 
                    for (int i = 0; i < dwReportData.Length; i++)
                    {
                        for (int j = 0; j < dwReportData[i].Length; j++)
                        {
                            Console.WriteLine(" " + dwReportData[i][j]);
                        }
                        Console.WriteLine("");
 
                    }
                }
    
       }
 }
```

**Parent topic:** [7. Data Warehouse Tutorial](c_Create_a_Data_Warehouse_Report_using_the_Partner_API.md)


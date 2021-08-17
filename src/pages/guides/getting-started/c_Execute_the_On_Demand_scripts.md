# Step 2: Execute the On Demand Scripts using the Partner.RunScript API Call

 

In this section, you will create a function that sets all the parameters and retrieves the report data by executing the On Demand scripts you created in the first tutorial, [1. On Demand Scripts Tutorial](c_scripting.md#). The code consists of five major sections:

1.  Create the function
2.  Set the parameters
3.  Invoke the first On Demand script to create a report request
4.  Invoke the second On Demand script to check status
5.  Invoke the third On Demand script to pull report data

The code follows the section explanations.

## Create the function

The custom function that you will later place in the loop you created in Step 1 is getTwitterFollowersDataForDateRange\(\) and it accepts the following two parameters:

-   The integration ID instance
-   The web service port type class instance

## Set the parameters for the On Demand scripts

In the function you will invoke three On Demand scripts. When you invoke an On Demand script, you will always provide the script name and the script parameters:

-   **Integration ID** - The ID for the particular integration instance.
    -   For PHP, you access the Integration ID directly from the integration instance.
    -   For Java, you use the method getIntegrationCode\(\).
    -   For C\#, you use the method integrationCode
-   **Script name** - The name of the On Demand script to execute, set as a string value.
-   **Script parameters** - An array holding the parameters required by each specific script.

In this JJ. Esquire Twitter demo application, the first script \(create report request\) requires the date range for the report so you will define myDateTo and myDateFrom parameters. The second \(check status\) and third \(retrieve report data\) scripts only require the Report ID, which is populated by the response of the first script.

**Note:** In **Create On Demand scripts to generate reports** tutorial you defined parameters for these three scripts. You also defined replaceWith attributes, which are used to dynamcally reference parameter values. The script parameters you define in this function must include all of the replaceWith parameters.

The function code block shows the script name string and the script parameters array passed to each of the three scripts.

## Invoke the first On Demand script to create a report request

You use the Partner.RunScript method in the Data Connectors Partner API to run a On Demand script against a specific Customer integration.

In the code below, you first execute the On Demand script called **followers\_per\_twitter\_handle** that creates a QueueRanked report request.

**Note:** QueueRanked is a type of report that is based on one or more elements and one or more metrics. You can learn more about report types by reading the [QueueRanked](../reporting-api-1.3/methods/r_queueRanked.md) documentation.

## Invoke the second On Demand script to check status

Once the **getReportStatusOD** script returns a status of **done**, you then use the Partner.RunScript method a third time to retrieve the data for the report using the On Demand script **getReportOD**.

```
PHP Code
 
<?php   
/**
* Get reportId for Twitter followers data for date range
*
* @integrationId  The integration identifier
* @soapApp           Instance of the Data ConnectorsSoapApp
*/
function getTwitterFollowersDataForDateRange($integrationId , $soapApp){
 
/**************  Set the parameters  *********************/
 
    /* Define the parameters for the RunScript SOAP request */
    $wsdlType = "integration"; // Use Data Connectors Integration WSDL
    $functionName = "Partner.RunScript";
    $params = array( 
            'integrationCode' => $integrationId,  // integration identifier
            'scriptName' => "followers_per_twitter_handle", // the script name for the On Demand script
            /* define the scriptParameters defined in the On Demand script */
            'scriptParameters' => array(
                         array('name' => 'myDateFrom', 'value' => '2010-01-11'),
                         array('name' => 'myDateTo', 'value' => '2011-01-17')      
                  )
    );
    $debug = 0;
 
 
/******** Invoke the first On Demand script **************/
   
    /* Call the Partner.RunScript method to execute the followers_per_twitter_handle (On demand script) */
    $result = $soapApp->sendRequest($functionName, $params, $wsdlType, $debug);
   
    if (is_array($result) && array_key_exists('faultstring', $result)) {
       echo "\nError-RunScript: " . $result['faultstring'] . "\n";
       $result = false;
    } else {
       echo "The report has been queued. Report ID: " . $result[0]['result'][0]['reportID'] . "\n";
       $reportId = $result[0]['result'][0]['reportID'];
       $result = waitForReport($reportId, $integrationId, $soapApp, "true");
    }
    return $result;      
}
 
     /*********** Invoke the second On Demand script ***********/
 
/**
* Wait for the report to be processed.
*
* @reportId          The id of the report in the queue
* @integrationId  The integration identifier
* @soapApp           Instance of the Data ConnectorsSoapApp
* @showOutput      Show the echo statements provided or not   
* @iterations      The maximum number of iteration to wait
* @seconds      The number of seconds between each iteration   
*/
function waitForReport($reportId, $integrationId, $soapApp, $showOutput=false, $iterations=5, $seconds=15)
{
    $count = 0;
    $status = "";
    while ($count < $iterations) {
       /* Define the parameters for the RunScript SOAP request */
       $wsdlType = "integration"; // Use Data Connectors Integration WSDL
       $functionName = "Partner.RunScript";
       $params = array( 
            'integrationCode' => $integrationId, 
                  'scriptName' => "getReportStatusOD", // the script name for the On Demand script
                  'scriptParameters' => array(
                  array('name' => 'REPORT_ID', 'value' => $reportId)
                  )
       );
       $debug = 0;
       
       /* Call the Partner.RunScript method to execute the getReportOD (On demand script) */
       $result = $soapApp->sendRequest($functionName, $params, $wsdlType, $debug);
 
if (is_array($result) && array_key_exists('faultstring', $result)) {
             echo "\nError-RunScript: " . $result['faultstring'] . "\n";
       } else {
             $status = $result[0]['result'][0]['status'] . "\n";
       }
       
       if (trim($status) == "done"){
             if ($showOutput) {
                   echo "The report is ready.\n\n";
             }
             return $reportId;
       } else {
             if ($showOutput) {
                   echo "The report is not ready.  Waiting " . $seconds . " seconds to retry.\n";
             }
             $count++;
             sleep($seconds);
       }
    }
    echo "The report was not found!\n";
    return false;
}
 
     /*********** Invoke the third On Demand script ***********/
 
/**
*
* Get the report for the given reportId
*
* @reportId          The id of the report in the queue
* @integrationId  The integration identifier
* @soapApp           Instance of the Data ConnectorsSoapApp
* @showOutput      Show the echo statements provided or not   
*/
function getReport($reportId, $integrationId, $soapApp, $showOutput=false)
{
    /* Define the parameters for the RunScript SOAP request */
    $wsdlType = "integration"; // Use Data Connectors Integration WSDL
    $functionName = "Partner.RunScript";
    $params = array( 
            'integrationCode' => $integrationId, 
            'scriptName' => "getReportOD", // the script name for the On Demand script
            'scriptParameters' => array(
                         array('name' => 'REPORT_ID', 'value' => $reportId)
                        )
    );
    $debug = 0;
       
    /* Call the Partner.RunScript method to execute the getReportOD (On demand script) */
    $result = $soapApp->sendRequest($functionName, $params, $wsdlType, $debug);
       
    if (is_array($result)) {
       if ( array_key_exists('faultstring', $result)) {
             if ($showOutput) {
                   echo "\nError-RunScript: " . $result['faultstring'] . "\n";
             }
             return false;
       } else {
             return $result[0]['result'][0]['report'];
       }
    }
    return false;
}
 
?>
```

```
Java Code
 
private Report getTwitterFollowersDataForDateRange(IntegrationDetail integrationDetail, Data ConnectorsIntegrationWebServicePortType genesisIntegrationWebServicePortType) throws RemoteException, InterruptedException
    {
 
/**************  Set the parameters  *********************/
      /* Script name that you defined in the integration
         wizard */
      String scriptName = "followers_per_twitter_handle";
     
      /* Initialize the ScriptParameter array */
      ScriptParameter[] scriptParameters = new
                                      ScriptParameter[2];
      scriptParameters[0] = new ScriptParameter();
      scriptParameters[1] = new ScriptParameter();
 
      /* myDateFrom is the parameter you defined in the On
         Demand script */
        scriptParameters[0].setName("myDateFrom");
      /* Set the value for the myDateFrom parameter to be
         passed to the script */
        scriptParameters[0].setValue("2010-1-11");
      /* myDateTo is the parameter you defined in the On
         Demand script */
        scriptParameters[1].setName("myDateTo");
      /* Set the value for the myDateTo parameter to be
         passed to the script */
        scriptParameters[1].setValue("2011-1-17");
 
        /* Validate the script parameters */
        ScriptParameter[] scriptParametersValidate = new
                                      ScriptParameter[1];
        scriptParametersValidate[0] = new ScriptParameter();
        scriptParametersValidate[0].setName("REPORT_ID");
 
 
/******** Invoke the first On Demand script **************/
 
        /* Call the Partner.RunScript method to execute the
           followers_per_twitter_handle (On demand script)
           with appropriate arguments */
        ScriptResult[] scriptResult =
genesisIntegrationWebServicePortType.partnerRunScript(integrationDetail.getIntegrationCode(), scriptName, scriptParameters);
      
       /* Retreive the response and store it in
          reportQueueResponse */
        ReportQueueResponse reportQueueResponse = (ReportQueueResponse) scriptResult[0].getResult()[0];
      /* Store the report ID from the response in the
         scriptParametersValidate array */
scriptParametersValidate[0].setValue(reportQueueResponse.getReportID());
 
     /*********** Invoke the second On Demand script ***********/
       
      /* Call the Partner.RunScript method to execute the
         getReportStatusOD (On demand script) with appropriate
         arguments */
        scriptResult = genesisIntegrationWebServicePortType.partnerRunScript(integrationDetail.getIntegrationCode(), "getReportStatusOD", scriptParametersValidate);
      /* Loop till the response does not return the status of
         done */
        while (!((ReportResponse) scriptResult[0].getResult()[0]).getStatus().equalsIgnoreCase("done"))
        {
            scriptResult = genesisIntegrationWebServicePortType.partnerRunScript(integrationDetail.getIntegrationCode(), "getReportStatusOD", scriptParametersValidate);
            Thread.sleep(2000);
        }
 
     /*********** Invoke the third On Demand script ***********/
 
       /* Check if the status returns done, and if yes, invoke the getReportOD script to return data */
            if(((Report_status)
scriptResult[0].getResult()[0]).getStatus().equalsIgnoreCase("done"))
          {
              scriptResult = genesisIntegrationWebServicePortType.partnerRunScript(integrationDetail.getIntegrationCode(), "getReportOD", scriptParametersValidate);
          }
 
      /* Return the report data */
        return ((ReportResponse) scriptResult[0].getResult()[0]).getReport();
    }
```

```
C# Code
 
 public static report getTwitterFollowersDataForDateRange(integrationDetail partnerIntegrationDetail, Data ConnectorsIntegrationWebServicePortTypeClient genesisIntegrationWebServicePortTypeClient)
    {
 
/**************  Set the parameters  *********************/
 
       /* Script name that you defined in the integration wizard */
      String scriptName = "followers_per_twitter_handle";
     
       /* Initialize the ScriptParameter array */
        scriptParameter[] scriptParameters = new scriptParameter[2];
        scriptParameters[0] = new scriptParameter();
        scriptParameters[1] = new scriptParameter();
 
       /* myDateFrom is the parameter you defined in the On Demand script */
        scriptParameters[0].name = "myDateFrom";
       /* Set the value for the myDateFrom parameter to be passed to the script */
        scriptParameters[0].value = "2010-1-11";
      /* myDateTo is the parameter you defined in the On Demand script */
        scriptParameters[1].name = "myDateTo";
     /* Set the value for the myDateTo parameter to be passed to the script */
        scriptParameters[1].value = "2011-1-17";
 
        /* Validate the script parameters */
        scriptParameter[] scriptParametersValidate = new scriptParameter[1];
        scriptParametersValidate[0] = new scriptParameter();
        scriptParametersValidate[0].name = "REPORT_ID";
 
/******** Invoke the first On Demand script **************/
 
       /* Call the Partner.RunScript method to execute the followers_per_twitter_handle (On demand script) with appropriate arguments */
        scriptResult[] scriptResult = genesisIntegrationWebServicePortTypeClient.PartnerRunScript(partnerIntegrationDetail.integrationCode, scriptName, scriptParameters);
       
        /* Retreive the response and store it in reportQueueResponse */
        reportQueueResponse reportQueueResponse = (reportQueueResponse) scriptResult[0].result[0];
      /* Store the report ID from the response in the scriptParametersValidate array */
        scriptParametersValidate[0].value = reportQueueResponse.reportID;
 
     /*********** Invoke the second On Demand script ***********/
  
        /* Call the Partner.RunScript method to execute the getReportStatusOD (On demand script) with appropriate arguments */
        scriptResult = genesisIntegrationWebServicePortTypeClient.PartnerRunScript(partnerIntegrationDetail.integrationCode, "getReportStatusOD", scriptParametersValidate);
        /* Loop till the response does not return the status of done */
        while (!((reportResponse) scriptResult[0].result[0]).status.Equals("done"))
        {
            scriptResult = genesisIntegrationWebServicePortTypeClient.PartnerRunScript(partnerIntegrationDetail.integrationCode, "getReportStatusOD", scriptParametersValidate);
            Thread.Sleep(2000);
        }
    
      /*********** Invoke the third On Demand script ***********/
 
        /* Check if the status returns done, and if yes, invoke the getReportOD script to return data */
        if (((report_status)
scriptResult[0].result[0]).status.Equals("done"))
        {
            scriptResult = genesisIntegrationWebServicePortTypeClient.PartnerRunScript(partnerIntegrationDetail.integrationCode, "getReportOD", scriptParametersValidate);
        }
 
        /* Return the report data */
        return ((reportResponse) scriptResult[0].result[0]).report;
    }
```

The queue ranked report request, from the first On Demand script execution, returns a report ID in the response. Once the report has been queued, you then use the report ID to invoke the second On Demand script \( **getReportStatusOD** \) for checking the status of the report.

**Parent topic:** [4. Partner Reports Tutorial](c_Create_Data_Connectors_Partner_Reports_using_the_Partner_API.md)


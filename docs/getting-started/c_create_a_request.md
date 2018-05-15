# Step 1: Create a Request

 

You use the `DataWarehouse.Request()` method to request the delivery of a report through email, FTP or via the REST or SOAP interface. This method requires the parameters shown in the following table:

| Property | Description |
|-------------|---------------|
| rsid | The ID of the report suite for this request. |
| Contact\_Name | The name of the person making the request. |
| Contact\_Phone | The phone number of the person making the request. |
| Email\_To | The email address where you want to send the data file. |
| Email\_Subject | The text for the email subject line. |
| Report\_Name | The report name as you want it to appear in the email. |
| Date\_Type | The type of date. Supported values include: `range`: A custom date range. `preset`: A predefined date range |
| Date\_Granularity | The granularity of the date value. Supported values include the following: none hour day week month quarter year |
| Segment\_Id | The segment to use for the request. |
| Metric\_List | The numerical values to include in the request \(visits, revenue, pageViews, etc.\) |
| Breakdown\_List | The breakdowns to include in the request. |
| FTP\_Host | The delivery location for the report. Supported values include: `E-mail` \(default\). Leave this field blank to have the report emailed. `FTP Host Name`: For report delivery by FTP. `send\_via\_api`: To programmatically use the REST interface to request the report. |
| FTP\_Port | The FTP port number. |
| FTP\_Dir | The FTP directory for file delivery. |
| FTP\_UserName | User name for authentication to the specified FTP\_Host. |
| FTP\_Password | Password for authentication to the specified FTP\_Host. |

Note that the name of the `FTP_Host` property is used for multiple purposes. Besides defining the FTP host server for delivery of the report by FTP, you can also use this property to bypass FTP delivery entirely and opt for email delivery \(the default\) or to retrieve the report programmatically using REST.

**Note:** You should only use SOAP for reports under 10MB.

For this JJ. Esquire demo application, you will learn how to use the REST interface since it is the most robust of the three methods. Therefore, the following code, sets the `FTP_Host` property to `send_via_api` and leaves the other FTP properties blank or default values.

The `DataWarehouse.Request()` method returns the report ID of the request. You will need this ID if you wish to cancel, check or retrieve the report using the API.

**Note:** The default variable name for the breakdown, Visit Number, is `visit_num`, and will be used in the code below. You can get a list of all the metrics and breakdowns for a report suite by using the `ReportSuite.GetAvailableMetrics` and `ReportSuite.GetAvailableElements` methods respectively.

## Code Samples

**PHP Code** 

```
$rsId = '<your report suite id>'; 
$contactName =  '<your contact name>';
$contactPhone = '<your contact phone number>';
$email = '<your email address>';

/* Get Segments from DataWarehouse */
$response = sendRequest('DataWarehouse.GetSegments', array('rsid'=>$rsId) );
var_dump($response);
    
$segmentId = $response[0]["id"];

/* Define the Data Warehouse request variables */
      $params = array(
'rsid' => $rsId,        // Report Suite Id
'Breakdown_List' => array('visit_num'),
      'Contact_Name' => $contactName,
      'Contact_Phone' => $contactPhone,
'Date_From' => '12/15/10',
'Date_Granularity' => 'day',
'Date_Preset' => '',
'Date_To' => '12/17/10',
'Date_Type' => 'range',
      'Email_Subject' => 'DW API test (subject) Did not use ftp host',
'Email_To' => $email,
'FTP_Dir' => '',
'FTP_Host' => 'send_via_api',
'FTP_Password' => '',
'FTP_Port' => '22',
'FTP_UserName' => '',
'File_Name' => 'jjesquire_dw_report',
'Metric_List' => array('revenue','event2'),
'Report_Description' => 'DW API test (description)',
   		'Report_Name' => 'DW API test (name)',
   		'Segment_Id' => $segmentId
   	);
/* Send the Data Warehouse request */
$request_id = sendRequest('DataWarehouse.Request', $params );
var_dump($request_id);

```

**Java Code** 

```
/* Define the breakdown list */
String[] breakdown_List = new String[1];
breakdown_List[0] = "visit_num";

/* Define the metric list and set the metrics to offline revenue and online revenue.*/	
String[] metric_List = new String[2];
      metric_List[0] = "revenue";
	/* event2 is set to Offline Revenue is our demo report suite */
	metric_List[1] = "event2";

/* Retrieve all the segment IDs in the report suite */
Dwsegment[] segment_id = 
port.dataWarehouseGetSegments("<your report suite id>");
 System.out.println("Segment id is: "+segment_id[0].getId());	

       /* Send the Data Warehouse request */
int reportID = port.dataWarehouseRequest(
		      breakdown_List, /* Breakdown List */
		      "<your contact name>", /* Contact Name */
		      "<your contact phone number>", /* Contact Phone */
		      "12/15/10", /* Date From */
		      "day", /* Date Granularity */
		      "", /* Date Preset */
		      "12/17/10", /* Date To */
		      "range", /* Date Type */
		      "DW API test (subject) Did not use ftp host", /* Email Subject */
		      "<your email address here>", /* Email To */
		      "", /* FTP Dir */
		      "send_via_api", /* FTP Host */
		      "", /* FTP Password */
		      22, /* FTP Port */
		      "", /* FTP Username */
		      "jjesquire_dw_report", /* File Name */
		      metric_List, /* Metric List */
		      "DW API test (description)", /* Report Desc */
		      "DW API test (name)", /* Report Name */
		      segment_id[0].getId(), /* Segment Id */
		       "<your report suite ID here>" /* Report Suite Id */
	);

```

**C\# Code** 

```
/* Define the breakdown list */
       String[] breakdown_List = new String[1];
      breakdown_List[0] = "visit_num";

/* Define the metric list and set the metrics to offline revenue and online revenue.*/	
      String[] metric_List = new String[2];
      metric_List[0] = "revenue";
      /* event1 is set to Offline Revenue is our demo report suite */
     metric_List[1] = "event1";

/* Retrieve all the segment IDs in the report suite */
     dwsegment[] segment_id = client.DataWarehouseGetSegments("<your report suite id>");
            // This will the the ID of the FirstTimeVisitors segment you created in the UI.
            Console.WriteLine("Segment id is: " + segment_id[0].id);

     /* Send the Data Warehouse request */
    int reportID = client.DataWarehouseRequest(
                   breakdown_List, /* Breakdown List */
                   "<your contact name>", /* Contact Name */
                   "<your contact phone number>", /* Contact Phone */
                   "01/01/11", /* Date From */
                   "day", /* Date Granularity */
                   "", /* Date Preset */
                   "01/18/11", /* Date To */
                   "range", /* Date Type */
                   "DW API test (subject) Did not use ftp host", /* Email Subject */
                   "<your email address here>", /* Email To */
                   "", /* FTP Dir */
                   "send_via_api", /* FTP Host */
                   "", /* Contact Phone */
                   22, /* FTP Port */
                   "", /* FTP Username */
                   "jjesquire_dw_report", /* File Name */
                   metric_List, /* Metric List */
                   "DW API JJEsquire (description)", /* Report Desc */
                   "DW API JJEsquire (name)", /* Report Name */
                   segment_id[0].id, /* Segment Id */
                   "<your report suite ID here>" jjesquire_dw_report                );

```

**Parent topic:** [Data Warehouse API Tutorial](c_data_warehouse_API_tutorial.md)


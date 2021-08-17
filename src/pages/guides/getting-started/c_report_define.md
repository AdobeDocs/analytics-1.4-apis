# Step 1: Define and Queue the Report

The first step in creating a report is to determine the report type. The Reporting API provides three report types:

-   `Report.QueueTrended` for reports based on a single element and one or more metrics that are broken down by time.
-    `Report.QueueRanked` for reports based on one or more elements and one or more metrics.
-    `Report.QueueOvertime` for one or more metrics that are broken down by time.

 **Note:** A report that is broken down by time signifies that you must specify the date granularity parameter. As a result, a ranked report will give you all the metrics for the complete date range whereas the trended report will give you metrics for time slices throughout the date range.

The JJ. Esquire demo application needs a report based on an element \(brand\) and a single metric \(revenue\). The brand is a classification of the base element \(product\) and you must specify both for the report to run correctly.

For the demo application, you will use the `Report.QueueRanked` as the report type since you do not need the report to be broken down by time.

The following code shows you how to define the filters on the report:

1.  Specify the `reportSuiteID`, date and locale parameters as report description
2.  Specify the metric filters
3.  Specify the element filters

The `reportSuiteID` parameter references the unique identifier for the report suite to run the report. The date parameter, or its associated `dateTo` and `dateFrom` parameters, define the date range for the report data. The `locale` parameter specifies the language locale for the report and affects some of the meta text that is displayed in a report. For example, the friendly names of the standard metrics get localized when you change the value of this parameter.

 **Note**: You may need to ask your Adobe Experience Cloud administrator for the `reportSuiteID`. For this JJ. Esquire demo application code, you should use the same report suite ID that you defined during setup.

The `Report.QueueRanked` method accepts the `reportDescription` object as its one parameter and returns a `reportQueueResponse` object that includes the report status, and the new report ID. You must place the report ID in a variable so that you can reference it later to retrieve the report status and data.

For more information on these classes, see [Analytics Reporting Overview](../reporting-api-1.3/overview/c_Overview.md).

**PHP Code** 

```

/* Status codes returned by the GetReport/GetStatus request */
$REPORT_STATUS_NOT_READY = 'not ready';
$REPORT_STATUS_QUEUED = 'queued';
$REPORT_STATUS_DONE = 'done';

$max_report_checks = 500; // ULTIMATE SYSTEM MAXIMUM CHECKS ON THE REPORT QUEUE
$rsId = 'your report suite id',

/* Set the params array */
$params = array(	'reportDescription' => array(
   	'reportSuiteID' => $rsId, // the report suite id
   	'date' => '2010-12-15', // the date of the report, format YYYY-MM-DD or YYYY-MM or YYYY
   	'dateFrom' => '', // the start date of the report range, format YYYY-MM-DD
   	'dateTo' => '', //  the end date of the report range, format YYYY-MM-DD
   	'dateGranularity' => '', // granularity, this only applies to Overtime and Trended reports  (day, hour, etc.)
   	'metrics' => array( array('id'=>'totalRevenue') ), // metrics
   	'elements' => array( array(
  			 'id'=>'product',
   			 'classification'=>'brand',
   			 'top' => '10'
   	 ) ), // elements, elements don't apply to Overtime reports
   	'sortBy'=> '', // sortBy
   	'locale' => 'en_US'
    	)
);
/* The API method determining which type of report to queue. */
/* There are 3 types of reports (Report.QueueOvertime, Report.QueueTrended, Report.QueueRanked)) */
$report_type = 'Report.QueueRanked';

/* Queue the request */
$response = sendRequest( $report_type, $params);

/* Check for a valid request reponse */
$queue = -1;
if($response['status'] === $REPORT_STATUS_QUEUED)
{
    /* Save the queue ID */
    $queue = $response['reportID'];
          var_dump($queue);
} else {
    throw new Exception('rp_queueAndGetReport(): ' . $response['status'] . ' - '. $response['statusMsg'], 0);
}

```

**Java Code** 

```
/* Create a reportDescription object to set all properties on */
ReportDescription reportDescription = new ReportDescription();
reportDescription.setReportSuiteID("<Your report suit ID>");
/* The date for which you want to run the report. */
reportDescription.setDate("2010-12-15");
reportDescription.setLocale(ReportDefinitionLocale.en_US);
reportDefinitionMetric reportDefinitionMetric = new ReportDefinitionMetric();

/* Set the metric to totalRevenue - look at this link for options - https://github.com/Adobe-Experience-Cloud/analytics-1.4-apis/blob/main/src/pages/guides/reporting-api-1.3/reference/r_metrics.md */
reportDefinitionMetric.setId("totalRevenue");
ReportDefinitionMetric[] metrics = { reportDefinitionMetric };
reportDescription.setMetrics(metrics);
ReportDefinitionElement reportDefinitionElement = new ReportDefinitionElement();

/* Set the element to product to pull a product report - look at this link for options  - https://github.com/Adobe-Experience-Cloud/analytics-1.4-apis/blob/main/src/pages/guides/reporting-api-1.3/reference/r_elements.md */
reportDefinitionElement.setId("product");

/* This sets the classification to Brand to pull a classified report of Brand in Products. */
reportDefinitionElement.setClassification("brand");
reportDefinitionElement.setTop(10);
ReportDefinitionElement[] elements = { reportDefinitionElement };
reportDescription.setElements(elements);

/* The API method determining which type of report to queue, there are 3 types of reports (Overtime, Trended, Ranked) */
ReportQueueResponse response = port.reportQueueRanked(reportDescription);

/* Store the report response in reportID variable */
int reportID = response.getReportID();

```

**C\# Code** 

```
/* Create a reportDescription object to set all properties on */
 reportDescription rd = new reportDescription();
       rd.reportSuiteID = "<Your report suit ID>";
       rd.date = "2011-1-18";
     
       rd.metrics = new reportDefinitionMetric[1];
       rd.metrics[0] = new reportDefinitionMetric();
 /* Set the metric to totalRevenue - look at this link for options -    
    https://github.com/Adobe-Experience-Cloud/analytics-1.4-apis/blob/master/src/pages/guides/reporting-api-1.3/reference/r_metrics.md */
       rd.metrics[0].id = "totalRevenue";
      
       rd.elements = new reportDefinitionElement[1];
       rd.elements[0] = new reportDefinitionElement();
        /* Set the element to product to pull a product report - look at this link for 
         options  - 
         https://github.com/Adobe-Experience-Cloud/analytics-1.4-apis/blob/main/src/pages/guides/reporting-api-1.3/reference/r_elements.md */
       rd.elements[0].id = "product";

/* This sets the classification to Brand to pull a classified report of Brand in Products. */
       rd.elements[0].classification = "brand";
       rd.locale = reportDefinitionLocale.en_US;

       Console.WriteLine("Queuing report...");

/* The API method determining which type of report to queue, there are 3 types of reports (Overtime, Trended, Ranked) */
       reportQueueResponse response = client.ReportQueueRanked(rd);

/* Store the report response in reportID variable */
int reportID = response.reportID;

```

**Parent topic:** [Reporting API Tutorial](c_Reporting_API_Tutorial.md)


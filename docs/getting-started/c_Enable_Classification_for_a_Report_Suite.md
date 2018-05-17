# Step 1: Enable Classification for a Report Suite

 

When you use SAINT, you import and classify data for a basic report element in your report suite. Examples of report elements are Products, Page Names, Site Section and more.

**Note:** Since reports are not enabled for classification by default, you may need to ask your Analytics administrator to enable it.

If you want to check whether a report is enabled for classification, use the Admin Console in the Adobe Experience Cloud or call the `Saint.GetCompatibilityMetrics()` method in the SAINT Classifications API as shown in the following code.

This method accepts an array of report suite IDs as an argument and returns one or more relation IDs, which is the unique ID associated with a basic report element in your report suite.

For more information about the `Saint.GetCompatibilityMetrics()` method, see the [associated documentation](https://github.com/Adobe-Experience-Cloud/analytics-1.4-apis/blob/master/docs/saint-api/methods/r_GetCompatibilityMetrics.md).

**PHP Code** 

```
$rsId = ''; 
$notification_email = ''; 
$report_suite_array = array($rsId); 

try 
{ 
/* Saint.GetCompatibilityMetrics */ 
$response = sendRequest('Saint.GetCompatabiltyMetrics', array('report_suite_array'=>$report_suite_array ) ); 

var_dump($response); 
}
```

**Java Code** 

```
String[] report_suite_array = new String[1]; 
report_suite_array[0] = "your report suite ID"; 
/* Identify which reports are enabled for classifications */ 
Compatability[] response = port.saintGetCompatabiltyMetrics(report_suite_array); 
for (int i=0;i{ 
System.out.println(""+response[i].getRelation_id()+ " "+response[i].getRelation_name()+ " "+response[i].getReport_suite()); 
}
```

**Parent topic:** [SAINT API Tutorial](c_SAINT_API_Overview.md)


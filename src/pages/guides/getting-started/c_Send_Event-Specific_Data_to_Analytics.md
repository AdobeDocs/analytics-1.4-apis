# Step 4: Send Event-Specific Data to Analytics

 

In this section, you will learn how to collect analytics data when a visitor clicks on a link by creating an object that contains the properties defined in the following table.

| Property | Description |
|------------|---------------|
| reportSuiteID (Required) | The report suite where you are collecting data. |
| visitorID (visitorID or ipAddress required) | A visitor’s unique identifying cookie. |
| IPaddress (visitorID or ipAddress required) | The visitor’s IP address. |
| userAgent | The visitor’s browser type and OS. 
| pageName (pageName or pageURL required) | The name of the web page. |
| events | A list of Analytics events being used. |
| transactionID | A unique value used to tie multi-channel user activity. |
| linkName | The name of the link. It is used in Analytics reports. |
| linkType | Set the value to one of the following: `o` for Custom Links  `e` for Exit Links  `d` for File Downloads |
| linkURL | The links HREF. If the object has no HREF property then set the value to true. |

In the related article, [Data Sources API Tutorial](c_Data_Sources_Overview.md#), you will learn how to upload data about purchases made through the JJ. Esquire Call Center. However, you will need a mechanism to associate these purchases with the visitors who clicked on the Purchase by Phone link.

Analytics provides an `s.transactionID` variable to identify all clicks to this link. Remember that the popup that appears offers the visitor a 5% discount when they use this `transactionID` in their Call Center order.

**Note:** You may need to ask your Adobe representative to enable the transactionID for recording. You can check whether the variable is enabled in Admin > Data Sources > Manage.

In this JJ. Esquire demo application, you send a custom event, `event1`, and the `transactionID` to Analytics. `event1` tracks the number of visitors who click the Purchase By Phone link in the Product Detail page.

The following code formats the custom event-specific data within XML tags for the Data Insertion API.

Note: The `pageName` property is required, but all page values are ignored for custom links.

**PHP Code** 

```
/* Define an associative array containing the properties for the Contact Call Center custom event */ 
$analyticsArray = array( 
  'reportSuiteID'=>$rsId, 
  'visitorID'=>'123456543210', 
  'ipAddress'=>'127.0.0.1', 
  'userAgent'=>'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 4.0), Mozilla/5.0 (Macintosh; U; Intel Mac OS X; es-ES; rv:1.8.1.6) Gecko/20070725 Firefox/2.0.0.6', 
  'pageName'=>'Product Detail Page**', 
  'linkName'=>'Call Center Link**', 
  'linkType'=>'o', 
  'linkURL'=>'true', 
  'events'=>'event1', 
  'transactionID'=>'003456' 
); 

/* Format the analytics data within XML tags*/ 
$xmlData=formatXML($analyticsArray); 
?>
```

**Java Code** 

```
/* Create a new class which calls the API and creates an object containing the custom link properties for the Product Detail page in the JJ. Esquire demo application. */ 

DataInsertion di = new DataInsertion( "", "123456543210" ); 
di.set( "reportSuiteID","" ); 
di.set( "visitorID","123456543210" ); 
di.set( "ipaddress", "127.0.0.1" ); 
di.set( "userAgent","Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 4.0), Mozilla/5.0 (Macintosh; U; Intel Mac OS X; es-ES; rv:1.8.1.6) Gecko/20070725 Firefox/2.0.0.6" ); 
/* The following 6 variables map to the Product Detail page in tagging. */ 
di.set( "pagename", "Product Detail Page**" ); 
di.set( "linkName", "Call Center Link**" ); 
di.set( "linkType", "o" ); 
di.set( "linkURL","true" ); 
di.set( "events","event1" ); 
di.set( "transactionID","003456" );
```

You will need to repeat [Step 3: Send Page-Specific Data to Analytics](c_Send_Page-Specific_Data_to_Analytics.md#) to format the HTTP POST request headers, append the analytics data, and send the XML formatted Analytics data to the Data Insertion API.

A `Success` response means the operation was successful.

**Parent topic:** [Data Insertion API Tutorial](c_Data_Insertion_Overview.md)


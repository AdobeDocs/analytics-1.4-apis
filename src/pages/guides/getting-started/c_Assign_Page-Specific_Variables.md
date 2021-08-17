# Step 2: Assign Page-Specific Variables

 

Analytics collects some standard data from each page of a web site. In this section, you learn how to create an XML-formatted object that contains these properties using your server-side language.

The following table lists the XML tags for page specific data in the JJ. Esquire demo application for the Product Detail page.

| Property | Description |
|------------|---------------|
| reportSuiteID \(required\) | The report suite where you are collecting data. |
| visitorID \(visitorID or ipAddress required\) | A visitor’s unique identifying cookie. |
| IPaddress \(visitorID or ipAddress required\) | The visitor’s IP address. |
| userAgent | The visitor’s browser type and OS. |
| pageName \(pageName or pageURL required\) | The name of the web page. |
| channel | A section, or category, within your site. |
| prop1 | A custom traffic variable to track a metric you define. |
| events | A list of one or more Analytics events to track. |
| products | A list of products on the web page. The format is “category;product name \[,category; product name\]” |


The following code sets the analytics data for the `pageName`, `channel`, `prop1`, `event` and `products` variables.

**Note:** The SKU number for this article is different than the SKU number you set in the Collect visitor analytics using Analytics JavaScript Tagging tutorial so that you can more easily distinguish the data collected from the client- and server-side methods. You may also notice that the variable data in this article appends two asterisks \(\*\*\) to the data, again to help you more easily verify the data collected with the Data Insertion API.

**PHP Code** 

```
/* Define the host for HTTP POST for Data Insertion */ 
$host = ''; 
/* Define the Report Suite Id */ 
$rsId = ''; 
/* Define an associative array containing the properties from the Product Detail Page */ 
$analyticsArray = array( 
  'reportSuiteID'=>$rsId, 
  'visitorID'=>'123456543210', 
  'ipAddress'=>'127.0.0.1', 
  'userAgent'=>'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 4.0), Mozilla/5.0 (Macintosh; U; Intel Mac OS X; es-ES; rv:1.8.1.6) Gecko/20070725 Firefox/2.0.0.6', 
  'pageName'=>'Product Detail Page**', 
  'channel'=>'Womens Dept**', 
  'prop1'=>'Ski Jacket**', 
  'products'=>'Activewear;100244', 
  'events'=>'prodView' 
); 

/* Format the analytics data within XML tags*/ 
$xmlData=formatXML($analyticsArray); 
?>
```

**Java Code** 

```
/* Create a new class which calls the API and creates an object containing the page specfic properties for the Product Detail page in the JJ. Esquire demo application. */

DataInsertion di = new DataInsertion( "", "123456543210" ); 
di.set( "reportSuiteID","" ); 
di.set( "visitorID","123456543210" ); 
di.set( "ipaddress", "127.0.0.1" ); 
di.set( "userAgent","Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 4.0), Mozilla/5.0 (Macintosh; U; Intel Mac OS X; es-ES; rv:1.8.1.6) Gecko/20070725 Firefox/2.0.0.6" ); 
/* The following 6 variables map to the Product Detail page in tagging. */ 
di.set( "pagename", "Product Detail Page**" ); 
di.set( "channel", "Womens Dept**" ); 
di.set( "prop1", "Ski Jacket**" ); 
di.set( "products", "Activewear;100244"); 
di.set( "events","prodView");
```

**Parent topic:** [Data Insertion API Tutorial](c_Data_Insertion_Overview.md)


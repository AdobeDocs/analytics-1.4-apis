# Data Insertion Process

The Data Insertion API supports HTTP POST and HTTP GET for submitting data to Adobe Experience Cloud servers.

**Note:** The Analytics response to each data insertion includes a status message \(`SUCCESS` or `FAILURE`\).

## HTTP POST

Use an HTTP POST to submit properly-formatted Data Insertion XML to the Data Insertion URL. The Data Insertion URL differs from the standard JavaScript data submission URL. Adobe ClientCare can provide the domain name of the Adobe data collection servers where you should send data. For example:

`http://namespace.112.2o7.net/b/ss//6` 

`http://namespace.122.2o7.net/b/ss//6` 

**Note:** The "6" code at the end of the URL indicates that the data submission requires XML processing.

Upon receipt, Adobe servers perform basic tag validation of the data insertion. If it encounters an error, Adobe returns a `Failure` response. If the data insertion is successful, Adobe queues the data insertion request for processing by the standard Analytics Data Processing Engine. The engine processes these requests in the same way it processes data collected via JavaScript.

When using HTTP POST with the Data Insertion API, consider the following:

-   The Data Insertion API requires data in UTF-8 format. Specify the character encoding in the opening XML tag, as shown in XML Data Insertion Format.
-   Replace Ampersand \(&\), greater-than \(\>\), and less-than \(<\) symbols with their HTML equivalents when passing them into a Analytics variable. For example, submit `<evar1>News & Sports <local> </evar1>` as `<evar1>News &amp; Sports &lt;local&gt; </evar1>`.
-   To submit data over an encrypted connection, the application must be configured to support HTTPS POST commands. Some tools that let you do this include:
    -   PHP versions 4.3.0 and higher support OpenSSL, and can be used to POST data through SSL port 443. You can see an example of this in [Sample Data Insertion \(PHP\)](../sample_code/r_sample_php.md#).
    -   You can use cURL to send data over an SSL connection. For information about HTTPS POST in Java, see [http://java.sun.com/developer/technicalArticles/Security/secureinternet/](http://java.sun.com/developer/technicalArticles/Security/secureinternet/).
    -   Microsoft .Net Framework version 1.1 supports the HTTP header: `Expect: 100-Continue in HTTP POST requests`, but Experience Cloud servers reject POST data sent with this type of request. To avoid this, set `ServicePointManager.Expect100Continue = False`. For more information, see [http://msdn.microsoft.com/library/en-us/cpref/html/frlrfsystemnetservicepointmanagerclassexpect100continuetopic.asp](http://msdn.microsoft.com/library/en-us/cpref/html/frlrfsystemnetservicepointmanagerclassexpect100continuetopic.asp) .

## HTTP GET

Use an HTTP GET to submit data to the Data Insertion URL in a query-string format that supports shortened variable names \(for more information, see "Variables and Query String Parameters" in the *Analytics Implementation Guide*, available at **Help** \> **Documentation** in the Experience Cloud.

HTTP GET reduces bandwidth needs by 30% - 40%, but Adobe data collection servers do not send response messages, so if the data insertion doesn't work as expected, you do not have that feedback for troubleshooting purposes. For more information, see the [HTTP GET Sample](../sample_code/r_sample_http_get.md#).

The Data Insertion URL differs from the standard JavaScript data submission URL. The *<rsid\>* in the URL is the report suite where you want to submit the data. Adobe ClientCare can provide the domain name of the Adobe data collection servers where you should send data. For example:

`http://namespace.112.2o7.net/b/ss/*<rsid\>*/0` 

`http://namespace.122.2o7.net/b/ss/*<rsid\>*/0` 

**Note:** The "0" code at the end of the URL indicates that the data submission requires JavaScript processing.

Upon receipt, Adobe servers perform basic tag validation of the data insertion. If it encounters an error, Adobe returns a `Failure` response. If the data insertion is successful, Adobe queues the data insertion request for processing by the standard Analytics Data Processing Engine. The engine processes these requests in the same way it processes data collected via JavaScript.

**Note:** The Data Insertion API requires data in UTF-8 format.


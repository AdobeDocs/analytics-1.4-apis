# Data Insertion Sample (PHP)

This PHP sample illustrates how to connect to Adobe data collection servers and record a page view.

```
<?/
 **
 * @file
 * Example code to send one pageview to Omniture via the Data Insertion API
 *   and check for a valid response.
 * 
 * @author Omniture, an Adobe Company <clientcare@omniture.com>
 * @copyright 2007-2010 Adobe Systems, Inc. All Rights Reserved.
 */ 
// NOTE: Contact an ClientCare to identify the correct namespace and domain for your company.

$namespace = "namespace";
$domain    = "sc.omtrdc.net";
$host      = $namespace.".".$domain;
$rsid      = "rsid";
$vid       = "";
$ip        = "10.0.0.1";
$page_url  = "";
$pageName  = "Test Page"; 
$timestamp = "YYYY-10-21T17:33:22-07";

// create opening XML tags
$xml  = "<?xml version=1.0 encoding=UTF-8?>\n";
$xml .= "<request>\n";
$xml .= " <scXmlVer>1.0</scXmlVer>\n"; 

// add tags for required elements
$xml .= $rsid ? " <reportSuiteID>$rsid</reportSuiteID>\n":""; 

//The timestamp line of code can only be used when an Omniture representitive has enabled timestamp support for your organization.
$xml .= $timestamp ? " <timestamp>$timestamp</timestamp>\n":"";

$xml .= $vid ? " <visitorID>$vid</visitorID>\n":"";
$xml .= $ip ? " <ipAddress>$ip</ipAddress>\n":""; 

$xml .= $page_url ? " <pageURL>$page_url</pageURL>\n":"";
$xml .= $pageName ? " <pageName>$pageName</pageName>\n":""; 

// close the XML request
$xml .= "</request>\n"; 

// Create POST, Host and Content-Length headers
$head = "POST /b/ss//6 HTTP/1.0\n";
$head .= "Host: $host\n";
$head .= "Content-Length: ".(string)strlen($xml)."\n\n"; 

// combine the head and XML
$request = $head.$xml; 

$fp=fsockopen($host,80,$errno,$errstr,30); 
// Use this function in place of the call above if you have PHP 4.3.0 or
//   higher and have compiled OpenSSL into the build.
//
// $fp = pfsockopen("ssl://".$host, 443, $errno, $errstr);
// 
if( $fp ) { 

// send data
fwrite($fp,$request); 

// get response
$response="";
while( !feof($fp) ){
    $response .= fgets($fp,1028);
}
fclose($fp); 

// display results
echo "RESULTS:\n";
print_r($response);
echo "\n"; 

// check for errors
if( preg_match("/status\>FAILURE\<\/status/im",$response) ){
    /*
    * TODO:
    * write $request and $response to log file for investigation
    * and retries
    */
    echo "<h1>Failure</h1>\n";
    echo "<p>Note the reason tag in the response, fix and try again.</h1>\n";
}
} else {
echo "<H1>Couldn't open port to Analytics servers</H1>n"; 
if(!$rsid){
    echo "<H4>No report suite specified</H4>\n";
} else {
    echo "<p>$errstr ($errno)</p>\n";
    /*
    * TODO:
    * write $request and $errstr to log file for investigation
    * and retries
    */
}
}
?>
```

**Parent topic:** [Sample Code](../sample_code/c_sample_code.md)


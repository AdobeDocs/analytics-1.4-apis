# Step 3: Send Page-Specific Data to Analytics

 

Now that the page-specific analytics data for the JJ. Esquire demo application has been formatted within XML tags, you are ready to send the data to Analytics.

The code below first formats the HTTP POST headers and appends the XML formatted Analytics data. Next, it opens a URL connection to the host for Analytics and sends the HTTP POST request.

**PHP Code** 

```
/* Send the analytics data to SiteCatlyst */ 
sendPOSTRequest($host, $xmlData); 

/** 
* Sends hit-level data to Analytics. 
* @param $host - the host name for Analytics data collection 
* @param $xml - an associative array containing the properties of the hit-level data beacon 
*/ 
function sendPOSTRequest($host, $xml) 
{ 
/* Create POST, Host and Content-Length headers */ 
$head = "POST /b/ss//6 HTTP/1.0\n"; 
$head .= "Host: $host\n"; 
$head .= "Content-Length: " . (string)strlen($xml) . "\n\n"; 
/* combine the head and XML */ 
$request = $head . $xml; 
$fp = fsockopen($host, 80, $errno, $errstr, 30); 
echo "Opening connection to $host\n"; 
if ($fp) { 
/* send data */ 
fwrite($fp, $request); 
echo "Sending data...\n$request\n"; 
/* get response */ 
$response = ""; 
while (!feof($fp)) { 
$response .= fgets($fp, 1028); 
} 
fclose($fp); 
/* display results */ 
echo "RESULTS:\n"; 
print_r($response); 
echo "\n"; 
/* check for errors */ 
if (preg_match("/status\>FAILURE\<\/status/im", $response)) { 
echo "
Failure
\n"; 
echo "
Note the reason tag in the response, fix and try again.\n"; 
} else { 

/* Success */ 
return true; 
} 
} else { 
echo "

Couldn't open port to Analytics servers
\n"; 
if (!$rsid) { 
echo "
No report suite specified
\n"; 
} else { 
echo "
$errstr ($errno)

\n"; 
} 
} 
return false; 
} 
//end: sendPOSTRequest
```

**Java Code** 

```
URL url = null; 
URLConnection urlConn = null; 
DataOutputStream printout = null; 
BufferedReader input = null; 
String u = "http:///b/ss//6 HTTP/1.0"; 
String tmp = null; 

url = new URL( u ); 
urlConn = url.openConnection(); 
urlConn.setDoInput( true ); 
urlConn.setDoOutput( true ); 
urlConn.setUseCaches( false ); 
urlConn.setRequestProperty( "Content-Type", "application/x-www-form-urlencoded" ); 

printout = new DataOutputStream(urlConn.getOutputStream()); 
printout.writeBytes( di.toString() ); 
printout.flush(); 
printout.close(); 

input = new BufferedReader( new InputStreamReader(urlConn.getInputStream( ) ) ); 

System.out.println( di ); 

System.out.println("Response from server is: "); 
while( null != ( ( tmp = input.readLine() ) ) ) 
{ 
System.out.println(tmp); 
} 
printout.close(); 
input.close();
```

When the Data Insertion API receives HTTP POST data, it performs basic XML tag validation. If it finds an error, the API returns a `Failure` response. If it does not find any errors, the API returns a `Success` response and the data is queued for processing.

**Note:** View [HTTP POST response codes](https://github.com/Adobe-Experience-Cloud/analytics-1.4-apis/blob/master/docs/data-insertion-api/reference/r_post_response_codes.md) for details about all of the response codes.

**Parent topic:** [Data Insertion API Tutorial](c_Data_Insertion_Overview.md)


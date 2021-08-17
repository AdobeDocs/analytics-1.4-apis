# Step 4: Retrieve the Report

 

As mentioned earlier, this JJ. Esquire demo application uses the REST interface to programmatically retrieve the report. The report data will be available within 72 hours.

The following code creates a connection to the URL where the data is available and prints out the report data to the console.

**Note:** In the Java code block, the `getSecurityHeader()` method constructs the security header for the REST requests. This method is pure Java code that you can review in the solution file provided in the [data\_warehouse\_API\_tutorial](c_data_warehouse_API_tutorial.md#) section.

**PHP Code** 

```
$auth_login = '<your user name>';
$auth_password = '<your shared secret>'; 
if($reportDone)
{
          /* Report has Completed */
    echo ("DW report is done. data url= " . $result['data_url'] . "\n");
    $report = getReportREST($result['data_url']);
    echo ('The Data Warehouse report: ' . "\n" . $report );
}

/** Use curl to fetch the report from a remote site **/
function getReportREST($url){    

    $curl_handle = curl_init();
    curl_setopt($curl_handle, CURLOPT_VERBOSE, true);
    
    curl_setopt($curl_handle,CURLOPT_URL,$url);
    $security_headers = array();
    $security_headers[] = getSecurityHeaderREST();
    curl_setopt($curl_handle,CURLOPT_HTTPHEADER,$security_headers);
    curl_setopt($curl_handle,CURLOPT_RETURNTRANSFER,true);
    
    $result = curl_exec($curl_handle);
    
    curl_close($curl_handle);
    return $result;
}

/** Format the security header for the REST request **/
function getSecurityHeaderREST(){
    global $auth_login, $auth_password;    
    $nonce_part = 0;    
    // seed random
    list($usec, $sec) = explode(' ', microtime());
    $nonce = $nonce_part . '-' . $sec . '-' . $usec ;
    $created = date('Y-m-d H:i:s');
    $combo_string = $nonce . $created . $auth_password;

    $sha1_string = sha1($combo_string);
    $pwDigest = base64_encode($sha1_string);

    return "X-WSSE: UsernameToken Username=\"{$auth_login}\", PasswordDigest=\"$pwDigest\", Nonce=\"$nonce\", Created=\"$created\"";
}

```

**Java Code** 

```
if(request.getMessage().equalsIgnoreCase("completed"))
	{
try {
/* Connect to the URL */
		URL url = new URL( request.getData_url() );
		URLConnection connection = url.openConnection();
		/* Attach the Security Header (X-WSSE) */
		connection.addRequestProperty("X-WSSE",  getSecurityHeader( "<your user name>","<your shared secret>" ));
		connection.setDoOutput(false);
		 
		/* Establish an InputStream/BufferedReader to read the report */
		InputStream in = connection.getInputStream();
		BufferedReader res = new BufferedReader(new InputStreamReader(in, "UTF-8"));
		 
		          /* Print each line of the report */
		      String inputLine;
		      while ((inputLine = res.readLine()) != null){
		      System.out.println(inputLine);
		      }
		      res.close();
		 
		} catch (Exception e) {
		e.printStackTrace();
		}
	}
	else
{
	System.out.println("DW Check, message = " + request.getMessage());
	}

```

**C\# Code** 

```
if (request.message.Equals("Completed"))
            {
                try
                {
                    HttpWebResponse statusResponse = null;
                    string responseXml = "";

  /* Define the URL */
                    StringBuilder sbUrl = new StringBuilder("https://api-sbx1.omniture.com/admin/1.2/" + "?method=Company.GetTokenCount");

/* Create the web request to the URL */
                   HttpWebRequest omniRequest = (HttpWebRequest)WebRequest.Create(request.data_url);

                    /* Generate a timestamp to be used in password creation  */
                   string timecreated = generateTimestamp();
                    /* Generate a nonce to be used in password creation */
                   string nonce = generateNonce();
                 /* Create a password digest string */
                   string digest = getBase64Digest(nonce + timecreated + "<your shared secret>");
                    nonce = base64Encode(nonce);

/* Create the security header for the REST call */
                    omniRequest.Headers.Add("X-WSSE: UsernameToken Username=\"" + "<your user name>" + "\", PasswordDigest=\"" + digest + "\", Nonce=\"" + nonce + "\", Created=\"" + timecreated + "\"");
                    omniRequest.Method = "POST"; omniRequest.ContentType = "application/x-www-form-urlencoded";
                    
                    try
                    {
                      /* Get the response from the request */
                        statusResponse = (HttpWebResponse)omniRequest.GetResponse();

                        using (Stream receiveStream = statusResponse.GetResponseStream())
                        {
                            using (StreamReader readStream = new StreamReader(receiveStream, Encoding.UTF8))
                            {
                                   /* Read the response and print it to console */
                                responseXml = readStream.ReadToEnd();
                                Console.WriteLine(responseXml);
                            }
                        }
                    }
                    catch (Exception ex)
                    {
                        throw new Exception(ex.Message);
                    }

                }
                catch (Exception e)
                {
                    Console.WriteLine("Exception is: " + e.Message);
                }
            }
            else
            {
                Console.WriteLine("DW Check, message = " + request.message);
            }

//private functions. 
private string generateNonce() 
{ 
    nonce = Encoding.ASCII.GetBytes(DateTime.Now.ToString("s"));
    return Convert.ToBase64String(nonce);
} 

private string generateTimestamp() 
{ 
    return DateTime.UtcNow.ToString("yyyy-MM-ddTHH:mm:ssZ");
} 

private string getBase64Digest(string input) 
{ 
    //Digest = Base64( SHA1( Nonce + CurrentTimestamp + Secret));
    SHA1 sha = new SHA1Managed();
    ASCIIEncoding ae = new ASCIIEncoding();
    byte[] data = ae.GetBytes(input);
    byte[] digest = sha.ComputeHash(data);
    return Convert.ToBase64String(digest);
}

```

**Parent topic:** [Data Warehouse API Tutorial](c_data_warehouse_API_tutorial.md)


# Sample Code

This topic describes the data structures, including enumerated types, used by the Administration web service.

The following code is for demonstration purposes only. Please use your own values, names, file locations, and so on, as you prepare code for your company.

The code below requires the NuSOAP and cURL PHP classes. For details on the setup and requirements for NuSOAP please consult the NuSOAP Web site: [http://sourceforge.net/projects/nusoap/](http://sourceforge.net/projects/nusoap/). While calls to the cURL classes are not made explicitly in the example code, the cURL PHP extension is required for NuSOAP to make a connection over SSL.

```
<?
require_once "nusoap/nusoap.php";
/**
* @file
* Example code to access the Marketing Cloud Administration web services
* and retrieve the current token count.
*
* @author Omniture <clientcare@omniture.com>
* @copyright 2006 - 2010 Omniture, Inc. All Rights Reserved
*/
// reference the downloaded WSDL
define('WSDL_DOCUMENT', "./omniture_wsdl.xml");

// seed random
list($usec, $sec) = explode(' ', microtime());
srand((float) $sec + ((float) $usec * 100000));

// SOAP login credentials
$username = '';
$secret = '';
function get_header($username, $secret)
{
   // Create a unique identifier, or nonce.
   // This example is used for simplicity in demonstration. Use a method
   // that guarantees uniqueness in a production environment.
   $nonce = md5(rand());
   $created = date("Y-m-d H:i:s");
   $combo_string = $nonce . $created . $secret;

   // The sha1 command is not available in all versions of PHP.
   // If your version of PHP does not support this command, use
   //openssl directly with the command:
   // echo -n <string> | openssl dgst -sha1
   $sha1_string = sha1($combo_string);
   $password = base64_encode($sha1_string);
   
   $headers = '<wsse:Security SOAP-ENV:mustUnderstand="1">
      <wsse:UsernameToken wsu:Id="User">
         <wsse:Username>'.$username.'</wsse:Username>
         <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordDigest">'.$password.'</wsse:Password>
         <wsse:Nonce>'.$nonce.'</wsse:Nonce>
         <wsu:Created>'.$created.'</wsu:Created>
      </wsse:UsernameToken>
   </wsse:Security>';
   return $headers;
}

// Create nuSOAP client
$client = new nusoap_client(WSDL_DOCUMENT, TRUE);

// handle client setup error
if($err = $client->getError()) {
   echo "ERROR:".$err."\n";
   exit();
}

// call web services function
$result = $client->call('Company.GetTokenCount', // function name
  array('auth_key' => $username), // parameters
  'http://omniture.com', // namespace
  '', // SOAP Action
  get_header($username, $secret)); // security header

// Display results
echo "RESULTS:\n";
print_r($result);
echo "\n";
?>
```


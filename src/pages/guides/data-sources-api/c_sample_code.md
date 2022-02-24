# Sample Code

This sample code demonstrates a basic Data Sources interaction using PHP.

While your Data Sources code would be significantly more complex, this example displays the primary components and their interactions in the Data Sources environment.

**Note:** Do not copy and paste this code and expect a functional Data Sources interaction. There are generic values and static data throughout this example for simplicity.

```
<?php

require_once 'nusoap.php';

define( 'WSDL_DOCUMENT', 'omnitureAPI.wsdl' );

// This is the data to be sent.  It will be formatted into XML below.
// In a typical situation this data would be read from some other location, like a database or file.
$columnNames = array( 'date', 'evar 1', 'event 2' );
$rows = array (
    array ( '1/1/YYYY', 'product1', '2.50' ),
    array ( '1/2/YYYY', 'product2', '4.25' ),
    array ( '1/3/YYYY', 'product3', '3.75' )
);

// Seed the number generator
list( $usec, $sec ) = explode( ' ', microtime() );
srand( (float)$sec + ((float)$usec * 100000) );

// SOAP login credentials
$rsid = 'myReportSuiteID';
$dsid = 'myDataSourceID';
$username = 'myUserName';
$secret = 'mySecret';

// Returns the security header
function GetHeader ( )
{   
    // Create a unique identifier (a.k.a. nonce).
    // This example is used for simplicity in demonstration.
    // Use a method that guarantees uniqueness in a production environment.   
    global $username;
    global $secret;

    $nonce = md5( rand() );
    $created = date( "Y-m-d H:i:s" );
    $comboString = $nonce . $created . $secret;
    $sha1String = sha1( $comboString );
    $password = base64_encode( $sha1String );
    $header =     '<wsse:Security SOAP-ENV:mustUnderstand="1">
                    <wsse:UsernameToken wsu:Id="User">
                        <wsse:Username>'.$username.'</wsse:Username>
                        <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordDigest">'.$password.'</wsse:Password>
                        <wsse:Nonce>'.$nonce.'</wsse:Nonce>
                        <wsu:Created>'.$created.'</wsu:Created>
                    </wsse:UsernameToken>
                </wsse:Security>';

    return $header;
}

// Gather function parameters
$params = array (
     'reportSuiteID' => $rsid,
     'dataSourceID' => $dsid,
     'blockName' => 'myTestFile',
     'columnNames' => $columnNames,
     'rows' => $rows,
     'endOfBlock' => TRUE
);

// Create nuSOAP client
// nusoap.php's soapclient class cannot co-exist with the PHP 5 soapclient. You must
// rename it to something else.
$client = new nusoapclient( WSDL_DOCUMENT, TRUE );

// Call Omniture Web services function
$result = $client->call( 'DataSource.BeginDataBlock', $params, 'http://omniture.com', '', GetHeader() );
   
// Display results
echo "RESULTS:\n";
print_r( $result );
echo "\n";
?>
```

**Parent topic:** [Data Sources Version 1.3](c_data_sources_api_1_3.md)


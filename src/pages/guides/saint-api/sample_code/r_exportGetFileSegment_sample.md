# ExportGetFileSegment Request

This PHP sample demonstrates the use of the [SAINT.ExportGetFileSegment](../methods/r_exportGetFileSegment.md#) method..

```

#!/usr/local/bin/php -q
<?
/**
 * @file
 * SOAP_Saint.GetFileSegment.php
 * Copyright 2009-2010 Adobe Systems, Inc. All Rights Reserved.
 **/

require_once 'nusoap/nusoap.php';
require_once 'OM_Soap.inc';

$username = 'YourUsername';
$secret = '142yoursecret2552';

$wsdl_location = 'OmnitureAdminServices.wsdl';

$client = new OM_SoapClient($username,$secret);

$client->setWSDL($wsdl_location);
   
$file_id = 1;
$segment_id = 2;
$success = $client->call('Saint.ExportGetFileSegment',array('file_id'=>$file_id,'segment_id'=>$segment_id));

if ($success) {
    $response = $client->getResponse();
    if ($response) {
        print "Success:\n";
        print_r($response);           
    } else {
        print "Parse Error!:\n";
        print $client->getDebugInfo();
    }
} else {
    print "Failure:\n";
    print $client->getDebugInfo();
}

```

**Parent topic:** [Sample Code](../sample_code/c_saint_sample_code.md)


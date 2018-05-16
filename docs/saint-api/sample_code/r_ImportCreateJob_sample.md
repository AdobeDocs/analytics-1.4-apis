# ImportCreateJob Request

This PHP sample demonstrates the use of the [ImportCreateJob](../methods/r_importCreateJob.md#) method..

```

#!/usr/local/bin/php -q
<?
/**
 * @file
 * SOAP_Saint.ImportCreateJob.php
 * Copyright 2009-2010 Adobe Systems, Inc. All Rights Reserved.
 **/

require_once 'nusoap/nusoap.php';
require_once 'OM_Soap.inc';

$username = 'YourUsername';
$secret = '142yoursecret2552';

$wsdl_location = 'OmnitureAdminServices.wsdl';

$client = new OM_SoapClient($username,$secret);

$client->setWSDL($wsdl_location);
               
$report_suite_array = array('MyReportSuite');
$header = array('Key','Creative Elements','Campaigns');

$params = array(
    'report_suite_array'=>$report_suite_array,
    'header'=>$header,
    'relation_id'=>53,
    'email_address'=>"me@mycompany.com",
    'overwrite_conflicts'=>true,
    'export_results'=>1,
    'description'=>"Test Create job"
);

$success = $client->call('Saint.ImportCreateJob',$params);

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


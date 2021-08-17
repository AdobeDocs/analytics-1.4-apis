# ImportPopulateJob Request

This PHP sample demonstrates the use of the [ImportPopulateJob](../methods/r_importPopulateJob.md#) method..

```

#!/usr/local/bin/php -q
<?
/**
 * @file
 * SOAP_Saint.ImportPopulateJob.php
 * Copyright 2009-2010 Adobe Systems, Inc. All Rights Reserved.
 **/

require_once 'nusoap/nusoap.php';
require_once 'OM_Soap.inc';

$username = 'YourUsername';
$secret = '142yoursecret2552';

$wsdl_location = 'OmnitureAdminServices.wsdl';

$client = new OM_SoapClient($username,$secret);

$client->setWSDL($wsdl_location);

$job_id = 2;
$page = 3;
   
$row1 = array('SearchCenter - Excel/Bulky','SearchCenter2','Excel-Bulky');
$row2 = array('Minko','Allupsy','Poko','wano!');
$row3 = array('Minko','Allupsy','Pok2o');
       
$r_rows[] = array('row'=>$row2);
$r_rows[] = array('row'=>$row1);   
$r_rows[] = array('row'=>$row3);

$success = $client->call('Saint.ImportPopulateJob',array('job_id'=>$job_id,'page'=>$page,'rows'=>$r_rows));

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


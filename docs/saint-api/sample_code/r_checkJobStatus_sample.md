# CheckJobStatus Request

This PHP sample demonstrates the use of the [SAINT.CheckJobStatus](../methods/r_checkJobStatus.md#) method.

```
#!/usr/local/bin/php -q
<?
/**
 * @file
 * SOAP_Saint.CheckJobStatus.php
 * Copyright 2009-2010 Adobe Systems, Inc. All Rights Reserved.
 **/

require_once 'nusoap/nusoap.php';
require_once 'OM_Soap.inc';

$username = 'YourUsername';
$secret = '142yoursecret2552';

$wsdl_location = 'OmnitureAdminServices.wsdl';

$client = new OM_SoapClient($username,$secret);

$client->setWSDL($wsdl_location);
	
$job_id = 23; // your job id here
$success = $client->call('Saint.CheckJobStatus',array('job_id'=>$job_id));

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


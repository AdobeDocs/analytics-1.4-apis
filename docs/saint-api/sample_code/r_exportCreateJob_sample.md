# ExportCreateJob Request

This PHP sample demonstrates the use of the [SAINT.ExportCreateJob](../methods/r_exportCreateJob.md#) method.

```
#!/usr/local/bin/php -q
<?
/**
 * @file
 * SOAP_Saint.ExportCreateJob.php
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

$params = array(
    'report_suite_array'=>$report_suite_array,
    'relation_id'=>106,
    'email_address'=>"me@mycompany.com",
    'select_all_rows'=>0,
    'select_number_of_rows'=>777,
    'date_filter_row_start_date'=>'Mar 2007',
    'date_filter_row_end_date'=>'Jun 2007',
    'campaign_filter_option'=>2,
    'campaign_filter_begin_range'=>"1
);

$success = $client->call('Saint.ExportCreateJob',$params);

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


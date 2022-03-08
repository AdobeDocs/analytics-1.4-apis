# DeleteKeyVisitors

Deletes key visitors from each of the specified report suites.

## ReportSuite.DeleteKeyVisitors

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`array[string]` |A list of report suite IDs.|
|**key_visitors** |`array[string]` |A list of key visitors to delete, identified by either domain name (`abccorp.com`) or IP address (`192.168.10.128`).|

## ReportSuite.DeleteKeyVisitors response

|Type|Description|
|----|-----------|
|`xsd:boolean` |Returns `TRUE` if the operation is successful. Otherwise, returns `FALSE`.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


# AddKeyVisitors

Adds key visitors from each of the specified report suites.

## ReportSuite.AddKeyVisitors

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` |A list of report suite IDs.|
|**key\_visitors** |`array(xsd:string)` |A list of key visitors, identified by either domain name \(`abccorp.com`\) or IP address \(`192.168.10.128`\).|

## ReportSuite.AddKeyVisitors response

|Type|Description|
|----|-----------|
|`xsd:boolean` |Returns `TRUE` if the operation is successful. Otherwise, returns `FALSE`.|

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


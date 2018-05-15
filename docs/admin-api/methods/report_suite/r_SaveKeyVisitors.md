# SaveKeyVisitors

Saves key visitors.

## ReportSuite.SaveKeyVisitors request

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` |A list of report suite IDs.|
|**key\_visitors** |`array(xsd:string)` |A list of key visitors, identified by either domain name \(`example.com`\) or IP address \(`192.168.10.128`\).|

## ReportSuite.SaveKeyVisitors response

|Type|Description|
|----|-----------|
|`xsd:boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


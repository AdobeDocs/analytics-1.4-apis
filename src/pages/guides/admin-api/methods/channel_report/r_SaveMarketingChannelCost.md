# SaveMarketingChannelCost

Updates the marketing channel cost for the specified report suites.

## ReportSuite.SaveMarketingChannelCost parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` |A list of report suite IDs.|
|**amount** |`xsd:double` | |
|**channel\_id** |`xsd:int` | |
|**channel\_type** |`xsd:string` | |
|**cost\_group** |`xsd:string` | |
|**cost\_id** |`xsd:int` | |
|**name** |`xsd:string` | |
|**end\_date** |`xsd:dateTime` | |
|**metric** |`xsd:string` | |
|**start\_date** |`xsd:dateTime` | |
|**type** |`xsd:string` | |

## ReportSuite.SaveMarketingChannelCost response

|Type|Description|
|----|-----------|
|`xsd:int` |Returns `1` if the operation is successful. Otherwise, returns `0`.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


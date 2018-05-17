# SaveEcommerce

Updates the commerce level for each of the specified report suites.

## ReportSuite.SaveEcommerce parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` | A list of report suite IDs. |
|**ecommerce** |`xsd:int` | The desired level of eCommerce support for the report suite. Supported values include: `0`: Off `1`: Enabled with no shopping cart. `2`: Enabled \(most common\) |

## ReportSuite.SaveEcommerce response

|Type|Description|
|----|-----------|
|`xsd:int` | Returns `1` if the operation is successful. Otherwise, returns `0`. |

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


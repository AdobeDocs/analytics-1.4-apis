# SaveNavigationMenu

Saves a new navigation menu, or restores the default navigation menu, to selected report suites.

## ReportSuite.SaveNavigationMenu parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` |A list of report suite IDs.|
|**menu** |[rs\_nav\_menu\_item](../../data_types/r_rs_nav_menu_item.md#) |Navigation Menu Item Tree to save to the specified report suites.|
|**restore** |`tns:boolean` | \(optional, do not provide a value for menu when this is used\) Restores the default menu for the specified report suites. |

## ReportSuite.SaveNavigationMenu response

|Type|Description|
|----|-----------|
|`tns:boolean` |Returns `true` if the operation is successful. Otherwise, returns `false`.|

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


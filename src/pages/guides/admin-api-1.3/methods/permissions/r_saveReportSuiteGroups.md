# SaveReportSuiteGroups

Assigns permission groups to the specified report suite.

## Permissions.SaveReportSuiteGroups parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid** |`xsd:string` |A report suite ID.|
|**selected\_groups** |`array(xsd:int)` |A list of group IDs to assign to the report suite.|

## Permissions.SaveReportSuiteGroups response

|Type|Description|
|----|-----------|
|`xsd:int` |Returns `1` if the add user operation is successful. Otherwise, returns `0`.|

**Parent topic:** [Permissions](../../methods/permissions/c_api_admin_methods_permissions.md)


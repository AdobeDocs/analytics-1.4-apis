# GetReportSuiteGroupCount

Retrieves a list of report suites and the number of permission groups assigned to each.

## Permissions.GetReportSuiteGroupCount parameters

|Name|Type|Description|
|----|----|-----------|
|**search\_field** |`xsd:string` |The field in the report suite that you want to search. Options include: `username` \(report suite ID\), and `site_title`.|
|**search\_val** |`xsd:string` |The value to search for in the specified field.|

## Permissions.GetReportSuiteGroupCount response

|Type|Description|
|----|-----------|
|[tns:permissions\_account](../../data_types/r_permissions_account.md#) |A list of report suites, based on the specified search value, and the number of groups assigned to each.|

**Parent topic:** [Permissions](../../methods/permissions/c_api_admin_methods_permissions.md)


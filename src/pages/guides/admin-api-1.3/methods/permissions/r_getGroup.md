# GetGroup

Retrieves information about the specified permission group.

## Permissions.GetGroup parameters

|Name|Type|Description|
|----|----|-----------|
|**group\_type** |`xsd:int` | Specifies the type of group for which you want information. Groups are either of type `Custom`, or one of the pre-defined groups: `AllAccess`, `DiscoverLicenseUsers`, or `ExcelLicenseUsers`. If you want information about a `Custom` group, set `group_type` to `0`; otherwise, set `group_type` to `1`. |
|**groupid** |`xsd:string` |The group ID.|

## Permissions.GetGroup response

|Type|Description|
|----|-----------|
|[tns:group\_data](../../data_types/r_group_data.md#) |Information about the specified permission group.|

**Parent topic:** [Permissions](../../methods/permissions/c_api_admin_methods_permissions.md)


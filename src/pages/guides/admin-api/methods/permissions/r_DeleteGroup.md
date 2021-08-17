# DeleteGroup

Deletes the specified permission group.

## Permissions.DeleteGroup parameters

|Name|Type|Description|
|----|----|-----------|
|**group\_name** |`xsd:string` |The name of the group to delete.|
|**group\_id** |`xsd:integer` |Neither `group_id` nor `group_name` is required as long as one is present in the request.|

## Permissions.DeleteGroup response

|Type|Description|
|----|-----------|
|`xsd:boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Permissions](../../methods/permissions/r_methods_permissions.md)


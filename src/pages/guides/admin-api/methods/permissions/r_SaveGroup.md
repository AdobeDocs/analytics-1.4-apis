# SaveGroup

Saves group settings. If the group does not exist it creates a new group with the specified settings.

## Permissions.SaveGroup parameters

|Name|Type|Description|
|----|----|-----------|
| **all_report_suite_access** |`boolean` | Set to `true` to give the group access to all report suites in the company without having to list them individually.|
|**group_name** |`string` |A group name.|
|**group_description** |`string` |A group description.|
|**new_name** |`string` |Optional parameter to rename an existing group.|
|**group_id** |`int` |Required if `group_name` is not included in the request. If both are included, `group_id` is used.|
|**rsid_list** |`string[]` |List of report suite IDs accessible by the group. Optional if `all_report_suite_access` is true (can now be empty).|
|**user_list** |`string[]` |List of user accounts to assign to this group.|
|**category_permissions** | `string[]` | The categories are: `analytics_tools`, `report_suite_tools`, `metrics`, and `dimensions`. |

 The options for access for categories are: `all`, `custom`, `none`.

 The options for access for permissions are: `true`, `false` 

 Example:

 ```
  "category_permissions": [
    {
      "category": "analytics_tools",
      "name": "Analytics Tools",
      "access": "custom",
      "permissions": [
        {
          "id": 1234,
          "name": "Billing",
          "access": true
        },
        {
          "id": 1235,
          "name": "Code Manager",
          "access": false
        },
        etc.
    }
 ]
```


## Permissions.SaveGroup response

|Type|Description|
|----|-----------|
|`int` |Returns `1` if the operation is successful.|

**Parent topic:** [Permissions](../../methods/permissions/r_methods_permissions.md)

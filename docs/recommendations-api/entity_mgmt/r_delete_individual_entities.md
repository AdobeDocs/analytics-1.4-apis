# Delete Individual Entities

The Entity Management API lets you delete all information about one or more individual entities. For example:

```
https://recommendations.omniture.com/rest?action=entity.delete&client=CLIENT_CODE&clientToken=76bde9de-74f7-434b-ad1a-6d2d4c1b42d9&entityIds=ENTITY_ID1,ENTITY_ID2
```

|Parameter|Description|
|---------|-----------|
|**action** | \(Required\) Identifies the type of Recommendations action to execute. To delete an entity, this value is always `entity.delete`. |
| **client** | \(Required\) The client code, which is displayed on the Recommendations' Settings page. |
| **clientToken** | \(Required\) the client token, which is visible on Recommendations' Settings page. |
| **entityIds** | \(Required\) A comma-separated list of entity IDs that you want to delete from the entity catalog. |

**Note:** Parameters and values are case sensitive.

**Parent topic:** [Entity Management](../entity_mgmt/r_recs_entity_mgmt.md)


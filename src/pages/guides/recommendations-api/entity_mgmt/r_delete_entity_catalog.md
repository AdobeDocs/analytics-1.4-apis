# Delete Entity Catalog

The Entity Management API lets you delete the entire entity catalog, including all entries and attributes, in one action. This is useful if the entire product catalog changes (for example, after Christmas), or if test data was sent during a development or test phase. For example:

```
https://recommendations.omniture.com/rest?action=entity.deleteAll&client=clientCode
&clientToken=76bde9de-74f7-434b-ad1a-6d2d4c1b42d9
```

|Parameter|Description|
|---------|-----------|
|**action** | (Required) Identifies the type of Recommendations action to execute. To delete an entity, this value is always `entity.deleteAll`. |
| **client** | (Required) The client code, which is displayed on the Recommendations' Settings page. |
| **clientToken** | (Required) the client token, which is visible on Recommendations' Settings page. |

**Note:** Parameters and values are case sensitive.

**Parent topic:** [Entity Management](../entity_mgmt/r_recs_entity_mgmt.md)


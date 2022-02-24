# data_warehouse_segment_group

A structure (called a Group) that contains rules, and information about combining those rules, for creating a segment definition.

| Name | Type | Description |
|--------|--------|---------------|
| **type** | `xsd:string` | Specifies the segment type. Supported values, which are case-sensitive, include: **ROOT:** The top-level segment group. The top-level segment group must be ROOT. **VISITOR:** Container for Visitor calculations. **VISIT:** Container for Visit calculations. **PAGE:** Container for Page calculations. **EVENT:** Container for Events. |
| **name** | `xsd:string` | The segment group name. The top-level segment group name must be `Include`. Nested segment groups can be named with any descriptive string. The name cannot exceed 255 characters. |
| **group_operator** | `xsd:string` | Boolean operator used to combine groups in the `group_list` parameter. Supported values include: **AND:** Combine groups using a boolean AND. **OR:** Combine groups using a boolean OR. |
| **rule_operator** | `xsd:string` | Boolean operator used to combine rules in the `rule_list` parameter. Supported values include: `AND:` Combine groups using a boolean AND. `OR:` Combine groups using a boolean OR. |
| **rule_list** | [data_warehouse_segment_rule_list](r_data_warehouse_segment_rule_list.md#) | A list of rules contained by the Group object. The following restrictions apply to rule lists in segment groups: The rule list of a ROOT segment group cannot contain any rules.  The rule list of an EVENT segment group can contain exactly one EVENT-style rule.  The EVENT rule list can contain any number of non-EVENT-style rules.|
| **group_list** | [data_warehouse_segment_group_list](r_data_warehouse_segment_group_list.md#) | A list of segment groups contained by this Group. The following restrictions apply when nesting segment groups: A ROOT group is the topmost group object, and cannot have a parent.  An EVENT group cannot have a parent of type EVENT.  A VISIT group cannot have a parent of type PAGE, VISIT, or EVENT.  A VISITOR group cannot have a parent of type PAGE, VISIT, VISITOR, or EVENT.   A PAGE group cannot have a parent of type PAGE, or EVENT. |

**Parent topic:** [Data Types](../data_types/c_data_types.md)


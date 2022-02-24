# data_warehouse_segment_rule

A structure that defines a single segment rule.

| Name | Type | Description |
|--------|--------|---------------|
| **operator** | `xsd:string` | The boolean operator used for this rule. Supported values include the following. You can also leave `operator` blank. |
| **type** | `xsd:string` | Property to use for the rule comparison. For example, `column`. The type cannot exceed 100 characters. |
| **value** | `xsd:string` | Value to use in the rule comparison. The value cannot exceed 255 characters. |
| **event** | xsd:int | The ID of the Event you want to listen for. When creating an Event rule, you must follow the following conventions: When specifying event, all other values (operator, type, and value) must be blank (a string of 0 characters or a NULL value). - When not specifying an event, the event value must be blank (a string of 0 characters or a NULL value). - Event rules must be contained in a rule_list of a segment group of type EVENT. | 

### Operators Values

 **=** (equals)

 **!=** (does not equal)

 **>** (greater than)

 **<** (less than)

 **>=** (greater than or equal)

 **<=** (less than or equal)

 **NOT CONTAINS** (does not contain)

 **CONTAINS ALL OF** (contains all of)

 **NOT CONTAINS ALL OF** (does not contain all)

 **CONTAINS ONE OF** (contains one of)

 **NOT CONTAINS ONE OF** (does not contain any)


### Event Values

|Event ID|Description|
|--------|-----------|
|**1** | PURCHASE |
|**2** | PRODUCT_VIEW |
|**10** | SHOPPING_CART_OPEN |
|**11** | SHOPPING_CART |
|**12** | SHOPPING_CART_ADD |
|**13** | SHOPPING_CART_REMOVE |
|**14** | SHOPPING_CART_VIEW |
|**20** | Instance of Campaign |
|**100** | Instance of eVar1 |
|**101** | Instance of eVar2 |
|**102** | Instance of eVar3 |
|**103** | Instance of eVar4 |
|**104** | Instance of eVar5 |
|**105** | Instance of eVar6 |
|**106** | Instance of eVar7 |
|**107** | Instance of eVar8 |
|**108** | Instance of eVar9 |
|**109** | Instance of eVar10 |
|**110** | Instance of eVar11 |
|**111** | Instance of eVar12 |

**Parent topic:** [Data Types](../data_types/c_data_types.md)


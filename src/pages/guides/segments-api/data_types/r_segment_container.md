# segment\_container

Defines a segment container.

|Element|Type|Description|
|-------|----|-----------|
|`name` |`xsd:string` | \(Optional\) Container name. |
|`type` |`xsd:string` | \(Required\) Container type, one of the following values: "`hits`", "`visits`", "`visitors`" **Sequential Segments** [Sequential Segments](http://microsite.omniture.com/t2/help/en_US/analytics/segment/?f=seg_sequential) place additional restrictions on container type. If the definition has a container that defines a sequential segment \(using the `"then"` operator\), the options for "`type`" are limited to "`visits`" or "`visitors`". Sub-containers within a sequential segment container that also use a "`then`" operator can specify a "`type`" of "`hits`", "`visits`", or "`logicgroup`" |
|`operator` |`xsd:string` | \(Optional\) Specifies the operator used to evaluate the container rules. One of the following: "`and`", "`or`", "`then`". Defaults to "`and`" if not included, or if the container has only one rule. |
|`rules` |[segment\_rule\_array](r_segment_rule_array.md#) - an array of [segment\_rule](r_segment_rule.md#) | \(Required\) Defines the data that is matched by this container. Each container must include at least one rule. |
|`exclude` |`xsd:boolean` | \(Optional\) Exclude rather than include data that matches the segment rule. Defaults to false. |

**Parent topic:** [Data Types](../data_types/datatypes.md)


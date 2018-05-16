# segment\_definition

Specifies the top level container for a segment.

Every definition must have a top level "container". Every container has an array of "rules". A rule is either a base rule, or it has a container \(both is not allowed\). Thus infinite nesting is allowed, though Adobe recommends stacking \(including multiple segments\) to increase reusability. For example, instead of defining "mobile users in the US", you could define two segments: one for mobile users, and one for users in the US. By combining these segments, you can reuse these segments in other reports.

To understand how segment complexity impact report generation time, see [Reporting Best Practices](https://marketing.adobe.com/developer/en_US/get-started/best-practices).

|Element|Type|Description|
|-------|----|-----------|
|`container` |[segment\_container](r_segment_container.md#) | The top level container for a segment. |

**Parent topic:** [Data Types](../data_types/datatypes.md)


# reportDefinitionSegmentCondition

A structure that defines how to evaluate potential report data against the segment included in the report definition.

|Name|Type|Description|
|----|----|-----------|
|**operator** |[comparisonOperatorType](r_comparison_operator_type.md#) |Indicates if data must meet all conditions \(boolean `AND`\) or just one of the conditions \(boolean `OR`\).|
|i**nvert** |`xsd:boolean` |Identifies the condition as an include \(`invert = false`\) or exclude \(`invert = true`\) condition.|
|**element** |[reportDefinitionElement](r_reportDefinitionElement.md#) |Identifies a particular data element that you want the condition to test \(for example, visitNumber\).|
|**metric** |`array(xsd:string)` |A list of conditions that restrict the data included in the segment.|

**Parent topic:** [Data Types](../data_types/c_data_types.md)


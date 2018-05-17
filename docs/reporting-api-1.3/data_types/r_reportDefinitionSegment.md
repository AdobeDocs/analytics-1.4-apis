# reportDefinitionSegment

A structure that defines a data segment to use in the report definition.

|Element|Type|Description|
|-------|----|-----------|
|**type** |[reportDefinitionSegmentType](r_reportDefinitionSegmentType.md#) |Specifies the type of segment.|
|**invert** |`xsd:boolean` |Identifies the segment as an include \(invert = false\) or exclude \(invert = true\) segment.|
|**operator** |[booleanOperatorType](r_boolean_operator_type.md#) |Specifies how to integrate the include and an exclude segments.|
|**conditions** |[reportDefinitionSegmentConditions](r_reportDefinitionSegmentConditions.md#) |A list of conditions that restrict the data included in the segment.|
|**segments** |[reportDefinitionSegmentList](r_reportDefinitionSegmentList.md#) |A list of existing segments to use when generating the report.|
|**events** |[reportDefinitionSegmentEventList](r_reportDefinitionSegmentEventList.md#) |A list of one or more events to include in the segment.|

**Parent topic:** [Data Types](../data_types/c_data_types.md)


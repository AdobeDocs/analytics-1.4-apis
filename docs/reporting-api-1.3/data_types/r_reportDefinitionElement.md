# reportDefinitionElement

A structure data type that identifies one element used in a report.

|Name|Type|Description|
|----|----|-----------|
|**id** |`xsd:string` |Specifies the name of the element to apply to the metrics report.|
|**classification** |`xsd:string` |\(Optional\) Restricts the element results to only those that fall in the specified classification. For example you could set `id = "trackingCode"` and `classification = "Campaigns"` to get a report of all tracking codes for the Campaigns classification.|
|**top** |`xsd:int` | \(Optional\) Specifies the number of rows in the report to return. Use with startingWith to generate paged reports. For example, `top=5` returns five rows. **Note:** When using top in conjunction with [GetRealTimeReport](../methods/r_GetRealTimeReport.md#), top must be set to 50 or lower. |
|**startingWith** |`xsd:int` | \(Optional\) Specifies the first row in the report to return. Use with top to generate paged reports. For example, `startingWith=20` returns report rows starting at row 20. |
|**search** |[reportDefinitionSearch](r_reportDefinitionSearch.md#) |\(Optional\) Applies a search to the element.|
|**selected** |`array(xsd:string)` |\(Optional\) Defines a specific list of items to request instead of using search, top, and startingWith to set the element parameters.|

**Notes:** 

-   Ranked reports support multiple elements per report.
-   Trended reports support only one element per report.
-   Overtime reports by definition support only the date element, so you cannot specify an element for an Overtime report. See [Analytics Elements](../reference/r_elements.md#) for a list of supported elements.

**Parent topic:** [Data Types](../data_types/c_data_types.md)


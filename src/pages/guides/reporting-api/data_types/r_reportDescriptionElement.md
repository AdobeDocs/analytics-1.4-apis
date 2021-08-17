# reportDescriptionElement

A structure data type that identifies one element used in a report.

|Name|Type|Description|
|----|----|-----------|
| **id** | `xsd:string` |Specifies the name of the element to apply to the metrics report.|
| **classification** | `xsd:string` |\(Optional\) Restricts the element results to only those that fall in the specified classification. For example you could set `id = "trackingCode"` and `classification = "Campaigns"` to get a report of all tracking codes for the Campaigns classification.|
| **top** | `xsd:int` | \(Optional\) Specifies the number of rows in the report to return. Use with startingWith to generate paged reports. For example, `top=5` returns five rows. The maximum number of top elements that can be requested is 50,000. Setting the "top" parameter to a number greater than 50000 will result in an `element_top_invalid` error. |
| **startingWith** | `xsd:int` | \(Optional\) Specifies the first row in the report to return. Use with top to generate paged reports. For example, `startingWith=20` returns report rows starting at row 20. |
| **search** | [reportDescriptionSearch](r_reportDescriptionSearch.md#) |\(Optional\) Applies a search to the element.|
| **selected** | `array(xsd:string)` |\(Optional\) Defines a specific list of items to request instead of using search, top, and startingWith to set the element parameters.|
| **parentID** | `xsd:string` | \(Optional\) Hierarchy report. To specify a specific level to report, add a add a level and parentID parameter. The parentID is returned in report data, making it available to request the next level of the hierarchy. |
| **checkpoints** |`array(xsd:string)` | Generates a pathing report. See [Pathing Reports](../pathing.md#) |
| **pattern** |`xsd:string[][]` | Generate a fallout pathing report. See [Pathing Reports](../pathing.md#) |

**Parent topic:** [Data Types](../data_types/datatypes.md)


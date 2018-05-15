# reportDescriptionSegment

 

A structure that defines an inline segment to use in a [reportDescription](r_reportDescription.md#) .

|Element|Type|Description|
|-------|----|-----------|
| ` id ` | `xsd:string` | Specifies the existing saved segment ID that you want to apply to a search. **Important:** In version 1.4, inline segments no longer use the "id" parameter to specify the element as in 1.3. If migrating code from version 1.3, move the element value that was previously in the "id" parameter to the "element" parameter. |
| ` element ` |`xsd:string`| Specifies the element \(dimension\) on which you want to segment. |
| ` search ` | [reportDescriptionSearch](r_reportDescriptionSearch.md#) | \(Optional, provide either a selected value, or a classification and a search value\). Search is an array that contains two values: **type**: selects the type of search to perform. The following search types are supported: `AND` `OR` `NOT` **keywords**: Array of values for which you want to search. The following special characters are supported in keywords: `^` matches the start of a string. `$` matches the end of a string. |
| ` classification ` | `xsd:string` | \(Optional, provide either a selected value, or a classification and a search value\). Specifies how to integrate the include and an exclude segments. |

## Unsupported Elements

The following elements are not supported for inline segments.

-   pagedepth
-   visitnumber
-   mobilecarrier
-   hier
-   paths
-   fallout

**Parent topic:** [Data Types](../data_types/datatypes.md)


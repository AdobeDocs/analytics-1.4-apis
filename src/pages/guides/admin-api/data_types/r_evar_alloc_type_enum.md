# allocation\_type\_enum

An enumerated list of supported eVar allocation values.

The enumerated type includes the following elements of type `xsd:string`.

|Name|Description|
|----|-----------|
|**most\_recent\_last** | Allocate the success event to the most recently touched eVar. |
|**original\_value\_first** | Allocate the success event to the first-touched eVar. |
|**linear** | Allocate the success event across all participating eVars. |
|**linear\_to\_items** | Allocates the success event across all participating eVars, up to the specified eVar. |
|**merchandising\_last** | Allocate the success event using the specified merchandising allocation. |
|**merchandising\_first** | Allocate the success event using the specified merchandising allocation. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


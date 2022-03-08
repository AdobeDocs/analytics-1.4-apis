# allocation_type_enum

An enumerated list of supported eVar allocation values.

The enumerated type includes the following elements of type `string`.

|Name|Description|
|----|-----------|
|**most_recent_last** | Allocate the success event to the most recently touched eVar. |
|**original_value_first** | Allocate the success event to the first-touched eVar. |
|**linear** | Allocate the success event across all participating eVars. |
|**linear_to_items** | Allocates the success event across all participating eVars, up to the specified eVar. |
|**merchandising_last** | Allocate the success event using the specified merchandising allocation. |
|**merchandising_first** | Allocate the success event using the specified merchandising allocation. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


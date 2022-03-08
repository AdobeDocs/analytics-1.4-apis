# GetFilters

Gets classification export filters.

## Classifications.GetFilters Parameters

The returned data consists of values that can be passed in as parameters of [CreateExport](r_CreateExport.md#), including column numbers and names, and valid dates for filtering data rows in a classifications export.

|Parameter|Type|Description|
|---------|----|-----------|
| **rsid_list** | `array[string]` | A list of report suites that contains the specified data source. |
| **element** | `string` | The element for which you want to get file information. |

## Classifications.GetFilters Response

|Type|Description|
|----|-----------|
| [classifications_filters](../data_types/r_classifications_filters.md#) | Information about valid filters for the specified data segment. |

**Parent topic:** [Methods](../methods/classifications_methods.md)


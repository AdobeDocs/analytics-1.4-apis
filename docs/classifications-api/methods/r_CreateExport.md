# CreateExport

Creates a classifications export job.

## Classifications.CreateExport Parameters

This file represents classifications for a given relation. Before calling this API, use [GetFilters](r_GetFilters.md#) to obtain valid column numbers and names, and filter dates.

After creating an export job, use [GetStatus](r_GetStatus.md#) to determine when the export data is ready for download. When ready, use [GetExport](r_GetExport.md#) to retrieve the data.

|Parameter|Type|Description|
|---------|----|-----------|
| **campaign\_filter\_start\_date** | `xsd:string` | The campaign start date. Accepts any date string parseable by `php:date()`. Accepts the keywords `::all::` and `::active::` to filter by all campaigns, or by only active ones. This filter is off by default. |
| **campaign\_filter\_end\_date** | `xsd:string` | The campaign end date. Accepts any date string parseable by `php:date()`. |
| **date\_filter\_start\_date** | `xsd:string` | Accepts any date string parseable by `php:date()`.|
| **date\_filter\_end\_date** | `xsd:string` | Accepts any date string parseable by `php:date()`. |
| **email\_address** | `xsd:string` | The email address to receive job notifications. |
| **encoding** | `xsd:string` | The language encoding to use with the export file. For example, UTF-8. |
| **element** | `xsd:string` | You get this ID as a return value from [GetCompatibilityElements](r_GetCompatibilityElements.md#). |
| **rsid\_list** | `array(xsd:string)` | \(Optional\) The list of report suites on which classifications exports data. |
| **row\_filter\_column\_name** | `xsd:string` | This field accepts the column name except when the `row_filter_column_value` is set to `::none::`. |
| **row\_filter\_column\_value** | `xsd:string` | This field is always required if `row_filter_column_name` is included. |
| **row\_filter\_empty\_column** |`xsd:string` | Can be set to: `::all::` - Returns rows that have all columns empty. `::any::` - Returns rows that have 1 or more empty column. Any column name - Returns rows where the given column is empty. |
|**all\_rows** |`xsd:string` | Set to `true` to have all matching rows returned. |
| **row\_count** | `xsd:int` | \(Optional\) Limits the number of data rows in the export file to the specified value. The default is 1000. |
| **quote\_output** | `xsd:boolean` | Whether to quote the output.  In some cases, turning this on helps with duplicate keys containing whitespace. |

## Classifications.CreateExport Response

|Type|Description|
|----|-----------|
| `xsd:int` | The Job ID associated with your export request. |

**Parent topic:** [Methods](../methods/classifications_methods.md)


# GetExport

Retrieves a page of data, known as a file segment, from a completed classifications job.

## Classifications.GetExport Parameters

|Parameter|Type|Description|
|---------|----|-----------|
| **file_id** | `xsd:int` | The ID of the export file you want to view. You can get this value from [GetStatus](r_GetStatus.md#). |
| **page** | `xsd:int` | The number of the data page you want to view from the export job. Default is 1. The `viewable_pages` value in [GetStatus](r_GetStatus.md#) indicates the number of data pages in the job. Valid values for `page` are between 1 and the value of `viewable_pages`. |

## Classifications.GetExport Response

|Type|Description|
|----|-----------|
| [tns:pagedetails](../data_types/r_pagedetails.md#) | Information and data for the specified data segment.|

**Parent topic:** [Methods](../methods/classifications_methods.md)


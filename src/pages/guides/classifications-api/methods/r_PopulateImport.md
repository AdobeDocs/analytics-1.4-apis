# PopulateImport

Appends row data to a previously created classifications import job.

## Classifications.PopulateImport Parameters

You can separate data into pages, but the pages must be sent sequentially (either ascending or descending) to avoid errors when the job processes.

**Note:** Individual classifications jobs cannot exceed 25,000 rows.

|Parameter|Type|Description|
|---------|----|-----------|
|**job_id** |`int` | The import job ID where you want to append the row data. |
|**page** |`int` | A page number that identifies the page's sequential position in the import job. For example, if you submit a spreadsheet with 1000 values, divided into 4 pages, page 1 includes values 1 - 250, page 2 includes values 251 - 500, and so on. |
|**rows** |[rows](../data_types/r_rows.md#) | An array of row data that matches the column heading order of the specified import job. |

## Classifications.PopulateImport Response

|Type|Description|
|----|-----------|
|`boolean` | Indicates if the job processed successfully. |

**Parent topic:** [Methods](../methods/classifications_methods.md)


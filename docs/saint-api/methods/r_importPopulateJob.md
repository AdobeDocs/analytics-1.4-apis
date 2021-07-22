# ImportPopulateJob

Appends row data to a previously created SAINT Import Job.

## Saint.ImportPopulateJob Parameters

You can separate data into pages, but the pages must be sent sequentially \(either ascending or descending\) to avoid errors when SAINT processes the job.

When importing hundreds or more rows of data, the recommendation is to maximize the number of rows in each job to achieve maximum throughput.

**Note:** Individual SAINT jobs cannot exceed 25,000 rows.

|Parameter|Type|Description|
|---------|----|-----------|
|**job\_id** |`xsd:int` | The SAINT import job ID where you want to append the row data. |
|**page** |`xsd:int` | A page number that identifies the page's sequential position in the SAINT import job. For example, if you submit a spreadsheet with 1000 values, divided into 4 pages, page 1 includes values 1 - 250, page 2 includes values 251 - 500, and so on. |
|**rows** |[rows](../data_types/r_rows.md#) | An array of row data that matches the column heading order of the specified SAINT import job. |

## Saint.ImportPopulateJob Response

|Type|Description|
|----|-----------|
|`xsd:string` | Indicates if the job processed successfully. Supported values include `Success` or `Failed`. |

For more information, see [ImportPopulateJob Request](../sample_code/r_ImportPopulateJob_sample.md#).

**Parent topic:** [Methods](../methods/c_saint_methods.md)


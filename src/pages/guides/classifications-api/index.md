# 1.4 Classifications API

Analytics classifications lets you bulk-import additional data attributes, or dimensions, to Adobe Analytics. By augmenting the data elements collected by Analytics with these attributes, users can create deeper and more complex reports.

## Classifications.CommitImport

Submits a classifications import file for processing.

`POST https://api.omniture.com/admin/1.4/rest/?method=Classifications.CommitImport`

|Parameter|Type|Description|
|---------|----|-----------|
|**`job_id`** |`int` | The job ID to commit for processing.|

|Response|Description|
|----|-----------|
|`boolean` | Indicates if the job processed successfully. |

## Classifications.CreateExport

Creates a classifications export job.

`POST https://api.omniture.com/admin/1.4/rest/?method=Classifications.CreateExport`

This file represents classifications for a given relation. Before calling this API, use `Classifications.GetFilters` to obtain valid column numbers, names, and filter dates.

After creating an export job, use `Classifications.GetStatus` to determine when the export data is ready for download. When ready, use `Classifications.GetExport` to retrieve the data.

|Parameter|Type|Description|
|---------|----|-----------|
| **`campaign_filter_start_date`** | `string` | The campaign start date. Accepts any date string parseable by `php:date()`. Accepts the keywords `::all::` and `::active::` to filter by all campaigns, or by only active ones. This filter is off by default. |
| **`campaign_filter_end_date`** | `string` | The campaign end date. Accepts any date string parseable by `php:date()`. |
| **`date_filter_start_date`** | `string` | Accepts any date string parseable by `php:date()`.|
| **`date_filter_end_date`** | `string` | Accepts any date string parseable by `php:date()`. |
| **`email_address`** | `string` | The email address to receive job notifications. |
| **`encoding`** | `string` | The language encoding to use with the export file. For example, UTF-8. |
| **`element`** | `string` | You get this ID as a return value from `Classifications.GetCompatibilityElements`. |
| **`rsid_list`** | `string[]` | (Optional) The list of report suites on which classifications exports data. |
| **`row_filter_column_name`** | `string` | This field accepts the column name except when the `row_filter_column_value` is set to `::none::`. |
| **`row_filter_column_value`** | `string` | This field is always required if `row_filter_column_name` is included. |
| **`row_filter_empty_column`** |`string` | Can be set to: `::all::` - Returns rows that have all columns empty. `::any::` - Returns rows that have 1 or more empty column. Any column name - Returns rows where the given column is empty. |
|**`all_rows`** |`string` | Set to `true` to have all matching rows returned. |
| **`row_count`** | `int` | (Optional) Limits the number of data rows in the export file to the specified value. The default is 1000. |
| **`quote_output`** | `boolean` | Whether to quote the output.  In some cases, turning this on helps with duplicate keys containing whitespace. |

|Response Type |Description|
|----|-----------|
| `int` | The Job ID associated with your export request. |

## Classifications.CreateFTP

Creates a classifications Import FTP account.

`POST https://api.omniture.com/admin/1.4/rest/?method=Classifications.CreateFTP`

|Parameter|Type|Description|
|----|----|-----------|
| **`element`** | `int` |  `relation_id` that you want to import or export (e.g. 101=evar1, 51=product, etc) |
| **`rsid_list`** | `string[]` | report suites to which data is imported. |
| **`description`** | `string` | a textual description for the FTP account. |
| **`email_address`** | `string` | the email account to notify when imports are finished. |
| **`overwrite`** | `boolean` | if `true`, keys that already exists will always be overwritten by new keys. |
| **`export`** | `boolean` | if `true`, the import will be automatically exported after import. |

| Response Type | Description |
|--------|---------------|
| `classifications_ftp_info` | Contains connection details for the created FTP account. |

## Classifications.CreateImport

Creates a classifications import job.

`POST https://api.omniture.com/admin/1.4/rest/?method=Classifications.CreateImport`

To successfully submit a classifications Import, call `Classifications.CreateImport` to specify the parameters for the Import job and the header columns to be classified.

After submitting the job, you can iteratively populate row data by calling `Classifications.PopulateImport`.

After sending all data, call `Classifications.CommitImport` to finalize the Import job and submit it to the processing queue.

|Parameter|Type|Description|
|---------|----|-----------|
| **`rsid_list`** | `string[]` | The list of report suites to receive the import job. |
| **`element`** | `string` |The report for which you want to perform a classifications import.|
| **`check_divisions`** | `int` | Specifies whether to check report suites for compatible divisions. Supported values include: `0`: Do not check report suite compatibility. `1`: (Default) Check report suite compatibility. |
| **`description`** | `string` | A description of the import job. |
| **`email_address`** | `string` | The email address to receive job notifications. |
| **`export_results`** | `int` | Specifies whether to automatically perform an export when the import job finishes processing. Supported values include: `0`: (Default) Do not export. `1`: Export when the job completes. |
| **`header`** | `string[]` | An array of column values for classification. First column is required to be the `key`.|
| **`overwrite_conflicts`** | `int` | Specifies whether to overwrite data when conflicts occur. Supported values include: `0`: (Default) Do not overwrite data on a conflict. `1`: Overwrite data on a conflict. |

|Response|Type|Description|
|----|----|-----------|
| **`classifications_create_job_response`** | `int` | A unique job ID that identifies this classifications import job. If the job import is unsuccessful, an error code is returned instead of a job ID. |

## Classifications.GetCompatibilityElements

Returns the available `elements` for a given report suite, and compatibility across report suites.

`POST https://api.omniture.com/admin/1.4/rest/?method=Classifications.GetCompatibilityElements`

|Parameter|Type|Description|
|---------|----|-----------|
| **`rsid_list`** | `string[]` | A list of report suites where you want to get valid element values. |

|Response Type|Description|
|----|-----------|
| `classifications_report_suite_compatibility_elements[]` |Compatible elements.|

## Classifications.GetExport

Retrieves a page of data, known as a file segment, from a completed classifications job.

`POST https://api.omniture.com/admin/1.4/rest/?method=Classifications.GetExport`

|Parameter|Type|Description|
|---------|----|-----------|
| **`file_id`** | `int` | The ID of the export file you want to view. You can get this value from `Classifications.GetStatus`. |
| **`page`** | `int` | The number of the data page you want to view from the export job. Default is 1. The `viewable_pages` value in `Classifications.GetStatus` indicates the number of data pages in the job. Valid values for `page` are between 1 and the value of `viewable_pages`. |

|Response Type|Description|
|----|-----------|
| `pagedetails` | Information and data for the specified data segment.|

## Classifications.GetFilters

Gets classification export filters.

`POST https://api.omniture.com/admin/1.4/rest/?method=Classifications.GetFilters`

The returned data consists of values that can be passed in as parameters of `Classifications.CreateExport`, including column numbers and names, and valid dates for filtering data rows in a classifications export.

|Parameter|Type|Description|
|---------|----|-----------|
| **`rsid_list`** | `string[]` | A list of report suites that contains the specified data source. |
| **`element`** | `string` | The element for which you want to get file information. |

|Response Type|Description|
|----|-----------|
| `classifications_filters` | Information about valid filters for the specified data segment. |

## Classifications.GetFTP

Returns a list of the classifications FTP accounts that are configured for a company. Does not require a JSON request body.

`POST https://api.omniture.com/admin/1.4/rest/?method=Classifications.GetFTP`

|Response|Type|Description|
|----|----|-----------|
|**rsid_list** |`string[]` | report suites for which you want to retrieve FTP information. |

| Response Type | Description |
|--------|---------------|
| `classifications_report_suite_ftp[]` | Struct containing details with the FTP accounts for a report suite. |

## Classifications.GetStatus

Returns the status of the specified classification request.

`POST https://api.omniture.com/admin/1.4/rest/?method=Classifications.GetStatus`

|Parameter|Type|Description|
|---------|----|-----------|
| **`job_id`** | `int` | The classifications job ID. |

|Response Type|Description|
|----|-----------|
| `classifications_job_status[]` | The status of the specified classifications job. Possible values include:<br/>`Waiting for user data`<br/>`In progress`<br/>`In progress - % Complete`<br/>`Completed`<br/>`Completed - With Errors : <message>`|

## Classifications.GetTemplate

Similar to the Template tab in the Classifications tool in the Admin Console UI, this retrieves a template to use for importing classifications data.

`POST https://api.omniture.com/admin/1.4/rest/?method=Classifications.GetTemplate`

|Parameter|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string` | The report suite where you want to import data. |
| **`element`** | `string` |  `relation_id` for which you want to get a template (e.g. 101=evar1, 51=product, etc) |
| **`classification_names`** | `string[]` | (Optional) an array of text classification names to include as columns in the template. |
| **`encoding`** | `string` | The encoding to use for the template |

| Response Type | Description |
|--------|---------------|
| `classifications_report_suite_template[]` | The template, or headers in the classifications export file |

## Classifications.PopulateImport

Appends row data to a previously created classifications import job. You can separate data into pages, but the pages must be sent sequentially (either ascending or descending) to avoid errors when the job processes. Individual classifications jobs cannot exceed 25,000 rows.

`POST https://api.omniture.com/admin/1.4/rest/?method=Classifications.PopulateImport`

|Parameter|Type|Description|
|---------|----|-----------|
|**`job_id`** |`int` | The import job ID where you want to append the row data. |
|**`page`** | `int` | A page number that identifies the page's sequential position in the import job. For example, if you submit a spreadsheet with 1000 values, divided into 4 pages, page 1 includes values 1 - 250, page 2 includes values 251 - 500, and so on. |
|**`rows`** |`rows` | An array of row data that matches the column heading order of the specified import job. |

|Response Type|Description|
|----|-----------|
|`boolean` | Indicates if the job processed successfully. |

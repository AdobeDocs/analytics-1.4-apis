#  **DataSources.UploadData** 

Uploads data to a data source.

##  **Request** 

 

```
{
	"columns":[
		"(string)"
	],
	"dataSourceID":(int),
	"finished":(boolean),
	"jobName":"(string)",
	"reportSuiteID":"(string)",
	"rows":[
		[
			"(string)"
		]
	]
}
```
|Parameter|Description|
|-----|----------|
| `"columns"`  | Must match valid events and evars that the report suite has enabled. It also requires a date. The format for the columns is `"Date"`, `"Evar X"`, `"Event X"`. |
| `"dataSourceId"`  | The ID of the data source (ftp) accepting the request. To determine this value, use <a href="https://github.com/AdobeDocs/analytics-1.4-apis/blob/master/docs/data-sources-api/methods/r_getDataSources.md">DataSources.Get</a> Method |
| `"jobName"`  | This value must be the same for different parts of the same job. Note: `jobName` cannot include slashes (`/`) or special characters. Invalid job names may return a Bad Request response with the error description: "invalid columns, at least one is required and columns must match for each upload" |
| `"finished"`  | This value tells the processing server to process the data instead of waiting for additional parts of the job. It should be left out unless the last part is being uploaded. If the job is just one upload, then it must be included for the data to be processed. |
| `"rows"` | This value is an array of arrays of strings. The number of strings in each array must match the number of columns. The number of rows of data per upload should not exceed 10,000 rows but should come as close as possible. If an upload has fewer than 10,000 rows, upload it in one job with the "finished" flag set to "true." If a job has more than 10,000 rows, the rows should be uploaded in as few uploads as possible. For example, a job with 25,000 rows of data to upload should call `DataSources.UploadData` only three times, with the third call including the "finished" flag as true. The maximum number of uploads to a job is 100. If `DataSources.UploadData` is called more than 100 times for the same job, the call will fail. The call will also fail on the 100th call unless the "finished" flag is included and set to "true." The maximum allowed job size including all uploads is 50 MB of data. `DataSources.UploadData` may succeed when the combined size of all the uploads has exceeded this limit, but the job will not be able to be processed once the upload is finished. The date should be in the format `m/d/yyyy` |
| `"reportSuiteID"` | The id of report suite the event names, evar names correspond to. |

## Response

Boolean, true on success, otherwise false (one case is if Data Sources is internally not able to write on FTP it will return false ).

**Parent topic:** [Methods](../methods/c_data_sources_methods_1.4.md)


#  **DataSources.GetJobs** 

Returns all current jobs for a data source.

##  **Request** 

```
{
	"dataSourceID":"(int)",
	"reportSuiteID":"(string)"
}
```

## Response

Array of jobs, with the following structure:

```
{
	"id":"(int)",
	"fileName":"(string)",
	"startDate":"(date)",
	"finishDate":"(date)",
	"size":"(int)",
	"rows":"(int)",
	"errors":[
		"(string)"
	],
	"warnings":[
		"(string")
	],
	"receivedDate":"(date)",
	"status":"(string)"
}
```

**Parent topic:** [Methods](../methods/c_data_sources_methods_1.4.md)


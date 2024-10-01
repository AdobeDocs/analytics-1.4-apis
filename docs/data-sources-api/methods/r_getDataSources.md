#  **DataSources.Get** 

Returns a list of Data Sources for a report suite.

##  **Request** 

```
{
	"reportSuiteID":"(string)"
}
```

## Response

Array of data sources, with the following structure:

```
{
		"id":"(int)",
		"processing_type":"(string)", // generic, web, traffic
		"name":"(string)",
		"email":"(string)",
		"activatedDate":"(date)",
		"ftp":{
			"path":"(string)",
			"loginID":"(string)",
			"password":"(string)"
		},
		"haltOnWarning":(boolean),
		"haltOnError":(boolean),
		"lockedByError":(boolean)
	}
```
A complete list of supported dimensions and metrics are included in the [Data Sources 1.4 API file format guide](https://experienceleague.adobe.com/en/docs/analytics/import/data-sources/file-format).


**Parent topic:** [Methods](../methods/c_data_sources_methods_1.4.md)


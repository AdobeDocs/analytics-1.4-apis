# AddCorrelations

Adds a correlation to each of the specified report suites.

## ReportSuite.AddCorrelations

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` |A list of report suite IDs.|
|**rel\_ids** |`array(xsd:int)` |A list of metric IDs to include in the correlation.|
|**size** |[tns:correlation\_size\_enum](../../data_types/r_correlation_size_enum.md#) | The size of the correlation. Currently, only 2-item correlations \(size `2`\) are available through the Administration API. |

## ReportSuite.AddCorrelations response

|Type|Description|
|----|-----------|
|`xsd:int` |Returns `1` if the operation is successful. Otherwise, returns `0`.|

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


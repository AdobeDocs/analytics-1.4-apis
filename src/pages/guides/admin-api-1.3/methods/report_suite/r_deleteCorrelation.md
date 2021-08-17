# DeleteCorrelations

Deletes a correlation from each of the specified report suites.

## ReportSuite.DeleteCorrelations

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` |A list of report suite IDs.|
|**rel\_ids** |`array(xsd:int)` |A list of metric IDs to include in the correlation.|
|**size** |[tns:correlation\_size\_enum](../../data_types/r_correlation_size_enum.md#) | The size of the correlation. Currently, only 2-item correlations \(size `2`\) are available through the Administration API. |

## ReportSuite.DeleteCorrelations response

|Type|Description|
|----|-----------|
|`xsd:int` |Returns `1` if the operation is successful. Otherwise, returns `0`.|

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


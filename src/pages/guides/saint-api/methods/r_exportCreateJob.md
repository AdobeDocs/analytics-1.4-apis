# ExportCreateJob

Creates a SAINT export job.

## Saint.ExportCreateJob Parameters

This file represents classifications for a given relation. Before calling this API, use [SAINT.GetFilters](r_getFilters.md#) to obtain valid column numbers and names, and filter dates.

After creating an export job, use [CheckJobStatus](r_checkJobStatus.md#) to determine when the export data is ready for download.

**Note:** Export data files can be very large. Use [ExportGetFileSegment](r_exportGetFileSegment.md#) to download the file in pieces \(segments\).

|Parameter|Type|Description|
|---------|----|-----------|
|**campaign\_filter\_begin\_range** |`xsd:string` | The campaign start date. Include this parameter when `campaign_filter_option = 2`. Specify the date range using the following format:`<start_date>-<end_date>`. Provide the date in the following format: `YYYMMDD`, where: `YYY + 1900` equals the year \(For example, 2008 is `108`\). `MM` equals the month number minus 1 \(January = 00, February = 01, and so on\). `DD` equals the 2 digit day. For example, May 22, 2008 is `1080422`. |**campaign\_filter\_end\_range** |`xsd:string` | The campaign end date. Include this parameter when `campaign_filter_option = 2`. Use the same date range format described for the `campaign_filter_begin_range` parameter. |
|**campaign\_filter\_option** |`xsd:int` | The filter option to use for the SAINT export. Supported values include: `0` : Return all Campaigns \(No filter\)  `1` : \(Default\) Return active campaigns `2` : Return campaigns with the specified begin and end date. |
|**date\_filter\_row\_start\_date** |`xsd:string` | The start date for including rows in the export. Include this parameter when `campaign_filter_option = 1`. Specify the date using the following format: `Mmm YYYY`, where: `Mmm`: A three-character month code. For example, January=Jan, February=Feb, and so on. `YYYY`: The 4-digit year. For example, September, 2008 is `Sep 2008`. |
|**date\_filter\_row\_end\_date** |`xsd:string` | The end date for including rows in the export. Include this parameter when `campaign_filter_option = 1`. Use the same date range format described for the `date_filter_row_start_date` parameter. |
|**email\_address** |`xsd:string` | The email address to receive job notifications. |
|**encoding** |`xsd:string` | The language encoding to use with the export file. For example, UTF-8. |
|**relation\_id** |`xsd:int` | The relation ID. You get this ID as a return value from [GetCompatibilityMetrics](r_GetCompatibilityMetrics.md#). For example, `53` is the ID for the "campaign" relation. |
|**report\_suite\_array** |`array(xsd:string)` | \(Optional\) The list of report suites on which SAINT exports data. |
|**row\_match\_filter\_empty\_column\_name** |`xsd:string` | \(Optional\) The column ID number of the column that SAINT checks for empty data cells. If this parameter is specified, the export contains only keys which have empty values for the provided column. You get the column ID by calling [GetFilters](r_getFilters.md#) for a specific relation id. |
|**row\_match\_filter\_match\_column\_name** |`xsd:string` | \(Optional\) The column name that SAINT checks for cell values that match the value specified in the `row_match_filter_match_column_value` parameter. |
|**row\_match\_filter\_match\_column\_value** |`xsd:string` | \(Optional\) Include this parameter when using the `row_match_filter_match_column_name` parameter. If the cell value matches the value, SAINT includes it in the export. |
|**select\_all\_rows** |`xsd:int` | \(Optional\) Specifies whether to include all data rows in the export \(up to the 50,000 row limit\). Supported values include: `0`: Do not include all rows in the export. `1`: \(Default\) Include all rows in the export. |
|**select\_number\_of\_rows** |`xsd:int` | \(Optional\) Limits the number of data rows in the export file to the specified value. The default limit is 50,000. Include this parameter when `select_all_rows = 0`. |
|**quote\_output** |`xsd:boolean` | Whether to quote the output.  In some cases, turning this on helps with duplicate keys containing whitespace. |

## Saint.ExportCreateJob Response

|Type|Description|
|----|-----------|
|`xsd:string` | The Job ID associated with your export request. |

For more information, see [ExportCreateJob Request](../sample_code/r_exportCreateJob_sample.md#).

**Parent topic:** [Methods](../methods/c_saint_methods.md)


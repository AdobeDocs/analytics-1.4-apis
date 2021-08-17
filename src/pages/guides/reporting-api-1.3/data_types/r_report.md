# report

A structure data type that returns data associated with a particular report request.

|Element|Type|Description|
|-------|----|-----------|
|**reportSuite** |[reportReportSuite](r_reportReportSuite.md#)  |The report suite used to generate the report.|
|**period** |xsd:string |A string describing the report time period.|
|**elements** |[reportElementList](r_reportElementList.md#) |A list of elements associated with the report.|
|**metrics** |[reportMetricList](r_reportMetricList.md#) |A list of metrics associated with the report.|
|**type** |[reportType](r_reportType.md#) |The report type. This must match the report type used to make the original report request.|
|**data** |[reportDataList](r_reportDataList.md#) |The data that makes up the bulk of the report.|
|**totals** |[reportCountList](r_reportCountList.md#) |A list of metric totals.|

**Note:** Analytics uses the same report format for all reports. However, based on the specific report definition, some parts of the report might not be used.

**Parent topic:** [Data Types](../data_types/c_data_types.md)


# GetStatus

Returns the current status of the specified report without retrieving the report data.

**Note:** Method parameters are required unless noted otherwise.

## Report.GetStatus parameters

|Name|Type|Description|
|----|----|-----------|
|**reportID** |`xsd:int` |The report ID returned as part of the "queue report" request.|

## Report.GetStatus response

|Type|Description|
|----|-----------|
|[report\_status](../data_types/r_report_status.md#) |A structure containing status information for the specified reportID.|

**Parent topic:** [Methods](../methods/c_reporting_methods.md)


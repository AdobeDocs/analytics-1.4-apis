# GetReport

Retrieves the specified report. Use this method to download report data once Analytics has completed processing the report request.

**Note:** Method parameters are required unless noted otherwise.

## Report.GetReport parameters

|Name|Type|Description|
|----|----|-----------|
|**reportID** |`xsd:int` |The report ID returned as part of the "queue report" request.|

## Report.GetReport response

|Type|Description|
|----|-----------|
|[reportResponse](../data_types/r_reportResponse.md#) |A structure containing the report status and report data for the specified reportID.|

**Parent topic:** [Methods](../methods/c_reporting_methods.md)


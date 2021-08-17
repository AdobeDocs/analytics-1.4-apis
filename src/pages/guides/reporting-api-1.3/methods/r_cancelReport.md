# CancelReport

Cancels a previously submitted report request, and removes it from the processing queue.

 **Note:** Method parameters are required unless noted otherwise.

## Report.CancelReport parameters

|Name|Type|Description|
|----|----|-----------|
|**reportID** |`xsd:int` |The report ID returned as part of the "queue report" request.|

## Report.CancelReport response

|Type|Description|
|----|-----------|
|`xsd:int` |Returns 1 if the operation is successful, or 0 if the operation failed.|

**Parent topic:** [Methods](../methods/c_reporting_methods.md)


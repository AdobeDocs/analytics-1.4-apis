# Cancel

Cancels a previously submitted report request, and removes it from the processing queue.

Method parameters are required unless noted otherwise.

## Report.Cancel parameters

|Name|Type|Description|
|----|----|-----------|
| **reportID** | `xsd:int` | Report ID returned by [Report.Queue](r_Queue.md#). |

## Report.Cancel response

|Type|Description|
|----|-----------|
| `xsd:boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Methods](../methods/methods.md)


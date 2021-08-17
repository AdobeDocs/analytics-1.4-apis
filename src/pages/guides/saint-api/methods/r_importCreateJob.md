# ImportCreateJob

Creates a SAINT Import Job.

## Saint.ImportCreateJob Parameters

To successfully submit a SAINT Import, call Saint.ImportCreateJob to specify the parameters for the Import job and the header columns to be classified.

After submitting the job, you can iteratively populate row data by calling [ImportPopulateJob](r_importPopulateJob.md#).

After sending all data, call [ImportCommitJob](r_importCommitJob.md#) to finalize the Import job and submit it to the SAINT processing queue.

|Parameter|Type|Description|
|---------|----|-----------|
|**c\_view** |`xsd:string` |The report for which you want to perform a SAINT import.|
|**check\_divisions** |`xsd:int` | Specifies whether to check report suites for compatible divisions. Supported values include: `0`: Do not check report suite compatibility. `1`: \(Default\) Check report suite compatibility. |
|**description** |`xsd:string` | A description of the import job. |
|**email\_address** |`xsd:string` | The email address to receive job notifications. |
|**export\_results** |`xsd:int` | Specifies whether to automatically perform an export when the import job finishes processing. Supported values include: `0`: \(Default\) Do not export. `1`: Export when the job completes. |
|**header** |`array(xsd:string)` | An array of column values for classification. |
|**overwrite\_conflicts** |`xsd:int` | Specifies whether to overwrite data when conflicts occur. Supported values include: `0`: \(Default\) Do not overwrite data on a conflict. `1`: Overwrite data on a conflict. |
|**relation\_id** |`xsd:int` | \(deprecated\) |
|**report\_suite\_array** |`array(xsd:string)` | \(Optional\) The list of report suites to receive the import job. |

## Saint.ImportCreateJob Response

|Type|Description|
|----|-----------|
|`xsd:int` | A unique job ID that identifies this SAINT import job. If the job import is unsuccessful, SAINT returns an error instead of a job ID. |

For more information, see [ImportCreateJob Request](../sample_code/r_ImportCreateJob_sample.md#).

**Parent topic:** [Methods](../methods/c_saint_methods.md)


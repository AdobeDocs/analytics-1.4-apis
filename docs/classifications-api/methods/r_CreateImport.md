# CreateImport

Creates a classifications import job.

## Classifications.CreateImport Parameters

To successfully submit a classifications Import, call Classifications.CreateImport to specify the parameters for the Import job and the header columns to be classified.

After submitting the job, you can iteratively populate row data by calling [PopulateImport](r_PopulateImport.md#).

After sending all data, call [CommitImport](r_CommitImport.md#) to finalize the Import job and submit it to the processing queue.

|Parameter|Type|Description|
|---------|----|-----------|
| **rsid\_list** | `array(xsd:string)` | The list of report suites to receive the import job. |
| **element** | `xsd:string` |The report for which you want to perform a classifications import.|
| **check\_divisions** | `xsd:int` | Specifies whether to check report suites for compatible divisions. Supported values include: `0`: Do not check report suite compatibility. `1`: \(Default\) Check report suite compatibility. |
| **description** | `xsd:string` | A description of the import job. |
| **email\_address** | `xsd:string` | The email address to receive job notifications. |
| **export\_results** | `xsd:int` | Specifies whether to automatically perform an export when the import job finishes processing. Supported values include: `0`: \(Default\) Do not export. `1`: Export when the job completes. |
| **header** | `array(xsd:string)` | An array of column values for classification. First column is required to be the key.|
| **overwrite\_conflicts** | `xsd:int` | Specifies whether to overwrite data when conflicts occur. Supported values include: `0`: \(Default\) Do not overwrite data on a conflict. `1`: Overwrite data on a conflict. |

## Classifications.CreateImport Response

|Name|Type|Description|
|----|----|-----------|
| **classifications\_create\_job\_response** | `xsd:int` | A unique job ID that identifies this classifications import job. If the job import is unsuccessful, an error code is returned instead of a job ID. |

**Parent topic:** [Methods](../methods/classifications_methods.md)


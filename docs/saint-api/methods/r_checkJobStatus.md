# CheckJobStatus

Returns the status of the specified SAINT job, and all associated files.

## Saint.CheckJobStatus Parameters

|Parameter|Type|Description|
|---------|----|-----------|
|**job\_id** |`xsd:int` | The SAINT job ID. |

## Saint.CheckJobStatus Response

|Type|Description|
|----|-----------|
|[tns:saintresults](../data_types/r_saintresults.md#) | The status of the specified SAINT job. Possible values are as follows: |
-   Waiting for user data
-   In Progress
-   In Progress - <number\>% Complete
-   Completed
-   Completed - With Errors : <message\>

For more information, see [CheckJobStatus Request](../sample_code/r_checkJobStatus_sample.md#).

**Parent topic:** [Methods](../methods/c_saint_methods.md)


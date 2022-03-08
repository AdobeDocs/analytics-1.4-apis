# GetStatus

Returns the status of the specified classification request.

## Classifications.GetStatus Parameters

|Parameter|Type|Description|
|---------|----|-----------|
| **job_id** | `int` | The classifications job ID. |

## Classifications.GetStatus Response

|Type|Description|
|----|-----------|
| [classifications_job_status_array](../data_types/r_classifications_job_status_array.md#) - An array of [classifications_job_status](../data_types/r_classifications_job_status.md#).| The status of the specified classifications job. |

Possible values are as follows:

- Waiting for user data
- In Progress
- In Progress - % Complete
- Completed
- Completed - With Errors : <message>

**Parent topic:** [Methods](../methods/classifications_methods.md)


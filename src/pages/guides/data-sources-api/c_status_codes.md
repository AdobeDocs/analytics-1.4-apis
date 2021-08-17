# Status Codes

These codes indicate the current status of a Data Sources import.

Use [GetFileStatus](methods/r_getFileStatus.md#) to retrieve the status.

|Status|Description|
|------|-----------|
|In queue \(step 1 of 3\)|Processing.|
|Preparing \(step 2 of 3\)|Processing|
|Processing \(step 3 of 3\)|Processing|
|Success|Completed.|
|Failed|Import failed. Check the error and warning lists for more details.|
|File removed|Returned when the file is deleted from the FTP account after it is uploaded, but before it is processed.|

**Parent topic:** [Reference](r_Data_Sources_API_Reference.md)


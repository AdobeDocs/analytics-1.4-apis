# Step 6: Commit an Import Job

 

After you populate the import job, you commit it to the processing queue using the `Saint.ImportCommitJob()` method.

This method requires one argument: the job ID, which is the response to the API method call of `Saint.ImportCreateJob()` explained earlier.

The commit method returns the status of the file: `queued`, `processing`, or `processed`.

**PHP Code** 

```
if ($job_id >= 1) { 
/* Saint.ImportCommitJob */ 
$response = sendRequest('Saint.ImportCommitJob', array('job_id'=>$job_id) ); 
var_dump($response); 
} 
?>
```

**Java Code** 

```
/* Import commit job */ 
String responseImportCommitJob =port.saintImportCommitJob(importJobID); 
System.out.println("saintImportCommitJob retuned a : "+responseImportCommitJob);
```

**Parent topic:** [SAINT API Tutorial](c_SAINT_API_Overview.md)


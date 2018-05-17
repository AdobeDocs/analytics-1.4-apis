# Bulk Profile Update

The Bulk Profile Update API lets you batch profile update requests.

## Using Bulk Profile Update

1.  Create a batch file like the following example:

    ```
    batch=pcId, param1, param2, param3
    1000000000000-100000.01, value1, value2, valueeeeeee
    1000000000000-100000.01, value1, value3, valueeeeeee
    1367320065048-801944.01_00, value1, value6, valueeeeeee
    1000000000000-100000.01, value1, value6, valueeeeeee
    ```

2.   `curl -X POST --data-binary @batch http://mboxedge/m2/demo/profile/batchUpdate` 

**Note:** There is a limit of one million profile updates in a 24-hour period.

## Create the URL

For each operation add the parameters and values necessary to batch profile updates in a T&T campaign.

For example, use the following URL, substituting the appropriate value for each of the URL parameters:

```
https://client.tt.omtrdc.net/m2/client/profile/batchUpdate
```

| Parameter | Description |
|-------------|---------------|
|**batch** | \(Required\) batch content sent in the POST content as "batch" parameter. The request should be a POST. A batch is composed of the batch header followed by data. Example below: |

```
pcId, param1, param2, param3, param4
123, value1
124, value1,,,value4
125,,value2
126,value1,value2,value3,value4
```

 **Notes** 

-   Params and values must be URL-encoded using UTF-8
-   Param format is `paramName` only \(it is not the current format: `profile.paramName`\).
-   Not all parameter values need to exist for all pcIds.
-   ThirdPartyId is not supported.
-   Batch file size must be less than 60MB, and the total number of rows in the batch file must be less than 500k.


**Note:** Parameters and values are case sensitive.

## Inspect the Query Response

A response of `<success>true</success>` indicates a successful operation. T&T also returns a URL that clients can use to retrieve the status of the batch and a message:

```
<response>
    <success>true</success>
    <batchStatus>http://mboxedge19.tt.omtrdc.net/m2/fedex/profile/batchStatus?batchId=fedex-1470380971&mboxPC=0000000000000-000000.19_05</batchStatus>
    <message>Batch submitted for processing</message> 
</response>

```

 

**success**: status of the request, `true` or `false`.

**batchStatus**: URL where the batch status can be retrieved. If the `success` value is `false`, `batchStatus` is empty.

**message**: additional information regarding the status.

## Batch Status

For each client, only the previous 10 statuses are stored, for a maximum of 24 hours.

The status response appears as follows:

```
<response> 
  <success>true</success>
  <batchStatus>http://mboxedge19.tt.omtrdc.net/m2/testclient/profile/batchStatus?batchId=testclient-1470380971&mboxPC=0000000000000-000000.19_05</batchStatus> 
  <message>Batch submitted for processing</message> 
</response>


```

You can access the batch status URL to get the details of the actual success and failures.

```
http://mboxedge19.tt.omtrdc.net/m2/testclient/profile/batchStatus?batchId=testclient-1470380971&mboxPC=0000000000000-000000.19_05
```

```
<response>
<batchId>testclient -1470380971</batchId>
<status>complete</status>
<batchSize>5</batchSize>
</response>
```

```
http://mboxedge19.tt.omtrdc.net/m2/testclient/profile/batchStatus?batchId=testclient-1470380971&mboxPC=0000000000000-000000.19_05&showDetails=true

```

```
<response>
<batchId> testclient -1470380971</batchId>
<status>complete</status>
<batchSize>5</batchSize>
<successfulUpdates>2</successfulUpdates>
<profilesNotFound>3</profilesNotFound>
<failedUpdates>0</failedUpdates>
</response>
```

**Parent topic:** [Methods](../campaign_state/r_Test_and_Target_API_Sample_Code.md)


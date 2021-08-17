# Profile Fetch

The profile fetch API provides the ability to access a profile using an mboxPC id or a 3rd party id.

The API is accessible through the following URL:

 `http://mboxedge/rest/v1/profiles[/<pcId>][/thirdPartyId/<3rd_party_Id>]?client=<clientCode>` 

When this call is made, Target attempts to locate the profile first in the cluster noted in the edge request, or wherever the profile is located and return the content.

**Note:** The Profile Fetch API is limited to one million requests over a 24-hour period.

The profile contents are returned in JSON format. \(See the format details in the sections below\). For simplicity reasons, the first version of the API returns a short form of the JSON that only includes:

-   `mboxPC` 
-   `clientCode` 
-   `thirdPartyId` \(if the request was made with the `thirdPartyId`\)
-   `modifiedAt` 
-   The list of custom profile attributes \(attributes explicitly set by the customer\)

 **Live Example** 

[http://mboxedge17.tt.omtrdc.net/rest/v1/profiles/1389936436794-710059.19\_36?client=demo3](http://mboxedge17.tt.omtrdc.net/rest/v1/profiles/1389936436794-710059.19_36?client=demo3) 

 **Authentication** 

This API is currently not authenticated.

 **Throttling** 

There is a limit of one million profile fetch calls per 24 hour period. If the calls exceed this rate, then subsequent invocations fail with an error indicating the time period until the next call will succeed.

 **Metering** 

These calls do not count towards your mbox calls.

 **Error Handling** 

In the case of a call to `/thirdPartyId` with an invalid or an expired `thirdPartyId` specified:`\{"status" : 404, "message" : "No profile found for client <client\_code> with third party id=<third\_party\_id>"\}` 

If the profile can not be located or has expired:`\{"status" : 404, "message" : "No profile found for client <client\_code> with mboxPC=<mbox\_pc>"\}` 

 **Sample** 

URL: `https://mboxedge/rest/v1/profiles/1383918368404-663054.17_05?client=clientcode` 

`https://mboxedge/rest/v1/profiles/thirdPartyId/55557896156?client=clientcode` 

Method: `GET` 

Example: `curl -X GET` 

```
'https://mboxedge/rest/v1/profiles/1383918368404-663054.17_05?client=
clientcode'
<-- Response Status: 200 OK
<-- Response Body:
\{
   "mboxPC":"1383918368404-663054.17_05",
   "client": "demo8",
   "thirdPartyId": "55557896156",
   "modifiedAt": "2013-12-01T16:35:45",
      "profileAttributes": \{
      "dbAudience_Segment": \{
        "value": "Software & Technology",
        "modifiedAt": "2013-12-01T16:35:45"
      \},
      "age": \{
        "value": "39",
        "modifiedAt": "2013-12-01T16:35:45"
      \},
      "industry": \{
        "value": "webdev",
        "modifiedAt": "2013-12-01T16:35:45"
      \}
   \}
\}
```

**Note:** The `thirdPartyId` in the example above is included only if the call was made with the `thirdPartyId` parameter.

**Parent topic:** [Methods](../campaign_state/r_Test_and_Target_API_Sample_Code.md)


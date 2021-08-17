# Profile Update

The profile update API allows you to update a profile for a given `pcID` or an `mbox3rdPartyId`.

## Using Profile Update

 

Specify the profile parameters in the format `profile.paramName=value`.

**Note:** There is a limit of one million profile updates in a 24-hour period.

To update the profile for a `pcId`, use :

```
 https://client.tt.omtrdc.net/m2/client/profile/update?mboxPC=1368007744041-575948.01_00&profile.attr=0&profile.attr2=1...
```

To update the profile for an `mbox3rdPartyId`, use:

```
http://client.tt.omtrdc.net/m2/client/profile/update?mbox3rdPartyId=somethingHere&profile.attr=0&profile.attr2=1...
```

**Notes** 

-   Parameters and values must be URL-encoded using UTF-8.
-   Parameter format is `profile.paramName`.
-   Not all parameter values need to exist for all `pcIds/mbox3rdPartyId`.
-   Parameters and values are case sensitive.
-   Both `GET` and `POST` are supported.
-   The current size limitations for limit is 8KB for `GET` and 60KB for `POST`.
-   The calls to the profile update API do not count toward your mbox charges.

## Response

A sample response for the above requests looks like this:

`<response><success>true</success><pcId></pcId><message>Request successfully submitted</message></response>` 

**Notes** 

This response indicates the response has been submitted and will be processed soon. In general, lag time is less than a minute.

**Parent topic:** [Methods](../campaign_state/r_Test_and_Target_API_Sample_Code.md)


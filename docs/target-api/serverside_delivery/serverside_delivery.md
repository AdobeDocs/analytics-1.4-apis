# Server-Side Delivery API

This API exposes all existing features that mbox calls provide, but in a RESTful manner. It does not process cookies and never redirects .

Previously, the only method to integrate Target with another system was through a Rawbox call. There are a few limitations to a Rawbox approach, such as cookie processing. As a result, Target now supports an API designed specifically for integrating systems.

## API Call Example

**Note:** Only POST is allowed by this API.

```
POST /rest/v1/mbox/1223434535?client=demo
```

where:

-   `1223434535` is the `sessionId` that is generated and maintained by the client.
-   `client` is the client code.

    The `client` parameter is mandatory for each request.


 

 `sessionId` can be any printable \([http://en.wikipedia.org/wiki/PrintableString](http://en.wikipedia.org/wiki/PrintableString)\) string except the following:

-   space
-   ?
-   /

Length should be 1 <= length <= 128.

For a particular session, the value has to stay the same across multiple requests.

Routing to a particular node in the cluster must be done using `sessionId`.

Since the session is kept alive for 30 minutes on the server side, clients should not use a different `sessionId` for a particular `tntId/thirdPartyId` unless 30 minutes passed since the last request made with this`tntId/thirdPartyId`. Otherwise, changes made to the profile will be inconsistent and cannot be predicted.

Session IDs should never be used with more than one `tntId` or `thirdPartyId`. Otherwise, unpredictable things will happen to the profiles identified by those `tntId/thirdPartyIDs`.

## Full API Example

Here's a sample request:

```
{
   "mbox" : "orderConfirmPage",
   "clicked" : true,
   "tntId" : "12121212.17_01",
   "order" : {
      "total" : 123.99,
      "id" : "123",
      "purchasedProductIds" : [12, 13, 15, "someProductId"]
   },
   "profileParameters" : {
      "param1" : "value1",
      "param2" : "value2"
   },
   "mboxParameters" : {
      "screenHeight" : "800",
      "browserWidth" : "600"
   },
   "requestLocation" : {
      "pageURL" : "http://demo/demo/store/",
      "referrerURL" : "http://demo/demo/store/",
      "ipAddress" : "128.10.10.1",
      "impressionId" : "15989",
      "host" : "hostname"
   },
   "mboxTrace" : true
}
```

## Sample Response

The response looks like the following:

```
{
   "sessionId" : "1234",
   "tntId" : "121212121.17_01",
   "mboxTrace" : {
      "mboxName":"homePageFeature1",
      "serverNode":"aneaga",
      "campaigns":[
         {
         "id" : 21,
         "campaignName":"bullseye header",
         "branchId":0,
         "branchName":"Experience A",
         "offers":[38],"metrics":[
      .........
   }
   }
   "content" : "raw content here"
}
```

## Third-Party ID Usage

Third party IDs can be used without their prior creation. For example:

```
{
   "mbox" : "homePageHero",
   "thirdPartyId" : "clientSpecificId",
   "mboxParameters" : {
      "screenHeight" : "800",
      "browserWidth" : "600"
   }
}
```

If a profile with `clientSpecificId` was previously created, it is used in the context of this call. Otherwise, a new profile is created using this ID.

All String parameters in the request will be trimmed.

In case there's no offer to serve, content is an empty string.

Content is always JSON-escaped.

Redirect offer content is served using the format: `redirectTo:URL-here`, for example `redirectTo:http://adobe.com` 

Default content is served as an empty string.

## Request Details

|Field Path|Description|Default Value|Validation|
|----------|-----------|-------------|----------|
|`mbox` |The mbox name.|None, it cannot be empty.| Same validation as for all mbox calls. 1 < Length < 250 Cannot contains any of the following characters: ', ", %22, %27, <, \>, %3C, %3E |
|`clicked` | Equivalent of using the "-clicked" suffix in mbox names for mbox calls. **Important:** Click mboxes only work for campaigns with metrics that have a specific mbox selected, for example "click from homePageHer" and will not work if "click from display mboxes" is selected. |False|Can be empty or true/false|
|`tntId` |New name for pcId/mboxPC.| Empty. If no "thirdPartyId" was provided, a new tntId is generated and returned as part of the response. Otherwise remains empty. | 1 < Length < 128 Cannot contain more than a single "." \(dot\). The only dot allowed is for profile location suffix. |
|`thirdPartyId` |Client-provided visitor ID.|Empty|1 < Length < 128|
|`marketingCloudVisitorId` |Experience Cloud Visitor ID|Empty|1 < Length < 128|
|`order.total` |Order amount associated with the order|Empty|If not empty, should be a valid decimal|
|`order.id` |Order reference ID|Empty|If not empty, Length < 250|
|`order.purchasedProductIds` |Order referenced product IDs|Empty| Each ID cannot exceed 50 char length. Total length of comma-delimited IDs as string cannot exceed 250 chars |
|`profileParameters` | Parameters that should be set in the profile. The end values in the profile are saved as `profile.param=value`. |Empty|Cannot contain more than 50 parameters|
|`profileParameters.[name]` |Profile parameter name|Empty| Length < 128 Should not start with "profile." prefix. |
|`profileParameters.[value]` |Profile parameter value|Empty|Length < 256|
|`mboxParameters` |Any mbox parameters that may need to be provided. eg. `screenWidth`.|Empty| Cannot contain more than 50 parameters. Cannot contain order-related parameters that should be set in "order". Cannot contain parameters with "profile." prefix. Those should be set in "`profileParameters`". |
|`mboxParameters.[name]` |Mbox parameter name|Empty|Length < 128|
|`mboxParameters.[value]` |Mbox parameter value|Empty|Length < 256|
|`requestLocation.pageURL` |Equivalent to `mboxURL` mbox parameter|Empty| Valid URL. Length < 3072 |
|`requestLocation.referrerURL` |Equivalent to `mboxReferrer` mbox parameter|Empty| Valid URL Length < 3072 |
|`requestLocation.ipAddress` |Override the IP address of the client server|IP address or the server making the call|Valid IP address|
|`requestLocation.impressionId` | Equivalent of `pageId`. A unique one is generated with each request if no value was specified. |Empty|Length < 128|
|`requestLocation.host` |Equivalent of `mboxHost` |"unknown"|Length < 250|
|`mboxTrace` |Enabled detailed tracing of the call|False|Empty/True/False|

## Response Description

|Field Path|Description|
|----------|-----------|
|`sessionId` |Session ID that was provided for this call.|
|`tntId` |Provided or generated `tntId`.|
|`thirdPartyId` | `thirdPartyId` if one was provided.|
|`mboxTrace` |Serialized mbox trace details.|

## Standard Use Cases

**Completely New Visitors** 

For new visitors, there are generally several possibilities:

1.  The client has the possibility to store our generated TnT ID. In this case, the request made is as simple as https://mboxedge/rest/v1/mbox/999888?client=demo 

    ```
    {
       "mbox" : "homePageHero"
    }
    ```

    **Response** 

    ```
    {
       "content" : "content",
       "sessionId" : "999888",
       "tntId" : "1405327173056-274175.01_00"
    }
    ```

    Note that a new `tntId` is generated and provided in the response.

    All subsequent requests need to include the generated `tntId` as following:

     https://mboxedge/rest/v1/mbox/999888?client=demo 

    ```
    {
       "mbox" : "homePageHero",
       "tntId" : "1405327173056-274175.01_00"
    }
    ```

2.  The client wants to use custom IDs to identify visitors \(profiles\). In this case, only third party IDs can be used and need to be provided with every call.

    https://mboxedge/rest/v1/mbox/999888?client=demo

    ```
    {
       "mbox" : "homePageHero",
       "thirdPartyId" : "customId-123"
    }
    
    ```

    **Response** 

    ```
    {
       "content" : "content",
       "sessionId" : "999888",
       "thirdPartyId" : "customId-123"
    }
    
    ```

3.  A Experience Cloud visitor ID is used.

    **Experience Cloud Visitor ID** 

    ```
    {
       "mbox" : "homePageHero",
       "marketingCloudVisitorId" : "23131312312312123123"
    }
    
    ```

    **Note:** `tntId/thirdPartyId/marketingCloudVisitorId` can all be combined and provided in the same request. A typical scenario would be to provide `tntId` along with another ID.

     

    **Combining IDs** 

    ```
    {
       "mbox" : "homePageHero",
       "tntId" : "1234343422.17_01",
       "marketingCloudVisitorId" : "23131312312312123123"
    }
    
    ```

    **Returning Visitors** 

    Calls for returning visitors need to include the identifier that was used initially, `tntId` or `thirdPartyId`.


## Error Conditions

In case of error conditions:

```
{
   "status" : 500,
   "message" : "An error has occurred while processing your request, please try again later"
}
```

**Parent topic:** [Methods](../campaign_state/r_Test_and_Target_API_Sample_Code.md)


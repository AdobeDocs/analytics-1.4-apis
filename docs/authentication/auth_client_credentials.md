# Client Credentials Grant

Use this when you \(the developer\) are the user and want to access the data. This is the most common type of application.

![](graphics/oauth_client_credentials.png)

Before you set up your OAuth client, make sure you

-   Have valid Adobe ID credentials.
-   Have access to the Marketing Cloud.

## Step 1: Link your Analytics account to your Adobe ID

Refer to [this section](auth_link_account.md#).

## Step 2: Create an application in Developer Connection

Refer to [this section](auth_register_app.md#).

## Step 3: Save the application ID \(client Id\) and the application secrecy \(client secret\).

## Step 4: Request a Token

Make a request to [https://api.omniture.com/token](https://api.omniture.com/token) with the following parameters:

|Get Parameter|Description|
|-------------|-----------|
| `client_id` |The client ID is defined when you [register your app](auth_register_app.md#).|
| `client_secret` |The client secret is defined when you [register your app](auth_register_app.md#).|
|`grant_type=client credentials` |Obtain an access token for the user using the Client Credentials grant type. ```$ curl -i -v "https://api.omniture.com/token" -u 'YOUR_CLIENT_ID:YOUR_CLIENT_SECRET' -d "grant_type=client_credentials"``` |

The response will be an access\_token which contains the user identity associated with the Client Credentials supplied, and can be used to access the Experience Cloud APIs

```
{"access_token":"1377794057309-32431c48-1de8-46cd-a204-ef10594c01a6","client_id":"OAuth Demo Application","user_id":"002D48475194FBF10A490D04@AdobeID","expires":1377880457,"scope":null,"success":true}
```

## Step 5: Authenticate Using the Access Token

Refer to [this section](auth_tokens.md#).

**Parent topic:** [Obtain an Access Token](auth_obtain_access_token.md)


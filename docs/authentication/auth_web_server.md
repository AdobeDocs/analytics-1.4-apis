# Web Server Grant

For use with web apps - when someone else will use the application and you want them to authenticate with their own credentials.

![](graphics/oauth_flow_authorization_code.png)

Before you set up your OAuth client, make sure you

-   Have valid Adobe ID credentials.
-   Have access to the Marketing Cloud
-   Are the Admin of one or more organizations.

## Step 1: Link your Analytics account to your Adobe ID.

Refer to [this section](auth_link_account.md#).

## Step 2: Create an Application

Refer to [this section](auth_register_app.md#).

## Step 3: Obtain an Authorization Code

An authorization code is obtained by making a request to the authorization URL:

```
https://marketing.adobe.com/authorize
```

Provide the following parameters:

|Get Parameter|Description|
|-------------|-----------|
| `client_id` |The client ID is defined when you [register your app](auth_register_app.md#).|
| `response_type` |This should be set to "code" for the Authorization Code Grant. The Implicit Grant Type is also supported by changing `response_type=code` to `response_type=token`.|
| `state` |\(required\) A session key string similar to a CSRF Token used to validate the user's session. For details, see [http://tools.ietf.org/html/rfc6749\#section-10.12](http://tools.ietf.org/html/rfc6749#section-10.12).|
| `redirect_uri` |\(optional\) The endpoint to redirect the user after the authorization step. If a `redirect_uri` is provided, the same `redirect_uri` must also be included in the token request.|
| `scope` |\(optional\) The requested scope. See [Authentication Scope Reference](auth_scope.md#).|

After this request is sent and the user authorizes the client, the user is redirected back to the supplied `redirect_uri` endpoint, with an authorization code in the query string \(`https://client.example.com/cb?code=xxx`\).

You can now exchange the code for a token. If you specified an implicit grant type, the token is returned instead of the authorization code.

## Step 4: Exchange an Authorization Code for an Access Token

The authorization code can be exchanged for an access token by calling the token URL

```
 https://api.omniture.com/token?grant_type=authorization_code&code=###
```

You must also provide the [client credentials](auth_register_app.md#) either in header or post body \(POST: `client_id`, `client_secret`\) or as HTTP basic auth. If a `redirect_uri` was provided when requesting the authorization code, it must be provided with this request as well.

The response provided by the APIs will contains an access token, which can then be used to call the APIs for the user who authorized the client.

```
{
    “access_token":"1882994084537-e850e548-859d-4848-afbb-9125507b07df”,
    "client_id":"My Client App ID”,
    "user_id":"003D48475174FBF10A460D04@AdobeID”,
    "expires":1385586084,
    "scope”:"ReportSuite"
}
```

## Step 5: Authenticate Using an Access Token

Refer to [this section](auth_tokens.md#).

**Parent topic:** [Obtain an Access Token](auth_obtain_access_token.md)


# User-Agent Grant

For use with mobile apps - when someone else will use the application and you want them to authenticate with their own credentials.

![](graphics/oauth_flow_implicit.png) 

Before you set up your OAuth client, make sure you

-   Have valid Adobe ID credentials.
-   Have access to the Marketing Cloud

## Step 1: Link your Analytics account to your Adobe ID.

Refer to [this section](auth_link_account.md#).

## Step 2: Create an Application

Refer to [this section](auth_register_app.md#).

## Step 3: Obtain an Access Token.

1.  Take the user to [https://marketing.adobe.com/authorize](https://marketing.adobe.com/authorize).
2.  Have the user enter their credentials.
3.  Adobe will redirect back with the access token in the URL.

## Step 4: Authenticate Using the Access Token

Refer to [this section](auth_tokens.md#).

## Step 5: Validating the Token

Unpack the JWT payload and verify that the `sub` parameter matches your intended client ID:

```
# Javascript
var parts = accessToken.split('.');
var payload = parts[1];
var base64DecodedPayload = window.atob(payload);
var payloadObject = JSON.parse(base64DecodedPayload);
var clientId = payloadObject.sub; // validate this is your client ID!
```

Failure to verify tokens makes your application more vulnerable to the [Confused Deputy](http://en.wikipedia.org/wiki/Confused_deputy_problem) problem.

**Parent topic:** [Obtain an Access Token](auth_obtain_access_token.md)


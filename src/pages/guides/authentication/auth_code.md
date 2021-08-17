# Obtain an Authorization Code

The authorization code is granted after the user has provided his or her credentials and has authorized the scope requested by your application.

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

You can now [exchange the code for a token](auth_exchange.md#). If you specified an implicit grant type, the token is returned instead of the authorization code.


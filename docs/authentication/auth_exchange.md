# Exchange an Authorization Code for an Access Token

An access token is used to make API requests.

The [authorization code](auth_code.md#) can be exchanged for an access token by calling the token URL

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


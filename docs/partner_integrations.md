# Using Web Grant OAuth With the 1.4 API
Web grant is an OAuth flow that allows an application to integrate with Adobe Analytics and use a user's credentials to authenticate. This is very useful for 3rd parties building client applications, or for organizations interested in building something like an internal dashboard that reflects a user's permissions.

These integrations are created within [console.adobe.io](console.adobe.io).

1. Log in to [console.adobe.io](console.adobe.io), select the relevant org from the dropdown menu at the top right, and click 'Create new project'
2. Click 'Add an API'
3. Choose 'Experience Cloud'
4. Choose 'Adobe Analytics' and click 'Next'
5. Choose 'OAuth' and click 'Next'
6. Choose 'Web' and provide a redirect URI and redirect URI pattern. In the pattern field, be sure to escape '.' characters with a backslash.
7. Click 'Save configured API'

A `client_id` and `client_secret` will be generated that can be used to request and access token.

To request an authorization code, build the following URL and present it to the user inside of a browser:

```https://ims-na1.adobelogin.com/ims/authorize/v2?client_id={CLIENT_ID}&redirect_uri={REDIRECT_URI}&scope=openid,AdobeID,read_organizations,additional_info.projectedProductContext,additional_info.job_function&state={OPTIONAL_STATE_PARAMETER}```

The user will login using their Adobe credentials and will have the opportunity to authorize the client. Once complete, the browser will be redirected to the provided `{REDIRECT_URI}` with a `code` GET string parameter. This `code` parameter will be used in the next request and is called an _authorization code_.

The _authorization code_ can be exchanged for an access and refresh token by making a server-side request:
```
curl -u '{CLIENT_ID}:{CLIENT_SECRET}' -X POST \
     https://ims-na1.adobelogin.com/ims/token/v3 \
     -H 'Content-Type: application/x-www-form-urlencoded' \
     -d 'code={AUTHORIZATION_CODE}&grant_type=authorization_code'
```
`CLIENT_ID` and `CLIENT_SECRET` are the credentials provided in the adobe.io console for your application. The `{AUTHORIZATION_CODE}` parameter is the value of the `code` parameter in the previous response.

The `-u '{CLIENT_ID}:{CLIENT_SECRET}'` parameter instructs curl to send an `Authorization: Basic` header. For example, if your `client_id` was `test_client_id` and `client_secret` was `test_client_secret` the authorization header would look like this:

```
Authorization: Basic dGVzdF9jbGllbnRfaWQ6dGVzdF9jbGllbnRfc2VjcmV0
```

Where the value is `test_client_id:test_client_secret` after it has been base64 encoded.


The response from this request will contain an access and refresh token that can be used to make requests against the 1.4 and 2.0 APIs.

> Note: When making requests against the 1.4 APIs, an X-ADOBE-DMA-COMPANY header _must be sent in_ to indicate login company that the API call is intended for. More information is available [here](https://github.com/AdobeDocs/analytics-1.4-apis/blob/master/docs/authentication/auth_company.md). The `discovery/me` endpoint can be used to get a list of login companies associated with a user. More information is available [here](https://www.adobe.io/apis/experiencecloud/analytics/docs.html#!AdobeDocs/analytics-2.0-apis/master/discovery.md).

More information about Adobe OAuth is available [here](https://www.adobe.io/authentication/auth-methods.html#!AdobeDocs/adobeio-auth/master/OAuth/OAuth.md#authorization). More information about available Adobe scopes is available [here](https://www.adobe.io/authentication/auth-methods.html#!AdobeDocs/adobeio-auth/master/OAuth/Scopes.md#experience-cloud).
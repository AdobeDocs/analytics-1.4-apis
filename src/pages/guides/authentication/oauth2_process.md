# OAuth2 Process

 

OAuth is an open standard to authorization. OAuth provides client applications a 'secure delegated access' to server resources on behalf of a resource owner.

## Process for Setting Up OAuth2 Authentication

|Step|Task|Description|
|----|----|-----------|
|![](graphics/step1_icon.png) |[Link account](auth_link_account.md#) |Linking an existing Analytics account to your Adobe ID lets you use the single-sign on capability of the Experience Cloud to access solutions, and authenticate to web services using OAuth2.|
|![](graphics/step2_icon.png) |[Create an application](auth_register_app.md#) |Creating and registering your app generates the client ID and secret that are required to authenticate.|
|![](graphics/step3_icon.png) |[Get an Access Token](auth_obtain_access_token.md#) |This process differs depending on which one of the [four supported Authorization Flows](auth_obtain_access_token.md#) you decide to use. If you are new to OAuth, we recommend that you start with the client credentials grant type. Access tokens expire after 24 hours. |
|![](graphics/step4_icon.png) |[Use the access token to access the APIs](auth_tokens.md#) |You can provide the access token in the HTTP header, post body, or query string of the request.|

**Parent topic:** [OAuth 2 Authentication](auth_overview.md)


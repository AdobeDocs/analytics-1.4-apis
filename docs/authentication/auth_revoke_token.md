# Revoking Access or Refresh Tokens

This endpoint allows a client to revoke an access token or refresh token. This can be useful if permissions need to be refreshed or if a token was compromised.

## Authentication and Parameters

The revokation request must authenticate with a `client_id` and `client_secret` and include the `token` to be revoked.

```
curl -X POST "https://api.omniture.com/token/revoke" -d "token=09c52a854736ad5c9113bf105d5f634d9979d303..." -d "client_id=an_example_client_id" -d "client_secret=an_example_client_secret"
```

Both access tokens and refresh tokens can be revoked using this endpoint. A `token_type_hint` can be included to indicate the type of token to be revoked. Possible values for this parameter are `access_token` and `refresh_token`. More details about how this parameter is used can be found here: [OAuth 2.0 Token Revocation - Revokation Request](https://tools.ietf.org/html/rfc7009#section-2.1)

**Parent topic:** [OAuth 2 Authentication](auth_overview.md)


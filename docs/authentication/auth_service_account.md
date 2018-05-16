# Service Account \(JWT Bearer\) Grant

This type of grant is great for server-to-server communication without transmitting any sensitive information.

![](graphics/oauth_flow_jwtassertion.png)

Before you set up your OAuth client, make sure you

-   Have valid Adobe ID credentials.
-   Have access to the Marketing Cloud
-   Are the Admin of one or more organizations.

## Step 1: Link your Analytics account to your Adobe ID.

Refer to [this section](auth_link_account.md#).

## Step 2: Create an OAuth Client

Create an [OAuth client](auth_register_app.md#) with your admin user. The client has to be configured with a Public Key.

## Step 3: Generate the JSON Web Token \(JWT\) with a private key

Here is a sample script in PHP for generating a JWT Token:

```
/**
 * Generate a JWT
 *
 * @param $privateKey The private key filename or string literal to use to sign the token
 * @param $iss The issuer, usually the client_id
 * @param $sub The subject, usually a user_id
 * @param $aud The audience, usually the URI for the oauth server
 * @param $exp The expiration date. If the current time is greater than the exp, the JWT is invalid
 * @param $nbf The "not before" time. If the current time is less than the nbf, the JWT is invalid
 * @param $jti The "jwt token identifier", or nonce for this JWT
 *
 * @return string
 */
function generate_jwt($privateKey, $iss, $sub, $aud, $exp = null, $nbf = null, $jti = null)
{
    if (file_exists($privateKey)) {
        $privateKey = file_get_contents($privateKey);
    }
 
    $algo = 'RS256';


    if (!$exp) {
        $exp = time() + 1000;
    }
 
    $payload = array(
        'iss' => $iss,
        'sub' => $sub,
        'aud' => $aud,
        'exp' => $exp,
        'iat' => time(),
    );

    if ($nbf) {
        $payload['nbf'] = $nbf;
    }

    if ($jti) {
        $payload['jti'] = $jti;
    }

    $header = array('typ' => 'JWT', 'alg' => $algo);

    $find = array('+', '/', '\r', '\n', '=');
    $replace = array('-', '_');

    $segments = array(
        str_replace($find, $replace, base64_encode(json_encode($header))),
        str_replace($find, $replace, base64_encode(json_encode($payload))),
    );

    $signing_input = implode('.', $segments);

    openssl_sign($signing_input, $signature, $privateKey, 'sha256');

    $segments[] = str_replace($find, $replace, base64_encode($signature));

    return implode('.', $segments);
}
```

You can then call this function to output a JWT assertion:

```
// generate_jwt.php
$jwt = generate_jwt($privateKey, 'TestClient', '001D49185195123B0A490D06@AdobeOrg', 'api.omniture.com');
echo $jwt
 
// will output the following
eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJUZXN0Q2xpZW50Iiwic3ViIjoiMDAxRDQ5MTg1MTk1MTIzQjBBNDkwRDA2QEFkb2JlT3JnIiwiYXVkIjoiYXBpLnZtMjIxLmRldi51dDEub21uaXR1cmUuY29tIiwiZXhwIjoxMzk1MzI4OTM2LCJpYXQiOjEzOTUzMjc5MzZ9.E3LzW6OTLx4vS35cF4bRAKVaRq0TQMfk0hpechmZVJy_FVnkc53VwuBl-4OIupbjgEWucV91hcYGXDr3leSZN48D9GC9MtezOpURZyJCL7ZoYNeyvaJpdZHo2yqhzC0Fgj1jSq1kYHdGy9wi_uwbITBF6Z0G2MR5iDSzosQxFNN5bmUZtk1QQps1NMKPgCZPfcjq05GuL5pM2gAPfc7h7R2_nod40y6Wp6IbT-ygXdfOPLefKpe1-p5lP7l9F49Nf3JCGoCOOOaJwJdzTauqtIItNbXQ86q4e5VaNLIlr8XWJhFEDAHBazMrfGBWLpt3_pu1pr_jzak4EuZZMtpfQQ
```

## Step 4: Request the Access Token

Once the JWT is generated, make the request for the access token:

```
$ curl -v "https://api.vm474.dev.ut1.omniture.com/token" \
    -d "grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer"\
    -d "client_id=TestClient"\
    -d "assertion=$(php generate_jwt.php)"
```

If successful, the response will look similar to this:

```
{
    "access_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpZCI6ImM1MTI5NTEzNzk2ZjgwMmQwY2JhZGE2ZjdjZDJmYTlmODAwMjQyMWYiLCJjbGllbnRfaWQiOiJUZXN0Q2xpZW50IiwidXNlcl9pZCI6IjAwMUQ0OTE4NTE5NTEyM0IwQTQ5MEQwNkBBZG9iZU9yZyIsImV4cGlyZXMiOjEzOTA2MDgyNjEsInRva2VuX3R5cGUiOiJiZWFyZXIiLCJzY29wZSI6bnVsbH0.hSpfm_B3L9nxai9IjVukSnri8lQlEC2ohOOnRI7VHTyn6oubIn99RrMCYVfg7CcOmKaJWhtMCIBcFb4MDStK-JDW-koh9ZaLnJogGnXzKCtlCNvMWGLojRKW_dLVZU__GgXT7GTnIW02Z3YFlTmupglsuIuaxPCF7H6KPOAgvM_RVqo4UIGBQihKfwjbtCwiD5UvnE5-U2Eso8id4FNuWgmlE-cK7qAMwJW7B94QbYMGHNbKogKrgKNIhSVCIw5S68fH-vHjsxDceh1H1ZtbM8nDyPP_Bjg_a1VaIn7Q-hmHMEpSeDMUuLSPHsJbwEXQoJJkzJWMNLVHMnCzYIRJ0A",
    "expires_in":3600,
    "token_type":"bearer",
    "scope":null,
    "success":true
}
```

## Step 5: Authenticate using an Access Token

Refer to [this section](auth_tokens.md#).

**Parent topic:** [Obtain an Access Token](auth_obtain_access_token.md)


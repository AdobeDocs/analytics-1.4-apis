# WSSE Flow

 

WSSE is a family of open security specifications for web services, specifically SOAP web services. The basic premise of WSSE is that a request header is checked for encrypted credentials, verified using a timestamp and nonce, and authenticated for the requested user using a password digest.

![](graphics/wsse.png)

## Benefits

The security protocol for WSSE provides several security benefits:

-   Username / Password encryption
-   Safeguarding against replay attacks
-   No web server configuration requirement

**Note:** While Adobe will support WSSE Authentication for some time, we encourage the use of OAuth Authentication for the longer term.

## Key Terms

|Term|Definition|
|----|----------|
|Nonce|A unique binary string generated for use in the WSSE hashing algorithm and useful to help prevent against reply attacks. This value essentially represents a "request ID".|
|Timestamp|Indicates to the authorization server the time when the request was created or signed and can thus help prevent stale requests from being used at a later time.|
|Secret|Unique authentication token used by the client as input to the hashing algorithm. The secret is never transmitted in direct form with the request.|
|Digest|A unique binary string produced with the nonce, timestamp and secret values and used to authoritatively sign the request. The digest is issued with API requests to prove that the client has the secret.|

## Overview

WSSE Authentication is used to prove to the backend authentication service that the client possess the API secret, without actually having to provide the secret itself. Together with the "created" date time input, WSSE is a stronger authentication protocol when compared with basic username and password.

The authentication process expects a properly formed "X-WSSE" header sent with every request. The values of this header will be unique to every request and cannot be re-used.

The process looks like this:

1.  Generate a nonce. This string needs to have a high level of entropy and it is generally safe to use a GUID generator.
2.  Generate a timestamp. The timestamp should follow the ISO-8601 standard and should be based on GMT time. Stale created timestamps will be rejected by the authentication service, so they should be generated using a reliable system clock.
3.  Generate a digest hash string using the sha1 one-way hashing algorithm. The input the the sha1 hash is simply a concatenation of the nonce, created timestamp, and the API secret. Please note that the sha1 output should be binary, not hexadecimal.
4.  base64 encode the digest and nonce.
5.  Assemble the X-WSSE header using the following format:

    ```
    X-WSSE: UsernameToken Username="username", PasswordDigest="password_digest", Nonce="nonce", Created="created_timestamp"
    ```


**Parent topic:** [WSSE Authentication](wsse_authentication.md)


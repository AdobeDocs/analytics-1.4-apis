WSSE Authentication
=====

Introduction to WSSE
----

Key terms:

*Nonce* - A unique binary string generated for use in the WSSE hashing algorithm and useful to help prevent against replay attacks. This value essentially represents a "request ID"

*Timestamp* - Indicates to the authorization server the time which the request was created or signed and can thus help prevent stale requests from being used at a later time

*Secret* - Unique authentication token used by the client as input to the hashing algorithm. The secret is never transmitted in direct form with the request.

*Digest* - A unique binary string produced with the nonce, timestamp and secret values and used to authoritatively sign the request. The digest is issued with API requests to prove that the client has the secret
 

The security protocol for WSSE provides several security benefits:

* Username / Password encryption
* Safe guarding against replay attacks
* No web server configuration required

The basis of WSSE is that a request header is checked for encrypted credentials, verified using a timestamp and nonce, and authenticated for the requested user using a password digest.

Overview
----

WSSE Authentication is used to prove to the backend authentication service that the client possess the API secret, without actually having to provide the secret itself. Together with the "created" date time input, WSSE is a stronger authentication protocol when compared with basic username and password.

The authentication process expects a properly formed "X-WSSE" header sent with every request. The values of this header will be unique to every request and cannot be re-used.

* Generate a nonce. This string needs to have a high level of entropy and is generally safe to use a GUID generator.
* Create a timestamp must be generated. The created timestamp should follow the ISO-8601 standard and should be based off of GMT time. Stale created timestamps will be rejected by the authentication service, so they should be generated using a reliable system clock.
* Generate a digest hash string using the sha1 one-way hashing algorithm. The input the the sha1 hash is simply a concatenation of the nonce, created timestamp, and the API secret. Please note that the sha1 output should be binary, not hexadecimal.
* base64 encode the digest and nonce
* Assemble the X-WSSE header. Using the following format. X-WSSE: UsernameToken Username="username", PasswordDigest="password_digest", Nonce="nonce", Created="created_timestamp"


Examples
----

Here is an example php function that will generate a valid WSSE header string:
```php
function generate_wsse_header($username, $secret)
{
    date_default_timezone_set('America/Denver');
    $nonce = UUIDv4();
    $created = gmdate('c');
 
    $digest = base64_encode(hash('sha256', $nonce.$created.$secret,true));
    $b64nonce = base64_encode($nonce);
 
    return sprintf('X-WSSE: UsernameToken Username="%s", PasswordDigest="%s", Nonce="%s", Created="%s", Algorithm="SHA256"',
      $username,
      $digest,
      $b64nonce,
      $created
    );
}
 
function UUIDv4()
{
    return sprintf('%04x%04x-%04x-%03x4-%04x-%04x%04x%04x',
             mt_rand(0, 65535), mt_rand(0, 65535),
             mt_rand(0, 65535),
             mt_rand(0, 4095),
             bindec(substr_replace(sprintf('%016b', mt_rand(0, 65535)), '01', 6, 2)),
             mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(0, 65535)
    );
}
```

Here is a Java example:
```java
public static String generateWSSEHeader( String appKey, String secret ) throws IOException, NoSuchAlgorithmException {	
		ByteArrayOutputStream digest = new ByteArrayOutputStream( 52 );
		byte[] nonce = new byte[20];
		RAND.nextBytes( nonce );

		digest.write( nonce );
		digest.write( secret.getBytes() );
		
		MessageDigest md = MessageDigest.getInstance( "SHA-256" );
		byte[] hashedDigest = md.digest( digest.toByteArray() );
		String encodedDigest = Base64.encodeBase64String( hashedDigest );
		String encodedNonce = Base64.encodeBase64String( nonce );
		
		StringBuffer wsseHeader = new StringBuffer();
		wsseHeader.append( "UsernameToken Username=\"" );
		wsseHeader.append( appKey );
		wsseHeader.append( "\", AppDigest=\"" );
		wsseHeader.append( encodedDigest );
		wsseHeader.append( "\", Nonce=\"" );
		wsseHeader.append( encodedNonce );
		wsseHeader.append( "\", Algorithm=\"sha256\"" );

		return wsseHeader.toString();
}
```

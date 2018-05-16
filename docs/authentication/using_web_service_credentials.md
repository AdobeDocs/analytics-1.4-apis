# Using Web Service Credentials

How to generate a valid WSSE header string and use it in an application.

## Generate a WSSE Header String

This section shows an example function that will generate a valid WSSE header string \(for REST, SOAP, and JAVA\).

**REST Example Function:** 

```
function generate_wsse_header($username, $secret)
{
  date_default_timezone_set('America/Denver');
  $nonce = UUIDv4();
  $created = gmdate('c');
 
  $digest = base64_encode(sha1($nonce.$created.$secret,true));
  $b64nonce = base64_encode($nonce);
 
  return sprintf('X-WSSE: UsernameToken Username="%s", PasswordDigest="%s", Nonce="%s", Created="%s"',
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

**SOAP Example Function** 

```
function generate_wsse_header_soap($username, $secret)
{
  $nonce = UUIDv4();
  $created = gmdate('c');
 
  $digest = base64_encode(sha1($nonce.$created.$secret,true));
  $b64nonce = base64_encode($nonce);
 
  return sprintf('
      <wsse:Security wsse:mustUnderstand=\"1\" xmlns:wsse=\"http://www.omniture.com\">
          <wsse:UsernameToken wsse:Id=\"User\">
              <wsse:Username>%s</wsse:Username>
              <wsse:Password Type=\"http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordDigest\">%s</wsse:Password>
              <wsse:Nonce>%s</wsse:Nonce>
              <wsse:Created>%s</wsse:Created>
          </wsse:UsernameToken>
       </wsse:Security>',
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

**JAVA Example Function:** 

```
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.text.SimpleDateFormat;
import java.util.Date;
  
import sun.misc.BASE64Encoder;
  
public class GatewayUtils {
  private static SecureRandom rand = new SecureRandom();
   
  private static byte[] toSHA1(byte[] data) throws NoSuchAlgorithmException {
    MessageDigest md = null;
    md = MessageDigest.getInstance("SHA-1");
    return md.digest(data);
  }
   
  public static String generateWSSEHeader(String clientId, String clientSecret) throws IOException, NoSuchAlgorithmException {
    BASE64Encoder b64 = new BASE64Encoder();
    SimpleDateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss z");
    StringBuffer wsseHeader = new StringBuffer();
    String created = dateFormatter.format(new Date());
    ByteArrayOutputStream digest = new ByteArrayOutputStream(40);   
    byte[] nonce = new byte[20];
     
    rand.nextBytes(nonce);
     
    digest.write(nonce);
    digest.write(created.getBytes());
    digest.write(clientSecret.getBytes());
  
    wsseHeader.append("UsernameToken Username=\"");
    wsseHeader.append(clientId);
    wsseHeader.append("\", PasswordDigest=\"");
    wsseHeader.append(b64.encode(toSHA1(digest.toByteArray())));
    wsseHeader.append("\", Nonce=\"");
    wsseHeader.append(b64.encode(nonce));
    wsseHeader.append("\", Created=\"");
    wsseHeader.append(created);
    wsseHeader.append("\"");
     
    return wsseHeader.toString();
  }
  
}
```

## Use the WSSE Header in your Application

This section shows how to implement the header in an application.

```
$ch = curl_init();
 
// set url
curl_setopt($ch, CURLOPT_URL, "https://api.omniture.com/admin/1.4/rest/?method=Company.GetReportSuites");
 
// return the transfer as a string
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
 
// set WSSE header
curl_setopt($ch, CURLOPT_HTTPHEADER, array(generate_wsse_header('YOUR-USERNAME', 'YOUR-API-KEY')));
 
// $output contains the output string
$output = curl_exec($ch);
 
// close curl resource to free up system resources
curl_close($ch);
```

The variable $output will contain the json-encoded string of the response, granted the username and API key are valid.

This can also be used via cURL on the command line. Create an executable file called wsse.php which outputs a valid header like this:

```
#!/usr/local/bin/php
<?php
include_once ('wsse_functions.php');
echo generate_wsse_header('YOUR-USERNAME', 'YOUR-API-KEY');
```

Then call this executable in your curl function:

```
$ curl --get --header "$(/path/to/wsse.php)" https://api.omniture.com/admin/1.4/rest/?method=Company.GetReportSuites
```

**Parent topic:** [WSSE Authentication](wsse_authentication.md)


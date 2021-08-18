(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[65709],{52295:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return i},default:function(){return m}});var r=t(22122),a=t(19756),s=(t(15007),t(64983)),d=t(99536),o=["components"],i={},c={_frontmatter:i},p=d.Z;function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,s.mdx)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"using-web-service-credentials"},"Using Web Service Credentials"),(0,s.mdx)("p",null,"How to generate a valid WSSE header string and use it in an application."),(0,s.mdx)("h2",{id:"generate-a-wsse-header-string"},"Generate a WSSE Header String"),(0,s.mdx)("p",null,"This section shows an example function that will generate a valid WSSE header string ","(","for REST, SOAP, and JAVA",")","."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"REST Example Function:")," "),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},"function generate_wsse_header($username, $secret)\n{\n  date_default_timezone_set('America/Denver');\n  $nonce = UUIDv4();\n  $created = gmdate('c');\n \n  $digest = base64_encode(sha1($nonce.$created.$secret,true));\n  $b64nonce = base64_encode($nonce);\n \n  return sprintf('X-WSSE: UsernameToken Username=\"%s\", PasswordDigest=\"%s\", Nonce=\"%s\", Created=\"%s\"',\n    $username,\n    $digest,\n    $b64nonce,\n    $created\n  );\n}\n \nfunction UUIDv4()\n{\n  return sprintf('%04x%04x-%04x-%03x4-%04x-%04x%04x%04x',\n           mt_rand(0, 65535), mt_rand(0, 65535),\n           mt_rand(0, 65535),\n           mt_rand(0, 4095),\n           bindec(substr_replace(sprintf('%016b', mt_rand(0, 65535)), '01', 6, 2)),\n           mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(0, 65535)\n  );\n}\n")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"SOAP Example Function")," "),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},"function generate_wsse_header_soap($username, $secret)\n{\n  $nonce = UUIDv4();\n  $created = gmdate('c');\n \n  $digest = base64_encode(sha1($nonce.$created.$secret,true));\n  $b64nonce = base64_encode($nonce);\n \n  return sprintf('\n      <wsse:Security wsse:mustUnderstand=\\\"1\\\" xmlns:wsse=\\\"http://www.omniture.com\\\">\n          <wsse:UsernameToken wsse:Id=\\\"User\\\">\n              <wsse:Username>%s</wsse:Username>\n              <wsse:Password Type=\\\"http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordDigest\\\">%s</wsse:Password>\n              <wsse:Nonce>%s</wsse:Nonce>\n              <wsse:Created>%s</wsse:Created>\n          </wsse:UsernameToken>\n       </wsse:Security>',\n    $username,\n    $digest,\n    $b64nonce,\n    $created\n  );\n}\n \nfunction UUIDv4()\n{\n  return sprintf('%04x%04x-%04x-%03x4-%04x-%04x%04x%04x',\n           mt_rand(0, 65535), mt_rand(0, 65535),\n           mt_rand(0, 65535),\n           mt_rand(0, 4095),\n           bindec(substr_replace(sprintf('%016b', mt_rand(0, 65535)), '01', 6, 2)),\n           mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(0, 65535)\n  );\n}\n")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"JAVA Example Function:")," "),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},'import java.io.ByteArrayOutputStream;\nimport java.io.IOException;\nimport java.security.MessageDigest;\nimport java.security.NoSuchAlgorithmException;\nimport java.security.SecureRandom;\nimport java.text.SimpleDateFormat;\nimport java.util.Date;\n  \nimport sun.misc.BASE64Encoder;\n  \npublic class GatewayUtils {\n  private static SecureRandom rand = new SecureRandom();\n   \n  private static byte[] toSHA1(byte[] data) throws NoSuchAlgorithmException {\n    MessageDigest md = null;\n    md = MessageDigest.getInstance("SHA-1");\n    return md.digest(data);\n  }\n   \n  public static String generateWSSEHeader(String clientId, String clientSecret) throws IOException, NoSuchAlgorithmException {\n    BASE64Encoder b64 = new BASE64Encoder();\n    SimpleDateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss z");\n    StringBuffer wsseHeader = new StringBuffer();\n    String created = dateFormatter.format(new Date());\n    ByteArrayOutputStream digest = new ByteArrayOutputStream(40);   \n    byte[] nonce = new byte[20];\n     \n    rand.nextBytes(nonce);\n     \n    digest.write(nonce);\n    digest.write(created.getBytes());\n    digest.write(clientSecret.getBytes());\n  \n    wsseHeader.append("UsernameToken Username=\\"");\n    wsseHeader.append(clientId);\n    wsseHeader.append("\\", PasswordDigest=\\"");\n    wsseHeader.append(b64.encode(toSHA1(digest.toByteArray())));\n    wsseHeader.append("\\", Nonce=\\"");\n    wsseHeader.append(b64.encode(nonce));\n    wsseHeader.append("\\", Created=\\"");\n    wsseHeader.append(created);\n    wsseHeader.append("\\"");\n     \n    return wsseHeader.toString();\n  }\n  \n}\n')),(0,s.mdx)("h2",{id:"use-the-wsse-header-in-your-application"},"Use the WSSE Header in your Application"),(0,s.mdx)("p",null,"This section shows how to implement the header in an application."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},"$ch = curl_init();\n \n// set url\ncurl_setopt($ch, CURLOPT_URL, \"https://api.omniture.com/admin/1.4/rest/?method=Company.GetReportSuites\");\n \n// return the transfer as a string\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\n \n// set WSSE header\ncurl_setopt($ch, CURLOPT_HTTPHEADER, array(generate_wsse_header('YOUR-USERNAME', 'YOUR-API-KEY')));\n \n// $output contains the output string\n$output = curl_exec($ch);\n \n// close curl resource to free up system resources\ncurl_close($ch);\n")),(0,s.mdx)("p",null,"The variable $output will contain the json-encoded string of the response, granted the username and API key are valid."),(0,s.mdx)("p",null,"This can also be used via cURL on the command line. Create an executable file called wsse.php which outputs a valid header like this:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},"#!/usr/local/bin/php\n<?php\ninclude_once ('wsse_functions.php');\necho generate_wsse_header('YOUR-USERNAME', 'YOUR-API-KEY');\n")),(0,s.mdx)("p",null,"Then call this executable in your curl function:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},'$ curl --get --header "$(/path/to/wsse.php)" https://api.omniture.com/admin/1.4/rest/?method=Company.GetReportSuites\n')),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Parent topic:")," ",(0,s.mdx)("a",{parentName:"p",href:"wsse_authentication.md"},"WSSE Authentication")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-authentication-using-web-service-credentials-md-b6d09674917c09a4dcc3.js.map
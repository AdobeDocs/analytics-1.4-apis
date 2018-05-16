# HTTP POST Sample

This sample displays the structure of an HTTP POST request and response using the Data Insertion API.

**Note:** Do not copy-and-paste these code samples. They use generic values that you must replace with valid data appropriate to your application.

The *\[rsid\]* parameter identifies the report suite where you want to submit the data. Other values, such as `PageURL`, are sample values only.

## HTTP 1.0 POST Request

```
POST /b/ss//6 HTTP/1.0
Host: [rsid].112.2o7.net
Content-Length: 593

<?xml version=1.0 encoding=UTF-8?>
<request>
   <sc_xml_ver>1.0</sc_xml_ver>
   <pageURL>apps.sillystring.com/summary.do</pageURL>
   <referrer>http://apps.sillystring.com/summary.do</referrer>
   <ipAddress>192.168.10.1</ipAddress>
   <pageName>summary</pageName>
   <eVar2>14911</eVar2>
   <userAgent>Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; SLCC1; .NET CLR 2.0.50727; Media Center PC 5.0; .NET CLR 3.0.04506)</userAgent>
   <prop10>Brazil</prop10>
   <visitorID>1286556420966514130</visitorID>
   <timestamp>2009-03-05T01:00:01-05</timestamp>
    <reportSuiteID>[rsid]</reportSuiteID>
</request>
```

## HTTP POST Response

```
HTTP/1.1 200 OK
Date: Wed, 13 May 2009 16:26:47 GMT
X-C: ms-3.7.2
Expires: Tue, 12 May 2009 16:26:47 GMT
Last-Modified: Thu, 14 May 2009 16:26:47 GMT
Cache-Control: no-cache, no-store, must-revalidate, max-age=0, proxy-revalidate, no-transform, private
Pragma: no-cache
ETag: "4A0AF4C7-08E1-37C7F492"
Vary: *
P3P: policyref="/w3c/p3p.xml", CP="NOI DSP COR NID PSA OUR IND COM NAV STA"
xserver: www79
Connection: close
Content-Type: text/xml
<?xml version="1.0" encoding="UTF-8"?>
<status>SUCCESS</status>
```

## HTTP 1.1 POST Request

```
POST /b/ss//6 HTTP/1.1
Host: [rsid].112.2o7.net
Keep-Alive: timeout=15
Connection: Keep-Alive
Content-Length: 593

<?xml version=1.0 encoding=UTF-8?>
<request>
   <sc_xml_ver>1.0</sc_xml_ver>
   <pageURL>apps.sillystring.com/summary.do</pageURL>
   <referrer>http://apps.sillystring.com/summary.do</referrer>
   <ipAddress>192.168.10.1</ipAddress>
   <pageName>summary</pageName>
   <eVar2>14911</eVar2>
   <userAgent>Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; SLCC1; .NET CLR 2.0.50727; Media Center PC 5.0; .NET CLR 3.0.04506)</userAgent>
   <prop10>Brazil</prop10>
   <visitorID>1286556420966514130</visitorID>
   <timestamp>2009-03-05T01:00:01-05</timestamp>
   <reportSuiteID>[rsid]</reportSuiteID>
</request>
```

## HTTP 1.1 POST Response

```
HTTP/1.1 200 OK
Date: Wed, 13 May 2009 16:25:12 GMT
X-C: ms-3.7.2
Expires: Tue, 12 May 2009 16:25:12 GMT
Last-Modified: Thu, 14 May 2009 16:25:12 GMT
Cache-Control: no-cache, no-store, must-revalidate, max-age=0, proxy-revalidate, no-transform, private
Pragma: no-cache
ETag: "4A0AF468-4DF2-33AE9089"
Vary: *
P3P: policyref="/w3c/p3p.xml", CP="NOI DSP COR NID PSA OUR IND COM NAV STA"
xserver: www116
Keep-Alive: timeout=15
Connection: Keep-Alive
Content-Length: 40
Content-Type: text/xml

<?xml version="1.0" encoding="UTF-8"?>
<status>SUCCESS</status>
```

**Parent topic:** [Sample Code](../sample_code/c_sample_code.md)


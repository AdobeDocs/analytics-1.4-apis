# HTTP GET Sample

This sample displays the structure of an HTTP GET request and response using the Data Insertion API.

The *\[rsid\]* parameter identifies the report suite where you want to submit the data. Other values, such as `PageURL`, are sample values only.

**Note:** Do not copy-and-paste these code samples. They use generic values that you must replace with valid data appropriate to your application.

## HTTP 1.0 GET Request

```
GET /b/ss/[rsid]/0?g=apps.sillystring.com%2Fsummary.do&r=http%3A%2F%2Fapps.sillystring.com%
2Fsummary.do&ip=192.168.10.1&gn= summary&v2=14911&c10=Brazil&vid=1286556420966514130&ts=2009-03-05T01%3A00%3A01-05 HTTP/1.0
Host: [rsid].112.2o7.net
X-Forwarded-For: 192.168.10.1
```

## HTTP 1.0 GET Response

```
HTTP/1.0 200 OK
Date: Wed, 13 May 2009 16:26:47 GMT
X-C: ms-3.7.2
Expires: Tue, 12 May 2009 16:26:47 GMT
Last-Modified: Thu, 14 May 2009 16:26:47 GMT
Cache-Control: no-cache, no-store, must-revalidate, max-age=0, proxy-revalidate, no-transform, private
Pragma: no-cache
ETag: "49F5FD79-3E44-38021808"
Vary: *
P3P: policyref="/w3c/p3p.xml", CP="NOI DSP COR NID PSA OUR IND COM NAV STA"
xserver: www83
Connection: close
Content-Type: text/html
```

## HTTP 1.1 GET Request

```
GET /b/ss/[rsid]/0?g=apps.sillystring.com%2Fsummary.do&r=http%3A%2F%2Fapps.sillystring.com%
2Fsummary.do&ip=192.168.10.1&gn=summary&v2=14911&c10=Brazil&vid=1286556420966514130&ts=2009-03-05T01%3A00%3A01-05 HTTP/1.1
Host: [rsid].112.2o7.net
Keep-Alive: timeout=15
Connection: Keep-Alive
X-Forwarded-For: 192.168.10.1
```

## HTTP 1.1 GET Response

```
HTTP/1.1 200 OK
Date: Mon, 19 Oct 2009 17:26:24 GMT
Server: Omniture DC/2.0.0
X-C: ms-4.1.3
Expires: Thu, 01 Jan 1970 00:20:55 GMT
Last-Modified: Thu, 01 Jan 1970 00:20:56 GMT
Cache-Control: no-cache, no-store, must-revalidate, max-age=0, proxy-revalidate, no-transform, private
Pragma: no-cache
ETag: "4ADCA140-6E16-1FADA4C7"
Vary: *
P3P: policyref="/w3c/p3p.xml", CP="NOI DSP COR NID PSA OUR IND COM NAV STA"
xserver: www176
Content-Length: 43
Keep-Alive: timeout=15
Connection: Keep-Alive
Content-Type: image/gif
```

**Parent topic:** [Sample Code](../sample_code/c_sample_code.md)


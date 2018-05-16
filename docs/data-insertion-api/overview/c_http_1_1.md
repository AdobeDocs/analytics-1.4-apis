# HTTP 1.1

Adobe data collection servers support HTTP 1.1.

Using HTTP 1.1, you can send multiple POST requests in a single session. However, when using HTTP 1.1, be aware of the following:

-   While a report suite is collecting time-stamped data, it cannot collect data through the standard JavaScript beacon method.
-   Adobe data collection servers limit the number of HTTP requests per HTTP session. To account for this, make sure your application can detect closed sessions and respond appropriately.
-   Adobe data collection servers observe HTTP 1.1 rules when chunking content. Make sure your application properly interprets the chunking numbers provided in the Online Marketing Suite server response to your data insertion. For example, in the following HTTP 1.1 response, the numbers `68` and `0` are chunking numbers, which represent the number of bytes to read before the next chunk.
-   The data insertion load balancers are optimized for small packets. As a result, the load balancer will frequently break a persistent HTTP connection and cause the server to appear unresponsive. Your insertion process should check for a failed connection before upload and re-establish the connection as necessary.


```
TTP/1.1 200 OK Date: Thu, 07 Dec 2008 15:48:51 GMT Expires: Wed, 06 Dec 2008 15:48:51 GMT Last-Modified: Fri, 08 Dec 2008 15:48:51 GMT Cache-Control: no-cache, no-store, must-revalidate, max-age=0, proxy-revalidate, no-transform, private Pragma: no-cache ETag: "457837E3-649A-4BBB9314" Vary: * P3P: policyref="/w3c/p3p.xml", CP="NOI DSP COR NID PSA OUR IND COM NAV STA" Transfer-Encoding: chunked Content-Type: text/xml  68 <?xml version="1.0" encoding="UTF-8"?> <status>FAILURE</status> <reason>NO pagename OR pageurl</reason> 0 
```


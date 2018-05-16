# Error Codes

Describes the error codes sent by Analytics Live Stream.

|Error Code|Description|
|----------|-----------|
|302|Found. The URL is valid. However, you are being asked to redirect to a different location. Please connect to the URL specified in the HTTP Location header. More information about the 302 redirect can be found at [HTTP 302](http://en.wikipedia.org/wiki/HTTP_302).|
|400| Bad request, invalid max connections. Verify that you have specified between 1 and 8 connections in the `maxConnections` parameter. |
|401| Unauthorized. Verify your access token is correct and that you have permission to access the stream. |
|404| Not found, likely due to an invalid stream URL. |
|405| Invalid request type. Only HTTP GET requests are accepted. Verify that you are requesting your stream via HTTP GET. |
|406| Compression was not enabled on the request \(compression is required\). Make sure your request contains the `Accept-Encoding: gzip` HTTP header. |
|409| Conflict. Either Maximum connections reached for this stream, or Invalid connection count specified. Check the `error_description` in the JSON response for details. Verify that you have specified between 1 and 8 connections in the `maxConnections` parameter, that each connection includes this parameter and value, and that you have not exceeded this number of connections. |
|500| Internal server problems. Please [contact support](http://microsite.omniture.com/t2/help/en_US/sc/implement/?f=contact_and_legal). |
|503| No hits have been received through Livestream processing. Try again in a few minutes, and ensure that the attached report suite is receiving data through data collection. |
|505| Invalid protocol. Only version HTTP/1.1 is supported. |


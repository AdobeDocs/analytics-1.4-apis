# Connecting to Analytics Live Stream

You can connect to Analytics Live Stream using an HTTP GET request. After the connection is successful, hit data is sent over the connection as it is collected, and continues until the connection is closed or disconnected.

## Request Authentication

Analytics Live Stream uses [OAuth2 authentication](https://marketing.adobe.com/developer/documentation/authentication-1/auth-overview-1). To authenticate, specify a scope of '`firehose`' when you request an [authentication code](https://marketing.adobe.com/developer/documentation/authentication-1/auth-register-app-1), and then provide the bearer token you receive when you complete the authentication flow in the HTTP Authorization header.

## Request Headers

Your request must contain the `Accept-Encoding: gzip` HTTP header and the `HTTP Authorization: Bearer [ACCESS_TOKEN]` HTTP header.

 

## Request Max Connections

You must specify the max number of connections to enable for the stream during connection using the `maxConnections` query parameter:

```
/api/1/stream/<stream-name>?maxConnections=[1-8]
```

If this parameter is not specified, a single connection is enabled for the stream.

If multiple connections are enabled, each connection must include this parameter with the same value. For example, to enable 2 connections, both connections must specify `maxConnections=2`.

## Example Request

```
curl --location --compressed --header “Authorization: Bearer [ACCESS_TOKEN]” [STREAM_URL]
```

## Reconnection Process

If the connection is closed, you can reconnect to the same endpoint and continue processing the stream. If the reconnect request is received within a few minutes of disconnect, the stream starts at the last record received.

## Request Details

|Query Parameter|Expected Results|
|---------------|----------------|
|Request Timeframes| On initial connection, you'll receive all new data from the time of connection. |
|Data Recency| Typically within 5 minutes. |
|Hit Order| Hits are sent as they are processed. There is no guarantee to the order of hits. A timestamp is provided on each hit. |
|Compression| Data is always sent using gzip compression. |
|Transfer encoding| Data is sent using [Chunked Transfer Encoding](http://en.wikipedia.org/wiki/Chunked_transfer_encoding). There can be more than one record per chunk, each record is separated by a CRLF. Many http client libraries handle chunked transfer encoding transparently, including: Apache-httpclient java.net.URLConnection Python and ruby HTTP clients libcurl |
|Multiple connections|If multiple connections are made to the same stream, data is multiplexed across each connection.|
|Connection limits|8 connections maximum.|
|Multiple users connecting to the same stream|Connections are based on the stream, not the user. If multiple users connect to the same stream, the connection is multiplexed across each stream with no regard to the user account making the connection.|
|Hit distribution across streams|An attempt is made to distribute hits across all streams, though hits are not guaranteed to be evenly distributed across streams.|
|Hit grouping by visitor ID|All requests from a single visitor ID are sent to the same connection, however, the order of those events are not guaranteed. You can use the `timestamp` to order the field.|
|Using the same stream in multiple applications|If you need to consume the full stream in multiple applications, you should copy the data or store it for use by other applications. We recommend sharing streams wherever possible to reduce bandwidth and processing requirements.|
|Duplicate records|The likelihood of receiving duplicate records increases when reconnecting or opening additional connections. You can key off the `hit_id` if you need to process each hit uniquely.|
|Empty records|It is possible to receive hits that contain only a newline. These hits can be ignored during processing.|

## Handling Redirection

You might be asked to redirect to a different URL. This redirect is noted with an HTTP response code of `302`. Additionally, the HTTP response `Location` header is populated with a new URL to which you can connect.

Ensure that your Live Stream client handles 302 redirects. Many libraries handle redirects transparently. Others require some logic to properly handle redirects. When connecting to the new URL, ensure that your application is passing along all HTTP headers, such `Authorization` and `Accept-Encoding`.

## Reset Parameters for Analytics Live Stream

Analytics Live Stream HTTPS streaming connections support the use of a reset query parameter. This parameter can be used to reposition the point in the stream from which clients start consuming. In order for the parameter value to take effect, all client connections to a live stream URL must be closed prior to connecting using the parameter.

|Query Parameter|Expected Results|
|---------------|----------------|
| `<not set>` |The first time the client application connects to the stream, messages will stream from the end of the stream. On subsequent connections, clients will pick up reading the stream where they last left off.|
| `?reset=largest` |The client application will start receiving messages with the largest available timestamp \(the most recent data\).|
|`?reset=smallest` |The client application with start receiving messages with the smallest available timestamp \(the least recent data\). The smallest timestamp will vary based on time of day, traffic, and current retention settings.|


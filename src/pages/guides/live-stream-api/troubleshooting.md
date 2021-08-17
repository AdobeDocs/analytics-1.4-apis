# Troubleshooting
## 302 with a `Location` Header
Sometimes, Livestream will redirect the client to a different endpoint. Most clients have options that allow them to automatically follow redirection instructions from the server.

When following a redirect, ensure that the client sends the `Authorization` and `Accept-Encoding` headers again to the new URL.

## 400 Bad Request
Make sure that any parameters provided on the GET string have proper values. For example, `maxConnections=9` could produce this error.

## 401 Not Authorized
Make sure the `Authorization: Bearer [JWT_TOKEN]` header is being sent in the request (where [JWT_TOKEN] is replace by your JWT token).

Make sure that the [JWT token](https://www.adobe.io/authentication/auth-methods.html#!AdobeDocs/adobeio-auth/master/AuthenticationOverview/ServiceAccountIntegration.md#step-4-try-it) was _recently created_. Tokens do expire as well and may need to be recreated.

Make sure the service account within the Adobe.io console has the correct services associated with it. You can check this by clicking the 'Services' tab when viewing the client.

Keep in mind, the user accessing Adobe.io may not have access to the required Analytics services. If needed, contact your organization's Experience Cloud administrator to request access.

## 404 Not Found
Make sure that your endpoint URL is correct. Customer Care can verify the URL if provided with the data center, login company, and report suite associated with the stream.

## 405 Invalid Request Type
Make sure that the REST GET method is used. Other methods like POST, PUT, etc are not supported.

## 406 Not Acceptable
Make sure that required headers are included in your request:
* `Accept-Encoding: deflate, gzip`

## 409 Conflict
Check the `error_description` field in the response for details. Verify that between 1 and 8 connections were provided in the `maxConnections` parameter, that each client includes this parameter with the same value, and that the number of clients connecting doesn't exceed the number provided in the `maxConnections` parameter.

## 500 Internal Server Error
Livestream failure. Contact Customer Care for assistance.

## 503 Service Unavailable
No hits have been received by Livestream for processing from the report suite. Ensure that the report suite associated with the stream is correct and that it is receiving traffic.

## 505 Invalid Protocol
Ensure the client is only using `HTTP/1.1` to connect. Only `HTTP/1.1` is supported by Livestream.

## No Data or Garbage Streamed/Returned
If the client was able to successfully connect, but no data is being streamed, its likely that the report suite linked to the Livestream endpoint isn't collecting data at the moment. You can verify this by logging into the Analytics UI and retrieving appropriate reports for the last two hours.

If the client was able to successfully connect, but only garbage is returned, ensure that your client can process gzip data. Data from Livestream is compressed for efficiency reasons.

## The Client Can't Keep up with the Stream
Sometimes, traffic volumes can overwhelm a single client. The following tips may be helpful in this situation.

### Enable Hit Smoothing
Hit smoothing can be enabled using the GET parameter `smoothing=1`. When this parameter is used, Livestream will use a server-side buffer in an attempt to reduce traffic spikes and even-out the flow of records to the client. The size of this buffer can be defined using the `smoothingBucketSize=[SECONDS_TO_BUFFER]`. A larger buffer will generally result in a smoother stream and fewer spikes. The maximum buffer size is 7200 seconds. 

### Improve Client Processing Efficiency
Clients that do a lot of aggregation, statistical modeling, etc, may struggle to keep up with the stream.

### Use multiple clients
It is possible to have multiple clients connect to the same stream. This is done using the `?maxConnections=[1-8]` GET string parameter.

For example - the connection endpoint for client #1 would be:
```curl --location-trusted --compressed -H "Authorization: Bearer eyJ4NXUiO...e1OvbElA" https://livestream.adobe.net/api/1/stream/adobe-livestream-endpoint-name?maxConnections=2```

The endpoint for client #2 would be the same:
```curl --location-trusted --compressed -H "Authorization: Bearer eyJ4NXUiO...e1OvbElA" https://livestream.adobe.net/api/1/stream/adobe-livestream-endpoint-name?maxConnections=2```

The maximum number of clients is 8.

> NOTE: Livestream will group visitor IDs to the same client to make data aggregation easier.

## Client has Crashed or Disconnected
It may be necessary to reconnect to Livestream due to a crash, expired JWT token, or client update. This can be done to ensure that data isn't lost during reconnection by simply reconnecting within a few minutes of the disconnection.

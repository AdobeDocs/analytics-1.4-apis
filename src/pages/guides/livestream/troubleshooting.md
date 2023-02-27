# Troubleshooting

This document provides help for troubleshooting issues with the Livestream API.


## Status code help

The following section provides tips for working with unsuccessful request status codes.

### 302 with a `Location` header

Sometimes, Livestream will redirect the client to a different endpoint. Most clients have options that allow them to automatically follow redirection instructions from the server.

When following a redirect, ensure that the client sends the `Authorization` and `Accept-Encoding` headers again to the new URL.

### 400 Bad request

Make sure that any parameters provided on the GET string have proper values. For example, `maxConnections=9` can produce an error because `8` is the highest value permitted.

### 401 Not authorized

Make sure the `Authorization: Bearer {JWT_TOKEN}` header is being sent in the request (where {JWT_TOKEN} is replaced by your specific JWT token).

Make sure that the [JWT token](https://www.adobe.io/authentication/auth-methods.html#!AdobeDocs/adobeio-auth/master/AuthenticationOverview/ServiceAccountIntegration.md#step-4-try-it) was _recently created_. Tokens expire and often need to be recreated.

Make sure the service account within the Adobe Developer console has the correct services associated with it. You can check this by clicking the **Services** tab when viewing the client.

Keep in mind that the user accessing the Adobe Developer console may not have access to the required Analytics services. If needed, contact your organization's Experience Cloud administrator to request access.

### 404 Not found

Make sure that your endpoint URI is correct. Customer Care can verify the URI if provided with the data center, login company, and report suite ID associated with the stream.

### 405 Invalid Request Type

Make sure that the REST GET method is used. Other methods like POST, PUT, etc are not supported.

### 406 Not acceptable

Make sure that your API call includes the header `"Accept-Encoding: deflate, gzip"`. If using curl, you can include the `--compressed` flag to achieve this result. The Livestream API does not support returning uncompressed data.

### 409 Conflict

Check the `error_description` field in the response for details. Verify that between `1` and `8` connections were provided in the `maxConnections` parameter, that each client includes this parameter with the same value, and that the number of clients connecting doesn't exceed the number provided in the `maxConnections` parameter.

### 500 Internal server error

Livestream failure. Contact Customer Care for assistance.

### 503 Service unavailable

No hits have been received by Livestream for processing from the report suite. Ensure that the report suite associated with the stream is correct and that it is receiving traffic.

### 505 Invalid protocol

Ensure the client is only using `HTTP/1.1` to connect. Only `HTTP/1.1` is supported by Livestream.

## Other issues

The following section provides tips for working with other possible Livestream API issues:

### No Data or garbage streamed/returned

If the client was able to successfully connect, but no data is being streamed, it is likely that the report suite linked to the Livestream endpoint is not collecting data at the moment. You can verify this by logging into the Analytics UI and retrieving appropriate reports for the last two hours.

If the client was able to successfully connect, but only garbage is returned, ensure that your client can process Gzip data. Data from Livestream is compressed for efficiency reasons.

### Client can't keep up with stream

Sometimes, traffic volumes can overwhelm a single client. The following tips may be helpful in this situation.

#### Enable hit smoothing

Hit smoothing can be enabled using the query parameter `smoothing=1`. When this parameter is used, Livestream uses a server-side buffer to reduce traffic spikes and smooth the flow of records to the client. The size of this buffer is defined using the `smoothingBucketSize` query parameter. A larger buffer generally results in a smoother stream and fewer spikes. The maximum buffer size is 7200 seconds. 

#### Improve client processing efficiency

Clients that heavily aggregate or perform statistical modeling, etc, may struggle to keep up with the stream.

#### Use multiple clients

You can use multiple clients to connect to the same stream by using the query parameter `?maxConnections=[1-8]`. All clients connect using the same URI.

### Client has Crashed or Disconnected

If your client crashes or disconnects, you can reconnect within a few minutes of the disconnection to continue receiving data.

# Getting Started with Adobe Analytics Livestream
Livestream is a reporting feature in Adobe Analytics that allows a client to receive traffic processed by Adobe Analytics in real-time. Traffic is streamed to the client on a hit or impression basis, in the same order and rate that hits are processed.

This feature can be useful to those building:
* A real-time dashboard that represents actions visitors are taking in a mobile app or web site.
* A visitor-level integration that sends information to personalization or marketing platforms in real-time.
* A forecasting or anomaly detection service that updates a model and produces forcasts/anomaly reports in real-time.

The following table outlines the tasks required to get started using Adobe Analytics Livestream.

## Create a Client
An [Adobe.io Service Account](https://www.adobe.io/authentication/auth-methods.html#!AdobeDocs/adobeio-auth/master/AuthenticationOverview/ServiceAccountIntegration.md) needs to be created. This will be used by the client to authenticate and connect to the stream. After creating this account, make a note of the _technical account email address_. This will be used later to link the the service account to a Livestream endpoint.

## Identify What Should Be in the Stream
Review the list of [Metrics and Dimensions](metrics_dimensions.md#) and identify what should appear in your stream. For report suites with very high volume, it is important to only include metrics and dimensions that are going to be used.

## Contact Customer Care to Provision the Stream
Customer Care will need the following information to provision the stream:
* Data Center Location (London, Pacific North West, Singapore)
* Login Company
* A Report Suite ID for each stream being requested
* Daily and Monthly Traffic Volume Averages
* The Adobe.io technical account email address

## Connect to the Stream
A connection request will look something like the following:
```curl --location-trusted --compressed -H "Authorization: Bearer [JWT_TOKEN]" "[STREAM_URL]"```

* `--location-trusted` tells CURL to follow redirects and send the authorization header again when a redirect happens
* `--compressed` tells CURL to send the request header `Accept-Encoding: deflate, gzip`. Livestream only supports compressed responses in order to reduce bandwidth and avoid overwhelming clients.
* `-H "Authorization: Bearer [JWT_TOKEN]` is where the JWT token [that was generated](https://www.adobe.io/authentication/auth-methods.html#!AdobeDocs/adobeio-auth/master/AuthenticationOverview/ServiceAccountIntegration.md#step-4-try-it) using your service account should go. This authenticates the client with Livestream.

> NOTE: The Adobe.io JWT tool isn't required to generate a JWT token. This can be done from within the client. [Example code can be found here for multiple platforms](https://www.adobe.io/authentication/auth-methods.html#!AdobeDocs/adobeio-auth/master/JWT/samples/samples.md).

Here is an example of a request (with the JWT token removed):
```curl --location-trusted --compressed -H "Authorization: Bearer eyJ4NXUiO...e1OvbElA" https://livestream.adobe.net/api/1/stream/adobe-livestream-endpoint-name```

Once connected to the stream, impression data will be streamed in a line-delimited JSON format and reflects data currently being collected by a report suite. For an example of a record returned in from Livestream, see the 'Livestream Sample JSON output' section of the [Metrics and Dimensions](../live-stream-api/metrics_dimensions.md) page.

If no data is currently being collected yet, the client will connect but no data will appear in the stream.

## Optional Parameters
|GET Parameter      |Description|Allowed Values|
|-------------------|-----------|-------|
|maxConnections     |Indicates how many clients will connect to the same stream.|An integer between 1 and 8|
|reset              |Indicates age of data to return during initial connection/reconnection|`smallest` will stream the oldest possible data. `largest` will stream the newest possible data.|
|smoothing          |Smooths the rate of records returned by Livestream by using a server-side buffer.|`1` to enable smoothing. Remove the parameter to disable it.|
|smoothingBucketSize|The size of the time window to use to determine the average traffic rate that is used in smoothing data returned by Livestream.|An integer between 1 and 7200. The default is 270 seconds.|

## Additional Links
* [Metrics and Dimensions](metrics_dimensions.md#)
* [FAQ](faq.md#)
* [Troubleshooting](troubleshooting.md)

# Getting Started with Adobe Analytics Livestream

Livestream is a reporting feature in Adobe Analytics that allows a client to receive traffic processed by Adobe Analytics in real-time. Traffic is streamed to the client on a hit or impression basis, in the same order and rate that hits are processed.

This feature can be useful to those building:
* A real-time dashboard that represents actions visitors are taking in a mobile app or web site.
* A visitor-level integration that sends information to personalization or marketing platforms in real-time.
* A forecasting or anomaly detection service that updates a model and produces forecasts/anomaly reports in real-time.

## Create a Client

Create an [Adobe.io Service Account](https://www.adobe.io/authentication/auth-methods.html#!AdobeDocs/adobeio-auth/master/AuthenticationOverview/ServiceAccountIntegration.md). This account is used by the client to authenticate and connect to the stream. After creating this account, make a note of the _technical account email address_. This email is used later to link the the service account to a Livestream endpoint.

## Identify What Should Be in the Stream

Review the list of [dimensions and metrics](variable-reference.md) to identify what you want to appear in your stream. For report suites with very high volume, it is important to only include dimensions and metrics that you intend to use.

## Contact Customer Care to Provision the Stream

Customer Care requires all of the following information to provision the stream:
* Data Center Location (London, Pacific North West, Singapore)
* Login Company or IMS organization
* A Report Suite ID for each stream requested
* Daily and Monthly Traffic Volume Averages
* The Adobe.io technical account email address

## Connect to the Stream

A connection request looks similar to the following:

<CodeBlock slots="code" repeat="1" languages="CURL"/>

```sh
curl -X GET "https://livestream.adobe.net/api/1/stream/adobe-livestream-endpoint-name" \
    -H "x-api-key: {CLIENTID}" \
    -H "Authorization: Bearer {ACCESSTOKEN}" \
    --location-trusted \
    --compressed
```

Once connected to the stream, impression data is streamed in a line-delimited JSON format and reflects data currently collected by a report suite. See [Livestream sample JSON output](example-output.md) to see what a typical row of data might look like.

If there is no data actively flowing into the report suite, the client connects but no data appears in the stream.

## Optional query parameters

Query parameter | Description
---|---
**`maxConnections`** | Allows the distribution of hits across multiple clients. This number determines the maximum number of clients that can connect to the same stream. Valid values include `1` through `8`.
**`reset`** | The age of data to return during the initial connection/reconnection. Valid values include `smallest` (streams the oldest possible data) and `largest` (streams the newest possible data).
**`smoothing`** | Smooths the rate of records returned by Livestream using a server-side buffer. Disabled by default; set to `1` to enable smoothing.
**`smoothingBucketSize`** | The size of the time window, in seconds, that determines the average traffic rate used in smoothing. Supported values include integers between `1` and `7200`. The default is `270` seconds. If `smoothing` is omitted, this parameter does nothing.

# Getting started with Adobe Analytics Livestream

Livestream is a reporting feature in Adobe Analytics that allows a client to receive traffic processed by Adobe Analytics in real-time. Traffic is streamed to the client on a hit or impression basis, in the same order and rate that hits are processed.

This feature is useful for those building:

* A real-time dashboard that represents actions visitors are taking in a mobile app or web site.
* A visitor-level integration that sends information to personalization or marketing platforms in real-time.
* A forecasting or anomaly detection service that updates a model and produces forecasts/anomaly reports in real-time.

## Create an Adobe Developer Console account

To start, create an [Adobe Developer Console](https://www.adobe.io/authentication/auth-methods.html#!AdobeDocs/adobeio-auth/master/AuthenticationOverview/ServiceAccountIntegration.md) account. This account provides the credentials to authenticate and connect to the stream. After creating this account, make a note of the **Technical Account Email**. This email is used later to link the service account to a Livestream endpoint.

## Identify and understand the data structure for the stream

Review the list of [dimensions and metrics](variable-reference.md) to identify and understand the data structure for the stream. The stream sends a new object in response to a GET call every time a report suite receives another hit. The stream outputs all applicable dimensions and metrics for the report suite. 

## Contact Customer Care to provision the stream

[Customer Care](https://helpx.adobe.com/contact.html) requires all of the following information to provision the stream:

* Data center location (London, Pacific North West, Singapore)
* Login company or IMS organization
* A report suite ID for each stream requested and for which data is being generated
* Estimated daily and monthly traffic volume averages
* The [Adobe Developer Console](https://developer.adobe.com/console/home) technical account email address

## Create an application to consume the API service

Depending on the use case for your stream, create an application for the service. This application should include the business logic you want to use. 

## Connect to the stream

To connect to the steam, make a request that looks similar to the following:


```
curl -X GET "https://livestream.adobe.net/api/1/stream/adobe-livestream-{endpoint-name}" \
    -H "x-api-key: {CLIENTID}" \
    -H "Authorization: Bearer {ACCESSTOKEN}" \
    --location-trusted \
    --compressed
```

When contacting Customer Care for provisioning, you will receive the complete URI to connect to the stream, including the `{endpoint-name}`, as shown in the example above. The URI will also include the report suite ID that you supply to Customer Care. 

## Review the stream output

Once connected to the stream, impression data is streamed with [Gzip compression](https://www.gnu.org/software/gzip/manual/gzip.html) (**`.gz`**) in JSON format and reflects data currently collected by the report suite. Data is See [Livestream sample JSON output](example-output.md) to view a sample of a typical response.

If there is no data actively flowing into the report suite, the client connects but no data appears in the stream.

## Use optional query parameters

You can also include query string parameters in your call, as described below:

Query parameter | Description
---|---
**`maxConnections`** | Allows the distribution of hits across multiple clients. This number determines the maximum number of clients that can connect to the same stream. Valid values include `1` through `8`.
**`reset`** | The age of data to return during the initial connection/reconnection. Valid values include `smallest` (streams the oldest possible data) and `largest` (streams the newest possible data).
**`smoothing`** | Smooths the rate of records returned by Livestream using a server-side buffer. Disabled by default; set to `1` to enable smoothing.
**`smoothingBucketSize`** | The size of the time window, in seconds, that determines the average traffic rate used in smoothing. Supported values include integers between `1` and `7200`. The default is `270` seconds. If `smoothing` is omitted, this parameter does nothing.

## Additional notes

* Your site must support redirects to receive the output.
* The output data in Livestream is already processed through [VISTA](https://experienceleague.adobe.com/docs/analytics/technotes/vista.html) and processing rules.

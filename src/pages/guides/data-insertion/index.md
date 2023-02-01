# Adobe Analytics Data Insertion API

The Data Insertion API provides a mechanism for server-side data collection and submission to Adobe data collection servers. Instead of using AppMeasurement installed on each web page, server-side data collection collects data based solely on API requests and responses. While this implementation method cannot capture all data that is available via page-based beacons, it provides valuable insight into user activity without the overhead associated with attaching JavaScript to every page.

<InlineAlert variant="note" slots="text"/>

Data Insertion API and [Bulk Data Insertion API](https://developer.adobe.com/analytics-apis/docs/2.0/guides/endpoints/bulk-data-insertion/) are both methods to submit server-side collection data to Adobe Analytics. Data Insertion API calls are made one event at a time. Bulk Data Insertion API accepts CSV formatted files containing event data, one event per row. If you are working on a new implementation of server-side collection, Adobe recommends using the Bulk Data Insertion API.

The Data Insertion API supports `GET` and `POST` API calls.

## HTTP POST

Sending `POST` API calls requires an XML body containing the desired variables. JSON body is not yet supported.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,XML"/>

#### Request

```sh
curl -X POST "https://example.sc.omtrdc.net/b/ss//6" \
    -H "Accept: application/xml" \
    -H "Content-Type: application/xml" \
    -d "<?xml version=1.0 encoding=UTF-8?>
        <request>
            <pageURL>https://example.com</pageURL>
            <pageName>Data Insertion API test (POST)</pageName>
            <visitorID>1286556420966514130</visitorID>
            <reportSuiteID>examplersid</reportSuiteID>
        </request>"
```

#### Response

```xml
<?xml version="1.0" encoding="UTF-8"?>
<status>SUCCESS</status>
```

## HTTP GET

Sending `GET` API calls requires the desired variables in the URL's query string. Sending data via `GET` reduces bandwidth, but does not provide a detailed response.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,HTTP"/>

#### Request

```sh
curl -X GET "https://example.sc.omtrdc.net/b/ss/examplersid/0?g=https%3A%2F%2Fexample%2Ecom&pageName=Data%20Insertion%20API%20test%20%28GET%29&vid=1286556420966514130"
```

#### Response

```text
200 OK
```

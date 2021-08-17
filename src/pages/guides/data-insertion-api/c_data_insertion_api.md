# Overview

The Data Insertion API supports HTTP POST and HTTP GET for submitting data to Adobe Experience Cloud servers.

The Data Insertion API provides a mechanism for server-side data collection and submission to Experience Cloud servers. Instead of using JavaScript beacons on each Web page to transmit visitor data to Experience Cloud servers, server-side data collection collects data based solely on Web browser requests and Web server responses.

While this data capture method cannot capture all data that is available via page-based beacons, it provides valuable insight into user activity on your Web pages without the overhead associated with attaching a JavaScript beacon to every Web page.

**Note:** Data Insertion API and [Bulk Data Insertion API](https://www.adobe.io/apis/experiencecloud/analytics/docs.html#!AdobeDocs/analytics-2.0-apis/master/bdia.md) are both methods to submit server-side collection data to Adobe Analytics. Data Insertion API calls are made one event at a time. Bulk Data Insertion API accepts CSV formatted files containing event data, one event per row. If you are working on a new implementation of server-side collection, we recommend using Bulk Data Insertion API.

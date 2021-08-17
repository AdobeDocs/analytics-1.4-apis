# Overview

The Analytics Reporting API gives you programmatic access to Analytics's core report data. The Reporting API lets you create customized reports that address your specific needs. The Reporting API also lets you use Analytics data in third-party applications, such as an intranet site or a company-branded application. You can access the data to create calculated metrics, or format the data as needed. The data is as up-to-date as the data in Analytics.

The Analytics Reporting API can access only Analytics data. It cannot access the relational data that is available in tools such as Ad hoc analysis and Data Warehouse.

**Note:** The Reporting API uses the generic term "breakdown" to refer to both "correlations" \(Traffic metrics\) and "sub-relations" \(Commerce metrics\).

## November 2013

Added support for `product` and `trackingcode` \(i.e. Campaign\) to real-time reports.

Added support for classifications to real-time reports.

See [Real Time Reports](../reference/c_real_time.md#).

## June 2013

View orders, revenue, units, custom events, and instances with up to three correlated dimensions to create granular, real time dashboards with seconds of latency. See [Real Time Reports](../reference/c_real_time.md#).

## May 2013

Added a `segments` option to [reportDescription](../data_types/r_reportDescription.md#) that lets you define segments inline with reports. See [Inline Segmentation](../reference/c_segments.md#).

Added a `currentData` flag to [reportDescription](../data_types/r_reportDescription.md#) that lets you include [current data](http://microsite.omniture.com/t2/help/en_US/reference/index.html?f=data_latency) in the report.

## February 2013

Added an `anomalyDetection` option to [reportDescription](../data_types/r_reportDescription.md#) that returns upper bounds, lower bounds, and forecast data for trended and overtime reports. See [Anomaly Detection](../reference/c_anomaly.md#).

## January 2013

Hierarchy reports are now available in the Analytics Reporting API. See [Analytics Elements](../reference/r_elements.md#) for the syntax required to retrieve hierarchy elements in a report.

## November 2012

Added the following parameters to the [reportResponse](../data_types/r_reportResponse.md#) data type returned by [GetReport](../methods/r_getReport.md#).

-   waitSeconds - the time in seconds this report waited in the queue before being run. A high value here is indicative of a large amount of report requests for a single company.
-   runSeconds - the time in seconds this report took to process and return data. A high value here is indicative of a complex report or large date range.

## October 2012

-   Added a Validate option to the report queue methods to pre-validate report request to prevent reports with errors from being placed in the queue.
-   The cPage element and cVisits, cVisitors, cEntries, cExits metrics are deprecated. Update your reports to use page, visits, visitors, entries, and exits respectively.

## September 2012

**Video Metrics** 

Added the following Commerce Social metrics:

-   socialmentions
-   socialreach
-   socialtotalsentiment
-   sociallikeadds
-   socialpageviews
-   socialpostviews
-   socialfbstorytellers
-   socialfbstories
-   socialpubrecommends
-   socialpubcomments
-   socialpubsubscribers
-   socialpubposts

Added the following Social report elements:

-   socialterm
-   socialcontentprovider
-   socialauthor
-   sociallink
-   socialtermslist
-   socialaveragesentiment
-   socialproperty
-   socialassettrackingcode

**Video Metrics** 

Added the following Commerce video metrics:

-   videotime
-   videostart
-   videocomplete
-   videosegmentviews
-   videoadstart
-   videoadcomplete

Added the following video report elements:

-   video
-   videoad
-   videosegment
-   videocontenttype

## June 2012

**Commerce Visits and Pathing Metrics** 

The following metrics are now available in the Report API.

Commerce Visits/Visitors:

-   cVisits
-   cVisitors

Commerce Pathing Metrics:

-   cEntries
-   cExits
-   bounces
-   bounceRate
-   totalTimeSpent

Traffic:

-   bots

**Segments** 

Analytics users can generate reports based on segments. In version 1.3 of the API, [reportDescription](../data_types/r_reportDescription.md#) was expanded with a segment ID parameter that lets you provide the segment for which you want to report.

**IP Restrictions** 

Any IP restrictions that are defined in Analytics are enforced when using the reporting API. If you have selected to enforce IP restrictions, make sure that any IP address accessing the report APIs is not restricted.

**Report Timeout** 

Reports have a mandatory timeout of 24 hours.

## Data Types

A Data Type defines structure for organizing and containing a specific set of data. Data types can consist of two or more elements, each of which may be an array, enumeration, structure, or "primitive" element. Adobe defines data types using the following convention:

`<namespace>:<type>` 

For example:

-   `xsd:int` indicates that the data type is part of the `xsd` namespace \(XML Schema Definition\), and that the type is `int` \(Integer\). XML defines certain primitive \(common\) data types such as int, string or date. The [XML Schema Definition](http://www.w3.org/TR/xmlschema11-2/) describes all primitive data types.
-   `code_items` indicates that the data type is part of the `tns` namespace \(a private Adobe namespace\), and that the custom data type is `code_items`. The `tns` namespace prefixes all Marketing Cloud's custom data types.


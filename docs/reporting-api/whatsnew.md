# What's New

 

## Deprecation Notices for Version 1.2 and 1.3

Version 1.2 of the Web Services API was officially deprecated on February 20, 2014. It will reach end-of-life on September 15, 2016. At that time, Adobe will remove the ability of the API servers to respond to version 1.2 API requests. Any API requests made to the https://api.omniture.com/admin/1.2 endpoint will return a 410 error. Customers have until the end-of-life date to upgrade from the version 1.2 API to the version 1.4 API to prevent an outage in their API applications.

Version 1.3 will be officially deprecated as of September 15, 2016. Customers are encouraged to migrate to the 1.4 API to leverage the improvements described on this page.

See the [API Support Policy](https://marketing.adobe.com/developer/get-started/api-support-policy) page for more information.

## May 21 2015

Data warehouse data is now available through the Reporting API.

See Data Warehouse \> Methods \> ReportQueue.

## May 22, 2014

The following report types are now available:

-   [Real-Time Reports](real_time.md#) 
-   [Summary Reports](summary_report.md#) 

An `elementDataEncoding` parameter was added to [reportDescription](data_types/r_reportDescription.md#) to help resolve report data encoding issues.

**Segmentation Changes** 

With the release of Adobe Analytics [unified segmentation](https://marketing.adobe.com/resources/help/en_US/analytics/segment/?f=seg_transition), the following changes apply to segments in the 1.4 Admin and Reporting APIs:

**Report.Queue** 

-   Accepts existing segments and new segments created in the new Segment Builder UI.
-   Allows applying legacy Pre-Configured and Suite segments without validation.

**ReportSuite.GetSegments and ReportSuite.GetSettings** 

-   Returns only segments that appear in the new Segment Builder UI. Most segments are migrated to the Segment Builder automatically, with the exception of some pre-defined segments.
-   All segments available for the authenticated user are returned.
-   Pre-Configured and Suite segments are no longer returned. These segments are now templates, so you'll need to create a custom segment based on a template to use these segments.

## Changes in Version 1.4

## OAuth authentication

Version 1.4 of the reporting API supports OAuth2 authentication, and maintains support for the version 1.3 password digest authentication mechanism.

## Pathing reports

You can now run [pathing and fallout reports](pathing.md#) in the reporting API.

## Removal of separate methods to generate different report types

Report types are now determined by the parameters of the `reportDescription` according to the following table:

| | |
|--|--|
|Overtime Report|No elements with a dateGranularity specified.|
|Ranked Report|1 or more elements with no dateGranularity specified.|
|Trended Report|1 or more elements with a dateGranularity specified.|
|Pathing Report|Element in the pattern parameter.|
|Fallout Report|Element in the checkpoint parameter.|

The type derived is then returned in the result data as: ranked, trended, overtime, pathing, or fallout.

## Calculated metrics now included in Report.GetMetrics

 [GetMetrics](methods/r_GetMetrics.md#) now returns configured calculated metrics for the report suite along with the other reporting API metrics.

The IDs of these metrics are in the form "`f:<number>`" where <number\> is some integer value. The metric type, decimal precision, and formula \(where applicable\) are included for all metrics.

Conversion of formulas and validation against metric and element settings are now handled by the Reporting API.

## Full Hierarchy reports support

hier\# elements are now fully supported in both ranked and trended reports.

## New metrics

-   returnvisits
-   returnvisitsdaily

 **Removed:** 

-   cpageviews
-   cvisits
-   cvisitor

## New elements

-   pagefallout
-   pagepaths
-   sitesectionfallout
-   sitesectionpaths
-   prop\#path \(Note: For Custom Traffic Vars with Pathing enabled\)
-   prop\#fallout \(Note: For Custom Traffic Vars with Pathing enabled\)

 **Removed:** 

-   cpage
-   listvar4
-   listvar5

## Default report description parameters

 **metrics** 

If the list of metrics is left empty, the default metric of "pageviews" is used.

 **date/dateFrom/dateTo** 

If the date parameter\(s\) are omitted, the current day is used.

## Improved error reporting

In addition to fixing several issues that previously resulted in silent errors or zeros and null values in data, over 50 new [error messages](errors.md#) were added. The following sections describe some of the restrictions that are enforced to prevent errors.

 **Element breakdown enforcement** 

Elements now have restrictions on which other elements they can be combined with in a report.

Use [GetElements](methods/r_GetElements.md#) with the `existingElements` parameter to get a list of valid breakdowns for a specific element.

There are three groups of elements: Traffic, Commerce, and Both. Elements from the Traffic and Commerce groups may only be broken down by elements in the same group. Elements in the "Both" group can be broken down by any other element. A report may have a maximum number of three elements. See [Analytics Elements](elements.md#).

## Element/Metric combination enforcement

Certain metrics may only be requested along with certain elements.

Use [GetMetrics](methods/r_GetMetrics.md#) with the existingElements parameter to programmatically get a list of valid metrics for a list of element\(s\).

Every element has either a metric whitelist or a metric blacklist, whichever is shorter, that determines these restrictions. See [Valid Element and Metric Combinations](combinations.md#).

## Overtime-only metrics enforcement

Some metrics are only valid in overtime reports.

Use [GetMetrics](methods/r_GetMetrics.md#) with the dateGranularity parameter to programmatically get a list of these metrics. See [Analytics Metrics](metrics.md#).

## Inline segment elements enforcement

The following elements are not supported for inline segments.

-   pagedepth
-   visitnumber
-   mobilecarrier
-   hier\*
-   \*paths
-   \*fallout

## Maximum number of "top" elements enforcement

The maximum number of top elements that can be requested is 50,000. Setting the "top" parameter to a number greater than 50000 will result in a `element_top_invalid` error.

## Date Enforcement

 **Minimum date enforcement** 

Due to specific system requirements, the minimum date that can be used in the date, dateFrom, and dateTo parameters is 2000-01-01.

Requesting a date earlier than 2000-01-01 will result in a `period_invalid` error.

 **Maximum date enforcement** 

Due to specific system requirements, the maximum date that can be used in the date, dateFrom, and dateTo parameters is 2899-12-31.

Requesting a date later than 2899-12-31 will result in a `period_invalid` error.

 **Valid date range enforcement** 

Requesting a toDate that is earlier than fromDate will result in a `period_invalid` error.

## Report permissions enforcement

Specific users may not have access to certain metrics or elements. The metrics and elements returned in [GetMetrics](methods/r_GetMetrics.md#) and [GetElements](methods/r_GetElements.md#), respectively, reflect those restrictions. Requesting an element or metric that one doesn't have permission to access will result in a `element_inaccessible` or `metric_inaccessible` error.

## Validation of report immediately when calling Report.Queue

The reportDescription is now validated right away when queuing, as well as at execution time.

## More descriptive error messages

Numeric error codes have been abandoned in favor of textual, descriptive error messages. See [Analytics Report Error Codes](errors.md#).


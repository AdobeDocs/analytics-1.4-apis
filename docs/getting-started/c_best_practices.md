# API Best Practices

 

Adobe Analytics Reporting API provides a flexible reporting interface that lets you generate a variety of complex reports. Adobe makes every effort to provide reporting data quickly, however, there are many factors that impact report generation speed. The following sections explain many of these factors and contain tips to help you structure requests to get the business data you need as quickly as possible.

## Report Queue

Each report suite maintains a separate queue of requests. If many reports are requested simultaneously, even from separate users, a small number of reports are generated simultaneously. As reports complete, remaining reports are generated in the order in which they were received.

When troubleshooting, it is essential to determine if the report you requested is taking a long time to generate, or if the report suite queue is backed up. The response from each report contains a breakdown of the time the report spent waiting and the time spent in processing that can help you isolate the cause.

If your requests are spending a lot of time in the queue, it is possible that other requests have filled up the queue. You can retrieve the current queue using Report.GetQueue. This method allows you to audit the reports that your company is running.

If you find that another user has submitted a lot of requests \(especially complex requests that take a long time to process\), it is usually a good idea to check with the requestor to make sure that the requests are valid. You can cancel waiting requests by using Report.Cancel.

Note that The API system is throttled on a company level, mainly to prevent DDoS type of attacks or buggy scripts from unnecessarily taxing the system. The limit is high enough that 99.9% of the our customers will never hit the limit. If you hit this limit, you will receive a Request.OverLimit error message, and you can contact Adobe to have your throttle level increased.

If your reports are taking a long time to generate, the remaining sections in this document discuss some best practices to reduce the time it takes to generate a report.

## Time Ranges

Long date ranges and high granularity cause increased generation time.

-   Break requests into shorter time frames. For example, if you are requesting monthly data for 2 years, request each month separately. If you break up your requests the data returns much more quickly.
-   Split year-over-year requests into two requests \(this period and this period 1 year ago\).
-   When using the data to run an application, such as a dashboard with many users, we recommend that you download the data and then cache it on a periodic basis for distribution. This helps your applications be more responsive.
-   Cache historical data that isn’t likely to change over time.

## Breakdowns

When you request a breakdown, the full Cartesian product of the data is calculated, adding an order of magnitude to the amount of processing that is required.

-   If possible, limit the number of items in each breakdown \(e.g. 5 items by 5 items is 25 rows where as 500 items by 500 is 250,000 rows\)
-   To report breakdowns for a limited data set, use the selected parameter in the request to reduce the number of rows included.

## Data Rows

The fewer number of rows that need to be returned, the faster the report generates.

-   Break requests for large amounts of data into smaller ones \(e.g. Instead of requesting 100k rows of data in a single request, break it up in to 10 requests for 10k rows\). Our system is tuned to return small requests very fast. If you break up your requests the data returns much more quickly.
-   If you are processing only some of the data that is returned, you can update your request to include only the number of rows that you need.

## Segments

The more complex the segment rule, the longer the data takes to process.

-   If possible, use a less processing-intense container. When you move from a visitor to a visit container, report data will process faster, and moving from a visit to a hit container causes the report data to process even faster. If you are setting a value on every page, a visitor container and a hit container return the same results, but the hit container processes faster. Keep in mind that a segment is just a way of selecting the hits that are reported, you can still get the visitors metric using a hit container.
-   Look for opportunities to simplify segments. The fewer containers there are, the faster the report generates.

## Number of Metrics

As the number of metrics increases, the report generation time increases. Removing metrics often improves report generation time.

## Other Reporting Options

In addition to reducing the time range, number of metrics, and number of breakdowns in a report, the following guidelines help increase reliability of report delivery:

-   Use data warehouse to request reports that contain many breakdowns or metrics. Data warehouse is designed to generate these types of reports.
-   Schedule reports to run during non-peak hours. This increases the likelihood of a report returning because the request queue for a report suite is more likely to be empty during those times.


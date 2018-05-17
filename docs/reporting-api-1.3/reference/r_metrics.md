# Analytics Metrics

Provides a list of metrics available in Analytics.

cVisits, cVisitors, cEntries, cExits are deprecated. Update your reports to use visits, visitors, entries, and exits in place of these metrics.

## Analytics Metrics

A *metric* is a structure that specifies the type of event data captured in the report. At least one metric must be specified in a report. Ranked and Overtime reports support one or more metrics per report. Trended reports support only one metric per report. As part of the report definition, you can specify the metrics to include in the report as a parameter, using the tns:[reportDefinitionMetricList](../data_types/r_reportDefinitionMetricList.md#) data type.

Additional information on [metrics](http://microsite.omniture.com/t2/help/en_US/reference/index.html?f=metrics) and [participation](http://microsite.omniture.com/t2/help/en_US/reference/index.html?f=metrics_participation) is available in the [Analytics Reference Guide](http://microsite.omniture.com/t2/help/en_US/reference/index.html).

**Note:** A given metric might not be valid for all report types. For example, pathing metrics are not available on overtime reports. The value contained in a specific metric might vary based on report type and other report options. For example, the instances metric means different things, based on the element being requested. Furthermore, all report suites do not offer all metrics. Use ReportSuite.GetAvailableMetrics \(in the Administration API\) to get a list of metric IDs available in a particular report suite.

Here are some definitions that will be helpful for a number of Commerce metrics listed below:

-   **Standard metrics**\(for example: carts, lifetimeCarts\): These metrics are the same metrics used in standard Analytics reporting. If a formula consisted of a single standard metric, it displays identical data to its noncalculated metric counterpart. Standard metrics are useful for creating calculated metrics specific to each individual line item. For example, \[Orders\] / \[Visits\] takes orders for that specific line item and divides it by the number of visits for that specific line item.
-   **Total metrics**\(for example: totalCarts, lifetimeTotalCarts\): These metrics use the total for the reporting period in every line item. If a formula consisted of a single total metric, it displays the same total number on every line item. Total metrics are useful for creating calculated metrics that compare against site total data. For example, \[Orders\] / \[Total Visits\] shows the proportion of orders against ALL visits to your site, not just the visits to the specific line item.
-   **Participation metrics**: Participation is a setting that can be enabled to offer additional insight to each of your existing conversion events. Enabling participation provides an additional metric that can be used in reporting \(e.g. if Revenue had Participation enabled, a new metric labeled Revenue Participation would appear\). Unlike standard metrics which only provide credit to a single value or evenly divide credit among multiple values, participation provides full credit to each value that contributed to the conversion event. This is useful to determine which pages, campaigns, or other custom variable values are contributing most to the success of your site.

|Category|Metrics|Description|
|--------|-------|-----------|
|Commerce| carts, totalCarts, lifetimeCarts, lifetimeTotalCarts, participationCarts, lifetimeParticipationCarts | Checkout cart metrics. Cart Open The number of times a customer opened a shopping cart by adding the first item. Occurs the first time an item is added to the shopping cart. This value comes from the scOpen event. |
|Commerce| cartAdditions, totalCartAdditions, lifetimeCartAdditions, lifetimeTotalCartAdditions, participationCartAdditions, lifetimeParticipationCartAdditions | Checkout cart addition metrics. Cart Additions - The number of times an item was added to a shopping cart. This value comes from the scAdd event. |
|Commerce| cartRemovals, totalCartRemovals, lifetimeCartRemovals, lifetimeTotalCartRemovals, participationCartRemovals, lifetimeParticipationCartRemovals | Checkout cart removal metrics - Cart Removals - Number of times an item was removed from a shopping cart. This value comes from the scRemove event. |
|Commerce| cartViews, totalCartViews, lifetimeCartViews, lifetimeTotalCartViews, participationCartViews, lifetimeParticipationCartViews | Checkout cart view metrics - Cart Views - Event in which the contents of the shopping cart are viewed by the customer. This value comes from the scView event.|
|Commerce| checkouts, totalCheckout, lifetimeCheckout, lifetimeTotalCheckouts, participationCheckouts, lifetimeParticipationCheckouts | Checkout activity metrics - Checkouts - An event that occurs when customers arrive at the checkout stage of a purchase. The checkout stage usually occurs just before a purchase is finalized, and usually involves the customer entering personal information \(such as their shipping and billing information\). You have control over the events on your site that qualify as checkouts. This value comes from the scCheckout event.|
|Commerce| instances | Number of times a specific value is captured. Instances take into account all image request types, and do not factor in conversion variable persistence. For example, if a user arrives on your site via example.com, the first image request on your site contains the referrer of example.com. Looking at instances in the referrers report shows one Instance attributed to example.com even if this value persists for additional page views or link tracking calls on your site.|
|Commerce| orders, totalOrders, lifetimeOrders, lifetimeTotalOrders, participationOrders, lifetimeParticipationOrders | Order activity metrics - Orders - The number of orders made on your website during the selected time period. You can break down individual time periods by other metrics to show the items \(such as products or campaigns\) that contributed to the most orders during that time frame. |
|Commerce| revenue, totalRevenue, lifetimeRevenue, lifetimeTotalRevenue, participationRevenue, lifetimeParticipationRevenue | eCommerce revenue metrics - Revenue - Revenue is captured on the purchase event, and is defined as the total dollar amount for the sum of the order for each product. This value comes from the purchase event.|
|Commerce| units, totalUnits, lifetimeUnits, lifetimeTotalUnits, participationUnits, lifetimeParticipationUnits | Units purchased metrics - Units - The total units that were ordered for the selected time period. Because you have many units purchased per order, Units is a vital metric that reveals general inventory movement.|
|Commerce| customersNew, customersReturn, customersLoyal, customersDaily, customersWeekly, customersMonthly, customersQuarterly, customersYearly |Customer metrics|
|Commerce| cVisits, cVisitors |\(**Deprecated**, use Visits and Visitors instead\) Visits/Visitors metrics|
|Commerce| cEntries, cExits, bounces, bounceRate, totalTimeSpent |Pathing Metrics. \(cEntries and cExits are **Deprecated**, use Entries and Exits instead\).|
|Commerce| Event*\#*  \(for example, event2\) |Custom event metric \(1-100\)|
|Commerce| mobilecarrier |Mobile device metrics|
| | | |
| |**Social metrics. Available only if Social is enabled.** | |
|Commerce| socialmentions  |Counts the number of times a term is recorded by Social.|
| | socialreach  | A measure of the number of people who will be notified of a tweet or will be very likely to see a tweet by an author on Twitter. For example, a Twitter user with 2,000,000 followers would have an audience of 2,000,000. |
| | socialtotalsentiment  |Determines a sentiment score \(between 1 and 10\) for the post, picture, or video. A low score indicates that viewers reacted or likely felt unfavorably towards the post, picture, or video. A high score indicates that viewers reacted or likely felt favorably towards the post, picture, or video.|
| | sociallikeadds |Counts the number of "Likes" on Facebook pages you control.|
| | socialpageviews |Counts the number of views of the Facebook pages you control.|
| | socialpostviews  | Counts the number of posts created on Facebook pages you control. |
| | socialfbstorytellers  |Counts the number of people talking about the Facebook page you control.|
| | socialfbstories |Counts the number of posts created on Facebook pages you control.|
| | socialpubrecommends | Counts the number of Likes and retweets of posts created using the Social Publishing and Applications modules. |
| | socialpubcomments  |Counts the number of friends and followers of assets created using the Social Publishing and Applications modules.|
| | socialpubsubscribers |Counts the number of Likes and retweets on posts created using the Social Publishing and Applications modules.|
| | socialpubposts  |Counts the number of posts and retweets of posts created using the Social Publishing and Applications modules.\{code\}|
| | | |
| |**Video metrics. Available only if v15 video measurement is configured in Admin Console.** | |
|Commerce| videotime |Counts the time, in seconds, spent watching a video.|
| |  videostart  |Indicates that a visitor has viewed some portion of a video. However, it does not provide any information about how much, or what part, of a video the visitor viewed.|
| | videocomplete |Indicates that a user has viewed a complete video.|
| | videosegmentviews |Sent on all close events, which occur on video complete or when the users stops viewing at some point before the complete occurs.|
| | videoadstart  |Indicates that a visitor has viewed some portion of a video or ad. However, it does not provide any information about how much, or what part, of a video or ad the visitor viewed.|
| | videoadcomplete |Indicates that a user has viewed a complete video or ad.|
|Traffic| mobileViews, mobileVisits, mobileVisitorsDaily |Mobile device metrics. Available only if mobile application reporting is enabled in Admin Console.|
|Traffic| pageViews, totalPageViews |Page view metrics|
|Traffic| visits, totalVisits, averageTimeSpentOnSite, averageVisitDepth |Site visit metrics|
|Traffic| visitors, visitorsNew, visitorsHourly, totalVisitorsHourly, visitorsDaily, totalVisitorsDaily, visitorsWeekly, totalVisitorsWeekly, visitorsMonthly, totalVisitorsMonthly, visitorsQuarterly, totalVisitorsQuarterly, visitorsYearly, totalVisitorsYearly | Site visitor metrics **Note:** The visitors metric is not valid for Overtime reports.|
|Traffic| videoViews, videoVisits, videoVisitorsDaily |Video usage metrics|
|Traffic| averagePageDepth, averageTimeSpentOnPage, entries, exits, reloads, singleAccess |Pathing metrics|
|Traffic| bots |Bot traffic metrics|

**Parent topic:** [Reference](../reference/c_reference.md)


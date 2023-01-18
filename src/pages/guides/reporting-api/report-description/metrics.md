# Analytics Metrics

Provides a list of metrics available in Analytics.

A *metric* is a structure that specifies the type of event data captured in the report.

## Calculated Metrics

Calculated metrics are returned along with the other reporting API metrics. The IDs of these metrics are in the form

```
f:<number>
```

Where `<number>` is some integer value.

The metric type, decimal precision, and formula (where applicable) are included for all metrics.

## Overtime-Only Metrics

Some metrics are only valid in overtime reports. Use Report.GetMetrics with the dateGranularity parameter to programmatically get a list of these metrics.

- averagetimespentonsite
- averagevisitdepth
- customersdaily
- customersloyal
- customersmonthly
- customersnew
- customersquarterly
- customersreturn
- customersweekly
- customersyearly
- mobileviews
- mobilevisitorsdaily
- mobilevisits
- returnvisits
- returnvisitsdaily

If you try to run an overtime report on an unsupported metric, a `metric_unsupported_in_overtime` error occurs.

## Permissions

Specific users may not have access to certain metrics. The metrics returned by `GetMetrics` reflect those restrictions. Requesting a metric that one doesn't have permission to access will result in a `metric_inaccessible` error.

# reportMetric

A structure that defines a metric that appears in a report.

|Element|Type|Description|
|-------|----|-----------|
|`id` |`string` | The metric ID. This must match the metric ID specified in the report description. |
|`name` |`string` | The metric name. |
|`type` |`string` | The metric type, either "number", or "currency". |
|`decimals` |`int` | The number of decimal places in the metric values. |
|`forumula` |`string` | The formula if the metric is a calculated metric. |
|`latency` |`int` | Number of seconds the metric data is latent. |
|`current` |`boolean` | True indicates that the metric contains the most recent data available as a result of the currentData flag being set to true in the reportDescription. |

## Metric Descriptions

|Category|Metrics|Description|
|--------|-------|-----------|
|Commerce| carts totalCarts lifetimeCarts lifetimeTotalCarts participationCarts lifetimeParticipationCarts | Checkout cart metrics -Cart Open - The number of times a customer opened a shopping cart by adding the first item. Occurs the first time an item is added to the shopping cart. This value comes from the scOpen event.|
|Commerce| cartAdditions totalCartAdditions lifetimeCartAdditions lifetimeTotalCartAdditions participationCartAdditions lifetimeParticipationCartAdditions | Checkout cart addition metrics -Cart Additions - The number of times an item was added to a shopping cart. This value comes from the scAdd event.|
|Commerce| cartRemovals  totalCartRemovals lifetimeCartRemovals lifetimeTotalCartRemovals participationCartRemovals lifetimeParticipationCartRemovals | Checkout cart removal metrics -Cart Removals - Number of times an item was removed from a shopping cart. This value comes from the scRemove event.|
|Commerce| cartViews totalCartViews lifetimeCartViews lifetimeTotalCartViews participationCartViews lifetimeParticipationCartViews | Checkout cart view metrics -Cart Views - Event in which the contents of the shopping cart are viewed by the customer. This value comes from the scView event.|
|Commerce| checkouts totalCheckout lifetimeCheckout lifetimeTotalCheckouts participationCheckouts lifetimeParticipationCheckouts | Checkout activity metrics -Checkouts - An event that occurs when customers arrive at the checkout stage of a purchase. The checkout stage usually occurs just before a purchase is finalized, and usually involves the customer entering personal information (such as their shipping and billing information). You have control over the events on your site that qualify as checkouts. This value comes from the scCheckout event.|
|Commerce| instances | Number of times a specific value is captured. Instances take into account all image request types, and do not factor in conversion variable persistence. For example, if a user arrives on your site via example.com, the first image request on your site contains the referrer of example.com. Looking at instances in the referrers report shows one Instance attributed to example.com even if this value persists for additional page views or link tracking calls on your site.|
|Commerce| orders totalOrders lifetimeOrders lifetimeTotalOrders participationOrders lifetimeParticipationOrders | Order activity metrics -Orders - The number of orders made on your website during the selected time period. You can break down individual time periods by other metrics to show the items (such as products or campaigns) that contributed to the most orders during that time frame.|
|Commerce| revenue totalRevenue lifetimeRevenue lifetimeTotalRevenue participationRevenue lifetimeParticipationRevenue | eCommerce revenue metrics -Revenue - Revenue is captured on the purchase event, and is defined as the total dollar amount for the sum of the order for each product. This value comes from the purchase event.|
|Commerce| units totalUnits lifetimeUnits lifetimeTotalUnits participationUnits lifetimeParticipationUnits | Units purchased metrics -Units - The total units that were ordered for the selected time period. Because you have many units purchased per order, Units is a vital metric that reveals general inventory movement.|
|Commerce| customersNew customersReturn customersLoyal customersDaily customersWeekly customersMonthly customersQuarterly customersYearly |Customer metrics|
|Commerce| bounces bounceRate totalTimeSpent pathviews |Pathing Metrics.|
|Commerce| Event*#* (for example, event2) |Custom event metric (1-100)|
|Commerce| mobilecarrier  |Mobile device metrics|
|Commerce| socialmentions socialreach socialtotalsentiment sociallikeadds socialpageviews socialpostviews socialfbstorytellers socialfbstories socialpubrecommends socialpubcomments socialpubsubscribers socialpubposts |Social metrics. Available only if Social is enabled.|
|Commerce| videotime videostart videocomplete videosegmentviews videoadstart videoadcomplete |Video metrics. Available only if v15 video measurement is enabled.|
|Traffic| mobileViews mobileVisits mobileVisitorsDaily |Mobile device metrics. Available only if mobile application reporting is enabled.|
|Traffic| pageViews totalPageViews |Page view metrics|
|Traffic| visits totalVisits averageTimeSpentOnSite averageVisitDepth returnvisits returnvisitsdaily |Site visit metrics|
|Traffic| visitors visitorsNew visitorsHourly totalVisitorsHourly visitorsDaily totalVisitorsDaily visitorsWeekly totalVisitorsWeekly visitorsMonthly totalVisitorsMonthly visitorsQuarterly totalVisitorsQuarterly visitorsYearly totalVisitorsYearly| Site visitor metrics |
|Traffic| videoViews videoVisits videoVisitorsDaily |Video usage metrics|
|Traffic| averagePageDepth averageTimeSpentOnPage entries exits reloads singleAccess |Pathing metrics|
|Traffic| bots |Bot traffic metrics|


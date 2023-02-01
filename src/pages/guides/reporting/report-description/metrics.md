# Metrics reference

A **metric** is a structure that specifies the type of event data captured in the report. See [Metrics overview](https://experienceleague.adobe.com/docs/analytics/components/metrics/overview.html) in the Adobe Analytics components user guide for details.

## Calculated metrics

Calculated metrics are returned along with the other reporting API metrics. The IDs of these metrics are in the form `f:<number>`, where `<number>` is an integer. The metric type, decimal precision, and formula (where applicable) are included for all metrics.

## Overtime-only metrics

Some metrics are only valid in overtime reports. Use `Report.GetMetrics` with the `dateGranularity` property to programmatically get a list of these metrics.

- `averagetimespentonsite`
- `averagevisitdepth`
- `customersdaily`
- `customersloyal`
- `customersmonthly`
- `customersnew`
- `customersquarterly`
- `customersreturn`
- `customersweekly`
- `customersyearly`
- `mobileviews`
- `mobilevisitorsdaily`
- `mobilevisits`
- `returnvisits`
- `returnvisitsdaily`

If you try to run an overtime report on an unsupported metric, a `metric_unsupported_in_overtime` error occurs.

## Permissions

Specific users may not have access to certain metrics. The metrics returned by `Report.GetMetrics` reflect those restrictions. Requesting a metric that one doesn't have permission to access will result in a `metric_inaccessible` error.

## Metric object reference

A structure that defines a metric that appears in a report.

Element | Type | Description
--- | --- | ---
**`id`** | `string` | The metric ID. This must match the metric ID specified in the report description.
**`name`** | `string` | The metric name.
**`type`** | `string` | The metric type. Valid values include `number` and `currency`.
**`decimals`** | `int` | The number of decimal places in the metric values.
**`formula`** | `string` | The formula if the metric is a calculated metric.
**`latency`** | `int` | Number of seconds the metric data is latent.
**`current`** | `boolean` | If `true`, contains the most recent data available as a result of the `currentData` flag set to `true` in `reportDescription`.

## Metric ID reference

Metric | Category | Description
--- | --- | ---
**`carts`**<br/>**`totalCarts`**<br/>**`lifetimeCarts`**<br/>**`lifetimeTotalCarts`**<br/>**`participationCarts`**<br/>**`lifetimeParticipationCarts`** | Commerce | The [Carts](https://experienceleague.adobe.com/docs/analytics/components/metrics/carts.html) metric.
**`cartAdditions`**<br/>**`totalCartAdditions`**<br/>**`lifetimeCartAdditions`**<br/>**`lifetimeTotalCartAdditions`**<br/>**`participationCartAdditions`**<br/>**`lifetimeParticipationCartAdditions`** | Commerce | The [Cart additions](https://experienceleague.adobe.com/docs/analytics/components/metrics/cart-additions.html) metric.
**`cartRemovals`**<br/>**`totalCartRemovals`**<br/>**`lifetimeCartRemovals`**<br/>**`lifetimeTotalCartRemovals`**<br/>**`participationCartRemovals`**<br/>**`lifetimeParticipationCartRemovals`** | Commerce | The [Cart removals](https://experienceleague.adobe.com/docs/analytics/components/metrics/cart-removals.html) metric.
**`cartViews`**<br/>**`totalCartViews`**<br/>**`lifetimeCartViews`**<br/>**`lifetimeTotalCartViews`**<br/>**`participationCartViews`**<br/>**`lifetimeParticipationCartViews`** | Commerce | The [Cart views](https://experienceleague.adobe.com/docs/analytics/components/metrics/cart-views.html) metric.
**`checkouts`**<br/>**`totalCheckout`**<br/>**`lifetimeCheckout`**<br/>**`lifetimeTotalCheckouts`**<br/>**`participationCheckouts`**<br/>**`lifetimeParticipationCheckouts`** | Commerce | The [Checkouts](https://experienceleague.adobe.com/docs/analytics/components/metrics/checkouts.html) metric.
**`instances`** | Commerce | The [Instances](https://experienceleague.adobe.com/docs/analytics/components/metrics/instances.html) metric.
**`orders`**<br/>**`totalOrders`**<br/>**`lifetimeOrders`**<br/>**`lifetimeTotalOrders`**<br/>**`participationOrders`**<br/>**`lifetimeParticipationOrders`** | Commerce | The [Orders](https://experienceleague.adobe.com/docs/analytics/components/metrics/orders.html) metric.
**`units`**<br/>**`totalUnits`**<br/>**`lifetimeUnits`**<br/>**`lifetimeTotalUnits`**<br/>**`participationUnits`**<br/>**`lifetimeParticipationUnits`** | Commerce | The [Units](https://experienceleague.adobe.com/docs/analytics/components/metrics/units.html) metric.
**`revenue`**<br/>**`totalRevenue`**<br/>**`lifetimeRevenue`**<br/>**`lifetimeTotalRevenue`**<br/>**`participationRevenue`**<br/>**`lifetimeParticipationRevenue`** | Commerce | The [Revenue](https://experienceleague.adobe.com/docs/analytics/components/metrics/revenue.html) metric.
**`customersNew`**<br/>**`customersReturn`**<br/>**`customersLoyal`**<br/>**`customersDaily`**<br/>**`customersWeekly`**<br/>**`customersMonthly`**<br/>**`customersQuarterly`**<br/>**`customersYearly`** | Commerce | Customer metrics.
**`bounces`** | Commerce | The [Bounces](https://experienceleague.adobe.com/docs/analytics/components/metrics/bounces.html) metric.
**`bounceRate`** | Commerce | The [Bounce rate](https://experienceleague.adobe.com/docs/analytics/components/metrics/bounce-rate.html) metric.
**`totalTimeSpent`** | Commerce | The [Total seconds spent](https://experienceleague.adobe.com/docs/analytics/components/metrics/total-seconds-spent.html) metric.
**`pathviews`** | Commerce | Path views metric.
**`event1`**-**`event1000`** | Commerce | The respective [Custom event](https://experienceleague.adobe.com/docs/analytics/components/metrics/custom-events.html).
**`videotime`**<br/>**`videostart`**<br/>**`videocomplete`**<br/>**`videosegmentviews`**<br/>**`videoadstart`**<br/>**`videoadcomplete`** | Commerce | Video metrics (commerce).
**`pageViews`**<br/>**`totalPageViews`** | Traffic | The [Page views](https://experienceleague.adobe.com/docs/analytics/components/metrics/page-views.html) metric.
**`visits`**<br/>**`totalVisits`**<br/>**`returnvisits`**<br/>**`returnvisitsdaily`**| Traffic | The [Visits](https://experienceleague.adobe.com/docs/analytics/components/metrics/visits.html) metric.
**`averageTimeSpentOnSite`**<br/>**`averageTimeSpentOnPage`** | Traffic | The [Average time on site](https://experienceleague.adobe.com/docs/analytics/components/metrics/average-time-on-site.html) metric.
**`averagePageDepth`**<br/>**`averageVisitDepth`** | Traffic | The [Average page depth](https://experienceleague.adobe.com/docs/analytics/components/metrics/average-page-depth.html) metric.
**`visitors`**<br/>**`visitorsNew`**<br/>**`visitorsHourly`**<br/>**`totalVisitorsHourly`**<br/>**`visitorsDaily`**<br/>**`totalVisitorsDaily`**<br/>**`visitorsWeekly`**<br/>**`totalVisitorsWeekly`**<br/>**`visitorsMonthly`**<br/>**`totalVisitorsMonthly`**<br/>**`visitorsQuarterly`**<br/>**`totalVisitorsQuarterly`**<br/>**`visitorsYearly`**<br/>**`totalVisitorsYearly`** | Traffic | [Unique Visitors](https://experienceleague.adobe.com/docs/analytics/components/metrics/unique-visitors.html) metrics.
**`videoViews`**<br/>**`videoVisits`**<br/>**`videoVisitorsDaily`** | Commerce | Video metrics (traffic).
**`entries`** | Traffic | The [Entries](https://experienceleague.adobe.com/docs/analytics/components/metrics/entries.html) metric.
**`exits`** | Traffic | The [Exits](https://experienceleague.adobe.com/docs/analytics/components/metrics/exits.html) metric.
**`reloads`** | Traffic | The [Reloads](https://experienceleague.adobe.com/docs/analytics/components/metrics/reloads.html) metric.
**`singleAccess`** | Traffic | The [Single access](https://experienceleague.adobe.com/docs/analytics/components/metrics/single-access.html) metric.
**`bots`** | Traffic | Bot traffic metric.

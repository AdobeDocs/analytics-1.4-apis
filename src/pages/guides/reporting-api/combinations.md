# Valid Dimension and Metric Combinations

Since the 1.4 API runs on a previous version of the Adobe Analytics reporting engine, certain dimensions and metrics are not compatible with each other. If you need a dimension/metric combination that is invalid here, use the [Adobe Analytics 2.0 Reporting API](https://developer.adobe.com/analytics-apis/docs/2.0/guides/endpoints/reports/).

You can pass any element to [Report.GetMetrics](methods.md#getmetrics) to get a list of valid metrics for a specific element. Every element has list of valid or invalid metrics, whichever is shorter, that determines these restrictions. If you request an invalid combination, a `metric_not_supported_for_element` error occurs.

## Dimensions with only valid metrics

These dimensions can be requested only with the metrics in the right column. All other metrics requested with the dimension are invalid.

Dimension | Allowed metric(s)
--- | ---
**`fallout`** | `pageviews`
**`paths`** | `pageviews`
**`videos`** | `cartadditions`, `cartremovals`, `carts`, `cartviews`, `checkouts`, `orders`, `revenue`, `units`, `event1`-`event1000`

## Dimensions with invalid metrics

These dimensions can be requested with any metric _except_ what is listed in the right column.

Dimension | Invalid metrics
--- | ---
**`browserheight`** | `averagepagedepth`, `averagetimespentonpage`, `videocomplete`, `videosegmentviews`, `videostart`, `videotime`, `event1`-`event1000`, `participationevent`
**`browsertype`** | `averagepagedepth`, `averagetimespentonpage`, `videocomplete`, `videosegmentviews`, `videostart`, `videotime`, `event1`-`event1000`, `participationevent`
**`browserwidth`** | `averagepagedepth`, `averagetimespentonpage`, `videocomplete`, `videosegmentviews`, `videostart`, `videotime`, `event1`-`event1000`, `participationevent`
**`connectiontype`** | `averagepagedepth`, `averagetimespentonpage`, `videocomplete`, `videosegmentviews`, `videostart`, `videotime`, `event1`-`event1000`, `participationevent`
**`cookiesenabled`** | `averagepagedepth`, `averagetimespentonpage`, `videocomplete`, `videosegmentviews`, `videostart`, `videotime`, `event1`-`event1000`, `participationevent`
**`geocity`** | `averagepagedepth`, `averagetimespentonpage`, `videocomplete`, `videosegmentviews`, `videostart`, `videotime`, `event1`-`event100`, `participationevent`
**`geocountry`** | `averagepagedepth`, `averagetimespentonpage`, `videocomplete`, `videosegmentviews`, `videostart`, `videotime`, `event1`-`event1000`, `participationevent`
**`geodma`** | `averagepagedepth`, `averagetimespentonpage`, `videocomplete`, `videosegmentviews`, `videostart`, `videotime`, `event1`-`event1000`, `participationevent`
**`georegion`** | `averagepagedepth`, `averagetimespentonpage`, `videocomplete`, `videosegmentviews`, `videostart`, `videotime`, `event1`-`event1000`, `participationevent`
**`hier`** | `uniquevisitors`, `visitors`
**`javaenabled`** | `averagepagedepth`, `averagetimespentonpage`, `videocomplete`, `videosegmentviews`, `videostart`, `videotime`, `event1`-`event1000`, `participationevent`
**`javascriptenabled`** | `averagepagedepth`, `averagetimespentonpage`, `videocomplete`, `videosegmentviews`, `videostart`, `videotime`, `event1`-`event1000`, `participationevent`
**`javascriptversion`** | `averagepagedepth`, `averagetimespentonpage`, `videocomplete`, `videosegmentviews`, `videostart`, `videotime`, `event1`-`event1000`, `participationevent`
**`listvar`** | `instances`
**`mobilecarrier`** | `videocomplete`, `videosegmentviews`, `videostart`, `videotime`
**`monitorcolordepth`** | `averagepagedepth`, `averagetimespentonpage`, `videocomplete`, `videosegmentviews`, `videostart`, `videotime`, `event1`-`event1000`, `participationevent`
**`pagedepth`** | `averagepagedepth`, `averagetimespentonpage`, `videocomplete`, `videosegmentviews`, `videostart`, `videotime`, `event1`-`event1000`, `participationevent`
**`pagesnotfound`** | `averagepagedepth`, `averagetimespentonpage`, `cartadditions`, `cartremovals`, `carts`, `cartviews`, `checkouts`, `orders`, `participationrevenue`, `participationunits`, `reloads`, `revenue`, `units`, `videocomplete`, `videosegmentviews`, `videostart`, `videotime`, `event1`-`event1000`, `participationevent`
**`prop`** | `averagetimespentonsite`, `averagevisitdepth`, `bots`, `totalcartadditions`, `totalcartremovals`, `totalcarts`, `totalcartviews`, `totalcheckouts`, `totalorders`, `totalpageviews`, `totalrevenue`, `totalunits`, `totalvisitorsdaily`, `totalvisitorshourly`, `totalvisitorsmonthly`, `totalvisitorsquarterly`, `totalvisitorsweekly`, `totalvisitorsyearly`, `totalvisits`, `videosegmentviews`, `visitorsnew`, `totalevent`
**`referrer`** | `averagepagedepth`, `averagetimespentonpage`, `videocomplete`, `videosegmentviews`, `videostart`, `videotime`, `event1`-`event1000`, `participationevent`
**`referrertype`** | `averagepagedepth`, `averagetimespentonpage`, `videocomplete`, `videosegmentviews`, `videostart`, `videotime`, `event1`-`event1000`, `participationevent`
**`returnfrequency`** | `averagepagedepth`, `averagetimespentonpage`, `videocomplete`, `videosegmentviews`, `videostart`, `videotime`, `event1`-`event1000`, `participationevent`
**`searchenginepaid`** | `instances`
**`searchenginepaidkeyword`** | `instances`
**`server`** | `averagetimespentonsite`, `averagevisitdepth`, `bots`, `totalcartadditions`, `totalcartremovals`, `totalcarts`, `totalcartviews`, `totalcheckouts`, `totalorders`, `totalpageviews`, `totalrevenue`, `totalunits`, `totalvisitorsdaily`, `totalvisitorshourly`, `totalvisitorsmonthly`, `totalvisitorsquarterly`, `totalvisitorsweekly`, `totalvisitorsyearly`, `totalvisits`, `videosegmentviews`, `visitorsnew`, `totalevent`
**`sitesection`** | `singleaccess`
**`surveybase`** | `instances`
**`tntbase`** | `instances`

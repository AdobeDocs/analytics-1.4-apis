# Valid Element and Metric Combinations

Certain metrics may only be requested along with certain elements.

You can pass any element to [GetMetrics](methods/r_GetMetrics.md#) to get a list of valid metrics for a specific element. Every element has either a metric allowlist or a metric denylist, whichever is shorter, that determines these restrictions. If you request an invalid combination, a `metric_not_supported_for_element` error occurs.

## Elements with Metric Allowlists

The elements in the element column can be requested only with the metrics in the right column.

|Element|Metric Allowlist|
|-------|----------------|
|fallout|pageviews|
|paths|pageviews|
|videos|cartadditions, cartremovals, carts, cartviews, checkouts, orders, revenue, units, event|

## Elements with Metric Denylists

The elements in the element column can be requested with any metric except for those that appear in the right column.

|Element|Metric Denylist|
|-------|----------------|
|browserheight|averagepagedepth, averagetimespentonpage, videocomplete, videosegmentviews, videostart, videotime, event, participationevent|
|browsertype|averagepagedepth, averagetimespentonpage, videocomplete, videosegmentviews, videostart, videotime, event, participationevent|
|browserwidth|averagepagedepth, averagetimespentonpage, videocomplete, videosegmentviews, videostart, videotime, event, participationevent|
|connectiontype|averagepagedepth, averagetimespentonpage, videocomplete, videosegmentviews, videostart, videotime, event, participationevent|
|cookiesenabled|averagepagedepth, averagetimespentonpage, videocomplete, videosegmentviews, videostart, videotime, event, participationevent|
|geocity|averagepagedepth, averagetimespentonpage, videocomplete, videosegmentviews, videostart, videotime, event, participationevent|
|geocountry|averagepagedepth, averagetimespentonpage, videocomplete, videosegmentviews, videostart, videotime, event, participationevent|
|geodma|averagepagedepth, averagetimespentonpage, videocomplete, videosegmentviews, videostart, videotime, event, participationevent|
|georegion|averagepagedepth, averagetimespentonpage, videocomplete, videosegmentviews, videostart, videotime, event, participationevent|
|hier|uniquevisitors, visitors|
|javaenabled|averagepagedepth, averagetimespentonpage, videocomplete, videosegmentviews, videostart, videotime, event, participationevent|
|javascriptenabled|averagepagedepth, averagetimespentonpage, videocomplete, videosegmentviews, videostart, videotime, event, participationevent|
|javascriptversion|averagepagedepth, averagetimespentonpage, videocomplete, videosegmentviews, videostart, videotime, event, participationevent|
|listvar|instances|
|mobilecarrier|videocomplete, videosegmentviews, videostart, videotime|
|monitorcolordepth|averagepagedepth, averagetimespentonpage, videocomplete, videosegmentviews, videostart, videotime, event, participationevent|
|pagedepth|averagepagedepth, averagetimespentonpage, videocomplete, videosegmentviews, videostart, videotime, event, participationevent|
|pagesnotfound|averagepagedepth, averagetimespentonpage, cartadditions, cartremovals, carts, cartviews, checkouts, orders, participationrevenue, participationunits, reloads, revenue, units, videocomplete, videosegmentviews, videostart, videotime, event, participationevent|
|prop|averagetimespentonsite, averagevisitdepth, bots, totalcartadditions, totalcartremovals, totalcarts, totalcartviews, totalcheckouts, totalorders, totalpageviews, totalrevenue, totalunits, totalvisitorsdaily, totalvisitorshourly, totalvisitorsmonthly, totalvisitorsquarterly, totalvisitorsweekly, totalvisitorsyearly, totalvisits, videosegmentviews, visitorsnew, totalevent|
|referrer|averagepagedepth, averagetimespentonpage, videocomplete, videosegmentviews, videostart, videotime, event, participationevent|
|referrertype|averagepagedepth, averagetimespentonpage, videocomplete, videosegmentviews, videostart, videotime, event, participationevent|
|returnfrequency|averagepagedepth, averagetimespentonpage, videocomplete, videosegmentviews, videostart, videotime, event, participationevent|
|searchenginepaid|instances|
|searchenginepaidkeyword|instances|
|server|averagetimespentonsite, averagevisitdepth, bots, totalcartadditions, totalcartremovals, totalcarts, totalcartviews, totalcheckouts, totalorders, totalpageviews, totalrevenue, totalunits, totalvisitorsdaily, totalvisitorshourly, totalvisitorsmonthly, totalvisitorsquarterly, totalvisitorsweekly, totalvisitorsyearly, totalvisits, videosegmentviews, visitorsnew, totalevent|
|sitesection|singleaccess|
|surveybase|instances|
|tntbase|instances|


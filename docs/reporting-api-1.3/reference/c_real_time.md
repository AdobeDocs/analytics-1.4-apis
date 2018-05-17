# Real Time Reports

Real Time API reports let you view orders, revenue, units, custom events, instances, and other metrics with up to three correlated dimensions to create granular, real time dashboards with seconds of latency.

Real time reports operate most efficiently with frequent requests. We recommend between 15-30 seconds between updates.

1. \(Optional\) Get current real time configuration [ReportSuite.GetRealTimeConfiguration](https://github.com/Adobe-Experience-Cloud/analytics-1.4-apis/blob/master/docs/admin-api-1.3/methods/report_suite/r_GetRealTimeConfiguration.md) 

 You'll receive a struct with the current configuration, similar to the following:

```
{
	"correlations":[
		{
			"min_granularity":1,
			"metric":"instances",
			"elements":[
				"prop2",
				"searchenginekeyword"
			]
		}
	]
}
```

2. Save a new configuration [ReportSuite.SaveRealTimeConfiguration](https://github.com/Adobe-Experience-Cloud/analytics-1.4-apis/blob/master/docs/admin-api-1.3/methods/report_suite/r_SaveRealTimeConfiguration.md) 

 Send in a correlations struct with the metrics and elements from the table in the next section that you would like to enable for real time reports.

 You can provide a single metric with up to three correlated elements. Note that you do not need to include each correlated element for every report. For example, based on the struct in step one, you can report searchenginekeyword instances without reporting prop2 instances.

 **Note:** Realtime configuration changes take 15 minutes to be reflected in reports.


3. Run a real time report Report.[GetRealTimeReport](../methods/r_GetRealTimeReport.md#) 

```
{
    "reportDescription": {
        "reportSuiteID": "rsid",
        "metrics": [
            { "id": "revenue" }
        ]
    }
}
```


## Classifications

To report on a classification, supply the `classification` property on the element. This property can be supplied on one element, the first element in a breakdown, the second element in a breakdown, or both elements in a breakdown. Currently you cannot request the same element twice in a breakdown, so you cannot break down `**element1:class1**` by `**element1**`, or `**element1:class1**` by `**element1:class2**`, and so on.

```
// product classification
{
    "reportDescription": {
        "reportSuiteID":"rsid",
        "metrics":[
            { "id":"instances" }
        ],
        "elements":[
            { "id":"product", "classification":"title" }
        ],
        "periodMinutes":"15",
    }
}
```

## Supported Metrics and Elements

The following table contains a list of the supported metrics and breakdowns available in Real Time Reports.

## Metrics
 carts

 cartadditions

 cartremovals

 cartviews

 checkouts

 events1-100

 instances

 mobilecrashes

 mobiledailyengagedusers

 mobileinstalls

 mobilelaunches

 mobilemonthlyengagedusers

 mobileprevsessionlength

 mobileupgrades

 orders

 pageviews

 revenue

 socialmentions

 socialtotalsentiment

 sociallikeadds

 socialpageviews

 socialpostviews

 socialfbstorytellers

 socialfbstories

 socialpubrecommends

 socialpubcomments

 socialpubsubscribers

 socialpubposts

 units

 videoadstart

 videoadcomplete

 videocomplete

 videosegmentviews

 videostart

 videotime

## Elements

 evar1-75

 geocity

 geocountry

 geodma

 georegion

 linkcustom

 linkdownload

 linkexit

 listvar1-4

 mobileappid

 mobiledayofweek

 mobiledayssincefirstuse

 mobiledayssincelastupgrade

 mobiledayssincelastuse

 mobiledevice

 mobileinstalldate

 mobilelaunchnumber

 mobilehourofday

 mobileosenvironment

 mobilelaunchessincelastupgrade

 mobileosversion

 mobilegooglecampaignsource

 mobilegooglecampaignmedium

 mobilegooglecampaignterm

 mobilegooglecampaigncontent

 mobilegooglecampaignname

 page

 product

 prop1-75

 referringdomain

 server

 searchengine

 searchenginekeyword

 searchenginenatural

 searchenginepaid

 sitesection

 socialterm

 socialcontentprovider

 socialauthor

 sociallanguage

 sociallatlong

 socialassettrackingcode

 surveybase

 topleveldomain

 trackingcode

 video

 videoad

 videosegment

 videocontenttype


**Parent topic:** [Reference](../reference/c_reference.md)


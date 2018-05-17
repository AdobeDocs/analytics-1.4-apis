# Real-Time Reports

Real Time API reports let you view orders, revenue, units, custom events, instances, and other metrics with up to three correlated dimensions to create granular, real time dashboards with seconds of latency. Real-time reports are available for a rolling 20 previous hour period.

Real time reports operate most efficiently with frequent requests. We recommend between 15-30 seconds between updates.

## Get current real time configuration 

Call [ReportSuite.GetRealTimeSettings](https://github.com/Adobe-Experience-Cloud/analytics-1.4-apis/blob/master/docs/admin-api/methods/report_suite/r_GetRealTimeSettings.md) 

 You'll receive a struct with the current configuration, similar to the following:

```
{
	"real_time_settings":[
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

## Save a new configuration

Call [ReportSuite.SaveRealTimeSettings](https://github.com/Adobe-Experience-Cloud/analytics-1.4-apis/blob/master/docs/admin-api/methods/report_suite/r_SaveRealTimeSettings.md)

Send in a `real_time_settings` structure with the metrics and elements from the table in the next section that you would like to enable for real time reports.

You can provide a single metric with up to three correlated elements. Note that you do not need to include each correlated element for every report. For example, based on the struct in step one, you can report searchenginekeyword instances without reporting prop2 instances. Realtime configuration changes take 15 minutes to be reflected in reports.

**Note:** If the ui\_report parameter is set to false, you must save at least one element and one metric or the configuration will be invalid, even though an error does not occur. If the ui\_report parameter is set to true, you must save three elements and one metric or you will receive an error.

## Run a real time report

Call [Report.Run](methods/r_Run.md#) and set the "source" parameter to "realtime".

```
{
    "reportDescription": {
        "source": "realtime",
        "reportSuiteID": "rsid",
        "metrics": [
            { "id": "revenue" }
        ]
    }
}
```

## Minute Granularity

When requesting a Real-Time report, you can provide a `"dateGranularity"` of `"minute:[interval]"`. The interval is an integer between 1-60 that specifies the interval to report. For example, `'minute:3'` reports the request date range in 3-minute intervals.

## Relative Dates

Real-Time Reports support [relative dates](http://www.php.net/manual/en/datetime.formats.relative.php) for the `Date`, `DateFrom`, and `DateTo` parameters. For example, to report revenue between noon today and the current time in 3-minute intervals, you could use the following `reportDescription`:

```
{
    "reportDescription": {
        "source": "realtime",
        "dateFrom": "noon",
        "dateTo": "now",
        "dateGranularity": "minute:3",
        "reportSuiteID": "rsid",
        "metrics": [
            { "id": "revenue" }
        ]
    }
}
```

## Sort Options

Real-Time reports provide a number of sort options that are described in [SortMethod Options](data_types/r_reportDescription.md#section_C4F49ABA1A664EDB8BC48DF8D8F026B0).

```
{
    "reportDescription": {
        "source": "realtime",
        "reportSuiteID": "rsid",
        "sortMethod": "mostpopular:.25:0:linear",
        "metrics": [
            { "id": "revenue" }
        ]
    }
}
```

## Totals for Items not Displayed \(Everything Else\)

You can include an optional "everythingElse" element to return metric totals for elements that are not included in the report. For example, if most popular is selected, this returns totals for values that are not in the most popular list.

```
{
    "reportDescription": {
        "source": "realtime",
        "reportSuiteID": "rsid",
        "sortMethod": "mostpopular:.25:0:linear",
        "metrics": [
            { "id": "revenue" }
        ],
        "elements":[
            {
			    "id":"product",
                "everythingElse": true 
			}
        ]
    }
}
```

## Supported Metrics and Elements

The following table contains a list of the supported metrics and breakdowns available in Real Time Reports.

|Metrics|Elements|
|-------|--------|
| cartadditions cartremovals carts cartviews checkouts events1-1000 instances mobilecrashes mobiledailyengagedusers mobileinstalls mobilelaunches mobilemonthlyengagedusers mobileprevsessionlength mobileupgrades orders revenue socialfbstories socialfbstorytellers sociallikeadds socialmentions socialpageviews socialpostviews socialpubcomments socialpubposts socialpubrecommends socialpubsubscribers socialtotalsentiment units videoadcomplete videoadstart videocomplete videosegmentviews videostart videotime | evar1-250 geocity geocountry geodma georegion linkcustom linkdownload linkexit mobileappid mobiledayofweek mobiledayssincefirstuse mobiledayssincelastupgrade mobiledayssincelastuse mobiledevice mobilegooglecampaigncontent mobilegooglecampaignmedium mobilegooglecampaignname mobilegooglecampaignsource mobilegooglecampaignterm mobilehourofday mobileinstalldate mobilelaunchessincelastupgrade mobilelaunchnumber mobileosenvironment mobileosversion page product prop1-75 referringdomain searchengine searchenginekeyword searchenginenatural searchenginepaid server sitesection socialassettrackingcode socialauthor socialcontentprovider sociallanguage sociallatlong socialterm surveybase topleveldomain video videoad videocontenttype videosegment |

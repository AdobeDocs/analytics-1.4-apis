# Real-Time Reports

Real Time API reports let you view orders, revenue, units, custom events, instances, and other metrics with up to three correlated dimensions to create granular, real time dashboards with seconds of latency. Real-time reports are available for a rolling 20 previous hour period.

Real time reports operate most efficiently with frequent requests. We recommend between 15-30 seconds between updates.

## Get current real time configuration 

Call [ReportSuite.GetRealTimeSettings](../admin/report-suite/get.md#getrealtimesettings) 

You'll receive an object with the current configuration, similar to the following:

```json
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

Call [ReportSuite.SaveRealTimeSettings](../admin/report-suite/save.md#saverealtimesettings)

Send in a `real_time_settings` structure with the metrics and elements from the table in the next section that you would like to enable for real time reports.

You can provide a single metric with up to three correlated elements. Note that you do not need to include each correlated element for every report. For example, based on the struct in step one, you can report searchenginekeyword instances without reporting prop2 instances. Realtime configuration changes take 15 minutes to be reflected in reports.

**Note:** If the ui_report parameter is set to false, you must save at least one element and one metric or the configuration will be invalid, even though an error does not occur. If the ui_report parameter is set to true, you must save three elements and one metric or you will receive an error.

## Run a real time report

Call [Report.Run](methods.md#run) and set `"source"` to `"realtime"`.

```json
{
    "reportDescription": {
        "source": "realtime",
        "reportSuiteID": "examplersid",
        "metrics": [
            { "id": "revenue" }
        ]
    }
}
```

## Minute Granularity

When requesting a Real-Time report, you can provide a `"dateGranularity"` of `"minute:[interval]"`. The interval is an integer between 1-60 that specifies the interval to report. For example, `'minute:3'` reports the request date range in 3-minute intervals.

## Relative Dates

Real-Time Reports support [relative dates](https://www.php.net/manual/en/datetime.formats.php#datetime.formats.relative) for the `Date`, `DateFrom`, and `DateTo` parameters. For example, to report revenue between noon today and the current time in 3-minute intervals, you could use the following `reportDescription`:

```json
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

Real-Time reports provide a number of sort options using the `SortMethod` property. It is a single concatenated string delimited by colons. The format is:

**`[algorithm]:[floorSensitivity]:[firstRankPeriod]:[algorithmArgument]`**

All components to this string are optional, reverting to its default value if omitted. If omitting parts of this string, make sure to still include the colon delimiters.

String parameter | Description
--- | ---
**`algorithm`** | Supported values include `mostpopular`, `gainers`, and `losers`. Defaults to `mostpopular`.
**`floorSensitivity`** | A factor between `0` and `1` to cut off low-count items from percentage ranking. Relative only to gainers/losers by percent. Default value is `0.25`.
**`firstRankPeriod`** | Computes the ranking of elements by considering the element's counts from the `firstRankPeriod` to the final period. Default is `0`. With this argument you can rank from the first period (`0`) to `periodCount - 1` (most popular) or `periodCount - 3` (gainers/losers) or anywhere in between. The `firstRankPeriod` is `0` based. For example, if `periodCount` is `15`, you can pass in a `firstRankPeriod` of anywhere from `0 - 14` for most popular, or `0 - 12` for gainers/losers (the API considers the differences between periods 12 and 13, and between periods 13 and 14). The trending algorithms require at least 3 periods (with two differences between them), because the API considers the differences, hence `periodCount` - 3 is the highest `firstRankPeriod` can be for gainers/losers and other trending algorithms.
**`algorithmArgument`** | Specifies how to order the values for Most Popular, Gainers or Losers. Specify either `percent`, `count` or `linear`. Default is `linear`.

```json
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

## Totals for Items not Displayed (Everything Else)

You can include an optional `"everythingElse"` element to return metric totals for elements that are not included in the report. For example, if most popular is selected, this returns totals for values that are not in the most popular list.

```json
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

Metrics | Elements
--- | ---
`cartadditions`<br/>`cartremovals`<br/>`carts`<br/>`cartviews`<br/>`checkouts`<br/>`event1`-`event1000`<br/>`instances`<br/>`mobilecrashes`<br/>`mobiledailyengagedusers`<br/>`mobileinstalls`<br/>`mobilelaunches`<br/>`mobilemonthlyengagedusers`<br/>`mobileprevsessionlength`<br/>`mobileupgrades`<br/>`orders`<br/>`revenue`<br/>`socialfbstories`<br/>`socialfbstorytellers`<br/>`sociallikeadds`<br/>`socialmentions`<br/>`socialpageviews`<br/>`socialpostviews`<br/>`socialpubcomments`<br/>`socialpubposts`<br/>`socialpubrecommends`<br/>`socialpubsubscribers`<br/>`socialtotalsentiment`<br/>`units`<br/>`videoadcomplete`<br/>`videoadstart`<br/>`videocomplete`<br/>`videosegmentviews`<br/>`videostart`<br/>`videotime` | `evar1`-`evar250`<br/>`geocity`<br/>`geocountry`<br/>`geodma`<br/>`georegion`<br/>`linkcustom`<br/>`linkdownload`<br/>`linkexit`<br/>`mobileappid`<br/>`mobiledayofweek`<br/>`mobiledayssincefirstuse`<br/>`mobiledayssincelastupgrade`<br/>`mobiledayssincelastuse`<br/>`mobiledevice`<br/>`mobilegooglecampaigncontent`<br/>`mobilegooglecampaignmedium`<br/>`mobilegooglecampaignname`<br/>`mobilegooglecampaignsource`<br/>`mobilegooglecampaignterm`<br/>`mobilehourofday`<br/>`mobileinstalldate`<br/>`mobilelaunchessincelastupgrade`<br/>`mobilelaunchnumber`<br/>`mobileosenvironment`<br/>`mobileosversion`<br/>`page`<br/>`product`<br/>`prop1`-`prop75`<br/>`referringdomain`<br/>`searchengine`<br/>`searchenginekeyword`<br/>`searchenginenatural`<br/>`searchenginepaid`<br/>`server`<br/>`sitesection`<br/>`socialassettrackingcode`<br/>`socialauthor`<br/>`socialcontentprovider`<br/>`sociallanguage`<br/>`sociallatlong`<br/>`socialterm`<br/>`surveybase`<br/>`topleveldomain`<br/>`video`<br/>`videoad`<br/>`videocontenttype`<br/>`videosegment`

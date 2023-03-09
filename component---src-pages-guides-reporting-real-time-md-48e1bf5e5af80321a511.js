"use strict";(self.webpackChunkanalytics_1_4_apis=self.webpackChunkanalytics_1_4_apis||[]).push([[8021],{44265:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return m},default:function(){return s}});var a=t(87462),r=t(63366),d=(t(15007),t(64983)),i=t(91515),l=["components"],m={},o={_frontmatter:m},p=i.Z;function s(e){var n=e.components,t=(0,r.Z)(e,l);return(0,d.mdx)(p,(0,a.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"real-time-reports"},"Real-Time Reports"),(0,d.mdx)("p",null,"Real Time API reports let you view orders, revenue, units, custom events, instances, and other metrics with up to three correlated dimensions to create granular, real time dashboards with seconds of latency. Real-time reports are available for a rolling 20 previous hour period."),(0,d.mdx)("p",null,"Real time reports operate most efficiently with frequent requests. We recommend between 15-30 seconds between updates."),(0,d.mdx)("h2",{id:"get-current-real-time-configuration"},"Get current real time configuration"),(0,d.mdx)("p",null,"Call ",(0,d.mdx)("a",{parentName:"p",href:"../admin-api/report-suite/get.md#getrealtimesettings"},"ReportSuite.GetRealTimeSettings")," "),(0,d.mdx)("p",null,"You'll receive an object with the current configuration, similar to the following:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "real_time_settings":[\n        {\n            "min_granularity":1,\n            "metric":"instances",\n            "elements":[\n                "prop2",\n                "searchenginekeyword"\n            ]\n        }\n    ]\n}\n')),(0,d.mdx)("h2",{id:"save-a-new-configuration"},"Save a new configuration"),(0,d.mdx)("p",null,"Call ",(0,d.mdx)("a",{parentName:"p",href:"../admin-api/report-suite/save.md#saverealtimesettings"},"ReportSuite.SaveRealTimeSettings")),(0,d.mdx)("p",null,"Send in a ",(0,d.mdx)("inlineCode",{parentName:"p"},"real_time_settings")," structure with the metrics and elements from the table in the next section that you would like to enable for real time reports."),(0,d.mdx)("p",null,"You can provide a single metric with up to three correlated elements. Note that you do not need to include each correlated element for every report. For example, based on the struct in step one, you can report searchenginekeyword instances without reporting prop2 instances. Realtime configuration changes take 15 minutes to be reflected in reports."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Note:")," If the ui_report parameter is set to false, you must save at least one element and one metric or the configuration will be invalid, even though an error does not occur. If the ui_report parameter is set to true, you must save three elements and one metric or you will receive an error."),(0,d.mdx)("h2",{id:"run-a-real-time-report"},"Run a real time report"),(0,d.mdx)("p",null,"Call ",(0,d.mdx)("a",{parentName:"p",href:"methods/r_Run.md#"},"Report.Run")," and set ",(0,d.mdx)("inlineCode",{parentName:"p"},'"source"')," to ",(0,d.mdx)("inlineCode",{parentName:"p"},'"realtime"'),"."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "reportDescription": {\n        "source": "realtime",\n        "reportSuiteID": "examplersid",\n        "metrics": [\n            { "id": "revenue" }\n        ]\n    }\n}\n')),(0,d.mdx)("h2",{id:"minute-granularity"},"Minute Granularity"),(0,d.mdx)("p",null,"When requesting a Real-Time report, you can provide a ",(0,d.mdx)("inlineCode",{parentName:"p"},'"dateGranularity"')," of ",(0,d.mdx)("inlineCode",{parentName:"p"},'"minute:[interval]"'),". The interval is an integer between 1-60 that specifies the interval to report. For example, ",(0,d.mdx)("inlineCode",{parentName:"p"},"'minute:3'")," reports the request date range in 3-minute intervals."),(0,d.mdx)("h2",{id:"relative-dates"},"Relative Dates"),(0,d.mdx)("p",null,"Real-Time Reports support ",(0,d.mdx)("a",{parentName:"p",href:"http://www.php.net/manual/en/datetime.formats.relative.php"},"relative dates")," for the ",(0,d.mdx)("inlineCode",{parentName:"p"},"Date"),", ",(0,d.mdx)("inlineCode",{parentName:"p"},"DateFrom"),", and ",(0,d.mdx)("inlineCode",{parentName:"p"},"DateTo")," parameters. For example, to report revenue between noon today and the current time in 3-minute intervals, you could use the following ",(0,d.mdx)("inlineCode",{parentName:"p"},"reportDescription"),":"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "reportDescription": {\n        "source": "realtime",\n        "dateFrom": "noon",\n        "dateTo": "now",\n        "dateGranularity": "minute:3",\n        "reportSuiteID": "rsid",\n        "metrics": [\n            { "id": "revenue" }\n        ]\n    }\n}\n')),(0,d.mdx)("h2",{id:"sort-options"},"Sort Options"),(0,d.mdx)("p",null,"Real-Time reports provide a number of sort options using the ",(0,d.mdx)("inlineCode",{parentName:"p"},"SortMethod")," property. It is a single concatenated string delimited by colons. The format is:"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},(0,d.mdx)("inlineCode",{parentName:"strong"},"[algorithm]:[floorSensitivity]:[firstRankPeriod]:[algorithmArgument]"))),(0,d.mdx)("p",null,"All components to this string are optional, reverting to its default value if omitted. If omitting parts of this string, make sure to still include the colon delimiters."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"String parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"algorithm"))),(0,d.mdx)("td",{parentName:"tr",align:null},"Supported values include ",(0,d.mdx)("inlineCode",{parentName:"td"},"mostpopular"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"gainers"),", and ",(0,d.mdx)("inlineCode",{parentName:"td"},"losers"),". Defaults to ",(0,d.mdx)("inlineCode",{parentName:"td"},"mostpopular"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"floorSensitivity"))),(0,d.mdx)("td",{parentName:"tr",align:null},"A factor between ",(0,d.mdx)("inlineCode",{parentName:"td"},"0")," and ",(0,d.mdx)("inlineCode",{parentName:"td"},"1")," to cut off low-count items from percentage ranking. Relative only to gainers/losers by percent. Default value is ",(0,d.mdx)("inlineCode",{parentName:"td"},"0.25"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"firstRankPeriod"))),(0,d.mdx)("td",{parentName:"tr",align:null},"Computes the ranking of elements by considering the element's counts from the ",(0,d.mdx)("inlineCode",{parentName:"td"},"firstRankPeriod")," to the final period. Default is ",(0,d.mdx)("inlineCode",{parentName:"td"},"0"),". With this argument you can rank from the first period (",(0,d.mdx)("inlineCode",{parentName:"td"},"0"),") to ",(0,d.mdx)("inlineCode",{parentName:"td"},"periodCount - 1")," (most popular) or ",(0,d.mdx)("inlineCode",{parentName:"td"},"periodCount - 3")," (gainers/losers) or anywhere in between. The ",(0,d.mdx)("inlineCode",{parentName:"td"},"firstRankPeriod")," is ",(0,d.mdx)("inlineCode",{parentName:"td"},"0")," based. For example, if ",(0,d.mdx)("inlineCode",{parentName:"td"},"periodCount")," is ",(0,d.mdx)("inlineCode",{parentName:"td"},"15"),", you can pass in a ",(0,d.mdx)("inlineCode",{parentName:"td"},"firstRankPeriod")," of anywhere from ",(0,d.mdx)("inlineCode",{parentName:"td"},"0 - 14")," for most popular, or ",(0,d.mdx)("inlineCode",{parentName:"td"},"0 - 12")," for gainers/losers (the API considers the differences between periods 12 and 13, and between periods 13 and 14). The trending algorithms require at least 3 periods (with two differences between them), because the API considers the differences, hence ",(0,d.mdx)("inlineCode",{parentName:"td"},"periodCount")," - 3 is the highest ",(0,d.mdx)("inlineCode",{parentName:"td"},"firstRankPeriod")," can be for gainers/losers and other trending algorithms.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"algorithmArgument"))),(0,d.mdx)("td",{parentName:"tr",align:null},"Specifies how to order the values for Most Popular, Gainers or Losers. Specify either ",(0,d.mdx)("inlineCode",{parentName:"td"},"percent"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"count")," or ",(0,d.mdx)("inlineCode",{parentName:"td"},"linear"),". Default is ",(0,d.mdx)("inlineCode",{parentName:"td"},"linear"),".")))),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "reportDescription": {\n        "source": "realtime",\n        "reportSuiteID": "rsid",\n        "sortMethod": "mostpopular:.25:0:linear",\n        "metrics": [\n            { "id": "revenue" }\n        ]\n    }\n}\n')),(0,d.mdx)("h2",{id:"totals-for-items-not-displayed-everything-else"},"Totals for Items not Displayed (Everything Else)"),(0,d.mdx)("p",null,"You can include an optional ",(0,d.mdx)("inlineCode",{parentName:"p"},'"everythingElse"')," element to return metric totals for elements that are not included in the report. For example, if most popular is selected, this returns totals for values that are not in the most popular list."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "reportDescription": {\n        "source": "realtime",\n        "reportSuiteID": "rsid",\n        "sortMethod": "mostpopular:.25:0:linear",\n        "metrics": [\n            { "id": "revenue" }\n        ],\n        "elements":[\n            {\n                "id":"product",\n                "everythingElse": true \n            }\n        ]\n    }\n}\n')),(0,d.mdx)("h2",{id:"supported-metrics-and-elements"},"Supported Metrics and Elements"),(0,d.mdx)("p",null,"The following table contains a list of the supported metrics and breakdowns available in Real Time Reports."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Metrics"),(0,d.mdx)("th",{parentName:"tr",align:null},"Elements"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"cartadditions"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"cartremovals"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"carts"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"cartviews"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"checkouts"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"event1"),"-",(0,d.mdx)("inlineCode",{parentName:"td"},"event1000"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"instances"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"mobilecrashes"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"mobiledailyengagedusers"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"mobileinstalls"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"mobilelaunches"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"mobilemonthlyengagedusers"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"mobileprevsessionlength"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"mobileupgrades"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"orders"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"revenue"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"socialfbstories"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"socialfbstorytellers"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"sociallikeadds"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"socialmentions"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"socialpageviews"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"socialpostviews"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"socialpubcomments"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"socialpubposts"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"socialpubrecommends"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"socialpubsubscribers"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"socialtotalsentiment"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"units"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"videoadcomplete"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"videoadstart"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"videocomplete"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"videosegmentviews"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"videostart"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"videotime")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"evar1"),"-",(0,d.mdx)("inlineCode",{parentName:"td"},"evar250"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"geocity"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"geocountry"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"geodma"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"georegion"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"linkcustom"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"linkdownload"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"linkexit"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"mobileappid"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"mobiledayofweek"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"mobiledayssincefirstuse"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"mobiledayssincelastupgrade"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"mobiledayssincelastuse"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"mobiledevice"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"mobilegooglecampaigncontent"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"mobilegooglecampaignmedium"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"mobilegooglecampaignname"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"mobilegooglecampaignsource"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"mobilegooglecampaignterm"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"mobilehourofday"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"mobileinstalldate"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"mobilelaunchessincelastupgrade"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"mobilelaunchnumber"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"mobileosenvironment"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"mobileosversion"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"page"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"product"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"prop1"),"-",(0,d.mdx)("inlineCode",{parentName:"td"},"prop75"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"referringdomain"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"searchengine"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"searchenginekeyword"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"searchenginenatural"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"searchenginepaid"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"server"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"sitesection"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"socialassettrackingcode"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"socialauthor"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"socialcontentprovider"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"sociallanguage"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"sociallatlong"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"socialterm"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"surveybase"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"topleveldomain"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"video"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"videoad"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"videocontenttype"),(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},"videosegment"))))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-reporting-real-time-md-48e1bf5e5af80321a511.js.map
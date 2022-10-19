(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6207],{55134:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return u}});var r=a(22122),n=a(19756),d=(a(15007),a(64983)),o=a(99536),i=["components"],s={},l={_frontmatter:s},m=o.Z;function u(e){var t=e.components,a=(0,n.Z)(e,i);return(0,d.mdx)(m,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"data-warehouse-reports"},"Data Warehouse Reports"),(0,d.mdx)("p",null,"Data Warehouse data is available through the Reporting API."),(0,d.mdx)("p",null,"You can run Data Warehouse reports in the Reporting API by setting ",(0,d.mdx)("inlineCode",{parentName:"p"},'"source":"warehouse"')," In the ",(0,d.mdx)("a",{parentName:"p",href:"methods/r_Queue.md#"},"Report.Queue")," method. This method returns a ",(0,d.mdx)("inlineCode",{parentName:"p"},"reportID"),";"),(0,d.mdx)("p",null,"When using ",(0,d.mdx)("a",{parentName:"p",href:"methods/r_Get.md#"},"Report.Get"),", the returned ",(0,d.mdx)("a",{parentName:"p",href:"data_types/r_report.md"},"Report")," may include multiple pages. To get data beyond the first page, make additional requests to ",(0,d.mdx)("a",{parentName:"p",href:"methods/r_Get.md#"},"Report.Get")," and specify the ",(0,d.mdx)("inlineCode",{parentName:"p"},"page")," number in either the body or query string."),(0,d.mdx)("p",null,"The API stores data warehouse data in zip format. When using ",(0,d.mdx)("a",{parentName:"p",href:"methods/r_Get.md#"},"Report.Get"),", it tries to unzip this data and transform it to JSON (or CSV) when returning it. The ",(0,d.mdx)("inlineCode",{parentName:"p"},"format")," query string parameter can be used to control how data is returned."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Possible Values"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"raw"),(0,d.mdx)("td",{parentName:"tr",align:null},"Returns the raw zip file returned by the data warehouse engine. Note: Pagination is disabled for ",(0,d.mdx)("inlineCode",{parentName:"td"},"format=raw")," requests")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"json (default)"),(0,d.mdx)("td",{parentName:"tr",align:null},"Returns results in a JSON data structure")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"csv"),(0,d.mdx)("td",{parentName:"tr",align:null},"Returns results in CSV format")))),(0,d.mdx)("h2",{id:"data-warehouse-api-best-practices"},"Data Warehouse API Best Practices"),(0,d.mdx)("p",null,"The Data Warehouse API is intended to be used to query large resultsets from the Analytics product. It should be used instead of the normal reporting api if reports take longer than about 2 hours to run."),(0,d.mdx)("p",null,"Factors that can cause reports to run for a long time:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Breakdowns that return a large number of values for each breakdown"),(0,d.mdx)("li",{parentName:"ul"},"Requests for a year+ of data using granularity that's a day or less")),(0,d.mdx)("p",null,"These types of requests should be made instead to the Data Warehouse API."),(0,d.mdx)("p",null,"If requesting a very large dataset (results greater than 20 MB), using the ",(0,d.mdx)("inlineCode",{parentName:"p"},"format=raw")," option is recommended as data will be ready the fastest and will take the least time to transfer. The API requires ",(0,d.mdx)("inlineCode",{parentName:"p"},"format=raw")," for zipped data warehouse results that exceed 50 MB in size and will indicate this as part of the Report.Get response."),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"NOTE: ",(0,d.mdx)("inlineCode",{parentName:"p"},"format=raw")," can be used on ",(0,d.mdx)("em",{parentName:"p"},"all")," requests if desired. It is only required if the data warehouse results exceed the 50 MB limit.")),(0,d.mdx)("p",null,"If not using ",(0,d.mdx)("inlineCode",{parentName:"p"},"format=raw")," and the dataset is less than 50 MB compressed but larger than 20 MB compressed, the ",(0,d.mdx)("inlineCode",{parentName:"p"},"page=X")," query parameter will be required to retreive all pages."),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"NOTE: ",(0,d.mdx)("inlineCode",{parentName:"p"},"page=X")," will work on both ",(0,d.mdx)("inlineCode",{parentName:"p"},"format=csv")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"format=JSON")," format types. It will be ignored if used with the ",(0,d.mdx)("inlineCode",{parentName:"p"},"format=raw")," format type.")),(0,d.mdx)("h2",{id:"requesting-todays-data"},"Requesting Today's Data"),(0,d.mdx)("p",null,"Data Warehouse requests will wait to be processed until all of the data for the requested time period has been collected and processed. For example, if you request data for 2021-05-13 (today), no data will be delivered or available via Report.Get until 2021-05-14. This can present a problem for customers that would like granular data more quickly."),(0,d.mdx)("p",null,"Including time information in the request enables a client to request data from the current day as long as data within the provided timeframe has been collected and processed."),(0,d.mdx)("p",null,"To maintain backward compatibility, an additional flag ",(0,d.mdx)("inlineCode",{parentName:"p"},'"fuzzyDates":false')," is required in the request body and will indicate to the Data Warehouse API that it should treat the provided dates as the exact timeframe being requested and not try to request full days."),(0,d.mdx)("h3",{id:"example"},"Example"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre"},'{\n  "reportDescription": {\n    "reportSuiteID": "testreportsuite",\n    "dateFrom": "2021-05-13 00:00:00",\n    "dateTo": "2021-05-13 12:00:00",\n    "fuzzyDates":false,\n    "metrics": [\n      {\n        "id": "visits"\n      }\n    ],\n    "elements": [\n      {\n        "id": "page",\n      }\n    ],\n    "source": "warehouse"\n  }\n}\n')),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"NOTE: Using the ",(0,d.mdx)("inlineCode",{parentName:"p"},'"fuzzyDates":false')," flag without providing time information will cause the API to set the time to '00:00:00'. For example: ",(0,d.mdx)("inlineCode",{parentName:"p"},'..."fuzzyDates":false, "dateFrom":"2021-05-13","dateTo":"2021-05-13"...')," will be interpreted in the API as requesting 2021-05-13 00:00:00 to 2021-05-13 00:00:00. In other words, a single second immediately following midnight will be requested. In contrast, making this same request with ",(0,d.mdx)("inlineCode",{parentName:"p"},'"fuzzyDates":true')," or no ",(0,d.mdx)("inlineCode",{parentName:"p"},"fuzzyDates")," parameter will request the entire day.")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-reporting-api-data-warehouse-md-b15dbbca805ce490ec4b.js.map
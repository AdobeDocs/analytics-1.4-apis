"use strict";(self.webpackChunkanalytics_1_4_apis=self.webpackChunkanalytics_1_4_apis||[]).push([[3804],{41790:function(e,n,r){r.r(n),r.d(n,{_frontmatter:function(){return s},default:function(){return l}});var t=r(87462),a=r(63366),i=(r(15007),r(64983)),p=r(91515),o=["components"],s={},m={_frontmatter:s},d=p.Z;function l(e){var n=e.components,r=(0,a.Z)(e,o);return(0,i.mdx)(d,(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"report-description-object-examples"},"Report description object examples"),(0,i.mdx)("p",null,"The following are some basic ",(0,i.mdx)("inlineCode",{parentName:"p"},"reportDescription")," JSON objects to help you get started creating the desired report."),(0,i.mdx)("h2",{id:"bare-minimum-request"},"Bare minimum request"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "reportDescription": {\n        "reportSuiteID": "examplersid"\n    }\n}\n')),(0,i.mdx)("h2",{id:"overtime-report"},"Overtime report"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "reportDescription": {\n        "reportSuiteID": "examplersid",\n        "dateGranularity": "hour"\n    }\n}\n')),(0,i.mdx)("h2",{id:"ranked-report"},"Ranked report"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "reportDescription": {\n        "reportSuiteID": "examplersid",\n        "elements": [\n            {"id": "page"}\n        ]\n    }\n}\n')),(0,i.mdx)("h2",{id:"trended-report"},"Trended report"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "reportDescription": {\n        "reportSuiteID": "examplersid",\n        "dateGranularity": "hour",\n        "elements": [\n            {"id":"page"}\n        ]\n    }\n}\n')),(0,i.mdx)("h2",{id:"pathing-report---next-page-flow"},"Pathing report - next page flow"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "reportDescription": {\n        "reportSuiteID": "examplersid",\n        "metrics": [\n            {"id":"pageviews"}\n        ],\n        "elements": [\n            {\n                "id": "page",\n                "top": "10",\n                "startingWith": "1",\n                "pattern": [\n                    ["homepage"],\n                    ["::anything::"],\n                    ["::anything::"],\n                    ["::anything::"],\n                    ["::anything::"]\n                ]\n            }\n        ]\n    }\n}\n')),(0,i.mdx)("h2",{id:"pathing-report---previous-page-flow"},"Pathing report - previous page flow"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "reportDescription": {\n        "reportSuiteID": "examplersid",\n        "metrics": [\n            {"id":"pageviews"}\n        ],\n        "elements" :[\n            {\n                "id": "page",\n                "pattern": [\n                    ["::anything::"],\n                    ["::anything::"],\n                    ["::anything::"],\n                    ["::anything::"],\n                    ["homepage"],\n                ]\n            }\n        ]\n    }\n}\n')),(0,i.mdx)("h2",{id:"fallout-report"},"Fallout report"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "reportDescription": {\n        "reportSuiteID": "examplersid",\n        "metrics": [\n            {"id": "pageviews"}\n        ],\n        "elements": [\n            {\n                "id": "page",\n                "checkpoints": [\n                    "homepage",\n                    "/templates/choose-your-powerpoint-fonts-wisely/"\n                ]\n            }\n        ]\n    }\n}\n')),(0,i.mdx)("h2",{id:"real-time-report"},"Real-time report"),(0,i.mdx)("p",null,"Make sure that you configure real-time reports for the report suite."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "reportDescription": {\n        "source": "realtime",\n        "reportSuiteID": "examplersid",\n        "metrics": [\n            { "id": "revenue" }\n        ]\n    }\n}\n')),(0,i.mdx)("h2",{id:"real-time-report-with-sort-options"},"Real-time report with sort options"),(0,i.mdx)("p",null,"Note that the ",(0,i.mdx)("inlineCode",{parentName:"p"},"sortMethod")," element contains a colon-delimited string with the desired sort options."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "reportDescription": {\n        "source": "realtime",\n        "reportSuiteID": "examplersid",\n        "sortMethod": "mostPopular:.25:0:linear",\n        "metrics": [\n            { "id": "pageviews" }\n        ]\n    }\n}\n')),(0,i.mdx)("h2",{id:"summary-report"},"Summary report"),(0,i.mdx)("p",null,"Note that the ",(0,i.mdx)("inlineCode",{parentName:"p"},"reportSuiteID")," property is not included. Instead, ",(0,i.mdx)("inlineCode",{parentName:"p"},"reportsuite")," is listed as a dimension under ",(0,i.mdx)("inlineCode",{parentName:"p"},"elements")," with desired report suites in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"selected")," property."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "reportDescription": {\n        "date": "YYYY",\n        "metrics": [\n            {\n                "id": "pageviews",\n            },\n            {\n                "id": "revenue",\n            },\n        ],\n        "elements": [\n            {\n                "id": "reportsuite",\n                "selected": [\n                    "examplersid1",\n                    "examplersid2"\n                ]\n            }\n\n        ],\n    }\n}\n')))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-reporting-report-description-examples-md-ef5b43227e265d2eda89.js.map
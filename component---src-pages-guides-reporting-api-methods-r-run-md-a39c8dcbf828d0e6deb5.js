(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[8264],{27612:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return i}});var r=a(22122),n=a(19756),d=(a(15007),a(64983)),m=a(99536),p=["components"],l={},o={_frontmatter:l},u=m.Z;function i(e){var t=e.components,a=(0,n.Z)(e,p);return(0,d.mdx)(u,(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"run"},"Run"),(0,d.mdx)("p",null,"Run a real-time report immediately without using the queue."),(0,d.mdx)("h2",{id:"reportrun-parameters"},"Report.Run Parameters"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Name"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"reportDescription")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"../data_types/r_reportDescription.md#"},"reportDescription")),(0,d.mdx)("td",{parentName:"tr",align:null},"A report description that specifies the desired report contents. This data structure is validated automatically before the report is generated.")))),(0,d.mdx)("h2",{id:"reportrun-response"},"Report.Run response"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"../data_types/r_reportResponse.md#"},"reportResponse")),(0,d.mdx)("td",{parentName:"tr",align:null},"Contains the requested report data.")))),(0,d.mdx)("h2",{id:"report-type"},"Report Type"),(0,d.mdx)("p",null,"Report types are determined by the parameters of the ",(0,d.mdx)("inlineCode",{parentName:"p"},"reportDescription")," according to the following table:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Report Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Parameters"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Overtime Report"),(0,d.mdx)("td",{parentName:"tr",align:null},"No elements with a dateGranularity specified. Not supported by Run, use ",(0,d.mdx)("a",{parentName:"td",href:"r_Queue.md#"},"Report.Queue")," instead.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Ranked Report"),(0,d.mdx)("td",{parentName:"tr",align:null},"1 or more elements with no dateGranularity specified. Not supported by Run, use ",(0,d.mdx)("a",{parentName:"td",href:"r_Queue.md#"},"Report.Queue")," instead.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Trended Report"),(0,d.mdx)("td",{parentName:"tr",align:null},"1 or more elements with a dateGranularity specified. Not supported by Run, use ",(0,d.mdx)("a",{parentName:"td",href:"r_Queue.md#"},"Report.Queue")," instead.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Pathing Report"),(0,d.mdx)("td",{parentName:"tr",align:null},"Element in the pattern parameter. Not supported by Run, use ",(0,d.mdx)("a",{parentName:"td",href:"r_Queue.md#"},"Report.Queue")," instead.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Fallout Report"),(0,d.mdx)("td",{parentName:"tr",align:null},"Element in the checkpoint parameter. Not supported by Run, use ",(0,d.mdx)("a",{parentName:"td",href:"r_Queue.md#"},"Report.Queue")," instead.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Summary Report"),(0,d.mdx)("td",{parentName:"tr",align:null},'No "reportSuiteID" parameter, instead "reportsuite" is specified as the report element and the "selected" parameter contains a list of report suite IDs. Not supported by Run, use ',(0,d.mdx)("a",{parentName:"td",href:"r_Queue.md#"},"Report.Queue")," instead.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Real-Time Report"),(0,d.mdx)("td",{parentName:"tr",align:null},'"source" parameter present and set to "realtime".')))),(0,d.mdx)("p",null,"The type derived is then returned in the result data as: ranked, trended, overtime, pathing, fallout, summary, or realtime."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"metrics")," "),(0,d.mdx)("p",null,'If the list of metrics is left empty, the default metric of "pageviews" is used.'),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"elements")," "),(0,d.mdx)("p",null,'If the list of elements is left empty, the default element of "page" is used.'),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"date/dateFrom/dateTo")," "),(0,d.mdx)("p",null,"If the date parameter(s) are omitted, the current day is used."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Parent topic:")," ",(0,d.mdx)("a",{parentName:"p",href:"../methods/methods.md"},"Methods")))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-reporting-api-methods-r-run-md-a39c8dcbf828d0e6deb5.js.map
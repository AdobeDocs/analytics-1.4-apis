(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[45373],{52502:function(e,a,t){"use strict";t.r(a),t.d(a,{_frontmatter:function(){return d},default:function(){return p}});var i=t(22122),o=t(19756),n=(t(15007),t(64983)),s=t(99536),r=["components"],d={},c={_frontmatter:d},l=s.Z;function p(e){var a=e.components,t=(0,o.Z)(e,r);return(0,n.mdx)(l,(0,i.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"overview"},"Overview"),(0,n.mdx)("p",null,"To learn more, see ",(0,n.mdx)("a",{parentName:"p",href:"https://marketing.adobe.com/resources/help/en_US/sc/datasources/"},"Data Sources Help"),"."),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"Note:")," Once submitted via the Data Sources API, imported data is indistinguishable from Analytics data gathered using other methods ","(","such as JavaScript, AppMeasurement, and the Data Insertion API",")",". You cannot back the data out after importing it."),(0,n.mdx)("p",null,"Instead of using the standard FTP file submission process to get data to Adobe data collection servers, use the Data Sources API to submit HTTP data blocks using a SOAP or REST interface. This is particularly useful for uploading historical data for use in Analytics reports."),(0,n.mdx)("p",null,"In addition to providing an automated mechanism for submitting data to Analytics, the Data Sources API also provides basic data validation immediately. Upon submission, the Data Sources API validates the basic data format and structure in the submitted block and returns an error if it encounters any problems. You can immediately correct the problem and resubmit the data block."),(0,n.mdx)("p",null,"Contrast this with an FTP data submission, where data validation doesn't occur until Analytics attempts to process the data. This difference in validation points results in a delay of at least 30 minutes before you know about a data formatting error."),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"680px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.9375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/analytics-1.4-apis/static/d7380bf86ddd66fec1c15e5a1e18965a/cb523/data_sources_overview.webp 320w","/analytics-1.4-apis/static/d7380bf86ddd66fec1c15e5a1e18965a/797b9/data_sources_overview.webp 640w","/analytics-1.4-apis/static/d7380bf86ddd66fec1c15e5a1e18965a/63aff/data_sources_overview.webp 680w"],sizes:"(max-width: 680px) 100vw, 680px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/analytics-1.4-apis/static/d7380bf86ddd66fec1c15e5a1e18965a/72799/data_sources_overview.png 320w","/analytics-1.4-apis/static/d7380bf86ddd66fec1c15e5a1e18965a/6af66/data_sources_overview.png 640w","/analytics-1.4-apis/static/d7380bf86ddd66fec1c15e5a1e18965a/c5bb3/data_sources_overview.png 680w"],sizes:"(max-width: 680px) 100vw, 680px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/analytics-1.4-apis/static/d7380bf86ddd66fec1c15e5a1e18965a/c5bb3/data_sources_overview.png",alt:"Displays the flow of data using both the Data Sources API and traditional Data Sources upload (FTP).",title:"Displays the flow of data using both the Data Sources API and traditional Data Sources upload (FTP).",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,"The general process for creating a Data Source with the Data Sources API is as follows:"),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},"Call one of the Data Source setup methods ","(",(0,n.mdx)("inlineCode",{parentName:"li"},"DataSource.SetupTraffic"),", ",(0,n.mdx)("inlineCode",{parentName:"li"},"DataSource.SetupWebLog"),", ",(0,n.mdx)("inlineCode",{parentName:"li"},"DataSource.SetupGeneric"),")"," to create the type of data source you need."),(0,n.mdx)("li",{parentName:"ol"},"Call ",(0,n.mdx)("inlineCode",{parentName:"li"},"DataSource.GetIDs")," or ",(0,n.mdx)("inlineCode",{parentName:"li"},"DataSource.GetInfo")," to get the Data Source ID of the new Data Source."),(0,n.mdx)("li",{parentName:"ol"},"Call ",(0,n.mdx)("inlineCode",{parentName:"li"},"DataSource.BeginDataBlock")," and, if necessary, ",(0,n.mdx)("inlineCode",{parentName:"li"},"DataSource.AppendDataBlock")," to add data to the new data source and submit the data source to the Processing Queue."),(0,n.mdx)("li",{parentName:"ol"},"Call ",(0,n.mdx)("inlineCode",{parentName:"li"},"DataSource.GetFileIDs")," or ",(0,n.mdx)("inlineCode",{parentName:"li"},"DataSource.GetFileInfo")," to get the File ID of the Data Source file in the Processing Queue."),(0,n.mdx)("li",{parentName:"ol"},"Call ",(0,n.mdx)("inlineCode",{parentName:"li"},"DataSource.GetFileStatus")," to monitor the status of the data source file. When data source processing completes, the data sent through the data source is available in Analytics."),(0,n.mdx)("li",{parentName:"ol"},"Call ",(0,n.mdx)("inlineCode",{parentName:"li"},"DataSource.Deactivate")," to manage the data source as needed.")),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"Note:")," Many Data Sources methods require and/or return a Data Sources ID, which is a numeric value that identifies the type of data source associated with this method call. For more information, see ",(0,n.mdx)("a",{parentName:"p",href:"c_data_sources_id.md#"},"Data Sources ID"),"."),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"Parent topic:")," ",(0,n.mdx)("a",{parentName:"p",href:"c_data_sources_api_1_3.md"},"Data Sources Version 1.3")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-data-sources-api-overview-md-630cd9d79c97e9fa0b60.js.map
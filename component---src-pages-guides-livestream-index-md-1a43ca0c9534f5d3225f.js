"use strict";(self.webpackChunkanalytics_1_4_apis=self.webpackChunkanalytics_1_4_apis||[]).push([[2110],{83743:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return m},default:function(){return u}});var n,r=a(87462),o=a(63366),i=(a(15007),a(64983)),s=a(91515),d=["components"],m={},l=(n="CodeBlock",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),p={_frontmatter:m},c=s.Z;function u(e){var t=e.components,a=(0,o.Z)(e,d);return(0,i.mdx)(c,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"getting-started-with-adobe-analytics-livestream"},"Getting started with Adobe Analytics Livestream"),(0,i.mdx)("p",null,"Livestream is a reporting feature in Adobe Analytics that allows a client to receive traffic processed by Adobe Analytics in real-time. Traffic is streamed to the client on a hit or impression basis, in the same order and rate that hits are processed."),(0,i.mdx)("p",null,"This feature is useful for those building:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"A real-time dashboard that represents actions visitors are taking in a mobile app or web site."),(0,i.mdx)("li",{parentName:"ul"},"A visitor-level integration that sends information to personalization or marketing platforms in real-time."),(0,i.mdx)("li",{parentName:"ul"},"A forecasting or anomaly detection service that updates a model and produces forecasts/anomaly reports in real-time.")),(0,i.mdx)("h2",{id:"create-an-adobe-developer-console-account"},"Create an Adobe Developer Console account"),(0,i.mdx)("p",null,"To start, create an ",(0,i.mdx)("a",{parentName:"p",href:"https://www.adobe.io/authentication/auth-methods.html#!AdobeDocs/adobeio-auth/master/AuthenticationOverview/ServiceAccountIntegration.md"},"Adobe Developer Console")," account. This account provides the credentials to authenticate and connect to the stream. After creating this account, make a note of the ",(0,i.mdx)("strong",{parentName:"p"},"Technical Account Email"),". This email is used later to link the service account to a Livestream endpoint."),(0,i.mdx)("h2",{id:"identify-and-understand-the-data-structure-for-the-stream"},"Identify and understand the data structure for the stream"),(0,i.mdx)("p",null,"Review the list of ",(0,i.mdx)("a",{parentName:"p",href:"variable-reference.md"},"dimensions and metrics")," to identify and understand the data structure for the stream. The stream sends a new object in response to a GET call every time a report suite receives another hit. The stream outputs all applicable dimensions and metrics for the report suite. "),(0,i.mdx)("h2",{id:"contact-customer-care-to-provision-the-stream"},"Contact Customer Care to provision the stream"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://helpx.adobe.com/contact.html"},"Customer Care")," requires all of the following information to provision the stream:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Data center location (London, Pacific North West, Singapore)"),(0,i.mdx)("li",{parentName:"ul"},"Login company or IMS organization"),(0,i.mdx)("li",{parentName:"ul"},"A report suite ID for each stream requested and for which data is being generated"),(0,i.mdx)("li",{parentName:"ul"},"Estimated daily and monthly traffic volume averages"),(0,i.mdx)("li",{parentName:"ul"},"The ",(0,i.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/console/home"},"Adobe Developer Console")," technical account email address")),(0,i.mdx)("h2",{id:"create-an-application-to-consume-the-api-service"},"Create an application to consume the API service"),(0,i.mdx)("p",null,"Depending on the use case for your stream, create an application for the service. This application should include the business logic you want to use. "),(0,i.mdx)("h2",{id:"connect-to-the-stream"},"Connect to the stream"),(0,i.mdx)("p",null,"To connect to the steam, make a request that looks similar to the following:"),(0,i.mdx)(l,{slots:"code",repeat:"1",languages:"CURL",mdxType:"CodeBlock"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X GET "https://livestream.adobe.net/api/1/stream/adobe-livestream-{endpoint-name}" \\\n    -H "x-api-key: {CLIENTID}" \\\n    -H "Authorization: Bearer {ACCESSTOKEN}" \\\n    --location-trusted \\\n    --compressed\n')),(0,i.mdx)("p",null,"When contacting Customer Care for provisioning, you will receive the complete URI to connect to the stream, including the ",(0,i.mdx)("inlineCode",{parentName:"p"},"{endpoint-name}"),", as shown in the example above. The URI will also include the report suite ID that you supply to Customer Care. "),(0,i.mdx)("h2",{id:"review-the-stream-output"},"Review the stream output"),(0,i.mdx)("p",null,"Once connected to the stream, impression data is streamed with ",(0,i.mdx)("a",{parentName:"p",href:"https://www.gnu.org/software/gzip/manual/gzip.html"},"Gzip compression")," (",(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)("inlineCode",{parentName:"strong"},".gz")),") in JSON format and reflects data currently collected by the report suite. Data is See ",(0,i.mdx)("a",{parentName:"p",href:"example-output.md"},"Livestream sample JSON output")," to view a sample of a typical response."),(0,i.mdx)("p",null,"If there is no data actively flowing into the report suite, the client connects but no data appears in the stream."),(0,i.mdx)("h2",{id:"use-optional-query-parameters"},"Use optional query parameters"),(0,i.mdx)("p",null,"You can also include query string parameters in your call, as described below:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Query parameter"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("strong",{parentName:"td"},(0,i.mdx)("inlineCode",{parentName:"strong"},"maxConnections"))),(0,i.mdx)("td",{parentName:"tr",align:null},"Allows the distribution of hits across multiple clients. This number determines the maximum number of clients that can connect to the same stream. Valid values include ",(0,i.mdx)("inlineCode",{parentName:"td"},"1")," through ",(0,i.mdx)("inlineCode",{parentName:"td"},"8"),".")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("strong",{parentName:"td"},(0,i.mdx)("inlineCode",{parentName:"strong"},"reset"))),(0,i.mdx)("td",{parentName:"tr",align:null},"The age of data to return during the initial connection/reconnection. Valid values include ",(0,i.mdx)("inlineCode",{parentName:"td"},"smallest")," (streams the oldest possible data) and ",(0,i.mdx)("inlineCode",{parentName:"td"},"largest")," (streams the newest possible data).")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("strong",{parentName:"td"},(0,i.mdx)("inlineCode",{parentName:"strong"},"smoothing"))),(0,i.mdx)("td",{parentName:"tr",align:null},"Smooths the rate of records returned by Livestream using a server-side buffer. Disabled by default; set to ",(0,i.mdx)("inlineCode",{parentName:"td"},"1")," to enable smoothing.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("strong",{parentName:"td"},(0,i.mdx)("inlineCode",{parentName:"strong"},"smoothingBucketSize"))),(0,i.mdx)("td",{parentName:"tr",align:null},"The size of the time window, in seconds, that determines the average traffic rate used in smoothing. Supported values include integers between ",(0,i.mdx)("inlineCode",{parentName:"td"},"1")," and ",(0,i.mdx)("inlineCode",{parentName:"td"},"7200"),". The default is ",(0,i.mdx)("inlineCode",{parentName:"td"},"270")," seconds. If ",(0,i.mdx)("inlineCode",{parentName:"td"},"smoothing")," is omitted, this parameter does nothing.")))),(0,i.mdx)("h2",{id:"additional-notes"},"Additional notes"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Your site must support redirects to receive the output."),(0,i.mdx)("li",{parentName:"ul"},"The output data in Livestream is already processed through ",(0,i.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/docs/analytics/technotes/vista.html"},"VISTA")," and processing rules.")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-livestream-index-md-1a43ca0c9534f5d3225f.js.map
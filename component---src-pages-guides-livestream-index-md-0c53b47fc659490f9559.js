(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2110],{3743:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return c}});var n,i=a(2122),r=a(9756),o=(a(5007),a(4983)),d=a(9536),m=["components"],s={},l=(n="CodeBlock",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),p={_frontmatter:s},u=d.Z;function c(e){var t=e.components,a=(0,r.Z)(e,m);return(0,o.mdx)(u,(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"getting-started-with-adobe-analytics-livestream"},"Getting Started with Adobe Analytics Livestream"),(0,o.mdx)("p",null,"Livestream is a reporting feature in Adobe Analytics that allows a client to receive traffic processed by Adobe Analytics in real-time. Traffic is streamed to the client on a hit or impression basis, in the same order and rate that hits are processed."),(0,o.mdx)("p",null,"This feature can be useful to those building:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"A real-time dashboard that represents actions visitors are taking in a mobile app or web site."),(0,o.mdx)("li",{parentName:"ul"},"A visitor-level integration that sends information to personalization or marketing platforms in real-time."),(0,o.mdx)("li",{parentName:"ul"},"A forecasting or anomaly detection service that updates a model and produces forecasts/anomaly reports in real-time.")),(0,o.mdx)("h2",{id:"create-a-client"},"Create a Client"),(0,o.mdx)("p",null,"Create an ",(0,o.mdx)("a",{parentName:"p",href:"https://www.adobe.io/authentication/auth-methods.html#!AdobeDocs/adobeio-auth/master/AuthenticationOverview/ServiceAccountIntegration.md"},"Adobe.io Service Account"),". This account is used by the client to authenticate and connect to the stream. After creating this account, make a note of the ",(0,o.mdx)("em",{parentName:"p"},"technical account email address"),". This email is used later to link the the service account to a Livestream endpoint."),(0,o.mdx)("h2",{id:"identify-what-should-be-in-the-stream"},"Identify What Should Be in the Stream"),(0,o.mdx)("p",null,"Review the list of ",(0,o.mdx)("a",{parentName:"p",href:"variable-reference.md"},"dimensions and metrics")," to identify what you want to appear in your stream. For report suites with very high volume, it is important to only include dimensions and metrics that you intend to use."),(0,o.mdx)("h2",{id:"contact-customer-care-to-provision-the-stream"},"Contact Customer Care to Provision the Stream"),(0,o.mdx)("p",null,"Customer Care requires all of the following information to provision the stream:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Data Center Location (London, Pacific North West, Singapore)"),(0,o.mdx)("li",{parentName:"ul"},"Login Company or IMS organization"),(0,o.mdx)("li",{parentName:"ul"},"A Report Suite ID for each stream requested"),(0,o.mdx)("li",{parentName:"ul"},"Daily and Monthly Traffic Volume Averages"),(0,o.mdx)("li",{parentName:"ul"},"The Adobe.io technical account email address")),(0,o.mdx)("h2",{id:"connect-to-the-stream"},"Connect to the Stream"),(0,o.mdx)("p",null,"A connection request looks similar to the following:"),(0,o.mdx)(l,{slots:"code",repeat:"1",languages:"CURL",mdxType:"CodeBlock"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X GET "https://livestream.adobe.net/api/1/stream/adobe-livestream-endpoint-name" \\\n    -H "x-api-key: {CLIENTID}" \\\n    -H "Authorization: Bearer {ACCESSTOKEN}" \\\n    --location-trusted \\\n    --compressed\n')),(0,o.mdx)("p",null,"Once connected to the stream, impression data is streamed in a line-delimited JSON format and reflects data currently collected by a report suite. See ",(0,o.mdx)("a",{parentName:"p",href:"example-output.md"},"Livestream sample JSON output")," to see what a typical row of data might look like."),(0,o.mdx)("p",null,"If there is no data actively flowing into the report suite, the client connects but no data appears in the stream."),(0,o.mdx)("h2",{id:"optional-query-parameters"},"Optional query parameters"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Query parameter"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("strong",{parentName:"td"},(0,o.mdx)("inlineCode",{parentName:"strong"},"maxConnections"))),(0,o.mdx)("td",{parentName:"tr",align:null},"Allows the distribution of hits across multiple clients. This number determines the maximum number of clients that can connect to the same stream. Valid values include ",(0,o.mdx)("inlineCode",{parentName:"td"},"1")," through ",(0,o.mdx)("inlineCode",{parentName:"td"},"8"),".")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("strong",{parentName:"td"},(0,o.mdx)("inlineCode",{parentName:"strong"},"reset"))),(0,o.mdx)("td",{parentName:"tr",align:null},"The age of data to return during the initial connection/reconnection. Valid values include ",(0,o.mdx)("inlineCode",{parentName:"td"},"smallest")," (streams the oldest possible data) and ",(0,o.mdx)("inlineCode",{parentName:"td"},"largest")," (streams the newest possible data).")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("strong",{parentName:"td"},(0,o.mdx)("inlineCode",{parentName:"strong"},"smoothing"))),(0,o.mdx)("td",{parentName:"tr",align:null},"Smooths the rate of records returned by Livestream using a server-side buffer. Disabled by default; set to ",(0,o.mdx)("inlineCode",{parentName:"td"},"1")," to enable smoothing.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("strong",{parentName:"td"},(0,o.mdx)("inlineCode",{parentName:"strong"},"smoothingBucketSize"))),(0,o.mdx)("td",{parentName:"tr",align:null},"The size of the time window, in seconds, that determines the average traffic rate used in smoothing. Supported values include integers between ",(0,o.mdx)("inlineCode",{parentName:"td"},"1")," and ",(0,o.mdx)("inlineCode",{parentName:"td"},"7200"),". The default is ",(0,o.mdx)("inlineCode",{parentName:"td"},"270")," seconds. If ",(0,o.mdx)("inlineCode",{parentName:"td"},"smoothing")," is omitted, this parameter does nothing.")))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-livestream-index-md-0c53b47fc659490f9559.js.map
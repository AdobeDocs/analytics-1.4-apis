(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[9618],{35697:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return s}});var n=a(22122),d=a(19756),m=(a(15007),a(64983)),r=a(99536),i=["components"],l={},o={_frontmatter:l},p=r.Z;function s(e){var t=e.components,a=(0,d.Z)(e,i);return(0,m.mdx)(p,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"supported-xml-tags-and-query-variables"},"Supported XML Tags and Query Variables"),(0,m.mdx)("p",null,"The following table lists all supported XML tags, along with their associated query string variable equivalents and HTTP header variable equivalents, where applicable."),(0,m.mdx)("p",null,"When sending ",(0,m.mdx)("inlineCode",{parentName:"p"},"HTTP POST")," data, Adobe data collection servers only process values in supported XML tags. When sending ",(0,m.mdx)("inlineCode",{parentName:"p"},"HTTP GET")," data, Adobe data collection servers only process values in supported query strings and HTTP headers."),(0,m.mdx)("h2",{id:"required-components"},"Required components"),(0,m.mdx)("p",null,"Every Data Insertion API call must include the following components:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"At least one of:",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"<marketingCloudVisitorId>")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"<fallbackVisitorId>")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"<visitorId>")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"<ipAdress>")," and ",(0,m.mdx)("inlineCode",{parentName:"li"},"<userAgent>")))),(0,m.mdx)("li",{parentName:"ul"},"At least one of:",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"<pageUrl>")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"<pageName>")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"<linkType>")," with ",(0,m.mdx)("inlineCode",{parentName:"li"},"<linkName>")," or ",(0,m.mdx)("inlineCode",{parentName:"li"},"<linkUrl>")))),(0,m.mdx)("li",{parentName:"ul"},"Report suite ID (in the request URL for ",(0,m.mdx)("inlineCode",{parentName:"li"},"GET")," or ",(0,m.mdx)("inlineCode",{parentName:"li"},"<reportSuiteId>")," for ",(0,m.mdx)("inlineCode",{parentName:"li"},"POST"),")")),(0,m.mdx)("p",null,"API calls that do not meet the above requirements are omitted from reporting. XML tags are not case-sensitive; capitalization is used only to assist readability."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"XML tag (",(0,m.mdx)("inlineCode",{parentName:"th"},"POST"),")"),(0,m.mdx)("th",{parentName:"tr",align:null},"Query string parameter (",(0,m.mdx)("inlineCode",{parentName:"th"},"GET"),")"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<browserHeight>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"bh")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/browser-height.html"},"Browser height")," dimension.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<browserWidth>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"bw")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/browser-width.html"},"Browser width")," dimension.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<campaign>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"v0")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/tracking-code.html"},"Tracking code")," dimension.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<channel>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"ch")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/site-section.html"},"Site section")," dimension.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<colorDepth>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"c")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/color-depth.html"},"Color depth")," dimension.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<connectionType>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"ct")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/connection-type.html"},"Connection type")," dimension.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<contextData.key>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"c.[key]")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/contextdata.html"},(0,m.mdx)("inlineCode",{parentName:"a"},"contextData"))," implementation variables.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<cookiesEnabled>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"k")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/cookie-support.html"},"Cookie support")," dimension.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<customerPerspective>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"cp")),(0,m.mdx)("td",{parentName:"tr",align:null},"Integer representing if the hit is considered a background or foreground hit. Valid values include ",(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"0"))," (foreground hit, default) and ",(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"1"))," (background hit). See ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/virtual-report-suites/vrs-mobile-visit-processing.html"},"Context-aware sessions"),".")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<currencyCode>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"cc")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/implementation/vars/config-vars/currencycode.html"},(0,m.mdx)("inlineCode",{parentName:"a"},"currencyCode"))," implementation variable.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<eVar1>")," - ",(0,m.mdx)("inlineCode",{parentName:"td"},"<eVar250>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"v1")," - ",(0,m.mdx)("inlineCode",{parentName:"td"},"v250")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/evar.html"},"eVar")," dimensions.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<events>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"events")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/events/events-overview.html"},(0,m.mdx)("inlineCode",{parentName:"a"},"events"))," implementation variable.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<fallbackVisitorId>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"fid")),(0,m.mdx)("td",{parentName:"tr",align:null},"A fallback cookie ",(0,m.mdx)("inlineCode",{parentName:"td"},"s_fid")," is set when the primary cookie (",(0,m.mdx)("inlineCode",{parentName:"td"},"AMCV_")," or ",(0,m.mdx)("inlineCode",{parentName:"td"},"s_vi"),") is unavailable. It has a 2 year expiration and is used as the fallback identification method going forward.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<hier1>")," - ",(0,m.mdx)("inlineCode",{parentName:"td"},"<hier5>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"h1")," - ",(0,m.mdx)("inlineCode",{parentName:"td"},"h5")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/hier.html"},"Hierarchy variables"),".")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<imsRegion>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"aamlh")),(0,m.mdx)("td",{parentName:"tr",align:null},"Integer that represents the Adobe Audience Manager location hint. Ensures that data is forwarded to the right Audience Manager regional data collection center. The Analytics tracking server/API endpoint must also be set to forward to the correct Audience Manager instance before Analytics data is forwarded to Audience Manager. Use the ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/id-service/using/id-service-api/methods/getlocationhint.html"},"getLocationHint")," function of the Adobe Experience Cloud Identity Service API to retrieve the correct ",(0,m.mdx)("inlineCode",{parentName:"td"},"<imsregion>")," value for the user. The ",(0,m.mdx)("inlineCode",{parentName:"td"},"<marketingCloudVisitorID>")," tag is also required when using this tag.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<ipAddress>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"X-Forwarded-For")," HTTP header"),(0,m.mdx)("td",{parentName:"tr",align:null},"The visitor's IP address.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<javaEnabled>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"v")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/java-enabled.html"},"Java enabled")," dimension.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<language>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"Accept-Language")," HTTP header"),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/language.html"},"Language")," dimension.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<linkName>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"pev2")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/download-link.html"},"Download link"),", ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/exit-link.html"},"Exit link"),", or ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/custom-link.html"},"Custom link")," dimension, depending on the value in the ",(0,m.mdx)("inlineCode",{parentName:"td"},"<linkType>")," tag. If this tag contains a value, ",(0,m.mdx)("inlineCode",{parentName:"td"},"<pageName>")," is ignored.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<linkType>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"pe")),(0,m.mdx)("td",{parentName:"tr",align:null},"The type of link. Defaults to ",(0,m.mdx)("inlineCode",{parentName:"td"},"o")," if this tag is empty or omitted and ",(0,m.mdx)("inlineCode",{parentName:"td"},"<linkName>")," contains a value. Valid values include:",(0,m.mdx)("br",null)," ",(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"d")),": Download link",(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"e")),": Exit link",(0,m.mdx)("br",null),(0,m.mdx)("strong",{parentName:"td"},(0,m.mdx)("inlineCode",{parentName:"strong"},"o")),": Custom link")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<linkUrl>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"pev1")),(0,m.mdx)("td",{parentName:"tr",align:null},"The link URL.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<list1>")," - ",(0,m.mdx)("inlineCode",{parentName:"td"},"<list3>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"l1")," - ",(0,m.mdx)("inlineCode",{parentName:"td"},"l3")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/list.html"},"List variables"),".")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<marketingCloudOrgId>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"mcorgid")),(0,m.mdx)("td",{parentName:"tr",align:null},"The Experience Cloud Organization ID; it identifies the organization within the Adobe Experience Cloud.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<marketingCloudVisitorId>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"mid")),(0,m.mdx)("td",{parentName:"tr",align:null},"The unique identifier used with the ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/id-service/using/id-service-api/library.html"},"Adobe Experience Cloud Identity Service"),".")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<pageName>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"pageName")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/page.html"},"Page")," dimension.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<pageType>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"pageType")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/pagetype.html"},(0,m.mdx)("inlineCode",{parentName:"a"},"pageType"))," implementation variable. Set to the string value ",(0,m.mdx)("inlineCode",{parentName:"td"},'"errorPage"')," on any error pages, such as a 404 or 503 error.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<pageUrl>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"g")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/page-url.html"},"Page URL")," dimension.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<products>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"products")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/products.html"},(0,m.mdx)("inlineCode",{parentName:"a"},"products"))," implementation variable.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<prop1>")," - ",(0,m.mdx)("inlineCode",{parentName:"td"},"<prop75>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"c1")," - ",(0,m.mdx)("inlineCode",{parentName:"td"},"c75")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/prop.html"},"Prop")," dimensions.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<purchaseId>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"purchaseID")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/purchaseid.html"},(0,m.mdx)("inlineCode",{parentName:"a"},"purchaseID"))," implementation variable.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<referrer>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"r")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/referrer.html"},(0,m.mdx)("inlineCode",{parentName:"a"},"referrer"))," implementation variable.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<reportSuiteId>")),(0,m.mdx)("td",{parentName:"tr",align:null},"Include in ",(0,m.mdx)("inlineCode",{parentName:"td"},"GET")," URL"),(0,m.mdx)("td",{parentName:"tr",align:null},"Specifies the report suite(s) where you want to submit data. Separate multiple report suite IDs with a comma.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<resolution>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"s")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/monitor-resolution.html"},"Monitor resolution")," dimension.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<scXmlVer>")),(0,m.mdx)("td",{parentName:"tr",align:null},"N/A"),(0,m.mdx)("td",{parentName:"tr",align:null},"Analytics XML request version number. For example, ",(0,m.mdx)("inlineCode",{parentName:"td"},"1.0"),".")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<server>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"server")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/server.html"},"Server")," dimension.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<timestamp>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"ts")),(0,m.mdx)("td",{parentName:"tr",align:null},"The date and time that the data was collected. ",(0,m.mdx)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Unix_time"},"Unix Time")," and ",(0,m.mdx)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/ISO_8601"},"ISO-8601")," are supported. Milliseconds are not allowed. See ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/technotes/timestamps-optional.html"},"Timestamps Optional")," for more information.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<transactionId>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"xact")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/transactionid.html"},(0,m.mdx)("inlineCode",{parentName:"a"},"transactionID"))," variable.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<userAgent>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"User-Agent")," HTTP header"),(0,m.mdx)("td",{parentName:"tr",align:null},"The device's user agent string.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<visitorId>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"vid")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/implementation/vars/config-vars/visitorid.html"},(0,m.mdx)("inlineCode",{parentName:"a"},"visitorID"))," implementation variable.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"<zip>")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"zip")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/zip-code.html"},"Zip code")," dimension.")))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-data-insertion-api-variable-reference-md-205a3107f70c6e4bb75e.js.map
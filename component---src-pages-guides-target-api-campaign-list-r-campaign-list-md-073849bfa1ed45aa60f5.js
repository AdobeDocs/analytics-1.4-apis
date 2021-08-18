(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[51615],{31384:function(e,a,t){"use strict";t.r(a),t.d(a,{_frontmatter:function(){return i},default:function(){return s}});var n=t(22122),m=t(19756),r=(t(15007),t(64983)),d=t(99536),l=["components"],i={},p={_frontmatter:i},o=d.Z;function s(e){var a=e.components,t=(0,m.Z)(e,l);return(0,r.mdx)(o,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"campaign-list"},"Campaign List"),(0,r.mdx)("p",null,"The Campaign List API lets you programmatically define filters ","(","based on time, state, etc.",")"," that extract campaign names and identifiers."),(0,r.mdx)("h2",{id:"create-the-url"},"Create the URL"),(0,r.mdx)("p",null,"For each operation add the parameters and values you need as a filter. For example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"}," https://testandtarget.omniture.com/api?client=acme&email=john@acme.com​&password=mypassword&operation=campaignList&environment=testEnvironment&name=test&​state=saved,activated&labels=label1,library,label2&version=1\n")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"client")),(0,r.mdx)("td",{parentName:"tr",align:null},"(","Required",")"," The T&T client code.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"email")),(0,r.mdx)("td",{parentName:"tr",align:null},"(","Required",")"," The Email address associated with the T&T user performing the operation.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"password")),(0,r.mdx)("td",{parentName:"tr",align:null},"(","Required",")"," The T&T password associated with the specified email address.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"operation")),(0,r.mdx)("td",{parentName:"tr",align:null},"(","Required",")"," Identifies the type of T&T action to execute. To generate campaign list reports, this value is always ",(0,r.mdx)("inlineCode",{parentName:"td"},"campaignList"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"environment")),(0,r.mdx)("td",{parentName:"tr",align:null},"(","Optional",")"," A URL-encoded host group name, as defined in the T&T Tool. By default, the environment value is ",(0,r.mdx)("inlineCode",{parentName:"td"},"Production"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"name")),(0,r.mdx)("td",{parentName:"tr",align:null},"(","Optional",")"," The campaign name, or portion of the campaign name, that you want to match.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"state")),(0,r.mdx)("td",{parentName:"tr",align:null},"(","Optional",")"," Comma-separated list of states to match. Supported values include: ",(0,r.mdx)("inlineCode",{parentName:"td"},"saved"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"activated"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"library"),". By default, the filtered results include all states.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"labels")),(0,r.mdx)("td",{parentName:"tr",align:null},"(","Optional",")"," Comma-separated list of labels to match. By default, the filtered results include all labels.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"version")),(0,r.mdx)("td",{parentName:"tr",align:null},"Specify which version of the API you want to use. Set this to ",(0,r.mdx)("inlineCode",{parentName:"td"},"version=1")," unless there is a different version described in the documentation.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"userLocale")),(0,r.mdx)("td",{parentName:"tr",align:null},"The description tag can be localized with one of the nine valid locale identifiers:")))),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"en","_","US")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"de","_","DE")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"es","_","ES")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"fr","_","FR")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"pr","_","BR")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"ja","_","JP")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"ko","_","KR")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"zh","_","CN")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"zh","_","TW"),(0,r.mdx)("p",{parentName:"li"},"For example: ",(0,r.mdx)("inlineCode",{parentName:"p"},"https://testandtarget.omniture.com/api?version=2&client=demo&operation=campaignList&email=demo@fortpoint.com&password=demo&userLocale=de_DE")," "),(0,r.mdx)("p",{parentName:"li"},"If you omit ",(0,r.mdx)("inlineCode",{parentName:"p"},"userLocale")," or set it to an invalid value, the default ",(0,r.mdx)("inlineCode",{parentName:"p"},"en_US")," is used."))),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Note:")," Parameters and values are case sensitive."),(0,r.mdx)("h2",{id:"inspect-the-query-response"},"Inspect the Query Response"),(0,r.mdx)("p",null,"A successful query response uses the following XML structure:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"}," <campaigns>\n  <campaign>\n    <id>16</id>\n    <name>Test Campaign A</name>\n  </campaign>\n  <campaign>\n    <id>17</id>\n    <name>Test Campaign B</name>\n  </campaign>\n</campaigns>\n")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Tag"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"campaign")),(0,r.mdx)("td",{parentName:"tr",align:null},"A single campaign.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"id")),(0,r.mdx)("td",{parentName:"tr",align:null},"The campaign identifier. Use this value with the Campaign Performance Report API.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"name")),(0,r.mdx)("td",{parentName:"tr",align:null},"The campaign name you specified.")))),(0,r.mdx)("p",null,"A failed query response uses the following XML structure:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"<error>\n   <message>Invalid email or password supplied. Email: john@acme.com</message>\n   <code>401</code>\n</error> \n\n\n")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Tag"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"message")),(0,r.mdx)("td",{parentName:"tr",align:null},"A description of the error. For example: ",(0,r.mdx)("inlineCode",{parentName:"td"},"Invalid email or password supplied. Email: john@acme.com."))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"code")),(0,r.mdx)("td",{parentName:"tr",align:null},"The error code. For example: ",(0,r.mdx)("inlineCode",{parentName:"td"},"401"))))),(0,r.mdx)("h2",{id:"parse-the-query-response"},"Parse the Query Response"),(0,r.mdx)("p",null,"Optionally, you can use a scripting language, such as Perl, Python, and Ruby, and the Campaign Performance Report API to iterate through the query result and retrieve specific campaign detail reports."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Parent topic:")," ",(0,r.mdx)("a",{parentName:"p",href:"../campaign_state/r_Test_and_Target_API_Sample_Code.md"},"Methods")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-target-api-campaign-list-r-campaign-list-md-073849bfa1ed45aa60f5.js.map
(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[3935],{61336:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return N}});var a=n(22122),r=n(19756),d=(n(15007),n(64983)),m=n(99536),l=["components"],i={},o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",t)}},s=o("CodeBlock"),p=o("InlineAlert"),x={_frontmatter:i},u=m.Z;function N(e){var t=e.components,n=(0,r.Z)(e,l);return(0,d.mdx)(u,(0,a.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"adobe-analytics-data-sources-api"},"Adobe Analytics Data Sources API"),(0,d.mdx)("p",null,"Data Sources allow you to import additional online or offline data for reporting. If you use the ",(0,d.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/transactionid.html"},(0,d.mdx)("inlineCode",{parentName:"a"},"transactionID"))," variable, you can also tie online and offline data together."),(0,d.mdx)("p",null,"The Data Sources API allows you to create, edit and upload ",(0,d.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/analytics/import/data-sources/datasrc-home.html"},"Data sources")," to Adobe Analytics. If you use the Adobe Analytics UI to complete the Data Sources workflow, that normally involves using the UI to create a Data source, then manually uploading a file via FTP to the configured location. With the Data Sources API, you can create a Data source and upload data without using the product UI."),(0,d.mdx)("p",null,"One advantage to using the Data Sources API over a traditional FTP method is that you can get basic data validation immediately. FTP data validation doesn't happen until Adobe's servers attempt to process the data. This method of validation can take up to 30 minutes longer than by directly using the API."),(0,d.mdx)("p",null,"The following methods are available to use with this API:"),(0,d.mdx)("h2",{id:"get"},"Get"),(0,d.mdx)("p",null,"Returns a list of data sources for a report suite."),(0,d.mdx)(s,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,d.mdx)("h4",{id:"request"},"Request"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X POST "https://api.omniture.com/admin/1.4/rest/?method=DataSources.Get" \\\n    -H "x-api-key: {CLIENTID}" \\\n    -H "Authorization: Bearer {ACCESSTOKEN}" \\\n    -H "Content-Type: application/json" \\\n    -d \'{"reportSuiteID": "examplersid"}\'\n')),(0,d.mdx)("h4",{id:"response"},"Response"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "id": "10",\n        "processing_type": "generic",\n        "name": "Example data source",\n        "email": "user@example.com",\n        "activatedDate": "YYYY-09-22",\n        "ftp": {\n            "path": "/",\n            "loginID": "examplelogin1",\n            "password": "********"\n        },\n        "haltOnWarning": false,\n        "haltOnError": false,\n        "lockedByError": false\n    },\n    {\n        "id": "19",\n        "processing_type": "generic",\n        "name": "Example data source 2",\n        "email": "admin@example.com",\n        "activatedDate": "YYYY-03-16",\n        "ftp": {\n            "path": "/",\n            "loginID": "examplelogin2",\n            "password": "********"\n        },\n        "haltOnWarning": false,\n        "haltOnError": false,\n        "lockedByError": false\n    }\n]\n')),(0,d.mdx)("p",null,"A request requires a single JSON parameter, ",(0,d.mdx)("inlineCode",{parentName:"p"},"reportSuiteID"),", representing the report suite to retrieve data sources from."),(0,d.mdx)("p",null,"The response returns an array of data sources with the following components in each:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"JSON Response Element"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"id"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"int")),(0,d.mdx)("td",{parentName:"tr",align:null},"A numeric identifier representing the data source for this report suite.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"processing_type"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},"The data source processing type. Valid values include ",(0,d.mdx)("inlineCode",{parentName:"td"},"generic"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"web"),", and ",(0,d.mdx)("inlineCode",{parentName:"td"},"traffic"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"name"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},"The name of the data source.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"email"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},"The email address of who to contact for this data source.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"activatedDate"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},"The date and time that the data source was activated.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"ftp"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"object")),(0,d.mdx)("td",{parentName:"tr",align:null},"An object containing the ",(0,d.mdx)("inlineCode",{parentName:"td"},"path"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"loginID"),", and ",(0,d.mdx)("inlineCode",{parentName:"td"},"password")," for the FTP site.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"haltOnWarning"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"bool")),(0,d.mdx)("td",{parentName:"tr",align:null},"Determines if the data source stops processing when it encounters a warning.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"haltOnError"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"bool")),(0,d.mdx)("td",{parentName:"tr",align:null},"Determines if the data source stops processing when it encounters an error.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"lockedByError"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"bool")),(0,d.mdx)("td",{parentName:"tr",align:null},"Determins if the data source is locked when it encounters an error.")))),(0,d.mdx)("h2",{id:"getjobs"},"GetJobs"),(0,d.mdx)("p",null,"Returns all current jobs for a data source."),(0,d.mdx)(s,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,d.mdx)("h4",{id:"request-1"},"Request"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X POST "https://api.omniture.com/admin/1.4/rest/?method=DataSources.GetJobs" \\\n    -H "x-api-key: {CLIENTID}" \\\n    -H "Authorization: Bearer {ACCESSTOKEN}" \\\n    -H "Content-Type: application/json" \\\n    -d \'{"reportSuiteID": "examplersid","dataSourceID":10}\'\n')),(0,d.mdx)("h4",{id:"response-1"},"Response"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "id": 12345678,\n        "fileName": "example_filename.txt",\n        "startDate": "YYYY-03-16 02:17:14",\n        "finishDate": "YYYY-03-16 02:17:18",\n        "size": 326,\n        "rows": 1,\n        "errors": [],\n        "warnings": [],\n        "receivedDate": "YYYY-03-16 02:06:00",\n        "status": "success"\n    },\n    {\n        "id": 12345679,\n        "fileName": "example_filename.txt",\n        "startDate": "YYYY-03-17 04:25:08",\n        "finishDate": "YYYY-03-17 04:25:17",\n        "size": 484,\n        "rows": 3,\n        "errors": [],\n        "warnings": [],\n        "receivedDate": "YYYY-03-17 03:51:00",\n        "status": "success"\n    }\n]\n')),(0,d.mdx)("p",null,"The request requires both of the following parameters:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"JSON Request Element"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"reportSuiteID"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},"The report suite ID.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"dataSourceID"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"int")),(0,d.mdx)("td",{parentName:"tr",align:null},"The data source ID to get jobs for.")))),(0,d.mdx)("p",null,"The response returns an array of data source jobs containing the following elements:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"JSON Response Element"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"id"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"int")),(0,d.mdx)("td",{parentName:"tr",align:null},"The job ID.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"fileName"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},"The name of the file that was uploaded for the job.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"startDate"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},"The date/time that the job started processing.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"finishDate"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},"The date/time that the job finished processing.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"size"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"int")),(0,d.mdx)("td",{parentName:"tr",align:null},"The size of the file that was uploaded.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"rows"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"int")),(0,d.mdx)("td",{parentName:"tr",align:null},"The number of rows in the file.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"errors"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string[]")),(0,d.mdx)("td",{parentName:"tr",align:null},"An array of any errors encountered while processing the file.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"warnings"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string[]")),(0,d.mdx)("td",{parentName:"tr",align:null},"An array of any warnings encountered while processing the file.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"receivedDate"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},"The date/time that the file was received.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"status"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},"The status of the job. Valid values include ",(0,d.mdx)("inlineCode",{parentName:"td"},"success")," and ",(0,d.mdx)("inlineCode",{parentName:"td"},"failure"),".")))),(0,d.mdx)("h2",{id:"save"},"Save"),(0,d.mdx)("p",null,"Creates or updates a data source. Omit ",(0,d.mdx)("inlineCode",{parentName:"p"},"id")," to create a new data source. Include the desired ",(0,d.mdx)("inlineCode",{parentName:"p"},"id")," to overwrite that data source's settings. If you include an ",(0,d.mdx)("inlineCode",{parentName:"p"},"id")," in your API request that doesn't exist, the response returns an error."),(0,d.mdx)(s,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,d.mdx)("h4",{id:"request-2"},"Request"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X POST "https://api.omniture.com/admin/1.4/rest/?method=DataSources.Save" \\\n    -H "x-api-key: {CLIENTID}" \\\n    -H "Authorization: Bearer {ACCESSTOKEN}" \\\n    -H "Content-Type: application/json" \\\n    -d \'{\n            "reportSuiteID":"examplersid",\n            "email": "user@example.com",\n            "name": "Example data source",\n            "processing_type": "generic",\n            "settings": {\n                "allowOutOfOrderHits": true,\n                "stopOnWarning": false,\n                "metricNames": ["Searches"],\n                "metricEvents": ["Event 1"],\n                "dimensionNames": ["Internal search"],\n                "dimensionVariables": ["Evar 1"]\n            }\n        }\'\n')),(0,d.mdx)("h4",{id:"response-2"},"Response"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "dataSourceID": 4\n}\n')),(0,d.mdx)("p",null,"The request requires different parameters based on the desired ",(0,d.mdx)("inlineCode",{parentName:"p"},"processing_type"),"."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"JSON Request Element"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"reportSuiteID"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},"The report suite ID to create the data source under.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"email"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},"The contact email for the data source.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"name"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},"The name of the data source.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"processing_type"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},"The data source processing type. Valid values include ",(0,d.mdx)("inlineCode",{parentName:"td"},"generic"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"weblog"),", and ",(0,d.mdx)("inlineCode",{parentName:"td"},"traffic"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"settings"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"object")),(0,d.mdx)("td",{parentName:"tr",align:null},"An object containing the desired report suite settings.")))),(0,d.mdx)("p",null,"The settings object contains the following elements:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Settings object Element"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"injectionType"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"allowOutOfOrderHits"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"bool")),(0,d.mdx)("td",{parentName:"tr",align:null},"Determines if the data source allows hits to be processed out of order.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"stopOnWarning"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"bool")),(0,d.mdx)("td",{parentName:"tr",align:null},"Determines if the data source stops processing data when it encounters a warning.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"metricNames"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string[]")),(0,d.mdx)("td",{parentName:"tr",align:null},"An array containing the desired metric names. Required when ",(0,d.mdx)("inlineCode",{parentName:"td"},"processing_type")," is ",(0,d.mdx)("inlineCode",{parentName:"td"},"generic"),". The array length must match ",(0,d.mdx)("inlineCode",{parentName:"td"},"metricEvents"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"metricEvents"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string[]")),(0,d.mdx)("td",{parentName:"tr",align:null},"An array containing the desired metric events. Required when ",(0,d.mdx)("inlineCode",{parentName:"td"},"processing_type")," is ",(0,d.mdx)("inlineCode",{parentName:"td"},"generic"),". The array length must match ",(0,d.mdx)("inlineCode",{parentName:"td"},"metricNames"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"dimensionNames"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string[]")),(0,d.mdx)("td",{parentName:"tr",align:null},"An array containing the desired dimension names. Required when ",(0,d.mdx)("inlineCode",{parentName:"td"},"processing_type")," is ",(0,d.mdx)("inlineCode",{parentName:"td"},"generic"),". The array length must match ",(0,d.mdx)("inlineCode",{parentName:"td"},"dimensionVariables"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"dimensionVariables"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string[]")),(0,d.mdx)("td",{parentName:"tr",align:null},"An array containing the desired dimension variables. Required when ",(0,d.mdx)("inlineCode",{parentName:"td"},"processing_type")," is ",(0,d.mdx)("inlineCode",{parentName:"td"},"generic"),". The array length must match ",(0,d.mdx)("inlineCode",{parentName:"td"},"dimensionNames"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"dataScope"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},"Valid values include ",(0,d.mdx)("inlineCode",{parentName:"td"},"site_level")," and ",(0,d.mdx)("inlineCode",{parentName:"td"},"breakdown"),". Required when ",(0,d.mdx)("inlineCode",{parentName:"td"},"processing_type")," is ",(0,d.mdx)("inlineCode",{parentName:"td"},"traffic"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"standardBreakdowns"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string[]")),(0,d.mdx)("td",{parentName:"tr",align:null},"An array containing the desired standard breakdowns. Required when ",(0,d.mdx)("inlineCode",{parentName:"td"},"processing_type")," is ",(0,d.mdx)("inlineCode",{parentName:"td"},"traffic"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"metricList"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string[]")),(0,d.mdx)("td",{parentName:"tr",align:null},"Required when ",(0,d.mdx)("inlineCode",{parentName:"td"},"processing_type")," is ",(0,d.mdx)("inlineCode",{parentName:"td"},"traffic"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"customBreakdownNames"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string[]")),(0,d.mdx)("td",{parentName:"tr",align:null},"An array containing the desired custom breakdown names. Required when ",(0,d.mdx)("inlineCode",{parentName:"td"},"processing_type")," is ",(0,d.mdx)("inlineCode",{parentName:"td"},"traffic"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"customBreakdownValues"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string[]")),(0,d.mdx)("td",{parentName:"tr",align:null},"An array containing the desired custom breakdown values. Required when ",(0,d.mdx)("inlineCode",{parentName:"td"},"processing_type")," is ",(0,d.mdx)("inlineCode",{parentName:"td"},"traffic"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"logFormat"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},"Required when ",(0,d.mdx)("inlineCode",{parentName:"td"},"processing_type")," is ",(0,d.mdx)("inlineCode",{parentName:"td"},"weblog"),". Valid values include ",(0,d.mdx)("inlineCode",{parentName:"td"},"ncsa_common"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"ncsa_combined"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"w3c_extended"),", and ",(0,d.mdx)("inlineCode",{parentName:"td"},"microsoft_iis"),".")))),(0,d.mdx)("p",null,"The response returns the ",(0,d.mdx)("inlineCode",{parentName:"p"},"dataSourceID")," created or edited."),(0,d.mdx)("h2",{id:"uploaddata"},"UploadData"),(0,d.mdx)("p",null,"Uploads data to a data source."),(0,d.mdx)(s,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,d.mdx)("h4",{id:"request-3"},"Request"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X POST "https://api.omniture.com/admin/1.4/rest/?method=DataSources.UploadData" \\\n    -H "x-api-key: {CLIENTID}" \\\n    -H "Authorization: Bearer {ACCESSTOKEN}" \\\n    -H "Content-Type: application/json" \\\n    -d \'{\n            "reportSuiteID":"examplersid",\n            "dataSourceID": 4,\n            "jobName": "Example data source upload",\n            "finished": true,\n            "columns":[\n                "Date",\n                "Evar 1",\n                "Event 1"\n            ],\n            "rows":[\n                [\n                    "10/19/YYYY",\n                    "Example eVar1 value",\n                    "1"\n                ],\n                [\n                    "10/20/YYYY",\n                    "Another eVar1 value",\n                    "0"\n                ]\n            ]\n        }\'\n')),(0,d.mdx)("h4",{id:"response-3"},"Response"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},"true\n")),(0,d.mdx)("p",null,"This request requires the following within the JSON body:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"JSON Request Element"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"reportSuiteID"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},"The report suite ID that contains the desired data source.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"dataSourceID"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"int")),(0,d.mdx)("td",{parentName:"tr",align:null},"The numeric ID representing the data source.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"jobName"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},"The name for the upload job. If a job is large enough to necessitate multiple calls, make sure that you use the same name between API calls. Use alpha-numeric characters only - do not use special characters or symbols, such as a forward slash (",(0,d.mdx)("inlineCode",{parentName:"td"},"/"),").")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"finished"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"bool")),(0,d.mdx)("td",{parentName:"tr",align:null},"A flag that indicates that the job has all parts uploaded. A job does not start processing until this flag is set. If a job includes only one API call, set this value to ",(0,d.mdx)("inlineCode",{parentName:"td"},"true"),". If a job includes multiple API calls, set all values to ",(0,d.mdx)("inlineCode",{parentName:"td"},"false")," except the last call, which you can set to ",(0,d.mdx)("inlineCode",{parentName:"td"},"true"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"columns"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string[]")),(0,d.mdx)("td",{parentName:"tr",align:null},"An array of strings that indicate the column names for the data source upload. It must match the columns that were included when creating the data source. It also requires a ",(0,d.mdx)("inlineCode",{parentName:"td"},"Date")," column in ",(0,d.mdx)("inlineCode",{parentName:"td"},"mm/dd/yyyy")," format. The text format for columns is ",(0,d.mdx)("inlineCode",{parentName:"td"},'"Date"'),", ",(0,d.mdx)("inlineCode",{parentName:"td"},'"Evar X"'),", ",(0,d.mdx)("inlineCode",{parentName:"td"},'"Event X"'),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"rows"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string[][]")),(0,d.mdx)("td",{parentName:"tr",align:null},"An array of array of strings. The number of strings within each row correspond to each column in order. Each array of strings corresponds to a row of data.")))),(0,d.mdx)(p,{variant:"note",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"Limit a single API call to 10,000 rows. If a data sources job requires more than 10,000 rows, split the job into multiple API calls with the same ",(0,d.mdx)("inlineCode",{parentName:"p"},"jobName"),". Set the ",(0,d.mdx)("inlineCode",{parentName:"p"},"finished")," boolean to ",(0,d.mdx)("inlineCode",{parentName:"p"},"false")," for each API call until the last one, which you can set to ",(0,d.mdx)("inlineCode",{parentName:"p"},"true"),". A single job supports up to 100 API calls or 50 MB of data. If more than 100 API calls are submitted for a single job, or if the combined data of a job results in a size larger than 50 MB, the entire job fails."),(0,d.mdx)("p",null,"The response returns ",(0,d.mdx)("inlineCode",{parentName:"p"},"true")," if the upload was successful. A file is created on the data source's FTP site, which is subsequently processed. The response returns ",(0,d.mdx)("inlineCode",{parentName:"p"},"false")," if the upload was unsuccessful."),(0,d.mdx)("h2",{id:"processincompletevisits"},"ProcessIncompleteVisits"),(0,d.mdx)("p",null,"Finishes incomplete jobs."),(0,d.mdx)(s,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,d.mdx)("h4",{id:"request-4"},"Request"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X POST "https://api.omniture.com/admin/1.4/rest/?method=DataSources.ProcessIncompleteVisits" \\\n    -H "x-api-key: {CLIENTID}" \\\n    -H "Authorization: Bearer {ACCESSTOKEN}" \\\n    -H "Content-Type: application/json" \\\n    -d \'{\n            "reportSuiteID":"examplersid",\n            "dataSourceID": 4\n        }\'\n')),(0,d.mdx)("h4",{id:"response-4"},"Response"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},"true\n")),(0,d.mdx)("p",null,"This request requires the following within the JSON body:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"JSON Request Element"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"reportSuiteID"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},"The report suite ID that contains the desired data source.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"dataSourceID"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"int")),(0,d.mdx)("td",{parentName:"tr",align:null},"The numeric ID representing the data source.")))),(0,d.mdx)("p",null,"The response returns ",(0,d.mdx)("inlineCode",{parentName:"p"},"true")," if the process succeeds."),(0,d.mdx)("h2",{id:"restart"},"Restart"),(0,d.mdx)("p",null,"Restarts processing for a data source."),(0,d.mdx)(s,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,d.mdx)("h4",{id:"request-5"},"Request"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X POST "https://api.omniture.com/admin/1.4/rest/?method=DataSources.Restart" \\\n    -H "x-api-key: {CLIENTID}" \\\n    -H "Authorization: Bearer {ACCESSTOKEN}" \\\n    -H "Content-Type: application/json" \\\n    -d \'{\n            "reportSuiteID":"examplersid",\n            "dataSourceID": 4\n        }\'\n')),(0,d.mdx)("h4",{id:"response-5"},"Response"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},"true\n")),(0,d.mdx)("p",null,"This request requires the following within the JSON body:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"JSON Request Element"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"reportSuiteID"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},"The report suite ID that contains the desired data source.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"dataSourceID"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"int")),(0,d.mdx)("td",{parentName:"tr",align:null},"The numeric ID representing the data source.")))),(0,d.mdx)("p",null,"The response returns ",(0,d.mdx)("inlineCode",{parentName:"p"},"true")," if the process succeeds."),(0,d.mdx)("h2",{id:"delete"},"Delete"),(0,d.mdx)("p",null,"Deletes a data source."),(0,d.mdx)(s,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,d.mdx)("h4",{id:"request-6"},"Request"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X POST "https://api.omniture.com/admin/1.4/rest/?method=DataSources.Delete" \\\n    -H "x-api-key: {CLIENTID}" \\\n    -H "Authorization: Bearer {ACCESSTOKEN}" \\\n    -H "Content-Type: application/json" \\\n    -d \'{\n            "reportSuiteID":"examplersid",\n            "dataSourceID": 4\n        }\'\n')),(0,d.mdx)("h4",{id:"response-6"},"Response"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},"true\n")),(0,d.mdx)("p",null,"This request requires the following within the JSON body:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"JSON Request Element"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"reportSuiteID"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},"The report suite ID that contains the desired data source.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},(0,d.mdx)("inlineCode",{parentName:"strong"},"dataSourceID"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"int")),(0,d.mdx)("td",{parentName:"tr",align:null},"The numeric ID representing the data source that you want to delete.")))),(0,d.mdx)("p",null,"The response returns ",(0,d.mdx)("inlineCode",{parentName:"p"},"true")," if the deletion succeeds."))}N.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-data-sources-md-31adbbbbfab21388847b.js.map
# Metrics and Dimensions

Lists the metrics and dimensions that can be retrieved using Analytics Live Stream.

 

Periodically, new fields will be introduced to the Live Stream output. Your Live Stream client should be configured to handle this scenario and continue to process and translate the known fields.

|Metric/Dimension|Description|
|----------------|-----------|
|bot| |
|browser|Browser as identified by the user agent string.|
|browserHeight|Height in pixels of browser window.|
|browserWidth|Width in pixels of browser window.|
|connectionType|Connection type of the browsers computer.|
|currency|Type of currency for the transaction.|
|customVisId|A visitor ID passed in with the hit to be used as the visitor ID for the hit \(instead of using visid\_high and visid\_low\).|
|campaign| The campaign value passed in on the hit. If set, campaign is included in the eVars list: ```"evars": {  "evars": {    "campaign": "DFA:172612:21725632:182361",    "eVar1": "Summer Shoe Promo"  }},``` |
|eVar1-250|Custom commerce variable passed in on hit. If set, eVars are included in the eVars list: ```"evars": {  "evars": {    "eVar1": "Summer Shoe Promo",   "eVar4": "Sandals"  }},``` |
|event1-1000| ```"event1": [{	"count": 1,	"exponent": 0,	"unique": ""}]``` |
|exclude| Indicates if this hit is excluded in Analytics reporting. <br> ```"exclude": { "id": "0", "value": "no", "description": "include" }``` |
|geoCity|Populated based on GeoReporting settings.|
|geoCountry|Populated based on GeoReporting settings.|
|geoDMA|Populated based on GeoReporting settings.|
|geoRegion|Populated based on GeoReporting settings.|
|geoZip|Populated based on GeoReporting settings.|
|hier1-4| Delimited list of values as passed in on the image request. The delimiter is chosen by the client during implementation. ```	"1": {		"delim": ":",		"values": [			"Search Results"		]	}}``` |
|hitIdHigh|Used to uniquely identify a hit. The combination of hitid\_low and hitid\_high creates a unique ID for the row.|
|hitIdLow|Used to uniquely identify a hit. The combination of hitid\_low and hitid\_high creates a unique ID for the row.|
|hitSource|A flag for the back-end processing to know what type of hit the data is.|
|homePage|Homepage flag, whether or not this page was the user's homepage|
|ip|IP address of user's computer, from users ISP.|
|isErrorPage|Indicates if the page was flagged as an error page by setting `s.pageType="errorPage"`.|
|javaEnabled|Flag indicating whether or not java is enabled.|
|javascriptVersion|Version of JavaScript supported by browser.|
|language| Language |
|lat|Latitude of the hit based on the location associated with the IP address.|
|languageAbbrev| Language abbreviation of the browser |
|lon|Longitude based on the location associated with the IP address.|
|mcAudiences| The `mcAudiences` field is a multi-value field / “list-variable”. The multiple values represent the segment IDs from Adobe Audience Manager’s Server Side Forwarding integration and are given in the subdocument’s value array, with the variable's delimiter as an ASCII character code in the `delim` property. `"mcAudiences": {"values":["1111","2222","9999"], "delim":44}` |
|mcVisIdHigh|Part 1 of the Experience Cloud ID set by the [Visitor ID Service](https://marketing.adobe.com/resources/help/en_US/mcvid/). A 64-bit number in base 10, padded with zeros to 19 digits, and then concatenated.|
|mcVisIdLow|Part 2 of the Experience Cloud ID set by the [Visitor ID Service](https://marketing.adobe.com/resources/help/en_US/mcvid/). A 64-bit number in base 10, padded with zeros to 19 digits, and then concatenated.|
|mobileAudioSupport| |
|mobileColorDepth| |
|mobileCookieSupport| |
|mobileDeviceName| |
|mobileDeviceType| |
|mobileManufacturer| |
|mobileScreenHeight| |
|mobileScreenWidth| |
|mobileVideoSupport| |
|monitorColorDepth| |
|monitorHeight| |
|monitorWidth| |
|mvvars|Mvvars are multi-value fields provided to allow customers to implement custom multi-value projects. Also known as "list variables".  Each variable (mvvar1-3) is indexed by JSON key "1","2" or "3": ```"mvvars": {"2":{"m":{"values":["custom1=A","custom2=Z"],"delim":44}}}```|
|operatingSystem| |
|pageName|The name of the page \(if set\).|
|pageURL|The address of the page in the address bar of the browser.|
|plugins| |
|prop1-75| Custom traffic variables passed in on hit. If set, props are included in the props list. ```"props": {	"prop1": "Search Results"}``` |
|products| ```"products": [{    "category": "Clothing", "evars": {},    "events": {        "event61": [{        "count": 3        }]    },    "name": "Mens Black Running Shoes",    "revenue": 1799,	//Divide by 100 to get revenue    "units": 15  }]``` |
|purchaseId|Unique ID for the transaction.|
|receivedTimeGMT|Time hit was received by Adobe in GMT. Uses the Unix timestamp \(epoch time from 1/1/1970\). Set by Adobe servers.|
|referrer|Page prior to the current page.|
|reportSuite|Data collection report suite.|
|searchEngine|Search engine|
|service|Deprecated. pe or ss - type of hit coming through. The page\_event column gives the same information but in more detail.|
|site section| The custom traffic variable for channel. If set, site\_section is included in the props list: ```"props": {	"site_section": "home"}``` |
|state|Geographical region \(i.e. Arizona, Utah, Saxony \[German Region\]\) passed in on JavaScript.|
|timeGMT|Time data was collected in GMT. Uses the Unix timestamp \(epoch time from 1/1/1970\). For non-timestamped data it will be set by Adobe servers.|
|topLevelDomain|Domain of users ISP.|
|transactionId|A unique identifier where various data points can be uploaded later via Data Sources.|
|truncated|A \(Y/N\) field that determines if the query string of the hit was truncated or not|
|userAgent|User agent as found in the HTTP header sent from the browser.|
|usesPersistentCookie|A flag indicating if 3rd party cookies and/or persistent cookies are enabled.|
|visIdHigh|Part 1 of the visitorID. The combination of two visitor IDs \(visid\_high and visid\_low\) creates a unique visitor ID.|
|visIdLow|Part 2 of the visitorID. The combination of two visitor IDs \(visid\_high and visid\_low\) creates a unique visitor ID.|
|visIdType|Specifies how the visitorID was calculated.|
|zip|Zip code \(i.e. 84604,85381\) passed in by JavaScript.|

## More info on Events

 "**count**": This is the value of the event. For counter events it is a 1 or 0. For currency or increment events it is an integer. All values are stored as integers for the sake of speed. You can move the decimal by the number of places listed in the exponent. \(e.g. If count is 150 and the exponent is –2 then the value of the event is 1.50

 "**exponent**": This is the number of decimal places to move "count".

 "**unique**": This is used for event serialization and will have the serialization value for de-duplication. This feature is used rarely.

 Events are represented by the following strings:

-   "revenue"
-   "productViews"
-   "carts"
-   "checkouts"
-   "cartAdditions"
-   "cartRemovals"
-   "cartViews"
-   "event\#" \(where \# represents custom event 1-1000\)

## Data Processing Order

The metrics and dimensions in Live Stream are partially processed according to the following data processing order list:

1.  Data collection \(JavaScript, mobile libraries, data insertion, dynamic variables, and so on\)
2.  Processing Rules
3.  VISTA
4.  Geolookup \(by default, can be changed to occur before VISTA\)
5.  **Analytics Live Stream** 
6.  Persist Attributes \(not available in Live Stream\)
7.  Visit Attributes/Metrics \(not available in Live stream\)

## Live stream sample JSON output

```
{	
  "browser": "Google Chrome 32.0",	Browser name
  "browserHeight": 1350,	// The height of the browser, in pixels 
  "browserType": "Google",
  "browserWidth": 820, 
  "connectionType": "LAN/WiFi", 
  "currency": "USD", 
  "customVisId": "420520", 
  "domain": "sfr.net",  
  “evars”: {
    "evars": {
      "campaign": "DFA:172612:21725632:182361",
      "evar1": "Summer Shoe Promo"
    }
  },
  "events": {
    "event1": [{
      "count": 1,
      "exponent":0,
      "unique":""
    }]
  },
  "exclude": { 
    "id": "0",
    "value": "no",
    "description": "include"
  },
  "geoCity": "paris",
  "geoCountry": "fra",
  "geoDMA": 0,
  "geoRegion": "j",
  "geoZip": "75001",
  "hierarchies": { 
    "site-­hier": {
      "delim": 58,
      "values": "home page:clothing:mens:shoes"
    }
  },
  "hitIdHigh": 2948027281753079808,
  "hitIdLow": 4948646782672799561,
  "hitSource": 1,	// 1=modstats, 5=data sources, etc 
  "ip": "91.71.30.70",
  "javaEnabled": true, // 
  "javascriptVersion": "1.6", 
  "language": "English", 
  "languageAbbrev": "en-­US",
  "monitorColorDepth": "16 million colors", 
  "monitorHeight": 1080,
  "monitorWidth": 1650,
  "mvvars": {
    "1": {
      "m": {
        "values": [
          "event_category:summer sale",
          "event_type:click",
          "source_platform:iOS"
        ],
        "delim": 44
      }
    }
  },  
  "operatingSystem": "Macintosh", 
  "pageName": "Page #8552",
  "pageURL": "http://example.com/page8552.html", 
  "products": [{
    "category": "Clothing", "evars": {},
    "events": {
        "event61": [{
          "count": 3,
          "exponent":0,
          "unique":""
        }]
    },
    "name": "Mens Black Running Shoes",
    "revenue": 1799,	//Divide by 100 to get revenue
    "units": 15
  }],
  "receivedTimeGMT": 1372782179,	// Time hit was received by Adobe 
  "referrer": "http://example.com/page139.html",
  "reportSuite": "examplecomprod", 
  "searchEngine": "Google",
  "service": "ss", // ss=superstats, pe=page event, etc
  "timeGMT": 1372782179,	// Time data was collected
  "topLevelDomain": ".net",
  "transactionId": "",
  "truncated": false,	//Hit was truncated to modstats? 
  "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML,like Gecko) Chrome/29.0.1547.76 Safari/537.36",
  "usesPersistentCookie": 1,	//1=yes, 2=no, 0=unknown 
  "visIdHigh": 1944017885723175213,
  "visIdLow": 2512895455560210216,
  "visIdType": 3  // 3=server gen’d visid, 0=custom
}


```


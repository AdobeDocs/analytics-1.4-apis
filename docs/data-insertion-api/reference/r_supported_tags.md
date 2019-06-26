# Supported XML Tags and Query Variables

When processing HTTP POST data submissions, only values in supported XML tags are processed. When submitting HTTP GET data submissions, only specified query string and HTTP header variables are processed.

The following table lists all supported XML tags, along with their associated query string variable equivalents and HTTP header variable equivalents, where applicable. The JavaScript variable column is provided for reference. Details about each of these variables is provided in the [Analytics Variables](http://microsite.omniture.com/t2/help/en_US/sc/implement/?f=sc_variables) topic in the *Analytics Implementation Guide*.

To specify that a given row should be considered a page view, that row must contain either `<pageName>` or `<pageURL>`. To specify that a given row should be considered a link event, that row must include `<linkType>` and either `<linkName>` or `<linkURL>`. If a given row contains both `<linkType>` and either `<pageName>` or `<pageURL>`, Adobe Analytics will automatically clear out `<pageName>` and `<pageURL>` by setting them to `null`. Also, if a given row does not contain the minimum fields required to fully identify the row as either a page view or a link event, that row will be dropped.

Every data insertion must also include one of `<visitorID>`, `<marketingCloudVisitorID>` or `<IPaddress>`.

**Note:** XML tags are case-insensitive, capitalization is used only to assist readability.

|XML Tag \(POST\)|Query String Parameter \(GET\)|JavaScript Variable|HTTP Header Var|Description|
|----------------|------------------------------|-------------------|---------------|-----------|
| `<browserHeight>` |`bh` | N/A | N/A | Browser height in pixels \(For example, 768\). |
| `<browserWidth>` |`bw` | N/A | N/A | Browser width in pixels \(For example, 1024\). |
| `<campaign>` |`v0` | campaign | N/A | The campaign tracking code associated with the page. |
| `<channel>` |`ch` | channel | N/A | The page title or bread crumb. |
| `<colorDepth>` |`c` | N/A | N/A | Monitor color depth in bits \(For example, 24\). |
| `<connectionType>` |`ct` | N/A | N/A | Visitor's connection type \("lan" or "modem"\). |
| `<contextData>` |`c.\[key\]` | contextData | N/A | Key-values pairs are specified in one of the following formats: `<my.a>red</my.a>`  or: `<my><a>red</a></my>`  Each of these examples result in a context data value of `my.a = red`. Multiple key-value pairs can be specified. In the query string, this context data variable would appear as `c.my.a=red` |
| `<cookiesEnabled>` |`k` | N/A | N/A | Whether the visitor supports first party session cookies \(Y or N\). |
|`<customerPerspective>`|`cp`|customerPerspective|N/A| Whether a hit is considered a background or foreground hit. <list><li>0 - Foreground (Default)</li><li>1 - Background </li></list> See [Context Aware Sessions](https://marketing.adobe.com/resources/help/en_US/reference/vrs-mobile-visit-processing.html) for more detail|
| `<currencyCode>` |`cc` | currencyCode | N/A | Revenue currency code For example, `USD`. |
| `<eVar*\#*>` For example, `<eVar2>`. |`v*\#*` For example, `v2`. | eVar1 - eVar75 | N/A | Analytics eVar. |
| `<events>` |`events` | events | N/A | A list of Analytics events. Multiple events are separated by a comma. <events\>event1</events\> <events\>event1,event2</events\> |
| `fallbackVisitorId` |`fid` | N/A | N/A | A fallback cookie `s_fid` is set when the primary cookie (`AMCV_` or `S_vi`) is unavailable. It has a 2 year expiration and is used as the fallback identification method going forward. |
| `<hier*n*>` For example, `<hier2>`. |`h#` For example, `h2` | hier1 - hier5 | N/A | A hierarchy string. |
| `<homePage>` |`hp` | N/A | N/A | Whether the current page is the visitor's homepage \(Y or N\). |
|`<imsregion>` |`aamlh` | N/A | N/A | Use this tag to ensure data is forwarded to the right Audience Manager regional data collection center when using the data insertion API for both collecting Analytics data and forwarding that data to Audience Manager. The Analytics tracking server/API end point must also be set to forward to the correct Audience Manager instance before Analytics data will forward to Audience Manager. Use the [getLocationHint](https://marketing.adobe.com/resources/help/en_US/mcvid/mcvid-getlocationhint.html) function of the VisitorAPI to retrieve the correct `imsregion` value for the user. The `marketingCloudVisitorID` tag is also required when using this tag. |
| `<ipaddress>` | N/A | N/A | X-Forwarded-For | The visitor's IP address. |
| `<javaEnabled>` |`v` | N/A | N/A | Whether the visitor has Java enabled \(Y or N\). |
| `<javaScriptVersion>` |`j` | N/A | N/A | JavaScript version. For example, 1.3. |
| `<language>` |`N/A` | N/A | Accept-Language | The browser's supported language. For example, "en-us". |
| `<linkName>` |`pev2` | linkName | N/A | Name of link. |
| `<linkType>` |`pe` | linkType | N/A | Type of link \("d", "e", or "o"\). |
| `<linkURL>` |`pev1` | linkURL | N/A | The link's HREF. For custom links, page values are ignored. |
|`<list*n*>` For example, `<list2>`. |`l#` | list1 - list3 | N/A | A delimited list of values that are passed into a variable, then reported as individual line items for reporting. |
| `marketingcloudorgid` |`mcorgid` | N/A | N/A | The Experience Cloud Organization ID; identifies the organization within the Adobe Experience Cloud. |
| `<pageName>` |`pageName` | pageName | N/A | The Web page name. |
| `<pageType>` |`pageType` | pageType | N/A | The Web page type. This is only used on 404 error pages. Set pageType to "Error Page" for when a 404 error is detected. |
| `<pageURL>` |`g` | pageURL | N/A | The Web page URL For example, http://www.mysite.com/index.html. |
| `<plugins>` |`p` | N/A | N/A | Semicolon separated list of Netscape plug-in names. |
| `<products>` |`products` | products | N/A | List of all products on the page. Separate products with a comma. For example: Sports;Ball;1;5.95, Toys; Top;1:1.99. |
| `<prop*n*>` For example, `<prop2>`  |`c#` For example, `c2` | prop1 - prop75 | N/A | Analytics property name. |
| `<purchaseID>` |`purchaseID` | purchaseID | N/A | Purchase ID number. |
| `<referrer>` |`r` | N/A | N/A | The URL of the page referrer. |
| `<reportSuiteID>` |Contained in the URL. See [HTTP GET Sample](../sample_code/r_sample_http_get.md#).| s\_account | N/A | Specifies the report suites where you want to submit data. Separate multiple report suite IDs with a comma. |
| `<resolution>` |`s` | N/A | N/A | Monitor resolution For example, 1280x1024. |
| `<scXmlVer>` | N/A | N/A | N/A | Analytics XML request version number. For example, 1.0. |
| `<server>` |`server` | server | N/A | The Web server serving the page. |
| `<state>` |`state` | state | N/A | The visitor's U.S. state. |
| `<timestamp>` |`ts` | timestamp | N/A | The time and date on which the data was collected. |
| `<timezone>` | Part of the `t` parameter | N/A | N/A | XML POST: Visitor's time zone offset from GMT in hours. For example, -8. GET: The visitor's time zone is included in the `t` query string parameter, which contains the local time. The `t` parameter is in the following format: ```dd/mm/yyyy hh:mm:ss D OFFSET``` Where D is a number in the range `0-6` specifying the day of the week, and `OFFSET` represents: ```offset from GMT in hours * 60 * - 1``` For example: ```09/23/2013 14:00:00 1 420``` |
| `<transactionID>` |`xact` | transactionID | N/A | Common value used to tie multi-channel user activities together for reporting purposes. For more information, see the [Data Sources User Guide](http://microsite.omniture.com/t2/help/en_US/sc/datasources/oms_sc_data_sources.pdf). |
| `<userAgent>` | N/A | N/A | User-Agent | The visitor's browser type and OS. |
| `<visitorID>` |`vid` | Automatic, or `visitorID` is using custom IDs. | N/A | Visitor's Analytics ID. See [Visitor Identification](../overview/c_visitor_id.md#). |
| `<marketingCloudVisitorID>` |`mid` | N/A | N/A | Experience Cloud ID. See [Visitor Identification](../overview/c_visitor_id.md#) and the [Experience Cloud Visitor ID Service](http://microsite.omniture.com/t2/help/en_US/mcvid/). |
| `<zip>` |`zip` | zip | N/A | The visitor's zip code. |


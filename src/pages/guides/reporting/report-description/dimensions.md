# Elements (Dimensions) reference

An element, more commonly known as a **dimension** in current versions of Adobe Analytics, is a structure that organizes a report's metric data. See [Dimensions overview](https://experienceleague.adobe.com/docs/analytics/components/dimensions/overview.html) in the Adobe Analytics components user guide for more information.

## Permissions

Specific users might not have access to certain elements. The metrics returned by `Report.GetElements` reflect those restrictions. Requesting an element that one doesn't have permission to access results in a `element_inaccessible` error. 

In some cases, elements that are returned by `Report.GetElements` might not work with a certain engine, even if access is enabled. For example, the `timevisit` element is not supported in a Data Warehouse request, even if it is returned by `Report.GetElements`. In such a case, an error message is shown when using the element indicating that the element is not supported in that engine.

## Element Breakdowns

The reporting API has two groups of elements: Traffic and Commerce. Elements can only be broken down by elements in the same group, as listed in the "Breakdown Type" column in the table below. Breakdowns are not supported on fallout and pathing reports.

You can pass any of these elements to [GetElements](methods/r_GetElements.md#) to get a list of valid breakdowns for a specific element.

These restrictions only apply to the 1.4 Reporting API; if you want apply breakdowns to any dimension, use the [Adobe Analytics 2.0 Reporting API](https://developer.adobe.com/analytics-apis/docs/2.0/guides/endpoints/reports/) instead.

## Element object reference

Name | Type | Description
--- | --- | ---
**`id`** | `string` | The name of the dimension to apply to the report.
**`classification`** | `string` | (Optional) Restricts the element results to only those that fall in the specified classification. For example you could set `"id": "trackingCode"` and `"classification": "Campaigns"` to get a report of all tracking codes for the Campaigns classification.
**`top`** | `int` | (Optional) Specifies the number of rows in the report to return. Use with `startingWith` to generate paged reports. For example, `top=5` returns five rows. The maximum number of top elements that can be requested is 50,000.
**`startingWith`** | `int` | (Optional) Specifies the first row in the report to return. Use with top to generate paged reports. For example, `startingWith=20` returns report rows starting at row 20.
**`search`** | `object[]` | (Optional) Applies a search to the element. This object includes the following values:<br/>`type`: A string that indicates the type of search to use. Valid values include `and`, `or`, and `not`.<br/>`keywords`: A list of keywords to include or exclude from the search, based on the type. Keyword values can also leverage the following special characters to define advanced search criteria: `*` Wild Card (e.g. "page*.html"), `^` Starts With (e.g. "^http://"), and `$` Ends With (e.g. ".html$").<br/>`searches`: An object list of subsearches. This property allows you to build complex report searches.
**`selected`** | `string[]` |(Optional) Defines a specific list of items to request instead of using search, top, and startingWith to set the element parameters.
**`parentID`** | `string` | (Optional) Hierarchy report. To specify a specific level to report, add a add a level and parentID parameter. The parentID is returned in report data, making it available to request the next level of the hierarchy.
**`checkpoints`** | `string[]` | Generates a pathing report. See [Pathing Reports](pathing.md).
**`pattern`** | `string[]` | Generate a fallout pathing report. See [Pathing Reports](pathing.md). | A list of elements that breaks down (organizes) the metrics data in the report. For example, you can generate a report that breaks down page views (metric) by browser (element). For example: `elements = [ {id = "trackingCode", classification = "campaigns", top = 2, startingWith = 10} ]` A report may have a maximum number of three elements. Elements have restrictions on which other elements they can be combined with in a report. You can pass element to [GetElements](../methods/r_GetElements.md#) to get a list of valid breakdowns for a specific element.

## Element ID reference

|Element|Breakdown Type|Description|
|-------|--------------|-----------|
| `accountsummary` |traffic|Corresponds to the Account Summary report in Analytics.|
| `browser` |traffic+commerce|Web browser (for example, Internet Explorer 7.0, Firefox 2.0.8).|
| `browserheight` |traffic|Browser frame height (in pixels).|
| `browsertype` |traffic|Web browser vendor (for example, Microsoft, Mozilla, Apple).|
| `browserwidth` |traffic|Browser frame width (in pixels).|
| `category` |commerce|Groups of products, organized into a category.|
| `connectiontype` |traffic|Internet connection type used to access site.|
| `cookiesenabled` |traffic|Web browser that has cookies enabled.|
| `customerloyalty` |commerce|The Customer Loyalty classification.|
| `domain` |traffic+commerce|ISPs and organizations used to access site.|
| `entrypage` |commerce|Page used to enter the site.|
| `entrypageoriginal` |commerce|Page used to enter the site for the first time.|
| `evar1` - `evar250` |commerce|Specified eVar.|
| `firsttouchchannel` |commerce|First touch marketing channel.|
| `firsttouchchanneldetail` |commerce|Detailed version of the First touch marketing channel.|
| `geocountry` |traffic+commerce|Country.|
| `georegion` |traffic+commerce|Geographical region.|
| `geocity` |traffic+commerce|City.|
| `geodma` |traffic+commerce|Designated Market Area.|
| `hier1` - `hier5` |traffic| Hierarchy report. To specify a specific level to report, add a add a `level` and `parentID` parameter to the element structure: ```{    "id":"hier2",    "level":"3", "parentID":"75483925"}``` The `parentID` is obtained from the results of the previous level: ```{ "name": "Home Page", "url": "", "counts": ["72"],   "parentID": "75483925"}``` Not supported by inline segments. |
| `javaenabled` |traffic|Web browser that has Java enabled.|
| `javascriptenabled` |traffic|Web browser that has JavaScript enabled.|
| `javascriptversion` |traffic|Version of JavaScript used on the Web browser.|
| `language` |traffic+commerce|Web browser language.|
| `lasttouchchannel` |commerce|Last touch marketing channel.|
| `lasttouchchanneldetail` |commerce|Detailed version of the Last touch marketing channel.|
| `linkcustom` |traffic|Link usage (user-preferred links).|
| `linkdownload` |traffic|Links to downloaded content.|
| `linkexit` |traffic|Third-party links where client exits your site.|
| `listvar1` - `listvar3` |commerce|Specified list variable.|
| `mobileaudiosupport` |commerce|Audio formats supported by mobile device.|
| `mobilecarrier` |commerce| Mobile service provider. Not supported by inline segments. |
| `mobilecolordepth` |commerce|Number of simultaneous display colors supported by mobile device.|
| `mobilecookiesupport` |commerce|Mobile device with cookies enabled.|
| `mobiledevicename` |commerce|Mobile device name.|
| `mobiledevicetype` |commerce|Mobile device type.|
| `mobiledevicenumbertransmit` |commerce|Indicates if Device Number Transmit is On or Off on the mobile device.|
| `mobiledrm` |commerce|The type of Digital Rights Management (DRM) supported by the mobile device (Forward Lock, Combined Delivery, Separate Delivery).|
| `mobileImagesupport` |commerce|Mobile device with image support enabled.|
| `mobileInformationservices` |commerce|The information services supported by the mobile device.|
| `mobilejavavm` |commerce|The Java version running on the mobile device.|
| `mobilemaildecoration` |commerce|A boolean value that indicates if the mobile device supports Email decorations (animation).|
| `mobilemanufacturer` |commerce|The mobile device manufacturer.|
| `mobilemaxbookmarkurllength` |commerce|The maximum bookmark URL length supported by the mobile device, in characters.|
| `mobilemaxbrowserurllength` |commerce|The maximum Web browser URL length supported by the mobile device, in characters.|
| `mobilemaxmailurllength` |commerce|The maximum Email URL length supported by the mobile device, in characters.|
| `mobilenetprotocols` |commerce|The network protocols supported by the mobile device (GPRS, Edge, etc.)|
| `mobileos` |commerce|The operating system running on the mobile device.|
| `mobilepushtotalk` |commerce|Boolean value that indicates if the mobile device supports Push to Talk (PTT).|
| `mobilescreenheight` |commerce|Mobile device screen height (in pixels).|
| `mobilescreensize` |commerce|Mobile device screen size (in inches).|
| `mobilescreenwidth` |commerce|Mobile device screen width (in pixels).|
| `mobilevideosupport` |commerce|Mobile device with video support enabled.|
| `monitorcolordepth` |commerce|The number of simultaneous display colors supported by the mobile device.|
| `monitorresolution` |traffic+commerce|Client's monitor resolution.|
| `operatingsystem` |traffic+commerce|Client operating system.|
| `page` |traffic+commerce|Page names.|
| `pagedepth` |traffic| The visitor's maximum page depth (number of clicks into the Web site), calculated from the landing page. Not supported by inline segments. |
| `pagesnotfound` |traffic|The number of times a visitor encountered a missing page (HTTP 404 error).|
| `pathlength` |commerce|Number of pages viewed during the visit.|
| `product` |commerce|Individual products.|
| `prop1` - `prop75` |traffic+commerce|Specified property.|
| `trackingcode` |commerce|Campaign tracking code results.|
| `referrer` |traffic|Domain or URL that client came from.|
| `referrertype` |traffic|Type of referrer. Options include Hard drive, Other Web site, Search engine, Social, andTyped/Bookmarked.|
| `referringdomain` |traffic+commerce|Domains that referred client to the site.|
| `referringdomainoriginal` |commerce|Domains that referred client to the site on their first visit.|
|`reportsuite` |n/a (reportSuite is the only element on summary reports)|Used to generate report suite summary reports.|
| `returnfrequency` |traffic|Number of clients that return, and how soon they return.|
| `searchengine` |traffic+commerce|Search engine used to locate site.|
| `searchenginekeyword` |traffic+commerce|Search engine keyword used to locate the site.|
| `searchenginenatural` |traffic+commerce|Search engine used to locate the site.|
| `searchenginenaturalkeyword` |traffic+commerce|The natural (not paid) search engine keyword used to find the site.|
| `searchenginenaturalpagerank` | |Search engine results rank.|
| `searchenginepaid` |traffic+commerce|Search engine with paid result placement.|
| `searchenginepaidkeyword` |traffic+commerce|The paid search engine keyword used to find the site.|
| `server` |traffic|Pages hosted by the same server.|
| `sitesection` |traffic+commerce|Groups of Web pages, organized into a site.|
| `socialterm` |commerce|Term selected to identify relevant social content.|
| `socialcontentprovider` |commerce|Provider of the social data.|
| `socialauthor` |commerce|Content author.|
| `sociallink` |commerce|Social link.|
| `socialtermslist` |commerce|List of social terms.|
| `socialaveragesentiment` |commerce|Sentiment rating of social content.|
| `socialproperty` |commerce|A facebook page or application.|
| `socialassettrackingcode` |commerce|Asset identifier.|
| `state` |commerce|U.S. state.|
| `surveybase` |commerce|The unclassified Survey element. Use this element with classifications retrieved via ReportSuite.GetClassifications where `c_view = survey`.|
| `timeprior` |traffic+commerce|Client time zone.|
| `timezone` |traffic+commerce|Client time zone.|
| `timevisit` |traffic+commerce|Duration of client visit.|
| `tntbase` |commerce|The unclassified Test & Target element. Use this element with classifications retrieved via ReportSuite.GetClassifications where `c_view = tnt`.|
| `topLevelDomain` |traffic+commerce|Originating domain extension (.com, .net, .gov, .edu, .org, and country extensions).|
| `trackingcode` |commerce|Tracking code.|
| `video` |commerce|Video name. (v15)|
| `videoad` |commerce|Video ad.|
| `videosegment` |commerce|Segment name.|
| `videocontenttype` |commerce|Content type associated with a video.|
| `videos` |commerce|Videos viewed. (v14)|
| `videoplayers` |commerce|Video player used to view videos.|
| `visitnumber` |traffic+commerce| Number of visits to site. Not supported by inline segments. |
| `zip` |commerce|Client zip code.|

# Analytics Elements

Provides a list of elements available in Analytics.

cPage is deprecated. Update your reports to use page in place of this element.

## Analytics Elements

An *element* is a structure that further breaks down \(organizes\) the a report's metrics data. For example, you can generate a report that breaks down a page view \(metric\) report by the Web browsers \(element\) used to access the page. The resulting report lists page views by Web browser type. As part of the report definition, you can specify the elements to include in the report as a parameter, using the [reportDefinitionElementList](../data_types/r_reportDefinitionElement.md#) data type.

**Note:** All report suites do not offer all elements. Use ReportSuite.GetAvailableElements \(in the Administration API\) to get a list of Element IDs available in a particular report suite.

-   Social elements are available only if Social is enabled.
-   Video elements are available only if v15 video measurement is configured in Admin Console.
-   Mobile elements are available only if mobile application reporting is enabled in Admin Console.

|Element|Description|
|-------|-----------|
|accountsummary |Corresponds to the Account Summary report in Analytics.|
|browser |Web browser \(for example, Internet Explorer 7.0, Firefox 2.0.8\).|
|browserHeight |Browser frame height \(in pixels\).|
|browserType |Web browser vendor \(for example, Microsoft, Mozilla, Apple\).|
|browserWidth |Browser frame width \(in pixels\).|
|category |Groups of products, organized into a category.|
|connectionType |Internet connection type used to access site.|
|cookiesEnabled |Web browser that has cookies enabled.|
|cPage |\(**Deprecated**, use Page instead\). Common eCommerce page statistics, including Reloads, Page Depth, Time spent on page, Clicks to page.|
|customerLoyalty |The Customer Loyalty classification.|
|daysBeforeFirstPurchase |Number of days between first visit and first purchase.|
|daysSinceLastPurchase |Days since last purchase.|
|domain |ISPs and organizations used to access site.|
|entryPage |Page used to enter the site.|
|entryPageOriginal |Page used to enter the site for the first time.|
|eVar*\#* |Specified eVar.|
|firstTouchChannel |First touch marketing channel.|
|firstTouchChannelDetail |Detailed version of the First touch marketing channel.|
|geoCountry |Country.|
|geoRegion |Geographical region.|
|geoCity |City.|
|geoDMA |Designated Market Area.|
|hier1-5 | \(REST only, not supported through SOAP\) Hierarchy report. To specify a specific level to report, add a add a `level` and `parentID` parameter to the element structure: ```{	"id":"hier2",	"level":"3",	"parentID":"75483925"}``` The `parentID` is obtained from the results of the previous level: ```{   "name": "Home Page",   "url": "",   "counts": ["72"],   "parentID": "75483925"}``` |
|homePage |User selected home page.|
|javaEnabled |Web browser that has Java enabled.|
|javaScriptEnabled |Web browser that has JavaScript enabled.|
|javaScriptVersion |Version of JavaScript used on the Web browser.|
|language |Web browser language.|
|lasttouchchannel |Last touch marketing channel.|
|lasttouchchanneldetail |Detailed version of the Last touch marketing channel.|
|linkCustom |Link usage \(user-preferred links\).|
|linkDownload |Links to downloaded content.|
|linkExit |Third-party links where client exits your site.|
|listVar\# |Specified list variable.|
|mobileAudioSupport |Audio formats supported by mobile device.|
|mobileCarrier |Mobile service provider.|
|mobileColorDepth |Number of simultaneous display colors supported by mobile device.|
|mobileCookieSupport |Mobile device with cookies enabled.|
|mobileDeviceName |Mobile device name.|
|mobileDeviceType |Mobile device type.|
|mobileDeviceNumberTransmit |Indicates if Device Number Transmit is On or Off on the mobile device.|
|mobileDRM |The type of Digital Rights Management \(DRM\) supported by the mobile device \(Forward Lock, Combined Delivery, Separate Delivery\).|
|mobileImageSupport |Mobile device with image support enabled.|
|mobileInformationServices |The information services supported by the mobile device.|
|mobileJavaVM |The Java version running on the mobile device.|
|mobileMailDecoration |A boolean value that indicates if the mobile device supports Email decorations \(animation\).|
|mobileManufacturer |The mobile device manufacturer.|
|mobileMaxBookmarkUrlLength |The maximum bookmark URL length supported by the mobile device, in characters.|
|mobileMaxBrowserUrlLength |The maximum Web browser URL length supported by the mobile device, in characters.|
|mobileMaxMailUrlLength |The maximum Email URL length supported by the mobile device, in characters.|
|mobileNetProtocols |The network protocols supported by the mobile device \(GPRS, Edge, etc.\)|
|mobileOS |The operating system running on the mobile device.|
|mobilePushToTalk |Boolean value that indicates if the mobile device supports Push to Talk \(PTT\).|
|mobileScreenHeight |Mobile device screen height \(in pixels\).|
|mobileScreenSize |Mobile device screen size \(in inches\).|
|mobileScreenWidth |Mobile device screen width \(in pixels\).|
|mobileVideoSupport |Mobile device with video support enabled.|
|monitorColorDepth |The number of simultaneous display colors supported by the mobile device.|
|monitorResolution |Client's monitor resolution.|
|operatingSystem |Client operating system.|
|page |Common Web page statistics, including Reloads, Page Depth, Time spent on page, Clicks to page.|
|pageDepth |The visitor's maximum page depth \(number of clicks into the Web site\), calculated from the landing page.|
|pagesNotFound |The number of times a visitor encountered a missing page \(HTTP 404 error\).|
|pathLength |Number of pages viewed during the visit.|
|product |Individual products.|
|prop*\#* |Specified property.|
|trackingCode |Campaign tracking code results.|
|referrer |Domain or URL that client came from.|
|referrerType |Type of referrer. Options include Hard drive, Other Web site, Search engine, Social, andTyped/Bookmarked.|
|referringDomain |Domains that referred client to the site.|
|referringDomainOriginal |Domains that referred client to the site on their first visit.|
|returnFrequency |Number of clients that return, and how soon they return.|
|searchEngine |Search engine used to locate site.|
|searchEngineKeyword |Search engine keyword used to locate the site.|
|searchEngineNatural |Search engine used to locate the site.|
|searchEngineNaturalKeyword |The natural \(not paid\) search engine keyword used to find the site.|
|searchEngineNaturalPageRank |Search engine results rank.|
|searchEnginePaid |Search engine with paid result placement.|
|searchEnginePaidKeyword |The paid search engine keyword used to find the site.|
|server |Pages hosted by the same server.|
|siteSection |Groups of Web pages, organized into a site.|
|socialterm |Term selected to identify relevant social content.|
|socialcontentprovider |Provider of the social data.|
|socialauthor |Content author.|
|sociallink |Social link.|
|socialtermslist |List of social terms.|
|socialaveragesentiment |Sentiment rating of social content.|
|socialproperty |A facebook page or application.|
|socialassettrackingcode |Asset identifier.|
|state |U.S. state.|
|surveybase |The unclassified Survey element. Use this element with classifications retrieved via ReportSuite.GetClassifications where `c_view = survey`.|
|timeZone |Client time zone.|
|timeVisit |Duration of client visit.|
|tntBase |The unclassified Test & Target element. Use this element with classifications retrieved via ReportSuite.GetClassifications where `c_view = tnt`.|
|topLevelDomain |Originating domain extension \(.com, .net, .gov, .edu, .org, and country extensions\).|
|trackingCode |Tracking code.|
|video |Video name. \(v15\)|
|videoad |Video ad.|
|videosegment |Segment name.|
|videocontenttype |Content type associated with a video.|
|videos |Videos viewed. \(v14\)|
|videoPlayers |Video player used to view videos.|
|visitNumber |Number of visits to site.|
|zip |Client zip code.|

**Parent topic:** [Reference](../reference/c_reference.md)


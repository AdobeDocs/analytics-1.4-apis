# Supported XML Tags and Query Variables

The following table lists all supported XML tags, along with their associated query string variable equivalents and HTTP header variable equivalents, where applicable.

When sending `HTTP POST` data, Adobe data collection servers only process values in supported XML tags. When sending `HTTP GET` data, Adobe data collection servers only process values in supported query strings and HTTP headers.

## Required components

Every Data Insertion API call must include the following components:

* At least one of:
  * `<marketingCloudVisitorId>`
  * `<fallbackVisitorId>`
  * `<visitorId>`
  * `<ipAdress>` and `<userAgent>`
* At least one of:
  * `<pageUrl>`
  * `<pageName>`
  * `<linkType>` with `<linkName>` or `<linkUrl>`
* Report suite ID (in the request URL for `GET` or `<reportSuiteId>` for `POST`)

API calls that do not meet the above requirements are omitted from reporting. XML tags are not case-sensitive; capitalization is used only to assist readability.

XML tag (`POST`) | Query string parameter (`GET`) | Description
--- | --- | ---
`<browserHeight>` | `bh` | The [Browser height](https://experienceleague.adobe.com/docs/analytics/components/dimensions/browser-height.html) dimension.
`<browserWidth>` | `bw` | The [Browser width](https://experienceleague.adobe.com/docs/analytics/components/dimensions/browser-width.html) dimension.
`<campaign>` | `v0` | The [Tracking code](https://experienceleague.adobe.com/docs/analytics/components/dimensions/tracking-code.html) dimension.
`<channel>` | `ch` | The [Site section](https://experienceleague.adobe.com/docs/analytics/components/dimensions/site-section.html) dimension.
`<colorDepth>` | `c` | The [Color depth](https://experienceleague.adobe.com/docs/analytics/components/dimensions/color-depth.html) dimension.
`<connectionType>` | `ct` | The [Connection type](https://experienceleague.adobe.com/docs/analytics/components/dimensions/connection-type.html) dimension.
`<contextData.key>` | `c.[key]` | [`contextData`](https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/contextdata.html) implementation variables.
`<cookiesEnabled>` | `k` | The [Cookie support](https://experienceleague.adobe.com/docs/analytics/components/dimensions/cookie-support.html) dimension.
`<customerPerspective>` | `cp` | Integer representing if the hit is considered a background or foreground hit. Valid values include **`0`** (foreground hit, default) and **`1`** (background hit). See [Context-aware sessions](https://experienceleague.adobe.com/docs/analytics/components/virtual-report-suites/vrs-mobile-visit-processing.html).
`<currencyCode>` | `cc` | The [`currencyCode`](https://experienceleague.adobe.com/docs/analytics/implementation/vars/config-vars/currencycode.html) implementation variable.
`<eVar1>` - `<eVar250>` | `v1` - `v250` | [eVar](https://experienceleague.adobe.com/docs/analytics/components/dimensions/evar.html) dimensions.
`<events>` | `events` | The [`events`](https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/events/events-overview.html) implementation variable.
`<fallbackVisitorId>` | `fid` | A fallback cookie `s_fid` is set when the primary cookie (`AMCV_` or `s_vi`) is unavailable. It has a 2 year expiration and is used as the fallback identification method going forward.
`<hier1>` - `<hier5>` | `h1` - `h5` | [Hierarchy variables](https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/hier.html).
`<imsRegion>` | `aamlh` | Integer that represents the Adobe Audience Manager location hint. Ensures that data is forwarded to the right Audience Manager regional data collection center. The Analytics tracking server/API endpoint must also be set to forward to the correct Audience Manager instance before Analytics data is forwarded to Audience Manager. Use the [getLocationHint](https://experienceleague.adobe.com/docs/id-service/using/id-service-api/methods/getlocationhint.html) function of the Adobe Experience Cloud Identity Service API to retrieve the correct `<imsregion>` value for the user. The `<marketingCloudVisitorID>` tag is also required when using this tag.
`<ipAddress>` | `X-Forwarded-For` HTTP header | The visitor's IP address.
`<javaEnabled>` | `v` | The [Java enabled](https://experienceleague.adobe.com/docs/analytics/components/dimensions/java-enabled.html) dimension.
`<language>` | `Accept-Language` HTTP header | The [Language](https://experienceleague.adobe.com/docs/analytics/components/dimensions/language.html) dimension.
`<linkName>` | `pev2` | The [Download link](https://experienceleague.adobe.com/docs/analytics/components/dimensions/download-link.html), [Exit link](https://experienceleague.adobe.com/docs/analytics/components/dimensions/exit-link.html), or [Custom link](https://experienceleague.adobe.com/docs/analytics/components/dimensions/custom-link.html) dimension, depending on the value in the `<linkType>` tag. If this tag contains a value, `<pageName>` is ignored.
`<linkType>` | `pe` | The type of link. Defaults to `o` if this tag is empty or omitted and `<linkName>` contains a value. Valid values include:<br/> **`d`**: Download link<br/>**`e`**: Exit link<br/>**`o`**: Custom link
`<linkUrl>` | `pev1` | The link URL.
`<list1>` - `<list3>` | `l1` - `l3` | [List variables](https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/list.html).
`<marketingCloudOrgId>` | `mcorgid` | The Experience Cloud Organization ID; it identifies the organization within the Adobe Experience Cloud.
`<marketingCloudVisitorId>` | `mid` | The unique identifier used with the [Adobe Experience Cloud Identity Service](https://experienceleague.adobe.com/docs/id-service/using/id-service-api/library.html).
`<pageName>` | `pageName` | The [Page](https://experienceleague.adobe.com/docs/analytics/components/dimensions/page.html) dimension.
`<pageType>` | `pageType` | The [`pageType`](https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/pagetype.html) implementation variable. Set to the string value `"errorPage"` on any error pages, such as a 404 or 503 error.
`<pageUrl>` | `g` | The [Page URL](https://experienceleague.adobe.com/docs/analytics/components/dimensions/page-url.html) dimension.
`<products>` | `products` | The [`products`](https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/products.html) implementation variable.
`<prop1>` - `<prop75>` | `c1` - `c75` | [Prop](https://experienceleague.adobe.com/docs/analytics/components/dimensions/prop.html) dimensions.
`<purchaseId>` | `purchaseID` | The [`purchaseID`](https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/purchaseid.html) implementation variable.
`<referrer>` | `r` | The [`referrer`](https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/referrer.html) implementation variable.
`<reportSuiteId>` | Include in `GET` URL | Specifies the report suite(s) where you want to submit data. Separate multiple report suite IDs with a comma.
`<resolution>` | `s` | The [Monitor resolution](https://experienceleague.adobe.com/docs/analytics/components/dimensions/monitor-resolution.html) dimension.
`<scXmlVer>` | N/A | Analytics XML request version number. For example, `1.0`.
`<server>` | `server` | The [Server](https://experienceleague.adobe.com/docs/analytics/components/dimensions/server.html) dimension.
`<timestamp>` | `ts` | The date and time that the data was collected. [Unix Time](https://en.wikipedia.org/wiki/Unix_time) and [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) are supported. Milliseconds are not allowed. See [Timestamps Optional](https://experienceleague.adobe.com/docs/analytics/technotes/timestamps-optional.html) for more information.
`<transactionId>` | `xact` | The [`transactionID`](https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/transactionid.html) variable.
`<userAgent>` | `User-Agent` HTTP header | The device's user agent string.
`<userAgentClientHints>` | `h.[key]` | [`Client Hint`](https://experienceleague.adobe.com/docs/experience-platform/edge/fundamentals/user-agent-client-hints.html) fundamentals. Adding [child fields](#user-agent-client-hint-fields).
`<visitorId>` | `vid` | The [`visitorID`](https://experienceleague.adobe.com/docs/analytics/implementation/vars/config-vars/visitorid.html) implementation variable.
`<zip>` | `zip` | The [Zip code](https://experienceleague.adobe.com/docs/analytics/components/dimensions/zip-code.html) dimension.


### User Agent Client Hint Fields

When using the Data Insertion API with XML, the <userAgentClientHints> element serves as the parent node to contain the client hint elements.
There are 8 possible child nodes that can be nested under the parent node, each of which is identified below and discussed in detail 
[here](https://experienceleague.adobe.com/docs/experience-platform/edge/fundamentals/user-agent-client-hints.html). Alternatively, the
fields can also be submitted as query string parameters.

XML tag | Query string parameter | Data type
--- | --- | ---
`<architecture>` | h.architecture | String
`<bitness>` | h.bitness |  String
`<brands>` | h.brands | Can contain 1 or more `<brand>` records. Ex.: `<brand><name>Chromium</name><version>100</version></brand>`. Query string example: [{"brand":"Chromium", "version":"100"}]   
`<mobile>` | h.mobile | Boolean
`<model>` | h.model | String
`<platform>` | h.platform | String
`<platformVersion>` | h.platformversion | String
`<wow64>` | w.wow64 | Boolean

#### Example

```
<userAgentClientHints>
    <architecture>x64</architecture>
    <bitness>64</bitness>
    <brands>
        <brand>
            <name>Chromium</name>
            <version>96</version>
        </brand>
    </brands>
    <mobile>false</mobile>
    <platform>Windows</platform>
    <platformVersion>NT 10.0</platformVersion>
    <wow64>true</wow64>
<userAgentClientHints>
```
# Livestream API variable reference

Lists the dimensions and metrics that are available in the Livestream API.

<InlineAlert variant="note" slots="text"/>

The dimensions and metrics listed below can change over time. Make sure that your Livestream client can handle changes to available components.

| Dimension or Metric | Type | Description |
| --- | --- | --- |
| **`bot`** | `string` |Determines if the hit matched [Bot rules](https://experienceleague.adobe.com/docs/analytics/admin/admin-tools/bot-removal/bot-rules.html) Valid values include `<Bot>` and `<Not a bot>`. |
| **`browser`** | `string` | The [Browser](https://experienceleague.adobe.com/docs/analytics/components/dimensions/browser.html) dimension. |
| **`browserHeight`** | `number` | The [Browser height](https://experienceleague.adobe.com/docs/analytics/components/dimensions/browser-height.html) dimension. |
| **`browserWidth`** | `number` | The [Browser width](https://experienceleague.adobe.com/docs/analytics/components/dimensions/browser-width.html) dimension. |
| **`campaign`** | | See `evars`. |
| **`carrier`** | `string` | The [Mobile carrier](https://experienceleague.adobe.com/docs/analytics/components/dimensions/mobile-dimensions.html) dimension. |
| **`connectionType`** | `string` | The [Connection type](https://experienceleague.adobe.com/docs/analytics/components/dimensions/connection-type.html) dimension. |
| **`currency`** | `string` | The [`currencyCode`](https://experienceleague.adobe.com/docs/analytics/implementation/vars/config-vars/currencycode.html) implementation variable used for the hit. |
| **`customVisId`** | `string` | The [`visitorID`](https://experienceleague.adobe.com/docs/analytics/implementation/vars/config-vars/visitorid.html) implementation variable used for the hit. |
| **`evars`** | `object` | An object that contains all [eVars](https://experienceleague.adobe.com/docs/analytics/components/dimensions/evar.html) as well as the [Tracking code](https://experienceleague.adobe.com/docs/analytics/components/dimensions/tracking-code.html) dimension. |
| **`events`** | `object` | An object that contains metric data for the hit, including [Cart additions](https://experienceleague.adobe.com/docs/analytics/components/metrics/cart-additions.html), [Cart removals](https://experienceleague.adobe.com/docs/analytics/components/metrics/cart-removals.html), [Cart views](https://experienceleague.adobe.com/docs/analytics/components/metrics/cart-views.html), [Carts](https://experienceleague.adobe.com/docs/analytics/components/metrics/carts.html), [Checkouts](https://experienceleague.adobe.com/docs/analytics/components/metrics/checkouts.html), [Product views](https://experienceleague.adobe.com/docs/analytics/components/metrics/product-views.html), [Revenue](https://experienceleague.adobe.com/docs/analytics/components/metrics/revenue.html), and [Custom events](https://experienceleague.adobe.com/docs/analytics/components/metrics/custom-events.html). Each item contains an object array that holds data for an individual event. That data includes:<br/>- **`count`** (`number`): The amount to increment the metric by.<br/>- **`exponent`** (`number`): The number of decimal places to move `count`.<br/>- **`unique`** (`string`): The value used for [Event serialization](https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/events/event-serialization.html). |
| **`exclude`** | `object` | An object that indicates if the hit is excluded in Analytics reporting. Components within the object include:<br/>- **`id`** (`number`): The numeric ID representing the exclude reason. See `exclude_hit` in [Data feed column reference](https://experienceleague.adobe.com/docs/analytics/export/analytics-data-feed/data-feed-contents/datafeeds-reference.html).<br/>- **`value`** (`string`): Determines if the hit is excluded. Valid values include `yes` (hit is excluded) and `no` (hit is included).<br/>- **`description`** (`string`): Exclude reason description. |
| **`geoCity`** | `string` | The [Cities](https://experienceleague.adobe.com/docs/analytics/components/dimensions/cities.html) dimension. |
| **`geoCountry`** | `string` | The [Countries](https://experienceleague.adobe.com/docs/analytics/components/dimensions/countries.html) dimension. |
| **`geoDMA`** | `number` | Numeric ID used in the [US DMA](https://experienceleague.adobe.com/docs/analytics/components/dimensions/us-dma.html) dimension. |
| **`geoRegion`** | `string` | The [Regions](https://experienceleague.adobe.com/docs/analytics/components/dimensions/regions.html) dimension. |
| **`geoZip`** | `string` | The [Zip code](https://experienceleague.adobe.com/docs/analytics/components/dimensions/zip-code.html) dimension, if Report suite settings indicate that geosegmentation data is used. See also `zip`. |
| **`hierarchies`** | `object` | An object containing data for [Hierarchy](https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/hier.html) dimensions. Each array item contains **`delim`** (`string`) and **`values`** (`string[]`). |
| **`hitIdHigh`** | `number` | Used in combination with `hitIdLow` to uniquely identify a hit. Only available in [Data feeds](https://experienceleague.adobe.com/docs/analytics/export/analytics-data-feed/data-feed-contents/datafeeds-reference.html). |
| **`hitIdLow`** | `number` | Used in combination with `hitIdHigh` to uniquely identify a hit. Only available in [Data feeds](https://experienceleague.adobe.com/docs/analytics/export/analytics-data-feed/data-feed-contents/datafeeds-reference.html).|
| **`hitSource`** | `number` | Indicates what source the hit came from. Only available in [Data feeds](https://experienceleague.adobe.com/docs/analytics/export/analytics-data-feed/data-feed-contents/datafeeds-reference.html). |
| **`ip`** | `string` | The IP address of user's computer. Only available in Data Warehouse and [Data feeds](https://experienceleague.adobe.com/docs/analytics/export/analytics-data-feed/data-feed-contents/datafeeds-reference.html). |
| **`isErrorPage`** | `boolean` | Determines the value in the [Pages not found](https://experienceleague.adobe.com/docs/analytics/components/dimensions/pages-not-found.html) dimension. |
| **`javaEnabled`** | `boolean` | The [Java enabled](https://experienceleague.adobe.com/docs/analytics/components/dimensions/java-enabled.html) dimension. |
| **`language`** | `string` | The [Language](https://experienceleague.adobe.com/docs/analytics/components/dimensions/language.html) dimension. |
| **`languageAbbrev`** | `string` | Language abbreviation of the browser. |
| **`lat`** | `string` | Latitude of the hit based on the location associated with the IP address. Only available in [Data feeds](https://experienceleague.adobe.com/docs/analytics/export/analytics-data-feed/data-feed-contents/datafeeds-reference.html). |
| **`lon`** | `string` | Longitude based on the location associated with the IP address. Only available in [Data feeds](https://experienceleague.adobe.com/docs/analytics/export/analytics-data-feed/data-feed-contents/datafeeds-reference.html). |
| **`mcAudiences`** | `object` | An object containing segment IDs from Adobe Audience Manager's Server-side Forwarding integration. Items include **`values`** (`string[]`), and **`delim`** (`number`). |
| **`mcVisIdHigh`** | `number` | Used in combination with `mcVisIdLow` that represents the [Experience Cloud visitor ID](https://experienceleague.adobe.com/docs/id-service/using/home.html). |
| **`mcVisIdLow`** | `number` | Used in combination with `mcVisIdHigh` that represents the [Experience Cloud visitor ID](https://experienceleague.adobe.com/docs/id-service/using/home.html). |
| **`mobileAudioSupport`** | `boolean` | The [Mobile audio support](https://experienceleague.adobe.com/docs/analytics/components/dimensions/mobile-dimensions.html) dimension. |
| **`mobileColorDepth`** | `number` | The [Mobile color depth](https://experienceleague.adobe.com/docs/analytics/components/dimensions/mobile-dimensions.html) dimension. |
| **`mobileCookieSupport`** | `boolean` | The [Mobile cookie support](https://experienceleague.adobe.com/docs/analytics/components/dimensions/mobile-dimensions.html) dimension. |
| **`mobileDeviceName`** | `string` | The [Mobile device](https://experienceleague.adobe.com/docs/analytics/components/dimensions/mobile-dimensions.html) dimension. |
| **`mobileDeviceType`** | `string` | The [Mobile device type](https://experienceleague.adobe.com/docs/analytics/components/dimensions/mobile-dimensions.html) dimension. |
| **`mobileManufacturer`** | `string` | The [Mobile manufacturer](https://experienceleague.adobe.com/docs/analytics/components/dimensions/mobile-dimensions.html) dimension. |
| **`mobileScreenHeight`** | `number` | The [Mobile screen height](https://experienceleague.adobe.com/docs/analytics/components/dimensions/mobile-dimensions.html) dimension. |
| **`mobileScreenWidth`** | `number` | The [Mobile screen width](https://experienceleague.adobe.com/docs/analytics/components/dimensions/mobile-dimensions.html) dimension. |
| **`mobileVideoSupport`** | `boolean` | The [Mobile video support](https://experienceleague.adobe.com/docs/analytics/components/dimensions/mobile-dimensions.html) dimension. |
| **`monitorColorDepth`** | `string` | The [Color depth](https://experienceleague.adobe.com/docs/analytics/components/dimensions/color-depth.html) dimension. |
| **`monitorHeight`** | `number` | Used in combination with `monitorWidth` that represents the [Monitor resolution](https://experienceleague.adobe.com/docs/analytics/components/dimensions/monitor-resolution.html) dimension. |
| **`monitorWidth`** | `number` | Used in combination with `monitorHeight` that represents the [Monitor resolution](https://experienceleague.adobe.com/docs/analytics/components/dimensions/monitor-resolution.html) dimension. |
| **`mvvars`** | `object` | An object containing data for each [List variable](https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/list.html). Each list var contains **`m`** (`object`), which contains **`values`** (`string[]`) and **`delim`** (`number`). |
| **`operatingSystem`** | `string` | The [Operating system](https://experienceleague.adobe.com/docs/analytics/components/dimensions/operating-systems.html) dimension. |
| **`pageName`** | `string` | The [Page](https://experienceleague.adobe.com/docs/analytics/components/dimensions/page.html) dimension. |
| **`pageURL`** | `string` | The [Page URL](https://experienceleague.adobe.com/docs/analytics/components/dimensions/page-url.html) dimension. |
| **`props`** | `object` | An object that contains all [Props](https://experienceleague.adobe.com/docs/analytics/components/dimensions/prop.html) as well as the [Site section](https://experienceleague.adobe.com/docs/analytics/components/dimensions/site-section.html) dimension. |
| **`products`** | `object[]` | An object array that contains similar data to the [`products`](https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/products.html) implementation variable. Each object includes **`category`** (`string`), **`evars`** (`object`), **`events`** (`object[]`), **`name`** (`string`), **`revenue`** (`number`), and **`units`** (`number`). |
| **`purchaseId`** | `string` | The [`purchaseID`](https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/purchaseid.html) implementation variable. |
| **`receivedTimeGMT`** | `number` | The timestamp when Adobe data collection servers received the hit, based in Unix time. Only available in [Data feeds](https://experienceleague.adobe.com/docs/analytics/export/analytics-data-feed/data-feed-contents/datafeeds-reference.html) as `hit_time_gmt`. |
| **`referrer`** | `string` | The [Referrer](https://experienceleague.adobe.com/docs/analytics/components/dimensions/referrer.html) dimension. |
| **`reportSuite`** | `string` | The report suite ID that the hit was sent to. |
| **`searchEngine`** | `string` | The [Search engine](https://experienceleague.adobe.com/docs/analytics/components/dimensions/search-engine.html) dimension. |
| **`service`** | `string` | No longer used. Use `page_event` instead. |
| **`site_section`** | | See `props`. |
| **`timeGMT`** | `number` | The timestamp that the hit applies to. If the hit did not contain a custom [timestamp](https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/timestamp.html), this field typically matches `receivedTimeGMT`. |
| **`tnt`** | `object` | Field used in [A4T](https://experienceleague.adobe.com/docs/target/using/integrate/a4t/a4t.html). |
| **`tntAction`** | `object` | Action used in [A4T](https://experienceleague.adobe.com/docs/target/using/integrate/a4t/a4t.html). |
| **`topLevelDomain`** | `string` | The [Domain](https://experienceleague.adobe.com/docs/analytics/components/dimensions/domain.html) dimension. |
| **`transactionId`** | `string` | The [`transactionID`](https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/transactionid.html) implementation variable. |
| **`truncated`** | `boolean` | A boolean that indicates if a complete hit was sent. |
| **`userAgent`** | `string` | The user agent string. Only available in [Data feeds](https://experienceleague.adobe.com/docs/analytics/export/analytics-data-feed/data-feed-contents/datafeeds-reference.html). |
| **`usesPersistentCookie`** | `number` | The [Persistent cookie support](https://experienceleague.adobe.com/docs/analytics/components/dimensions/persistent-cookie-support.html) dimension. Valid values include `0` (Unknown), `1` (Supported), and `2` (Unsupported). |
| **`visIdHigh`** | `number` | Used in combination with `visIdLow` to uniquely identify a visitor. Only available in [Data feeds](https://experienceleague.adobe.com/docs/analytics/export/analytics-data-feed/data-feed-contents/datafeeds-reference.html). |
| **`visIdLow`** | `number` | Used in combination with `visIdHigh` to uniquely identify a visitor. Only available in [Data feeds](https://experienceleague.adobe.com/docs/analytics/export/analytics-data-feed/data-feed-contents/datafeeds-reference.html). |
| **`visIdType`** | `number` | Numeric ID representing the method used to identify the visitor. Only available in [Data feeds](https://experienceleague.adobe.com/docs/analytics/export/analytics-data-feed/data-feed-contents/datafeeds-reference.html). |
| **`zip`** | `string` | The [Zip code](https://experienceleague.adobe.com/docs/analytics/components/dimensions/zip-code.html) dimension, if Report suite settings indicate that the [`zip`](https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/zip.html) variable is used. See also `geo_zip`. |

See [Livestream sample JSON output](example-output.md) for a full example JSON request.

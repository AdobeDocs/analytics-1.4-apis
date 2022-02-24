# Limitations

There are some limitations to server-side data collection when compared to client-side data collection using JavaScript.

- Server-side data collection cannot collect Web browser configuration data.
- Server-side data collection cannot collect ClickMap data.
- Server-side data collection loses cached page navigation data because using a Web browser's back button or reloading a cached page does not generate additional server requests or responses. This limits pathing data available for Analytics reports.
- Some bots do not run JavaScript when requesting a page, and do not request the page's image tags. However, server-side data collection includes requests from those bots and spiders.
- You must have control over the servers from which you want to collect data. If you use a Content Delivery Network (CDN) such as Akamai* to deliver web pages, the server-side data collection described here cannot collect data for those pages.
- If you control most of your Web site pages, but use some third-party services (for example, surveys or shopping cart systems), server-side data collection cannot collect data from the third-party pages. You should use JavaScript tagging on third-party pages that request content from your Web servers to gain visibility into those systems.
- Server-side data collection alone cannot provide cross-domain tracking of site visitors. However, you can use the `<visitorID>` tag in conjunction with client-side JavaScript data collection to pass additional information to the server. This is the only way that cross-domain tracking is possible when using a `<visitorID>`.
- Server-side data collection can co-exist with a client-side (JavaScript) implementation only if clients submit server-side data in near real-time. If clients have a JavaScript beacon implementation, and want to collect server-side data and submit it in batches, they should use Data Sources, not the Data Insertion API.


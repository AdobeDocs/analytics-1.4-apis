---
title: Adobe Analytics 1.4 API end-of-life FAQ
description: Details for the Adobe Analytics 1.4 API end-of-life announcement.
---
# Adobe Analytics 1.4 API end-of-life FAQ

Adobe plans to retire the Adobe Analytics 1.4 API on **August 12, 2026**. All endpoints using this version of the API are no longer accessible after this date. This announcement directly impacts the following:

* Adobe Analytics 1.4 APIs, excluding the Data Insertion API
* Adobe Analytics WSSE Authentication

## 1.4 APIs

The Adobe Analytics 1.4 APIs provide a wide range of actions, such as reporting, classifications, data feeds, and report suite configurations. They are being sunset in favor of the [Adobe Analytics 2.0 APIs](https://developer.adobe.com/analytics-apis/docs/2.0/). The 2.0 APIs allow you to perform almost any action that you can perform in the Analytics user interface, such such as reporting or managing components like segments and calculated metrics.

Adobe offers a [migration path](https://developer.adobe.com/analytics-apis/docs/2.0/guides/migration/) for 1.4 API users. You can migrate your integrations to the 2.0 APIs (the same APIs that the Adobe Analytics application depends on) and take advantage of the latest features. Any capabilities that are available in the 1.4 APIs can be accomplished using the [Adobe Analytics 2.0 APIs](https://developer.adobe.com/analytics-apis/docs/2.0/).

## WSSE Authentication

WSSE authentication is a legacy authentication protocol supported by the Analytics 1.4 APIs. It has been replaced by the OAuth-based authentication options provided in the [Adobe Developer Console](https://developer.adobe.com/console/home). Projects that use WSSE authentication must update their credentials to those provisioned in the Adobe Developer Console. To do this, log in to the [Adobe Developer Console](https://developer.adobe.com/console/home) to create a project for your Analytics 2.0 API integration. Select either the OAuth User or OAuth Server-to-Server authentication method.

## FAQ

<Accordion>

<AccordionItem header="Does this impact my existing Adobe IO projects for the Analytics APIs?">

Any existing projects using the Analytics 1.4 APIs are impacted. Those integrations must be migrated to the [Adobe Analytics 2.0 APIs](https://developer.adobe.com/analytics-apis/docs/2.0/) before the EOL deadline.

</AccordionItem>

<AccordionItem header="I've shared my Adobe credentials with another product or application that uses the Analytics APIs. Are they impacted?">

If that product or application uses your WSSE credential and/or calls the Analytics 1.4 APIs, it is impacted and must migrate before the EOL deadline. Reach out to the product or application provider for more details on their migration plans and timeline.

</AccordionItem>

<AccordionItem header="How can I determine which API that my project uses?">

The base URL that the API calls determines which API version your project uses. The Adobe Analytics 1.4 APIs use the following URLs:

* `https://api.omniture.com`
* `https://api3.omniture.com`
* `https://api4.omniture.com`
* `https://api5.omniture.com`

The [Adobe Analytics 2.0 APIs](https://developer.adobe.com/analytics-apis/docs/2.0/) use the following URL:

* `https://analytics.adobe.io`

If any of your API projects use `api*.omniture.com`, it uses the Adobe Analytics 1.4 APIs and must migrate to the 2.0 APIs.

</AccordionItem>

<AccordionItem header="Does this end-of-life impact data collection?">

The Adobe Analytics 1.4 EOL does not impact your tagging solutions, such as Tags (formerly Adobe Launch), Web SDK, or AppMeasurement. However, if you use the 1.4 Data Sources or Classifications APIs to enhance your data, you must migrate those workflows to the Adobe Analytics 2.0 APIs.

The Data Insertion API is not impacted by this end-of-life announcement. While Adobe plans to continue support for the Data Insertion API, Adobe recommends using the [Bulk Data Insertion API](https://developer.adobe.com/analytics-apis/docs/2.0/guides/endpoints/bulk-data-insertion/) instead.

</AccordionItem>

</Accordion>

If you have further questions about this end-of-life announcement that are not answered on this page, reach out to your Adobe Account Team.

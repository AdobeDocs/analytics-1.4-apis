---
title: Adobe Analytics 1.4 APIs
description: The Analytics 1.4 API overview page.
---

<Hero slots="image, heading, text" background="rgb(14, 59, 24)"/>

![Hero image](./images/hero-illustration.png)

# Adobe Analytics 1.4 APIs

The Adobe Analytics 1.4 APIs are the predecessor to the Analytics 2.0 APIs. They allow for the creation of data rich user interfaces that you can use to manipulate and integrate data.

<Resources slots="heading, links"/>

#### Resources

* [Quick start guide](guides/index.md)
* [API reference](https://adobedocs.github.io/analytics-1.4-apis/)
* [Github repository](https://github.com/AdobeDocs/analytics-1.4-apis)

## Adobe Analytics 1.4 API End-of-Life (EOL)

On August 12, 2026, the following Analytics Legacy API services will reach their end-of-life and will be shut down, and current integrations built using these services will stop working:

* Adobe Analytics API (version 1.4)
* Adobe Analytics WSSE Authentication
  
Integrations that use the Adobe Analytics 1.4 API must migrate to the [Adobe Analytics 2.0 API](https://developer.adobe.com/analytics-apis/docs/2.0/), while WSSE integrations must migrate to an OAuth-based authentication protocol in the [Adobe Developer Console](https://developer.adobe.com/console).

See the [Adobe Analytics 1.4 API EOL FAQ](https://experienceleague.adobe.com/en/docs/analytics/admin/c-admin-14-api-eol) for answers to common questions and further guidance.


## Overview

If you are creating a new integration, Adobe strongly recommends using the [2.0 APIs](https://developer.adobe.com/analytics-apis/docs/2.0/).

The Adobe Analytics 1.4 APIs allow you to directly call Adobe's servers to perform almost any action that you can perform in the user interface. You can create reports to explore, get insights, or answer important questions about your data. You can also manage components of Adobe Analytics, such as Data Warehouse requests or Report Suite settings. This documentation provides instructions on how to call Adobe's endpoints to return the desired data.

This user guide assumes that you have an intermediate understanding of Adobe Analytics. See the documentation for [Adobe Analytics](https://experienceleague.adobe.com/docs/analytics/landing/home.html).

This user guide adheres to Adobe's Code of Conduct. Contributions are encouraged and appreciated. See Adobe's [Code of Conduct](https://github.com/AdobeDocs/analytics-1.4-apis/blob/main/CODE_OF_CONDUCT.md) and [Contribution guidelines](https://github.com/AdobeDocs/analytics-1.4-apis/blob/main/.github/CONTRIBUTING.md) on GitHub for more information.

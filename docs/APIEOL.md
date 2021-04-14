# End of Life Notice

## What Is Being Retired?

* The Analytics 1.3 APIs
* SOAP Authentication
* Legacy oAuth Support

## When is it being shutdown?

These services are being retired in April 30, 2021.

## 1.3 APIs

### What Are These Services?

The 1.3 APIs are a version of the APIs that has been deprecated since 2016. These APIs have been replaced by the 1.4 APIs and more recently by the 2.0 APIs as well. The documentation for the 1.4 APIs can be found on the following [page](https://github.com/AdobeDocs/analytics-1.4-apis).

You can generally tell if you are using the 1.3 APIs by looking at the URLs for your API requests and noting if there is a 1.3 in the URL (https://api.omniture.com/admin/1.3/rest/?method=Company.GetReportSuites).

### What do I Need to do to Migrate?

If you primarily use the APIs for reporting as well as managing reporting related components(Metrics, Dimensions, Segments, etc) it is recommended that you migrate to using the 2.0 APIs. The 2.0 APIs are the most current version of the APIs and will be supported longer than the 1.4 APIs. The 2.0 APIs also have a number of notable improvements over the 1.4 APIs(https://github.com/AdobeDocs/analytics-2.0-apis).

If you do a lot of non reporting API calls such as managing report suite settings or if you use datawarehouse or the realtime APIs then the 1.4 APIs will be your best option. A number of APIs and parameters were renamed in the 1.4 APIs to improve consistency and readability, but generally the same functionality exists in both APIs. In most cases you should be able to identify the APIs that you are currently using and then locate the same functionality in the 1.4 API docs(https://github.com/AdobeDocs/analytics-1.4-apis). In most cases the APIs are quite similar and you should be able to move from the 1.3 to the 1.4 APIs with a minimal amount of changes.

## SOAP Authentication

### What Are These Services?

The 1.3 and 1.4 APIs have historically supported SOAP. SOAP is not very common now days and the vast majority of our users are using our REST interfaces. Due to the lack of interest in our SOAP interfaces it is being retired at the same time as the 1.3 APIs.

### What do I Need to do to Migrate?

Since SOAP is no longer supported you will need to use the 1.4 API REST interface (https://github.com/AdobeDocs/analytics-1.4-apis). Depending on the language you are using this may necessitate finding a new REST client library.

## Legacy oAuth

### What Are These Services?

Legacy oAuth is an authentication service that was provided by Adobe Analytics before AdobeID and was an option. It was used by Adobe's customers to authenticate to a number of Adobe Services and in some cases for Adobe Services to communicate to each other. Now that AdobeID is widely available we are retiring the Analytics Legacy oAuth solution in favor of AdobeID.

### What do I Need to do to Migrate?

In general we are using AdobeID authentication as a replacement for legacy oAuth. Depending on your particular use case the steps to adopt AdobeID will be slightly different.

If you are using a standard oAuth workflow then the following documentation will help you set that up in adobe.io. https://github.com/AdobeDocs/analytics-2.0-apis#oauth

If you are using JWT then please use the following documentation. https://github.com/AdobeDocs/analytics-2.0-apis#jwt

Most of our documentation is geared towards the 2.0 APIs, but the 1.4 APIs will also accept these new access tokens. https://github.com/AdobeDocs/analytics-1.4-apis/blob/master/docs/getting-started/getting-started-2.md#getting-started

If you have authentication use cases that aren't covered in this section please log a github issue so that we can look into your use case further.

## Questions?

### Does This Affect WSSE Authentication?
WSSE authentication is deprecated and users are encouraged to use [adobe.io authentication](https://github.com/AdobeDocs/analytics-1.4-apis/blob/master/docs/getting-started/getting-started-2.md#create-the-integration) instead. There are plans to make it so that no new WSSE credentials can be created, but there is no date for when WSSE authentication support will be ended for existing clients.

### Does this impact Adobe Analytics Livestream?
If you have an integration with Livestream you may be impacted and need to migrate your Client application to an Adobe IO JWT integration.  Please refer to [Getting 
Started with Adobe Analytics Livestream](https://github.com/AdobeDocs/analytics-1.4-apis/blob/master/docs/live-stream-api/getting_started.md#) for more infomation on how to proceed.

### Does this impact Adobe Analytics Report Builder?
Yes, you will need to upgrade to the latest version of Report Builder prior to the EOL deadline to avoid being impacted.  

### Additional Questions
If you have questions not covered in this document then please reach out to the Adobe team at legacyapideprecation@adobe.com.



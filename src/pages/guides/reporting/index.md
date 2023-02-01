# 1.4 Reporting API

The Adobe Analytics 1.4 API provides a way for you to obtain reports without using Reports & Analytics or Analysis Workspace. It allows you to submit a request for a report, then you can submit a request to retrieve the report once it is done processing. 

<InlineAlert variant="note" slots="text"/>

This API runs on a reporting engine used in previous versions of Adobe Analytics. Adobe recommends using the [Adobe Analytics 2.0 Reporting API](https://developer.adobe.com/analytics-apis/docs/2.0/guides/endpoints/reports/) to retrieve reports.

The overarching workflow to retrieve a report is as follows:

![Reporting API workflow](../../images/reporting_api_gs.png)

1. Call the method `Report.Queue` with a [`reportDescription`](report-description/index.md) JSON body that includes the desired report. The Reporting API returns a report ID.
1. Call the method to `Report.Get` using the report ID. If the report is ready, you receive a JSON object with the report. Otherwise, the API responds that the report is not yet ready.

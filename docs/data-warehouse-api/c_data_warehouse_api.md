# Overview

Data Warehouse enables you to request reports that display advanced data relationships from raw data based on your unique questions.

**Important:** Content on this page is for v1.3, which is deprecated. For the latest, see v1.4 [here](https://github.com/Adobe-Experience-Cloud/analytics-1.4-apis/blob/master/docs/reporting-api/data_warehouse.md).

Reports requested using the API can be sent via email, uploaded to an FTP server, or downloaded directly using API calls.

## May 22, 2014

With the release of Adobe Analytics [unified segmentation](http://microsite.omniture.com/t2/help/en_US/analytics/segment/?f=seg_transition), the following changes apply to segments in the Data Warehouse API:

**DataWarehouse.GetSegment\(s\)** 

-   Returns segments created with V1.2 or V1.3 API
-   Does not return segments created in the new Segment Builder UI

**DataWarehouse.CreateSegment and ReplaceSegment** 

-   Segments created using these methods appear in the Segment Builder UI, but any changes made to the segment using the UI will not be reflected in the API. Therefore, we recommend that segments created using the data warehouse API should be edited only in the data warehouse API.

## January 16, 2014

The following data warehouse reports were updated to match the logic used by marketing reports & analytics and ad hoc analysis:

-   Referrers
-   Referring domains
-   Referrer type
-   Search Engines - All
-   Search Keywords - All

To use these new breakdowns in API requests, you must update the element name in the request according to the following list:

|Breakdown|Element name|
|---------|------------|
|Search keywords-Paid|search\_engine\_keywords\_paid|
|Search keywords-Natural|search\_engine\_keywords\_natural|
|Search keywords-Natural|search\_engine\_keywords\_v2|
|Search engines-Paid|search\_engine\_paid|
|Search engines-Natural|search\_engine\_natural|
|Search engines-All|search\_engine\_v2|
|Referring domains|referrer\_domain\_v3|
|Referrers|referrer\_domain\_v3|
|Referrer type|ref\_type\_v2|


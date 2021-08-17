# Data Feeds API

Data feeds provide the stream of raw, partially-processed server calls in a delimited data set. Each server call sent to the selected report suite is contained in a data row with a customizable column set.

The data feeds API lets you retrieve the status of data feed processing, as well as configuration details for each configured feed.

-   [GetFeeds](methods/r_getfeeds.md#) - returns an array with job status and basic configuration for feeds matching specific criteria. You can select to include feeds from multiple report suites, and filter by job start time, end time, or current status. For example, you can query all feeds for feeds with a status of "delivered" with and end time of today. You can then instruct your ETL to download the completed feeds.
-   [GetFeed](methods/r_getfeed.md#) - returns configuration details for a specific feed, including feed status, FTP delivery location, and the data columns that are included in the feed.

The Data Feeds API is REST only.

-   **[Error Codes](r_error_codes.md)**  
Errors are returned in two ways. HTTP response errors, and JSON object errors.


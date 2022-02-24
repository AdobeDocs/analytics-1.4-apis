# Audience Targeting

 

This guide outlines the steps for a data partner to build a server-to-server integration with Adobe Audience Manager (AAM).

 **Audience** 

This is intended for a potential Adobe Partner that wishes to receive audience segments through Adobe Audience Manager.

 **Pre-requisites** 

- See [Build An Integration](c_Build_an_Integration.md#) to make an integration request.

## Step 1 - User ID sync

Before user-level data can be shared from a data provider platform to AAM there must be a mapping of user IDs. This mapping is created by executing ID sync pixels within user experiences. One execution flow is initiated when a user visits the website of an AAM customer (often an advertiser). An ID sync pixel will load within that webpage and will send the AAM user ID to the data provider. The data provider then redirects that request back to the [AAM ID sync service](http://microsite.omniture.com/t2/help/en_US/demdex/c_id_sync_in.html) - the redirect will include the matching user ID from the data provider. For more information on ID syncing see - [AAM ID sync service](http://microsite.omniture.com/t2/help/en_US/demdex/c_id_sync_in.html) 

**Action**: The data provider must supply a working ID sync URL to an Adobe integration manager. This URL will then be validated and added to the AAM platform for use.

## Step 2 - Implement Data Ingestion

AAM can send server-to-server segment data to data partners in several ways.

**Real-time vs. Batch** 

First, the timing of data transfer can be either Real-time or Batch. With the real-time approach, AAM sends information about segment membership immediately as the user qualifies for a segment. Alternatively, Batch data transfers happen every 12 hours, 24 hours, 7 days or 30 days - depending on need. Batch transfers can either be full or incremental. Full transfers include all applicable users and segments for a given lookback period, while incremental transfers include only data that has changed since the last incremental transfer. A hybrid approach (implementing both the Real-time and Batch transfers) is recommended if possible. This gives the best timing and completeness for data transfer.

**HTTP vs. FTP vs. S3** 

The other major consideration is the method/protocol for transferring the data. The HTTP method involves HTTP Posts of JSON formatted data (content-type: application/json). FTP and S3 batches are formatted as flat files. Batch transfers can be sent using HTTP, FTP or S3 - while Real-time transfers can only be sent over HTTP.

**Documentation** 

-  [Real-time outbound data transfers](http://microsite.omniture.com/t2/help/en_US/demdex/c_outbound_json.html) 
- [Batch outbound data transfers](Batch outbound data transfershttp://microsite.omniture.com/t2/help/en_US/demdex/c_outbound_intro.html#) 

**Action:** The data partner must implement AAM data ingestion and indicate the nature and type of the implementation to an Adobe integration manager.

## Step 3 - Validate the Transfer

Once the implementation of AAM data ingestion is complete the solution must be jointly validated. An appropriate validation data set will be sent from the AAM platform to the data partner's platform. The data partner must then validate that the validation data set was received and processed.

**Action:** Work with the Adobe integration manager to validate the data transfer.

**Parent topic:** [Build an Integration](c_Build_an_Integration.md)


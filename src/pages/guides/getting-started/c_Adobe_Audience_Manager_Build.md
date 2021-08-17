# 3rd Party Data Provider

 

This guide outlines the steps for a data provider to build a 3rd party data provider server-to-server integration with Adobe Audience Manager \(AAM\).

 **Audience** 

This is intended for a potential Adobe Partner that wishes to become a Data Provider through Adobe Audience Manager.

 **Pre-requisites** 

-   See [Build An Integration](c_Build_an_Integration.md#) to make an integration request.

## Step 1 - User ID sync

Before user-level data can be shared from a data provider platform to AAM there must be a mapping of user IDs. This mapping is created by executing ID sync pixels within user experiences. One execution flow is initiated when a user visits the website of an AAM customer \(often an advertiser\). An ID sync pixel will load within that webpage and will send the AAM user ID to the data provider. The data provider then redirects that request back to the [AAM ID sync service](http://microsite.omniture.com/t2/help/en_US/demdex/c_id_sync_in.html) - the redirect will include the matching user ID from the data provider. For more information on ID syncing see - [AAM ID sync service](http://microsite.omniture.com/t2/help/en_US/demdex/c_id_sync_in.html) 

**Action**: The data provider must supply a working ID sync URL to an Adobe integration manager. This URL will then be validated and added to the AAM platform for use.

## Step 2 - Segment Taxonomy

The listing of segments \(a.k.a. traits\) and their associated meta-data is known as a segment taxonomy. This segment taxonomy need to be setup and organized in advance within AAM. This will allow AAM users to use the data providers segments for execute targeting and personalization activities. A taxonomy will include the name, description and identifier for each segment \(trait\) as well as what category it logically belongs to.

Example,

 ![](graphics/aam-taxonomy.png) 

**Action**: The data provider must supply their segment taxonomy to an Adobe integration manager. Often these taxonomies are provided within a spreadsheet.

## Step 3 - Transfer Bulk Segment Data

The data provider must regularly send data files to the AAM platform. These files contain segment membership data at the user level. These files can be sent to an S3 \(amazon\) bucket or alternatively an FTP server managed by Adobe. Files will be then be ingested and processed every 12 hours.

The file naming, data format and other requirements for this data transfer can be seen here in the [documentation](http://microsite.omniture.com/t2/help/en_US/demdex/c_inbound_async_intro.html).

**Action**: Transfer the first segment membership file\(s\) to the agreed upon AAM data destination. Notify the partner integration manager so that receipt and processing can be validated.

**Parent topic:** [Build an Integration](c_Build_an_Integration.md)


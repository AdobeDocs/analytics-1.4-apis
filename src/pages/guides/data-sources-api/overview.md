# Overview

 

To learn more, see [Data Sources Help](https://marketing.adobe.com/resources/help/en_US/sc/datasources/).

**Note:** Once submitted via the Data Sources API, imported data is indistinguishable from Analytics data gathered using other methods (such as JavaScript, AppMeasurement, and the Data Insertion API). You cannot back the data out after importing it.

Instead of using the standard FTP file submission process to get data to Adobe data collection servers, use the Data Sources API to submit HTTP data blocks using a SOAP or REST interface. This is particularly useful for uploading historical data for use in Analytics reports.

In addition to providing an automated mechanism for submitting data to Analytics, the Data Sources API also provides basic data validation immediately. Upon submission, the Data Sources API validates the basic data format and structure in the submitted block and returns an error if it encounters any problems. You can immediately correct the problem and resubmit the data block.

Contrast this with an FTP data submission, where data validation doesn't occur until Analytics attempts to process the data. This difference in validation points results in a delay of at least 30 minutes before you know about a data formatting error.

The general process for creating a Data Source with the Data Sources API is as follows:

1.  Call one of the Data Source setup methods (`DataSource.SetupTraffic`, `DataSource.SetupWebLog`, `DataSource.SetupGeneric`) to create the type of data source you need.
2.  Call `DataSource.GetIDs` or `DataSource.GetInfo` to get the Data Source ID of the new Data Source.
3.  Call `DataSource.BeginDataBlock` and, if necessary, `DataSource.AppendDataBlock` to add data to the new data source and submit the data source to the Processing Queue.
4.  Call `DataSource.GetFileIDs` or `DataSource.GetFileInfo` to get the File ID of the Data Source file in the Processing Queue.
5.  Call `DataSource.GetFileStatus` to monitor the status of the data source file. When data source processing completes, the data sent through the data source is available in Analytics.
6.  Call `DataSource.Deactivate` to manage the data source as needed.

**Note:** Many Data Sources methods require and/or return a Data Sources ID, which is a numeric value that identifies the type of data source associated with this method call. For more information, see [Data Sources ID](c_data_sources_id.md#).

**Parent topic:** [Data Sources Version 1.3](c_data_sources_api_1_3.md)


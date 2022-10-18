# Adobe Analytics Data Sources API

Data Sources allow you to import additional online or offline data for reporting. If you use the [`transactionID`](https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/transactionid.html) variable, you can tie online and offline data together.

The Data Sources API allows you to create, edit and upload [Data sources](https://experienceleague.adobe.com/docs/analytics/import/data-sources/datasrc-home.html) to Adobe Analytics. If you use the Adobe Analytics UI to complete the Data Sources workflow, that normally involves using the UI to create a Data source, then manually uploading a file via FTP to the configured location. With the Data Sources API, you can create a Data source and upload data using just the API.

One advantage to using the Data Sources API over a traditional FTP method is that you can get basic data validation immediately. FTP data validation doesn't happen until Adobe's servers attempt to process the data. This method of validation can take up to 30 minutes longer than by directly using the API.

The overall workflow to use this API involves the following steps:

1. Call one of the Data Source setup methods (`DataSource.SetupTraffic`, `DataSource.SetupWebLog`, `DataSource.SetupGeneric`) to create the type of data source that you want.
2. Call `DataSource.GetIDs` or `DataSource.GetInfo` to get the Data Source ID of the new Data Source.
3. Call `DataSource.BeginDataBlock` and, if necessary, `DataSource.AppendDataBlock` to add data to the new data source and submit the data source to the processing queue.
4. Call `DataSource.GetFileIDs` or `DataSource.GetFileInfo` to get the file ID of the Data Source file in the processing queue.
5. Call `DataSource.GetFileStatus` to monitor the status of the data source file. When data source processing completes, the data sent through the data source is available in Analytics.
6. Call `DataSource.Deactivate` to manage the data source as needed.

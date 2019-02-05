# Data Source Type ID

The Data Source Type ID is a numeric value that identifies the type of data source.

Many of the Data Sources methods described in the Data Sources API require and/or return a Data Sources ID. The following table lists the available data sources with the associated Data Sources ID for each.

Below each Data Source name is the data source grouping to which the data source belongs. *Data Source Groupings* identify different types of data sources that have similar underlying capabilities and requirements. Groupings provide a way to categorize data sources from the perspective of the back-end systems that process data sources.

The Data Sources API organizes data sources based on grouping rather than category and type used in the Data Sources UI in Analytics. For more information about data source groupings, see "Data Source Groupings" in the [*Data Sources User Guide*](http://microsite.omniture.com/t2/help/en_US/sc/datasources/oms_sc_data_sources.pdf), which is available in **Help** \> **Documentation**.

|Data Source|Data Source ID|Description|
|-----------|--------------|-----------|
|Analytics Web Beacons \(N/A\) |1|JavaScript beacons are the primary data collection method for Analytics. This data source cannot be activated or removed through this interface. If you wish to change or add a Web beacon data source, contact your Account Representative.|
|Web Server Log Files \(Web Log\) |2|Most Web servers generate log files that record every page served. Using this data source, you can process the log files from most Web server data and add this data to your reports.|
|Analytics Rollups \(N/A\) |3|Analytics can "roll up" data from multiple sites into a single suite of reports. These reports then reflect the activity across all the associated Web sites. This data source cannot be activated or removed through this interface. If you wish to change or add a Analytics Rollup data source, contact your Account Representative.|
|ASI \(N/A\) |4|By using the Segment Wizard, you can leverage Analytics's ASI technology to build reports that reflect the activity of a particular segment. For example, using the Wizard you might create a segment showing only the visits that resulted in a purchase.|
|Generic Ad Server \(Standard\) |5|Lets you integrate impressions and other top-line metrics about your ad serving activities from your ad server into Analytics. This is the generic ad server data source and should be used if your specific ad server is not supported.|
|Generic Email Campaign Server \(Standard\) |6|Lets you integration metrics from your email campaign server into Analytics. Commonly incorporated metrics include the number of messages sent, messages delivered and messages read. This is the generic email campaign data source and should be used if your specific email campaign server is not supported.|
|Generic Pay-per-Click Service \(Standard\) |7|Lets you import data about your pay-per-click performance including impressions, clicks, and costs. This is the generic pay-per-click data source and should be used if your specific pay-per-click service is not supported.|
|Generic Call Center \(Standard\) |8|Lets you integrate information about your call center into the Analytics reporting. Metrics more commonly imported include the number of calls, time on the phone, the agent, and total sales. This data source is the generic call center data source and should be used if your specific call center software is not supported.|
|Generic Customer Support Application \(Standard\) |9|Facilitates the integration of information from your customer support software into the Analytics reporting interface. It includes metrics such as the number of new incidents, number of incidents resolved, and the time spent resolving incidents. This is the generic customer support data source and should be used if your specific customer service application is not supported.|
|Generic Survey Data \(Standard\) |10|Lets you integrate survey results from a third-party tool into Analytics showing overall how satisfied customers are by their interactions with your site. This is the generic survey data source and should be used if your specific survey data service is not supported.|
|Generic Site Download Speed \(Standard\) |11|Integrate data from an application or service that tracks the speed of your downloads with your Analytics data. This is the generic download speed data source and should be used if your specific download speed software or service is not supported.|
|Generic Data Source - Summary Data Only \(Standard\) |12|Use this generic data source when there is no better match to the type of data that you want to import into Analytics.|
|Site-Level Traffic Data Source \(Traffic\) |14|Imports Traffic data for your entire Web site. For example, Page Views.|
|Breakdown Traffic Data Source \(Traffic\) |15|Imports Traffic data broken down by another Web site variable. For example, Page Views by Product.|
|SearchCenter Bulk Upload \(Standard\) |17|Provides manual and excel-automated bulk uploads within SearchCenter.|
|Generic Data Source \(Full Processing\) |20|The generic full data source allows you to import log file data into Analytics. This data will be processed as if it were received by Experience Cloud servers at the time specified \(each hit receives a timestamp\).|
|Product Returns|26|Lets you Import product return data and associate it with a purchase ID. Use this data source to identify search engines, keywords, campaigns and other attributes that are more likely to generate returns.|
|Product Cost|27|Lets you provide the actual cost of products purchased and shipped from your site. Once cost or profit is associated with products, you can accurately report on the most profitable campaigns, keywords and internal promotions for your site.|
|Order Status|28|Lets you use metrics to identify the status of every order made - including orders canceled, shipped, completed, or deemed fraudulent. Order status reporting can identify which acquisition methods generate the highest order completion rate.|
|Lead Generation|29|Lets you upload information about the results of every lead generated on your site, including actual revenue generated. Once revenue is accurately attributed to lead IDs, you can identify your most profitable campaigns and promotions.|
|Online Quote|30|Lets you record offline transaction revenue and other metrics resulting from online quotes. Once metrics are provided you can identify the most profitable campaigns and promotions leading to quotes.|
|Call Center Data|31|Lets you upload call center transactions to identify the situations \(campaigns, promotions, etc.\) that lead customers to pick up the phone.|
|Generic Data Source - Transaction ID \(Integration\) |32|Lets you tie offline events to an online event. The transaction ID acts as a key betwen the offline and online events.|

**Parent topic:** [Reference](r_Data_Sources_API_Reference.md)


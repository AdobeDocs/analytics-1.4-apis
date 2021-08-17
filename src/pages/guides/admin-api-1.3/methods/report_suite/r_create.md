# Create

Creates a new report suite.

## ReportSuite.Create

|Name|Type|Description|
|----|----|-----------|
|**activate\_discover** |`xsd:int` |Set this value to 1 to enable this report suite for use in Discover.|
|**base\_currency** |`xsd:string` |Deprecated.|
|**base\_url** |`xsd:string` |Defines the base domain for the report suite. This URL functions as an internal URL filter if you do not explicitly define internal URL filters for the report suite.|
|**default\_page** |`xsd:string` | Strips occurrences of the Default Page value from URLs it encounters. If your Most Popular Pages report contains URLs rather than page names, this setting prevents multiple URLs for the same web page. For example, the URLs http://mysite.com and http://mysite.com/index.html are typically the same page. SiteCatalyst lets you remove extraneous filenames so that both these URLs show up as http://mysite.com in your reports. If you do not set this value, SiteCatalyst automatically removes the following filenames from URLs: index.htm, index.html, index.cgi, index.asp, default.htm, default.html, default.cgi, default.asp, home.htm, home.html, home.cgi, and home.asp. To disable filename stripping, specify a Default Page value that never occurs in your URLs. |
|**duplicate\_rsid** |`xsd:string` | The type of report suite to create. You must specify either an existing rsid to duplicate, or one of the following report suite templates: `admin.template.01` \(Aggregator Portal\) `admin.template.02` \(Commerce\) `admin.template.03` \(Content & Media\) `admin.template.04` \(Financial Services\) `admin.template.05` \(Job Portal\) `admin.template.06` \(Lead Generation\) `admin.template.07` \(Subscription\) `admin.template.08` \(Support Media\) `admin.template.09` \(Default\) See [Report Suite Templates](http://microsite.omniture.com/t2/help/en_US/admin/index.html?f=c_report_suite_templates) for details on each type. |
|**go\_live\_date** |`xsd:date` |The date the report suite starts collecting data.|
|**hits\_per\_day** |`xsd:int` |The estimated number of hits per day this report suite will receive.|
|**latin1** |`xsd:int)` |Set this value to 1 to disable multibyte character support for the report suite. If enabled, SiteCatalyst displays data as latin-1 \(ISO8859-1\). \(Not recommended.\)|
|**rsid** |`xsd:string` |The report suite ID. All report suite IDs must contain your company prefix to be accepted. The company prefix can be seen on the Create Report Suites tool in the Admin Console. The `rsid` can contain only alphanumeric characters and periods \(.\).|
|**site\_title** |`xsd:string` |The report suite's friendly name.|
|**time\_zone** |[tns:timezone\_enum](../../data_types/r_timezone_enum.md#) |The report suite's time zone. This determines the base time used to time stamp collected data for this report suite.|

## ReportSuite.Create response

|Type|Description|
|----|-----------|
|`xsd:boolean` |Returns `TRUE` if the update operation is successful. Otherwise, returns `FALSE`.|

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


# Create

Creates a new report suite.

## ReportSuite.Create

|Name|Type|Description|
|----|----|-----------|
|**full_response** |`xsd: boolean` | (Optional) If this parameter is included and set to "true" then the response will be an object instead of a boolean. The object will look like this: ```{ "rsid":"example.rsid", "site_title":"example site title", "tracking_server":"example.tracking.server"}``` |
|**base_url** |`string` |(Optional) Defines the base domain for the report suite. This URL functions as an internal URL filter if you do not explicitly define internal URL filters for the report suite.|
|**default_page** |`string` | (Optional) Strips occurrences of the Default Page value from URLs it encounters. If your Most Popular Pages report contains URLs rather than page names, this setting prevents multiple URLs for the same web page. For example, the URLs http://example.com and http://example.com/index.html are typically the same page. Analytics lets you remove extraneous filenames so that both these URLs show up as http://example.com in your reports. If you do not set this value, Analytics automatically removes the following filenames from URLs: index.htm, index.html, index.cgi, index.asp, default.htm, default.html, default.cgi, default.asp, home.htm, home.html, home.cgi, and home.asp. To disable filename stripping, specify a Default Page value that never occurs in your URLs. |
|**duplicate_rsid** |`string` | The type of report suite to create. You must specify either an existing rsid to duplicate, or one of the following report suite templates: `admin.template.01` (Aggregator Portal) `admin.template.02` (Commerce) `admin.template.03` (Content & Media) `admin.template.04` (Financial Services) `admin.template.05` (Job Portal) `admin.template.06` (Lead Generation) `admin.template.07` (Subscription) `admin.template.08` (Support Media) `admin.template.09` (Default) See [Report Suite Templates](http://microsite.omniture.com/t2/help/en_US/admin/index.html?f=c_report_suite_templates) for details on each type.|
|**go_live_date** |`xsd:date` |The date the report suite starts collecting data.|
|**hits_per_day** |`int` |The estimated number of hits per day this report suite will receive.|
|**japanese_keyword_processing** |`xsd:boolean` |(Optional)|
|**rsid** |`string` |The report suite ID. All report suite IDs must contain your company prefix to be accepted. The company prefix can be seen on the Create Report Suites tool in the Admin Console. The `rsid` can contain only alphanumeric characters and periods (.).|
|**site_title** |`string` |(Optional) The report suite's friendly name.|
|**simplified_menu** |`xsd:boolean` |(Optional) Enables the [simplified menu](http://microsite.omniture.com/t2/help/en_US/reference/?f=t_simplified_menu) in reports & analytics.|
|**time_zone** |[tns:timezone_enum](../../data_types/r_timezone_enum.md#) |The report suite's time zone. This determines the base time used to time stamp collected data for this report suite.|

## ReportSuite.Create response

|Type|Description|
|----|-----------|
|`xsd:boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


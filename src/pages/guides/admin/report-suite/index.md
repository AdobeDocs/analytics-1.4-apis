# Report Suite methods

Create report suites, or edit/delete report suite settings.

## ReportSuite.Create

Creates a report suite.

`POST https://api.omniture.com/admin/1.4/rest/?method=ReportSuite.Create`

|Parameter|Type|Description|
|----|----|-----------|
|**`full_response`** |`boolean` | (Optional) If this parameter is included and set to `true`, then the response is a JSON object instead of a boolean. |
|**`base_url`** |`string` |(Optional) Defines the base domain for the report suite. This URL functions as an internal URL filter if you do not explicitly define internal URL filters for the report suite.|
|**`default_page`** |`string` | (Optional) Strips occurrences of the Default Page value from URLs it encounters. If your Most Popular Pages report contains URLs rather than page names, this setting prevents multiple URLs for the same web page. For example, the URLs `http://example.com` and `http://example.com/index.html` are typically the same page. Analytics lets you remove extraneous filenames so that both these URLs show up as `http://example.com` in your reports. If you do not set this value, Analytics automatically removes the following filenames from URLs: `index.htm`, `index.html`, `index.cgi`, `index.asp`, `default.htm`, `default.html`, `default.cgi`, `default.asp`, `home.htm`, `home.html`, `home.cgi`, and `home.asp`. To disable filename stripping, specify a Default Page value that never occurs in your URLs. |
|**`duplicate_rsid`** |`string` | The report suite ID to copy settings from. Does not copy data from the report suite. |
|**`go_live_date`** |`date` |The date the report suite starts collecting data.|
|**`hits_per_day`** |`int` |The estimated number of hits per day this report suite will receive.|
|**`japanese_keyword_processing`** |`boolean` |(Optional)|
|**`rsid`** |`string` |The report suite ID. All report suite IDs must contain your company prefix to be accepted. The company prefix can be seen on the Create Report Suites tool in the Admin Console. The `rsid` can contain only alphanumeric characters and periods (.).|
|**`site_title`** |`string` |(Optional) The report suite's friendly name.|
|**`simplified_menu`** |`boolean` |(Optional) Enables the [simplified menu](https://experienceleague.adobe.com/docs/analytics/admin/admin-tools/t-simplified-menu.html) in Reports & Analytics.|
|**`time_zone`** |[`timezone_enum`](../data-types.md#timezoneenum) |The report suite's time zone. This determines the base time used to time stamp collected data for this report suite.|

This method returns `true` if the operation is successful. If `full_response` is set to true in the API call, then the response is instead a JSON object outlining the report suite and its settings.

## ReportSuite.Get methods

See [ReportSuite.Get methods](get.md).

## ReportSuite.Save methods

See [ReportSuite.Save methods](save.md).

## ReportSuite.Delete methods

See [ReportSuite.Delete methods](delete.md).

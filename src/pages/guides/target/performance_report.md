# Performance Report

The Performance Report API lets you programmatically extract detailed performance information for a single campaign.

## About Version 2

An new version of the Performance Report API is now available.  The format has been improved to make it easier to write scripts to traverse the API response and gather the data. Each step now contains an "amount" node within it that displays the count, which make the returned data easier to read.

Additionally, in version 1, revenue data is only available for the final conversion point on the campaign. Version 2 shows sales data available for all steps in the campaign, not just the final conversion point.  It also shows engagement data per step instead of grouped at the end.

To use the new verison, append **&version=2** to your API call to the Performance Report.

## Create the URL

For each operation add the parameters and values you need as a filter. For example:

`https://testandtarget.omniture.com/api?client=example&email=john@example.com​&password=mypassword&operation=report&campaignId=NNNN&​start=YYYY-MM-DD&end=YYYY-MM-DD&environment=testEnvironment&resolution=hour​&segment=name&version=2`

| Parameter | Description |
|-------------|---------------|
| **`client`** | (Required) The T&T client name. |
| **`email`** | (Required) The Email address associated with the T&T user performing the operation. |
| **`password`** | (Required) The T&T password associated with the specified email address. |
| **`type`** | (Optional) A specific campaign metric. Supported values include `visit`, `visitor`, and `impression`. If you do not specify this parameter, T&T includes all metrics in the report. |
| **`operation`** | (Required) Identifies the type of T&T action to execute. To generate performance reports, this value is always `Report`. |
| **`campaignId`** | (Required) The ID of the campaign you want to query. To identify the Campaign List ID, Use the Campaign List API or look at the `campaignDescriptionId` parameter in the URL when viewing a campaign in the T&T Tool. |
| **`start`** | (Required) The report start date and time. Specify the date using the following format: `YYYY-MM-DDTHH:mm`. The performance report uses the time zone setting specified in the Web browser. |
| **`end`** | (Required) The report end date and time. Specify the date using the following format: `YYYY-MM-DDTHH:mm`. The performance report uses the time zone setting specified in the Web browser. |
| **`environment`** | (Optional) A URL-encoded host group name, as defined in the T&T Tool. By default, the environment value is `Production`. |
| **`resolution`** | (Optional) The period of the report, which can be one of the following values: `hour`, `day` (default), `week`, `month`. |
| **`segment`** | (Optional) The name of the segments to include in the report. If you don't specify this parameter, the performance report is an aggregate of all segments. To generate a report listing each segment separately, use a segment value of `allSegments`. |
| **`includeDeletedReportRows`** | (Optional) Default value is `false`. If set to `true`, report information will show for experiences that are now deleted, but which had data during the period for which the report was run. |
| **`filterExtremeOrders`** | (Optional) Default value is `false`. If set to `true`, then extreme orders, as defined in Test&Target, are excluded from the API response. |
| **`version`** | Specify which version of the API you want to use. For example, `version=2`. |

**Note:** Parameters and values are case sensitive.

## Inspect the Query Response

The following abbreviated success response displays two individual segments and the segment aggregate.

```xml
<reports>
   <report campaignId="7" start="YYYY-07-01" end="YYYY-08-02" resolution="day" type="visitor" segments="Segment 1" segmentId="0">
      <sample start="YYYY-08-01T00:00" duration="day">
         <recipe name="Experience A">
            <step name="Entry">476.0</step>
            <step name="Visits">370.0</steps>
            <step name="Display mboxes">476.0</step>
            <step name="Time on Site">1117.0</step>
            <step name="Page Count">1117.0</step>
            <step name="Score">1100.0</step>
            <step name="Global Mbox">1100.0</step>
            <step name="Clicked Article">255.0</step>
            <amount>121.13</amount>
            <engagementMetrics>
               <engagement stepName="Page Count" count="190" total="558.00000"sumOfSquares="4382.00000"/>
               <engagement stepName="Time on Site" count="211" total="44773.42500"sumOfSquares="43287221.65236"/>
               <engagement stepName="Score" count="207" total="117.00000"sumOfSquares="843.00000"/>
            </engagementMetrics>
         </recipe>
      </sample>
   </report>
   <report campaignId="7" start="YYYY-08-01" end="YYYY-08-02" resolution="day" type="visitor" segments="Segment 2" segmentId="1">
      .
      .
      .
   </report>
   <report campaignId="7" start="YYYY-08-01" end="YYYY-08-02" resolution="day" type="visitor">
      .
      .
      .
   </report>
</reports>
```

| Tag | Description |
|-------|---------------|
| **`reports`** | Contains all reports generated through a single Performance Report API request. |
| **`report`** | Contains one report. The report tag supports the following attributes: `campaignId`: See the `campaignId` parameter. `start`: See the `start` parameter. `end`: See the `end` parameter. `resolution`: See the `resolution` parameter. `type`: See the `type` parameter. `segments`: The name of the segment used to generate this report. This attribute is omitted when generating an aggregate report of all segments. `segmentId`: The ID of the segment used to generate this report. T&T omits this attribute when generating an aggregate report of all segments. |
| **`sample`** | Contains data for a single report interval. If there are no visitors in a given time interval (for example, `day 2`, or `hour 5`) the XML output omits that node. The sample tag supports the following attributes:  `start`: The start date/time of the sample. `duration`: The duration of the sample, as defined by the `resolution` query parameter. |
| **`recipe`** | Contains the recipe. The recipe attribute supports the following attribute:  `name`: The recipe name. |
| **`step`** | Contains the data (visitors, visits, or impressions) from a single success metric (display mboxes, eonversion, etc.) associated with this recipe. The step tag supports the following attribute: `name`: The success metric name. |
| **`count`** | Contains the item or value count associated with each step. |
| **`amount`** | Contains the revenue associated with this recipe. |
| **`engagementMetrics`** | Contains the engagement metrics. |
| **`engagement`** | The engagementMetrics tag supports the following attributes: `stepName`: The success metric name. `count`: The number of times this success metric has been viewed. `total`: The calculated value of the success metric. `sumOfSquares`: Contains the "Sum of Squares" value, which is useful for extreme order calculation. |

**Note:** The recipe named "Campaign" in each sample shows a summary for that sample.

A failed query response uses the following XML structure:

```xml
<error>
   <message>Invalid email or password supplied. Email: my_email@abc.com</message>
   <code>401</code>
</error>
```

| Tag | Description |
|-------|---------------|
| **`message`** | A description of the error. For example: ```Invalid email or password supplied. Email: john@example.com.``` |
| **`code`** | The error code. For example: `401`. |

## Parse the Query Response

Optionally, you can use a scripting language such as Perl, Python, and Ruby, to parse the results and write them to an output file, such as a CSV file, that you can view in any spreadsheet application.

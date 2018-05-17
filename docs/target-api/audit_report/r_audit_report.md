# Audit Report

The Campaign Audit Report API lets you programmatically extract audit report data for a single campaign.

You can retrieve audit report data for off-line analysis, permanent storage, or to build a custom reporting interface.

**Note:** T&T stores audit data for 4 weeks only. To preserve it, use the Campaign Audit Report API or the Admin interface to store it in a secondary location.

## Create the URL

For each operation add the parameters and values you need as a filter. For example:

```
 https://testandtarget.omniture.com/api?client=acme&email=john@acme.com&​password=mypassword&operation=auditReport&campaignId=1234&start=2007-08-01T00:00&​end=2007-09-01T00:00&step=step1&environment=production&format=csv&version=1
```

| Parameter | Description |
|-------------|---------------|
|**client** | \(Required\) The T&T client code. |
| **email** | \(Required\) The Email address associated with the T&T user performing the operation. |
| **password** | \(Required\) The T&T password associated with the specified email address. |
|**operation** | \(Required\) Identifies the type of T&T action to execute. To generate audit reports, this value is always `auditReport`. |
| **campaignId** | \(Required\) The ID of the campaign you want to query. To identify the Campaign List ID, Use the Campaign List API or look at the `campaignDescriptionId` parameter in the URL when viewing a campaign in the T&T Tool. |
| **start** | \(Required\) The report start date and time. Specify the date using the following format: `YYYY-MM-DDTHH:mm`. The performance report uses the time zone setting specified in the Web browser. |
| **en** | \(Required\) The report end date and time. Specify the date using the following format: `YYYY-MM-DDTHH:mm`. The performance report uses the time zone setting specified in the Web browser. |
| **step** | \(Optional\) The URL-encoded success metric name \(formerly called a step\). By default, the step value is `last step`. |
| **environment** | \(Required\) A URL-encoded host group name, as defined in the T&T Tool. By default, the environment value is `Production`. |
| **format** | \(Optional\) The report output format. Currently, the only supported value for this parameter is `csv` \(comma-separated value\). |
|**version** | Specify which version of the API you want to use. Set this to `version=1` unless there is a different version described in the documentation. |

**Note:** Parameters and values are case sensitive.

## Inspect the Query Response

T&T generates the audit report in CSV format, which you can import into any spreadsheet program, such as Microsoft\* Excel\*. For example:

```
 "Campaign: landing campaign RFM"
"Downloaded at: 2007-08-24. Time zone: EST5EDT"
"Step: Conversion"
"Campaign Id","Recipe","Order Date","Order Time","Order   Id","Amount","Order Flag","Product Ids"

"worst",""
42,81,"2007-08-20","17:25:29","1187645128929",$429.00,"---","9"
42,81,"2007-08-20","17:25:36","1187645135874",$319.00,"---","7"
42,81,"2007-08-20","17:25:43","1187645142834",$325.00,"---","5"

"best",""
42,82,"2007-08-20","16:56:11","1187643370833",$325.00,"---","5"
42,82,"2007-08-20","16:56:16","1187643376266",$479.00,"---","3"
42,82,"2007-08-20","16:58:15","1187643495634",$99.95,"---","42"
```

## Parse the Query Response

Optionally, you can use a scripting language, such as Perl, Python, and Ruby, to programmatically manipulate the audit report contents to create custom reports.

**Parent topic:** [Methods](../campaign_state/r_Test_and_Target_API_Sample_Code.md)


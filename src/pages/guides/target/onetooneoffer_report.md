# 1:1 Content Report

The 1:1 Content Report API lets you programmatically extract detailed visit and impression information for a single campaign.

This reports shows you the number of times each piece of content was displayed. This value is based on the impression count rather than the number of visitors. For example, a visitor could be displayed a piece of content multiple times in a single visit.

## Create the URL

For each operation add the parameters and values you need as a filter. For example:

`https://testandtarget.omniture.com/admin/api?client=example&​email=john@example.com&password=mypassword&operation=oneToOneContentReport&​campaignId=21&environment=Production&start=YYYY-08-24T00:00:00​&end=YYYY-09-12T00:00:00&resolution=day&version=1`

| Parameter | Description |
|-------------|---------------|
| **`client`** | (Required) The T&T client code. |
| **`email`** | (Required) The Email address associated with the T&T user performing the operation. |
| **`password`** | (Required) The T&T password associated with the specified email address. |
| **`operation`** | (Required) Identifies the type of T&T action to execute. To generate 1:1 Content reports, this value is always `oneToOneContentReport`. |
| **`campaignId`** | (Required) The ID of the campaign you want to query. To identify the Campaign List ID, Use the Campaign List API or look at the `campaignDescriptionId` parameter in the URL when viewing a campaign in the T&T Tool. |
| **`start`** | (Required) The report start date and time. Specify the date using the following format: `YYYY-MM-DDTHH:mm`. |
| **`end`** | (Required) The report end date and time. Specify the date using the following format: `YYYY-MM-DDTHH:mm`. |
| **`environment`** | (Optional) A URL-encoded host group name, as defined in the T&T Tool. By default, the environment value is `Production`. |
| **`resolution`** | (Optional) The period of the report, which can be one of the following values: `day` (default), `month`. |
| **`timeZone`** | (Optional) If not specified, the default time zone associated with the T&T client name is used. |
| **`version`** | Specify which version of the API you want to use. Set this to `version=1` unless there is a different version described in the documentation. |

**Note:** Parameters and values are case sensitive.

## Inspect the Query Response

The following abbreviated success response displays sample report data.

```xml
<reports start="YYYY-08-24T00:00:00" end="YYYY-09-12T00:00:00" environment="Production" timeZone="XXX" resolution="day" campaignId="21">
<report>
    <period start="YYYY-08-25T00:00:00">
    <mbox name="homePageHero">
    <offer name="Offer1">
        <traffic type="TESTING">
            <step name="Entry">
                <visits>1</visits>
                <impressions>3</impressions>
                <sumOfSquares>325.00000</sumOfSquares>
            </step>
            <step name="Display Mboxes">
                .............
            </step>
                .........
        </traffic>
        <traffic type="TARGETED">
            <step name="Entry">
                <visits>5</visits>
                <impressions>8</impressions>
                <sumOfSquares>325.00000</sumOfSquares>
            </step>
            <step name="Display Mboxes">
                .............
            </step>
            .........
        </traffic>
    </offer>
    <offer name="Offer2">
        ..........
    </offer>
        .............
    </mbox>
    <mbox name="homePageFeature1">
        ..............
    </mbox>
        .................
    </period>
    <period.....>
        .........
</report>
<reports>
```

| Tag | Description |
|-------|---------------|
| **`reports`** | Contains all reports generated through a single 1:1 Content Report API request. `campaignId`: See the `campaignId` parameter. `start`: See the `start` parameter. `end`: See the `end` parameter. `timeZone`: See the `timeXone` parameter. `environment`: See the `resolution` parameter. `resolution`: See the `resolution` parameter. |
| **`report`** | Contains data for a single report. |
| **`period`** | Contains data for a single report interval. If there are no visitors in a given time interval (for example, `day 2`) the XML output omits that node. The period tag supports the following attributes: `start`: The start date/time of the sample. |
| **`mbox`** | Contains data for a single mbox. The mbox tag supports the following attributes: `name`: The name of the mbox. |
| **`offer`** | Contains data for a single offer. The offer tag supports the following attributes: `name`: The name of the offer. |
| **`traffic`** | Contains traffic data associated with an offer. The traffic tag supports the following attribute:  `type`: The type of traffic contained in the tag. |
| **`step`** | Contains the data (visits and impressions) associated with this offer/traffic. The step tag supports the following attribute: `name`: The success metric name. |
| **`visits`** | Contains the visits associated with this step. |
| **`impressions`** | Contains the impressions associated with this step. |
| **`sumOfSquares`** | Contains the "Sum of Squares" value, which is useful for extreme order calculation. |

A failed query response uses the following XML structure:

```xml
<error>
   <message>Invalid email or password supplied. Email: john@example.com</message>
   <code>401</code>
</error>
```

| Tag | Description |
|-------|---------------|
| **`message`** | A description of the error. For example: ```Invalid email or password supplied. Email: john@example.com.``` |
| **`code`** | The error code. For example: `401`. |

## Parse the Query Response

Optionally, you can use a scripting language such as Perl, Python, and Ruby, to parse the results and write them to an output file, such as a CSV file, that you can view in any spreadsheet application.

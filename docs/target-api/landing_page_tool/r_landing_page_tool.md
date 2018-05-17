# Landing Page Tool

The Landing Page Tool API lets you configure default campaign creation settings in Test&Target.

This lets you simplify the campaign configuration process for the T&T user \(the marketer\). For example, you can pre-define the URL parameters that trigger a campaign.

**Note:** When using the Landing Page Tool API, all parameters must be URL-encoded.

Use the following URL for the Landing Page Tool, substituting the appropriate value for each of the URL parameters:

```
https://testandtarget.omniture.com/api?tool=API%20tests&version=1
```

|Parameter| Description |
|---------|---------------|
|**tool** | \(Required\) The type of edit page interface. Supported values include the following: **admin:** Use an edit classic interface. **simple:** Use a new edit interface. |
| **campaignName** | \(Optional\) The T&T campaign name. |
| **3rdPartyCampaignId** | \(Optional\) A third-party ID to associate with the campaign. For more information, see the Third-Party Campaign ID API. |
| **campaignTarget** | \(Optional\) The targeting expression, which takes one of the following forms: `page.param('paramName').indexOf('paramValue') >= 0` `page.referrer.param('paramName').indexOf('paramValue') >= 0` |
| **page** | \(Optional\) The URL of the campaign landing page. Consider the following when designating a landing page: The URL can be either HTTP or HTTPS. The landing page should have an mbox.js include on the page, and at least one mbox. Customers should have a T&T account. |
| **returnLink** | \(Optional\) The URL of a page to return to if there are problems. If this parameter is unspecified, the Web browser closes if there is a problem. |
| **breadcrumb** | \(Optional\) Text to display in a breadcrumb link. The Landing Page Tool uses the `returnLink` URL as the breadcrumb link URL. |
| **branchNames** | \(Optional\) A comma-separated list of recipe names. If this parameter is unspecified, the Landing Page Tool defaults to Recipe A. |
| **displayMboxes** | \(Optional\) A comma-separated list of mbox names. For example: `Product Page`, `Category Page`, `Footer`. |
| **conversionMbox** | \(Optional\) The name of the Conversion mbox. If this parameter is unspecified, the Landing Page Tool defaults to `conversion`. |
| **priority** | \(Optional\) The campaign priority used by Test&Target to determine which campaign takes precedence. Supported values include the following: `0`: Low priority `1`: Medium priority `2`: High priority |
| **label** | \(Optional\) A descriptive campaign label. A descriptive label makes it easier to filter the campaign list. |
|**version** | Specify which version of the API you want to use. Set this to `version=1` unless there is a different version described in the documentation. |

**Parent topic:** [Methods](../campaign_state/r_Test_and_Target_API_Sample_Code.md)


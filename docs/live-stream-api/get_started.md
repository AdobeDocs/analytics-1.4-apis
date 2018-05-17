# Initial Setup

The following table outlines the tasks required to get started using Adobe Analytics Live Stream.

 

|Task|Description|
|----|-----------|
|Define the data that you want to receive|Review the list of [Metrics and Dimensions](metrics_dimensions.md#) and select the data that you want to receive.|
|Contact Adobe to configure your stream\(s\)| In addition to the data that you want to receive, you'll need to provide the following when you contact Adobe: Log-in company Data Center \(San Jose, Dallas, London, Pacific Northwest, or Singapore\) Report Suite ID\(s\) \(each report suite requires a separate stream\) Daily and monthly traffic volumes Existing Analytics user name and the Adobe ID that is connected with each account. Credentials are required for each user that requires development access to the stream. Each user must have an existing account in your login company. Adobe will configure your accounts and provide the complete URL to your live stream. |
|Link your Analytics account to your Adobe ID| Your Adobe ID is used to generate the token that is required to authenticate to Analytics Live Stream. Your company must be enabled for the Experience Cloud before you can perform this step, then you must [Join the Experience Cloud](http://microsite.omniture.com/t2/help/en_US/mcloud/?f=link_accounts) to link your Experience Cloud accounts to your Adobe ID. If you aren't sure if you are enabled or not, ask an Administrator if members of your company can log in at [marketing.adobe.com](https://marketing.adobe.com/) using an Adobe ID. If so, then you are already enabled and you can join. If your company is not yet enabled for Experience Cloud, see the [Marketing Cloud Getting Started for Administrators](http://microsite.omniture.com/t2/help/en_US/mcloud/?f=admin_getting_started) to find out how to get enabled. |
|Register your app| Registering your app generates the client ID and the application secret that are required to connect. See [Register to get a Client ID and Secret](https://github.com/Adobe-Experience-Cloud/analytics-1.4-apis/blob/master/docs/authentication/auth_register_app.md). |


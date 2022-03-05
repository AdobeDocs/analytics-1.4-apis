# Analytics Administration API 1.4


## Analytics User ID Migration to Admin Console - APIs

Update for: **September 21, 2017** 

Adobe is [migrating all Analytics login companies](https://marketing.adobe.com/resources/help/en_US/experience-cloud/admin-console/analytics-migration/) a way from my.omniture.com and onto authentication via the Adobe Experience Cloud. Once a company begins this migration, programmatic user creation and management through the Analytics-specific permissions and `GetLoginKey` methods available via v1.3 and v1.4 of the Analytics Admin API will no longer be supported. Such actions will now be enabled across the Experience Cloud via adobe.io.

**What are the API methods that will cease to be supported?** 

The following API methods in the v1.3 and v1.4 of the Admin API will no longer be supported once you begin user migration:

- Company.GetLoginKey
- Permissions.AddLogin
- Permissions.Authenticate
- Permissions.DeleteGroup
- Permissions.DeleteLogin
- Permissions.GetGroup
- Permissions.GetGroups
- Permissions.GetLogin
- Permissions.GetLogins
- Permissions.GetReportSuiteGroups
- Permissions.RemoveLoginSegment
- Permissions.SaveGroup
- Permissions.SaveLogin
- Permissions.GetLoginSegment

**What actions should I take now?** 

If your company currently uses these methods, look for a pre-migration notification beginning March 31, 2018. The notification will be sent at least 30 days prior to when your company will begin migration to the Experience Cloud authentication and these methods will cease to be supported. Once you receive this notification, you will have 30 days to stop using them before Adobe will begin rejecting requests to these methods.

If your company does not use any of these methods, no action is required other than ensuring you do not begin using these methods.

For additional information:

- [General User Management Info](https://helpx.adobe.com/enterprise/help/users.html)
- [User Management APIs via adobe.io](https://www.adobe.io/apis/cloudplatform/usermanagement/docs/gettingstarted.html)
- [User Management API Forum](https://forums.adobe.com/community/umapi/overview)
- [Migration of Analytics User Access and Management to Experience Cloud](https://marketing.adobe.com/resources/help/en_US/experience-cloud/admin-console/analytics-migration/)

## Web Services v 1.2 and 1.3 API End-of-Life

**Note:** Important Web Services v 1.2 and 1.3 API End-of-Life Notices:

- Version 1.2 of the Web Services API was officially deprecated on February 20, 2014. It will reach end-of-life on September 15, 2016. At that time, Adobe will remove the ability of the API servers to respond to version 1.2 API requests. Any API requests made to the https://api.omniture.com/admin/1.2 endpoint will return a 410 error. Customers have until the end-of-life date to upgrade from the version 1.2 API to the version 1.4 API to prevent an outage in their API applications.
- Version 1.3 will be officially deprecated as of **September 15, 2016**. Customers are encouraged to migrate to the 1.4 API to leverage the improvements described on this page. See [API Support Policy](../getting-started/c_API_Support_Policy.md) for more information.

The Administration API methods are divided into the following categories:

- [Bookmark](methods/bookmark/c_methods_bookmark.md#)
- [Company](methods/company/r_methods_company.md#)
- [Permissions](methods/permissions/r_methods_permissions.md#)
- [Report Suite](methods/report_suite/r_methods_reportsuite.md#)

**Note:** The Experience Cloud web services can both insert data and affect processing rules for your data. Changes made via the web services are usually permanent and cannot be undone. Use caution when making changes on live report suites to prevent unwanted side effects.

## May 22, 2014

With the release of Adobe Analytics [unified segmentation](https://marketing.adobe.com/resources/help/en_US/analytics/segment/seg_transition.html), the following changes apply to segments in the 1.4 Admin and Reporting APIs:

**Report.Queue** 

- Accepts existing segments and new segments created in the new Segment Builder UI.
- Allows applying legacy Pre-Configured and Suite segments without validation.

**ReportSuite.GetSegments and ReportSuite.GetSettings** 

- Returns only segments that appear in the new Segment Builder UI. Most segments are migrated to the Segment Builder automatically, with the exception of some pre-defined segments.
- All segments available for the authenticated user are returned.
- Pre-Configured and Suite segments are no longer returned. These segments are now templates, so you'll need to create a custom segment based on a template to use these segments.

## Endpoint

API requests should be sent to the 1.4 endpoint:

`https://api.omniture.com/admin/1.4/rest/`

For the best API performance, it is important to use the correct endpoint. The correct endpoint can be obtained by calling `Company.GetEndpoint`. Our best practice is to call `Company.GetEndpoint` in your production applications and then use the returned endpoint in all your subsequent API requests. This is important if your company is migrated to another data center.

For example, if your company was migrated from the San Jose data center to the Singapore data center, you need to replace api.omniture.com with api4.omniture.com as shown below. If you do not update this endpoint, your API requests will have unnecessary latency added due to the jumps between the San Jose and Singapore data centers.

- api.omniture.com - San Jose
- api2.omniture.com - Dallas
- api3.omniture.com - London
- api4.omniture.com - Singapore
- api5.omniture.com - Pacific Northwest

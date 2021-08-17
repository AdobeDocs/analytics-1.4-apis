# Authentication Scope Reference

 

Authentication scopes determine which APIs can be requested on behalf of the user, and are specified using the `scope` parameter when obtaining an [authorization code](auth_code.md#). Note that scope only determines which APIs can be requested, the user must also have privileges in Analytics to perform the operation.

The following scopes control request access to the APIs:

```
Bookmark
Company
DataFeed
DataWarehouse
Permissions
ReportSuite
Saint
Survey
Dashboards
DataSource
Social
Report
Livestream
```

You can also provide a specific method name as a scope to request authorization to that single method. For example:

```
ReportSuite.GetReportSuites
```

Multiple scopes can be requested separated by spaces:

```
ReportSuite Report
```

**Parent topic:** [OAuth 2 Authentication](auth_overview.md)


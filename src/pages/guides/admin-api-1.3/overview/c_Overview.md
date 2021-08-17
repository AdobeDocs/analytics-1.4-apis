# Overview

The Administration API lets you manage company settings, retrieve report suite details, and control user permissions. Many of the operations that are available in the Admin Console are available using the Administration API.

The Marketing Cloud web services can insert data and affect data processing for your data. Changes made via the web services are usually permanent and cannot be undone. Use caution when making changes on live report suites to prevent unwanted side effects.

The Administration API methods are divided into the following categories:

-   [methods/bookmark/c\_api\_admin\_methods\_bookmark.md\#](methods/bookmark/c_api_admin_methods_bookmark.md#) 
-   [methods/company/c\_api\_admin\_methods\_company.md\#](methods/company/c_api_admin_methods_company.md#) 
-   [methods/permissions/c\_api\_admin\_methods\_permissions.md\#](methods/permissions/c_api_admin_methods_permissions.md#) 
-   [methods/report\_suite/c\_api\_admin\_methods\_repsuite.md\#](methods/report_suite/c_api_admin_methods_repsuite.md#) 

**Segments** 

SiteCatalyst 15 users can retrieve a list of segments defined for a report suite. Version 1.3 of the API adds a [methods/report\_suite/r\_getSegments.md\#](methods/report_suite/r_getSegments.md#) method that returns a list of segments defined in SiteCatalyst 15, Discover, and Data Warehouse.

## January 2013

Added the ability to generate a report from a saved bookmark. See [methods/bookmark/r\_GetBookmarks.md\#](methods/bookmark/r_GetBookmarks.md#).

## November 2012

Added [methods/report\_suite/r\_GetNavigationMenu.md\#](methods/report_suite/r_GetNavigationMenu.md#) and [methods/report\_suite/r\_SaveNavigationMenu.md\#](methods/report_suite/r_SaveNavigationMenu.md#).


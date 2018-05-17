# SaveCustomCalendar

Creates a custom calendar for each of the specified report suites.

## ReportSuite.SaveCustomCalendar parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` | A list of report suite IDs. |
|**anchor\_date** |`xsd:date` | The anchor date for the custom calendar. |
|**cal\_type** |`xsd:int` | The type of calendar to create. Supported values include: `0`: Gregorian `1`: National Retail Federation `3`: 454 `4`: 445 `5`: Modified Gregorian |

## ReportSuite.SaveCustomCalendar response

|Type|Description|
|----|-----------|
|`xsd:int` | Returns `1` if the operation is successful. Otherwise, returns `0`. |

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


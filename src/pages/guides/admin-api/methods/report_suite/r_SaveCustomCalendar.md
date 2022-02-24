# SaveCustomCalendar

Creates a custom calendar for each of the specified report suites.

## ReportSuite.SaveCustomCalendar parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`array(xsd:string)` | A list of report suite IDs. |
|**anchor_date** |`xsd:date` | The anchor date for the custom calendar. |
|**calendar_type** | [custom_calendar_type_enum](../../data_types/r_custom_calendar_type_enum.md#) | The type of calendar to create. Supported strings include: `Gregorian` `National Retail Federation` `454` `445` `Modified Gregorian` |

## ReportSuite.SaveCustomCalendar response

|Type|Description|
|----|-----------|
|`xsd:boolean` | Returns `true` if the operation is successful. |

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


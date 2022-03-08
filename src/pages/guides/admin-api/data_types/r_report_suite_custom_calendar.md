# report_suite_custom_calendar

Data structure that contains information about a report suite's custom calendars.

|Element|Type|Description|
|-------|----|-----------|
|**rsid** |`string` | The report suite ID. |
|**site_title** |`string` | The report suite friendly name. |
|**calendar_type** |[custom_calendar_type_enum](r_custom_calendar_type_enum.md#) | The format of the custom calendar, one of the following strings: gregorian, 4-5-4-retail, 4-5-4-custom, 4-4-5-custom, modified-gregorian |
|**anchor_date** |`date` | The first date in the custom calendar. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


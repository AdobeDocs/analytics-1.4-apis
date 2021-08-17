# report\_suite\_custom\_calendar

Data structure that contains information about a report suite's custom calendars.

|Element|Type|Description|
|-------|----|-----------|
|**rsid** |`xsd:string` | The report suite ID. |
|**site\_title** |`xsd:string` | The report suite friendly name. |
|**calendar\_type** |[custom\_calendar\_type\_enum](r_custom_calendar_type_enum.md#) | The format of the custom calendar, one of the following strings: gregorian, 4-5-4-retail, 4-5-4-custom, 4-4-5-custom, modified-gregorian |
|**anchor\_date** |`xsd:date` | The first date in the custom calendar. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


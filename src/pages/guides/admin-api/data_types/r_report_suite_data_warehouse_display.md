# report_suite_data_warehouse_display

Data structure that contains information about a report suite's data warehouse setting.

|Element|Type|Description|
|-------|----|-----------|
|**rsid** |`xsd:string` | The report suite ID. |
|**site_title** |`xsd:string` | The report suite friendly name. |
|**data_warehouse_display** |[data_warehouse_display_type_enum](r_data_warehouse_display_type_enum.md#) | Data warehouse display setting, one of the following values: none, all-logins-have-access, grayed-out-tab, admins-only, disabled |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


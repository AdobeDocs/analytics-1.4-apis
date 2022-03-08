# data_warehouse_report

Data structure that contains information about information about a Data Warehouse report.

| Name | Type | Description |
|--------|--------|---------------|
| **start_row** | `int` | The first data row to include in the report. This value should always be `1`. |
| **end_row** | `int` | The last data row to include in the report. This value should always equal the number of elements in `row_list`. |
|**headings** |[data_warehouse_report_headings](r_data_warehouse_report_headings.md#) | A list of column headings for this report. |
|**row** |[data_warehouse_report_row_list](r_data_warehouse_report_row_list.md#) | A list of data rows for this report. |
| **finished** | `xsd:boolean` | This element is not currently enabled, so it always returns `True`. Indicates that additional data is available (a paged report). |

**Parent topic:** [Data Types](../data_types/c_data_types.md)


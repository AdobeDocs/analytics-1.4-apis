# group_report_list

Data structure that contains a list of reports accessible by a permission group.

|Element|Type|Description|
|-------|----|-----------|
|**paths** |`array[int]` | List of report IDs in the Paths category. This element is active only when the associated `report_categories` element is enabled. |
|**traffic** |`array[int]` | List of report IDs in the Traffic category. This element is active only when the associated `report_categories` element is enabled. |
|**ecommerce** |`array[int]` | List of report IDs in the eCommerce category. This element is active only when the associated `report_categories` element is enabled. |
|**tools** |`array[int]` | List of report IDs in the Tools category. This element is active only when the associated `report_categories` element is enabled. |
|**sem** |`array[int]` | List of report IDs in the SEM category. This element is active only when the associated `report_categories` element is enabled. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


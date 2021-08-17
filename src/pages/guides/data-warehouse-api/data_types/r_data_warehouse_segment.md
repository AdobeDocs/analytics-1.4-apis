# data\_warehouse\_segment

Data structure that contains configuration settings for a full-processing data source.

| Name | Type | Description |
|--------|--------|---------------|
| **name** | `xsd:string` | A descriptive name for the Data Warehouse segment. The name cannot exceed 255 characters. |
| **group\_include** | [data\_warehouse\_segment\_group](r_data_warehouse_segment_group.md#) | Specifies data to explicitly include in the data file. While you must include the `group_include` element, you can leave it empty if you do not want to use an include rule. |
| **group\_exclude** | [data\_warehouse\_segment\_group](r_data_warehouse_segment_group.md#) | Specifies data to explicitly exclude from the data file. While you must include the `group_exclude` element, you can leave it empty if you do not want to use an exclude rule. |

**Parent topic:** [Data Types](../data_types/c_data_types.md)


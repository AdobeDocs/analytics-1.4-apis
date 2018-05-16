# ds\_full\_settings

Data structure that contains configuration settings for a full-processing data source.

|Element|Type|Description|
|-------|----|-----------|
|**dataSourceName** |`xsd:string` | The Data Source's name. |
|**dataSourceEmail** |`xsd:string` | The email address where Data Sources sends notifications and alerts. |
|**injectionType** |[ds\_full\_injection\_type](r_ds_full_injection_type.md#) | The type of data included in this Data Source. |
|**allowOutOfOrderHits** |`xsd:boolean` | When set to `True`, instructs Adobe servers to process non-sequential data submissions \(not in the order that the original events occurred\). **Note:** Individual records must still be ordered. |
|**stopOnWarning** |`xsd:boolean` | When set to `True`, Adobe servers halt processing if they encounter a non-fatal warning. |

**Parent topic:** [Data Types](../data_types/c_data_types.md)


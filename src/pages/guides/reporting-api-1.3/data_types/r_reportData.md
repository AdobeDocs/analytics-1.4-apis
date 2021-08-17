# reportData

A structure that contains report data.

|Name|Type|Description|
|----|----|-----------|
|**name** |`xsd:string` |This data item name.|
|**url** |`xsd:string` |The data item URL, if applicable to the selected element. For example, pages and links have a URL, but products do not.|
|**year** |`xsd:int` |The four-digit year for the item if the element is a date range for an Overtime or Trended report.|
|**month** |`xsd:int` |The two-digit month for the item if the element is a date range for an Overtime or Trended report.|
|**day** |`xsd:int` |The two-digit numeric day for the item if the element is a date range for an Overtime or Trended report.|
|**hour** |`xsd:int` |The two-digit numeric hour for the item if the element is a date range for an Overtime or Trended report.|
|**counts** |[reportCountList](r_reportCountList.md#) |A count of the number of occurrences of each metric in the report.|
|**breakdown** |[reportDataList](r_reportDataList.md#) |This item's data, organized according to the next element. For example, a report of Browsers, broken down by page views, returns a report containing a listing of page views for each Browser type. This is only used in Ranked or Trended reports when multiple elements \(Breakdowns\) are specified.|

**Parent topic:** [Data Types](../data_types/c_data_types.md)


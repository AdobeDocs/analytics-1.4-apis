# reportData

A structure that contains report data.



##  

|Element|Type|Description|
|-------|----|-----------|
| ` name ` | `xsd:string` | This data item name. |
| ` url ` | `xsd:string` | The data item URL, if applicable to the selected element. For example, pages and links have a URL, but products do not. |
|`path` |[reportDataPathList](r_reportDataPathList.md#) - an array of [reportDataPath](r_reportDataPath.md#) | The path for pathing reports. |
| ` parentID ` | `xsd:string` | Unique identifier for the element in a hierarchy report. Use in reportDescription to request the next level of the hierarch. |
| ` year ` | `xsd:int` | The four-digit year for the item if the element is a date range for an Overtime or Trended report. |
| ` month ` | `xsd:int` | The two-digit month for the item if the element is a date range for an Overtime or Trended report. |
| ` day ` | `xsd:int` | The two-digit numeric day for the item if the element is a date range for an Overtime or Trended report. |
| ` hour ` | `xsd:int` | The two-digit numeric hour for the item if the element is a date range for an Overtime or Trended report. |
| ` minute ` | `xsd:int` | The two-digit numeric minute for the item if the element is a date range for a Real-Time report. |
|`trend` |`double` | The slope of the trend line so you can determine the relative change between report intervals. |
| ` counts ` | `double[]` | A count of the number of occurrences of each metric in the report. |
| ` upperBounds ` | `double[]` | Upper level of the prediction interval. Values above this level are considered anomalous. Represents a 95% confidence that values will be below this level. |
| ` lowerBounds ` | `double[]` | Lower level of the prediction interval. Values below this level are considered anomalous. Represents a 95% confidence that values will be above this level. |
| ` forecasts ` | `double[]` | The predicted value based on the data analysis. This value is also the middle point between the upper and lower bounds. |
| ` breakdownTotal ` | `double[]` | The total metrics values for the breakdown. |
| ` breakdown ` | [reportDataList](r_reportDataList.md#) - an array of `reportData` \(recursive\)| This item's data, organized according to the next element. For example, a report of Browsers, broken down by page views, returns a report containing a listing of page views for each Browser type. This is only used in Ranked or Trended reports when multiple elements \(Breakdowns\) are specified. \(recursive\) |

**Parent topic:** [Data Types](../data_types/datatypes.md)


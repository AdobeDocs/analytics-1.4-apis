# Report Data object reference

When you request a report, the API returns a JSON object is in the following format.

Response element | Type | Description
--- | --- | ---
**`type`** | `string` | The report type that was generated based on the provided parameters.
**`reportSuite`** | `object` | Contains the report suite ID and name.
**`period`** | `string` | A string describing the report time period.
**`elements`** | `object[]` | A list of [dimensions](report-description/dimensions.md) used in the report.
**`metrics`** | `object[]` | A list of [metrics](report-description/metrics.md) used in the report.
**`segments`** | `object[]` | A list of [segments](report-description/inline_segments.md) used in the report.
**`data`** | `reportData[]` | The data that makes up the bulk of the report. See the table below for details.
**`totals`** | `double[]` | A list of metric totals.
**`version`** | `string` | The version of the API used to generate the report.
**`totalPages`** | `int` | Number of available pages for [Data Warehouse](data-warehouse.md) requests.
**`page`** | `int` | Current returned page (of `totalPages`) for Data Warehouse requests.

Within the `data` element, you get the actual report data. It uses the following structure:

Report Data Element | Type | Description
--- | --- | ---
**`name`** | `string` | This data item name.
**`url`** | `string` | The data item URL, if applicable to the selected element. For example, pages and links have a URL, but products do not.
**`path`** |`reportDataPath[]` | The path for pathing reports.
**`parentID`** | `string` | Unique identifier for the element in a hierarchy report. Use in reportDescription to request the next level of the hierarch.
**`year`** | `int` | The four-digit year for the item if the element is a date range for an Overtime or Trended report.
**`month`** | `int` | The two-digit month for the item if the element is a date range for an Overtime or Trended report.
**`day`** | `int` | The two-digit numeric day for the item if the element is a date range for an Overtime or Trended report.
**`hour`** | `int` | The two-digit numeric hour for the item if the element is a date range for an Overtime or Trended report.
**`minute`** | `int` | The two-digit numeric minute for the item if the element is a date range for a Real-Time report.
**`trend`** |`double` | The slope of the trend line so you can determine the relative change between report intervals.
**`counts`** | `double[]` | A count of the number of occurrences of each metric in the report.
**`upperBounds`** | `double[]` | Upper level of the prediction interval. Values above this level are considered anomalous. Represents a 95% confidence that values will be below this level.
**`lowerBounds`** | `double[]` | Lower level of the prediction interval. Values below this level are considered anomalous. Represents a 95% confidence that values will be above this level.
**`forecasts`** | `double[]` | The predicted value based on the data analysis. This value is also the middle point between the upper and lower bounds.
**`breakdownTotal`** | `double[]` | The total metrics values for the breakdown.
**`breakdown`** | `reportData[]` (recursive)| This item's data, organized according to the next element. For example, a report of Browsers, broken down by page views, returns a report containing a listing of page views for each Browser type. This is only used in Ranked or Trended reports when multiple elements (Breakdowns) are specified.
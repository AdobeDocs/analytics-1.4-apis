# Anomaly Detection

Anomaly Detection provides a statistical method to determine how a given metric has changed in relation to previous data.

The following table describes the prediction interval data returned by anomaly detection in the Reporting API:

| | |
|--|--|
|upper\_bound| Upper level of the prediction interval. Values above this level are considered anomalous. Represents a 95% confidence that values will be below this level. |
|lower\_bound| Lower level of the prediction interval. Values below this level are considered anomalous. Represents a 95% confidence that values will be above this level. |
|forecast| The predicted value based on the data analysis. This value is also the middle point between the upper and lower bounds. |

Anomaly Detection analyzes the training period \(currently the previous 35 days before the start of the reporting period\) to calculate and report prediction interval data. To calculate the data, the daily total for each metric is compared with the training period using each of the following algorithms:

-   Holt Winters Multiplicative \(Triple Exponential Smoothing\)
-   Holt Winters Additive \(Triple Exponential Smoothing\)
-   Holts Trend Corrected \(Double Exponential Smoothing\)

Each algorithm is applied to determine the algorithm with the smallest Sum of Squared Errors \(SSE\). The Mean Absolute Percent Error \(MAPE\) and the current Standard Error are then calculated to make sure that the model is statistically valid.

These algorithms can be extended to provide predictive forecasts of metrics in future periods.

Because the training period varies based on the start of the reporting period, you might see differences in the data reported for the same date as part of two different time periods.

For example, if you run a report for January 1-14, and then run a report for January 7-21, you might see different prediction data for the same metric between January 7-14 in the two different reports. This is a result of the difference in training periods.

|Reporting Range|Training Period|
|---------------|---------------|
|January 1-14|November 27 - December 31|
|January 7-21|December 4 - January 6|

**Parent topic:** [Reference](../reference/c_reference.md)


# reportDefinitionMetric

A structure that identifies one metric used in a report.

|Name|Type|Description|
|----|----|-----------|
|**id** |`xsd:string` |The ID of a metric to include in the report.|
|**segment** |[reportDefinitionSegment](r_reportDefinitionSegment.md#) |A segment definition. The segment lets you define a data subset to use when generating the report. If you use segment, leave the segmentID parameter blank.|
|**segmentID** |`xsd:string` |The segment ID of the segment definition you want to use when generating the report. If you use segmentID, leave the segment parameter blank.|

**Notes:** 

-   A metric can be a mathematical combination of two or more standard metrics, known as a calculated metric. For more information about calculated metrics, see "Calculated Metrics" in the *Admin Console User Guide*.
-   Analytics provides the following metric categories:
    -   **Commerce:** Includes those metrics for measuring e-commerce activities on the sites.
    -   **Traffic:** Includes those metrics for measuring site traffic.
-   You can include metrics of different categories in Overtime reports, but Ranked and Trended reports support only metrics from one category at a time.
-   See [Analytics Metrics](../reference/r_metrics.md#) for a list of supported metrics.

**Parent topic:** [Data Types](../data_types/c_data_types.md)


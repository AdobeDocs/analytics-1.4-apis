# GetClassificationHierarchies

Retrieves a list of classification hierarchies \(associated with the specified metric\) for each of the specified report suites.

## ReportSuite.GetClassificationHierarchies parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` |A list of report suite IDs.|
|**c\_view** |`xsd:string` |The report for which you want to get the classification hierarchy.|
|**rel\_id** |`array(xsd:string)` |\(deprecated\)|

## ReportSuite.GetClassificationHierarchies response

|Type|Description|
|----|-----------|
|([rscollection_hierarchy](../../../admin-api-1.3/data_types/r_rscollection_hierarchy.md) |List that includes each report suite's classification hierarchy for the specified report.|

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


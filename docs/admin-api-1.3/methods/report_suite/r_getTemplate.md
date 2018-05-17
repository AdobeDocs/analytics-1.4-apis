# GetTemplate

Retrieves the creation template for each of the specified report suites.

## ReportSuite.GetTemplate parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` |A list of report suite IDs.|

## ReportSuite.GetTemplate response

|Type|Description|
|----|-----------|
|[tns:rscollection\_template](../../data_types/r_rscollection_template.md#) |List of report suites with the creation template for each. If a report suite was not created from a template, no value is provided for that report suite.|

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


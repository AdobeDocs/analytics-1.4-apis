# GetClassifications

Retrieves a list of classifications \(associated with the specified metric\) for each of the specified report suites.

## ReportSuite.GetClassifications parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid\_list** |`array(xsd:string)` | \(required\) The list of report suite IDs for which you want to retrieve classifications. |
|**c\_view** |`xsd:string` | \(Optional\) Display classifications of this type. |
|**rel\_id** |`array(xsd:string)` | \(Optional\) Numeric ID of the metric for which you want to retrieve associated classifications. |
| **type** |`xsd:string` | Ignored. Reserved for future use. |

## ReportSuite.GetClassifications response

|Type|Description|
|----|-----------|
| [tns:rscollection\_classification](../../data_types/r_rscollection_classification.md#) |List that includes each report suite's classifications hierarchy for the specified report.|

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


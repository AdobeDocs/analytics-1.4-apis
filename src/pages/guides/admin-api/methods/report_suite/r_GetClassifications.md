# GetClassifications

Retrieves a list of classifications (associated with the specified element) for each of the specified report suites.

## ReportSuite.GetClassifications parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `array(xsd:string)` | (Required) The list of report suite IDs for which you want to retrieve classifications. |
| **element_list** |`array(xsd:string)` | (Required) The list of elements for which you want to retrieve classifications. See [values for element_list](r_GetClassifications.md#). |

## ReportSuite.GetClassifications response

|Type|Description|
|----|-----------|
| [report_suite_element_classifications_array](../../data_types/r_report_suite_classifications_array.md#) - An array of [report_suite_element_classifications](../../data_types/r_report_suite_classifications.md#) |List that includes each report suite's classifications hierarchy for the specified element(s).|

## Values for element_list

Element_list can be one or more of the following values:

trackingcode

days_between_buys

days_till_purchase

domain

evar1-75

firsttouchchannel

firsttouchchanneldetail

lasttouchchannel

lasttouchchanneldetail

loyalty

media

page

sitesection

server

prop1-75

listvar1-3

product

sitetime

state

surveybase

tntbase

visitdepth

visitnum

zip

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


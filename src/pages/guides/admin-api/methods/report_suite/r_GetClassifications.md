# GetClassifications

Retrieves a list of classifications \(associated with the specified element\) for each of the specified report suites.

## ReportSuite.GetClassifications parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid\_list** | `array(xsd:string)` | \(required\) The list of report suite IDs for which you want to retrieve classifications. |
| **element\_list** |`array(xsd:string)` | \(required\) The list of elements for which you want to retrieve classifications. See [values for element\_list](r_GetClassifications.md#). |

## ReportSuite.GetClassifications response

|Type|Description|
|----|-----------|
| [report\_suite\_element\_classifications\_array](../../data_types/r_report_suite_classifications_array.md#) - An array of [report\_suite\_element\_classifications](../../data_types/r_report_suite_classifications.md#) |List that includes each report suite's classifications hierarchy for the specified element\(s\).|

## Values for element\_list

Element\_list can be one or more of the following values:

trackingcode

days\_between\_buys

days\_till\_purchase

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


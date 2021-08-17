# SaveEvents

Updates custom events to each of the specified report suites.

## ReportSuite.SaveSuccessEvents parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid\_list** | `array(xsd:string)` |A list of report suite IDs.|
| **event** | [event\_array](../../data_types/r_event_array.md#) - An array of [event](../../data_types/r_event.md#)|A list of success events.|

## ReportSuite.SaveEvents response

|Type|Description|
|----|-----------|
| `xsd:boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


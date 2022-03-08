# SaveProps

Updates the traffic variables for each of the specified report suites.

## ReportSuite.SaveProps parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` |A list of report suite IDs.|
| **props** | [prop[]](../../data_types/r_prop_array.md#) - An array of [prop](../../data_types/r_prop.md#) |A list of traffic variable objects to assign to the report suites.|

## ReportSuite.SaveProps response

|Type|Description|
|----|-----------|
| `boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


# GetElements

Retrieves a list of possible valid elements for a report.

See [Analytics Elements](../elements.md#).

## Permissions

Specific users may not have access to certain elements. The metrics returned by `GetElements` reflect those restrictions. Requesting an element that one doesn't have permission to access will result in a `element_inaccessible` error.

## Report.GetElements Parameters

|Name|Type|Description|
|----|----|-----------|
| `reportSuiteID` | `string` |The Analytics report suite you want to use to generate the report. For example: `reportSuiteID = "corp1"` |
| `existingElements` | `string[]` |(Optional) Include a list of elements already present in the reportDescription to get compatible metrics.|
| `existingMetrics` | `string[]` |(Optional) Include a list of metrics already present in the reportDescription to get compatible metrics.|
| `reportType` | `string` |(Optional) Include the report type (any, ranked, trended, pathing, fallout, realtime) to get compatible metrics.|

## Report.GetElements response

|Type|Description|
|----|-----------|
|  `reportElement[]` | Defines an element that appears in a report. |

**Parent topic:** [Methods](../methods/methods.md)


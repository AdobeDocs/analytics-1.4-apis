# DeleteCalculatedMetrics

Deletes the specified set of calculated metrics for each of the specified report suites.

## ReportSuite.DeleteCalculatedMetrics parameters

|Name|Type|Description|
|----|----|-----------|
| **`rsid_list`** | `string[]` |A list of report suite IDs.|
| **`calculated_metrics`** | `calculated_metric[]` |List of calculated metrics to delete from the specified report suites.|

## ReportSuite.DeleteCalculatedMetrics response

|Type|Description|
|----|-----------|
| `boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# DeleteClassification

Deletes a classification from one or more report suites.

## ReportSuite.DeleteClassification Parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` | A list of report suite IDs.|
| **element** | `string` | The element from which you want to delete the classification. |
| **name** | `string` | The name of the classification to delete. |

## ReportSuite.DeleteClassification Response

| Type | Description |
|--------|---------------|
| `boolean` | Returns `true` if the operation is successful. |

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# DeleteInternalURLFilters

Deletes the internal URL filters for each of the specified report suites.

## ReportSuite.DeleteInternalURLFilters parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`string[]` |A list of report suite IDs.|
|**internal_url_filters** |`string[]` |A list of URLs to delete from the internal URL filters list.|

## ReportSuite.DeleteInternalURLFilters response

|Type|Description|
|----|-----------|
|`boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# DeleteIPAddressExclusion

Delete an IP exclusion entry for a given report suite.

## ReportSuite.DeleteIPAddressExclusion parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`string[]` |A list of report suite IDs.|
|**ip_address** |`string` |The IP address to remove from the IP address exclusions list.|

## ReportSuite.DeleteIPAddressExclusion response

|Type|Description|
|----|-----------|
|`boolean` |Returns `true` if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# DeleteKeyVisitors

Deletes key visitors from each of the specified report suites.

## ReportSuite.DeleteKeyVisitors

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`string[]` |A list of report suite IDs.|
|**key_visitors** |`string[]` |A list of key visitors to delete, identified by either domain name (`abccorp.com`) or IP address (`192.168.10.128`).|

## ReportSuite.DeleteKeyVisitors response

|Type|Description|
|----|-----------|
|`boolean` |Returns `TRUE` if the operation is successful. Otherwise, returns `FALSE`.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# DeleteMarketingChannelCost

Deletes a cost item for the selected report suites.

## ReportSuite.DeleteMarketingChannelCost parameters

|Name|Type|Description|
|----|----|-----------|
|**rsid_list** |`array (xsd:string)` |A list of report suite IDs.|
|**channel_type** |`string` | |
|**cost_group** |`string` | |
|**cost_id** |`string` | |

## ReportSuite.DeleteMarketingChannelCost response

|Type|Description|
|----|-----------|
|`boolean` |Returns `true` if the operation was successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# DeletePaidSearchDetection

Removes the specified paid search rule.

## ReportSuite.DeletePaidSearchDetection parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` |A list of report suite IDs.|
|**search_engine** |[`search_engine_enum`](../data_types.md#searchengineenum) | The name of the search engine. |
|**operator** | `string` | Specifies the type of paid search rule. Valid values include `contains` or `not_contains`. |
|**query_string** |`string` |The string value to use when matching a search engine referring URL.|

## ReportSuite.DeletePaidSearchDetection response

|Type|Description|
|----|-----------|
|`boolean` |Returns `true` if the operation was successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)

# DeleteVirtualReportSuite

 

## ReportSuite.DeleteVirtualReportSuite parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid** | `string` | Report suite ID of virtual report suite. |

 Example:

 ```
{
    "rsid":"vrs_dehans0_newvrs"
}
```

## ReportSuite.DeleteVirtualReportSuite response

|Type|Description|
|----|-----------|
| `boolean` | Returns true if operation was successful. |

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


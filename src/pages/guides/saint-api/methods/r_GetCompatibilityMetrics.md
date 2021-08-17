# GetCompatibilityMetrics

Returns the available `relation_id` values for a given report suite, and compatibility across report suites.

## Saint.GetCompatibilityMetrics Parameters

|Parameter|Type|Description|
|---------|----|-----------|
|**report\_suite\_array** |`array(xsd:string)` | A list of report suites where you want to get valid relation\_id values. |

## Saint.GetCompatibilityMetrics Response

|Type|Description|
|----|-----------|
|[tns:compatibilities](../data_types/r_compatibilities.md#) | A list of valid values for `relation_id` that are common to all specified report suites. |

For more information, see [GetCompatibilityMetrics Request](../sample_code/r_GetCompatibilityMetrics_sample.md#).

**Parent topic:** [Methods](../methods/c_saint_methods.md)


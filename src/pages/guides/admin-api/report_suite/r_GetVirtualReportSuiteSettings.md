# GetVirtualReportSuiteSettings

 

## ReportSuite.GetVirtualReportSuiteSettings parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid_list** | `string[]` | A list of the virtual report suite IDs. |

Example:
```
{
    "rsid_list":["vrs_dehans0_newvrs"]
}
```

## ReportSuite.GetVirtualReportSuiteSettings response

|Type|Description|
|----|-----------|
| `virtual_report_suite_settings[]` | List of virtual report suite settings |

Example:
```
[{
    "rsid": "vrs_dehans0_newvrs",
    "parent_rsid": "sistr2",
    "segment_list": ["536bfa98e4b06d874b0c927a", "536bfa99e4b06d874b0c927f"]
}]
```

## virtual_report_settings

|Element|Type|Description|
|-------|----|-----------|
| **rsid** | `string` | Virtual report suite ID. |
|**parent_rsid** | `string` | Report suite ID for virtual report suite. |
| **segment_list** | `segment_list[]` | List of segments applied to virtual report suite. |

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


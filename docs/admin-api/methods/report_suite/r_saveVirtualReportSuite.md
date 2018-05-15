# SaveVirtualReportSuite

Creating or Updating a VRS will be its own method since the current ReportSuite.Create does not support the parameters necessary.

## ReportSuite.SaveVirtualReportSuite parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid** | `xsd:string` | \(Optional\) Requested virtual report suite ID for update. |
|**parent\_rsid** |`xsd:string` | Parent report suite ID for virtual report suite. |
|**name** |`xsd:string` | The name for the virtual report suite. |
|**segment\_list** |`segment_list_array` | List of segments to be applied to the virtual report suite. |

Example:

```
{
    "rsid":"vrs_dehans0_newvrs",
    "parent_rsid":"sistr2",
    "name":"new vrs",
    "segment_list": [
        "536bfa98e4b06d874b0c927a",
        "536bfa99e4b06d874b0c927f"
    ]
}
```

## ReportSuite.SaveVirtualReportSuite response

|Name|Type|Description|
|----|----|-----------|
| **rsid** | `xsd:string` | Report suite ID for the created or updated virtual report suite. |

Example:

```
{
    "rsid": "vrs_dehans0_newvrs"
}
```

Called with the rsid parameter this method will attempt to update an existing virtual report suite, called without rsid parameter this method will attempt to create a new virtual report suite.

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


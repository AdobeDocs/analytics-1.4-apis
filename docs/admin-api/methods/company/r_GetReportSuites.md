# GetReportSuites

Retrieves all report suites associated with the requesting company.

## Company.GetReportSuites parameters

|Name|Type|Description|
|----|----|-----------|
|**types** |`array(xsd:string)` |A list of report suite types that you want to include in the report suite list. Supported types include: `standard` and `rollup`.|
|**search** |`xsd:string` |A search filter to apply in retrieving report suites.|
| **virtual** | `xsd:boolean` | Indicates if the report suite is a virtual report suite |

Example:
```
{
	"report_suites": [{
		"rsid": "vrs_dehans0_testvrs_1",
		"site_title": "test VRS",
		"virtual": true
	}, {
		"rsid": "vrs_dehans0_newvrs_1",
		"site_title": "new vrs",
		"virtual": true
	}]
}
```

 |

## Company.GetReportSuites response

|Type|Description|
|----|-----------|
|[company\_report\_suites](../../data_types/r_company_report_suites.md#) |A list of report suites that match the specified request parameters.|

**Parent topic:** [Company](../../methods/company/r_methods_company.md)


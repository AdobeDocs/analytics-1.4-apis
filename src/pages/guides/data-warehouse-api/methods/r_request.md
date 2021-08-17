# Request

Submits a one-time report request to be delivered through e-mail or FTP.

## DataWarehouse.Request Parameters

|Parameter|Type|Description|
|---------|----|-----------|
| **rsid** | `xsd:string` | The ID of the report suite to use with the Data Warehouse request. The report suite must have Data Warehouse enabled, and you must have rights to this report suite. |
| **Contact\_Name** | `xsd:string` | The name of the person making the Data Warehouse request. |
| **Contact\_Phone** | `xsd:string` | The phone number of the person making the Data Warehouse request. |
| **Email\_To** | `xsd:string`\*| The email address where you want Data Warehouse to send the data file. email is the default delivery mechanism, but you can also use FTP, if desired. |
| **Email\_Subject** | `xsd:string` | The text that Data Warehouse puts in the subject line of the email. |
|**Report\_Name** |`xsd:string` | The Data Warehouse request name as you want it to appear in the email. |
|**Report\_Description** |`xsd:string` | \(Optional\) A description of the Data Warehouse request as you want it to appear in the email. |
|**File\_Name** |`xsd:string` | \(Optional\) The name of the data file that contains the results of the Data Warehouse request. For example, specify `DW_Data` to return a data file named `DW_Data.csv`. |
|**Date\_Type** |`xsd:string` | The type of date range used with the Data Warehouse request. Supported values include: **range:** Specifes that you want to use a custom date range. To do this, specify the report's start date using the `Date_From` parameter, and the end using the `Date_To` parameter. **preset:** Specifies that you want to use a predefined date range. To do this, specify the report's preset date using the `Date_Preset` parameter. |
|**Date\_Preset** |`xsd:string` | \(Optional\) The predefined date range to use with the Data Warehouse request. Specify this parameter when `Date_Type = preset`. Supported values include the following \(values are case-sensitive\): `Last month`, `Last week`, `Last 2 weeks`, `Last 4 weeks`, `Last 7 days`, `Last 30 days`, `This month`, `This week`, `Today`, `Yesterday`. |
|**Date\_To** |`xsd:string` | \(Optional\) The end date of the custom date range for the Data Warehouse request. Specify this parameter when `Date_Type = range`. Date values must use the format `MM/DD/YY`. |
|**Date\_From** |`xsd:string` | \(Optional\) The start date of the custom date range for the Data Warehouse request. Specify this parameter when `Date_Type = range`. Date values must use the format `MM/DD/YY`. |
|**Date\_Granularity** |`xsd:string` | The granularity of the Data Warehouse request. Supported values include the following: `none`, `hour`, `day`, `week`, `month`, `quarter`, `year`. |
|**Segment\_Id** |`xsd:int` | \(Optional\) The segment to use with this Data Warehouse request. This value must be a valid global segment ID. Use [GetSegments](r_getSegments.md#) to get a list of valid segment IDs. |
|**Metric\_List** |`array(xsd:string)` | \(Optional\) The metrics to include in the Data Warehouse request. A valid request must contain at least one Metric or Breakdown. Use `ReportSuite.GetAvailableMetrics` to get a list of available metrics for a report suite. |
|**Breakdown\_List** |`array(xsd:string)` | \(Optional\) The breakdowns to include in the Data Warehouse request. A valid request must contain at least one Metric or Breakdown. Use `ReportSuite.GetAvailableElements` to get a list of available breakdowns for a report suite. |
|**FTP\_Host** |`xsd:string` | \(Optional\) The delivery location for the Data Warehouse segment. Supported values include: **Leave Blank:** Do not specify a value for this parameter to have Data Warehouse deliver the segment file by Email. Email is the default delivery mechanism. **FTP Host Name:** Specify an FTP host name to have Data Warehouse deliver the segment by FTP. **send\_via\_api:** Specify the value send\_via\_api to have Data Warehouse deliver the segment using its REST interface. In this case, when the segment completes [CheckRequest](r_CheckRequest.md#) provides the REST URL where you can download the segment. |
|**FTP\_Port** |`xsd:int` | \(Optional\) The FTP port number. |
|**FTP\_Dir** |`xsd:string` | \(Optional\) The FTP directory where Data Warehouse puts the data file \(For example, `/reports/here`\). |
|**FTP\_UserName** |`xsd:string` | \(Optional\) User name used to login to the FTP server specified in `FTP_Host`. |
|**FTP\_Password** |`xsd:string` | \(Optional\) Password that matches the FTP user specified in `FTP_UserName`. |

## DataWarehouse.Request Response

|Type|Description|
|----|-----------|
| `xsd:int` | The Request ID assigned to this Data Warehouse request by Adobe servers. |

**Parent topic:** [Methods](../methods/c_data_warehouse_methods.md)


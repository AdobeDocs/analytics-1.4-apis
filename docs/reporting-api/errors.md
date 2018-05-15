# Analytics Report Error Codes

Provides a list of error codes that Analytics returns when a report does not generate properly.

Numeric error codes have been abandoned in favor of textual, descriptive error messages. The following adjectives in error codes have specific meanings:

|Adjective|Meaning|
|---------|-------------|
| invalid | The provided value is wrong in some way. If the user changes it, things will work. |
| missing | A required value is missing. If the user provides it, things will work.|
| inaccessible | The user doesn't have permission to access the feature. |
| unsupported | The particular functionality requested is not supported at this time. It may be supported in the future. |
| unavailable | The feature requested isn't available. The user can usually fix this but not by changing the report description. |
| failure | The system has failed and it's not the users fault. |

## Reporting API 1.4 Errors

|Code|Message|
|----|-------|
| algorithm\_argument\_invalid | algorithmArgument must be "linear" or "count" |
| calculated\_metric\_invalid | Formula "%s" not found |
| calculated\_metric\_invalid | Invalid formula ID "%s" |
| calculated\_metric\_invalid | Invalid metric "%s" |
| calculated\_metric\_invalid | Metric "%s" in formula "%s" is not found |
| calculated\_metric\_unsupported | Metric "%s" in formula "%s" is not supported |
| date\_granularity\_missing | anomalyDetection requires dateGranularity |
| date\_invalid | "%s" is not a valid date |
| delivery\_complete | The warehouse report was delivered to external FTP. |
| element\_classification\_invalid | Invalid classification "%s" for element "%s" |
| element\_combination\_unsupported | This combination of elements is not supported |
| element\_id\_invalid | Element "%s" not found |
| element\_id\_missing | Element id must be specified |
| element\_inaccessible | You do not have permission to access element "%s" |
| element\_top\_invalid | The maximum number of top element values supported is %d |
| element\_search\_unsupported | Element search is only supported on the first element for Real Time reports |
| element\_selected\_unsupported | Element selected is only supported on the first element for Real Time reports |
| element\_top\_unsupported | "top" is only supported on the primary \(last\) element for Real Time reports |
| element\_top\_invalid | The maximum number of top element values supported is 100 |
| element\_top\_unsupported\_warehouse | Element top is unsupported in warehouse reports |
| element\_start\_unsupported\_warehouse | Element start is unsupported in warehouse reports |
| element\_selected\_unsupported\_warehouse | Element selected is unsupported in warehouse reports |
| lement\_search\_unsupported\_warehouse | eElement search is unsupported in warehouse reports |
| elements\_invalid | The maximum number of elements supported is %d |
| expedite\_inaccessible | You do not have permission to expedite this request |
| fallout\_checkpoint\_required | Fallout selected checkpoint cannot be empty |
| fallout\_invalid | Fallout requires selected items |
| fallout\_invalid | Fallout selected cannot have more than %s checkpoints |
| fallout\_invalid | Fallout selected must have at least %s checkpoints |
| first\_rank\_period\_invalid | firstRankPeriod must be an integer between 0 and 60 |
| floor\_sensitivity\_invalid | floorSensitivity must be a valid float between zero and 1 |
| ftp\_directory\_missing | FTP directory must be specified for external FTP warehouse requests |
| ftp\_filename\_missing | FTP filename must be specified for external FTP warehouse requests |
| ftp\_host\_missing | FTP host must be specified for external FTP warehouse requests |
| ftp\_password\_missing | FTP password must be specified for external FTP warehouse requests |
| ftp\_port\_missing | FTP port must be specified for external FTP warehouse requests |
| ftp\_username\_missing | FTP username must be specified for external FTP warehouse requests |
| hierarchy\_level\_invalid | Hierarchy level "%s" is invalid for "%s" |
| hierarchy\_parent\_id\_missing | Hierarchy parentID is missing for "%s" |
| max\_runtime\_exceeded | Report exceeded maximum runtime of %d hours |
| metric\_id\_invalid | Metric "%s" not found |
| metric\_id\_missing | Metric id must be specified |
| metric\_inaccessible | You do not have permission to access metric "%s" |
| metric\_not\_supported\_for\_element | The element "%s" does not support the metric "%s" |
| metric\_unsupported\_in\_overtime | Metric "%s" not supported in overtime reports |
| metric\_unsupported\_in\_ranked | Metric "%s" not supported in ranked reports |
| metric\_unsupported\_in\_trended | Metric "%s" not supported in trended reports |
| multiple\_metrics\_unsupported | Only one metric is supported for realtime reports |
| multiple\_elements\_unsupported | Only two elements are supported for realtime reports |
| pathing\_filter\_invalid | Items must be specified after ::not:: |
| pathing\_filter\_required | Pathing pattern filter cannot be empty |
| pathing\_invalid | Pathing requires selected pattern |
| period\_invalid | Both date and dateFrom or dateTo cannot be specified |
| period\_invalid | dateTo must be after dateFrom |
| period\_invalid | Invalid dateGranularity |
| period\_invalid | Year must be between %s and %s |
| period\_missing | dateFrom and dateTo must both be specified |
| realtime\_report\_invalid | This report is not configured for realtime |
| report\_not\_ready | Report not ready |
| report\_suite\_invalid | Invalid report suite "%s" |
| report\_suite\_invalid | Report suite "%s" not found |
| report\_suite\_missing | reportSuiteID is missing |
| search\_invalid | Search arguments missing |
| search\_operator\_invalid | Invalid search operator "%s" |
| segment\_element\_invalid | Element "%s" not valid for inline segment |
| segment\_element\_invalid | Segment element "%s" not found |
| segment\_inaccessible | You do not have permission to access this segment |
| segment\_invalid | Segment definition missing |
| segment\_missing | You must specify a segment |
| segment\_unsupported | Segment element "%s" not supported |
| segment\_unsupported | Segment search keywords are only supported on classifications |
| segment\_unsupported | Segment search not supported |
| soap\_not\_supported | SOAP protocol not supported for the request |
| sort\_method\_invalid| "sortMethod" must be gainers, losers, or mostpopular |
| sort\_metric\_unsupported\_warehouse | Sort metric is unsupported in warehouse reports |
| system\_failure | A system failure has occurred |
| unsupported\_format | An invalid response format was specified |
| warehouse\_request\_failed | The warehouse request failed |
| waiting\_limit\_reached | You have reached the maximum number of waiting reports for this report suite |

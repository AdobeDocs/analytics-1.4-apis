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
| algorithm_argument_invalid | algorithmArgument must be "linear" or "count" |
| calculated_metric_invalid | Formula "%s" not found |
| calculated_metric_invalid | Invalid formula ID "%s" |
| calculated_metric_invalid | Invalid metric "%s" |
| calculated_metric_invalid | Metric "%s" in formula "%s" is not found |
| calculated_metric_unsupported | Metric "%s" in formula "%s" is not supported |
| date_granularity_missing | anomalyDetection requires dateGranularity |
| date_invalid | "%s" is not a valid date |
| delivery_complete | The warehouse report was delivered to external FTP. |
| element_classification_invalid | Invalid classification "%s" for element "%s" |
| element_combination_unsupported | This combination of elements is not supported |
| element_id_invalid | Element "%s" not found |
| element_id_missing | Element id must be specified |
| element_inaccessible | You do not have permission to access element "%s" |
| element_top_invalid | The maximum number of top element values supported is %d |
| element_search_unsupported | Element search is only supported on the first element for Real Time reports |
| element_selected_unsupported | Element selected is only supported on the first element for Real Time reports |
| element_top_unsupported | "top" is only supported on the primary (last) element for Real Time reports |
| element_top_invalid | The maximum number of top element values supported is 100 |
| element_top_unsupported_warehouse | Element top is unsupported in warehouse reports |
| element_start_unsupported_warehouse | Element start is unsupported in warehouse reports |
| element_selected_unsupported_warehouse | Element selected is unsupported in warehouse reports |
| lement_search_unsupported_warehouse | eElement search is unsupported in warehouse reports |
| elements_invalid | The maximum number of elements supported is %d |
| expedite_inaccessible | You do not have permission to expedite this request |
| fallout_checkpoint_required | Fallout selected checkpoint cannot be empty |
| fallout_invalid | Fallout requires selected items |
| fallout_invalid | Fallout selected cannot have more than %s checkpoints |
| fallout_invalid | Fallout selected must have at least %s checkpoints |
| first_rank_period_invalid | firstRankPeriod must be an integer between 0 and 60 |
| floor_sensitivity_invalid | floorSensitivity must be a valid float between zero and 1 |
| ftp_directory_missing | FTP directory must be specified for external FTP warehouse requests |
| ftp_filename_missing | FTP filename must be specified for external FTP warehouse requests |
| ftp_host_missing | FTP host must be specified for external FTP warehouse requests |
| ftp_password_missing | FTP password must be specified for external FTP warehouse requests |
| ftp_port_missing | FTP port must be specified for external FTP warehouse requests |
| ftp_username_missing | FTP username must be specified for external FTP warehouse requests |
| hierarchy_level_invalid | Hierarchy level "%s" is invalid for "%s" |
| hierarchy_parent_id_missing | Hierarchy parentID is missing for "%s" |
| max_runtime_exceeded | Report exceeded maximum runtime of %d hours |
| metric_id_invalid | Metric "%s" not found |
| metric_id_missing | Metric id must be specified |
| metric_inaccessible | You do not have permission to access metric "%s" |
| metric_not_supported_for_element | The element "%s" does not support the metric "%s" |
| metric_unsupported_in_overtime | Metric "%s" not supported in overtime reports |
| metric_unsupported_in_ranked | Metric "%s" not supported in ranked reports |
| metric_unsupported_in_trended | Metric "%s" not supported in trended reports |
| multiple_metrics_unsupported | Only one metric is supported for realtime reports |
| multiple_elements_unsupported | Only two elements are supported for realtime reports |
| pathing_filter_invalid | Items must be specified after ::not:: |
| pathing_filter_required | Pathing pattern filter cannot be empty |
| pathing_invalid | Pathing requires selected pattern |
| period_invalid | Both date and dateFrom or dateTo cannot be specified |
| period_invalid | dateTo must be after dateFrom |
| period_invalid | Invalid dateGranularity |
| period_invalid | Year must be between %s and %s |
| period_missing | dateFrom and dateTo must both be specified |
| realtime_report_invalid | This report is not configured for realtime |
| report_not_ready | Report not ready |
| report_suite_invalid | Invalid report suite "%s" |
| report_suite_invalid | Report suite "%s" not found |
| report_suite_missing | reportSuiteID is missing |
| search_invalid | Search arguments missing |
| search_operator_invalid | Invalid search operator "%s" |
| segment_element_invalid | Element "%s" not valid for inline segment |
| segment_element_invalid | Segment element "%s" not found |
| segment_inaccessible | You do not have permission to access this segment |
| segment_invalid | Segment definition missing |
| segment_missing | You must specify a segment |
| segment_unsupported | Segment element "%s" not supported |
| segment_unsupported | Segment search keywords are only supported on classifications |
| segment_unsupported | Segment search not supported |
| soap_not_supported | SOAP protocol not supported for the request |
| sort_method_invalid| "sortMethod" must be gainers, losers, or mostpopular |
| sort_metric_unsupported_warehouse | Sort metric is unsupported in warehouse reports |
| system_failure | A system failure has occurred |
| unsupported_format | An invalid response format was specified |
| warehouse_request_failed | The warehouse request failed |
| waiting_limit_reached | You have reached the maximum number of waiting reports for this report suite |

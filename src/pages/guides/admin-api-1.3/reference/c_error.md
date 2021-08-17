# Error Codes

 

Errors are returned in the following format:

```
{
"errors":["error 1", "error 2", ..., "error n"]
}
```

Error responses with text surrounded by asterisks \(ex: \*rsid\*\) denotes a provided parameter by the same name is returned as part of the error message.

## Company.GetReportSuites

| Message | Description |
|-----------|---------------|
| "rs\_types needs to specify one of the specific report suite types." | if specified, "rs\_types" must be set to one of the following \(case sensitive\): "standard", "rollup", "asi" |
| "rs\_types needs to be in array form." | if specified, "rs\_types" must be an array |

## ReportSuite.Create

| Message | Description |
|-----------|---------------|
| "The first character of a Report Suite ID must be alpha-numeric. The following characters must be alpha-numeric or the symbols '-' and '.'. No spaces are allowed. The Report Suite ID must be between 2 and 40 characters in length." | The value passed to "rsid" does not meet the criteria specified |
| "The report suite you are duplicating \(\*duplicate\_rsid\*\) must either be a template or a report suite from your company." | The report suite ID supplied in "duplicate\_rsid" does not match a template or report suite in the company provided. |
| "You must specify a Report Suite ID to copy settings from." | The "duplicate\_rsid" parameter was not provided |
| "You must specify a new Report Suite ID" | The "rsid" parameter was not provided |
| "You must specify a Time Zone" | the "time\_zone" parameter was not provided |
| "You must specify a Go Live Date" | the "go\_live\_date" parameter was not provided |
| "You must specify Hits Per Day" | the "hits\_per\_day" parameter was not provided |
| "You have selected an invalid time zone." | The value provided for "time\_zone" must be one of the values in the [timezone\_enum](../data_types/r_timezone_enum.md#) datatype. |
| "You have selected an invalid currency." | the value provided for "base\_currency" must be a three-letter currency code |
| "The go live date must be in the future." | either the "go\_live\_date" is set in the past, or is not a valid time string |
| "The hits per day must only contain numeric characters." | The value provided for "hits\_per\_day" is not a valid number |

**Parent topic:** [Reference](../reference/c_reference.md)


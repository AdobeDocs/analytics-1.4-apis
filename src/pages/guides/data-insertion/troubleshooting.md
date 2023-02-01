# Data Insertion API troubleshooting

The Data Insertion API can return any of the following status codes:

| POST Response | Description |
|-----------------|---------------|
| `<?xml version="1.0" encoding="UTF-8"?><?xml version="1.0" encoding="UTF-8"?><status>SUCCESS</status>` | Success (general) |
| `<?xml version="1.0" encoding="UTF-8"?><?xml version="1.0" encoding="UTF-8"?><status>FAILURE</status>` | Failure (general) |
| `<?xml version="1.0" encoding="UTF-8"?><?xml version="1.0" encoding="UTF-8"?><status>FAILURE</status> <reason>NO account</reason>` | Missing required Report suite ID |
| `<?xml version="1.0" encoding="UTF-8"?><?xml version="1.0" encoding="UTF-8"?><status>FAILURE</status> <reason>NO pagename OR pageurl</reason>` | Missing required page name or page URL |
| `<?xml version="1.0" encoding="UTF-8"?><?xml version="1.0" encoding="UTF-8"?><status>FAILURE</status> <reason>NO visitorid OR ipaddress</reason>` | Missing required visitor identifier |
| `<?xml version="1.0" encoding="UTF-8"?><?xml version="1.0" encoding="UTF-8"?><status>FAILURE</status> <reason>Syntax Error</reason>` | Syntax error: includes malformed XML or non-encoded reserved characters |

If API calls result in `Failure` responses, check the following:

## XML format troubleshooting

* Make sure that the XML content is in UTF-8 and that the character encoding is included in the opening XML tag.
* Replace ampersands (`&`), greater-than symbols (`>`), and less-than symbols (`<`) symbols with their HTML equivalents when passing them into a Analytics variable. For example, submit `<evar1>News & Sports <local></evar1>` as `<evar1>News &amp; Sports &lt;local&gt;</evar1>`.

## Query string format troubleshooting

* Make sure that all values are properly URL encoded. For example, if you wanted to include the value `News & Sports <local>`, URL encode it as `News%20%26%20Sports%20%3Clocal%3E`.
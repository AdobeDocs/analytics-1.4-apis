# POST Response Codes

The Data Insertion API supports these response messages to HTTP POST operations.

The following table lists all supported XML tags, along with their associated JavaScript variable equivalents and HTTP header variable equivalents, where applicable.

 

ponse messages can help you understand and correct the problem.

| POST Response | Description |
|-----------------|---------------|
| `<?xml version="1.0" encoding="UTF-8"?><?xml version="1.0" encoding="UTF-8"?><status>SUCCESS</status>` | Success \(general\) |
| `<?xml version="1.0" encoding="UTF-8"?><?xml version="1.0" encoding="UTF-8"?><status>FAILURE</status>` | Failure \(general\) |
| `<?xml version="1.0" encoding="UTF-8"?><?xml version="1.0" encoding="UTF-8"?><status>FAILURE</status> <reason>NO account</reason>` | Failure \(missing required report suite id\) |
| `<?xml version="1.0" encoding="UTF-8"?><?xml version="1.0" encoding="UTF-8"?><status>FAILURE</status> <reason>NO pagename OR pageurl</reason>` | Failure \(missing required page name or page URL\) |
| `<?xml version="1.0" encoding="UTF-8"?><?xml version="1.0" encoding="UTF-8"?><status>FAILURE</status> <reason>NO visitorid OR ipaddress</reason>` | Failure \(missing required visitor id or IP address\) |
| `<?xml version="1.0" encoding="UTF-8"?><?xml version="1.0" encoding="UTF-8"?><status>FAILURE</status> <reason>Syntax Error</reason>` | Failure \(syntax error: includes malformed XML, non-encoded reserved characters, etc.\) |


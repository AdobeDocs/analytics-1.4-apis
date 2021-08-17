# Data Insertion Sample \(Python\)

This Python sample illustrates how to access the Data Insertion API.

```
import httplib

xml='<?xml version="1.0" encoding="UTF-8"?>
<request> <scXmlVer>1.0</scXmlVer>
<reportSuiteID>Corp1_rs</reportSuiteID>
<timestamp>2010-03-20T10:33:22-07</timestamp> <visitorID>169</visitorID> <ipAddress>10.0.0.1</ipAddress> <pageName>Test Page</pageName></request>'

conn = httplib.HTTPConnection("namespace.sc.omtrdc.net:80")
conn.request("POST", "/b/ss//6",xml )
response = conn.getresponse()
print(response.status, response.reason)
print(response.read())
```

**Parent topic:** [Sample Code](../sample_code/c_sample_code.md)


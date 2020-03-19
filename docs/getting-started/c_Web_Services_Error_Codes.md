# Web Services Error Codes

The following errors are returned when you come close to or exceed the usage throttling threshold of the web services endpoint.

A warning response will be returned if a rate of 4 requests / second is detected. An error response will be returned if a rate of 5 requests / second is detected. The error responses are documented below.

In addition to this rate limit, a reporting concurrency limit is also enforced at the report suite level. Only 8 concurrent reporting requests will be processed in parallel. If this limit is reached, new report requests will be added to a queue for the report suite and will be processed in the order they came in.

The queue for a report suite can be managed using the Report.GetQueue and Report.Cancel methods. More information is available here:
* [Report.GetQueue()](https://github.com/AdobeDocs/analytics-1.4-apis/blob/master/docs/reporting-api/methods/r_GetQueue.md)
* [Report.Cancel()](https://github.com/AdobeDocs/analytics-1.4-apis/blob/master/docs/reporting-api/methods/r_Cancel.md)

## Rate Limit Warning

Your response will receive the header "X-RateLimit: Warning"

## Rate Limit Error

Your response will receive a Status Code: 429 and the following response:

```
REST:

{
     "error": {
           "code": "50301",
           "domain": "Request.OverLimit",
           "message": "Please reduce request rate"  
   }
}

SOAP:

<SOAP-ENV:Envelope SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"
  xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:xsd="http://www.w3.org/2001/XMLSchema"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/">
  <SOAP-ENV:Body>
    <SOAP-ENV:Fault>
      <faultcode xsi:type="xsd:string">50301</faultcode>
      <faultactor xsi:type="xsd:string"/>
      <faultstring xsi:type="xsd:string">Request.OverLimit</faultstring>
      <detail xsi:type="xsd:string">Please reduce request rate</detail>
    </SOAP-ENV:Fault>
  </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```


# Web Services Error Codes

The following errors are returned when you come close to or exceed the usage throttling threshold of the web services endpoint.

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


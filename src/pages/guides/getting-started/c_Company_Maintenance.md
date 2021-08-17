# Company Maintenance

 

The API will return an error message in your requested format. For a REST request, the response will be JSON encoded, and appear as follows:

```
{"error":"The requested company is undergoing maintenance"}
```

For a SOAP request, the response will be in XML format, and look like this:

```
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/"SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
<SOAP-ENV:Body>
<SOAP-ENV:Fault>
<faultcode xsi:type="xsd:string">50401</faultcode>
<faultactor xsi:type="xsd:string"/>
<faultstring xsi:type="xsd:string">Company.Maintenance</faultstring>
<detail xsi:type="xsd:string">The requested company is undergoing maintenance</detail>
</SOAP-ENV:Fault>
</SOAP-ENV:Body>
</SOAP-ENV:Envelope>

```

Notifications will go out prior to maintenance releases to affected companies. If these error messages are experienced unexpectedly, please contact your Customer Care representative.


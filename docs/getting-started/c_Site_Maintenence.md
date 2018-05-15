# Site Maintenance

 

The API will return an error message in your requested format. For a REST request, the response will be JSON encoded, and appear as follows:

```
{"error":"This API is temporarily undergoing maintenance."}
```

For a SOAP request, the response will be in XML format, and look like this:

```
<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
  <SOAP-ENV:Body>
    <SOAP-ENV:Fault>
      <faultcode xsi:type="xsd:string">Client</faultcode>
      <faultactor xsi:type="xsd:string"/>
      <faultstring xsi:type="xsd:string">This API is temporarily undergoing maintenance.</faultstring>
      <detail xsi:type="xsd:string"/>
    </SOAP-ENV:Fault>
  </SOAP-ENV:Body>
</SOAP-ENV:Envelope>

```

Notifications will go out prior to maintenance releases to everyone registered to receive notification emails. You can sign up for notification emails by contacting your Customer Care representative.


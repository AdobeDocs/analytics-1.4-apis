# Cancel Request

A sample [DataWarehouse.CancelRequest](../methods/r_CancelRequest.md#) method call and its associated response.

## DataWarehouse.CancelRequest Request

```
<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:omn="http://www.omniture.com/">
  <soapenv:Header/>
  <soapenv:Body>
    <omn:DataWarehouse.CancelRequest soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
      <Request_Id xsi:type="xsd:int">69760</Request_Id>
    </omn:DataWarehouse.CancelRequest>
  </soapenv:Body>
</soapenv:Envelope>
```

## DataWarehouse.CancelRequest Response

```
<SOAP-ENV:Envelope SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/">
  <SOAP-ENV:Body>
    <ns1:DataWarehouse.CancelRequestResponse xmlns:ns1="http://www.omniture.com/">
      <return xsi:type="xsd:string">Request Cancelled</return>
    </ns1:DataWarehouse.CancelRequestResponse>
  </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

**Parent topic:** [Sample Code](../sample_code/c_dw_sample_code.md)


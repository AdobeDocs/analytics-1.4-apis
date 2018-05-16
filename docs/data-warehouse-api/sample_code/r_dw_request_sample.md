# Request

A sample [DataWarehouse.Request](../methods/r_request.md#) method call and its associated response.

## DataWarehouse.Request Request

```
<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:omn="http://www.omniture.com/" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/">
  <soapenv:Header/>
  <soapenv:Body>
    <omn:DataWarehouse.Request soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
      <Breakdown_List xsi:type="omn:string_array" soapenc:arrayType="xsd:string[]">
        <item xsi:type="xsd:string">browser_height</item>     
      </Breakdown_List><Contact_Name xsi:type="xsd:string">John Jones</Contact_Name>
      <Contact_Phone xsi:type="xsd:string">801-888-8888</Contact_Phone>
      <Contact_Name xsi:type="xsd:string">John Jones</Contact_Name>
      <Contact_Phone xsi:type="xsd:string">801-000-0000</Contact_Phone>
      <Date_Granularity xsi:type="xsd:string">none</Date_Granularity>
      <Date_Preset xsi:type="xsd:string">Yesterday</Date_Preset>
      <Date_Type xsi:type="xsd:string">preset</Date_Type>
      <Email_Subject xsi:type="xsd:string">Periodic Revenue</Email_Subject>
      <Email_To xsi:type="xsd:string">jjones@somecompany.com</Email_To>
      <File_Name>xsi:type="xsd:string">Report</File_Name>
      <Metric_List xsi:type="omn:string_array" soapenc:arrayType="xsd:string[2]">
        <item xsi:type="xsd:string">revenue</item>
        <item xsi:type="xsd:string">page_views</item>
      </Metric_List>
      <Report_Description xsi:type="xsd:string">My API Request</Report_Description>
      <Report_Name xsi:type="xsd:string">Periodic Revenue</Report_Name>
      <Segment_Id xsi:type="xsd:int">729</Segment_Id>
      <rsid xsi:type="xsd:string">reportSuite00000</rsid>
    </omn:DataWarehouse.Request>
  </soapenv:Body>
</soapenv:Envelope>
```

## DataWarehouse.Request Response

```
<SOAP-ENV:Envelope SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/">
  <SOAP-ENV:Body>
    <ns1:DataWarehouse.RequestResponse xmlns:ns1="http://www.omniture.com/">
      <Request_Id xsi:type="xsd:int">669</Request_Id>
    </ns1:DataWarehouse.RequestResponse>
  </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

**Parent topic:** [Sample Code](../sample_code/c_dw_sample_code.md)


# Create Segment

A sample [DataWarehouse.CreateSegment](../methods/r_createSegment.md#) method call and its associated response.

## DataWarehouse.CreateSegment Request

```
<?xml version="1.0" encoding="UTF-8"?>
<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:omn="http://www.omniture.com/" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/" xmlns:sopenc="sopenc">
  <soapenv:Header/>
  <soapenv:Body>
    <omn:DataWarehouse.CreateSegment soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
      <rsid xsi:type="xsd:string">my_report_suite</rsid>
      <segment xsi:type="omn:data_warehouse_segment">
        <!--You may enter the following 3 items in any order-->
        <name xsi:type="xsd:string">SOAP API Event Test Segment</name>
        <group_include xsi:type="omn:data_warehouse_segment_group">
          <!--You may enter the following 6 items in any order-->
          <type xsi:type="xsd:string">ROOT</type>
          <name xsi:type="xsd:string">Include</name>
          <group_operator xsi:type="xsd:string">UNKNOWN</group_operator>
          <rule_operator xsi:type="xsd:string">AND</rule_operator>
          <rule_list xsi:type="omn:data_warehouse_segment_rule_list" soapenc:arrayType="omn:data_warehouse_segment_rule[]"/>
          <group_list xsi:type="omn:data_warehouse_segment_group_list" soapenc:arrayType="omn:data_warehouse_segment_group[]">
            <item xsi:type="mon:data_warehouse_segment_group">
              <type xsi:type="xsi:string">VISIT</type>
              <name xsi:type="xsi:string">Visit</name>
              <group_operator xsi:type="xsd:string">UNKNOWN</group_operator>
              <rule_operator xsi:type="xsd:string">AND</rule_operator>
              <group_list xsi:type="omn:data_warehouse_segment_group_list" sopenc:arrayType="omn:data_warehouse_segment_group[]">
                <item xsi:type="omn:data_warehouse_segment_group">
                  <type xsi:type="xsd:string">EVENT</type>
                  <name xsi:type="xsd;string">Checkout</name>
                  <group_operator xsi:type="xsd:string">UNKNOWN</group_operator>
                  <rule_operator xsi:type="xsd:string">AND</rule_operator>
                  <rule_list xsi:type="omn:data_warehouse_segment_rule_list" soapenc:arrayType="omn:data_warehouse_segment_rule[]">
                    <item xsi:type="tns:data_warehouse_segment_rule">
                      <operator xsi:type="xsd:string"/>
                      <item xsi:type="xsd:string"/>
                      <value xsi:type="xsd:string"/>
                      <event xsi:type="xsd:int">11</event>
                    </item>
                  </rule_list>
                  <group_list xsi:type="omn:data_warehouse_segment_group_list" soapenc:arrayType="omn:data_warehouse_segment_group[]"/>
                </item>
              </group_list>
              <rule_list xsi:type="omn:data_warehouse_segment_rule_list" soapenc:arrayType="omn:data_warehouse_segment_rule[]"/>
            </item>
          </group_list>
        </group_include>
        <group_exclude xsi:type="omn:data_warehouse_segment_group">
          <!--You may enter the following 6 items in any order-->
          <type xsi:type="xsd:string">ROOT</type>
          <name xsi:type="xsd:string">Exclude</name>
          <group_operator xsi:type="xsd:string">UNKNOWN</group_operator>
          <rule_operator xsi:type="xsd:string">AND</rule_operator>
          <rule_list xsi:type="omn:data_warehouse_segment_rule_list" soapenc:arrayType="omn:data_warehouse_segment_rule[]"/>
          <group_list xsi:type="omn:data_warehouse_segment_group_list" soapenc:arrayType="omn:data_warehouse_segment_group[]"/>
        </group_exclude>
      </segment>
    </omn:DataWarehouse.CreateSegment>
  </soapenv:Body>
</soapenv:Envelope>
```

**Parent topic:** [Sample Code](../sample_code/c_dw_sample_code.md)


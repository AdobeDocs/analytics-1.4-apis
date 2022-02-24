# Step 2: Create a Product Builder Script to Define a Data Warehouse Segment

 

In this section, you will use the Adobe API Explorer to retrieve the segment ID for the segment definition that you created in the previous section. Once you have the segment ID, you can use it to create the Product Builder script.

You will perform the following steps to create a Product Builder script:

1.  Retrieve the segment ID using API Explorer
2.  Cleanup standard XML elements
3.  Cleanup integration-specific XML elements

These steps will define the segment for all the visitors who have Twitter handles and allow you to run Data Warehouse reports on the filer.

## Retrieve the segment ID using API Explorer

In this step, you call two methods using the API Explorer that will ultimately retrieve your segment ID. The tool will return your results in XML format.

1.  In the Adobe Developer Connection, select **Get Started > API Explorer** to access API Explorer.
2.  In the API Explorer tool, enter the **Username** and **Secret** for your account.

    **Note:** You can get your username and secret from logging into the Adobe Experience Cloud and clicking on your user name link to the left of the **Sign Out** link. The Account Information screen will display your Username and Secret.

3.  From the **Environment** drop down list, choose **Sandbox**.
4.  Select the method **DataWareHouse.GetSegments** from the dropdown list. This method returns all the segment IDs for the specified report suite.
5.  Modify the XML generated in the **Request** box to specify the values for your user name, password, and report suite ID, as shown in the following code.

    ```
    
    XML Request for DataWareHouse.GetSegments
     
    <?xml version="1.0" encoding="UTF-8"?>
    <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://www.omniture.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
     <SOAP-ENV:Header>
       <wsse:Security xmlns:wsse="http://www.omniture.com" wsse:mustUnderstand="1">
         <wsse:UsernameToken wsse:Id="User">
           <wsse:Username>your user name</wsse:Username>
           <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordDigest">your password</wsse:Password>
           <wsse:Nonce>YjRiYmJhZWI5ZTlhZDU3YTY2NDNmM2Zl</wsse:Nonce>
           <wsse:Created>YYYY-01-31T19:26:59Z</wsse:Created>
         </wsse:UsernameToken>
       </wsse:Security>
     </SOAP-ENV:Header>
     <SOAP-ENV:Body>
       <ns1:DataWarehouse.GetSegments>
         <rsid>your report suite ID</rsid>
       </ns1:DataWarehouse.GetSegments>
     </SOAP-ENV:Body>
    </SOAP-ENV:Envelope>
    ```

6.  Click the **Get Response** button to see the XML response as below.

    **Note:** For this demo application, you will see only one segment ID returned by the XML response. In a real application, you might see multiple segment IDs and will need to choose the one with the correct name. Locate the one named Twitter for this example.

    ```
    XML Response for DataWareHouse.GetSegments
     
    <?xml version="1.0" encoding="UTF-8"?>
    <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:tns="http://www.omniture.com/" SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
     <SOAP-ENV:Body>
       <ns1:DataWarehouse.GetSegmentsResponse xmlns:ns1="http://www.omniture.com/">
         <return xsi:type="SOAP-ENC:Array" SOAP-ENC:arrayType="tns:dwsegment[1]">
           <item xsi:type="tns:dwsegment">
             <id xsi:type="xsd:int">your segment ID</id>
             <name xsi:type="xsd:string">Twitter</name>
           </item>
         </return>
       </ns1:DataWarehouse.GetSegmentsResponse>
     </SOAP-ENV:Body>
    </SOAP-ENV:Envelope>
    ```

7.  Use the segment ID that is returned in step 6 to make the next call to the **DataWareHouse.GetSegment** method. The request and response are shown below.

    ```
    XML Request for DataWareHouse.GetSegment
     
    <?xml version="1.0" encoding="UTF-8"?>
    <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://www.omniture.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
     <SOAP-ENV:Header>
       <wsse:Security xmlns:wsse="http://www.omniture.com" wsse:mustUnderstand="1">
         <wsse:UsernameToken wsse:Id="User">
           <wsse:Username>your username</wsse:Username>
           <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordDigest">your password</wsse:Password>
           <wsse:Nonce>ZWIwZWRhMmE2ODI2MGE1ZWEyN2Q4ZTE2</wsse:Nonce>
           <wsse:Created>YYYY-01-31T19:38:38Z</wsse:Created>
         </wsse:UsernameToken>
       </wsse:Security>
     </SOAP-ENV:Header>
     <SOAP-ENV:Body>
       <ns1:DataWarehouse.GetSegment>
         <rsid>your report suite ID</rsid>
         <segment>Retrieved segment ID</segment>
       </ns1:DataWarehouse.GetSegment>
     </SOAP-ENV:Body>
    </SOAP-ENV:Envelope>
    ```

    ```
    XML Response for DataWareHouse.GetSegment
     
    <?xml version="1.0" encoding="UTF-8"?>
    <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:tns="http://www.omniture.com/" SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
     <SOAP-ENV:Body>
       <ns1:DataWarehouse.GetSegmentResponse xmlns:ns1="http://www.omniture.com/">
         <return xsi:type="tns:data_warehouse_segment">
           <name xsi:type="xsd:string">Twitter</name>
           <group_include xsi:type="tns:data_warehouse_segment_group">
             <type xsi:type="xsd:string">ROOT</type>
             <name xsi:type="xsd:string">Include</name>
             <group_operator xsi:type="xsd:string">UNKNOWN</group_operator>
             <rule_operator xsi:type="xsd:string">AND</rule_operator>
             <rule_list xsi:type="SOAP-ENC:Array" SOAP-ENC:arrayType="tns:data_warehouse_segment_rule[0]"/>
             <group_list xsi:type="SOAP-ENC:Array" SOAP-ENC:arrayType="tns:data_warehouse_segment_group[1]">
               <item xsi:type="tns:data_warehouse_segment_group">
                 <type xsi:type="xsd:string">VISITOR</type>
                 <name xsi:type="xsd:string">Visitor</name>
                 <group_operator xsi:type="xsd:string">UNKNOWN</group_operator>
                 <rule_operator xsi:type="xsd:string">AND</rule_operator>
                 <rule_list xsi:type="SOAP-ENC:Array" SOAP-ENC:arrayType="tns:data_warehouse_segment_rule[1]">
                   <item xsi:type="tns:data_warehouse_segment_rule">
                     <operator xsi:type="xsd:string">&gt;</operator>
                     <item xsi:type="xsd:string">evar43</item>
                     <value xsi:type="xsd:string">!</value>
                     <event xsi:type="xsd:int"/>
                   </item>
                 </rule_list>
                 <group_list xsi:type="SOAP-ENC:Array" SOAP-ENC:arrayType="tns:data_warehouse_segment_group[0]"/>
               </item>
             </group_list>
           </group_include>
           <group_exclude xsi:type="tns:data_warehouse_segment_group">
             <type xsi:type="xsd:string">ROOT</type>
             <name xsi:type="xsd:string">Exclude</name>
             <group_operator xsi:type="xsd:string">UNKNOWN</group_operator>
             <rule_operator xsi:type="xsd:string">AND</rule_operator>
             <rule_list xsi:type="SOAP-ENC:Array" SOAP-ENC:arrayType="tns:data_warehouse_segment_rule[0]"/>
             <group_list xsi:type="SOAP-ENC:Array" SOAP-ENC:arrayType="tns:data_warehouse_segment_group[0]"/>
           </group_exclude>
         </return>
       </ns1:DataWarehouse.GetSegmentResponse>
     </SOAP-ENV:Body>
    </SOAP-ENV:Envelope>
    ```


## Clean up standard XML elements

The XML generated by API Explorer has some extraneous elements that are not needed within the script. These elements are ones with no values associated with them or empty parameters. You need to clean up the XML within the Body tags to remove all such elements.

1.  Delete all references to **xsi:type** classifications.
2.  Next, delete all references to **xsi:nil**.
3.  Next, delete the **ns1** prefix on the DataWarehouse.GetSegmentResponse element.
4.  Next, delete the reference to the **arrayType** parameter.
5.  Next, delete the reference to **soapenc**.
6.  Also, delete all reference to **tnc** and any parameters with no value.
7.  Update the element **DataWarehouse.GetSegmentResponse** to **segment** to define the segment that you retrieved.
8.  Wrap the complete XML code with the opening and closing tags for **DataWarehouse.CreateSegment**.
9.  Add the **rsid** tag to specify the report suite for this segment.

    You should be left with the following XML code.

    ```
    Cleanup for DataWareHouse.GetSegment
     
    <DataWarehouse.CreateSegment>
       <rsid>your report suite ID</rsid>
        <segment>
           <name>Twitter</name>
           <group_include>
             <type>ROOT</type>
             <name>Include</name>
             <group_operator>UNKNOWN</group_operator>
             <rule_operator>AND</rule_operator>
             <rule_list/>
             <group_list>
               <item>
                 <type>VISITOR</type>
                 <name>Visitor</name>
                 <group_operator>UNKNOWN</group_operator>
                 <rule_operator>AND</rule_operator>
                 <rule_list>
                   <item>
                     <operator>&gt;</operator>
                     <item >evar43</item>
                     <value>!</value>
                </item>
            </rule_list>
            <group_list/>
               </item>
             </group_list>
           </group_include>
           <group_exclude>
             <type>ROOT</type>
             <name>Exclude</name>
             <group_operator>UNKNOWN</group_operator>
             <rule_operator>AND</rule_operator>
             <rule_list/>
             <group_list/>
           </group_exclude>
         </return>
       </segment>
    </DataWarehouse.CreateSegment>
    ```


## Clean up integration-specific XML elements

Since Partners might use the scripts for multiple Customers and report suites, any references to element values that you usually hard code must be replaced with references to variables from the Partner integration.

**Note:** This step assumes that you have worked through tutorials 1-3 of this series. If you have not, then you must at least work through [Step 2: Define the Product Variable](c_Define_the_Product_Variable.md#) section of tutorial 2 ([2. Partner Application Configuration Tutorial](c_Partner_Application_Configuration_for_Data_Connectors_Tutorial.md#)).

1.  In article 2, mentioned in the note above, you create the **twitter_handle** variable while you perform the variable mappings for the Integration Wizard. In this step, replace the **eVar43** (the number might be different for your integration) value in the **item** element with the **twitter_handle** to associate the specific partner integration variable in the mapping. Use the **replaceWith** attribute with a value of **mapping** to define a variable mapping within the Integration Wizard.

    **Note:** You can think of this variable mapping as defining the key in the classification.

2.  Anywhere the report suite ID (**RSID**) is referenced in the code, you must replace it with **<rsid replaceWith="client">RSID</item>**. This will dynamically replace the value with each Customer's report suite ID.

    ```
    <DataWarehouse.CreateSegment>
          <rsid replaceWith="client">RSID</rsid>
          <segment>
          <name>Twitter</name>
          <group_include>
         <type>ROOT</type>
         <name>Include</name>
         <group_operator>UNKNOWN</group_operator>
         <rule_operator>AND</rule_operator>
         <rule_list/>
         <group_list>
                <item>
                <type>VISITOR</type>
                <name>Visitor</name>
                <group_operator>UNKNOWN</group_operator>
                <rule_operator>AND</rule_operator>
                <rule_list>
               <item>
            <operator>&gt;</operator>
                         <item replaceWith="mapping">twitter_handle</item>
             <value>!</value>
                      <event/>
               </item>
                </rule_list>
                <group_list/>
                 </item>
         </group_list>
          </group_include>
          <group_exclude>
         <type>ROOT</type>
         <name>Exclude</name>
         <group_operator>UNKNOWN</group_operator>
         <rule_operator>AND</rule_operator>
         <rule_list/>
         <group_list/>
          </group_exclude>
          </segment>
    </DataWarehouse.CreateSegment>
    ```


## The final Product Builder Create script

The cleaned up XML file is your Product Builder Create script.

Save this XML in a file on your computer named **DataWarehouseProductScript.txt**

```
<genesis>
   <DataWarehouse.CreateSegment>
      <rsid replaceWith="client">RSID</rsid>
      <segment>
      <name>Twitter</name>
      <group_include>
     <type>ROOT</type>
     <name>Include</name>
     <group_operator>UNKNOWN</group_operator>
     <rule_operator>AND</rule_operator>
     <rule_list/>
     <group_list>
            <item>
            <type>VISITOR</type>
            <name>Visitor</name>
            <group_operator>UNKNOWN</group_operator>
            <rule_operator>AND</rule_operator>
            <rule_list>
           <item>
                 <operator>&gt;</operator>
                  <item replaceWith="mapping">twitter_handle</item>
                  <value>!</value>
                  <event/>
           </item>
            </rule_list>
            <group_list/>
             </item>
     </group_list>
      </group_include>
      <group_exclude>
     <type>ROOT</type>
     <name>Exclude</name>
     <group_operator>UNKNOWN</group_operator>
     <rule_operator>AND</rule_operator>
     <rule_list/>
     <group_list/>
      </group_exclude>
      </segment>
   </DataWarehouse.CreateSegment>
</genesis>
```

**Parent topic:** [7. Data Warehouse Tutorial](c_Create_a_Data_Warehouse_Report_using_the_Partner_API.md)


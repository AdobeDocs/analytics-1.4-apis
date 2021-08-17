# Step 5: Cleanup XML for Standard Elements

 

The code you generated in the previous sections is syntactically valid, but needs to be modified for use in the Integration Wizard that you will create in the next tutorial, [2. Partner Application Configuration Tutorial](c_Partner_Application_Configuration_for_Data_Connectors_Tutorial.md#). In this section, you will focus on converting the XML code and removing extraneous elements, including parameters with no values.

1.  Copy the code in API Explorer and paste it to a text file on your computer.
2.  Name the file **followers\_per\_twitter\_handle**. After you are done with the modifications, you will copy the final code into the Integration Wizard.
3.  Delete everything outside of \(and including\) the soap **Body** element and surround the XML with **<genesis\>** tags.

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    ...
      <SOAP-ENV:Body>
    <genesis>
     
    <ns1:Report.QueueRanked>
          <reportDescription href="#id1"/>
        </ns1:Report.QueueRanked>
     
    <types:ReportDescription id="id1" xsi:type="types:ReportDescription">
          <reportSuiteID xsi:type="xsd:string">
                jjesquire4
          </reportSuiteID>
          <date xsi:nil="true" />
                <dateFrom xsi:type="xsd:string">
                      2011-01-23
                </dateFrom>
                <dateTo xsi:type="xsd:string">
                      2011-01-23
                </dateTo>
          <dateGranularity xsi:nil="true" />
          <metrics href="#id2" />
                <sortBy xsi:type="xsd:string">
                      event3
                </sortBy>
                <elements href="#id3" />
                <locale xsi:type="tns:reportDefinitionLocale">
                      en_US
                </locale>
                <Id xsi:type="xsd:string">TCIBHYJISHBIZWVNYKSDD</Id>
                <Type xsi:type="tns:reportType">ranked</Type>
    </types:ReportDescription>
     
    <soapenc:Array id="id2" soapenc:arrayType="tns:reportDefinitionMetric[1]">
    <Item href="#id4" />
    </soapenc:Array>
     
    <soapenc:Array id="id3" soapenc:arrayType="tns:reportDefinitionElement[1]">
    <Item href="#id5" />
    </soapenc:Array>
     
    <tns:reportDefinitionMetric id="id4" xsi:type="tns:reportDefinitionMetric">
    <id xsi:type="xsd:string">
        event3
    </id>
    <segment xsi:nil="true" />
    <segmentID xsi:nil="true" />
    </tns:reportDefinitionMetric>
     
    <tns:reportDefinitionElement id="id5" xsi:type="tns:reportDefinitionElement">
    <id xsi:type="xsd:string">
       evar44
    </id>
    <classification xsi:type="xsd:string" />
    <top xsi:type="xsd:int">
    10
    </top>
    <startingWith xsi:type="xsd:int">
    1
    </startingWith>
    <search xsi:nil="true" />
    <selected xsi:nil="true" />
    <expanded xsi:nil="true" />
    </tns:reportDefinitionElement>
     
    </genesis>
    </SOAP-ENV:Body>
    </SOAP-ENV:Envelope>
    ```

4.  Next, remove all type declarations from the call, instances of **ns1**, the locale, the **Id** in the ReportDescription, the **soapenc** and **tns** reference and any parameters with no value. The runtime only interprets methods and parameters without the declarative SOAP structure.

    ```
    <genesis>
     
    <Report.QueueRanked>
          <reportDescription href="#id1"/>
     </Report.QueueRanked>
     
    <ReportDescription id="id1" >
          <reportSuiteID>
                jjesquire4
          </reportSuiteID>
          <date/>
                <dateFrom>
                      2011-01-23
                </dateFrom>
                <dateTo>
                      2011-01-23
                </dateTo>
          <dateGranularity />
          <metrics href="#id2" />
                <sortBy>
                      event3
                </sortBy>
                <elements href="#id3" />
                <Type>ranked</Type>
    </ReportDescription>
     
    <soapenc:Array id="id2" >
    <Item href="#id4" />
    </soapenc:Array>
     
    <soapenc:Array id="id3" >
    <Item href="#id5" />
    </soapenc:Array>
     
    <tns:reportDefinitionMetric id="id4" >
    <id>
       event3
    </id>
    </tns:reportDefinitionMetric>
     
    <reportDefinitionElement id="id5">
    <id>
    evar44
          </id>
    <classification/>
    <top>
    10
    </top>
    <startingWith>
    1
    </startingWith>
     
    </reportDefinitionElement>
     
    </genesis>
    ```

5.  Then remove all **href**'s and embed the referenced code directly in each element.

    ```
    <genesis>
     
    <Report.QueueRanked>
          <ReportDescription>
         
          <reportSuiteID>
              jjesquire4
          </reportSuiteID>
         
          <dateFrom>
              2010-12-20
          </dateFrom>
         
          <dateTo>
              2010-12-20
          </dateTo>
         
         <metrics>
             <Item/>
     
        <reportDefinitionMetric>
          <id>
              event3
          </id>
        </reportDefinitionMetric>
       
        <sortBy>
             event3
        </sortBy>
        <Type>
             ranked
        </Type>
     
        <reportDefinitionElement>
          <id>
              evar44
          </id>
          <top>
              10
          </top>
          <startingWith>
              1
          </startingWith>
        </reportDefinitionElement>
     
     </genesis>
    ```


**Parent topic:** [Script for Defining Report Requests](c_define_report_requests.md)


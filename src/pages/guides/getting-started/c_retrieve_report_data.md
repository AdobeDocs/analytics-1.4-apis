# Script for Retrieving Report Data

 

Now you will create an **On Demand** script to retrieve the report data.

1.  In **API Explorer**, select the **Report.GetReport** method from the dropdown list.
2.  Select everything between the **body** tags of the request and copy it.

    ```
    <ns1:Report.GetReport>
          <reportID xsi:nil="true"/>
    </ns1:Report.GetReport>
    ```

3.  Paste it into a new text file on your computer and name it **getReportOD**.
4.  Clean up the XML code by removing the namespace tag \(**ns1**\) and the **xsi** parameter.
5.  Wrap the XML within **genesis** tags and add the **REPORT\_ID** variable to reference the Partner integration.

```
Wizard script name: getReportOD
 
<genesis>
  <Report.GetReport>
      <reportID replaceWith="param">REPORT_ID</reportID>
  </Report.GetReport>
</genesis>
```

This Retrieve Data On Demand script is now complete and you will use it in the next tutorial, [2. Partner Application Configuration Tutorial](c_Partner_Application_Configuration_for_Data_Connectors_Tutorial.md#), when you create the Integration Wizard.

**Parent topic:** [1. On Demand Scripts Tutorial](c_scripting.md)


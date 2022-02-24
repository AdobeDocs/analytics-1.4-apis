# Script for Checking Report Status

 

Next you will create an **On Demand** script to check the status of your report request.

1.  In **API Explorer**, select the **Report.GetStatus** method from the dropdown list.
2.  Select everything between the **body** tags of the request and copy it.

    ```
    <ns1:Report.GetStatus>
          <reportID xsi:nil="true"/>
    </ns1:Report.GetStatus>
    ```

3.  Paste it into a new text file on your computer and name it **getReportStatusOD**.
4.  Clean up the XML code by removing the namespace tag (**ns1**) and the **xsi** parameter.
5.  Wrap the XML within **genesis** tags and add the **REPORT_ID** variable to reference the Partner integration.

```

Wizard script name: getReportStatusOD
 
<genesis>
  <Report.GetStatus>
      <reportID replaceWith="param">REPORT_ID</reportID>
  </Report.GetStatus>
</genesis>
```

This Check Status On Demand script is now complete and you will use it in the next tutorial, [2. Partner Application Configuration Tutorial](c_Partner_Application_Configuration_for_Data_Connectors_Tutorial.md#), when you create the Integration Wizard.

**Parent topic:** [1. On Demand Scripts Tutorial](c_scripting.md)


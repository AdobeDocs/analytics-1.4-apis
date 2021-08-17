# Step 2: Create an Edit Product Builder Script

 

Customers can also edit the Integration Wizard after it has run. If they update any variable mappings, then the wizard will execute the Product Builder Edit script. You create the Edit script by duplicating the Create script and removing any code that should not run more than once. If the Edit script run, the existing classifications will be updated with the new variable mappings.

In this section, you will create an Edit script by simply duplicating the Create script without any changes. For this JJ. Esquire demo application, any edit action will be exactly the same as a create action.

**Edit Script** 

```
<genesis>
      <ReportSuite.SaveClassifications>
      <c_view replaceWith="mapping">twitter_handle</c_view>
      <name>Gender</name>
      <rsid_list>
            <item replaceWith="client">RSID</item>
      </rsid_list>
      </ReportSuite.SaveClassifications>
<ReportSuite.SaveClassifications>
      <c_view replaceWith="mapping">twitter_handle</c_view>
      <name>Age</name>
      <rsid_list>
            <item replaceWith="client">RSID</item>
      </rsid_list>
      </ReportSuite.SaveClassifications>
<ReportSuite.SaveClassifications>
      <c_view replaceWith="mapping">twitter_handle</c_view>
      <name>Region</name>
      <rsid_list>
            <item replaceWith="client">RSID</item>
      </rsid_list>
      </ReportSuite.SaveClassifications>
</genesis>
```

1.  Save the XML in a file on your computer named **ClassificationEditProductBuilderScript.txt**.

**Parent topic:** [5. Classify Partner Data Tutorial](c_Classify_Partner_data_using_the_Partner_API.md)


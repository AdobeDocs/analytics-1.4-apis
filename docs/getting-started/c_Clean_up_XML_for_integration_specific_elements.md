# Step 6: Clean up XML for Integration Specific Elements

 

Since Partners have to use this code for multiple different Customers, report suites, and variable mappings, several of these variables cannot be hard coded. You must replace **eVar**, **prop**, **custom event**, **date**, and **report suite** values with references to variables from the Partner integration.

**Note:** The variable names that you use in this XML code must match the variable names that you use in the Integration Wizard.

In each of the variable definitions, you will use the **replaceWith** attribute with a value of **param** or **mapping** to define a Partner.Runscript call at runtime or a variable mapping within the Integration wizard.

1.  Set the **dateFrom** and **dateTo** XML elements to the variables **myDateFrom** and **myDateTo**, respectively. Use the **replaceWith** attribute with a value of **param**.
2.  Replace **eVar44** with the reference to **twitter\_handle** and use the **replaceWith** attribute with a value of **mapping**.
3.  Replace the **event3** with the reference to **twitter\_followers** and use the **replaceWith** attribute with a value of **mapping**.

```
Wizard script name: followers_per_twitter_handle
 
<genesis>
  <Report.QueueRanked>
      <reportDescription>
      <reportSuiteID replaceWith="client">RSID</reportSuiteID>
      <dateFrom replaceWith="param">myDateFrom</dateFrom>
      <dateTo replaceWith="param">myDateTo</dateTo>
      <Type>ranked</Type>
      <sortBy replaceWith="mapping">twitter_followers </sortBy>
      <metrics>
        <item>
                 <id replaceWith="mapping">twitter_followers </id>
        </item>
      </metrics>
            <elements>
      <Item>
            <id replaceWith="mapping">twitter_handle</id>
            <top>10</top>
            <startingWith>1</startingWith>
      </Item>
      </elements>
    </reportDescription>
  </Report.QueueRanked>
</genesis>
```

This **Create Request On Demand** script is now complete and you will use it in the next tutorial, **[2. Partner Application Configuration Tutorial](c_Partner_Application_Configuration_for_Data_Connectors_Tutorial.md#)**, when you create the Integration Wizard.

**Parent topic:** [Script for Defining Report Requests](c_define_report_requests.md)


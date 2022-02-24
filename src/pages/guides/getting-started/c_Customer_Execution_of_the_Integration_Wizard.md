# Step 4: Customer Execution of the Integration Wizard

 

As a Partner, you cannot perform an action on the Customer's data unless the Customer has integrated your product into their account. When the Customer runs your Integration Wizard, it will perform all of the steps you have defined in it, including running the Product Builder scripts to create the classifications in their report suite.

The third tutorial of the series, [3. Integrate Partner Data Tutorial](c_Integrate_Data_Connectors_Partner_Data_into_Customer_Application.md#), walks you through the steps of how the Customer executes this Integration Wizard to enable it in the Adobe Experience Cloud. Once it has been executed by the Customer, the Adobe Engineering team takes the information from the active integration and writes some new JavaScript code, which the Customer then integrates in their application.

 **If you have previously worked through that tutorial,** then you can simply follow the steps in that article to run the Integration Wizard again with the new Product Builder script ([Step 1: Active the Integration for your Analytics Report Suite](c_Active_the_Integration_for_your_Analytics_Report_Suite.md#)). However, you must additionally map your segment definition in the wizard using the provided steps below.

 **If you have *not* previously worked through that tutorial,** then you must run through the entire tutorial ([3. Integrate Partner Data Tutorial](c_Integrate_Data_Connectors_Partner_Data_into_Customer_Application.md#)). However, you must additionally map your segment definition in the wizard using the provided steps below.

## Map the segment definition in the Integration Wizard

The following steps will register the Product Builder script that creates the segment definition in the Customer's report suite. This will allow you to run the Data Warehouse report. You will do this right after the **Designate eVars** screen and before the **Designate Events**screen.

1.  On the **Integration Segments** screen, select the **Client-Defined Report Suite-Level Segment** named **Twitter** that you created earlier.

Complete the Integration Wizard as described in the [3. Integrate Partner Data Tutorial](c_Integrate_Data_Connectors_Partner_Data_into_Customer_Application.md#) tutorial and return to this point.

**Parent topic:** [7. Data Warehouse Tutorial](c_Create_a_Data_Warehouse_Report_using_the_Partner_API.md)


# Create a Data Warehouse Report in the UI

 

To create a segment definition of first time visitors for the JJ. Esquire web site, use the Segment Builder:

1.   Log into the Adobe Experience Cloud and open **data warehouse**. 

    **Note:** If you do not see the **data warehouse** page, you do not have Data Warehouse enabled. Speak to your Adobe Experience Cloud administrator.

2.   Change the **Reporting date** to match the data in the system for which you will pull reports. 
3.   Click **Manage Segments** under **Build Report/Available Segments**. 
4.   Click **Add**. 
5.   Set the **Title** value to **FirstTimeVisitors with Call Center Click**. This defines the name of the segment. 
6.   In the **Definitions** panel, select **Show \> Visit**. This adds Visit as a container. 
7.   Click **Show Events** and drag **Visits** to the Definitions panel. 
8.   Select **equals** and enter 1 in the **Enter Value** field. 
9.   Drag **Clicks** from the **Events** panel on the left to the **Definitions** canvas and click **Save**. This adds event 1 as a metric. Now you can reference this segment when running a Data Warehouse or a Reports & Analytics or Ad Hoc Analysis report.

**Parent topic:** [Data Warehouse API Tutorial](c_data_warehouse_API_tutorial.md)


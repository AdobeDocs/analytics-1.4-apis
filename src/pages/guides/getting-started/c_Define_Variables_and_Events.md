# Step 1: Define Variables and Events

 

Remember that your goal is to create a report that shows the number of followers for each Twitter handle. You will store the Twitter handle in a Analytics custom conversion variable, or eVar, and the number of followers for that Twitter handle in a custom event.

**Note:** To learn more about custom conversion variables and custom events, see the [What are the available Analytics variables and events?](c_What_are_the_available_Analytics_variables_and_events.md#) 

First, create the custom conversion variable for the Twitter handle in your report suite:

1.  Log into the Adobe Online Experience Cloud and select **Analytics** \> **Admin** \> **Report Suites**.
2.  Select **Edit Settings \> Conversion \> Conversion Variables**.
3.  Select any eVar that is not being used.
4.  Name the eVar **Twitter handle**, leaving the default Type as **Text String**.

Next, create the custom event to hold the follower count:

1.  Still in the Adobe Report Suite Manager, select **Edit Settings \> Conversion \> Success events.** 
2.  Select any event not being used currently to create a new event.
3.  Name the event **Twitter followers**, leaving the default Type as Counter.

**Parent topic:** [Script for Defining Report Requests](c_define_report_requests.md)


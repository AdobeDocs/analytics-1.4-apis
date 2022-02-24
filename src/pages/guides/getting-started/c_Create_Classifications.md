# Step 2: Create Classifications

 

There are two ways to create a classification in your report suite:

Visually, using the Analytics Report Suite Manager in the Adobe Experience Cloud Programmatically using the Admin API

The Admin API is outside the scope of this article. To learn more about creating classifications using the Admin API see the [classifications documentation](../admin-api/methods/report_suite/r_GetClassifications.md).

In this JJ. Esquire demo application, you will create brand and category classifications for the Product report element.

1.  Navigate to **Analytics** > **Admin** > **Report Suites**.
2.  Select your report suite and click on **Edit Settings** > **Conversion** > **Conversion Classifications**.
3.  From the **Classification Type** drop-down box, select **Product**.
4.  Highlight the **Product** classification and select **Add Classification**.
5.  In the window that appears, set the **Type** to **Text**.
6.  Set the **Text Classification** field to **Brand** as shown in Figure 7.
7.  Click **Save**.
8.  Repeat the procedure to create the Category classification.

Once you have created the classifications, you can see them in the Adobe Experience Cloud. Since the JJ. Esquire demo application for this article creates classifications for Products, you can see the new classifications by selecting **Analytics** > **Reports & Analytics** > **View All Reports** > **Products** > **Products**.

**Parent topic:** [SAINT API Tutorial](c_SAINT_API_Overview.md)


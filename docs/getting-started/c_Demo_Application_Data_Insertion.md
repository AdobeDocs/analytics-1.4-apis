# Demo Application

 

All of the articles and tutorials in this series are based on Adobe’s JJ. Esquire demo application \(www.jjesquire.com\). An earlier article of this series, Collect visitor analytics using Analytics JavaScript Tagging tutorial, walks you through the steps of adding Analytics JavaScript Tagging code to four pages in the simplified JJ. Esquire demo application.

In this article, you will focus on the analytics data for the Product Detail page.

![](graphics/get-started-data-insertion-api-figure-4.png)

The Product Detail page contains page-specific data, which is sent to the Adobe Data Collection Layer each time this page is viewed. It also contains custom link data that is collected when a visitor clicks the Purchase by Phone link.

In this article, you will learn how to use a server-side language \(Java or PHP\) to set the data properties you want to collect and then send it to the Data Collection Layer using the Data Insertion API via an HTTP POST request. Both the POST request and the response from the Adobe Data Collection Layer will use XML-formatted data.

**Parent topic:** [Data Insertion API Tutorial](c_Data_Insertion_Overview.md)


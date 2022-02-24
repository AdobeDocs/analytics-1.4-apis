# Submitting Data to the Server Using HTTP

 

There are two mechanisms for submitting data to the Adobe Data Collection Layer using the Data Insertion API: HTTP POST and HTTP GET. As experienced developers you should know that GET passes data on a query string while POST sends data in the body of the request. This article focuses on the POST mechanism.

The Data Insertion API supports an encrypted connection and uses the standard SSL port (443) for this transmission.

**Note:** The Data Insertion API does not send response messages for HTTP GET requests. Bad requests will fail silently, which is why HTTP POST is often the preferred method.

**Parent topic:** [Data Insertion API Tutorial](c_Data_Insertion_Overview.md)


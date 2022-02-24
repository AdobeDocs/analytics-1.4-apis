# Error Handling in your Application

 

When developing applications that make requests to web services, it is essential that your application contain logic to properly handle errors as they are encountered. The following list contains several best practices you can follow to handle errors in your web services application:

- When using the data insertion API, you should check for a failed connection before you upload data, and include logic to re-establish the connection as necessary.
- If your application receives general network errors (for example, unable to reach host or request timeouts), you can often re-try the operation after a short delay and it will complete successfully. Adobe system status can be checked at [status.adobe.com](http://status.adobe.com).
- If you receive report invalid or permissions errors, make sure you have a way to log or display these errors so the issue can be corrected.
- Add logic to check for [Site](c_Site_Maintenence.md#) and [Company](c_Company_Maintenance.md#) maintenance responses.


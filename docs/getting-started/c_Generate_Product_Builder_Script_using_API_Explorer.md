# Step 1: Generate Product Builder Script using API Explorer

 

For this demo application, you will use the API Explorer to create a data source. This data source will act as a temporary queue for the data you want to import into the JJ. Esquire report suite. Specifically, you will import the Twitter handles and the number of followers from the brick-and-mortar store's winter sales revenue.

The first API method call you must make is to create a data source.

1.  In the Adobe Developer Connection, select **Get Started \> API Explorer** to access API Explorer.
2.  In the API Explorer tool, enter the **Username** and **Secret** for your account.

    **Note:** You can get your username and secret from logging into the Adobe Experience Cloud and clicking on your user name link to the left of the **Sign Out** link. The Account Information screen will display your Username and Secret.

3.  From the **Environment** drop down list, choose **Sandbox**.
4.  Select the method **DataSource\_SetupGeneric** from the drop down list.
5.  Modify the XML generated in the **Request** box to define a data source name and your email address as shown in the following code.

    ```
    
    <?xml version="1.0" encoding="UTF-8"?>
    <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" ….
      <SOAP-ENV:Body>
        <ns1:DataSource.SetupGeneric>
          <dataSourceID xsi:nil="true"/>
          <dataSourceSettings xsi:nil="true" xsi:type="ns1:ds_generic_settings">
            <dataSourceName>DataSourceForTwitterData</dataSourceName>
            <dataSourceEmail>yourname@yourdomain.com</dataSourceEmail>
          </dataSourceSettings>
         <dataSourceType xsi:nil="true"/>
          <reportSuiteID xsi:nil="true"/>
        </ns1:DataSource.SetupGeneric>
      </SOAP-ENV:Body>
    </SOAP-ENV:Envelope>
    ```

6.  Enter the value for the data source type as **12**. This numeric value identifies that you are creating a generic data source.

    **Note:** Refer to the Data Sources documentation for more information on data source types.

    ```
    
    <?xml version="1.0" encoding="UTF-8"?>
    <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" ….
      <SOAP-ENV:Body>
        <ns1:DataSource.SetupGeneric>
          <dataSourceID xsi:nil="true"/>
          <dataSourceSettings xsi:nil="true" xsi:type="ns1:ds_generic_settings">
            <dataSourceName>DataSourceForTwitterData</dataSourceName>
            <dataSourceEmail>yourname@yourdomain.com</dataSourceEmail>
          </dataSourceSettings>
          <dataSourceType>12</dataSourceType>
           <reportSuiteID xsi:nil="true"/>
        </ns1:DataSource.SetupGeneric>
      </SOAP-ENV:Body>
    </SOAP-ENV:Envelope>
    ```

7.  Enter any report suite ID.

    **Note:** Your data connectors product must refer to report suite IDs dynamically because multiple customers can integrate your product. In the next step, you will learn how to reference a dynamic report suite ID.

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" ….
      <SOAP-ENV:Body>
        <ns1:DataSource.SetupGeneric>
          <dataSourceID xsi:nil="true"/>
          <dataSourceSettings xsi:nil="true" xsi:type="ns1:ds_generic_settings">
            <dataSourceName>DataSourceForTwitterData</dataSourceName>
            <dataSourceEmail>yourname@yourdomain.com</dataSourceEmail>
          </dataSourceSettings>
          <dataSourceType>12</dataSourceType>
          <reportSuiteID>your report suite ID</reportSuiteID>
        </ns1:DataSource.SetupGeneric>
      </SOAP-ENV:Body>
    </SOAP-ENV:Envelope>
    ```

8.  Click on the **Get Response** button to generate the XML response for the API call.

Usually, you will clean up the XML response for standard elements and integration-specific needs before you can use the script. But since the code for this particular API method does not change across partners, we have included the cleaned up code for convenience.

**Note:** The report suite ID has been replaced with the RSID variable to dynamically reference your product Customer's report suite. This is also true for the data source name and the email address.

Save the following XML in a file on your computer named **DataSourceProductScript.txt**.

```

<genesis>
      <DataSource.SetupGeneric>
      <dataSourceID/>
      <dataSourceSettings>
            <dataSourceName replaceWith="client">CLIENT_NAME</dataSourceName>
            <dataSourceEmail replaceWith="client">EMAIL</dataSourceEmail>
      </dataSourceSettings>
      <dataSourceType>12</dataSourceType>
      <reportSuiteID replaceWith="client">RSID</reportSuiteID>
      </DataSource.SetupGeneric>
</genesis>
```

**Parent topic:** [6. Import Bulk Data Tutorial](c_Import_bulk_Data_using_the_Partner_API.md)


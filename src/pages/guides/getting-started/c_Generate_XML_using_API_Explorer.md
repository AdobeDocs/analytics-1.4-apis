# Step 3: Generate XML using API Explorer

 

The code you generated in the last step for the Report.QueueRanked API method call is specific to your data connectors Twitter application and will pass the Twitter handle and follower data. In this section, you will use the API Explorer to create a wrapper for the same API method.

1.  Launch API Explorer and enter your user name and shared secret.
2.  Choose **Sandbox** as the **Environment** from the dropdown.
3.  In the **Method** dropdown, select the **Report.QueueRanked** method.
4.  Click the **Get Response** button. You should see the following XML code returned.

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://www.omniture.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
      <SOAP-ENV:Header>
        <wsse:Security xmlns:wsse="http://www.omniture.com" wsse:mustUnderstand="1">
          <wsse:UsernameToken wsse:Id="User">
            <wsse:Username><your user name></wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordDigest"><your password></wsse:Password>
            <wsse:Nonce>OTgwNGQxZTQwMjc5YjkwYjhjNDNlNWE1</wsse:Nonce>
            <wsse:Created>YYYY-01-27T18:58:24Z</wsse:Created>
          </wsse:UsernameToken>
        </wsse:Security>
      </SOAP-ENV:Header>
      <SOAP-ENV:Body>
        <ns1:Report.QueueRanked>
          <reportDescription xsi:nil="true" xsi:type="ns1:reportDescription"/>
          </ns1:Report.QueueRanked>
      </SOAP-ENV:Body>
    </SOAP-ENV:Envelope>
    ```


**Parent topic:** [Script for Defining Report Requests](c_define_report_requests.md)


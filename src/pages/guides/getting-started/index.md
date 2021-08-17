# Getting Started

**Note:** If you are creating a new integration you should use the new 2.0 version of the APIs. 
[2.0 API Documentation](/analytics-apis/docs/2.0/)

If you must use the 1.4 APIs for integrations that are not yet supported by the 2.0 APIs you should use follow this guide to call the 1.4 REST APIs. SOAP support will be removed in the near future as well as legacy OAuth Authentication. WSSE authentication will continue to be supported for existing users, but is discouraged for new integrations The 1.4 APIs can be called with an Access Token created from the 2.0 API Authentication methods. This guide will include an example of how to make an API call to the 1.4 REST APIs using a 2.0 API IMS Access Token.


## Create The Integration

You first need to setup an OAuth or JWT client. You should use the 2.0 API Getting Started documentation to decide
if you need an OAuth or JWT client. 
See [2.0 API Getting Started Documentation](/analytics-apis/docs/2.0/)


## Obtain An Access Token

Once you have created your client follow the instructions in the 2.0 APIs to obtain an Access Token. 
Whether you are using JWT or OAuth you will end up with an Access Token after completing the authentication.
The token will be a very long string with 3 sections that are `.` (period) delimited. Below is an example with the middle of 
each section removed.

**Example Token:** 
```
eyJ4NX*****TYifQ.eyJpZCI6Ij*****9iYWxfY29uZ.NXYH-g4kPI*****TE5mOiT7g
```

## Call the 1.4 REST API

After you have generated an Access Token you can use it in the `Authorization` header to call the 1.4 APIs.
The following is an example cURL request to get the report suites for your Analytics Company:

```bash
curl -X POST \
  'https://api.omniture.com/admin/1.4/rest/?method=Company.GetReportSuites' \
  -H 'Accept: */*' \
  -H 'Authorization: Bearer ACCESS_TOKEN_GOES_HERE'
```

If you have more than one Analytics Company you can specify which company to use in your API request by using 
the `X-ADOBE-DMA-COMPANY` header. See the following example:

```bash
curl -X POST \
  'https://api.omniture.com/admin/1.4/rest/?method=Company.GetReportSuites' \
  -H 'Accept: */*' \
  -H 'Authorization: Bearer ACCESS_TOKEN_GOES_HERE' \
  -H 'X-ADOBE-DMA-COMPANY: Analytics Company Name'
```

## Reference

For information about calling other 1.4 APIs see the Swagger documentation. 
[1.4 REST API Swagger Documentation](../../api.md)

You can also use Postman to make API calls. The following guide has instructions on how to use Postman for
making 2.0 API calls. You would simply need to replace the host you are calling and call 
`https://api.omniture.com/admin/1.4/rest` instead of `https://analytics.adobe.io/api`. You also need to use
the HTTP **POST** method for all 1.4 API calls.
[Using Postman to make API calls](/analytics-apis/docs/2.0/)

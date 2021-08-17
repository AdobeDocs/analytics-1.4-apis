# Tips for using 1.4 API Required Parameters

*Note: It is strongly recommended to use Adobe Analytics 2.0 APIs whenever possible to simplify parameter usage.*

When making calls to endpoints of 1.4 Analytics APIs, consider the following tips for determining required parameters:

-   Refer to 1.4 API parameter documentation.
-   Refer to error descriptions in responses.
-   Review your data structure.
-   Use the **Validate** method.


## Refer to 1.4 parameters documentation

1.  Refer to the [1.4 API Swagger UI](../api.md) for indications of required parameters with methods and models.

2.  The conventional 1.4 API documentation also often indicates if a parameter is _required_ or _optional_ in its description, as in the case of the [prop data type](admin-api/data_types/r_prop.md).

## Refer to error descriptions in responses

If a required parameter is missing, an error message appears in the response. For example, the following request results in an error message indicating a missing parameter:

```
    curl -X POST "https://api.omniture.com/admin/1.4/rest/?method=Company.GetTrackingServer" -H "accept: application/json" -H "Content-Type: application/json" -d "{ \"rsid\": \"string\"}"
```

```
    {
        "error": "Bad Request",
        "error_description": "Report suite is a required parameter",
        "error_uri": null
    }
```

You can also refer to [Analytics Report Error Codes](reporting-api/errors.md) to help troubleshoot parameter error messages.

## Review your data structure

 Whether a parameter is _required_ or _optional_ often depends on your data structure. Different data structures require different parameters when making calls. For example, if you consider the `reportDescription` type, some data structure parameters are optional, but may be required if certain other optional parameters are used. Because you understand your data structure best, you can often determine if a parameter is required by reviewing its chain of data.

## Use the Validate method

Although the **Validate** method does not specifically identify parameter errors, it can help determine if a request is valid before generating an entire report. If your request is determined invalid by this method, one of the possible causes may be a missing or incorrectly specified parameter. Refer to the [Validate method documentation](reporting-api/methods/r_Validiate.md) for more information.

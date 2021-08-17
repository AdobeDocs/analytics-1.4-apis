# Authenticate using an Access Token

You can provide the access token in the HTTP header, post body, or query string of the request.

## Authorization HTTP Header

```
GET /admin/1.3/rest/?method=Company.GetReportSuites HTTP/1.1
Host: api.omniture.com
Content-Type: application/json
Authorization: Bearer 09c52a854736ad5c9113bf105d5f634d9979d303...
```

## Post Body

```
POST /admin/1.3/rest/?method=Company.GetReportSuites HTTP/1.1
Host: api.omniture.com
Content-Type: application/json
 
{ "access_token":"09c52a854736ad5c9113bf105d5f634d9979d303..." }
```

## Query String

```
https://api.omniture.com/admin/1.3/rest/?method=Company.GetReportSuites&access_token=09c52a854736ad5c9113bf105d5f634d9979d303...
```

**Parent topic:** [OAuth 2 Authentication](auth_overview.md)


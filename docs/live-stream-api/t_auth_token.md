# Sample Apps

The Live Stream sample app is a quick way to get started using Analytics Live Stream. The sample app is available to beta customers.

Analytics Live Stream uses [OAuth2 authentication](https://marketing.adobe.com/developer/documentation/authentication-1/auth-overview-1). The sample app can generate an authentication token for you and connect to Analytics Live Stream.

You need to following to run the sample app:

-   Stream URL - provided by Adobe
-   token Api Host URL - this is https://api.omniture.com/token for all customers
-   application client\_id - generated when you register you app
-   application secret - generated when you register your app
-   adobe ID
-   adobe ID password

You can also connect using a curl command, similar to the following:

```
curl --location --compressed --header “Authorization: Bearer [ACCESS_TOKEN]” [STREAM_URL]
```


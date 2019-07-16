# Sample Apps

The Live Stream app is a quick way to get started using Analytics Live Stream.

Analytics Live Stream uses [OAuth2 authentication](https://github.com/Adobe-Experience-Cloud/analytics-1.4-apis/blob/master/docs/authentication/index.md). The app can generate an authentication token for you and connect to Analytics Live Stream.

To run Live Stream and the app, you will need to purchase the feature and complete [some setup](https://github.com/AdobeDocs/analytics-1.4-apis/blob/master/docs/live-stream-api/get_started.md) that may include help from Engineering Services. You will also need:

* A Stream URI - provided by Adobe
* A token API Host URI - this is https://api.omniture.com/token for all customers
* An application client\_id - generated when you register your app
* An application secret - generated when you register your app
* An adobe ID
* An adobe ID password

You can also connect using a curl command, similar to the following:

```
curl --location --compressed --header Authorization: Bearer [ACCESS_TOKEN][STREAM_URL]
```


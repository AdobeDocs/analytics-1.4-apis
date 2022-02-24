# Visitor Identification

To track site visitors, each visitor must have a unique *visitor ID*. Ideally, this is a persistent cookie with an extended expiration period.

Use the `visitorID` tag, the combination of IP address and `userAgent`, to submit visitor ID information to Adobe data collection servers.

If the data insertion includes a `visitorID`, the Analytics Data Processing Engine assumes that persistent cookies are enabled for the visitor's Web browser. If the data insertion identifies visitors using IP address/User Agent, Analytics displays persistent cookies for that visitor as disabled.

**Note:** To avoid processing problems, make sure that the same visitor ID is not specified on a large number of server calls. For example, setting the same visitor ID for all unauthenticated visitors is not recommended.

The visitor ID is critical for linking a visitor's activities captured via JavaScript with those submitted through tagless data collection, or a third-party application. For example, to link a visitor's browsing activity with transactions in a third-party shopping cart application, you must pass the visitor ID to the shopping cart application. The shopping cart application uses the visitor ID when uploading transaction data via the Data Insertion API so Analytics can link the transaction data to the visitor's browsing activity (previously captured via JavaScript).

## Custom Visitor IDs

Typically, the client systems generate unique visitor identifiers that you can use as the `visitorID` value. We recommend generating your own visitor ID, in both the XML and in the JavaScript so that the values match.

If you are generating your own visitor ID, it can be up to 100 alpha-numeric characters and cannot contain a hyphen.

## Reading the s_vi Cookie

When sending data that is connected to a web visitor, you need to use the same visitor ID in both JavaScript on your page and in data sent by the data insertion API. To accomplish this, you could pass the visitor ID in a hidden form element to a server-side application that uses the data insertion API.

The Analytics visitor ID is contained in the `s_vi` cookie, and can be retrieved on the client using the cookie read function:

```
s.c_r('s_vi');
```

The visitor ID that is returned is formatted similar to the following:

```

[CS]v1|1234567890123456-6543210987654321[CE]
```

When passing the visitor id to the data insertion API, pass just the values between the pipe '|' character and [CE]. For example:

```

<visitorid>1234567890123456-6543210987654321</visitorid>
```

## Experience Cloud ID Service

If you have implemented the Visitor ID service, functions are provided to simplify reading visitor IDs. See [Experience Cloud ID Service Library Reference](https://marketing.adobe.com/resources/help/en_US/mcvid/mcvid_library.html).

Make sure you check for both the Experience Cloud ID and the Analytics Visitor ID, and send both IDs (if present) to make sure any data sent is associated with the existing Analytics visitor profile.


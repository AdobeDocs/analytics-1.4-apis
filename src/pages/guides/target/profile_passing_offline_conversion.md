# Profile Passing and Offline Conversion

Use the Profile Passing API to pass third-party segmentation data into Test&Target as profile attributes for targeting.

This lets you use Test&Target to target content based on segmentation data from analytics vendors, as long as you know the T&T ID for the user to which the passed-in data belongs.

## Create the URL

`https://clientcode.tt.omtrdc.net/m2/clientcode/rest/standard?mbox=confirmed_offline​&mboxPC=XXX&mboxHost=offline.offermatica.com&mboxParam=value​&profile.Name=value&version=1`

**Note:** Parameters and values are case sensitive.

|Parameter|Description|
|---------|-----------|
| **`clientCode`** | (Required) A valid T&T client code. |
| **`mbox`** | (Required) The mbox name. |
| **`mboxPC`** | (Required) The T&T profile ID of the user associated with the passed-in segment data. |
| **`mboxHost`** | (Optional) The mbox host. The default value is `offline.offermatica.com`. |
| **`mboxParam`** | (Optional) A list of name/value pairs to pass into the mbox for targeting content. |
| **`profile.Name`** | (Optional) A list of name/value pairs with the names prefixed with "`profile.`", which signals T&T to store the name/value pair in the user profile. |
| **`Version`** | Specify which version of the API you want to use. Set this to `version=1` unless there is a different version described in the documentation. |

## Inspect the query reponse

The query response uses the following XML structure:

```xml
<response>
    <success>true</success>
    <pcId>124252</pcId>
</response>
```

| Tag | Description |
| --- | --- |
| **`success`** | Indicates the success of failure of the query. `true`: success `false`: failure. |
| **`pcId`** | The user's unique identifier. Shown only when `success = true`. |

## Map a Third-Party User ID to T&T

The Offline Conversion API lets you map a third-party profile ID, order ID, or any other ID explicitly associated with a user, to a T&T profile ID.

Build the mapping by making an mbox request with the parameter: `mbox3rdPartyId=XXX`

For example:

```html
<div class="mboxDefault"></div>
<script type="text/javascript">
   mboxCreate('application_submitted_online', 'mbox3rdPartyId=CA10021456');
</script>
```

T&T logs the third-party ID or pcId when it writes the profile to the database (after a delay of about 30 minutes). After the third-party ID or pcId is logged, you can use the API to send more requests and use the third-party profile ID instead of the mboxId. For example:

`https://clientcode.tt.omtrdc.net/m2/clientcode/rest/standard?mbox=confirmed_offline​&mbox3rdPartyId=examplecorp&mboxHost=offline.omniture.com&​mboxParam=value&profile.Name=value&version=1`

**Note:** Parameters and values are case sensitive.

| Parameter | Description |
|---------|-----------|
| **`clientCode`** | (Required) A valid T&T client code. |
| **`mbox`** | (Required) The mbox name. |
| **`mbox3rdPartyId`** | (Required) The third-party profile ID of the user associated with the passed-in segment data. Limited to 60 characters. |
| **`mboxHost`** | (Optional) The mbox host. The default value is `offline.offermatica.com`. |
| **`mboxParam`** | (Optional) A list of name/value pairs to pass into the mbox for targeting content. |
| **`profile.Name`** | (Optional) A list of name/value pairs with the names prefixed with "`profile.`", which signals T&T to store the name/value pair in the user profile. |
| **`Version`** | Specify which version of the API you want to use. Set this to `version=1` unless there is a different version described in the documentation. |

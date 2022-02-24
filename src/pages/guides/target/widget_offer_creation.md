# Widget Offer Creation

The Widget Offer Creation API lets you programmatically create a widget offer.

## Create the URL

A widget offer is a URL that corresponds to a T&T fetched response from a third-party server. T&T caches a response associated with each offerID parameter, which serves as a key.

For each operation add the parameters and values necessary to set the state of the T&T campaign. For example:

`https://admin.testandtarget.omniture.com/api?client=clientcode&​email=user@corp1.com&password=pword&operation&version=1`

| Parameter | Description |
|-------------|---------------|
| **`client`** | (Optional) The T&T client code. |
| **`email`** | (Required) The Email address associated with the T&T user performing the operation. |
| **`password`** | (Required) The T&T password associated with the specified email address. |
| **`operation`** | (Required) Identifies the type of T&T action to execute. To change a T&T campaign state, this value is always `saveWidgetOffer`. |
| **`name`** | (Required) The name of the widget offer, which is displayed in the admin interface Offer list. |
| **`url`** | (Required)The encoded URL of the third-party server that hosts the dynamically generated response. T&T calls this URL and caches the resulting response. |
| **`id`** | (Required) The third-party ID of the widget offer. |
| **`version`** | Specify which version of the API you want to use. Set this to `version=1` unless there is a different version described in the documentation. |

**Note:** Parameters and values are case sensitive.

## Inspect the Query Response

On a successful widget offer creation, T&T returns an XML response that contains the specified third-party ID. For example:

```xml
 <success>
   <third-party-id>999</third-party-id> 
</success>
```

If the operation fails, T&T returns an XML response that contains an error message. For example:

```xml
<error>
   <message>Parameter 'id' should not be blank.</message>
   <code>400</code>
</error>
```

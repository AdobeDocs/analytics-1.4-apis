# Offer Create

The Offer Create API lets you create an HTML offer.

## Create the URL

For each operation add the parameters and values necessary to create an HTML offer in a T&T campaign. For example, use the following URL substituting the appropriate value for each of the URL parameters:

```
 https://testandtarget.omniture.com/api?client=user&email=user1@acme.com&password=pword​&operation=saveHtmlOfferContent&offerName=name&folderId=#&version=2&content=<HTML HERE>
```

| Parameter | Description |
|-------------|---------------|
|**client** | \(Required\) The T&T client code. |
| **email** | \(Required\) The Email address associated with the T&T user performing the operation. |
| **password** | \(Required\) The T&T password associated with the specified email address. |
|**operation** | \(Required\) Identifies the type of T&T action to execute. To save an HTML offer, this value is always `saveHtmlOfferContent`. |
|**offerName** | \(Required\) The name of the offer. |
| **folderId** | \(Required\) The folder where you want to save the offer. Get the ID from [Folder List](../list_folder/r_list_folder.md#). |
|**version** | Specify which version of the API you want to use. Set to one of the following: `version=1` does not include the offer ID in the response. `version=2` includes the offer ID in the response. |
|**content** | \(Required\) URL escaped HTML snippet that contains the offer. For example: ```%3Cdiv+class%3D%22offer-content%22%3E...%3C%2Fdiv%3E``` |

**Note:** Parameters and values are case sensitive.

## Inspect the Query Response

A response of `200` indicates a successful operation.

```
<status>SUCCESS</status>
```

**Parent topic:** [Methods](../campaign_state/r_Test_and_Target_API_Sample_Code.md)


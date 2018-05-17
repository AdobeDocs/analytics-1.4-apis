# Offer Get

The Offer Get API lets you get the content of an HTML offer.

## Create the URL

For each operation add the parameters and values necessary to get the content of an HTML offer in a T&T campaign. For example, use the following URL substituting the appropriate value for each of the URL parameters:

```
 https://testandtarget.omniture.com/api?client=user&email=user1@acme.com​&password=pword&operation=getHtmlOfferContent&offerName=name&version=1
```

| Parameter | Description |
|-------------|---------------|
|**client** | \(Required\) The T&T client code. |
| **email** | \(Required\) The Email address associated with the T&T user performing the operation. |
| **password** | \(Required\) The T&T password associated with the specified email address. |
|**operation** | \(Required\) Identifies the type of T&T action to execute. To get an offer, this value is always `getHtmlOfferContent`. |
| **offerName** | \(Required\) The name of the HTML offer you want to get. |
|**version** | Specify which version of the API you want to use. Set to one of the following: `version=1` does not include the offer ID in the response. `version=2` includes the offer ID in the response. |

**Note:** Parameters and values are case sensitive.

## Inspect the Query Response

A response of `200` indicates a successful operation. T&T also returns the following content from the specified HTML offer:

```
<htmlOffer>
<SCRIPT/>
<value>
<![CDATA[
<div class="offer-content">...</div>
]]>
</value>
</htmlOffer>
```

**Parent topic:** [Methods](../campaign_state/r_Test_and_Target_API_Sample_Code.md)


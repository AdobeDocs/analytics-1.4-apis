# Campaign State

The Campaign State API lets you change the state of an existing T&T campaign.

## Create the URL

For each operation add the parameters and values necessary to set the state of the T&T campaign. For example:

`https://testandtarget.omniture.com/api?client=user&email=user@corp.com​&password=pword&operation=setCampaignState&state=Deactivated&​campaignId=cam29034&thirdPartyId=extID501>&version=1`

| Parameter | Description |
|-------------|---------------|
| **`client`** | (Required) The T&T client code. |
| **`email`** | (Required) The Email address associated with the T&T user performing the operation. |
| **`password`** | (Required) The T&T password associated with the specified email address. |
| **`operation`** | (Required) Identifies the type of T&T action to execute. To change a T&T campaign state, this value is always `setCampaignState`. |
| **`state`** | (Required) The campaign state. Supported values include `Approved`, `Deactivated`, `Deleted`, and `Archive`. |
| **`campaignId`** | (Optional) The campaign ID of the campaign you want to modify. You must provide either `campaignId` or `thirdPartyId`. |
| **`thirdpartyId`** | (Optional) The third-party identifier associated with the campaign you want to modify. You must provide either `campaignId` or `thirdPartyId` |
| **`version`** | Specify which version of the API you want to use. Set this to `version=1` unless there is a different version described in the documentation. |

**Note:** Parameters and values are case sensitive.

## Inspect the Query Response

The response to the request alerts you to the success of the operation. For example:

```xml
<success>Campaign [7] state set to [Approved]</success>
```

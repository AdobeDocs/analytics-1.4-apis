# Looking Up a Campaign by Third-Party ID

Create the URL. For example:

`https://testandtarget.omniture.com/api?client=user1&​email=user1@example.com&password=pword&operation=getCampaignId&campaign3rdPartyId=extID501&version=1`

**Note:** Parameters and values are case sensitive.

| Parameter | Description |
|-------------|---------------|
| **`client`** | (Required) The T&T client name. |
| **`email`** | (Required) The Email address associated with the T&T client. |
| **`password`** | (Required) The T&T client password. |
| **`operation`** | (Required) Identifies the type of T&T action to execute. To look-up a T&T campaign, this value is `alwaysgetCampaignId`. |
| **`campaign3rdPartiId`** | (Required) The third-party campaign ID associated with the T&T campaign. |
| **`Version`** | Specify which version of the API you want to use. Set this to `version=1` unless there is a different version described in the documentation. |

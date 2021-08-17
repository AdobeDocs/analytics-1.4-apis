# Campaign Copy

The Campaign Copy API lets you create a new T&T campaign based on an existing source campaign.

## Create the URL

For each operation add the parameters and values necessary to copy a T&T campaign. For example, use the following URL to copy a T&T campaign, substituting the appropriate value for each of the URL parameters:

```
 https://testandtarget.omniture.com/api?client=user&email=user1@acme.com​&password=pword&operation=copyCampaign&id=123&​thirdPartyId=extID501&new3rdPartyId=extID995&branch=2&segment=3&​action=approve&name=Name&version=1
```

| Parameter | Description |
|-------------|---------------|
|**client** | \(Required\) The T&T client code. |
| **email** | \(Required\) The Email address associated with the T&T user performing the operation. |
| **password** | \(Required\) The T&T password associated with the specified email address. |
|**operation** | \(Required\) Identifies the type of T&T action to execute. To change a T&T campaign state, this value is always `copyCampaign`. |
| **id** | \(Optional\) The campaign ID of the campaign you want to copy. You must provide either `id` or `thirdPartyId` to identify the source campaign. |
| **thirdpartyId** | \(Optional\) The third-party identifier associated with the source campaign. You must provide either `id` or `thirdPartyId` to identify the source campaign. |
| **new3rdPartyId** | \(Optional\) A third-party identifier to associate with the source campaign. If not provided, no third-party ID is associated with the new campaign. If this value is the same as `thirdPartyId`, the source campaign `thirdPartyId` is set to `NULL`. |
| **branch** | \(Optional\) A comma-separated list of branch IDs to copy to the new campaign. If no list is specified, all campaign branches are copied to the new campaign. |
| **segment** | \(Optional\) The segment to promote as entry targeting conditions to add to the current list of campaign entry conditions. If no segment is specified, the new campaign uses the same entry conditions as the source campaign and copies all segments to the new campaign. |
| **action** | \(Optional\) When set to `approve`, T&T activates the new campaign and deactivates the source campaign. Otherwise, T&T creates the new campaign but does not activate it; leaving the source campaign active. |
|**name** | The name of the new campaign. If not specified, the new campaign name is the name of the source campaign with "`(copy)`" appended to the end of the name. For example, "`campaign1`" becomes "`campaign1 (copy)`". |
|**version** | Specify which version of the API you want to use. Set this to `version=1` unless there is a different version described in the documentation. |

**Note:** Parameters and values are case sensitive.

## Inspect the Query Response

A response of `200` indicates a successful operation. T&T also returns the following information about the new campaign:

```
<campaign>
<id>*newCampaignID*</id>
<thirdPartyId>*new3rdPartyID*</thirdPartyId> //if defined
</campaign>
```

**Parent topic:** [Methods](../campaign_state/r_Test_and_Target_API_Sample_Code.md)


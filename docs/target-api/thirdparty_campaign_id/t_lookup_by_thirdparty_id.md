# Looking Up a Campaign by Third-Party ID

1.   Create the URL. For example: 

    ```
    https://testandtarget.omniture.com/api?client=user1&​email=user1@acme.com&password=pword&operation=getCampaignId&campaign3rdPartyId=extID501&version=1
    ```

    **Note:** Parameters and values are case sensitive.

    | Parameter | Description |
    |-------------|---------------|
    |**client** | \(Required\) The T&T client name. |
    | **email** | \(Required\) The Email address associated with the T&T client. |
    | **password** | \(Required\) The T&T client password. |
    |**operation** | \(Required\) Identifies the type of T&T action to execute. To look-up a T&T campaign, this value is alwaysgetCampaignId. |
    | **campaign3rdPartiId** | \(Required\) The third-party campaign ID associated with the T&T campaign. |
    |**Version** | Specify which version of the API you want to use. Set this to `version=1` unless there is a different version described in the documentation. |


**Parent topic:** [Third-Party Campaign ID](../thirdparty_campaign_id/r_thirdparty_campaign_id.md)


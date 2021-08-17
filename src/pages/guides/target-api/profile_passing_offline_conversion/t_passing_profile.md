# Passing a User Profile

Use the Profile Passing API to pass third-party segmentation data into Test&Target as profile attributes for targeting.

This lets you use Test&Target to target content based on segmentation data from analytics vendors, as long as you know the T&T ID for the user to which the passed-in data belongs.

1.   Create the URL. For example: 

    ```
    https://clientcode.tt.omtrdc.net/m2/clientcode/rest/standard?mbox=confirmed_offline​&mboxPC=XXX&mboxHost=offline.offermatica.com&mboxParam=value​&profile.Name=value&version=1
    ```

    **Note:** Parameters and values are case sensitive.

    |Parameter|Description|
    |---------|-----------|
    |**clientCode** | \(Required\) A valid T&T client code. |
    | **mbox** | \(Required\) The mbox name. |
    | **mboxPC** | \(Required\) The T&T profile ID of the user associated with the passed-in segment data. |
    | **mboxHost** | \(Optional\) The mbox host. The default value is `offline.offermatica.com`. |
    | **mboxParam** | \(Optional\) A list of name/value pairs to pass into the mbox for targeting content. |
    | **profile.Name** | \(Optional\) A list of name/value pairs with the names prefixed with "`profile.`", which signals T&T to store the name/value pair in the user profile. |
    |**Version** | Specify which version of the API you want to use. Set this to `version=1` unless there is a different version described in the documentation. |

2.   Inspect the query reponse. 

    The query response uses the following XML structure:

    ```
     <response>
       <success>true</success>
       <pcId>124252</pcId>
    </response>
    ```

    |Tag|Description|
    |---|-----------|
    |**success** | Indicates the success of failure of the query. `true`: success `false`: failure. |
    | **pcId** | The user's unique identifier. Shown only when `success = true`. |


**Parent topic:** [Profile Passing and Offline Conversion](../profile_passing_offline_conversion/r_profile_passing_offline_conversion.md)


# Map a Third-Party User ID to T&T

The Offline Conversion API lets you map a third-party profile ID, order ID, or any other ID explicitly associated with a user, to a T&T profile ID.

Build the mapping by making an mbox request with the parameter:

 `mbox3rdPartyId=XXX` 

For example:

```
 <div class="mboxDefault"></div>
<script type="text/javascript">
   mboxCreate('application_submitted_online', 'mbox3rdPartyId=CA10021456');
</script>
```

T&T logs the third-party ID or pcId when it writes the profile to the database \(after a delay of about 30 minutes\). After the third-party ID or pcId is logged, you can use the API to send more requests and use the third-party profile ID instead of the mboxId. For example:

```
https://clientcode.tt.omtrdc.net/m2/clientcode/rest/standard?mbox=confirmed_offline​&mbox3rdPartyId=acmecorp&mboxHost=offline.omniture.com&​mboxParam=value&profile.Name=value&version=1
```

**Note:** Parameters and values are case sensitive.

|Parameter|Description|
|---------|-----------|
|**clientCode** | \(Required\) A valid T&T client code. |
| **mbox** | \(Required\) The mbox name. |
| **mbox3rdPartyId** | \(Required\) The third-party profile ID of the user associated with the passed-in segment data. Limited to 60 characters. |
| **mboxHost** | \(Optional\) The mbox host. The default value is `offline.offermatica.com`. |
| **mboxParam** | \(Optional\) A list of name/value pairs to pass into the mbox for targeting content. |
| **profile.Name** | \(Optional\) A list of name/value pairs with the names prefixed with "`profile.`", which signals T&T to store the name/value pair in the user profile. |
|**Version** | Specify which version of the API you want to use. Set this to `version=1` unless there is a different version described in the documentation. |

**Parent topic:** [Profile Passing and Offline Conversion](../profile_passing_offline_conversion/r_profile_passing_offline_conversion.md)


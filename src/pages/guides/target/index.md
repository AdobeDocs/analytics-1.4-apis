# Target API Reference

# Overview

The Target API lets you programmatically retrieve data for your Target campaigns.

## Profile Passing and Offline Conversation

- **Pass a User Profile:** Use the profile passing API to pass third-party segmentation data into Test&Target (T&T) as profile attributes for targeting. This lets you use Test&Target to target content based on segmentation data from analytics vendors, as long as you know the T&T ID for the user to which the passed-in data belongs.

    **Note:** Using the Test&Target ID is preferred, but the API also supports using a third-party ID (assuming the ID is already stored in Test&Target). Contact your Account Representative for further details.

- **Map a Third-Party User ID to T&T:** Use the Offline Conversion API to associate a visitor ID in your system with a Test&Target visitor ID. Doing this lets you add additional profile information to the visitor's Test&Target persistent profile.

## Associate a Third-Party Campaign ID

You can associate a third-party ID with a T&T campaign only when creating the campaign programmatically (See [campaign_copy](campaign_copy/r_campaign_copy.md#)). To do so, specify the appropriate third-party ID in the `<thirdPartyId>` element. For example:

```xml
<campaign>
   <name>Example REST Campaign</name>
   <thirdPartyId>extID501</3rdPartyId>
   <branches>
   ...
</campaign>
```

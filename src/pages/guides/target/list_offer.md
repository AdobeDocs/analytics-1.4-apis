# Offer List

The Offer List API lets you list the offers that are contained in a folder.

## Create the URL

For each operation add the parameters and values necessary to list offers. For example, use the following URL substituting the appropriate value for each of the URL parameters:

`https://testandtarget.omniture.com/api?client=user&email=user1@example.com​&password=pword&operation=offerList&folderId=8&version=1`

| Parameter | Description |
|-------------|---------------|
| **`client`** | (Required) The T&T client code. |
| **`email`** | (Required) The Email address associated with the T&T user performing the operation. |
| **`password`** | (Required) The T&T password associated with the specified email address. |
| **`operation`** | (Required) Identifies the type of T&T action to execute. To list offers, this value is always `offerList`. |
| **`folderId`** | (Required) The ID of the folder for which you want to view offers. |
| **`version`** | Specify which version of the API you want to use. Set this to `version=1` unless there is a different version described in the documentation. |

**Note:** Parameters and values are case sensitive.

## Inspect the Query Response

A response of `200` indicates a successful operation. T&T also returns the following information about each offer:

```xml
<offer>
<name>offer-name</name>
<id>#</id>
</offer>
```

# Get Host Groups

The Get Host Groups API returns the list of host groups.

In T&T, host groups are used to separate reporting and data collection to match production, staging, dev environments, or to separate based on GEOs or similar values.

## Create the URL

For each operation add the parameters and values necessary to get host groups in a T&T campaign. For example, use the following URL, substituting the appropriate value for each of the URL parameters:

`https://testandtarget.omniture.com/api?client=user&email=user1@example.com​&password=pword&operation=getHostGroups&version=1`

| Parameter | Description |
|-------------|---------------|
| **`client`** | (Required) The T&T client code. |
| **`email`** | (Required) The Email address associated with the T&T user performing the operation. |
| **`password`** | (Required) The T&T password associated with the specified email address. |
| **`operation`** | (Required) Identifies the type of T&T action to execute. To get host groups, this value is always `getHostGroups`. |
| **`version`** | Specify which version of the API you want to use. Set this to `version=1` unless there is a different version described in the documentation. |

**Note:** Parameters and values are case sensitive.

## Inspect the Query Response

A response of `200` indicates a successful operation. T&T also returns the following information about each group:

```xml
<hostGroups>
  <hostGroup id="#" name="name" isDefault"true|false" isDefaultReporting="true|false" timeOffsetDays="#"/>
</hostGroups>
```

| Parameter | Description |
| --- | --- |
| **`isDefault`** | Identifies which host group accepts new hosts automatically. |
| **`isDefaultReporting`** | Identifies which host group defaults as the primary host group to see reports. |
| **`timeOffsetDays`** | Indicates if the host group is set off from the current date. |

Example:

```xml
<hostGroups>
<hostGroup id="581" name="Production" isDefault="true" isDefaultReporting="true" timeOffsetDays="0"/>
<hostGroup id="582" name="Staging" isDefault="false" isDefaultReporting="false" timeOffsetDays="0"/>
<hostGroup id="583" name="Development" isDefault="false" isDefaultReporting="false" timeOffsetDays="0"/>
</hostGroups>
```

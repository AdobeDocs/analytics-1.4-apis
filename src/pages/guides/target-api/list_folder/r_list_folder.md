# Folder List

The Folder List API lets you list your T&T folders. You can use this list to retrieve the folder ID to use with the Offer Create API or to use with the Offer List API.

## Create the URL

For each operation add the parameters and values necessary to list folders in a T&T campaign. For example, use the following URL substituting the appropriate value for each of the URL parameters:

```
 https://testandtarget.omniture.com/api?client=user&email=user1@acme.com​&password=pword&operation=folderList&version=1
```

| Parameter | Description |
|-------------|---------------|
|**client** | \(Required\) The T&T client code. |
| **email** | \(Required\) The Email address associated with the T&T user performing the operation. |
| **password** | \(Required\) The T&T password associated with the specified email address. |
|**operation** | \(Required\) Identifies the type of T&T action to execute. To list folders, this value is always `folderList`. |
|**version** | Specify which version of the API you want to use. Set this to `version=1` unless there is a different version described in the documentation. |

**Note:** Parameters and values are case sensitive.

## Inspect the Query Response

A response of `200` indicates a successful operation. T&T also returns the following information about each folder and subfolder:

```
This is the folder that lists all of the folders.

<folder> <!-- this is the first folder in the list -- >
<name>name</name>
<id>#</id>
	<folders> <!-- additional folders are listed under the folders node -->
		<folder>
		<name>name</name>
		<id>#</id>
		<folder>
		...
```

**Parent topic:** [Methods](../campaign_state/r_Test_and_Target_API_Sample_Code.md)


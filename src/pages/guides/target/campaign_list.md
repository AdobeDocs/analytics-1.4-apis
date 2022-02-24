# Campaign List

The Campaign List API lets you programmatically define filters (based on time, state, etc.) that extract campaign names and identifiers.

## Create the URL

For each operation add the parameters and values you need as a filter. For example:

`https://testandtarget.omniture.com/api?client=example&email=john@example.com​&password=mypassword&operation=campaignList&environment=testEnvironment&name=test&​state=saved,activated&labels=label1,library,label2&version=1`

| Parameter | Description |
|-------------|---------------|
| **`client`** | (Required) The T&T client code. |
| **`email`** | (Required) The Email address associated with the T&T user performing the operation. |
| **`password`** | (Required) The T&T password associated with the specified email address. |
| **`operation`** | (Required) Identifies the type of T&T action to execute. To generate campaign list reports, this value is always `campaignList`. |
| **`environment`** | (Optional) A URL-encoded host group name, as defined in the T&T Tool. By default, the environment value is `Production`. |
| **`name`** | (Optional) The campaign name, or portion of the campaign name, that you want to match. |
| **`state`** | (Optional) Comma-separated list of states to match. Supported values include: `saved`, `activated`, `library`. By default, the filtered results include all states. |
| **`labels`** | (Optional) Comma-separated list of labels to match. By default, the filtered results include all labels. |
| **`version`** | Specify which version of the API you want to use. Set this to `version=1` unless there is a different version described in the documentation. |
| **`userLocale`** | The description tag can be localized with one of the nine valid locale identifiers: `en_US`, `de_DE`, `es_ES`, `fr_FR`, `pr_BR`, `ja_JP`, `ko_KR`, `zh_CN`, `zh_TW` |

For example: `https://testandtarget.omniture.com/api?version=2&client=demo&operation=campaignList&email=demo@fortpoint.com&password=demo&userLocale=de_DE`

If you omit `userLocale` or set it to an invalid value, the default `en_US` is used. Parameters and values are case sensitive.

## Inspect the Query Response

A successful query response uses the following XML structure:

```xml
 <campaigns>
  <campaign>
    <id>16</id>
    <name>Test Campaign A</name>
  </campaign>
  <campaign>
    <id>17</id>
    <name>Test Campaign B</name>
  </campaign>
</campaigns>
```

| Tag | Description |
| --- | --- |
| **campaign** | A single campaign. |
| **id** | The campaign identifier. Use this value with the Campaign Performance Report API. |
| **name** | The campaign name you specified. |

A failed query response uses the following XML structure:

```xml
<error>
   <message>Invalid email or password supplied. Email: john@example.com</message>
   <code>401</code>
</error>
```

| Tag | Description |
| --- | --- |
| **message** | A description of the error. For example: `Invalid email or password supplied. Email: john@example.com.`|
| **code** | The error code. For example: `401` |

## Parse the Query Response

Optionally, you can use a scripting language, such as Perl, Python, and Ruby, and the Campaign Performance Report API to iterate through the query result and retrieve specific campaign detail reports.

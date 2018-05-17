# Campaign View

The Campaign View API returns an XML "view" of the specified T&T campaign.

## Create the URL

For each operation add the parameters and values necessary to copy the T&T campaign. For example:

```
https://testandtarget.omniture.com/api?client=user1&email=user1@acme.com​&password=pword&operation=viewCampaign&id=intID995&​thirdPartyId=extID501&version=3
```

| Parameter | Description |
|-------------|---------------|
|**client** | \(Required\) The T&T client code. |
| **email** | \(Required\) The Email address associated with the T&T user performing the operation. |
| **password** | \(Required\) The T&T password associated with the specified email address. |
|**operation** | \(Required\) Identifies the type of T&T action to execute. To view a campaign, this value is always `viewCampaign`. |
| **id** | \(Optional\) The campaign ID of the campaign you want to view. You must provide either `id` or `thirdPartyId`. |
| **thirdpartyId** | \(Optional\) The third-party identifier associated with the campaign you want to modify. You must provide either `id` or `thirdPartyId` |
|**version** | Specify which version of the API you want to use. Set to one of the following: |

-   `version=1` to return the campaign without segment information or campaign-level targeting.
-   `version=2` to return the campaign with segment information but without campaign-level targeting.
-   `version=3` to return the campaign with segment information and campaign-level targeting.
-   `version=6` to display the on step actions using the "action" elements instead of the "strategy" elements, and to present the Display Step.


**Note:** Parameters and values are case sensitive.

## Inspect the Query Response

If T&T locates a campaign with the specified `id` or `thirdPartyId` it returns XML that describes the campaign. Otherwise, it returns one of the following error messages:

```
 Authentication error code: 401
Invalid request code: 400
```

If *when approved* was specified for the campaign start date when the campaign is created, the start date returned is 1970-01-01T00:00Z. If you pass *when deactivated*, the end date is 2100-01-01T10:00Z.

```
<campaign>
  <id>*NNNN*</id>
  <thirdPartyId>*third party id*</thirdPartyId> //if supplied by client.
  <name>*Campaign Name*</name>
  <state>approved|paused|deactivated|saved|deleted</state>
  <enabled>true|false</enabled>  <!--only 'approved' and 'paused' have enabled = true. -->
  <startDate>YYYY-mm-DDTMM:HH:SS</startDate>
  <endDate>YYYY-mm-DDTMM:HH:SS</endtDate>
  <displayLocations>
    <location>
      <targetExpression>
        <targetMbox>
          <name>mboxName</name>
        </targetMbox>
        <targetParameter>
          <type>url</type>
          <name>ad</type>
          <matcher>equalsIgnoreCase</matcher>
          <values>
            <value>A</value>
            <value>B</value>
          </values>
        </targetParameter>
        <targetUnknown/>  (for currently unsupported targets)
      </targetExpression>
    </location>
    <location>
      <targetExpression>
        <targetMbox><name>homePageHero</name></targetMbox>
        <targetParameter>
          <type>mbox</type>
          <name>age</name>
          <matcher>equals</matcher>
          <values>
            <value>33</value>
          </values>
        </targetParameter>
      </targetExpression>
    </location>
  </displayLocations>
  <branches>
    <branch>
      <id>NNNN</id>  (recipe model ID - doesn't change even on client migration)
      <name>branch name</name>
      <description>branch description</description>
      <targets>recipe targeting - same type as targets from displayTargets</targets>
      <offers>
        <displayLocation location="/campaign/displayLocations/location[1]">
          <offerHTML> (for anonymous offers)
            <html>...</html>
          </offerHTML>
        </displayLocation>
        <displayLocation location="/campaign/displayLocations/location[2]">
          <offerNamed>
          <id>ID</id>
          <name>offer name</name>
          <offerRedirect>
            <url>http://client.com/page.html</url>
          </offerRedirect>
        </displayLocation>
        <displayLocation location="/campaign/displayLocations/location[3]">
          <offerDefault/>
        </displayLocation>
      </offers>
    </branch>
    <branch>
      ...
    </branch>
  </branches>
<!-- version 2 only -- >
<segments>
    <segment>
      <stepName>Step</stepName>
      <name>name</name>
      <targetExpression>
        <targetParameter>
          <type>type</type>
          <name>name</name>
          <matcher>equals</matcher>
          <values>
            <string>value</string>
          </values>
        </targetParameter>
      </targetExpression>
    </segment>
    <segment>
    ...
    </segment>
</segments>
<! -- end of version 2 only section -- >
</campaign>
```

mbox name:

```
<targetMbox><name>mboxName</name></targetMbox>
```

mbox and URL parameter targeting:

```
<targetParameter>
   <type>url | mbox</type>
   <name>parameter name</name>
   <matcher>equals | equalsIgnoreCase|etc</matcher>
   <values>
      <value>value1</value>
      <value>value2</value>
      ....
   </values>
</targetParameter>
```

Branch percent constraint:

```
<targetPercent>
   <percent>95.5</percen>
</targetPercent>
```

Anonymous HTML offers:

```
<offerHTML>
   <html>offer content</html>
</offerHTML>
```

Anonymous redirect offers:

```
<offerRedirect>
   <url>http://mysite.com/page.html</url>
</offerRedirect>
```

Default content:

<offerDefault/\>

Currently unsupported offers:

```
<offerUnknown>
   <id>ID</id>
</offerUnknown>
```

Non-anonymous offers:

```
<offerNamed>
   <id>ID</id>
   <name>offer name</name>
</offerNamed>
```

**Parent topic:** [Methods](../campaign_state/r_Test_and_Target_API_Sample_Code.md)


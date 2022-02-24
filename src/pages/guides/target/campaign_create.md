# Campaign Create/Update

The Campaign Create API lets you create and update AB..N campaigns, landing page campaigns and optimizing campaigns (optimized to RPV/AOV/Conversion Rate). You can add experiences, targets, and mboxes to the campaign during creation.

The Campaign Create API can also be used to update an existing campaign. Note that monitoring Campaigns cannot be created using API. Use the Campaign State API to change campaign state.

## Create the URL

For each operation add the parameters and values necessary to create a T&T campaign. For example, use the following URL substituting the appropriate value for each of the URL parameters:

`https://testandtarget.omniture.com/api?client=user&email=user1@example.com​&password=pword&version=1&operation=saveCampaign&​thirdPartyId=extID501&version=1&campaign=<XML HERE>`

| Parameter | Description |
|-------------|---------------|
| **`client`** | (Required) The T&T client code. |
| **`email`** | (Required) The Email address associated with the T&T user performing the operation. |
| **`password`** | (Required) The T&T password associated with the specified email address. |
| **`operation`** | (Required) Identifies the type of T&T action to execute. To create or update a T&T campaign, this value is always `saveCampaign`. |
| **`campaignId`** | (optional for create, either campaignId or thirdPartyId required for update) Without this parameter present in the URL, a new campaign is created and assigned a campaignId. Otherwise, if a value is present, it tries to find a campaign that has a matching, non-null campaignId and if found, updates it. If a valid campaignId and a valid thirdPartyId are both included, the thirdPartyId takes precedence. |
| **`thirdPartyId`** | (optional for create, either campaignId or thirdPartyId required for update) Without this parameter present in the URL, a new campaign is created with a NULL thirdPartyId. Otherwise, if a value for thirdPartyId is present, it tries to find a campaign that has a matching, non-null thirdPartyId and if found, updates it. If a thirdPartyId is present in the URL, but no matching campaign is found, a new campaign is created with the proper thirdPartyId value. it is also possible to specify thirdPartyId in the campaign XML itself. After the campaign has been created this way, it can then be updated subsequently by specifying the thirdPartyId parameter in the URL to refer to this campaign. |
| **`oldBranchName`** | (Optional) Provide the old experience name when renaming an experience. "Branch" refers to experience in this API. |
| **`optimizingMetric`** | (Optional) valid values are RPV, AOV, Conversion Rate (case sensitive). Including this parameter/value creates an optimizing campaign rather than an A/B campaign. |
| **`version`** | Specify which version of the API you want to use. Set this to `version=1` unless there is a different version described in the documentation. |
| **`campaign`** | (required, UTF-8 URL-encoded XML): XML that defines the campaign. Keep in mind the size of campaign XML; otherwise, a HTTP 414 (Request URI too long) will occur. |

To create the campaign:

```xml
<campaign>
 <name>REST ABN Campaign (four branches with segments II)</name>
 <thirdPartyId>adobeID</thirdPartyId>
 <branches>
  <branch>
...
```

A complete xml example is located in at the bottom of this article in the **Demo Campaign XML** section.

## Query Response

A response of `200` indicates a successful operation. Target also returns the following information about the new campaign:

Create:

```xml
<?xml version="1.0" encoding="UTF-8"?>

<campaign-create><result>createdsuccess</result><id>21</id></campaign-create> 
```

Update:

```xml
<?xml version="1.0" encoding="UTF-8"?>

<campaign-create><result>updatedsuccess</result><id>21</id></campaign-create> 
```

## Update a Campaign

To update an existing campaign, the URL is specified in the same format as described above. However, instead of providing a new `thirdPartyId`, you provide the `thirdPartyId` of the campaign that you want to update. Make sure that the value of `thirdPartyId` parameter matches the one of the stored campaign you are trying to update; otherwise, a new campaign is created instead.

You can update the following parts of a campaign:

- Campaign name
- Add/Delete target(s)
- Rename URL parameter target name
- Add/Delete experience(s)
- Rename experience name (parameter 'oldBranchName' MUST be present in URL)
- Add/Delete mbox(es) (you need to specify offers for the new mbox, otherwise you'll get a 404 error: 'You have mboxes with no offers, please assign an offer for each mbox')
- Rename mbox name
- Add/Delete segments
- Rename segments

## Specify Campaign Type

By default the Campaign create API creates an A/B campaign. You can also specify a landing page instead by adding a `<type>` parameter after `<campaign>`.

```xml
<campaign><algorithm><type>Landing Page</type></algorithm>
<name>My campaign name</name>
```

## Specify Start and End Dates and Times

You can specify start and end dates as follows, as children of the `<campaign>` root element:

```xml
<start>YYYY-03-20</start>
<end>YYYY-03-24</end>
```

The date format is yyyy-MM-dd without a timestamp. You can specify no set start and end date as follows:

```xml
<start>When Approved</start>
<end>When Deactivated</end>
```

If you do not provide a start or end date, the start date is set to the current date, and the end date is set to the current date plus one month.

You can also set the time when the campaign starts or ends on the specified dates:

```xml
<start>YYYY-07-05T04:00</start>
<end>YYYY-08-05T16:00</end>
```

## Specify Percentage Targeting

You can specify percentage targeting as follows:

```xml
<branches>
  <branch>
   <name>Experience A</name>
   <description/>
   <percentConstraint>
     <percent>30</percent>
   </percentConstraint>
  </branch>
</branches>
```

## Specify Priority

The priority can be set as a child of the `<campaign>` root element:

```xml
<priority>High</priority>
```

Possible values are `Monitoring`, `Low`, `Medium`, and `High`.

## Experience Impression Capping

Sets the number of impressions or visits that must be met before the specified action is exercised.

You can specify the following for all campaign experiences at the action level or they could be specified for every campaign experience separately:

- Visit count
- Impression count
- Action

The new step action will not currently be displayed in Campaign Edit UI.

If a campaign that has a step with `experienceFrequencyCapping` action set is edited the action should be preserved for step (unless step was deleted etc)

The following XML snippet is used in campaign save action REST API for adding a step with an action:

```xml
<step>
  <name>Success Metric 1</name>
  <action type="countOnce"/>
  <locations><location><mboxes><mbox><name>categoryPage</name></mbox></mboxes>
  </location></locations>
</step>

```

`action` can contain one of the following types:

- `countOnce` (default): count once
- `countLandings`: Count landings, or clicks
- `alwaysConvert`: always convert
- `restartSameExperience` (default for conversion step): restart with the same experience
- `restartRandomExperience`: restart with a different experience
- `restartNewExperience`: restart with a new experience
- `excludeSameExperience`: do not count the same experience
- `excludeDefaultContent`: do not count default content

In addition, for impression capping, use the `experienceFrequencyCapping` step action.

You can set additional data for the `experienceFrequencyCapping` action:

```xml
<step>
  <name>Success Metric 1</name>
  <action type="experienceFrequencyCapping" maxVisitsCount='2' maxImpressionsCount='8' onConditionsMetAction='ban'/>
  <locations><location><mboxes><mbox><name>categoryPage</name></mbox></mboxes>
  </location></locations>
</step>
```

`onConditionsMetAction` can be either:

- `ban`: bans the user from the experience he is on if has reached either 2 visits or 8 impressions. After reaching the cap, the user remains on the current experience in the campaign, but on the visit of the entry step, the user is banned from the current experience and whether another experience can be selected is evaluated, excluding the experiences where the visitor has reached the cap (or, was banned from). If an experience has both a `maxImpressionCount` and `maxVisitCount`, the `maxImpressionCount` is disregarded.
- `reset`: resets all current capping information for a user. All previous cap information is deleted.

Either `maxVisitsCount` or `maxImpressionsCount` must be present.

```xml
<step>
  <name>Success Metric 1</name>
  <action type="experienceFrequencyCapping" maxVisitsCount='2' maxImpressionsCount='8' onConditionsMetAction='ban'>
    <experience name="Experience A" maxVisitsCount='3' maxImpressionsCount='10' onConditionsMetAction='reset' />
    <experience name="Experience B" maxVisitsCount='3' maxImpressionsCount='10' onConditionsMetAction='ban' />
  </action>
  <locations><location><mboxes><mbox><name>categoryPage</name></mbox></mboxes>
  </location></locations>
</step>
```

If the impression capping is not provided for all campaign experiences, the impression capping provided at the action level is used.

If the campaign is edited within the Target interface and a new branch is added, the branch automatically uses the impression capping set at the action level.

## Limiting Changes and Visibility

Campaigns created in Recommendations are visible in Target but are not editable. Allowing editing would create synchronization issues with their origin and any updates made in Recommendations override the changes made in Target.

Recommendations campaigns are hidden by adding the parameter `editUrl=hidden` to the campaign create API. For example:

`https://admin/admin/api?client=demo&email=demo@fortpoint.com&password=demo&operation=saveCampaign&version=1&editUrl=hidden&campaign=XMLHERE`

You can also make a campaign read-only with the `editUrl=readonly` parameter. The details for the campaign can be viewed, but the edit page is not editable. Everyone is essentially a read-only user when viewing the campaign. Campaigns saved via the API with `editUrl=readonly` can't be saved in the admin UI, but can be updated using the API. Read-only campaigns can be deleted, and campaign states can be changed.

## Demo Campaign XML

Experience name is limited to 20 characters.

To set an offer to display the default content, pass `Default Content`.

```xml
<offer>
  <name>Default Content</name>
</offer>
```

If you want your mbox to display the default content, you must pass a string of DefaultContent (whatever is in the mbox div)

At least one branch is required.

Each experience must include the same mboxes.

Each offer listed must be already created. Use [Offer Create](../create_offer/r_create_offer.md#) to create new offers.

```xml
<campaign>
  <name>REST ABN Campaign (four branches, two segments and thirdPartyId, with campaign level targeting)</name>
  <thirdPartyId>adobeID</thirdPartyId>
  <priority>High</priority>
  <start>YYYY-03-20</start>
  <end>YYYY-03-24</end>
  <branches>
    <branch>
      <!-- at least one branch is required -->
      <name>Experience A</name>
      <!-- 20 character limit -->
      <description/>
      <percentConstraint>
        <percent>30</percent>
      </percentConstraint>
      <paramConstraints>
        <paramConstraint>
          <parameterType>URL</parameterType>
          <name>ad</name>
          <matcherType>equalsIgnoreCase</matcherType>
          <values>
            <string>a</string>
          </values>
        </paramConstraint>
      </paramConstraints>
    </branch>
    <branch>
      <name>Experience B</name>
      <description/>
      <paramConstraints>
        <paramConstraint>
          <parameterType>URL</parameterType>
          <name>ad</name>
          <matcherType>equalsIgnoreCase</matcherType>
          <values>
            <string>b</string>
          </values>
        </paramConstraint>
      </paramConstraints>
    </branch>
    <branch>
      <name>Experience C</name>
      <description/>
      <paramConstraints>
        <paramConstraint>
          <parameterType>URL</parameterType>
          <name>ad</name>
          <matcherType>equalsIgnoreCase</matcherType>
          <values>
            <string>c</string>
          </values>
        </paramConstraint>
      </paramConstraints>
    </branch>
    <branch>
      <name>Experience D</name>
      <description/>
      <paramConstraints>
        <paramConstraint>
          <parameterType>URL</parameterType>
          <name>ad</name>
          <matcherType>equalsIgnoreCase</matcherType>
          <values>
            <string>d</string>
          </values>
        </paramConstraint>
      </paramConstraints>
    </branch>
  </branches>
  <steps>
    <step>
      <type>entry</type>
      <locations>
        <location>
          <mboxes>
            <mbox>
              <name>* display mboxes *</name>
              <paramConstraints>
                <paramConstraint>
                  <parameterType>URL</parameterType>
                  <name>myURLParam</name>
                  <matcherType>paramPresent</matcherType>
                </paramConstraint>
              </paramConstraints>
            </mbox>
          </mboxes>
        </location>
      </locations>
    </step>
    <step>
      <type>display</type>
      <locations>
        <location>
          <mboxes>
            <mbox>
              <name>homePageHero</name>
            </mbox>
          </mboxes>
          <displays>
            <display>
              <branch>Experience A</branch>
              <offers>
                <offer>
                  <name>Homepage Hero Number 2 - Stored outside Offermatica</name>
                  <!--required -->
                </offer>
              </offers>
            </display>
            <display>
              <branch>Experience B</branch>
              <offers>
                <offer>
                  <name>Homepage Hero Number 3 - Stored outside Offermatica</name>
                </offer>
              </offers>
            </display>
            <display>
              <branch>Experience C</branch>
              <offers>
                <offer>
                  <name>Logo Number 2 - HTML and Image</name>
                </offer>
              </offers>
            </display>
            <display>
              <branch>Experience D</branch>
              <offers>
                <offer>
                  <name>Flash Movie - Stored outside Offermatica</name>
                </offer>
              </offers>
            </display>
          </displays>
        </location>
      </locations>
    </step>
    <step>
      <name>Conversion</name>
      <type>conversion</type>
      <locations>
        <location>
          <mboxes>
            <mbox>
              <name>orderConfirmPage</name>
            </mbox>
          </mboxes>
        </location>
      </locations>
    </step>
  </steps>
  <segments>
    <segment>
      <stepName>entry</stepName>
      <name>Segment 1</name>
      <paramConstraints>
        <paramConstraint>
          <parameterType>URL</parameterType>
          <name>abc</name>
          <matcherType>equalsIgnoreCase</matcherType>
          <values>
            <string>c</string>
          </values>
        </paramConstraint>
      </paramConstraints>
    </segment>
    <segment>
      <stepName>entry</stepName>
      <name>Segment 2</name>
      <paramConstraints>
        <paramConstraint>
          <parameterType>URL</parameterType>
          <name>def</name>
          <matcherType>equalsIgnoreCase</matcherType>
          <values>
            <string>test</string>
          </values>
        </paramConstraint>
      </paramConstraints>
    </segment>
  </segments>
</campaign> 
```

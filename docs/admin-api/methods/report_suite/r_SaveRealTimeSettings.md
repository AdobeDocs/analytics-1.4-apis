# SaveRealTimeSettings

Selects the metrics and elements \(dimensions\) on which you want real time reports enabled.

Realtime configuration changes take 15 minutes to be reflected in reports.

See [Real Time Reports](https://github.com/Adobe-Experience-Cloud/analytics-1.4-apis/blob/master/docs/reporting-api/real_time.md).

## ReportSuite.SaveRealTimeConfiguration parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid** | `xsd:string` | The report suite for which you want to configure real time reports. |
| **real\_time\_settings** | [real\_time\_settings\_array](../../data_types/r_real_time_settings_array.md#) - An array of [real\_time\_settings](../../data_types/r_real_time_settings.md#) | Provide up to three metrics with corresponding elements \(dimensions\) for which you want to enable real time reporting. |

## ReportSuite.SaveRealTimeConfiguration response

|Type|Description|
|----|-----------|
| `xsd:int` |Returns `true` if the operation is successful.|

## Supported Metrics and Elements

The following is the list of the supported metrics and breakdowns available in Real Time Reports.

### Metrics

 pageviews

 revenue

 orders

 units

 carts

 cartviews

 instances

 checkouts

 cartadditions

 cartremovals

 events1-100

 videotime

 videostart

 videocomplete

 videosegmentviews

 videoadstart

 videoadcomplete

 socialmentions

 socialtotalsentiment

 sociallikeadds

 socialpageviews

 socialpostviews

 socialfbstorytellers

 socialfbstories

 socialpubrecommends

 socialpubcomments

 socialpubsubscribers

 socialpubposts

 mobileinstalls

 mobileupgrades

 mobiledailyengagedusers

 mobilemonthlyengagedusers

 mobilelaunches

 mobilecrashes

 mobileprevsessionlength

 ### Elements
 
 page

 sitesection

 server

 linkdownload

 linkexit

 linkcustom

 topleveldomain

 referringdomain

 searchengine

 searchenginekeyword

 searchenginenatural

 searchenginepaid

 geocountry

 georegion

 geocity

 geodma

 prop1-75

 evar1-75

 surveybase

 listvar1

 listvar2

 listvar4

 video

 videoad

 videosegment

 videocontenttype

 socialterm

 socialcontentprovider

 socialauthor

 sociallanguage

 sociallatlong

 socialassettrackingcode

 mobileinstalldate

 mobileappid

 mobilelaunchnumber

 mobiledayssincefirstuse

 mobiledayssincelastuse

 mobilehourofday

 mobiledayofweek

 mobileosenvironment

 mobiledayssincelastupgrade

 mobilelaunchessincelastupgrade

 mobiledevice

 mobileosversion

 mobilegooglecampaignsource

 mobilegooglecampaignmedium

 mobilegooglecampaignterm

 mobilegooglecampaigncontent

 mobilegooglecampaignname


**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


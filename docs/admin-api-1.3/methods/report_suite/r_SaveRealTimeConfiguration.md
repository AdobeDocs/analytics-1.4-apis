# SaveRealTimeConfiguration

Selects the metrics and elements \(dimensions\) on which you want real time reports enabled.

Realtime configuration changes take 15 minutes to be reflected in reports.

## ReportSuite.SaveRealTimeConfiguration parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid** | `xsd:string` | The report suite for which you want to configure real time reports. |
| **correlations** | [realTimeReportCorrelations](../../data_types/r_realTimeReportCorrelations.md#) - An array of [realTimeReportCorrelation](../../data_types/r_realTimeReportCorrelation.md#) | Provide up to three metrics with corresponding elements \(dimensions\) for which you want to enable real time reporting. |

## ReportSuite.SaveRealTimeConfiguration response

|Type|Description|
|----|-----------|
| `xsd:boolean` |Returns `true` if the operation is successful.|

## Supported Metrics and Elements

The following table contains a list of the supported metrics and breakdowns available in Real Time Reports.

## Metrics

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

## Elements

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

**Parent topic:** [Report Suite](../../methods/report_suite/c_api_admin_methods_repsuite.md)


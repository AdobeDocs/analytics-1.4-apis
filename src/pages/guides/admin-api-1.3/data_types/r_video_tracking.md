# video\_tracking

Data structure that contains information about video tracking settings.

|Element|Type|Description|
|-------|----|-----------|
|**enabled** |`xsd:string` | Enables/Disabled video tracking. |
|**visits\_tracked** |`xsd:string` | Makes the Visits Tracked metric available on a per-video basis in the Videos report. |
|**daily\_visitors\_tracked** |`xsd:string` | Enables/Disables the Daily Unique Visitors metric available on a per-video basis in the Videos report. |
|**paths\_tracked** |`xsd:string` | Enables/Disables reports that show the order in which videos are viewed on your site. |
|**converstion\_level** |`xsd:string` | Enables/Disables whether success events are allocated to videos. |
|**segments\_tracked** |`xsd:string` | Enables/Disables the Video Segments Viewed report, which displays viewership of a specific portion of a video. |
|**segment\_length** |`xsd:string` | Specifies the length of a video segment \(in one-second increments\) when `segments_tracked` is enabled. |
|**allocate\_success** |`xsd:string` | Determines how viewed videos share credit for a success event. |
|**history\_expiration** |`xsd:string` | Determines when to expire the video, based on the last video in a sequence. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


# SaveVideoSettings

Saves video measurement settings.

## ReportSuite.SaveVideoSettings parameters

|Name|Type|Description|
|----|----|-----------|
| **rsid\_list** | `array(xsd:string)` |\(Required\) A list of report suite IDs. If this is the only parameter specified, then video solution variables are enabled for each report suite.|
|**content\_type\_evar** |`xsd:string` |eVar that stores the content type for your website or app. Content type is set to "video" automatically for all video views, and to "ad" for all ad views.|
|**enable\_ad\_tracking** |`xsd:boolean` |Enables ad tracking solution variables. Enabling this option configures these variables on the report suite, cannot be disabled after it has been enabled.|
|**enable\_chapter\_tracking** |`xsd:boolean` |Enables chapter tracking solution variables. Enabling this option configures these variables on the report suite, cannot be disabled after it has been enabled.|
|**rename\_custom\_variables** |`xsd:boolean` |Renames the custom variables to video friendly names, for example Video Views, so that it's clear that they're being used for video measurement.|
|**use\_custom\_variables** |`xsd:boolean` |If false, video solution variables are enabled for the report suite and the pre-built video reports are configured to use these solution variables. If true, the pre-built video reports are configured to use the provided custom variables instead of solution variables and the last 4 parameters in this list are required.|
|**video\_completes\_event** |`xsd:string` |Provide a custom event that is not being used, indicates that a user has viewed a complete video or ad.|
|**video\_name\_evar** |`xsd:string` |Provide a custom eVar that is not being used, this stores the name of the video, as passed to Media.open\(\). Video Name and Ad Name are automatic classifications based on the data sent on the initial Media.play\(\) call, so you'll see an extra menu level when you view these reports.|
|**video\_time\_event** |`xsd:string` |Provide a custom event that is not being used, measures the time, in seconds, spent watching a video or ad.|
|**video\_views\_event** |`xsd:string` |Provide a custom event that is not being used, Indicates that a visitor has viewed some portion of a video or ad. However, it does not provide any information about how much, or what part, of a video the visitor viewed.|

## ReportSuite.SaveVideoSettings response

|Type|Description|
|----|-----------|
| `xsd:boolean` |Returns true if the operation is successful.|

**Parent topic:** [Report Suite](../../methods/report_suite/r_methods_reportsuite.md)


# video\_settings

Data structure that contains details about report suite's video settings.

|Element|Type|Description|
|-------|----|-----------|
|**core\_enabled** |`xsd:boolean` |Indicates whether core video solution variables are enabled.|
|**ad\_tracking\_enabled** |`xsd:boolean` |Indicates whether ad tracking solution variables are enabled.|
|**chapter\_tracking\_enabled** |`xsd:boolean` |Indicates whether chapter tracking solution variables are enabled.|
|**using\_custom\_variables** |`xsd:boolean` |Indicates whether the report suite is using video solution or reserved variables.|
|**video\_name\_evar** |`xsd:string` |Name of the video, as passed to Media.open\(\). Video Name and Ad Name are automatic classifications based on the data sent on the initial Media.play\(\) call, so you'll see an extra menu level when you view these reports.|
|**content\_type\_evar** |`xsd:string` |eVar that stores the content type for your website or app. Content type is set to "video" automatically for all video views, and to "ad" for all ad views.|
|**video\_time\_event** |`xsd:string` |Counts the time, in seconds, spent watching a video or ad.|
|**video\_views\_event** |`xsd:string` |Indicates that a visitor has viewed some portion of a video or ad. However, it does not provide any information about how much, or what part, of a video the visitor viewed.|
|**video\_completes\_event** |`xsd:string` |Indicates that a user has viewed a complete video or ad.|

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


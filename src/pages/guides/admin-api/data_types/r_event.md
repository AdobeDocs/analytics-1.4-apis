# event

Data structure that contains information about an Event \(Traffic variable\).

|Element|Type|Description|
|-------|----|-----------|
|**id** |`xsd:string` | The Event ID. |
|**name** |`xsd:string` | The Event name. |
|**type** |[event\_type\_enum](r_event_type_enum.md#) | The Event type. |
|**default\_metric** |`xsd:boolean` | Indicates if this is a default metric. |
|**participation** |[event\_participation\_enum](r_event_participation_enum.md#) | One of the following strings: unavailable, disabled, enabled|
|**serialization** |[event\_serialization\_enum](r_event_serialization_enum.md#) | One of the following strings: unavailable, always\_record, record\_once\_per\_visit, record\_once\_per\_unique\_id |
|**rsid\_list** |`array(xsd:string)` | Associated report suites. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


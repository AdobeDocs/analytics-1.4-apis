# event

Data structure that contains information about an Event (Traffic variable).

|Element|Type|Description|
|-------|----|-----------|
|**id** |`xsd:string` | The Event ID. |
|**name** |`xsd:string` | The Event name. |
|**type** |[event_type_enum](r_event_type_enum.md#) | The Event type. |
|**default_metric** |`xsd:boolean` | Indicates if this is a default metric. |
|**participation** |[event_participation_enum](r_event_participation_enum.md#) | One of the following strings: unavailable, disabled, enabled|
|**serialization** |[event_serialization_enum](r_event_serialization_enum.md#) | One of the following strings: unavailable, always_record, record_once_per_visit, record_once_per_unique_id |
|**rsid_list** |`array(xsd:string)` | Associated report suites. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)


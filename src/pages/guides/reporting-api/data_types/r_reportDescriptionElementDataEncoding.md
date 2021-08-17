# reportDescriptionElementDataEncoding

An enumerated list of data encoding types.

|Value|Description|
|-----|-----------|
|**base64** | If base64 encoding is used, the request must also have all element names base64 encoded. This includes names in "selected" and "search" filters, and the "pattern" and "checkpoint" pathing filters. This also applies to special keywords as well, such as "::entered::" and "::anything::". This also includes dates in the "name" field for overtime and trended reports. Element URLs are not encoded. |
|**utf8** | If utf8 encoding is used, the API filters out invalid UTF-8 characters in the request and response. This allows the result to come back with some data, although the values may be missing information. |

**Parent topic:** [Data Types](../data_types/datatypes.md)


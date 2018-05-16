# Error Codes

Errors are returned in two ways. HTTP response errors, and JSON object errors.

 

HTTP errors are returned for the following conditions:

|Code|Message|
|----|-------|
| **201** |Invalid report suite or access denied|
| **202** |Invalid time|
| **203** |Invalid date range|
| **204** |Invalid status filter|
| **501** |Internal system error|

The second way is less standard and is for errors with the actual method call. These are returned as part of the JSON object returned in the body. For example:

```
{
    "error":202,
    "message":"Invalid date range"
}

```

**Parent topic:** [Data Feeds API](overview.md)


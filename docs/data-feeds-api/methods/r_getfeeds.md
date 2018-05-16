# GetFeeds

Returns a list of data feeds for the specified report suites, including delivery status.

## DataFeed.GetFeeds Parameters

|Name|Type|Description|
|----|----|-----------|
|`rsid_list` |Array of `xsd:string` | List of report suites for which you want to view feed information. |
|`start_time` |`xsd:string` | \(optional\) UTC time. Specify the start time of the feed activity to include with each feed. A maximum of 48 hours may be requested. Default when no `start_time` is present will return only the latest job. |
|`end_time` |`xsd:string` | \(optional\) UTC time. Specify the end time of the feed activity to include with each feed. A maximum of 48 hours may be requested. Default when no `end_time` is present will return only the latest job. |
|`status` |Array of `xsd:string` | Filter returned data feeds by status: `processing` - Feed is currently being generated. `delivered`- Feed and manifest are delivered successfully and the job is completed. `upload_error` - Feed was generated but the transfer failed. In the event of an FTP transfer failure \(login denied, lost connection, out of quota, etc\), Adobe attempts to automatically connect and send the data up to three separate times. If the failures persist, the feed is marked as `upload_error`. `no_data` - No data was collected for delivery. |

## DataFeed.GetFeeds Response

| Type | Description |
|--------|---------------|
|Array of [data_feed](../data_types/r_feed.md#) | Status information for each feed that matches the request criteria. |

**Parent topic:** [Methods](../methods/methods.md)


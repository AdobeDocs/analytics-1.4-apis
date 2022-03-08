# data_feed_details

 

|Element|Type|Description|
|-------|----|-----------|
|`rsid` |`string` | The report suite corresponding to the data feed. |
|`feed_id` |``int`` | Unique id for this data feed. |
|`interval` |`string` | Delivery interval for the data feed. Either `Daily` or `Hourly`. **Daily**: Data for each day is delivered after it is processed in a single zipped file, or in multiple zipped files each containing approximately 2 GB of uncompressed data. You receive a single delivery for each day. **Hourly**: Data for each hour is delivered in a single zipped file that contains all data received during that hour. You receive 24 separate deliveries for each day, with each file delivered after the data for that hour is processed. |
|`timezone` |`string` | Timezone for which the feed is configured. For example: "America/Denver". |
|`status` | `string` | Feed status, one of the following: `active` - Feed is being generated according to schedule. `hold` - Feed is paused, usually for administrative reasons. This usually indicates that the feed requires require corrective action before it can be resumed, for example, new FTP information. `completed` - If a feed was created with a stop date, this indicates that the feed has reached the stop date and will no longer run. `cancelled` - The feed is no longer needed, and may be deleted at some point in the future. |
|`name` |`string` | Feed display name. |
|`ftp_host` |`string` | FTP hostname where the feed is delivered. |
|`fto_path` |`string` | Path on the FTP host where the feed is delivered. |
|`fields` |Array of `string` | Array with a list of [Data Columns](http://microsite.omniture.com/t2/help/en_US/sc/clickstream/index.html?f=datafeeds_reference) that are included in the feed. |

## Example

```
{
  "rsid": "myrsid",
  "feed_id": 1006552,
  "interval": "hourly",  //hourly, daily, ...
  "timezone": "America/Denver",
  "status": "active", //active, hold, completed, cancelled
  "name": "Feed Me",
  "ftp_host": "ftp.omniture.com",
  "ftp_path": "/feeds",
  "fields": [
     "evar1",
     "evar2"
  ]
}

```

**Parent topic:** [Data Types](../data_types/c_data_types.md)


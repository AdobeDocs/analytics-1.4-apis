# 1.4 Data Feeds API

Data feeds provide the stream of raw, partially-processed server calls in a delimited data set. Each server call sent to the selected report suite is contained in a data row with a customizable column set.

The data feeds API lets you retrieve the status of data feed processing, as well as configuration details for each configured feed.

## GetFeeds

Returns a list of data feeds for the specified report suites, including delivery status.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X POST "https://api.omniture.com/admin/1.4/rest/?method=DataFeed.GetFeeds" \
    -H "x-api-key: {OAUTHTOKEN}" \
    -H "x-proxy-global-company-id: {COMPANYID}" \
    -H "Authorization: Bearer {ACCESSTOKEN}" \
    -H "Accept: application/json" \
    -H "Content-Type: application/json" \
    -d "{'rsid_list':['myrsid']}"
```

#### Response

```json
{
  "data_feeds": [
    {
      "rsid": "myrsid",
      "feed_id": 1006552,
      "interval": "hourly",
      "date": "YYYY-02-06",
      "activity": [{
         "job_id": 4233,
         "begin": "YYYY-03-03 01:00:00",
         "end": "YYYY-03-03 02:00:00",
         "status": "processing"
      }]
    }
  ]
}
```

|Parameter|Type|Description|
|----|----|-----------|
|**`rsid_list`** |`string[]` | List of report suites for which you want to view feed information. |
|**`start_time`** |`string` | (Optional) UTC time. Specify the start time of the feed activity to include with each feed. A maximum of 48 hours may be requested. Default when no `start_time` is present will return only the latest job. |
|**`end_time`** |`string` | (Optional) UTC time. Specify the end time of the feed activity to include with each feed. A maximum of 48 hours may be requested. Default when no `end_time` is present will return only the latest job. |
|**`status`** | `string[]` | Filter returned data feeds by status. Valid values include `processing`, `delivered`, `upload_error`, `no_data`. |

Returns an array of data feeds. Each array element can contain the following information:

|Element|Type|Description|
|-------|----|-----------|
|**`rsid`** |`string` | The report suite ID corresponding to the data feed. |
|**`feed_id`** |``int`` | Unique id for this data feed. |
|**`interval`** |`string` | Delivery interval for the data feed. Valid values include:<br/>`Daily`: Data for each day is delivered after it is processed in a single zipped file, or in multiple zipped files each containing approximately 2 GB of uncompressed data. You receive a single delivery for each day.<br/>`Hourly`: Data for each hour is delivered in a single zipped file that contains all data received during that hour. You receive 24 separate deliveries for each day, with each file delivered after the data for that hour is processed. |
|**`activity`** |`string[]` | Array that contains the following:<br/>`job_id`: Unique system id for the delivery job.<br/>`begin`: Start time of the reporting period contained in this delivery. For example, `YYYY-03-03 01:00:00`.<br/>`end`: End time of the reporting period contained in this delivery.<br/>`status`: current status of the job. Valid values include `processing`, `delivered`, `upload_error`, `no_data`. |

# GetFeed

Gets configuration details for a specific feed, including feed status, FTP delivery location, and the data columns that are included in the feed.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X POST "https://api.omniture.com/admin/1.4/rest/?method=DataFeed.GetFeed" \
    -H "x-api-key: {OAUTHTOKEN}" \
    -H "x-proxy-global-company-id: {COMPANYID}" \
    -H "Authorization: Bearer {ACCESSTOKEN}" \
    -H "Accept: application/json" \
    -H "Content-Type: application/json" \
    -d "{'feed_id':1006552}"
```

#### Response

```json
{
  "rsid": "myrsid",
  "feed_id": 1006552,
  "interval": "hourly",
  "timezone": "America/Denver",
  "status": "active",
  "name": "Feed Me",
  "ftp_host": "ftp.omniture.com",
  "ftp_path": "/feeds",
  "fields": [
     "evar1",
     "evar2"
  ]
}
```

|Parameter|Type|Description|
|----|----|-----------|
|**`feed_id`** |`int` | ID of the feed. Retrieve the ID using `DataFeed.GetFeeds`. |

Returns details for the specified feed.

|Return Element|Type|Description|
|-------|----|-----------|
|**`rsid`** |`string` | The report suite corresponding to the data feed. |
|**`feed_id`** |``int`` | Unique id for this data feed. |
|**`interval`** |`string` | Delivery interval for the data feed. Either `Daily` or `Hourly`.<br/>`Daily`: Data for each day is delivered after it is processed in a single zipped file, or in multiple zipped files each containing approximately 2 GB of uncompressed data. You receive a single delivery for each day.<br/>`Hourly`: Data for each hour is delivered in a single zipped file that contains all data received during that hour. You receive 24 separate deliveries for each day, with each file delivered after the data for that hour is processed. |
|**`timezone`** |`string` | Time zone for which the feed is configured. For example, `"America/Denver"`. |
|**`status`** | `string` | Feed status, one of the following:<br/>`active`: Feed is being generated according to schedule.<br/>`hold`: Feed is paused, usually for administrative reasons. This usually indicates that the feed requires require corrective action before it can be resumed, for example, new FTP information.<br/>`completed`: If a feed was created with a stop date, this indicates that the feed has reached the stop date and will no longer run.<br/>`cancelled`: The feed is no longer needed, and can be deleted. |
|**`name`** |`string` | Feed display name. |
|**`ftp_host`** |`string` | FTP hostname where the feed is delivered. |
|**`ftp_path`** |`string` | Path on the FTP host where the feed is delivered. |
|**`fields`** |`string[]` | Array with a list of [Data Columns](https://experienceleague.adobe.com/docs/analytics/export/analytics-data-feed/data-feed-contents/datafeeds-reference.html) that are included in the feed. |

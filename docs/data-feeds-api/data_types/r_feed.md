# data\_feed

 

|Element|Type|Description|
|-------|----|-----------|
|`rsid` |``xsd:string`` | The report suite corresponding to the data feed. |
|`feed_id` |``xsd:int`` | Unique id for this data feed. |
|`interval` |``xsd:string`` | Delivery interval for the data feed. Either `Daily` or `Hourly`. **Daily**: Data for each day is delivered after it is processed in a single zipped file, or in multiple zipped files each containing approximately 2 GB of uncompressed data. You receive a single delivery for each day. **Hourly**: Data for each hour is delivered in a single zipped file that contains all data received during that hour. You receive 24 separate deliveries for each day, with each file delivered after the data for that hour is processed. |
|`activity` |Array of `xsd:string` | Array that contains the following: **job\_id**: Unique system id for the delivery job. **begin**: Start time of the reporting period contained in this delivery. Example: 2013-03-03 01:00:00 **end**: End time of the reporting period contained in this delivery. Example: 2013-03-03 02:00:00 **status**: current status of the job, one of the following: `processing` - Feed is currently being generated. `delivered`- Feed and manifest are delivered successfully and the job is completed.`upload_error` - Feed was generated but the transfer failed. In the event of an FTP transfer failure \(login denied, lost connection, out of quota, etc\), Adobe attempts to automatically connect and send the data up to three separate times. If the failures persist, the feed is marked as `upload_error`. `no_data` - No data was collected for delivery. |

## Example

```
Result:
{
  "data_feeds": [
    {
      "rsid": "myrsid",
      "feed_id": 1006552,
      "interval": "hourly",  //hourly, daily, ...
      "date": "2013-02-06",
      "activity": [{
         "job_id": 4233,
         "begin": "2013-03-03 01:00:00",
         "end": "2013-03-03 02:00:00",
         "status": "processing"  //processing, delivered, upload_error, no_data
      }]
    },
    ...
  ]
}

```

**Parent topic:** [Data Types](../data_types/c_data_types.md)


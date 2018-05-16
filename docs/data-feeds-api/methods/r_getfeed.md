# GetFeed

Gets configuration details for a specific feed, including feed status, FTP delivery location, and the data columns that are included in the feed.

## DataFeed.GetFeed Parameters

|Name|Type|Description|
|----|----|-----------|
|`feed_id` |``xsd:int`` | ID of the feed, retrieve the ID using DataFeed.[GetFeeds](r_getfeeds.md#). |

## DataFeed.GetFeed Response

| Type | Description |
|--------|---------------|
|[data_feed_details](../data_types/r_feed_details.md#) | Details for the specified feed. |

**Parent topic:** [Methods](../methods/methods.md)


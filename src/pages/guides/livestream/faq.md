# Frequently Asked Questions (FAQ)

Find answers to frequently-asked questions below.

## When initially connecting to a Livestream endpoint, how old is the data that starts streaming?

Livestream starts streaming data collected at the time of the client's connection. In the case of a client disconnect/reconnect, data is streamed from the point of disconnection. This brief backfill period only occurs if the disconnection is shorter than several minutes.

## How do I customize the reconnection backfill logic?

You can use the `reset` query string to request old or new data. For example, `?reset=largest` requests only the newest data from the stream and ignores data missed during reconnection. The `?reset=smallest` query string starts streaming the oldest data available and attempts to catch up to the present.

## What is the latency between when a hit is collected by Adobe and when it appears in Livestream?

Latency can range between 20 seconds and 5 minutes.

## Can I request uncompressed Livestream data?

No. Livestream requires clients to support [Gzip compression](https://www.gnu.org/software/gzip/manual/gzip.html) by default.

## What transfer encoding is used?

Livestream uses [Chunked transfer encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding). There can be more than one record per chunk, and each record is separated by a carriage return/line feed (CRLF). Many http client libraries handle chunked transfer encoding transparently.

## Can I create multiple connections to the same stream?

Yes. Use the `maxConnections` GET query parameter. If multiple connections are created, data is distributed across each connection. Data is grouped by visitor IDs, but is out of order. The `timestamp` field can be used to sort the hits. A best effort is made to evenly distribute hits. Because data is grouped by visitor ID, a visitor that produces a large volume of data can create differences in volumes for each client. A maximum of 8 connections is allowed.

If multiple instances of the same stream are required, Adobe recommends that you create infrastructure to replicate that data.

## How do I avoid receiving duplicate records?

The likelihood of receiving duplicate records increases during reconnect or when new clients connect to an existing stream. The `hitIdHigh` and `hitIdLow` columns can be used to deduplicate hits.

## What do I do with empty records?

Empty records are sometimes returned in the stream. These can be ignored.

## Where does Livestream occur in the data processing order?

Livestream data is only partially processed to mitigate latency. See [Processing order](https://experienceleague.adobe.com/docs/analytics/technotes/processing-order.html) in the Analytics technotes guide for more information.

Livestream includes basic processing, such as [Processing rules](https://experienceleague.adobe.com/docs/analytics/admin/admin-tools/processing-rules/processing-rules.html), VISTA rules, and geolocation lookups. It does **not** include persistence, such as eVars persisting data across hits within a visit. It also does not include visit-based or visitor-based data like visits, visit number, unique visitors, or customer loyalty.
